package com.hawk.hawkapp.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.sql.Timestamp;

@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Data
@Entity
public class User extends BaseEntity {

    @Column
    private String email;

    @Column
    private String passwordHash;

    @Column
    private String role;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private Timestamp birthDate;

    @Column
    private String phone;

    @Column
    private Boolean isBlocked;
}
