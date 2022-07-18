CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE IF NOT EXISTS application_url(
    hash hash DEFAULT uuid_generate_v4(),
    originURL VARCHAR NOT NULL,
    shortURL VARCHAR NOT NULL,
    PRIMARY KEY (hash)
);

INSERT INTO application_url (originURL, shortURL) VALUES ('https://web.dio.me/lab/construindo-encurtador-de-url/learning/f320cebb-96ba-472a-a460-c0db2579fd54');