package com.hawk.hawkapp.payload.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;

import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

@Getter
public class SignUpRequest {

    @NotNull
    private String email;

    @NotNull
    private String password;

    @NotNull
    private boolean isUser;

    @NotNull
    private String firstName;

    @NotNull
    private String lastName;

    @NotNull
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy", timezone = "Europe/Berlin")
    private Timestamp birthDate;

    @NotNull
    private String phone;


}
