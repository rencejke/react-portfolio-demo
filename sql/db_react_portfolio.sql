-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 12, 2024 at 08:43 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_react_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `about_aid` int(11) NOT NULL,
  `about_title` varchar(40) NOT NULL,
  `about_description_1` varchar(600) NOT NULL,
  `about_description_2` varchar(600) NOT NULL,
  `about_image` varchar(100) NOT NULL,
  `about_is_active` tinyint(1) NOT NULL,
  `about_btn_title` varchar(20) NOT NULL,
  `about_datetime` varchar(20) NOT NULL,
  `about_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`about_aid`, `about_title`, `about_description_1`, `about_description_2`, `about_image`, `about_is_active`, `about_btn_title`, `about_datetime`, `about_created`) VALUES
(1, 'About Me', 'I am a web developer, designer, and student at Laguna State Polytechnic University, pursuing a Bachelor of Science in Information Technology majoring in Web and Mobile Application Development in the Philippines. I am passionate about creating and designing websites.', 'I thrive on challenges and consistently seek opportunities to expand my knowledge. Currently, I am exploring Crypto, NFTs, DeFi, and the Metaverse.</p>', '../../profile2.jpg', 1, 'Download CV', '2024-05-11 20:09:14', '2024'),
(4, 'dbsdjbsdhjbshd', 'dsdsadsad', 'sdsadsad', 'sadsads', 0, 'sddds', '2024-05-11 18:22:14', '2024-05-11 16:16:51');

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `banner_aid` int(11) NOT NULL,
  `banner_title_1` varchar(40) NOT NULL,
  `banner_title_2` varchar(40) NOT NULL,
  `banner_image` varchar(200) NOT NULL,
  `banner_is_active` tinyint(1) NOT NULL,
  `banner_description` varchar(600) NOT NULL,
  `banner_btn_title` varchar(30) NOT NULL,
  `banner_datetime` varchar(20) NOT NULL,
  `banner_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `banner`
--

INSERT INTO `banner` (`banner_aid`, `banner_title_1`, `banner_title_2`, `banner_image`, `banner_is_active`, `banner_description`, `banner_btn_title`, `banner_datetime`, `banner_created`) VALUES
(1, 'Hi, My Name is Clarence, Im a', 'Web Designer and Developer', '../../profile1.png', 1, 'My passion lies in crafting stunning websites that not only captivate users but also provide seamless functionality. I specialize in creating beautiful and functional websites. Let\\\'s build something amazing together!', 'See My Work', '2024-05-11 09:11:17', '2024-05-11 09:11:17'),
(4, 'test', 'test32', 'test33', 0, 'asasasasasasasa', 'adsasa', '2024-05-11 11:34:01', '2024-05-11 09:37:18'),
(5, 'asewasas', 'asasasa', 'asasa', 0, 'assasas', 'asasas', '2024-05-11 11:34:08', '2024-05-11 09:39:50'),
(6, 'asasa', 'assasa', 'asas', 0, 'asas', 'asasas', '2024-05-11 16:59:21', '2024-05-11 09:39:56');

-- --------------------------------------------------------

--
-- Table structure for table `exp`
--

CREATE TABLE `exp` (
  `exp_aid` int(11) NOT NULL,
  `exp_image` varchar(100) NOT NULL,
  `exp_image_animation` varchar(20) NOT NULL,
  `exp_is_active` tinyint(1) NOT NULL,
  `exp_datetime` varchar(20) NOT NULL,
  `exp_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `exp`
--

INSERT INTO `exp` (`exp_aid`, `exp_image`, `exp_image_animation`, `exp_is_active`, `exp_datetime`, `exp_created`) VALUES
(1, '../../html5.svg', 'fade-right', 1, '2024-05-12 00:02:46', '2024-05-11 22:59:50'),
(2, '../../css.svg', 'fade-up', 1, '2024-05-12 00:02:54', '2024-05-11 23:05:38'),
(3, '../../react.svg', 'fade-left', 1, '2024-05-12 00:03:00', '2024-05-11 23:05:48'),
(4, '../../sass.svg', 'fade-right', 1, '2024-05-12 00:03:03', '2024-05-11 23:05:55'),
(5, '../../wordpress.svg', 'fade-up', 1, '2024-05-12 00:03:08', '2024-05-11 23:06:03'),
(6, './../mysql.svg', 'fade-left', 1, '2024-05-12 00:03:14', '2024-05-11 23:06:11'),
(7, '../../php.svg', 'fade-right', 1, '2024-05-12 00:03:18', '2024-05-11 23:06:20'),
(8, '../../bootstrap.svg', 'fade-up', 1, '2024-05-12 00:03:23', '2024-05-11 23:06:32'),
(9, '../../tailwind-css.svg', 'fade-left', 1, '2024-05-12 00:03:29', '2024-05-11 23:06:49');

-- --------------------------------------------------------

--
-- Table structure for table `portfolio`
--

CREATE TABLE `portfolio` (
  `portfolio_aid` int(11) NOT NULL,
  `portfolio_title` varchar(50) NOT NULL,
  `portfolio_image` varchar(50) NOT NULL,
  `portfolio_category` varchar(20) NOT NULL,
  `portfolio_is_active` tinyint(1) NOT NULL,
  `portfolio_description` text NOT NULL,
  `portfolio_publish_date` varchar(20) NOT NULL,
  `portfolio_datetime` varchar(20) NOT NULL,
  `portfolio_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `portfolio`
--

INSERT INTO `portfolio` (`portfolio_aid`, `portfolio_title`, `portfolio_image`, `portfolio_category`, `portfolio_is_active`, `portfolio_description`, `portfolio_publish_date`, `portfolio_datetime`, `portfolio_created`) VALUES
(3, 'port title2', 'port img2', 'port cat2', 1, 'port descript2', 'port date2', '2024-05-10 10:28:19', '2024-05-10 09:37:18'),
(4, 'try', 'try', 'try', 0, 'try', 'try', '2024-05-11 23:28:15', '2024-05-10 10:31:07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`about_aid`);

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`banner_aid`);

--
-- Indexes for table `exp`
--
ALTER TABLE `exp`
  ADD PRIMARY KEY (`exp_aid`);

--
-- Indexes for table `portfolio`
--
ALTER TABLE `portfolio`
  ADD PRIMARY KEY (`portfolio_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `about_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `exp`
--
ALTER TABLE `exp`
  MODIFY `exp_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `portfolio`
--
ALTER TABLE `portfolio`
  MODIFY `portfolio_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
