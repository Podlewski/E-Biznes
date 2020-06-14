package com.hawk.hawkapp.service.impl;

import com.github.tennaito.rsql.jpa.JpaCriteriaQueryVisitor;
import com.hawk.hawkapp.model.Schedule;
import com.hawk.hawkapp.repository.ScheduleRepository;
import com.hawk.hawkapp.service.intf.ScheduleService;
import cz.jirutka.rsql.parser.RSQLParser;
import cz.jirutka.rsql.parser.ast.RSQLVisitor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaQuery;
import java.util.Collections;
import java.util.List;

@Service
public class ScheduleServiceImpl extends BaseServiceImpl<ScheduleRepository, Schedule>
        implements ScheduleService {

    private final EntityManager entityManager;

    @Autowired
    public ScheduleServiceImpl(ScheduleRepository scheduleRepository,
                               EntityManager entityManager) {
        super(scheduleRepository);
        this.entityManager = entityManager;
    }

    @Override
    public List<Schedule> filter(String query) {
        RSQLVisitor<CriteriaQuery<Schedule>, EntityManager> rsqlVisitor = new JpaCriteriaQueryVisitor<>();
        CriteriaQuery<Schedule> criteriaQuery = new RSQLParser().parse(query).accept(rsqlVisitor, entityManager);

        List<Schedule> result = entityManager.createQuery(criteriaQuery).getResultList();

        return (result == null || result.isEmpty())
                ? Collections.emptyList()
                : result;
    }
}
