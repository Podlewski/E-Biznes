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

    @GetMapping
    List<Report> findAll() {
        return reportService.findAll();
    }

    @GetMapping(value = "/{id}")
    Report findById(@PathVariable("id") Long id) {
        return reportService.findById(id);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable("id") Long id) {
        reportService.delete(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void add(@RequestBody Report report) {
        reportService.add(report);
    }
}
