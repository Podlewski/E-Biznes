package com.hawk.hawkapp.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Data
@Entity
public class Reservation extends BaseEntity {

    @JsonIgnore
    @Column(name = "facility_id")
    private Long facilityId;

    @ManyToOne
    @JoinColumn(name = "facility_id", insertable = false, updatable = false)
    @JsonSerialize(using = ReservationFacilitySerializer.class)
    private Facility facility;

    @Column(name = "user_id")
    private Long userId;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id", insertable = false, updatable = false)
    private User user;

    @Column
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd", timezone="Europe/Berlin")
    private Timestamp creationDate;

    @Column
    @Convert(converter = ReservationStatusConverter.class)
    private ReservationStatus status;

    @Column
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm", timezone="Europe/Berlin")
    private Timestamp reservationDate;
}
