package com.hawk.hawkapp.service.intf;

import com.hawk.hawkapp.model.Facility;

import java.util.List;

public interface FacilityService extends BaseService<Facility> {

    List<Facility> filter(String query);
}
