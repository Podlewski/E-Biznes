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
public class Schedule extends BaseEntity {

    @Column
    private String facilityId;

    @Column
    private Timestamp startDate;

    @Column
    private Timestamp endDate;

    @Column
    private Double cost;
}
