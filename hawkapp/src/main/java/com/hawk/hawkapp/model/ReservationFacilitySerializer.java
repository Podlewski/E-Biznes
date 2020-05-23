package com.hawk.hawkapp.model;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

import java.io.IOException;

public class ReservationFacilitySerializer extends JsonSerializer<Facility> {

    @Override
    public void serialize(Facility value, JsonGenerator gen, SerializerProvider serializers) throws IOException {

        gen.writeStartObject();
        gen.writeStringField("facilityId", String.valueOf(value.id));
        gen.writeStringField("facilityName", String.valueOf(value.getName()));
        gen.writeEndObject();

    }
}
