-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 2017-12-15 04:00:53
-- 服务器版本： 5.7.17
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `book`
--
CREATE DATABASE IF NOT EXISTS `book` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `book`;

-- --------------------------------------------------------

--
-- 表的结构 `img`
--

CREATE TABLE `img` (
  `sid` tinyint(50) UNSIGNED NOT NULL,
  `url` varchar(200) NOT NULL,
  `title` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `img`
--

INSERT INTO `img` (`sid`, `url`, `title`) VALUES
(1, 'http://gfs17.gomein.net.cn/T1uLEvB_D_1RCvBVdK_450.jpg', ''),
(2, 'http://gfs17.gomein.net.cn/T1uhdvBmKT1RCvBVdK_450.jpg', ''),
(3, 'http://gfs17.gomein.net.cn/T17hJvB5__1RCvBVdK_450.jpg', ''),
(4, 'http://gfs17.gomein.net.cn/T15hLvByLv1RCvBVdK_360.jpg', ''),
(5, 'http://gfs17.gomein.net.cn/T1qPCvBmLv1RCvBVdK_360.jpg', ''),
(6, 'http://gfs17.gomein.net.cn/T15TJ_BXCT1RCvBVdK_360.jpg', ''),
(7, 'http://gfs17.gomein.net.cn/T1D9YvBy_j1RCvBVdK_360.jpg', ''),
(8, 'http://gfs17.gomein.net.cn/T1wvCvBCJj1RCvBVdK_450.jpg', ''),
(9, 'http://gfs17.gomein.net.cn/T1kPJvBQCb1RCvBVdK_360.jpg', ''),
(10, 'http://gfs17.gomein.net.cn/T1zedvB7ZT1RCvBVdK_360.jpg', ''),
(11, 'http://gfs17.gomein.net.cn/T1MnxvBKWj1RCvBVdK_360.jpg', ''),
(12, 'http://gfs17.gomein.net.cn/T1QmL_B5ET1RCvBVdK_360.jpg', ''),
(13, 'http://gfs17.gomein.net.cn/T1v_YvB_C_1RCvBVdK_360.jpg', ''),
(14, 'http://gfs17.gomein.net.cn/T1XbxvB5VT1RCvBVdK_450.jpg', ''),
(15, 'http://gfs17.gomein.net.cn/T1VIEgB5VT1RCvBVdK_450.jpg', ''),
(16, 'http://gfs17.gomein.net.cn/T1E9CTBbYT1RCvBVdK_360.jpg', ''),
(17, 'http://gfs17.gomein.net.cn/T1PUW_BKdT1RCvBVdK_360.jpg', ''),
(18, 'http://gfs17.gomein.net.cn/T1wix_BCLT1RCvBVdK_360.jpg', ''),
(19, 'http://gfs17.gomein.net.cn/T1mIKvBgZv1RCvBVdK_450.jpg', ''),
(20, 'http://gfs17.gomein.net.cn/T1q__TBvYT1RCvBVdK_360.jpg', ''),
(21, 'http://gfs17.gomein.net.cn/T1wdVvBjYb1RCvBVdK_360.jpg', ''),
(22, 'http://gfs17.gomein.net.cn/T1mmbvB4_b1RCvBVdK_360.jpg', ''),
(23, 'http://gfs17.gomein.net.cn/T1W2h_BXWT1RCvBVdK_360.jpg', ''),
(24, 'http://gfs17.gomein.net.cn/T1zGdvBQJT1RCvBVdK_360.jpg', ''),
(25, 'http://gfs17.gomein.net.cn/T1rdZ_B5LT1RCvBVdK_360.jpg', ''),
(26, 'http://gfs17.gomein.net.cn/T14IVvBgdg1RCvBVdK_360.jpg', ''),
(27, 'http://gfs17.gomein.net.cn/T1dlxbB4dT1RCvBVdK_360.jpg', ''),
(28, 'http://gfs17.gomein.net.cn/T1IhdbB4hT1RCvBVdK_360.jpg', ''),
(29, 'http://gfs17.gomein.net.cn/T1K9LvBCD_1RCvBVdK_360.jpg', ''),
(30, 'http://gfs17.gomein.net.cn/T1agdTBvWv1RCvBVdK_360.jpg', ''),
(31, 'http://gfs17.gomein.net.cn/T1kIxvB5JT1RCvBVdK_360.jpg', ''),
(32, 'http://gfs17.gomein.net.cn/T1KhbvB_J_1RCvBVdK_360.jpg', ''),
(33, 'http://gfs17.gomein.net.cn/T1LLdvBsCT1RCvBVdK_360.jpg', ''),
(34, 'http://gfs17.gomein.net.cn/T1pDdvB4ZT1RCvBVdK_360.jpg', ''),
(35, 'http://gfs17.gomein.net.cn/T12ThvB5ZT1RCvBVdK_360.jpg', ''),
(36, 'http://gfs17.gomein.net.cn/T1MDdvBsbg1RCvBVdK_360.jpg', ''),
(37, 'http://gfs17.gomein.net.cn/T1frATBQKT1RCvBVdK_360.jpg', ''),
(38, 'http://gfs17.gomein.net.cn/T1WGVvBKDT1RCvBVdK_360.jpg', ''),
(39, 'http://gfs17.gomein.net.cn/T1oOCvBgdj1RCvBVdK_360.jpg', ''),
(40, 'http://gfs17.gomein.net.cn/T1XldTBTKT1RCvBVdK_360.jpg', ''),
(41, 'http://gfs17.gomein.net.cn/T1GsDTBQWT1RCvBVdK_360.jpg', ''),
(42, 'http://gfs17.gomein.net.cn/T1CpZvBCLv1RCvBVdK_360.jpg', ''),
(43, 'http://gfs17.gomein.net.cn/T1GGDvBmZQ1RCvBVdK_360.jpg', ''),
(44, 'http://gfs17.gomein.net.cn/T1BIDvByVT1RCvBVdK_360.jpg', ''),
(45, 'http://gfs17.gomein.net.cn/T1GLJvB5Aj1RCvBVdK_360.jpg', ''),
(46, 'http://gfs17.gomein.net.cn/T1av_vByKT1RCvBVdK_360.jpg', ''),
(47, 'http://gfs17.gomein.net.cn/T1ADZvB_dj1RCvBVdK_360.jpg', ''),
(48, 'http://gfs17.gomein.net.cn/T1ADZvB_dj1RCvBVdK_360.jpg', 'http://gfs17.gomein.net.cn/T1uhdvBmKT1RCvBVdK_450.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `information`
--

CREATE TABLE `information` (
  `sid` tinyint(100) UNSIGNED NOT NULL,
  `title` varchar(200) NOT NULL,
  `url` varchar(200) NOT NULL,
  `price` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `information`
--

INSERT INTO `information` (`sid`, `title`, `url`, `price`) VALUES
(1, 'Apple iPhone 8 Plus 256G 银色 移动联通电信4G手机', 'http://gfs17.gomein.net.cn/T17hJvB5__1RCvBVdK_450.jpg', '7288.00'),
(2, 'Apple iPhone 8 Plus 64G 金色 移动联通电信4G手机', 'http://gfs17.gomein.net.cn/T147_vBCLT1RCvBVdK_260.jpg', '5988.00'),
(3, 'Apple iPhone 6s Plus 32G 金色 移动联通电信4G手机', 'https://gfs17.gomein.net.cn/T1yiEvBmAT1RCvBVdK_450.jpg', '3888.00'),
(4, 'Apple iPhone 7 32G 黑色 移动联通电信4G手机', 'https://gfs17.gomein.net.cn/T1iICvB7DQ1RCvBVdK_800_pc.jpg', '4188.00'),
(5, '华为畅享7 2G+16G 全网通', 'https://gfs17.gomein.net.cn/T1r.DsB5CT1RCvBVdK_800_pc.jpg', '899.00'),
(6, '红米Note5A 全网通 3G+32G', 'https://gfs17.gomein.net.cn/T1niJvB5b_1RCvBVdK_800_pc.jpg', '899.00'),
(7, '荣耀9 标配版 4G+64G 全网通', 'http://gfs17.gomein.net.cn/T1DGDvB5YT1RCvBVdK_160.jpg', '2299.00'),
(8, '三星C8 全网通 4G+64G', 'http://gfs17.gomein.net.cn/T1QMVvBshv1RCvBVdK_160.jpg', '2399.00'),
(9, 'vivo X20 4G+64G 全网通', 'http://gfs12.gomein.net.cn/T1ZgK_B4VT1RCvBVdK.jpg', '2998.00'),
(10, 'OPPO R11s 4G+64G 红色', 'http://gfs17.gomein.net.cn/T1AdWvBgbv1RCvBVdK_160.jpg', '3199.00'),
(11, '魅族Pro 7 Plus 6+64G 全网通', 'http://gfs17.gomein.net.cn/T1DUxvBmWv1RCvBVdK_160.jpg', '2799.00'),
(12, '华为P10 Plus 6G+64G 全网通', 'http://gfs17.gomein.net.cn/T11mDvBXKy1RCvBVdK_160.jpg', '3988.00'),
(13, '华为畅享7 2G+16G 全网通', 'http://gfs17.gomein.net.cn/T1wGLTBmEj1RCvBVdK_160.jpg', '899.00'),
(14, '红米Note5A 全网通 3G+32G', 'http://gfs17.gomein.net.cn/T1wkbTBQdT1RCvBVdK_160.jpg', '899.00'),
(15, '荣耀9 标配版 4G+64G 全网通', 'http://gfs17.gomein.net.cn/T1NoATBmVT1RCvBVdK_160.jpg', '2299.00'),
(16, '三星C8 全网通 4G+64G', 'http://gfs17.gomein.net.cn/T1xUVvB7dT1RCvBVdK_160.jpg', '2399.00'),
(17, 'vivo X20 4G+64G 全网通', 'http://gfs17.gomein.net.cn/T1_ZVvBgCT1RCvBVdK_160.jpg', '2998.00'),
(18, 'OPPO R11s 4G+64G 红色', 'http://gfs17.gomein.net.cn/T14SLTBKWT1RCvBVdK_160.jpg', '3199.00'),
(19, '魅族Pro 7 Plus 6+64G 全网通', 'http://gfs17.gomein.net.cn/T1VCLvB5Dv1RCvBVdK_160.jpg', '2799.00'),
(20, '华为P10 Plus 6G+64G 全网通', 'http://gfs17.gomein.net.cn/T1FGbvB_ZT1RCvBVdK_160.jpg', '3988.00'),
(21, '荣耀V9play 高配版 4G+32G', 'http://gfs17.gomein.net.cn/T1pvdvBTC_1RCvBVdK_160.jpg', '1199.00'),
(22, '魅蓝Note6 4G+64G 全网通', 'http://gfs17.gomein.net.cn/T1NGdvBgVT1RCvBVdK_160.jpg', '1499.00'),
(23, '魅族Pro 7 4G+64G 全网通', 'http://gfs17.gomein.net.cn/T1AdWvBgbv1RCvBVdK_160.jpg', '1999.00'),
(24, '华为nova2 Plus 4G+128G', 'http://gfs17.gomein.net.cn/T1tIYvBTCj1RCvBVdK_160.jpg', '2599.00'),
(25, 'vivo X9s Plus 4G+64G', 'http://gfs17.gomein.net.cn/T18LAvByJg1RCvBVdK_160.jpg', '2798.00'),
(26, 'OPPO R11 全网通 红色', 'http://app.gomein.net.cn/images/grey.gif', '2999.00'),
(27, 'vivo X20 4G+128G 黑金', 'http://app.gomein.net.cn/images/grey.gif', '3398.00'),
(28, '三星S8 Plus 谜夜黑 6G+128G', 'http://app.gomein.net.cn/images/grey.gif', '6988.00');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `sid` tinyint(2) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `age` tinyint(2) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`sid`, `password`, `email`, `age`, `name`) VALUES
(1, '123456', 'jjjj@qq.com', 18, '菲菲'),
(2, '123456', 'jjjj@qq.com', 18, '吉吉'),
(3, '123456', 'jjjj@qq.com', 18, '哈哈哈'),
(4, '123456', 'jjjj@qq.com', 18, '扣扣'),
(5, '123456', 'jjjj@qq.com', 18, '美美'),
(6, '123456', 'jjjj@qq.com', 18, '打打'),
(7, '123456', 'kkk@qq.com', 12, '佳吉'),
(8, '123456', 'kkkkk@qq.com', 19, '发阿法'),
(10, '123456', 'jjjjqss@', 19, '哈哈'),
(11, '123456', '', 19, '猫咪'),
(12, '123456', 'kkk@qq.com', 18, '蜜蜜'),
(13, '123456', '111111@qq.com', 12, '国美欣欣');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `img`
--
ALTER TABLE `img`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `information`
--
ALTER TABLE `information`
  ADD PRIMARY KEY (`sid`),
  ADD UNIQUE KEY `sid` (`sid`),
  ADD KEY `sid_2` (`sid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`sid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `img`
--
ALTER TABLE `img`
  MODIFY `sid` tinyint(50) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
--
-- 使用表AUTO_INCREMENT `information`
--
ALTER TABLE `information`
  MODIFY `sid` tinyint(100) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `sid` tinyint(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
