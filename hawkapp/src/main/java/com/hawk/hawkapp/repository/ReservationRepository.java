package com.hawk.hawkapp.repository;

import com.hawk.hawkapp.model.Reservation;
import com.hawk.hawkapp.model.ReservationStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    boolean existsByReservationDateBetweenOrEndDateBetweenAndStatusIsNotAndFacilityId(Date dateFrom, Date dateTo,
                                                                                      Date dateFrom2, Date dateTo2, ReservationStatus status, Long facilityId);

    List<Reservation> getByUserId(Long userId);
}
