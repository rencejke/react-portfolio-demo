-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2024 at 09:26 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

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
(1, 'About Me', 'I am a web developer, designer, and student at Laguna State Polytechnic University, pursuing a Bachelor of Science in Information Technology majoring in Web and Mobile Application Development in the Philippines. I am passionate about creating and designing websites.', 'I thrive on challenges and consistently seek opportunities to expand my knowledge. Currently, I am exploring Crypto, NFTs, DeFi, and the Metaverse.</p>', 'profile2.jpg', 1, 'Download CV', '2024-05-14 12:19:38', '2024'),
(4, 'dbsdjbsdhjbshd', 'dsdsadsad', 'sdsadsad', 'sadsads', 0, 'sddds', '2024-05-14 08:16:53', '2024-05-11 16:16:51'),
(5, 'asasas', 'asasas', 'asasasas', 'm-avengers.jpg', 0, 'assas', '2024-05-14 12:24:34', '2024-05-14 11:37:26');

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
(1, 'Hi, My Name is Clarence, Im a', 'Web Designer and Developer', 'profile1.png', 1, 'My passion lies in crafting stunning websites that not only captivate users but also provide seamless functionality. I specialize in creating beautiful and functional websites. Lets build something amazing together!', 'See My Work', '2024-05-14 12:31:40', '2024-05-11 09:11:17'),
(4, 'test', 'test32', 'test33', 0, 'asasasasasasasa', 'adsasa', '2024-05-11 11:34:01', '2024-05-11 09:37:18'),
(5, 'asewasas', 'asasasa', 'asasa', 0, 'assasas', 'asasas', '2024-05-11 11:34:08', '2024-05-11 09:39:50'),
(6, 'asasa', 'assasa', 'asas', 0, 'asas', 'asasas', '2024-05-11 16:59:21', '2024-05-11 09:39:56'),
(7, 'adssD', 'AdaDs', 'adasa', 0, 'ADAsda', 'aDAd', '2024-05-13 06:58:38', '2024-05-13 06:58:19'),
(8, 'test', 'aSAshjaSas', 'm-9.jpg', 0, 'asdsdsd', 'aSasASSa', '2024-05-14 11:44:30', '2024-05-14 11:44:18');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `contact_aid` int(11) NOT NULL,
  `contact_name` varchar(50) NOT NULL,
  `contact_email` varchar(50) NOT NULL,
  `contact_subject` varchar(50) NOT NULL,
  `contact_message` varchar(600) NOT NULL,
  `contact_is_active` tinyint(1) NOT NULL,
  `contact_datetime` varchar(20) NOT NULL,
  `contact_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`contact_aid`, `contact_name`, `contact_email`, `contact_subject`, `contact_message`, `contact_is_active`, `contact_datetime`, `contact_created`) VALUES
(1, 'clarence', 'bclarence@gmail.com', 'test subject', 'this is a message Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nunc elit, fringilla ac gravida vel, condimentum et libero. Duis ullamcorper dui a massa egestas aliquet. Integer condimentum tortor vitae efficitur gravida. Vivamus euismod volutpat ligula vel tempus. Mauris ultricies arcu non sapien varius lacinia.', 1, '2024-05-13 11:39:07', '2024-05-13 11:39:07'),
(3, 'asasas', 'asasaasas@gmail.com', 'asasas', 'asasasasasas', 1, '2024-05-13 12:22:51', '2024-05-13 12:22:51'),
(4, 'dfdfdf', 'test@gmail.com', 'sdsd', 'sdsd', 1, '2024-05-13 12:24:05', '2024-05-13 12:24:05'),
(5, 'sdaa', 'asas@gmail.com', 'asasas', 'asas', 1, '2024-05-13 12:24:29', '2024-05-13 12:24:29'),
(6, 'sdaa', 'asas@gmail.com', 'asasas', 'asas', 1, '2024-05-13 12:25:49', '2024-05-13 12:25:49'),
(7, 'asas', 'sasasa@gmail.com', 'asdSD', 'sdsdsd', 1, '2024-05-13 12:26:18', '2024-05-13 12:26:18'),
(8, 'asasa', 'asas@gmail.com', 'asasas', 'asas', 1, '2024-05-13 12:31:31', '2024-05-13 12:31:31'),
(9, 'teststtsts', 'tetywteytwyetyw@gmail.com', 'asdasdas', 'asasas', 1, '2024-05-13 12:33:48', '2024-05-13 12:33:48'),
(10, 'teststtsts', 'tetywteytwyetyw@gmail.com', 'asdasdas', 'asasas', 1, '2024-05-13 12:35:00', '2024-05-13 12:35:00'),
(11, 'asas', 'asas@gmail.com', 'asas', 'asasa', 1, '2024-05-13 12:36:32', '2024-05-13 12:36:32'),
(12, 'ddfdf', 'dfdf@gmail.com', 'dfdfdfd', 'dfdf', 1, '2024-05-13 12:41:26', '2024-05-13 12:41:26'),
(13, 'ddfdf', 'dfdf@gmail.com', 'dfdfdfd', 'dfdf', 1, '2024-05-13 12:45:00', '2024-05-13 12:45:00'),
(14, 'ddfdf', 'dfdf@gmail.com', 'dfdfdfd', 'dfdf', 1, '2024-05-13 12:45:00', '2024-05-13 12:45:00'),
(15, 'ddfdf', 'dfdf@gmail.com', 'dfdfdfd', 'dfdf', 1, '2024-05-13 12:46:00', '2024-05-13 12:46:00'),
(16, 'ddfdfsasasasa', 'dfdf@gmail.comXXXX', 'dfdfdfdXXX', 'dfdfXXX', 1, '2024-05-13 12:46:07', '2024-05-13 12:46:07'),
(17, 'ddfdfsasasasa', 'dfdf@gmail.comXXXX', 'dfdfdfdXXX', 'dfdfXXX', 1, '2024-05-13 12:47:28', '2024-05-13 12:47:28'),
(18, 'ASAS', 'ASAS@GMAIL.COM', 'ASAS', 'ASASAS', 1, '2024-05-13 12:51:36', '2024-05-13 12:51:36'),
(19, 'asasa', 'assas@gmail.com', 'asas', 'asas', 1, '2024-05-13 12:59:54', '2024-05-13 12:59:54'),
(20, 'asasa', 'assas@gmail.comzzzzz', 'asas', 'asas', 1, '2024-05-13 13:00:01', '2024-05-13 13:00:01'),
(21, 'asasa', 'assas@gmail.comzzzzz', 'asas', 'asas', 1, '2024-05-13 13:00:30', '2024-05-13 13:00:30'),
(22, 'aaa', 'aaaaWWQ@gmail.com', 'asasas', 'asasaSasaS', 1, '2024-05-13 13:00:49', '2024-05-13 13:00:49'),
(23, 'aaa', 'aaaaWWQ@gmail.com', 'asasas', 'asasaSasaS', 1, '2024-05-13 13:05:10', '2024-05-13 13:05:10'),
(24, 'aaa', 'aaaaWWQ@gmail.com', 'asasas', 'asasaSasaS', 1, '2024-05-13 13:06:28', '2024-05-13 13:06:28'),
(25, 'asasas', 'asas@gmailx.com', 'asasasasas', 'asas', 1, '2024-05-13 13:06:41', '2024-05-13 13:06:41'),
(26, 'asasas', 'asas@gmailx.com', 'asasasasas', 'asasXXXXXXXS', 1, '2024-05-13 13:09:59', '2024-05-13 13:09:59'),
(27, 'asasas', 'asas@gmailx.com', 'asasasasas', 'asasXXXXXXXS', 1, '2024-05-13 13:10:09', '2024-05-13 13:10:09'),
(28, 'ACXCXC', 'XCXCXC@GMAIL.COM', 'ASASA', 'ASAS', 1, '2024-05-13 13:10:23', '2024-05-13 13:10:23');

-- --------------------------------------------------------

--
-- Table structure for table `cta`
--

CREATE TABLE `cta` (
  `cta_aid` int(11) NOT NULL,
  `cta_title` varchar(50) NOT NULL,
  `cta_msg` varchar(50) NOT NULL,
  `cta_btn_title` varchar(20) NOT NULL,
  `cta_is_active` tinyint(1) NOT NULL,
  `cta_datetime` varchar(20) NOT NULL,
  `cta_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cta`
--

INSERT INTO `cta` (`cta_aid`, `cta_title`, `cta_msg`, `cta_btn_title`, `cta_is_active`, `cta_datetime`, `cta_created`) VALUES
(1, 'test', 'agshgahsgahs', 'hdsjshdjs', 0, '2024-05-14 09:15:20', '2024-05-14 07:41:14'),
(2, 'test', 'agshgahsgahs', 'hdsjshdjs', 0, '2024-05-14 09:15:15', '2024-05-14 07:42:52'),
(3, 'sdsad', 'sdsd', 'sdd', 0, '2024-05-14 08:30:58', '2024-05-14 07:46:45'),
(4, 'Lets build something amazing together!', 'Contact me and lets build your   website today', 'Lets Talk', 1, '2024-05-14 08:36:54', '2024-05-14 08:33:29');

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
(1, 'html5.svg', 'fade-right', 1, '2024-05-14 12:19:59', '2024-05-11 22:59:50'),
(2, 'css.svg', 'fade-up', 1, '2024-05-14 12:22:10', '2024-05-11 23:05:38'),
(3, 'wordpress.svg', 'fade-left', 1, '2024-05-14 12:30:39', '2024-05-11 23:05:48'),
(4, 'php.svg', 'fade-right', 1, '2024-05-14 12:30:29', '2024-05-11 23:05:55'),
(5, 'mysql.svg', 'fade-up', 1, '2024-05-14 12:30:16', '2024-05-11 23:06:03'),
(6, 'sass.svg', 'fade-left', 1, '2024-05-14 12:29:59', '2024-05-11 23:06:11'),
(7, 'bootstrap.svg', 'fade-right', 1, '2024-05-14 12:29:23', '2024-05-11 23:06:20'),
(8, 'react.svg', 'fade-up', 1, '2024-05-14 12:29:10', '2024-05-11 23:06:32'),
(9, 'git.svg', 'fade-left', 1, '2024-05-14 12:31:13', '2024-05-11 23:06:49');

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
(3, 'port title2', 'port img2', 'port cat2', 0, 'port descript2', 'port date2', '2024-05-14 07:57:36', '2024-05-10 09:37:18'),
(4, 'try', 'try', 'try', 0, 'try', 'try', '2024-05-11 23:28:15', '2024-05-10 10:31:07'),
(5, 'skdklASJdkasJdkjASkdjAS', 'asDASdasd', 'sadasdasd', 1, 'sadas das', 'asasas', '2024-05-14 09:49:40', '2024-05-14 09:49:40'),
(6, 'aSAsaSAs', 'banner-movies.jpg', 'aSAs aS', 1, 'asaSAs', 'asas', '2024-05-14 09:51:49', '2024-05-14 09:51:49'),
(7, 'aSasdmasdkAHJSKOdhAJSodh', 'banner-movies.jpg', 'ASDAsdASDasd', 1, 'SDASdSAD', 'SDasdAsd', '2024-05-14 10:05:43', '2024-05-14 10:05:43');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `projects_aid` int(11) NOT NULL,
  `projects_num` int(11) NOT NULL,
  `projects_title` varchar(20) NOT NULL,
  `projects_image` varchar(100) NOT NULL,
  `projects_description` varchar(600) NOT NULL,
  `projects_btn_title` varchar(20) NOT NULL,
  `projects_animation` varchar(20) NOT NULL,
  `projects_is_active` tinyint(1) NOT NULL,
  `projects_datetime` varchar(20) NOT NULL,
  `projects_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`projects_aid`, `projects_num`, `projects_title`, `projects_image`, `projects_description`, `projects_btn_title`, `projects_animation`, `projects_is_active`, `projects_datetime`, `projects_created`) VALUES
(1, 1, 'MATH-ALINO GAME', 'https://via.placeholder.com/300x300', 'This project is an interactive and engaging game that’s all about math that is specifically made for grades 1-3 students of Sta Maria Magdalena Elementary School. The game uses colorful graphics, good animation and it is user-friendly.', 'Learn More', 'fade-left', 1, '2024-05-13 08:42:05', '2024-05-13 08:42:05'),
(4, 2, 'FIGURINIZA - ONLINE ', 'https://via.placeholder.com/300x300', 'This project is an online shop specifically for Anime lovers. Admins can easily add, update or delete some items in the shop. The website is user friendly and users can easily the details of the anime figurines.', 'Learn More', 'fade-left', 1, '2024-05-13 09:04:17', '2024-05-13 09:04:17'),
(5, 3, 'ONLINE LIBRARY MANAG', 'https://via.placeholder.com/300x300', 'This\n           project is an online library system that makes it easy for people to borrow and book books. Users can log in, reserve a\n            book, and borrow it. The librarians can keep track of who is using the books and manage everything smoothly.', 'Learn More', 'fade-left', 1, '2024-05-13 09:05:38', '2024-05-13 09:05:38'),
(6, 5145145, 'aSNajsbAJHHBSHA', 'ASAsaS', 'asASas', 'aSas', 'ASASas', 0, '2024-05-14 11:32:35', '2024-05-14 11:24:14'),
(7, 5, 'alice', 'm-11.jpg', 'aSAsS', 'Asasa', 'asas', 0, '2024-05-14 11:32:30', '2024-05-14 11:28:26'),
(8, 6666, 'asasas', 'm-loopers.jpg', 'asasas', 'asas', 'asas', 0, '2024-05-14 11:32:27', '2024-05-14 11:29:45');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `services_aid` int(11) NOT NULL,
  `services_type` varchar(50) NOT NULL,
  `services_image` varchar(20) NOT NULL,
  `services_description` varchar(600) NOT NULL,
  `services_btn_title` varchar(20) NOT NULL,
  `services_is_active` tinyint(1) NOT NULL,
  `services_created` varchar(20) NOT NULL,
  `services_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`services_aid`, `services_type`, `services_image`, `services_description`, `services_btn_title`, `services_is_active`, `services_created`, `services_datetime`) VALUES
(1, 'ihsdjhsdjh', 'sdsdkjsdk', 'sadasjdhjsahdjsahdjsahd', 'sdsajkhdjsahdsja', 0, '2024-05-14 06:52:26', '2024-05-14 12:18:27'),
(2, 'hgASHGahsfAGS', 'm-rio.jpg', 'adsAHIGSHagsha', 'AsaJSHJGjahs', 0, '2024-05-14 12:18:10', '2024-05-14 12:18:25');

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
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`contact_aid`);

--
-- Indexes for table `cta`
--
ALTER TABLE `cta`
  ADD PRIMARY KEY (`cta_aid`);

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
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`projects_aid`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`services_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `about_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `contact_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `cta`
--
ALTER TABLE `cta`
  MODIFY `cta_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `exp`
--
ALTER TABLE `exp`
  MODIFY `exp_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `portfolio`
--
ALTER TABLE `portfolio`
  MODIFY `portfolio_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `projects_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `services_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
