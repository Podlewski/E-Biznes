package com.hawk.hawkapp.service.impl;

import com.github.tennaito.rsql.jpa.JpaCriteriaQueryVisitor;
import com.hawk.hawkapp.model.Sport;
import com.hawk.hawkapp.repository.SportRepository;
import com.hawk.hawkapp.service.intf.SportService;
import cz.jirutka.rsql.parser.RSQLParser;
import cz.jirutka.rsql.parser.ast.RSQLVisitor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaQuery;
import java.util.Collections;
import java.util.List;

@Service
public class SportServiceImpl extends BaseServiceImpl<SportRepository, Sport>
        implements SportService {

    private final EntityManager entityManager;

    @Autowired
    public SportServiceImpl(SportRepository sportRepository,
                            EntityManager entityManager) {
        super(sportRepository);
        this.entityManager = entityManager;
    }

    @Override
    public List<Sport> filter(String query) {
        RSQLVisitor<CriteriaQuery<Sport>, EntityManager> rsqlVisitor = new JpaCriteriaQueryVisitor<>();
        CriteriaQuery<Sport> criteriaQuery = new RSQLParser().parse(query).accept(rsqlVisitor, entityManager);

        List<Sport> result = entityManager.createQuery(criteriaQuery).getResultList();

        return (result == null || result.isEmpty())
                ? Collections.emptyList()
                : result;
    }
}
