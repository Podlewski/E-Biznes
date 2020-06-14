package com.hawk.hawkapp.model.utils;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.hawk.hawkapp.model.Facility;

import java.io.IOException;
import java.util.List;

public class FacilitiesSerializer extends JsonSerializer<List<Facility>> {

    @Override
    public void serialize(List<Facility> value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
        gen.writeStartArray();
        for (Facility facility : value) {
            gen.writeStartObject();
            gen.writeStringField("facilityId", String.valueOf(facility.getId()));
            gen.writeStringField("facilityName", String.valueOf(facility.getName()));
            gen.writeEndObject();
        }
        gen.writeEndArray();
    }
}
