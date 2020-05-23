package com.hawk.hawkapp.service.impl;

import com.hawk.hawkapp.model.Report;
import com.hawk.hawkapp.repository.ReportRepository;
import com.hawk.hawkapp.service.intf.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReportServiceImpl extends BaseServiceImpl<ReportRepository, Report>
        implements ReportService {

    @Autowired
    public ReportServiceImpl(ReportRepository reportRepository) {
        super(reportRepository);
    }
}
