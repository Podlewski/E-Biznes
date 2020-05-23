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
public class Sport extends BaseEntity {

    @Column
    private String name;
}
