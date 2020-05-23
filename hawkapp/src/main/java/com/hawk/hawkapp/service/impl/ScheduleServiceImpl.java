package com.hawk.hawkapp.service.impl;

import com.hawk.hawkapp.model.Schedule;
import com.hawk.hawkapp.repository.ScheduleRepository;
import com.hawk.hawkapp.service.intf.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ScheduleServiceImpl extends BaseServiceImpl<ScheduleRepository, Schedule>
        implements ScheduleService {

    @Autowired
    public ScheduleServiceImpl(ScheduleRepository scheduleRepository) {
        super(scheduleRepository);
    }
}
