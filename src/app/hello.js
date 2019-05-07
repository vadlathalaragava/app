console.log("Swathi");

mysql> CREATE TABLE movie (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
moviename VARCHAR(30) NOT NULL, 
language VARCHAR(30) NOT NULL,
imageurl VARCHAR(100) NOT NULL,
productionhouse VARCHAR(30) NOT NULL,
ratiing INT(10) NULL,
type VARCHAR(100) NULL,
releasedate DATE) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;


INSERT INTO movie (id, 
moviename, 
language,
imageurl,
productionhouse,
ratiing,
type,
releasedate)
VALUES (1,
    'Bhahubhali', 
    'Telugu',
    '',
    'ABC',
    10,
    'Epic',
    '2017-10-01'
    )

    INSERT INTO movie (id, 
        moviename, 
        language,
        imageurl,
        productionhouse,
        ratiing,
        type,
        releasedate)
        VALUES (3,
            'Jersy', 
            'Telugu',
            'https://upload.wikimedia.org/wikipedia/en/4/41/Jersey_%28film%29.jpg',
            'ABCD',
            10,
            'Romantic',
            '2019-05-01'
            )
            INSERT INTO movie VALUES
            (3,'Jersy', 2019, 'https://upload.wikimedia.org/wikipedia/en/4/41/Jersey_%28film%29.jpg', 'Australia X',4, 'fiction','Telugu','2019-02-01' );

    INSERT INTO movie VALUES
(1,'Bahu bali 2', 2017, '', 'ABC Movies',5, 'epic','Telugu','2017-10-01' );


INSERT INTO movie VALUES
(2,'Captain Marvel', 2019, 'https://contentserver.com.au/assets/667514_captain_marvel_v8.jpg', 'Australia X',4, 'fiction','English','2019-02-01' );