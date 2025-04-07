drop database CONDOMINIO;
create database: condominio;
use condominio;

create table morador(
 id int not null auto_increment primary key,
 nome varchar(255) not null,
 bloco varchar(255) not null,
 email varchar(255) not null,
 senha varchar(255) not null,
 telefone varchar(255) not null,
 placa varchar(255) not null,
 cor_modelo varchar(255) not null,
 vaga  varchar(255) not null 
);

create table porteiro(
 id int not null auto_increment primary key,
 email varchar(255) not null,
 senha varchar(255) not null,
);

