package com.hawk.hawkapp.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @JsonIgnore
    @Column(name = "sport_id")
    private String sportId;

    @ManyToOne
    @JoinColumn(name = "sport_id", insertable = false, updatable = false)
    private Sport sport;

    @Column
    private String phone;

    @Column
    private Integer numberOfSubfacilities;

    @Column
    private Timestamp bookingDate;

    @Column
    private Timestamp pauseDate;

//    @JsonSerialize(using = ReservationSerializer.class)
    @OneToMany(mappedBy = "facility",
            cascade = CascadeType.ALL,
            fetch = FetchType.LAZY,
            orphanRemoval = true)
    private List<Reservation> reservations;
}
