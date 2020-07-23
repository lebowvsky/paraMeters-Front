-- MySQL dump 10.13  Distrib 8.0.19, for osx10.15 (x86_64)
--
-- Host: localhost    Database: dive_parameters
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `belong_to`
--

DROP TABLE IF EXISTS `belong_to`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `belong_to` (
  `id` int NOT NULL AUTO_INCREMENT,
  `diver_id` int DEFAULT NULL,
  `diving_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_diver_belong_to` (`diver_id`),
  KEY `fk_diving_belong_to` (`diving_id`),
  CONSTRAINT `fk_diver_belong_to` FOREIGN KEY (`diver_id`) REFERENCES `diver` (`id_diver`),
  CONSTRAINT `fk_diving_belong_to` FOREIGN KEY (`diving_id`) REFERENCES `diving` (`id_diving`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `belong_to`
--

LOCK TABLES `belong_to` WRITE;
/*!40000 ALTER TABLE `belong_to` DISABLE KEYS */;
INSERT INTO `belong_to` VALUES (1,2,1),(2,3,3),(3,2,4);
/*!40000 ALTER TABLE `belong_to` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diver`
--

DROP TABLE IF EXISTS `diver`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diver` (
  `id_diver` int NOT NULL AUTO_INCREMENT,
  `lastname` varchar(100) DEFAULT NULL,
  `firstname` varchar(100) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `weight` int DEFAULT NULL,
  `height` float DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_diver`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diver`
--

LOCK TABLES `diver` WRITE;
/*!40000 ALTER TABLE `diver` DISABLE KEYS */;
INSERT INTO `diver` VALUES (1,'Valjean','Jean',45,86,1.85,'jean.valjean@gmail.com','miserable'),(2,'Le Gallo','Brice',40,81,186,'brice.legallo@free.fr','essai1'),(3,'Bechen','Michaël',36,85,184,'mika.b@hotmail.com','cousteau');
/*!40000 ALTER TABLE `diver` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diving`
--

DROP TABLE IF EXISTS `diving`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diving` (
  `id_diving` int NOT NULL AUTO_INCREMENT,
  `date_diving` date DEFAULT NULL,
  `deep` int DEFAULT NULL,
  `duration` int DEFAULT NULL,
  `gas` varchar(100) DEFAULT NULL,
  `localisation` varchar(255) DEFAULT NULL,
  `hour_diving` time DEFAULT NULL,
  PRIMARY KEY (`id_diving`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diving`
--

LOCK TABLES `diving` WRITE;
/*!40000 ALTER TABLE `diving` DISABLE KEYS */;
INSERT INTO `diving` VALUES (1,'2020-07-14',14,15,'Air','Bahamas','14:45:00'),(2,'2020-07-09',19,43,'Air','Brest','11:22:00'),(3,'2020-07-16',14,17,'Nitrox','Cherbourg','12:34:00'),(4,'2020-07-08',20,44,'Nitrox','Cherbourg','12:34:00');
/*!40000 ALTER TABLE `diving` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-23 23:44:40
