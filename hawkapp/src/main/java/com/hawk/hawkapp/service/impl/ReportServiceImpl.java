package com.hawk.hawkapp.service.impl;

import com.github.tennaito.rsql.jpa.JpaCriteriaQueryVisitor;
import com.hawk.hawkapp.model.Report;
import com.hawk.hawkapp.repository.ReportRepository;
import com.hawk.hawkapp.service.intf.ReportService;
import cz.jirutka.rsql.parser.RSQLParser;
import cz.jirutka.rsql.parser.ast.RSQLVisitor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaQuery;
import java.util.Collections;
import java.util.List;

@Service
public class ReportServiceImpl extends BaseServiceImpl<ReportRepository, Report>
        implements ReportService {

    private final EntityManager entityManager;

    @Autowired
    public ReportServiceImpl(ReportRepository reportRepository,
                             EntityManager entityManager) {
        super(reportRepository);
        this.entityManager = entityManager;
    }

    @Override
    public List<Report> filter(String query) {
        RSQLVisitor<CriteriaQuery<Report>, EntityManager> rsqlVisitor = new JpaCriteriaQueryVisitor<>();
        CriteriaQuery<Report> criteriaQuery = new RSQLParser().parse(query).accept(rsqlVisitor, entityManager);

        List<Report> result = entityManager.createQuery(criteriaQuery).getResultList();

        return (result == null || result.isEmpty())
                ? Collections.emptyList()
                : result;
    }
}
