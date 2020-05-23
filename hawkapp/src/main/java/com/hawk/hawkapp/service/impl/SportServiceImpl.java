package com.hawk.hawkapp.service.impl;

import com.hawk.hawkapp.model.Sport;
import com.hawk.hawkapp.repository.SportRepository;
import com.hawk.hawkapp.service.intf.SportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SportServiceImpl extends BaseServiceImpl<SportRepository, Sport>
        implements SportService {

    @Autowired
    public SportServiceImpl(SportRepository sportRepository) {
        super(sportRepository);
    }
}
