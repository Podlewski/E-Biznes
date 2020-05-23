package com.hawk.hawkapp.controller.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import lombok.Getter;

import java.io.Serializable;

@Getter
public class ReservationStatusDTO implements Serializable {
    String status;

    @JsonCreator
    ReservationStatusDTO() {
    }

    public ReservationStatusDTO(String value) {
        this.status = value;
    }
}
