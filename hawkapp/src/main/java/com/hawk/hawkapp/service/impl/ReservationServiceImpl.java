package com.hawk.hawkapp.service.impl;

import com.hawk.hawkapp.model.Reservation;
import com.hawk.hawkapp.repository.ReservationRepository;
import com.hawk.hawkapp.service.intf.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservationServiceImpl extends BaseServiceImpl<ReservationRepository, Reservation>
        implements ReservationService {

    @Autowired
    public ReservationServiceImpl(ReservationRepository reservationRepository) {
        super(reservationRepository);
    }
}
