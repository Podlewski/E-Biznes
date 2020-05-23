package com.hawk.hawkapp.repository;

import com.hawk.hawkapp.model.Reservation;
import com.hawk.hawkapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
}
