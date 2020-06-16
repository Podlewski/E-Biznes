package com.hawk.hawkapp.service.impl;

import com.github.tennaito.rsql.jpa.JpaCriteriaQueryVisitor;
import com.hawk.hawkapp.model.Reservation;
import com.hawk.hawkapp.repository.ReservationRepository;
import com.hawk.hawkapp.service.intf.ReservationService;
import cz.jirutka.rsql.parser.RSQLParser;
import cz.jirutka.rsql.parser.ast.RSQLVisitor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaQuery;
import java.security.InvalidParameterException;
import java.util.Collections;
import java.util.List;

@Service
public class ReservationServiceImpl extends BaseServiceImpl<ReservationRepository, Reservation>
        implements ReservationService {

    private final EntityManager entityManager;

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    public ReservationServiceImpl(ReservationRepository reservationRepository,
                                  EntityManager entityManager) {
        super(reservationRepository);
        this.entityManager = entityManager;
    }

    @Override
    public Reservation add(Reservation reservation) {
        if (userService.findById(reservation.getUserId()).getIsBlocked()) {
            throw new InvalidParameterException();
        }

        return repository.save(reservation);
    }

    @Override
    public List<Reservation> filter(String query) {
        RSQLVisitor<CriteriaQuery<Reservation>, EntityManager> rsqlVisitor = new JpaCriteriaQueryVisitor<>();
        CriteriaQuery<Reservation> criteriaQuery = new RSQLParser().parse(query).accept(rsqlVisitor, entityManager);

        List<Reservation> result = entityManager.createQuery(criteriaQuery).getResultList();

        return (result == null || result.isEmpty())
                ? Collections.emptyList()
                : result;
    }
}
