package com.hawk.hawkapp.model;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

import static com.hawk.hawkapp.model.UserRole.*;

@Converter
public class UserRoleConverter implements AttributeConverter<UserRole, String> {
    @Override
    public String convertToDatabaseColumn(UserRole attribute) {
        switch (attribute) {
            case ADMINISTRATOR:
                return "ADMIN";
            case USER:
                return "USER";
            case ANIMATOR:
                return "ANIMATOR";
            default:
                throw new IllegalArgumentException("Unknown" + attribute);
        }
    }

    @Override
    public UserRole convertToEntityAttribute(String dbData) {
        switch (dbData) {
            case "ADMIN":
                return ADMINISTRATOR;
            case "USER":
                return USER;
            case "ANIMATOR":
                return ANIMATOR;
            default:
                throw new IllegalArgumentException("Unknown" + dbData);
        }
    }
}
