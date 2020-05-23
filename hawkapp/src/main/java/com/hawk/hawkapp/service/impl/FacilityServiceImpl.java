package com.hawk.hawkapp.service.impl;

import com.github.tennaito.rsql.jpa.JpaCriteriaQueryVisitor;
import com.hawk.hawkapp.model.Facility;
import com.hawk.hawkapp.repository.FacilityRepository;
import com.hawk.hawkapp.service.intf.FacilityService;
import cz.jirutka.rsql.parser.RSQLParser;
import cz.jirutka.rsql.parser.ast.RSQLVisitor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaQuery;
import java.util.Collections;
import java.util.List;

@Service
public class FacilityServiceImpl extends BaseServiceImpl<FacilityRepository, Facility>
        implements FacilityService {

    private final EntityManager entityManager;

    @Autowired
    public FacilityServiceImpl(FacilityRepository facilityRepository,
                               EntityManager entityManager) {
        super(facilityRepository);
        this.entityManager = entityManager;
    }

    public List<Facility> filter(String query) {
        RSQLVisitor<CriteriaQuery<Facility>, EntityManager> rsqlVisitor = new JpaCriteriaQueryVisitor<>();
        CriteriaQuery<Facility> criteriaQuery = new RSQLParser().parse(query).accept(rsqlVisitor, entityManager);

        List<Facility> result = entityManager.createQuery(criteriaQuery).getResultList();

        return (result == null || result.isEmpty())
                ? Collections.emptyList()
                : result;
    }
}
