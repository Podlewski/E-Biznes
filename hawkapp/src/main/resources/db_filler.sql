INSERT INTO User (id, email, password, role, first_Name,last_Name, birth_Date, phone, is_Blocked) VALUES
    (0, 'email@gmail.pl', 'hasz', 'USER', 'Jan', 'Nowak', '2100-08-02 01:00:00', '000', FALSE),
    (1, 'email2@gmail.pl', 'hasz', 'USER', 'Adam', 'Nowacki', '2100-08-02 01:00:00', '000', FALSE);


INSERT INTO Sport VALUES -- ID, ADDRESS, ANIMATOR_ID, BOOKING_DATE, CITY, NAME, NUMBER_OF_SUBFACILITIES, PAUSE_DATE, PHONE, POSTCODE, SPORT_ID
    (0, 'volleyball'),
    (1, 'basketball'),
    (2, 'baseball'),
    (3, 'golf'),
    (4, 'dance');

INSERT INTO Facility ( ID, ADDRESS, ANIMATOR_ID, BOOKING_DATE, CITY, NAME, NUMBER_OF_SUBFACILITIES, PAUSE_DATE, PHONE, POSTCODE, SPORT_ID, PRICE)
    VALUES
    (0, 'Włókniarzy 15', 0, '2100-08-02 01:00:00', 'Łódź', 'Fit fabric', 1, '2100-08-02 01:00:00', '700800990', '98069', 3, 200),
    (1, 'Pabiancika 1', 0, '2100-08-02 01:00:00', 'Łódź', 'Fit fabric 2.0', 1, '2100-08-02 01:00:00', '56800990', '90569', 2, 350),
    (2, 'Mickiewiwcza 15', 0, '2100-08-02 01:00:00', 'Warszawa', 'DanceZone', 1, '2100-08-02 01:00:00', '703400990', '10569', 4, 978),
    (3, 'Zerka 15', 1, '2100-08-02 01:00:00', 'Warszawa', 'Fittownia', 1, '2100-08-02 01:00:00', '42800990', '10569', 0, 1045),
    (4, 'baldman st 69', 1, '2100-08-02 01:00:00', 'Los Ageless', 'Pump Castle', 1, '2100-08-02 01:00:00', '4201337', '90210', 1, 450),
    (5, 'baldman st 69', 1, '2100-08-02 01:00:00', 'Los Ageless', 'Pump Castle', 1, '2100-08-02 01:00:00', '4201337', '90210', 1, 300);


INSERT INTO Reservation (id, facility_id, user_id, creation_Date, status, reservation_Date, end_date) VALUES
    (0,0,0,'2020-08-02 01:00:00', 'PAYED', '2020-06-02 12:00:00', '2020-06-02 13:00:00'),
    (1,0,1,'2020-08-02 01:00:00', 'PAYED', '2020-06-02 15:00:00', '2020-06-02 16:00:00');
