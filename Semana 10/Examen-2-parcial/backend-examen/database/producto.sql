create database producto_examen_db;
use producto_examen_db;

create table Producto(
	id int primary key auto_increment,
    nombre varchar(255),
    precio int,
    estado enum('disponible', 'no disponible') default 'disponible',
    categoria varchar(255),
    url_foto varchar(255)
);