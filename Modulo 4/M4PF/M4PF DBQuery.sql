create table users (
user_id int auto_increment primary key not null,
username varchar(100) not null,
email varchar(100) not null,
age int not null);

insert into users (username, email, age)
values
('Alex', 'alexmail@email.com', 21),
('Arnoldo', 'arnoldomail@email.com', 20),
('Kevin', 'kevinmail@email.com', 20),
('Emiliano', 'emilianomail@email.com', 20);

select * from users