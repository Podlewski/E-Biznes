package com.hawk.hawkapp.controller.dto;

import com.hawk.hawkapp.model.ReservationStatus;

import java.util.stream.Stream;

public class ReservationStatusDTOConverter {
    public static ReservationStatus convertToReservationStatus(ReservationStatusDTO statusDTO)
            throws Exception {
        return Stream.of(ReservationStatus.values())
                .filter(type -> type.name().equals(statusDTO.getStatus().toUpperCase()))
                .findAny()
                .orElseThrow(Exception::new);
    }
}
