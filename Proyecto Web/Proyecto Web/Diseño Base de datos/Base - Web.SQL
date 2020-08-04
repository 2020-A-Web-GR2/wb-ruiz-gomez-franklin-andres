/*
Created: 3/8/2020
Modified: 3/8/2020
Model: MySQL 8.0
Database: MySQL 8.0
*/

-- Create tables section -------------------------------------------------

-- Table Deportista

CREATE TABLE `Deportista`
(
  `cedula` Int NOT NULL,
  `nombre_deportista` Varchar(30) NOT NULL,
  `telefono_deportista` Int NOT NULL,
  `id_membresia` Int,
  `id_gimnasio` Int
)
;

CREATE INDEX `IX_Relationship14` ON `Deportista` (`id_membresia`, `id_gimnasio`)
;

ALTER TABLE `Deportista` ADD PRIMARY KEY (`cedula`)
;

-- Table Membresia

CREATE TABLE `Membresia`
(
  `id_membresia` Int NOT NULL,
  `fecha_inicio_membresia` Date NOT NULL,
  `fecha_fin_membresia` Date NOT NULL,
  `precio_membresia` Float NOT NULL,
  `id_gimnasio` Int NOT NULL
)
;

ALTER TABLE `Membresia` ADD PRIMARY KEY (`id_membresia`, `id_gimnasio`)
;

-- Table Horario

CREATE TABLE `Horario`
(
  `id_horario` Int NOT NULL,
  `hora_inicio_horario` Time NOT NULL,
  `hora_fin_horario` Time NOT NULL,
  `id_gimnasio` Int
)
;

CREATE INDEX `IX_Relationship15` ON `Horario` (`id_gimnasio`)
;

ALTER TABLE `Horario` ADD PRIMARY KEY (`id_horario`)
;

-- Table Gimnasio

CREATE TABLE `Gimnasio`
(
  `id_gimnasio` Int NOT NULL,
  `nombre_gimnasio` Varchar(50) NOT NULL,
  `aforo_gimnasio` Int NOT NULL,
  `direccion_gimnasio` Varchar(50) NOT NULL
)
;

ALTER TABLE `Gimnasio` ADD PRIMARY KEY (`id_gimnasio`)
;

-- Table Deportista_Reserva_Horario

CREATE TABLE `Deportista_Reserva_Horario`
(
  `cedula` Int NOT NULL,
  `id_horario` Int NOT NULL,
  `id_reserva` Int NOT NULL,
  `fecha_reserva` Date NOT NULL,
  `hora_reserva` Time NOT NULL
)
;

ALTER TABLE `Deportista_Reserva_Horario` ADD PRIMARY KEY (`cedula`, `id_horario`, `id_reserva`)
;

-- Create foreign keys (relationships) section -------------------------------------------------

ALTER TABLE `Deportista_Reserva_Horario` ADD CONSTRAINT `Realiza` FOREIGN KEY (`cedula`) REFERENCES `Deportista` (`cedula`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `Deportista_Reserva_Horario` ADD CONSTRAINT `Pertenece` FOREIGN KEY (`id_horario`) REFERENCES `Horario` (`id_horario`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `Deportista` ADD CONSTRAINT `Adquiere` FOREIGN KEY (`id_membresia`, `id_gimnasio`) REFERENCES `Membresia` (`id_membresia`, `id_gimnasio`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `Horario` ADD CONSTRAINT `Ofrece` FOREIGN KEY (`id_gimnasio`) REFERENCES `Gimnasio` (`id_gimnasio`) ON DELETE RESTRICT ON UPDATE RESTRICT
;

ALTER TABLE `Membresia` ADD CONSTRAINT `Tiene` FOREIGN KEY (`id_gimnasio`) REFERENCES `Gimnasio` (`id_gimnasio`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


