-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: localhost    Database: dados20192n
-- ------------------------------------------------------
-- Server version	5.7.27-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `autores`
--

DROP TABLE IF EXISTS `autores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `autores` (
  `aut_codigo` int(11) NOT NULL AUTO_INCREMENT,
  `aut_nome` varchar(45) DEFAULT NULL,
  `aut_apelido` varchar(15) DEFAULT NULL,
  `aut_sexo` char(1) DEFAULT NULL,
  `aut_telefone` varchar(15) DEFAULT NULL,
  `aut_email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`aut_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `editoras`
--

DROP TABLE IF EXISTS `editoras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `editoras` (
  `edi_codigo` int(11) NOT NULL AUTO_INCREMENT,
  `edi_nome` varchar(45) DEFAULT NULL,
  `edi_cidade` varchar(15) DEFAULT NULL,
  `edi_cep` varchar(15) DEFAULT NULL,
  `edi_telefone` varchar(15) DEFAULT NULL,
  `edi_email` varchar(45) DEFAULT NULL,
  `edi_estado` char(2) DEFAULT NULL,
  PRIMARY KEY (`edi_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `livros`
--

DROP TABLE IF EXISTS `livros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `livros` (
  `liv_codigo` int(11) NOT NULL AUTO_INCREMENT,
  `liv_dtcadastro` date DEFAULT NULL,
  `liv_titulo` varchar(45) DEFAULT NULL,
  `liv_edicao` varchar(45) DEFAULT NULL,
  `liv_ano` decimal(10,0) DEFAULT NULL,
  `liv_ativoinativo` varchar(45) DEFAULT NULL,
  `liv_isbn` varchar(45) DEFAULT NULL,
  `edi_codigo` int(11) NOT NULL,
  `aut_codigo` int(11) NOT NULL,
  PRIMARY KEY (`liv_codigo`),
  KEY `fk_livros_editoras_idx` (`edi_codigo`),
  KEY `fk_livros_autores1_idx` (`aut_codigo`),
  CONSTRAINT `fk_livros_autores1` FOREIGN KEY (`aut_codigo`) REFERENCES `autores` (`aut_codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_livros_editoras` FOREIGN KEY (`edi_codigo`) REFERENCES `editoras` (`edi_codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-16 21:50:49
