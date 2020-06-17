package com.hawk.hawkapp.controller;

import com.hawk.hawkapp.model.Facility;
import com.hawk.hawkapp.service.intf.FacilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping("/facility")
public class FacilityController {

    @Autowired
    private FacilityService facilityService;

    @GetMapping
    List<Facility> findAll() {
        return facilityService.findAll();
    }

    @GetMapping(value = "/{id}")
    Facility findById(@PathVariable("id") Long id) {
        return facilityService.findById(id);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable("id") Long id) {
        facilityService.delete(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Facility add(@RequestBody Facility facility) throws Exception {
        if (facility.getCity() == null || facility.getAddress() == null || facility.getAnimatorId() == null || facility.getPrice() == null)
            throw new Exception("Fill data");
        return facilityService.add(facility);
    }

    @GetMapping(value = "/filter")
        // /facility/filter?search=address==address
    List<Facility> filter(@RequestParam(value = "search") String query) {
        return facilityService.filter(query);
    }
}
