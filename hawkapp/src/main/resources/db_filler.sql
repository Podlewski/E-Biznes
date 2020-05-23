INSERT INTO User (id, email, password_hash, role, first_Name,last_Name, birth_Date, phone, is_Blocked) VALUES
    (0, 'email@gmail.pl', 'hasz', 'USER', 'Jan', 'Nowak', '2100-08-02 01:00:00', '000', FALSE),
    (1, 'email2@gmail.pl', 'hasz', 'USER', 'Adam', 'Nowacki', '2100-08-02 01:00:00', '000', FALSE);


INSERT INTO Sport VALUES -- ID, ADDRESS, ANIMATOR_ID, BOOKING_DATE, CITY, NAME, NUMBER_OF_SUBFACILITIES, PAUSE_DATE, PHONE, POSTCODE, SPORT_ID
    (0, 'volleyball'),
    (1, 'basketball');

INSERT INTO Facility VALUES -- ID, ADDRESS, ANIMATOR_ID, BOOKING_DATE, CITY, NAME, NUMBER_OF_SUBFACILITIES, PAUSE_DATE, PHONE, POSTCODE, SPORT_ID
    (0, 'address', 0, '2100-08-02 01:00:00', 'city', 'name', 1, '2100-08-02 01:00:00', 'phone', 'postcode', 0);

INSERT INTO Reservation (id, facility_id, user_id, creation_Date, status, reservation_Date) VALUES
    (0,0,0,'2020-08-02 01:00:00', 'PAYED', '2020-06-02 01:00:00'),
    (1,0,1,'2020-08-02 01:00:00', 'PAYED', '2020-05-02 01:00:00');
