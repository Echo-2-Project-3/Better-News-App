create table users (
    id int(11) not null auto_increment;
    userName VARCHAR (45) not NULL,
    email VARCHAR (45) not null,
    password VARCHAR (45) not null,
    doppel_me VARCHAR (255) null,
    socialInterest BOOLEAN default false,
    optimismInterest BOOLEAN default false,
    score INTEGER (45) not null,
    createdAt TIMESTAMP NOT NULL default now() on update now(),
    updatedAt TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
    PRIMARY KEY (id)
);