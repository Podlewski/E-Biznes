package com.hawk.hawkapp.controller;

import com.hawk.hawkapp.model.Report;
import com.hawk.hawkapp.service.intf.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/report")
public class ReportController {

    @Autowired
    private ReportService reportService;

    @GetMapping(value = "/{id}")
    Report fingById(@PathVariable("id") Long id) {
        return reportService.findById(id);
    }

    @GetMapping(value = "")
    List<Report> fingAll() {
        return reportService.findAll();
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable("id") Long id) {
        reportService.delete(id);
    }

    @PostMapping(value = "")
    @ResponseStatus(HttpStatus.CREATED)
    public Report add(@RequestBody Report report) {
        return reportService.add(report);
    }
}
