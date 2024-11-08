DROP TABLE IF EXISTS jokes;
DROP TABLE if EXISTS categories; 


CREATE TABLE categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(106) UNIQUE NOT NULL
);

CREATE TABLE jokes (
	jokeId INTEGER PRIMARY KEY AUTOINCREMENT,
	setup VARCHAR(106) NOT NULL,
    delivery VARCHAR(106) NOT NULL,
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- Insert categories
INSERT INTO categories (name) 
VALUES ('funnyJoke'), ('lameJoke');

-- Insert jokes with category references
INSERT INTO jokes (setup, delivery, category_id)
VALUES 
    ('Why did the student eat his homework?', 'Because the teacher told him it was a piece of cake!', 1),
    ('What kind of tree fits in your hand?', 'A palm tree', 1),
    ('What is worse than raining cats and dogs?', 'Hailing taxis', 1),
    ('Which bear is the most condescending?', 'Pan-DUH', 2),
    ('What would the Terminator be called in his retirement?', 'The Exterminator', 2);
