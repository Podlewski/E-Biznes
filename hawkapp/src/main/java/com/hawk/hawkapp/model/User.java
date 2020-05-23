package com.hawk.hawkapp.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

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
    @Convert(converter = UserRoleConverter.class)
    private UserRole role;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd", timezone="Europe/Berlin")
    private Timestamp birthDate;

    @Column
    private String phone;

    @Column
    private Boolean isBlocked = Boolean.FALSE;

    @JsonSerialize(using = FacilitiesSerializer.class)
    @OneToMany(mappedBy = "animator",
            cascade = CascadeType.ALL,
            fetch = FetchType.LAZY,
            orphanRemoval = true)
    private List<Facility> facilities;
}
