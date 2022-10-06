CREATE TABLE "todos" (
  "id" uuid PRIMARY KEY,
  "title" varchar NOT NULL,
  "description" varchar UNIQUE NOT NULL,
  "is_completed" bool DEFAULT false
);
