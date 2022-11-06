/*
SQLyog Ultimate
MySQL - 10.4.11-MariaDB : Database - karya_talents
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `registration` */

CREATE TABLE `registration` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `pekerjaan` varchar(255) DEFAULT NULL,
  `gender` char(2) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `registration` */

insert  into `registration`(`id`,`nama`,`alamat`,`email`,`pekerjaan`,`gender`,`createdAt`,`updatedAt`) values (1,'Sigit Kurniawan','Pulogebang - Cakung\nJakarta Timur','kurniawan.sgt@gmail.com','Pegawai Swasta',NULL,'2022-11-06 10:49:10','2022-11-06 10:49:10');
insert  into `registration`(`id`,`nama`,`alamat`,`email`,`pekerjaan`,`gender`,`createdAt`,`updatedAt`) values (2,'Windu Gata','Ciledug\nTangerang','windu.gata@gmail.com','Dosen',NULL,'2022-11-06 10:49:39','2022-11-06 10:50:01');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
