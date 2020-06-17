package com.hawk.hawkapp.repository;

import com.hawk.hawkapp.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    boolean existsByReservationDateBetweenOrEndDateBetween(Date dateFrom, Date dateTo, Date dateFrom2, Date dateTo2);
}
