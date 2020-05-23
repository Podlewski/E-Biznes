package com.hawk.hawkapp.model.utils;

import com.hawk.hawkapp.model.ReservationStatus;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

import static com.hawk.hawkapp.model.ReservationStatus.*;

@Converter
public class ReservationStatusConverter implements AttributeConverter<ReservationStatus, String> {
    @Override
    public String convertToDatabaseColumn(ReservationStatus attribute) {
        switch (attribute) {
            case CANCELLED:
                return "CANCELLED";
            case NOT_PAYED:
                return "NOT_PAYED";
            case PAYED:
                return "PAYED";
            default:
                throw new IllegalArgumentException("Unknown" + attribute);
        }
    }

    @Override
    public ReservationStatus convertToEntityAttribute(String dbData) {
        switch (dbData) {
            case "CANCELLED":
                return CANCELLED;
            case "NOT_PAYED":
                return NOT_PAYED;
            case "PAYED":
                return PAYED;
            default:
                throw new IllegalArgumentException("Unknown" + dbData);
        }
    }
}
