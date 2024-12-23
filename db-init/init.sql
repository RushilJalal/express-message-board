CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    text VARCHAR(100) NOT NULL,
    "user" VARCHAR(100) NOT NULL,
    added varchar(100) NOT NULL
);
INSERT INTO messages (text, "user", added) VALUES ('Hello', 'John', '2024-12-20T20:08:30+05:30');
