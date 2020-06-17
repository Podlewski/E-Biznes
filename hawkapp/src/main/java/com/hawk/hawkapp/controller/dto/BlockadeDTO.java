package com.hawk.hawkapp.controller.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import lombok.Getter;

import java.io.Serializable;

@Getter
public class BlockadeDTO implements Serializable {
    private static final long serialVersionUID = -1051382799434429501L;
    Boolean isBlocked;

    @JsonCreator
    BlockadeDTO() {
    }

    public BlockadeDTO(Boolean value) {
        this.isBlocked = value;
    }
}
