-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 25, 2016 at 02:11 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `carrepair`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE IF NOT EXISTS `customers` (
  `ID` int(10) NOT NULL AUTO_INCREMENT,
  `Name` varchar(25) NOT NULL,
  `Surname` varchar(25) NOT NULL,
  `Mobile` varchar(10) NOT NULL,
  `Addr` varchar(40) NOT NULL,
  `Make` varchar(30) NOT NULL,
  `Model` varchar(10) NOT NULL,
  `FuelType` varchar(20) NOT NULL,
  `EngSize` varchar(20) NOT NULL,
  `CarMil` varchar(20) NOT NULL,
  `ProblemDesc` text NOT NULL,
  `Date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`ID`, `Name`, `Surname`, `Mobile`, `Addr`, `Make`, `Model`, `FuelType`, `EngSize`, `CarMil`, `ProblemDesc`, `Date`) VALUES
(1, 'John', 'Smith', '12345', 'Ireland', 'BMW', 'X-5', 'Diesel', '3.0L', '123112km', 'change tyres, general service', '2016-04-25 12:05:13'),
(2, 'Chris', 'Mack', '21312412', 'USA', 'VOLVO', 'V40', 'Petrol', '2.0L', '123214km', 'general check', '2016-04-25 12:06:39'),
(3, 'Wayne', 'Johnson', '18213812', 'Sandwich Rd, UK', 'Renault', 'Megane', 'Diesel', '1.5', '123123km', 'pre-nct', '2016-04-25 12:07:44'),
(4, 'Martha', 'Bowe', '12412142', 'Madison Square Garden', 'Mercedes-Benz', 'A-Class', 'Petrol', '1.4', '98923km', 'brake pads and discs to be changed', '2016-04-25 12:09:42');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
