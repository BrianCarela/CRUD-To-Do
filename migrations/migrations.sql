-- database is called 'todolist'
DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks(
  id SERIAL PRIMARY KEY,
  subject VARCHAR(60) NOT NULL,
  content VARCHAR (255) NOT NULL
)

INSERT INTO tasks(subject, content) VALUES
(
  'Ho3k site',
  're-do that website in full stack'
),
(
  'Simon',
  'Add a database to the game for fun'
)
