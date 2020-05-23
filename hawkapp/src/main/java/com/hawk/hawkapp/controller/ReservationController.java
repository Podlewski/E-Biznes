package com.hawk.hawkapp.controller;

import com.hawk.hawkapp.controller.dto.ReservationStatusDTO;
import com.hawk.hawkapp.controller.dto.ReservationStatusDTOConverter;
import com.hawk.hawkapp.model.Reservation;
import com.hawk.hawkapp.service.intf.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reservation")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @GetMapping(value = "/{id}")
    Reservation findById(@PathVariable("id") Long id) {
        return reservationService.findById(id);
    }

    @PostMapping(value = "")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservation add(@RequestBody Reservation reservation) {
        return reservationService.add(reservation);
    }

    @PatchMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateStatus(@RequestBody ReservationStatusDTO statusDTO,
                             @PathVariable("id") Long id) throws Exception {
        Reservation reservation = reservationService.findById(id);

        reservation.setStatus(ReservationStatusDTOConverter.convertToReservationStatus(statusDTO));

        reservationService.update(reservation, id);
    }
}
