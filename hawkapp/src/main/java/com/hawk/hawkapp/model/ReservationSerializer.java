package com.hawk.hawkapp.model;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

import java.io.IOException;
import java.sql.Timestamp;
import java.util.List;

public class ReservationSerializer extends JsonSerializer<List<Reservation>> {

    @Override
    public void serialize(List<Reservation> value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());

        gen.writeStartArray();
        for (Reservation reservation : value) {
            if (reservation.getReservationDate().after(timestamp)
                    && reservation.getStatus().equals(ReservationStatus.CANCELLED))
                gen.writeStartObject();
            gen.writeStringField("reservationId", String.valueOf(reservation.id));
            gen.writeStringField("reservationDate", String.valueOf(reservation.getReservationDate()));
            gen.writeEndObject();
        }
        gen.writeEndArray();
    }
}
