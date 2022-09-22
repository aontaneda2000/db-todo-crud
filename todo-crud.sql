CREATE TABLE "tasks" (
  "id" uuid PRIMARY KEY,
  "title" varchar NOT NULL,
  "description" varchar UNIQUE NOT NULL,
  "state" bool NOT NULL
);

insert into tasks(
	id,title ,description ,state
)
values(
	'c9e20457-b6fd-44b5-b708-72a6e5410b67',
	'tasks1',
	'do task1 today 3pm',
	false
),
(
	'd4e25c0f-61ec-445b-b761-993af1871b35',
	'tasks2',
	'do task2 tuesday 1pm',
	true
)
,
(
	'f1033ed7-0282-44e8-a984-b230f687ab3f',
	'tasks3',
	'do task3 friday 2pm',
	false
);

--consultas get

select * from tasks;
select * from  tasks where state = true;
