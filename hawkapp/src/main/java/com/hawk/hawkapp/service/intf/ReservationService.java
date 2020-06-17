package com.hawk.hawkapp.service.intf;

import com.hawk.hawkapp.model.Reservation;

import java.util.List;

public interface ReservationService extends BaseService<Reservation> {
    List<Reservation> findByUserId(Long userId);
}
