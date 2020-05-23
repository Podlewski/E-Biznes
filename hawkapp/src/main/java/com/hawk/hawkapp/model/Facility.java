package com.hawk.hawkapp.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Data
@Entity
public class Facility extends BaseEntity {

    @Column(name = "animator_id")
    private String animatorId;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "animator_id", insertable = false, updatable = false)
    private User animator;

    @Column
    private String name;

    @Column
    private String address;

    @Column
    private String postcode;

    @Column
    private String city;

    @Column
    private String sportId;

    @Column
    private String phone;

    @Column
    private Integer numberOfSubfacilities;

    @Column
    private Timestamp bookingDate;

    @Column
    private Timestamp pauseDate;
}
