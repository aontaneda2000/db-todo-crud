CREATE TABLE "users" (
  "id_users" uuid PRIMARY KEY,
  "name" varchar NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "password" varchar NOT NULL,
  "age" varchar NOT NULL,
  "is_active" bool DEFAULT true,
  "roles_id" uuid NOT NULL
);

CREATE TABLE "courses" (
  "id_courses" uuid PRIMARY KEY,
  "title" varchar UNIQUE NOT NULL,
  "description" varchar NOT NULL,
  "level" varchar NOT NULL,
  "teacher" varchar NOT NULL,
  "user_id" uuid NOT NULL,
  "categories_id" uuid NOT NULL,
  "courses_video" uuid NOT NULL
);

CREATE TABLE "course_video" (
  "id_course_video" uuid PRIMARY KEY,
  "title" varchar NOT NULL,
  "url" varchar NOT NULL
);

CREATE TABLE "categories" (
  "id_categories" uuid PRIMARY KEY,
  "name" varchar NOT NULL
);

CREATE TABLE "roles" (
  "id_roles" uuid PRIMARY KEY,
  "name" varchar NOT NULL
);

ALTER TABLE "courses" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id_users");

ALTER TABLE "courses" ADD FOREIGN KEY ("categories_id") REFERENCES "categories" ("id_categories");

ALTER TABLE "users" ADD FOREIGN KEY ("roles_id") REFERENCES "roles" ("id_roles");

ALTER TABLE "courses" ADD FOREIGN KEY ("courses_video") REFERENCES "course_video" ("id_course_video");


select * from roles;
insert into roles(
	id_roles,
	name
) values(
	'25e0d2ec-3fd3-4fb3-9a61-2d90fa959010',
	'student'
	
),(
	'4d860712-0626-40ef-a38d-ed1bc3552859',
	'teacher'

),(
	'34cf7bbd-fa3b-40d7-a1b2-44adb6c41075',
	'admin'

)

select * from users;

insert into users (
	id_users,
	name,
	email,
	password,
	age,
	is_active,
	roles_id
) values(
	'9fe3106c-7b72-4721-a5a6-f27d4e47efd8',
	'Aaron',
	'aron_ch38@outlook.com',
	'Hola123',
	22,
	true,
	'34cf7bbd-fa3b-40d7-a1b2-44adb6c41075'
),(
	'c42016d7-a117-44a3-9142-4cd95489f21b',
	'Artos',
	'artos@hotmail.com',
	'artos212',
	22,
	true,
	'25e0d2ec-3fd3-4fb3-9a61-2d90fa959010'

)

select * from categories

insert into categories(
	id_categories,
	name

)values(
	'0b90fee2-94de-4810-a645-74d3cbb26287',
	'Desarrollo web'

), (
	'9cb8452e-99d3-46d4-84ca-58c87b3fd843',
	'Desarrollo movil'
	
)	

select * from course_video

insert into course_video (
	id_course_video,
	title,
	url

)values(
	'e445aa59-1ac9-48e9-a174-0a4ac53ae171',
	'Curso de Javascript desde Cero',
	'https://fazt.com/javascript'
	
), (
	'7c6c9806-2ee3-4fed-a831-2a927dd3f334',
	'Curso de React desde Cero',
	'https://fazt.com/react'

)

select * from courses;

insert into courses (
	id_courses,
	title,
	description,
	level,
	teacher,
	user_id,
	categories_id,
	courses_video

)values(
	'02ce6a4a-01ae-4ef8-83b1-4e9ed1834869',
	'Javascript',
	'Aprende el lenguaje mas moderno de la web',
	'Principiantes',
	'Pildoras informatiacas',
	'9fe3106c-7b72-4721-a5a6-f27d4e47efd8',
	'0b90fee2-94de-4810-a645-74d3cbb26287',
	'e445aa59-1ac9-48e9-a174-0a4ac53ae171'
), (
	'e8d091e6-37df-4d38-a4b9-667d8ac42166',
	'React',
	'Aprende el framework mas utilizado de JS',
	'Principiantes',
	'Miguel Angel Duran',
	'c42016d7-a117-44a3-9142-4cd95489f21b',
	'0b90fee2-94de-4810-a645-74d3cbb26287',
	'7c6c9806-2ee3-4fed-a831-2a927dd3f334'

)

