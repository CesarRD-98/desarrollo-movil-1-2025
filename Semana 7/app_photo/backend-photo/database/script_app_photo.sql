create database app_photo;
use app_photo;

create table Image (
	idImage int primary key auto_increment,
    nameImage varchar(150),
    pathImage varchar(255)
);

