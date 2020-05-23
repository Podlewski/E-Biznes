package com.hawk.hawkapp.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;

@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Data
@Entity
public class Report extends BaseEntity {

    @Column
    private Long reporterId;

    @Column
    private Long reportedId;

    @Column(columnDefinition = "TEXT")
    private String message;
}
