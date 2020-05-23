package com.hawk.hawkapp.controller;

import com.hawk.hawkapp.model.Facility;
import com.hawk.hawkapp.service.intf.FacilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/facility")
public class FacilityController {

    @Autowired
    private FacilityService facilityService;

    @GetMapping(value = "/filter") // /facility/filter?search=address==address
    List<Facility> filter(@RequestParam(value = "search") String query) {
        return facilityService.filter(query);
    }
}
