package com.hawk.hawkapp.service.impl;

import com.github.tennaito.rsql.jpa.JpaCriteriaQueryVisitor;
import com.hawk.hawkapp.model.User;
import com.hawk.hawkapp.repository.UserRepository;
import com.hawk.hawkapp.service.intf.UserService;
import cz.jirutka.rsql.parser.RSQLParser;
import cz.jirutka.rsql.parser.ast.RSQLVisitor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaQuery;
import java.security.InvalidParameterException;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.Period;
import java.util.Collections;
import java.util.List;

@Service
public class UserServiceImpl extends BaseServiceImpl<UserRepository, User>
        implements UserService {

    private final EntityManager entityManager;

    @Autowired
    public UserServiceImpl(UserRepository userRepository,
                           EntityManager entityManager) {
        super(userRepository);
        this.entityManager = entityManager;
    }

    @Override
    public User add(User user) {
        LocalDate now = new Timestamp(System.currentTimeMillis()).toLocalDateTime().toLocalDate();
        if (user.getBirthDate() != null
                && Period.between(user.getBirthDate().toLocalDateTime().toLocalDate(), now).getYears() < 16) {
            throw new InvalidParameterException();
        }

        if (user.getEmail() != null
                && repository.findAll().stream().anyMatch(x -> x.getEmail().equals(user.getEmail()))) {
            throw new InvalidParameterException();
        }

        return repository.save(user);
    }

    @Override
    public List<User> filter(String query) {
        RSQLVisitor<CriteriaQuery<User>, EntityManager> rsqlVisitor = new JpaCriteriaQueryVisitor<>();
        CriteriaQuery<User> criteriaQuery = new RSQLParser().parse(query).accept(rsqlVisitor, entityManager);

        List<User> result = entityManager.createQuery(criteriaQuery).getResultList();

        return (result == null || result.isEmpty())
                ? Collections.emptyList()
                : result;
    }
}
