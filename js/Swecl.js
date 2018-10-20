class Swecl{
  constructor(sw, sl, sm, swed){
    this.sw=sw;
    this.sl=sl;
    this.sm=sm;
    this.swed=swed;
    if (sw===null) { this.sw=new SwissEph(); }
    if (sl===null) { this.sl=new SwissLib(); }
    if (sm===null) { this.sm=new Swemmoon(); }
    if (swed===null) { this.swed = new SwissData; }

    this.const_lapse_rate = Swe.SwephData.SE_LAPSE_RATE;  /* for refraction */

    this.DSUN=(1392000000.0 / Swe.AUNIT);
    this.DMOON=(3476300.0 / Swe.AUNIT);
    this.DEARTH=(6378140.0 * 2 / Swe.AUNIT);
    this.RSUN=(this.DSUN / 2);
    this.RMOON=(this.DMOON / 2);
    this.REARTH=(this.DEARTH / 2);
    this.lnlog=Math.log(10);
    this.SAROS_CYCLE = 6585.3213;

    this.saros_data_solar = new Array(
      new SarosData(0, 641886.5), /* 23 May -2955 */
      new SarosData(1, 672214.5), /* 04 Jun -2872 */
      new SarosData(2, 676200.5), /* 04 May -2861 */
      new SarosData(3, 693357.5), /* 24 Apr -2814 */
      new SarosData(4, 723685.5), /* 06 May -2731 */
      new SarosData(5, 727671.5), /* 04 Apr -2720 */
      new SarosData(6, 744829.5), /* 27 Mar -2673 */
      new SarosData(7, 775157.5), /* 08 Apr -2590 */
      new SarosData(8, 779143.5), /* 07 Mar -2579 */
      new SarosData(9, 783131.5), /* 06 Feb -2568 */
      new SarosData(10, 820044.5), /* 28 Feb -2467 */
      new SarosData(11, 810859.5), /* 06 Jan -2492 */
      new SarosData(12, 748993.5), /* 20 Aug -2662 */
      new SarosData(13, 792492.5), /* 23 Sep -2543 */
      new SarosData(14, 789892.5), /* 11 Aug -2550 */
      new SarosData(15, 787294.5), /* 01 Jul -2557 */
      new SarosData(16, 824207.5), /* 23 Jul -2456 */
      new SarosData(17, 834779.5), /* 03 Jul -2427 */
      new SarosData(18, 838766.5), /* 02 Jun -2416 */
      new SarosData(19, 869094.5), /* 15 Jun -2333 */
      new SarosData(20, 886251.5), /* 05 Jun -2286 */
      new SarosData(21, 890238.5), /* 05 May -2275 */
      new SarosData(22, 927151.5), /* 28 May -2174 */
      new SarosData(23, 937722.5), /* 07 May -2145 */
      new SarosData(24, 941709.5), /* 06 Apr -2134 */
      new SarosData(25, 978623.5), /* 30 Apr -2033 */
      new SarosData(26, 989194.5), /* 08 Apr -2004 */
      new SarosData(27, 993181.5), /* 09 Mar -1993 */
      new SarosData(28, 1023510.5), /* 22 Mar -1910 */
      new SarosData(29, 1034081.5), /* 01 Mar -1881 */
      new SarosData(30, 972214.5), /* 12 Oct -2051 */
      new SarosData(31, 1061811.5), /* 31 Jan -1805 */
      new SarosData(32, 1006529.5), /* 24 Sep -1957 */
      new SarosData(33, 997345.5), /* 02 Aug -1982 */
      new SarosData(34, 1021088.5), /* 04 Aug -1917 */
      new SarosData(35, 1038245.5), /* 25 Jul -1870 */
      new SarosData(36, 1042231.5), /* 23 Jun -1859 */
      new SarosData(37, 1065974.5), /* 25 Jun -1794 */
      new SarosData(38, 1089716.5), /* 26 Jun -1729 */
      new SarosData(39, 1093703.5), /* 26 May -1718 */
      new SarosData(40, 1117446.5), /* 28 May -1653 */
      new SarosData(41, 1141188.5), /* 28 May -1588 */
      new SarosData(42, 1145175.5), /* 28 Apr -1577 */
      new SarosData(43, 1168918.5), /* 29 Apr -1512 */
      new SarosData(44, 1192660.5), /* 30 Apr -1447 */
      new SarosData(45, 1196647.5), /* 30 Mar -1436 */
      new SarosData(46, 1220390.5), /* 01 Apr -1371 */
      new SarosData(47, 1244132.5), /* 02 Apr -1306 */
      new SarosData(48, 1234948.5), /* 08 Feb -1331 */
      new SarosData(49, 1265277.5), /* 22 Feb -1248 */
      new SarosData(50, 1282433.5), /* 11 Feb -1201 */
      new SarosData(51, 1207395.5), /* 02 Sep -1407 */
      new SarosData(52, 1217968.5), /* 14 Aug -1378 */
      new SarosData(53, 1254881.5), /* 06 Sep -1277 */
      new SarosData(54, 1252282.5), /* 25 Jul -1284 */
      new SarosData(55, 1262855.5), /* 06 Jul -1255 */
      new SarosData(56, 1293182.5), /* 17 Jul -1172 */
      new SarosData(57, 1297169.5), /* 17 Jun -1161 */
      new SarosData(58, 1314326.5), /* 07 Jun -1114 */
      new SarosData(59, 1344654.5), /* 19 Jun -1031 */
      new SarosData(60, 1348640.5), /* 18 May -1020 */
      new SarosData(61, 1365798.5), /* 10 May -0973 */
      new SarosData(62, 1396126.5), /* 22 May -0890 */
      new SarosData(63, 1400112.5), /* 20 Apr -0879 */
      new SarosData(64, 1417270.5), /* 11 Apr -0832 */
      new SarosData(65, 1447598.5), /* 24 Apr -0749 */
      new SarosData(66, 1444999.5), /* 12 Mar -0756 */
      new SarosData(67, 1462157.5), /* 04 Mar -0709 */
      new SarosData(68, 1492485.5), /* 16 Mar -0626 */
      new SarosData(69, 1456959.5), /* 09 Dec -0724 */
      new SarosData(70, 1421434.5), /* 05 Sep -0821 */
      new SarosData(71, 1471518.5), /* 19 Oct -0684 */
      new SarosData(72, 1455748.5), /* 16 Aug -0727 */
      new SarosData(73, 1466320.5), /* 27 Jul -0698 */
      new SarosData(74, 1496648.5), /* 08 Aug -0615 */
      new SarosData(75, 1500634.5), /* 07 Jul -0604 */
      new SarosData(76, 1511207.5), /* 18 Jun -0575 */
      new SarosData(77, 1548120.5), /* 11 Jul -0474 */
      new SarosData(78, 1552106.5), /* 09 Jun -0463 */
      new SarosData(79, 1562679.5), /* 21 May -0434 */
      new SarosData(80, 1599592.5), /* 13 Jun -0333 */
      new SarosData(81, 1603578.5), /* 12 May -0322 */
      new SarosData(82, 1614150.5), /* 22 Apr -0293 */
      new SarosData(83, 1644479.5), /* 05 May -0210 */
      new SarosData(84, 1655050.5), /* 14 Apr -0181 */
      new SarosData(85, 1659037.5), /* 14 Mar -0170 */
      new SarosData(86, 1695950.5), /* 06 Apr -0069 */
      new SarosData(87, 1693351.5), /* 23 Feb -0076 */
      new SarosData(88, 1631484.5), /* 06 Oct -0246 */
      new SarosData(89, 1727666.5), /* 04 Feb 0018 */
      new SarosData(90, 1672384.5), /* 28 Sep -0134 */
      new SarosData(91, 1663200.5), /* 06 Aug -0159 */
      new SarosData(92, 1693529.5), /* 19 Aug -0076 */
      new SarosData(93, 1710685.5), /* 09 Aug -0029 */
      new SarosData(94, 1714672.5), /* 09 Jul -0018 */
      new SarosData(95, 1738415.5), /* 11 Jul 0047 */
      new SarosData(96, 1755572.5), /* 01 Jul 0094 */
      new SarosData(97, 1766144.5), /* 11 Jun 0123 */
      new SarosData(98, 1789887.5), /* 12 Jun 0188 */
      new SarosData(99, 1807044.5), /* 03 Jun 0235 */
      new SarosData(100, 1817616.5), /* 13 May 0264 */
      new SarosData(101, 1841359.5), /* 15 May 0329 */
      new SarosData(102, 1858516.5), /* 05 May 0376 */
      new SarosData(103, 1862502.5), /* 04 Apr 0387 */
      new SarosData(104, 1892831.5), /* 17 Apr 0470 */
      new SarosData(105, 1903402.5), /* 27 Mar 0499 */
      new SarosData(106, 1887633.5), /* 23 Jan 0456 */
      new SarosData(107, 1924547.5), /* 15 Feb 0557 */
      new SarosData(108, 1921948.5), /* 04 Jan 0550 */
      new SarosData(109, 1873251.5), /* 07 Sep 0416 */
      new SarosData(110, 1890409.5), /* 30 Aug 0463 */
      new SarosData(111, 1914151.5), /* 30 Aug 0528 */
      new SarosData(112, 1918138.5), /* 31 Jul 0539 */
      new SarosData(113, 1935296.5), /* 22 Jul 0586 */
      new SarosData(114, 1959038.5), /* 23 Jul 0651 */
      new SarosData(115, 1963024.5), /* 21 Jun 0662 */
      new SarosData(116, 1986767.5), /* 23 Jun 0727 */
      new SarosData(117, 2010510.5), /* 24 Jun 0792 */
      new SarosData(118, 2014496.5), /* 24 May 0803 */
      new SarosData(119, 2031654.5), /* 15 May 0850 */
      new SarosData(120, 2061982.5), /* 27 May 0933 */
      new SarosData(121, 2065968.5), /* 25 Apr 0944 */
      new SarosData(122, 2083126.5), /* 17 Apr 0991 */
      new SarosData(123, 2113454.5), /* 29 Apr 1074 */
      new SarosData(124, 2104269.5), /* 06 Mar 1049 */
      new SarosData(125, 2108256.5), /* 04 Feb 1060 */
      new SarosData(126, 2151755.5), /* 10 Mar 1179 */
      new SarosData(127, 2083302.5), /* 10 Oct 0991 */
      new SarosData(128, 2080704.5), /* 29 Aug 0984 */
      new SarosData(129, 2124203.5), /* 03 Oct 1103 */
      new SarosData(130, 2121603.5), /* 20 Aug 1096 */
      new SarosData(131, 2132176.5), /* 01 Aug 1125 */
      new SarosData(132, 2162504.5), /* 13 Aug 1208 */
      new SarosData(133, 2166490.5), /* 13 Jul 1219 */
      new SarosData(134, 2177062.5), /* 22 Jun 1248 */
      new SarosData(135, 2207390.5), /* 05 Jul 1331 */
      new SarosData(136, 2217962.5), /* 14 Jun 1360 */
      new SarosData(137, 2228534.5), /* 25 May 1389 */
      new SarosData(138, 2258862.5), /* 06 Jun 1472 */
      new SarosData(139, 2269434.5), /* 17 May 1501 */
      new SarosData(140, 2273421.5), /* 16 Apr 1512 */
      new SarosData(141, 2310334.5), /* 19 May 1613 */
      new SarosData(142, 2314320.5), /* 17 Apr 1624 */
      new SarosData(143, 2311722.5), /* 07 Mar 1617 */
      new SarosData(144, 2355221.5), /* 11 Apr 1736 */
      new SarosData(145, 2319695.5), /* 04 Jan 1639 */
      new SarosData(146, 2284169.5), /* 19 Sep 1541 */
      new SarosData(147, 2314498.5), /* 12 Oct 1624 */
      new SarosData(148, 2325069.5), /* 21 Sep 1653 */
      new SarosData(149, 2329056.5), /* 21 Aug 1664 */
      new SarosData(150, 2352799.5), /* 24 Aug 1729 */
      new SarosData(151, 2369956.5), /* 14 Aug 1776 */
      new SarosData(152, 2380528.5), /* 26 Jul 1805 */
      new SarosData(153, 2404271.5), /* 28 Jul 1870 */
      new SarosData(154, 2421428.5), /* 19 Jul 1917 */
      new SarosData(155, 2425414.5), /* 17 Jun 1928 */
      new SarosData(156, 2455743.5), /* 01 Jul 2011 */
      new SarosData(157, 2472900.5), /* 21 Jun 2058 */
      new SarosData(158, 2476886.5), /* 20 May 2069 */
      new SarosData(159, 2500629.5), /* 23 May 2134 */
      new SarosData(160, 2517786.5), /* 13 May 2181 */
      new SarosData(161, 2515187.5), /* 01 Apr 2174 */
      new SarosData(162, 2545516.5), /* 15 Apr 2257 */
      new SarosData(163, 2556087.5), /* 25 Mar 2286 */
      new SarosData(164, 2487635.5), /* 24 Oct 2098 */
      new SarosData(165, 2504793.5), /* 16 Oct 2145 */
      new SarosData(166, 2535121.5), /* 29 Oct 2228 */
      new SarosData(167, 2525936.5), /* 06 Sep 2203 */
      new SarosData(168, 2543094.5), /* 28 Aug 2250 */
      new SarosData(169, 2573422.5), /* 10 Sep 2333 */
      new SarosData(170, 2577408.5), /* 09 Aug 2344 */
      new SarosData(171, 2594566.5), /* 01 Aug 2391 */
      new SarosData(172, 2624894.5), /* 13 Aug 2474 */
      new SarosData(173, 2628880.5), /* 12 Jul 2485 */
      new SarosData(174, 2646038.5), /* 04 Jul 2532 */
      new SarosData(175, 2669780.5), /* 05 Jul 2597 */
      new SarosData(176, 2673766.5), /* 04 Jun 2608 */
      new SarosData(177, 2690924.5), /* 27 May 2655 */
      new SarosData(178, 2721252.5), /* 09 Jun 2738 */
      new SarosData(179, 2718653.5), /* 28 Apr 2731 */
      new SarosData(180, 2729226.5), /* 08 Apr 2760 */
    );
    this.NSAROS_SOLAR = this.saros_data_solar.length;

    this.saros_data_lunar = new Array(
      new SarosData(1, 782437.5), /* 14 Mar -2570 */
      new SarosData(2, 799593.5), /* 03 Mar -2523 */
      new SarosData(3, 783824.5), /* 30 Dec -2567 */
      new SarosData(4, 754884.5), /* 06 Oct -2646 */
      new SarosData(5, 824724.5), /* 22 Dec -2455 */
      new SarosData(6, 762857.5), /* 04 Aug -2624 */
      new SarosData(7, 773430.5), /* 16 Jul -2595 */
      new SarosData(8, 810343.5), /* 08 Aug -2494 */
      new SarosData(9, 807743.5), /* 26 Jun -2501 */
      new SarosData(10, 824901.5), /* 17 Jun -2454 */
      new SarosData(11, 855229.5), /* 29 Jun -2371 */
      new SarosData(12, 859215.5), /* 28 May -2360 */
      new SarosData(13, 876373.5), /* 20 May -2313 */
      new SarosData(14, 906701.5), /* 01 Jun -2230 */
      new SarosData(15, 910687.5), /* 30 Apr -2219 */
      new SarosData(16, 927845.5), /* 21 Apr -2172 */
      new SarosData(17, 958173.5), /* 04 May -2089 */
      new SarosData(18, 962159.5), /* 02 Apr -2078 */
      new SarosData(19, 979317.5), /* 24 Mar -2031 */
      new SarosData(20, 1009645.5), /* 05 Apr -1948 */
      new SarosData(21, 1007046.5), /* 22 Feb -1955 */
      new SarosData(22, 1017618.5), /* 02 Feb -1926 */
      new SarosData(23, 1054531.5), /* 25 Feb -1825 */
      new SarosData(24, 979493.5), /* 16 Sep -2031 */
      new SarosData(25, 976895.5), /* 06 Aug -2038 */
      new SarosData(26, 1020394.5), /* 09 Sep -1919 */
      new SarosData(27, 1017794.5), /* 28 Jul -1926 */
      new SarosData(28, 1028367.5), /* 09 Jul -1897 */
      new SarosData(29, 1058695.5), /* 21 Jul -1814 */
      new SarosData(30, 1062681.5), /* 19 Jun -1803 */
      new SarosData(31, 1073253.5), /* 30 May -1774 */
      new SarosData(32, 1110167.5), /* 23 Jun -1673 */
      new SarosData(33, 1114153.5), /* 22 May -1662 */
      new SarosData(34, 1131311.5), /* 13 May -1615 */
      new SarosData(35, 1161639.5), /* 25 May -1532 */
      new SarosData(36, 1165625.5), /* 24 Apr -1521 */
      new SarosData(37, 1176197.5), /* 03 Apr -1492 */
      new SarosData(38, 1213111.5), /* 27 Apr -1391 */
      new SarosData(39, 1217097.5), /* 26 Mar -1380 */
      new SarosData(40, 1221084.5), /* 24 Feb -1369 */
      new SarosData(41, 1257997.5), /* 18 Mar -1268 */
      new SarosData(42, 1255398.5), /* 04 Feb -1275 */
      new SarosData(43, 1186946.5), /* 07 Sep -1463 */
      new SarosData(44, 1283128.5), /* 06 Jan -1199 */
      new SarosData(45, 1227845.5), /* 29 Aug -1351 */
      new SarosData(46, 1225247.5), /* 19 Jul -1358 */
      new SarosData(47, 1255575.5), /* 31 Jul -1275 */
      new SarosData(48, 1272732.5), /* 21 Jul -1228 */
      new SarosData(49, 1276719.5), /* 21 Jun -1217 */
      new SarosData(50, 1307047.5), /* 03 Jul -1134 */
      new SarosData(51, 1317619.5), /* 13 Jun -1105 */
      new SarosData(52, 1328191.5), /* 23 May -1076 */
      new SarosData(53, 1358519.5), /* 05 Jun -0993 */
      new SarosData(54, 1375676.5), /* 26 May -0946 */
      new SarosData(55, 1379663.5), /* 25 Apr -0935 */
      new SarosData(56, 1409991.5), /* 07 May -0852 */
      new SarosData(57, 1420562.5), /* 16 Apr -0823 */
      new SarosData(58, 1424549.5), /* 16 Mar -0812 */
      new SarosData(59, 1461463.5), /* 09 Apr -0711 */
      new SarosData(60, 1465449.5), /* 08 Mar -0700 */
      new SarosData(61, 1436509.5), /* 13 Dec -0780 */
      new SarosData(62, 1493179.5), /* 08 Feb -0624 */
      new SarosData(63, 1457653.5), /* 03 Nov -0722 */
      new SarosData(64, 1435298.5), /* 20 Aug -0783 */
      new SarosData(65, 1452456.5), /* 11 Aug -0736 */
      new SarosData(66, 1476198.5), /* 12 Aug -0671 */
      new SarosData(67, 1480184.5), /* 11 Jul -0660 */
      new SarosData(68, 1503928.5), /* 14 Jul -0595 */
      new SarosData(69, 1527670.5), /* 15 Jul -0530 */
      new SarosData(70, 1531656.5), /* 13 Jun -0519 */
      new SarosData(71, 1548814.5), /* 04 Jun -0472 */
      new SarosData(72, 1579142.5), /* 17 Jun -0389 */
      new SarosData(73, 1583128.5), /* 16 May -0378 */
      new SarosData(74, 1600286.5), /* 07 May -0331 */
      new SarosData(75, 1624028.5), /* 08 May -0266 */
      new SarosData(76, 1628015.5), /* 07 Apr -0255 */
      new SarosData(77, 1651758.5), /* 09 Apr -0190 */
      new SarosData(78, 1675500.5), /* 10 Apr -0125 */
      new SarosData(79, 1672901.5), /* 27 Feb -0132 */
      new SarosData(80, 1683474.5), /* 07 Feb -0103 */
      new SarosData(81, 1713801.5), /* 19 Feb -0020 */
      new SarosData(82, 1645349.5), /* 21 Sep -0208 */
      new SarosData(83, 1649336.5), /* 22 Aug -0197 */
      new SarosData(84, 1686249.5), /* 13 Sep -0096 */
      new SarosData(85, 1683650.5), /* 02 Aug -0103 */
      new SarosData(86, 1694222.5), /* 13 Jul -0074 */
      new SarosData(87, 1731136.5), /* 06 Aug 0027 */
      new SarosData(88, 1735122.5), /* 05 Jul 0038 */
      new SarosData(89, 1745694.5), /* 15 Jun 0067 */
      new SarosData(90, 1776022.5), /* 27 Jun 0150 */
      new SarosData(91, 1786594.5), /* 07 Jun 0179 */
      new SarosData(92, 1797166.5), /* 17 May 0208 */
      new SarosData(93, 1827494.5), /* 30 May 0291 */
      new SarosData(94, 1838066.5), /* 09 May 0320 */
      new SarosData(95, 1848638.5), /* 19 Apr 0349 */
      new SarosData(96, 1878966.5), /* 01 May 0432 */
      new SarosData(97, 1882952.5), /* 31 Mar 0443 */
      new SarosData(98, 1880354.5), /* 18 Feb 0436 */
      new SarosData(99, 1923853.5), /* 24 Mar 0555 */
      new SarosData(100, 1881741.5), /* 06 Dec 0439 */
      new SarosData(101, 1852801.5), /* 11 Sep 0360 */
      new SarosData(102, 1889715.5), /* 05 Oct 0461 */
      new SarosData(103, 1893701.5), /* 03 Sep 0472 */
      new SarosData(104, 1897688.5), /* 04 Aug 0483 */
      new SarosData(105, 1928016.5), /* 16 Aug 0566 */
      new SarosData(106, 1938588.5), /* 27 Jul 0595 */
      new SarosData(107, 1942575.5), /* 26 Jun 0606 */
      new SarosData(108, 1972903.5), /* 08 Jul 0689 */
      new SarosData(109, 1990059.5), /* 27 Jun 0736 */
      new SarosData(110, 1994046.5), /* 28 May 0747 */
      new SarosData(111, 2024375.5), /* 10 Jun 0830 */
      new SarosData(112, 2034946.5), /* 20 May 0859 */
      new SarosData(113, 2045518.5), /* 29 Apr 0888 */
      new SarosData(114, 2075847.5), /* 13 May 0971 */
      new SarosData(115, 2086418.5), /* 21 Apr 1000 */
      new SarosData(116, 2083820.5), /* 11 Mar 0993 */
      new SarosData(117, 2120733.5), /* 03 Apr 1094 */
      new SarosData(118, 2124719.5), /* 02 Mar 1105 */
      new SarosData(119, 2062852.5), /* 14 Oct 0935 */
      new SarosData(120, 2086596.5), /* 16 Oct 1000 */
      new SarosData(121, 2103752.5), /* 06 Oct 1047 */
      new SarosData(122, 2094568.5), /* 14 Aug 1022 */
      new SarosData(123, 2118311.5), /* 16 Aug 1087 */
      new SarosData(124, 2142054.5), /* 17 Aug 1152 */
      new SarosData(125, 2146040.5), /* 17 Jul 1163 */
      new SarosData(126, 2169783.5), /* 18 Jul 1228 */
      new SarosData(127, 2186940.5), /* 09 Jul 1275 */
      new SarosData(128, 2197512.5), /* 18 Jun 1304 */
      new SarosData(129, 2214670.5), /* 10 Jun 1351 */
      new SarosData(130, 2238412.5), /* 10 Jun 1416 */
      new SarosData(131, 2242398.5), /* 10 May 1427 */
      new SarosData(132, 2266142.5), /* 12 May 1492 */
      new SarosData(133, 2289884.5), /* 13 May 1557 */
      new SarosData(134, 2287285.5), /* 01 Apr 1550 */
      new SarosData(135, 2311028.5), /* 13 Apr 1615 */
      new SarosData(136, 2334770.5), /* 13 Apr 1680 */
      new SarosData(137, 2292659.5), /* 17 Dec 1564 */
      new SarosData(138, 2276890.5), /* 15 Oct 1521 */
      new SarosData(139, 2326974.5), /* 09 Dec 1658 */
      new SarosData(140, 2304619.5), /* 25 Sep 1597 */
      new SarosData(141, 2308606.5), /* 25 Aug 1608 */
      new SarosData(142, 2345520.5), /* 19 Sep 1709 */
      new SarosData(143, 2349506.5), /* 18 Aug 1720 */
      new SarosData(144, 2360078.5), /* 29 Jul 1749 */
      new SarosData(145, 2390406.5), /* 11 Aug 1832 */
      new SarosData(146, 2394392.5), /* 11 Jul 1843 */
      new SarosData(147, 2411550.5), /* 02 Jul 1890 */
      new SarosData(148, 2441878.5), /* 15 Jul 1973 */
      new SarosData(149, 2445864.5), /* 13 Jun 1984 */
      new SarosData(150, 2456437.5), /* 25 May 2013 */
      new SarosData(151, 2486765.5), /* 06 Jun 2096 */
      new SarosData(152, 2490751.5), /* 07 May 2107 */
      new SarosData(153, 2501323.5), /* 16 Apr 2136 */
      new SarosData(154, 2538236.5), /* 10 May 2237 */
      new SarosData(155, 2529052.5), /* 18 Mar 2212 */
      new SarosData(156, 2473771.5), /* 08 Nov 2060 */
      new SarosData(157, 2563367.5), /* 01 Mar 2306 */
      new SarosData(158, 2508085.5), /* 21 Oct 2154 */
      new SarosData(159, 2505486.5), /* 09 Sep 2147 */
      new SarosData(160, 2542400.5), /* 03 Oct 2248 */
      new SarosData(161, 2546386.5), /* 02 Sep 2259 */
      new SarosData(162, 2556958.5), /* 12 Aug 2288 */
      new SarosData(163, 2587287.5), /* 27 Aug 2371 */
      new SarosData(164, 2597858.5), /* 05 Aug 2400 */
      new SarosData(165, 2601845.5), /* 06 Jul 2411 */
      new SarosData(166, 2632173.5), /* 18 Jul 2494 */
      new SarosData(167, 2649330.5), /* 09 Jul 2541 */
      new SarosData(168, 2653317.5), /* 08 Jun 2552 */
      new SarosData(169, 2683645.5), /* 22 Jun 2635 */
      new SarosData(170, 2694217.5), /* 01 Jun 2664 */
      new SarosData(171, 2698203.5), /* 01 May 2675 */
      new SarosData(172, 2728532.5), /* 15 May 2758 */
      new SarosData(173, 2739103.5), /* 24 Apr 2787 */
      new SarosData(174, 2683822.5), /* 16 Dec 2635 */
      new SarosData(175, 2740492.5), /* 11 Feb 2791 */
      new SarosData(176, 2724722.5), /* 09 Dec 2747 */
      new SarosData(177, 2708952.5), /* 05 Oct 2704 */
      new SarosData(178, 2732695.5), /* 07 Oct 2769 */
      new SarosData(179, 2749852.5), /* 27 Sep 2816 */
      new SarosData(180, 2753839.5), /* 28 Aug 2827 */
    );
    this.NSAROS_LUNAR = this.saros_data_lunar.length;


    this.EULER=2.718281828459;
    this.NMAG_ELEM=Swe.SE_VESTA + 1;

    this.mag_elem = new Array(
                    /* DTV-Atlas Astronomie, p. 32 */
                    [-26.86, 0, 0, 0],
                    [-12.55, 0, 0, 0],
                    /* IAU 1986 */
                    [-0.42, 3.80, -2.73, 2.00],
                    [-4.40, 0.09, 2.39, -0.65],
                    [- 1.52, 1.60, 0, 0],   /* Mars */
                    [- 9.40, 0.5, 0, 0],    /* Jupiter */
                    [- 8.88, -2.60, 1.25, 0.044],   /* Saturn */
                    [- 7.19, 0.0, 0, 0],    /* Uranus */
                    [- 6.87, 0.0, 0, 0],    /* Neptune */
                    [- 1.00, 0.0, 0, 0],    /* Pluto */
                    [99, 0, 0, 0],          /* nodes and apogees */
                    [99, 0, 0, 0],
                    [99, 0, 0, 0],
                    [99, 0, 0, 0],
                    [99, 0, 0, 0],          /* Earth */
                    /* from Bowell data base */
                    [6.5, 0.15, 0, 0],      /* Chiron */
                    [7.0, 0.15, 0, 0],      /* Pholus */
                    [3.34, 0.12, 0, 0],     /* Ceres */
                    [4.13, 0.11, 0, 0],     /* Pallas */
                    [5.33, 0.32, 0, 0],     /* Juno */
                    [3.20, 0.32, 0, 0],     /* Vesta */
                    );

    this.el_node = new Array()(
      [ 48.330893,  1.1861890,  0.00017587,  0.000000211,], /* Mercury */
      [ 76.679920,  0.9011190,  0.00040665, -0.000000080,], /* Venus   */
      [  0       ,  0        ,  0         ,  0          ,], /* Earth   */
      [ 49.558093,  0.7720923,  0.00001605,  0.000002325,], /* Mars    */
      [100.464441,  1.0209550,  0.00040117,  0.000000569,], /* Jupiter */
      [113.665524,  0.8770970, -0.00012067, -0.000002380,], /* Saturn  */
      [ 74.005947,  0.5211258,  0.00133982,  0.000018516,], /* Uranus  */
      [131.784057,  1.1022057,  0.00026006, -0.000000636,], /* Neptune */
      );
    this.el_peri = new Array()(
      [ 77.456119,  1.5564775,  0.00029589,  0.000000056,], /* Mercury */
      [131.563707,  1.4022188, -0.00107337, -0.000005315,], /* Venus   */
      [102.937348,  1.7195269,  0.00045962,  0.000000499,], /* Earth   */
      [336.060234,  1.8410331,  0.00013515,  0.000000318,], /* Mars    */
      [ 14.331309,  1.6126668,  0.00103127, -0.000004569,], /* Jupiter */
      [ 93.056787,  1.9637694,  0.00083757,  0.000004899,], /* Saturn  */
      [173.005159,  1.4863784,  0.00021450,  0.000000433,], /* Uranus  */
      [ 48.123691,  1.4262677,  0.00037918, -0.000000003,], /* Neptune */
      );
    this.el_incl = new Array()(
      [  7.004986,  0.0018215, -0.00001809,  0.000000053,], /* Mercury */
      [  3.394662,  0.0010037, -0.00000088, -0.000000007,], /* Venus   */
      [  0,         0,          0,           0          ,], /* Earth   */
      [  1.849726, -0.0006010,  0.00001276, -0.000000006,], /* Mars    */
      [  1.303270, -0.0054966,  0.00000465, -0.000000004,], /* Jupiter */
      [  2.488878, -0.0037363, -0.00001516,  0.000000089,], /* Saturn  */
      [  0.773196,  0.0007744,  0.00003749, -0.000000092,], /* Uranus  */
      [  1.769952, -0.0093082, -0.00000708,  0.000000028,], /* Neptune */
      );
    this.el_ecce = new Array()(
      [  0.20563175,  0.000020406, -0.0000000284, -0.00000000017,], /* Mercury */
      [  0.00677188, -0.000047766,  0.0000000975,  0.00000000044,], /* Venus   */
      [  0.01670862, -0.000042037, -0.0000001236,  0.00000000004,], /* Earth   */
      [  0.09340062,  0.000090483, -0.0000000806, -0.00000000035,], /* Mars    */
      [  0.04849485,  0.000163244, -0.0000004719, -0.00000000197,], /* Jupiter */
      [  0.05550862, -0.000346818, -0.0000006456,  0.00000000338,], /* Saturn  */
      [  0.04629590, -0.000027337,  0.0000000790,  0.00000000025,], /* Uranus  */
      [  0.00898809,  0.000006408, -0.0000000008, -0.00000000005,], /* Neptune */
      );
    this.el_sema = new Array()(
      [  0.387098310,  0.0,  0.0,  0.0,], /* Mercury */
      [  0.723329820,  0.0,  0.0,  0.0,], /* Venus   */
      [  1.000001018,  0.0,  0.0,  0.0,], /* Earth   */
      [  1.523679342,  0.0,  0.0,  0.0,], /* Mars    */
      [  5.202603191,  0.0000001913,  0.0,  0.0,], /* Jupiter */
      [  9.554909596,  0.0000021389,  0.0,  0.0,], /* Saturn  */
      [ 19.218446062, -0.0000000372,  0.00000000098,  0.0,], /* Uranus  */
      [ 30.110386869, -0.0000001663,  0.00000000069,  0.0,], /* Neptune */
      );
    /* Ratios of mass of Sun to masses of the planets */
    this.plmass = new Array()(
        6023600,        /* Mercury */
         408523.5,      /* Venus */
         328900.5,      /* Earth and Moon */
        3098710,        /* Mars */
           1047.350,    /* Jupiter */
           3498.0,      /* Saturn */
          22960,        /* Uranus */
          19314,        /* Neptune */
      130000000,        /* Pluto */
    );

    this.ipl_to_elem = [2, 0, 0, 1, 3, 4, 5, 6, 7, 0, 0, 0, 0, 0, 2,];

  }

  log10(x) { return Math.log(x)/this.lnlog; }

  swe_sol_eclipse_where(tjd_ut, ifl, geopos, attr) {
    var retflag, retflag2;
    var dcore = new Array(10);
    ifl &= Swe.SEFLG_EPHMASK;
    SweDate.swi_set_tid_acc(tjd_ut, ifl, 0);
    if ((retflag = eclipse_where(tjd_ut, Swe.SE_SUN, null, ifl, geopos, dcore)) < 0) {
      return retflag;
    }
    if ((retflag2 = eclipse_how(tjd_ut, Swe.SE_SUN, null, ifl, geopos[0], geopos[1], 0, attr)) == Swe.ERR) {
      return retflag2;
    }
    attr[3] = dcore[0];
    return retflag;
  }

  swe_lun_occult_where(tjd_ut, ipl, starname, ifl, geopos, attr) {
    var retflag, retflag2;
    var dcore = new Array(10);
    if (ipl < 0) ipl = 0;
    ifl &= Swe.SEFLG_EPHMASK;
    SweDate.swi_set_tid_acc(tjd_ut, ifl, 0);
    /* function calls for Pluto with asteroid number 134340
     * are treated as calls for Pluto as main body SE_PLUTO */
    if (ipl == Swe.SE_AST_OFFSET + 134340) {
      ipl = Swe.SE_PLUTO;
    }
    if ((retflag = eclipse_where(tjd_ut, ipl, starname, ifl, geopos, dcore)) < 0) {
      return retflag;
    }
    if ((retflag2 = eclipse_how(tjd_ut, ipl, starname, ifl, geopos[0], geopos[1], 0, attr)) == Swe.ERR) {
      return retflag2;
    }
    attr[3] = dcore[0];
    return retflag;
  }


  eclipse_where(tjd_ut, ipl, starname, ifl, geopos, dcore) {

    var i;
    var retc = 0, niter = 0;
    var e = new Array(6), et = new Array(6),
           rm = new Array(6), rs = new Array(6), rmt = new Array(6),
           rst = new Array(6), xs = new Array(6), xst = new Array(6);
    var x = new Array(6);
    var lm = new Array(6), ls = new Array(6), lx = new Array(6);
    var dsm, dsmt, d0, D0, s0, r0, d, s, dm;
    var de = 6378140.0 / Swe.AUNIT;
    var earthobl = 1 - Swe.SwephData.EARTH_OBLATENESS;
    var deltat, tjd, sidt;
    var drad;
    var sinf1, sinf2, cosf1, cosf2;
    var rmoon = RMOON;
    var dmoon = 2 * rmoon;
    var iflag, iflag2;
    /* double ecce = Math.sqrt(2 * Swe.SwephData.EARTH_OBLATENESS - Swe.SwephData.EARTH_OBLATENESS * Swe.SwephData.EARTH_OBLATENESS); */
    var no_eclipse = false;
    var oe = this.swed.oec;
    for (i = 0; i < 10; i++)
      dcore[i] = 0;
    /* nutation need not be in lunar and solar positions,
     * if mean sidereal time will be used */
    iflag = Swe.SEFLG_SPEED | Swe.SEFLG_EQUATORIAL | ifl;
    iflag2 = iflag | Swe.SEFLG_RADIANS;
    iflag  = iflag | Swe.SEFLG_XYZ;
    deltat = SweDate.getDeltaT(tjd_ut);
    tjd = tjd_ut + deltat;
    /* moon in cartesian coordinates */
    if ((retc = this.sw.swe_calc(tjd, Swe.SE_MOON, iflag, rm)) == Swe.ERR) {
      return retc;
    }
    /* moon in polar coordinates */
    if ((retc = this.sw.swe_calc(tjd, Swe.SE_MOON, iflag2, lm)) == Swe.ERR)
      return retc;
    /* sun in cartesian coordinates */
    if ((retc = calc_planet_star(tjd, ipl, starname, iflag, rs)) == Swe.ERR)
      return retc;
    /* sun in polar coordinates */
    if ((retc = calc_planet_star(tjd, ipl, starname, iflag2, ls)) == Swe.ERR)
      return retc;
    /* save sun position */
    for (i = 0; i <= 2; i++)
      rst[i] = rs[i];
    /* save moon position */
    for (i = 0; i <= 2; i++)
      rmt[i] = rm[i];
    if ((iflag & Swe.SEFLG_NONUT)!=0) {
      sidt = this.sl.swe_sidtime0(tjd_ut, oe.eps * SwissData.RADTODEG, 0) * 15 *
                                                            SwissData.DEGTORAD;
    } else {
      sidt = this.sl.swe_sidtime(tjd_ut) * 15 * SwissData.DEGTORAD;
    }
    /*
     * radius of planet disk in AU
     */
    if (starname != null && starname.length() > 0)
      drad = 0;
    else if (ipl < Swe.SwephData.NDIAM)
      drad = Swe.SwephData.pla_diam[ipl] / 2 / Swe.AUNIT;
    else if (ipl > Swe.SE_AST_OFFSET)
      drad = this.swed.ast_diam / 2 * 1000 / Swe.AUNIT; /* km -> m -> AU */
    else
      drad = 0;
//iter_where:
    while(true) {
      for (i = 0; i <= 2; i++) {
        rs[i] = rst[i];
        rm[i] = rmt[i];
      }
      /* Account for oblateness of earth:
       * Instead of flattening the earth, we apply the
       * correction to the z coordinate of the moon and
       * the sun. This makes the calculation easier.
       */
      for (i = 0; i <= 2; i++)
        lx[i] = lm[i];
      this.sl.swi_polcart(lx, rm);
      rm[2] /= earthobl;
      /* distance of moon from geocenter */
      dm = Math.sqrt(this.sl.square_sum(rm));
      /* Account for oblateness of earth */
      for (i = 0; i <= 2; i++)
        lx[i] = ls[i];
      this.sl.swi_polcart(lx, rs);
      rs[2] /= earthobl;
      /* sun - moon vector */
      for (i = 0; i <= 2; i++) {
        e[i] = (rm[i] - rs[i]);
        et[i] = (rmt[i] - rst[i]);
      }
      /* distance sun - moon */
      dsm = Math.sqrt(this.sl.square_sum(e));
      dsmt = Math.sqrt(this.sl.square_sum(et));
      /* sun - moon unit vector */
      for (i = 0; i <= 2; i++) {
        e[i] /= dsm;
        et[i] /= dsmt;
      }
      sinf1 = ((drad - rmoon) / dsm);
      cosf1 = Math.sqrt(1 - sinf1 * sinf1);
      sinf2 = ((drad + rmoon) / dsm);
      cosf2 = Math.sqrt(1 - sinf2 * sinf2);
      /* distance of moon from fundamental plane */
      s0 = -this.sw.dot_prod(rm, e);
      /* distance of shadow axis from geocenter */
      r0 = Math.sqrt(dm * dm - s0 * s0);
      /* diameter of core shadow on fundamental plane */
      d0 = (s0 / dsm * (drad * 2 - dmoon) - dmoon) / cosf1;
      /* diameter of half-shadow on fundamental plane */
      D0 = (s0 / dsm * (drad * 2 + dmoon) + dmoon) / cosf2;
      dcore[2] = r0;
      dcore[3] = d0;
      dcore[4] = D0;
      dcore[5] = cosf1;
      dcore[6] = cosf2;
      for (i = 2; i < 5; i++)
        dcore[i] *= Swe.AUNIT / 1000.0;
      /**************************
       * central (total or annular) phase
       **************************/
      retc = 0;
      if (de * cosf1 >= r0) {
        retc |= Swe.SE_ECL_CENTRAL;
      } else if (r0 <= de * cosf1 + Math.abs(d0) / 2) {
        retc |= Swe.SE_ECL_NONCENTRAL;
      } else if (r0 <= de * cosf2 + D0 / 2) {
        retc |= (Swe.SE_ECL_PARTIAL | Swe.SE_ECL_NONCENTRAL);
      } else {
        console.error("no solar eclipse at tjd = "+tjd);

        for (i = 0; i < 10; i++)
          geopos[i] = 0;
//    *dcore = 0;
        dcore[0] = 0;
        retc = 0;
        d = 0;
        no_eclipse = true;
        /*return retc;*/
      }
      /* distance of shadow point from fundamental plane */
      d = s0 * s0 + de * de - dm * dm;
      if (d > 0) {
        d = Math.sqrt(d);
      } else {
        d = 0;
      }
      /* distance of moon from shadow point on earth */
      s = s0 - d;

      /* geographic position of eclipse center (maximum) */
      for (i = 0; i <= 2; i++)
        xs[i] = rm[i] + s * e[i];
      /* we need geographic position with correct z, as well */
      for (i = 0; i <= 2; i++)
        xst[i] = xs[i];
      xst[2] *= earthobl;
      this.sl.swi_cartpol(xst, xst);
      if (niter <= 0) {
        var cosfi = Math.cos(xst[1]);
        var sinfi = Math.sin(xst[1]);
        var eobl = Swe.SwephData.EARTH_OBLATENESS;
        var cc= 1 / Math.sqrt(cosfi * cosfi + (1-eobl) * (1-eobl) * sinfi * sinfi);
        var ss= (1-eobl) * (1-eobl) * cc;
        earthobl =  ss;
        niter++;
        continue;
      }
      this.sl.swi_polcart(xst, xst);
      /* to longitude and latitude */
      this.sl.swi_cartpol(xs, xs);
      /* measure from sidereal time at greenwich */
      xs[0] -= sidt;
      xs[0] *= SwissData.RADTODEG;
      xs[1] *= SwissData.RADTODEG;
      xs[0] = this.sl.swe_degnorm(xs[0]);
      /* west is negative */
      if (xs[0] > 180) {
        xs[0] -= 360;
      }
      geopos[0] = xs[0];
      geopos[1] = xs[1];
      /* diameter of core shadow:
       * first, distance moon - place of eclipse on earth */
      for (i = 0; i <= 2; i++)
        x[i] = rmt[i] - xst[i];
      s = Math.sqrt(this.sl.square_sum(x));
      /* diameter of core shadow at place of maximum eclipse */
      dcore[0] = (s / dsmt * ( drad * 2 - dmoon) - dmoon) * cosf1;
      dcore[0] *= Swe.AUNIT / 1000.0;
      /* diameter of penumbra at place of maximum eclipse */
      dcore[1] = (s / dsmt * ( drad * 2 + dmoon) + dmoon) * cosf2;
      dcore[1] *= Swe.AUNIT / 1000.0;
      if ((retc & Swe.SE_ECL_PARTIAL)==0 && !no_eclipse) {
        if (dcore[0] > 0) {
          /*printf("annular\n");*/
          retc |= Swe.SE_ECL_ANNULAR;
        } else {
          /*printf("total\n");*/
          retc |= Swe.SE_ECL_TOTAL;
        }
      }
      break; // while (true) ... [goto iter_where]
    }
    return retc;
  }


  calc_planet_star(tjd_et, ipl, starname, iflag, x) {
    var i;
    var retc = Swe.ERR;
    if (starname == null || starname.length() == 0) {
      retc = this.sw.swe_calc(tjd_et, ipl, iflag, x);
    }
    return retc;
  }

  swe_sol_eclipse_how(tjd_ut, ifl, geopos, attr) {

    var retflag, retflag2;
    var dcore = new Array(10), ls =  new Array(6), xaz =  new Array(6);
    var geopos2 = new Array(20);
    if (geopos[2] < Swe.SwephData.SEI_ECL_GEOALT_MIN || geopos[2] > Swe.SwephData.SEI_ECL_GEOALT_MAX) {
      console.error("location for eclipses must be between " + ((int)Swe.SwephData.SEI_ECL_GEOALT_MIN) + " and " + ((int)Swe.SwephData.SEI_ECL_GEOALT_MAX) + " m above sea");
      return Swe.ERR;
    }
    ifl &= Swe.SEFLG_EPHMASK;
    SweDate.swi_set_tid_acc(tjd_ut, ifl, 0);
    if ((retflag = eclipse_how(tjd_ut, Swe.SE_SUN, null, ifl, geopos[0],
                               geopos[1], geopos[2], attr)) == Swe.ERR) {
      return retflag;
    }
    if ((retflag2 = eclipse_where(tjd_ut, Swe.SE_SUN, null, ifl, geopos2,
                                  dcore)) == Swe.ERR) {
      return retflag2;
    }
    if (retflag!=0) {
      retflag |= (retflag2 & (Swe.SE_ECL_CENTRAL | Swe.SE_ECL_NONCENTRAL));
    }
    attr[3] = dcore[0];
    this.sw.swe_set_topo(geopos[0], geopos[1], geopos[2]);
    if (this.sw.swe_calc_ut(tjd_ut, Swe.SE_SUN, ifl | Swe.SEFLG_TOPOCTR | Swe.SEFLG_EQUATORIAL, ls) == Swe.ERR)
      return Swe.ERR;
    swe_azalt(tjd_ut, Swe.SE_EQU2HOR, geopos, 0, 10, ls, xaz);
    attr[4] = xaz[0];
    attr[5] = xaz[1];
    attr[6] = xaz[2];
    if (xaz[2] <= 0)
      retflag = 0;
    return retflag;
  }

  eclipse_how(tjd_ut, ipl, starname, ifl, geolon, geolat, geohgt, attr) {

    var i, j, k;
    var retc = 0;
    var te, d;
    var xs = new Array(6), xm = new Array(6), ls = new Array(6),
           lm = new Array(6), x1 = new Array(6), x2 = new Array(6);
    var rmoon, rsun, rsplusrm, rsminusrm;
    var dctr;
    var drad;
    var iflag = Swe.SEFLG_EQUATORIAL | Swe.SEFLG_TOPOCTR | ifl;
    var iflagcart = iflag | Swe.SEFLG_XYZ;
    var xh =  new Array(6), hmin_appr;
    var lsun, lmoon, lctr, lsunleft, a, b, sc1, sc2;
    var geopos =  new Array(3);
    for (i = 0; i < 10; i++)
      attr[i] = 0;
    geopos[0] = geolon;
    geopos[1] = geolat;
    geopos[2] = geohgt;
    te = tjd_ut + SweDate.getDeltaT(tjd_ut);
    this.sw.swe_set_topo(geolon, geolat, geohgt);
    if (calc_planet_star(te, ipl, starname, iflag, ls) == Swe.ERR) {
      return Swe.ERR;
    }
    if (this.sw.swe_calc(te, Swe.SE_MOON, iflag, lm) == Swe.ERR) {
      return Swe.ERR;
    }
    if (calc_planet_star(te, ipl, starname, iflagcart, xs) == Swe.ERR) {
      return Swe.ERR;
    }
    if (this.sw.swe_calc(te, Swe.SE_MOON, iflagcart, xm) == Swe.ERR) {
      return Swe.ERR;
    }
    /*
     * radius of planet disk in AU
     */
    if (starname != null && starname.length() > 0)
      drad = 0;
    else if (ipl < Swe.SwephData.NDIAM)
      drad = Swe.SwephData.pla_diam[ipl] / 2 / Swe.AUNIT;
    else if (ipl > Swe.SE_AST_OFFSET)
      drad = this.swed.ast_diam / 2 * 1000 / Swe.AUNIT; /* km -> m -> AU */
    else
      drad = 0;
    /*
     * azimuth and altitude of sun or planet
     */

    swe_azalt(tjd_ut, Swe.SE_EQU2HOR, geopos, 0, 10, ls, xh); /* azimuth from south, clockwise, via west */

    /* eclipse description */
    rmoon = Math.asin(RMOON / lm[2]) * SwissData.RADTODEG;
    rsun = Math.asin(drad / ls[2]) * SwissData.RADTODEG;
    rsplusrm = rsun + rmoon;
    rsminusrm = rsun - rmoon;
    for (i = 0; i < 3; i++) {
      x1[i] = xs[i] / ls[2];
      x2[i] = xm[i] / lm[2];
    }
    dctr = Math.acos(this.sl.swi_dot_prod_unit(x1, x2)) * SwissData.RADTODEG;
    /*
     * phase
     */
    if (dctr < rsminusrm) {
      retc = Swe.SE_ECL_ANNULAR;
    } else if (dctr < Math.abs(rsminusrm)) {
      retc = Swe.SE_ECL_TOTAL;
    } else if (dctr < rsplusrm) {
      retc = Swe.SE_ECL_PARTIAL;
    } else {
      retc = 0;
      console.error("no solar eclipse at tjd = "+tjd_ut);
    }
    /*
     * ratio of diameter of moon to that of sun
     */
    if (rsun > 0)
      attr[1] = rmoon / rsun;
    else
      attr[1] = 0;
    /*
     * eclipse magnitude:
     * fraction of solar diameter covered by moon
     */
    lsun = Math.asin(rsun / 2 * SwissData.DEGTORAD) * 2;
    lsunleft = (-dctr + rsun + rmoon);
    if (lsun > 0) {
      attr[0] = lsunleft / rsun / 2;
    } else {
      attr[0] = 100;
    }
    /*if (retc == SE_ECL_ANNULAR || retc == SE_ECL_TOTAL)
        attr[0] = attr[1];*/
    /*
     * obscuration:
     * fraction of solar disc obscured by moon
     */
    lsun = rsun;
    lmoon = rmoon;
    lctr = dctr;
    if (retc == 0 || lsun == 0) {
      attr[2] = 100;
    } else if (retc == Swe.SE_ECL_TOTAL || retc == Swe.SE_ECL_ANNULAR) {
      attr[2] = lmoon * lmoon / lsun / lsun;
    } else {
      a = 2 * lctr * lmoon;
      b = 2 * lctr * lsun;
      if (a < 1e-9) {
        attr[2] = lmoon * lmoon / lsun / lsun;
      } else {
        a = (lctr * lctr + lmoon * lmoon - lsun * lsun) / a;
        if (a > 1) a = 1;
        if (a < -1) a = -1;
        b = (lctr * lctr + lsun * lsun - lmoon * lmoon) / b;
        if (b > 1) b = 1;
        if (b < -1) b = -1;
        a = Math.acos(a);
        b = Math.acos(b);
        sc1 = a * lmoon * lmoon / 2;
        sc2 = b * lsun * lsun / 2;
        sc1 -= (Math.cos(a) * Math.sin(a)) * lmoon * lmoon / 2;
        sc2 -= (Math.cos(b) * Math.sin(b)) * lsun * lsun / 2;
        attr[2] = (sc1 + sc2) * 2 / Math.PI / lsun / lsun;
      }
    }
    attr[7] = dctr;
    /* approximate minimum height for visibility, considering
     * refraction and dip
     * 34.4556': refraction at horizon, from Bennets formulae
     * 1.75' / Math.sqrt(geohgt): dip of horizon
     * 0.37' / Math.sqrt(geohgt): refraction between horizon and observer */
    hmin_appr = -(34.4556 + (1.75 + 0.37) * Math.sqrt(geohgt)) / 60;
    if (xh[1] + rsun + Math.abs(hmin_appr) >= 0 && retc!=0) {
      retc |= Swe.SE_ECL_VISIBLE;        /* eclipse visible */
    }
    attr[4] = xh[0];  /* azimuth, from south, clockwise, via west */
    attr[5] = xh[1]; /* height */
    attr[6] = xh[2]; /* height */
    if (ipl == Swe.SE_SUN && (starname == null || starname.length() == 0)) {
      /* magnitude of solar eclipse according to NASA */
      attr[8] = attr[0]; /* fraction of diameter occulted */
      if ((retc & (Swe.SE_ECL_TOTAL | Swe.SE_ECL_ANNULAR)) != 0)
        attr[8] = attr[1]; /* ratio between diameters of sun and moon */
      /* saros series and member */
      for (i = 0; i < NSAROS_SOLAR; i++) {
        d = (tjd_ut - saros_data_solar[i].tstart) / SAROS_CYCLE;
        if (d < 0) continue;
        j = (int) d;
        if ((d - j) * SAROS_CYCLE < 2) {
    attr[9] = (double) saros_data_solar[i].series_no;
    attr[10] = (double) j + 1;
    break;
        }
        k = j + 1;
        if ((k - d) * SAROS_CYCLE < 2) {
    attr[9] = (double) saros_data_solar[i].series_no;
    attr[10] = (double) k + 1;
    break;
        }
      }
      if (i == NSAROS_SOLAR) {
        attr[9] = attr[10] = -99999999;
      }
    }
    return retc;
  }

  swe_sol_eclipse_when_glob(tjd_start, ifl, ifltype, tret[], backward) {
    var i, j, k, m, n, o, i1 = 0, i2 = 0;
    var retflag = 0, retflag2 = 0;
    var de = 6378.140, a;
    var t, tt, tjd, tjds, dt, dta, dtb;
    DblObj dtint=new DblObj();
    var T, T2, T3, T4, K, M, Mm;
    var E, Ff;
    var xs = new Array(6), xm = new Array(6),
           ls = new Array(6), lm = new Array(6);
    var rmoon, rsun, dcore = new Array(10);
    var dc = new Array(3);
    DblObj dctr=new DblObj();
    var twohr = 2.0 / 24.0;
    var tenmin = 10.0 / 24.0 / 60.0;
    DblObj dt1=new DblObj(0), dt2=new DblObj(0);
    var geopos = new Array(20), attr = new Array(20);
    var dtstart, dtdiv;
    var xa = new Array(6), xb = new Array(6);
    var direction = 1;
    var dont_times = false;
    var iflag, iflagcart;
    ifl &= Swe.SEFLG_EPHMASK;
    SweDate.swi_set_tid_acc(tjd_start, ifl, 0);
    iflag = Swe.SEFLG_EQUATORIAL | ifl;
    iflagcart = iflag | Swe.SEFLG_XYZ;
    if (ifltype == (Swe.SE_ECL_PARTIAL | Swe.SE_ECL_CENTRAL)) {
      console.error("central partial eclipses do not exist");
      return Swe.ERR;
    }
    if (ifltype == 0) {
      ifltype = Swe.SE_ECL_TOTAL | Swe.SE_ECL_ANNULAR
             | Swe.SE_ECL_PARTIAL | Swe.SE_ECL_ANNULAR_TOTAL
             | Swe.SE_ECL_NONCENTRAL | Swe.SE_ECL_CENTRAL;
    }
    if (backward!=0) {
      direction = -1;
    }
    K = (int) ((tjd_start - Swe.SwephData.J2000) / 365.2425 * 12.3685);
    K -= direction;
//next_try:
    while(true) {
      retflag = 0;
      dont_times = false;
      for (i = 0; i <= 9; i++)
        tret[i] = 0;
      T = K / 1236.85;
      T2 = T * T; T3 = T2 * T; T4 = T3 * T;
      Ff = this.sl.swe_degnorm(160.7108 + 390.67050274 * K
                   - 0.0016341 * T2
                   - 0.00000227 * T3
                   + 0.000000011 * T4);
      if (Ff > 180) {
        Ff -= 180;
      }
      if (Ff > 21 && Ff < 159) {    /* no eclipse possible */
        K += direction;
        continue;
      }
      /* approximate time of geocentric maximum eclipse
       * formula from Meeus, German, p. 381 */
      tjd = 2451550.09765 + 29.530588853 * K
                          + 0.0001337 * T2
                          - 0.000000150 * T3
                          + 0.00000000073 * T4;
      M = this.sl.swe_degnorm(2.5534 + 29.10535669 * K
                          - 0.0000218 * T2
                          - 0.00000011 * T3);
      Mm = this.sl.swe_degnorm(201.5643 + 385.81693528 * K
                          + 0.1017438 * T2
                          + 0.00001239 * T3
                          + 0.000000058 * T4);
      E = 1 - 0.002516 * T - 0.0000074 * T2;
      M *= SwissData.DEGTORAD;
      Mm *= SwissData.DEGTORAD;
      tjd = tjd - 0.4075 * Math.sin(Mm)
                + 0.1721 * E * Math.sin(M);
      /*
       * time of maximum eclipse (if eclipse) =
       * minimum geocentric angle between sun and moon edges.
       * After this time has been determined, check
       * whether or not an eclipse is taking place with
       * the functions eclipse_where() and _how().
       */
      dtstart = 1;
      if (tjd < 2000000 || tjd > 2500000) {
        dtstart = 5;
      }
      dtdiv = 4;
      for (dt = dtstart;
           dt > 0.0001;
           dt /= dtdiv) {
        for (i = 0, t = tjd - dt; i <= 2; i++, t += dt) {
          if (this.sw.swe_calc(t, Swe.SE_SUN, iflag, ls) == Swe.ERR) {
            return Swe.ERR;
          }
          if (this.sw.swe_calc(t, Swe.SE_MOON, iflag, lm) == Swe.ERR) {
            return Swe.ERR;
          }
          if (this.sw.swe_calc(t, Swe.SE_SUN, iflagcart, xs) == Swe.ERR) {
            return Swe.ERR;
          }
          if (this.sw.swe_calc(t, Swe.SE_MOON, iflagcart, xm) == Swe.ERR) {
            return Swe.ERR;
          }
          for (m = 0; m < 3; m++) {
            xa[m] = xs[m] / ls[2];
            xb[m] = xm[m] / lm[2];
          }
          dc[i] = Math.acos(this.sl.swi_dot_prod_unit(xa, xb)) * SwissData.RADTODEG;
          rmoon = Math.asin(RMOON / lm[2]) * SwissData.RADTODEG;
          rsun = Math.asin(RSUN / ls[2]) * SwissData.RADTODEG;
          dc[i] -= (rmoon + rsun);
        }
        find_maximum(dc[0], dc[1], dc[2], dt, dtint, dctr);
        tjd += dtint.val + dt;
      }
      tjds = tjd - SweDate.getDeltaT(tjd);
      tjds = tjd - SweDate.getDeltaT(tjds);
      tjds = tjd = tjd - SweDate.getDeltaT(tjds);
      if ((retflag = eclipse_where(tjd, Swe.SE_SUN, null, ifl, geopos, dcore)) ==
                                                                 Swe.ERR) {
        return retflag;
      }
      retflag2 = retflag;
        /* in extreme cases _where() returns no eclipse, where there is
         * actually a very small one, therefore call _how() with the
         * coordinates returned by _where(): */
      if ((retflag2 = eclipse_how(tjd, Swe.SE_SUN, null, ifl, geopos[0], geopos[1], 0, attr)) == Swe.ERR) {
        return retflag2;
      }
      if (retflag2 == 0) {
        K += direction;
        continue;
      }
      tret[0] = tjd;
      if ((backward!=0 && tret[0] >= tjd_start - 0.0001)
        || (backward==0 && tret[0] <= tjd_start + 0.0001)) {
        K += direction;
        continue;
      }
      /*
       * eclipse type, SE_ECL_TOTAL, _ANNULAR, etc.
       * SE_ECL_ANNULAR_TOTAL will be discovered later
       */
      if ((retflag = eclipse_where(tjd, Swe.SE_SUN, null, ifl, geopos, dcore)) == Swe.ERR) {
        return retflag;
      }
      if (retflag == 0) {   /* can happen with extremely small percentage */
        retflag = Swe.SE_ECL_PARTIAL | Swe.SE_ECL_NONCENTRAL;
        tret[4] = tret[5] = tjd;    /* fix this ???? */
        dont_times = true;
      }
      /*
       * check whether or not eclipse type found is wanted
       */
      /* non central eclipse is wanted: */
      if ((ifltype & Swe.SE_ECL_NONCENTRAL)==0 &&
                                   (retflag & Swe.SE_ECL_NONCENTRAL)!=0) {
        K += direction;
        continue;
      }
      /* central eclipse is wanted: */
      if ((ifltype & Swe.SE_ECL_CENTRAL)==0 &&
                                      (retflag & Swe.SE_ECL_CENTRAL)!=0) {
        K += direction;
        continue;
      }
      /* non annular eclipse is wanted: */
      if ((ifltype & Swe.SE_ECL_ANNULAR)==0 &&
                                      (retflag & Swe.SE_ECL_ANNULAR)!=0) {
        K += direction;
        continue;
      }
      /* non partial eclipse is wanted: */
      if ((ifltype & Swe.SE_ECL_PARTIAL)==0 &&
                                      (retflag & Swe.SE_ECL_PARTIAL)!=0) {
        K += direction;
        continue;
      }
      /* annular-total eclipse will be discovered later */
      if ((ifltype & (Swe.SE_ECL_TOTAL | Swe.SE_ECL_ANNULAR_TOTAL))==0
                    && (retflag & Swe.SE_ECL_TOTAL)!=0) {
        K += direction;
        continue;
      }
      if (dont_times) {
        break;
      }
      /*
       * n = 0: times of eclipse begin and end
       * n = 1: times of totality begin and end
       * n = 2: times of center line begin and end
       */
      if ((retflag & Swe.SE_ECL_PARTIAL)!=0) {
        o = 0;
      } else if ((retflag & Swe.SE_ECL_NONCENTRAL)!=0) {
        o = 1;
      }
      else
        o = 2;
      dta = twohr;
      dtb = tenmin / 3.0;
      for (n = 0; n <= o; n++) {
        if (n == 0) {
          /*dc[1] = dcore[3] / 2 + de - dcore[1];*/
          i1 = 2; i2 = 3;
        } else if (n == 1) {
          if ((retflag & Swe.SE_ECL_PARTIAL)!=0) {
            continue;
          }
          i1 = 4; i2 = 5;
        } else if (n == 2) {
          if ((retflag & Swe.SE_ECL_NONCENTRAL)!=0) {
            continue;
          }
          i1 = 6; i2 = 7;
        }
        for (i = 0, t = tjd - dta; i <= 2; i += 1, t += dta) {
          if ((retflag2 = eclipse_where(t, Swe.SE_SUN, null, ifl, geopos, dcore)) ==  Swe.ERR) {
            return retflag2;
          }
          if (n == 0) {
            dc[i] = dcore[4] / 2 + de / dcore[5] - dcore[2];
          } else if (n == 1) {
            dc[i] = Math.abs(dcore[3]) / 2 + de / dcore[6] - dcore[2];
          } else if (n == 2) {
            dc[i] = de / dcore[6] - dcore[2];
          }
        }
        find_zero(dc[0], dc[1], dc[2], dta, dt1, dt2);
        tret[i1] = tjd + dt1.val + dta;
        tret[i2] = tjd + dt2.val + dta;
        for (m = 0, dt = dtb; m < 3; m++, dt /= 3) {
          for (j = i1; j <= i2; j += (i2 - i1)) {
            for (i = 0, t = tret[j] - dt; i < 2; i++, t += dt) {
              if ((retflag2 = eclipse_where(t, Swe.SE_SUN, null, ifl, geopos, dcore)) == Swe.ERR) {
                return retflag2;
              }
              if (n == 0) {
                dc[i] = dcore[4] / 2 + de / dcore[5] - dcore[2];
              } else if (n == 1) {
                dc[i] = Math.abs(dcore[3]) / 2 + de / dcore[6] - dcore[2];
              } else if (n == 2) {
                dc[i] = de / dcore[6] - dcore[2];
              }
            }
            dt1.val = dc[1] / ((dc[1] - dc[0]) / dt);
            tret[j] -= dt1.val;
          }
        }
      }
      /*
       * annular-total eclipses
       */
      if ((retflag & Swe.SE_ECL_TOTAL)!=0) {
        if ((retflag2 = eclipse_where(tret[0], Swe.SE_SUN, null, ifl, geopos, dcore)) == Swe.ERR) {
          return retflag2;
        }
        dc[0] = dcore[0];
        if ((retflag2 = eclipse_where(tret[4], Swe.SE_SUN, null, ifl, geopos, dcore)) == Swe.ERR) {
          return retflag2;
        }
        dc[1] = dcore[0];
        if ((retflag2 = eclipse_where(tret[5], Swe.SE_SUN, null, ifl, geopos, dcore)) == Swe.ERR) {
          return retflag2;
        }
        dc[2] = dcore[0];
        /* the maximum is always total, and there is either one or
         * to times before and after, when the core shadow becomes
         * zero and totality changes into annularity or vice versa.
         */
        if (dc[0] * dc[1] < 0 || dc[0] * dc[2] < 0) {
          retflag |= Swe.SE_ECL_ANNULAR_TOTAL;
          retflag &= ~Swe.SE_ECL_TOTAL;
        }
      }
      /* if eclipse is given but not wanted: */
      if ((ifltype & Swe.SE_ECL_TOTAL)==0 &&
          (retflag & Swe.SE_ECL_TOTAL)!=0) {
        K += direction;
        continue;
      }
      /* if annular_total eclipse is given but not wanted: */
      if ((ifltype & Swe.SE_ECL_ANNULAR_TOTAL)==0 &&
          (retflag & Swe.SE_ECL_ANNULAR_TOTAL)!=0) {
        K += direction;
        continue;
      }
      /*
       * time of maximum eclipse at local apparent noon
       */
      /* first, find out, if there is a solar transit
       * between begin and end of eclipse */
      k = 2;
      for (i = 0; i < 2; i++) {
        j = i + k;
        tt = tret[j] + SweDate.getDeltaT(tret[j]);
        if (this.sw.swe_calc(tt, Swe.SE_SUN, iflag, ls) == Swe.ERR) {
          return Swe.ERR;
        }
        if (this.sw.swe_calc(tt, Swe.SE_MOON, iflag, lm) == Swe.ERR) {
          return Swe.ERR;
        }
        dc[i] = this.sl.swe_degnorm(ls[0] - lm[0]);
        if (dc[i] > 180) {
          dc[i] -= 360;
        }
      }
      if (dc[0] * dc[1] >= 0) {     /* no transit */
        tret[1] = 0;
      } else {
        tjd = tjds;
        dt = 0.1;
        dt1.val = (tret[3] - tret[2]) / 2.0;
        if (dt1.val < dt) {
          dt = dt1.val / 2.0;
        }
        for (j = 0;
            dt > 0.01;
            j++, dt /= 3) {
          for (i = 0, t = tjd; i <= 1; i++, t -= dt) {
            tt = t + SweDate.getDeltaT(t);
            if (this.sw.swe_calc(tt, Swe.SE_SUN, iflag, ls) ==
                                                                 Swe.ERR) {
              return Swe.ERR;
            }
            if (this.sw.swe_calc(tt, Swe.SE_MOON, iflag, lm) ==
                                                                 Swe.ERR) {
              return Swe.ERR;
            }
            dc[i] = this.sl.swe_degnorm(ls[0] - lm[0]);
            if (dc[i] > 180) {
              dc[i] -= 360;
            }
            if (dc[i] > 180) {
              dc[i] -= 360;
            }
          }
          a = (dc[1] - dc[0]) / dt;
          if (a < 1e-10) {
            break;
          }
          dt1.val = dc[0] / a;
          tjd += dt1.val;
        }
        tret[1] = tjd;
      }
      break;
    } // while (true)
    return retflag;
  }

  swe_lun_occult_when_glob(tjd_start, ipl, starname, ifl, ifltype, tret, backward) {
    var i, j, k, m, n, o, i1=0, i2=0;
    var retflag = 0, retflag2 = 0;
    var de = 6378.140, a;
    var t, tt, tjd=0, tjds, dt, dta, dtb;
    DblObj dtint=new DblObj();
    var drad, dl;
    var xs = new Array(6), xm = new Array(6), ls = new Array(6), lm = new Array(6);
    var rmoon, rsun, dcore = new Array(10);
    var dc = new Array(20);
    DblObj dctr=new DblObj();
    var twohr = 2.0 / 24.0;
    var tenmin = 10.0 / 24.0 / 60.0;
    DblObj dt1=new DblObj(0), dt2=new DblObj(0);
    var dadd2 = 1;
    var geopos = new Array(20);
    var dtstart, dtdiv;
    var direction = 1;
    var iflag, iflagcart;
    var dont_times = false;
    var one_try = (backward & Swe.SE_ECL_ONE_TRY) != 0;
    if (ipl < 0) ipl = 0;
//    boolean one_try = (backward & Swe.SE_ECL_ONE_TRY) != 0;
  /*if ((backward & SEI_OCC_FAST) != 0)
    dont_times = true; */
    /* function calls for Pluto with asteroid number 134340
     * are treated as calls for Pluto as main body SE_PLUTO */
    if (ipl == Swe.SE_AST_OFFSET + 134340) {
      ipl = Swe.SE_PLUTO;
    }
    ifl &= Swe.SEFLG_EPHMASK;
    SweDate.swi_set_tid_acc(tjd_start, ifl, 0);
    iflag = Swe.SEFLG_EQUATORIAL | ifl;
    iflagcart = iflag | Swe.SEFLG_XYZ;
    backward &= 1L;
    /*
     * initializations
     */
    if (ifltype == (Swe.SE_ECL_PARTIAL | Swe.SE_ECL_CENTRAL)) {
      console.error("central partial eclipses do not exist");
      return Swe.ERR;
    }
    if (ifltype == 0)
      ifltype = Swe.SE_ECL_TOTAL | Swe.SE_ECL_ANNULAR | Swe.SE_ECL_PARTIAL
             | Swe.SE_ECL_ANNULAR_TOTAL | Swe.SE_ECL_NONCENTRAL | Swe.SE_ECL_CENTRAL;
    retflag = 0;
    for (i = 0; i <= 9; i++)
      tret[i] = 0;
    if (backward!=0)
      direction = -1;
    t = tjd_start;
    tjd_start = t;
    tjd = t;
    while(true) {
//next_try:
      if (calc_planet_star(t, ipl, starname, ifl, ls) == Swe.ERR)
        return Swe.ERR;
      /* fixed stars with an ecliptic latitude > 7  or < -7 cannot have 
       * an occultation. Even lunar parallax andd proper motion of star
       * will never allow it. */
      if (Math.abs(ls[1]) > 7 && starname != null && starname.length() > 0) {
        console.error("occultation never occurs: star " + starname + " has ecl. lat. " + ls[1]);
        return Swe.ERR;
      }
      if (this.sw.swe_calc(t, Swe.SE_MOON, ifl, lm) == Swe.ERR)
        return Swe.ERR;
      dl = this.sl.swe_degnorm(ls[0] - lm[0]);
      if (direction < 0)
        dl -= 360;
      /* get rough conjunction in ecliptic longitude */
      while (Math.abs(dl) > 0.1) {
        t += dl / 13;
        if (calc_planet_star(t, ipl, starname, ifl, ls) == Swe.ERR)
            return Swe.ERR;
        if (this.sw.swe_calc(t, Swe.SE_MOON, ifl, lm) == Swe.ERR)
          return Swe.ERR;
        dl = this.sl.swe_degnorm(ls[0] - lm[0]);
        if (dl > 180) dl -= 360;
      }
      tjd = t;
      /* difference in latitude too big for an occultation */
      drad = Math.abs(ls[1] - lm[1]);
      if (drad > 2) {
        if (one_try) {
          tret[0] = t + direction; /* return a date suitable for next try */
          return 0;
        }
        t += direction * 20;
        tjd = t;
//    goto next_try;
        continue;
      }
      /*
       * radius of planet disk in AU
       */
      if (starname != null && starname.length() > 0)
        drad = 0;
      else if (ipl < Swe.SwephData.NDIAM)
        drad = Swe.SwephData.pla_diam[ipl] / 2 / Swe.AUNIT;
      else if (ipl > Swe.SE_AST_OFFSET)
        drad = this.swed.ast_diam / 2 * 1000 / Swe.AUNIT; /* km -> m -> AU */
      else
        drad = 0;
      /*
       * time of maximum eclipse (if eclipse) =
       * minimum geocentric angle between sun and moon edges.
       * After this time has been determined, check
       * whether or not an eclipse is taking place with
       * the functions eclipse_where() and _how().
       */
      dtstart = dadd2; /* originally 1 */
      dtdiv = 3;
      for (dt = dtstart;
           dt > 0.0001;
           dt /= dtdiv) {
        for (i = 0, t = tjd - dt; i <= 2; i++, t += dt) {
          if (calc_planet_star(t, ipl, starname, iflag, ls) == Swe.ERR)
            return Swe.ERR;
          if (this.sw.swe_calc(t, Swe.SE_MOON, iflag, lm) == Swe.ERR)
            return Swe.ERR;
          if (calc_planet_star(t, ipl, starname, iflagcart, xs) == Swe.ERR)
            return Swe.ERR;
          if (this.sw.swe_calc(t, Swe.SE_MOON, iflagcart, xm) == Swe.ERR)
            return Swe.ERR;
          dc[i] = Math.acos(this.sl.swi_dot_prod_unit(xs, xm)) * SwissData.RADTODEG;
          rmoon = Math.asin(RMOON / lm[2]) * SwissData.RADTODEG;
          rsun = Math.asin(drad / ls[2]) * SwissData.RADTODEG;
          dc[i] -= (rmoon + rsun);
        }
        find_maximum(dc[0], dc[1], dc[2], dt, dtint, dctr);
        tjd += dtint.val + dt;
      }
      tjd -= SweDate.getDeltaT(tjd);
      tjds = tjd;
      if ((retflag = eclipse_where(tjd, ipl, starname, ifl, geopos, dcore)) == Swe.ERR)
        return retflag;
      retflag2 = retflag;

      if (retflag2 == 0) {
        /* only one try! */
        /* if (one_try && ((direction == 1 && tjd > tjd_start) || (direction == -1 && tjd < tjd_start))) {*/
        if (one_try) {
          tret[0] = tjd;
          return 0;
        }
        /*t= tjd + direction * dadd;*/
        t = tjd + direction * 20;
        tjd = t;
//    goto next_try;
        continue;
      }
      tret[0] = tjd;
      /* should not happen anymore Version 2.01 */
      if ((backward!=0 && tret[0] >= tjd_start - 0.0001)
        || (backward==0 && tret[0] <= tjd_start + 0.0001)) {
        /*t= tjd + direction * dadd;*/
        t = tjd + direction * 20;
        tjd = t;
//    goto next_try;
        continue;
      }
      /*
       * eclipse type, SE_ECL_TOTAL, _ANNULAR, etc.
       * SE_ECL_ANNULAR_TOTAL will be discovered later
       */
      if ((retflag = eclipse_where(tjd, ipl, starname, ifl, geopos, dcore)) == Swe.ERR)
        return retflag;
      if (retflag == 0) { /* can happen with extremely small percentage */
        retflag = Swe.SE_ECL_PARTIAL | Swe.SE_ECL_NONCENTRAL;
        tret[4] = tret[5] = tjd;  /* fix this ???? */
        retflag = Swe.SE_ECL_PARTIAL | Swe.SE_ECL_NONCENTRAL;
        tret[4] = tret[5] = tjd;  /* fix this ???? */
        dont_times = true;
      }
      /*
       * check whether or not eclipse type found is wanted
       */
      /* non central eclipse is wanted: */
      if ((ifltype & Swe.SE_ECL_NONCENTRAL)==0 && (retflag & Swe.SE_ECL_NONCENTRAL)!=0) {
        /*t= tjd + direction * dadd;*/
        t = tjd + direction * 20;
        if (one_try) {
          tret[0] = tjd;
          return 0;
        }
        tjd = t;
//    goto next_try;
        continue;
      }
      /* central eclipse is wanted: */
      if ((ifltype & Swe.SE_ECL_CENTRAL)==0 && (retflag & Swe.SE_ECL_CENTRAL)!=0) {
        /*t= tjd + direction * dadd;*/
        t = tjd + direction * 20;
        if (one_try) {
          tret[0] = tjd;
          return 0;
        }
        tjd = t;
//    goto next_try;
        continue;
      }
      /* non annular eclipse is wanted: */
      if ((ifltype & Swe.SE_ECL_ANNULAR)==0 && (retflag & Swe.SE_ECL_ANNULAR)!=0) {
        /*t= tjd + direction * dadd;*/
        t = tjd + direction * 20;
        if (one_try) {
          tret[0] = tjd;
          return 0;
        }
        tjd = t;
//    goto next_try;
        continue;
      }
      /* non partial eclipse is wanted: */
      if ((ifltype & Swe.SE_ECL_PARTIAL)==0 && (retflag & Swe.SE_ECL_PARTIAL)!=0) {
        /*t= tjd + direction * dadd;*/
        t = tjd + direction * 20;
        if (one_try) {
          tret[0] = tjd;
          return 0;
        }
        tjd = t;
//    goto next_try;
        continue;
      }
      /* annular-total eclipse will be discovered later */
      if ((ifltype & (Swe.SE_ECL_TOTAL | Swe.SE_ECL_ANNULAR_TOTAL))==0 && (retflag & Swe.SE_ECL_TOTAL)!=0) {
        /*t= tjd + direction * dadd;*/
        t = tjd + direction * 20;
        if (one_try) {
          tret[0] = tjd;
          return 0;
        }
        tjd = t;
//    goto next_try;
        continue;
      }
      if (dont_times)
//        goto end_search_global;
        return retflag;
      /*
       * n = 0: times of eclipse begin and end
       * n = 1: times of totality begin and end
       * n = 2: times of center line begin and end
       */
      if ((retflag & Swe.SE_ECL_PARTIAL)!=0)
        o = 0;
      else if ((retflag & Swe.SE_ECL_NONCENTRAL)!=0)
        o = 1;
      else
        o = 2;
      dta = twohr;
      dtb = tenmin;
      for (n = 0; n <= o; n++) {
        if (n == 0) {
          /*dc[1] = dcore[3] / 2 + de - dcore[1];*/
          i1 = 2; i2 = 3;
        } else if (n == 1) {
          if ((retflag & Swe.SE_ECL_PARTIAL)!=0)
            continue;
          i1 = 4; i2 = 5;
        } else if (n == 2) {
          if ((retflag & Swe.SE_ECL_NONCENTRAL)!=0)
            continue;
          i1 = 6; i2 = 7;
        }
        for (i = 0, t = tjd - dta; i <= 2; i += 1, t += dta) {
          if ((retflag2 = eclipse_where(t, ipl, starname, ifl, geopos, dcore)) == Swe.ERR)
            return retflag2;
          if (n == 0)
            dc[i] = dcore[4] / 2 + de / dcore[5] - dcore[2];
          else if (n == 1)
            dc[i] = Math.abs(dcore[3]) / 2 + de / dcore[6] - dcore[2];
          else if (n == 2)
            dc[i] = de / dcore[6] - dcore[2];
        }
        find_zero(dc[0], dc[1], dc[2], dta, dt1, dt2);
        tret[i1] = tjd + dt1.val + dta;
        tret[i2] = tjd + dt2.val + dta;
        for (m = 0, dt = dtb; m < 3; m++, dt /= 3) {
          for (j = i1; j <= i2; j += (i2 - i1)) {
            for (i = 0, t = tret[j] - dt; i < 2; i++, t += dt) {
              if ((retflag2 = eclipse_where(t, ipl, starname, ifl, geopos, dcore)) == Swe.ERR)
                return retflag2;
              if (n == 0)
                dc[i] = dcore[4] / 2 + de / dcore[5] - dcore[2];
              else if (n == 1)
                dc[i] = Math.abs(dcore[3]) / 2 + de / dcore[6] - dcore[2];
              else if (n == 2)
                dc[i] = de / dcore[6] - dcore[2];
            }
            dt1.val = dc[1] / ((dc[1] - dc[0]) / dt);
            tret[j] -= dt1.val;
          }
        }
      }
      /*
       * annular-total eclipses
       */
      if ((retflag & Swe.SE_ECL_TOTAL)!=0) {
        if ((retflag2 = eclipse_where(tret[0], ipl, starname, ifl, geopos, dcore)) == Swe.ERR)
          return retflag2;
        dc[0] = dcore[0];
        if ((retflag2 = eclipse_where(tret[4], ipl, starname, ifl, geopos, dcore)) == Swe.ERR)
          return retflag2;
        dc[1] = dcore[0];
        if ((retflag2 = eclipse_where(tret[5], ipl, starname, ifl, geopos, dcore)) == Swe.ERR)
          return retflag2;
        dc[2] = dcore[0];
        /* the maximum is always total, and there is either one or
         * to times before and after, when the core shadow becomes
         * zero and totality changes into annularity or vice versa.
         */
        if (dc[0] * dc[1] < 0 || dc[0] * dc[2] < 0) {
          retflag |= Swe.SE_ECL_ANNULAR_TOTAL;
          retflag &= ~Swe.SE_ECL_TOTAL;
        }
      }
      /* if eclipse is given but not wanted: */
      if ((ifltype & Swe.SE_ECL_TOTAL)==0 && (retflag & Swe.SE_ECL_TOTAL)!=0) {
        /*t= tjd + direction * dadd;*/
        t = tjd + direction * 20;
        if (one_try) {
          tret[0] = tjd;
          return 0;
        }
        tjd = t;
//    goto next_try;
        continue;
      }
      /* if annular_total eclipse is given but not wanted: */
      if ((ifltype & Swe.SE_ECL_ANNULAR_TOTAL)==0 && (retflag & Swe.SE_ECL_ANNULAR_TOTAL)!=0) {
        /*t= tjd + direction * dadd;*/
        t = tjd + direction * 20;
        if (one_try) {
          tret[0] = tjd;
          return 0;
        }
        tjd = t;
//    goto next_try;
        continue;
      }
      /*
       * time of maximum eclipse at local apparent noon
       */
      /* first, find out, if there is a solar transit
       * between begin and end of eclipse */
      k = 2;
      for (i = 0; i < 2; i++) {
        j = i + k;
        tt = tret[j] + SweDate.getDeltaT(tret[j]);
        if (calc_planet_star(tt, ipl, starname, iflag, ls) == Swe.ERR)
            return Swe.ERR;
        if (this.sw.swe_calc(tt, Swe.SE_MOON, iflag, lm) == Swe.ERR)
            return Swe.ERR;
        dc[i] = this.sl.swe_degnorm(ls[0] - lm[0]);
        if (dc[i] > 180)
          dc[i] -= 360;
      }
      if (dc[0] * dc[1] >= 0)     /* no transit */
        tret[1] = 0;
      else {
        tjd = tjds;
        dt = 0.1;
        dt1.val = (tret[3] - tret[2]) / 2.0;
        if (dt1.val < dt)
          dt = dt1.val / 2.0;
        for (j = 0;
             dt > 0.01;
             j++, dt /= 3) {
          for (i = 0, t = tjd; i <= 1; i++, t -= dt) {
            tt = t + SweDate.getDeltaT(t);
            if (calc_planet_star(tt, ipl, starname, iflag, ls) == Swe.ERR)
              return Swe.ERR;
            if (this.sw.swe_calc(tt, Swe.SE_MOON, iflag, lm) == Swe.ERR)
              return Swe.ERR;
            dc[i] = this.sl.swe_degnorm(ls[0] - lm[0]);
            if (dc[i] > 180)
              dc[i] -= 360;
            if (dc[i] > 180)
              dc[i] -= 360;
          }
          a = (dc[1] - dc[0]) / dt;
          if (a < 1e-10)
            break;
          dt1.val = dc[0] / a;
          tjd += dt1.val;
        }
        tret[1] = tjd;
      }
      break;
    }
//end_search_global:
    return retflag;
  }
 
  swe_sol_eclipse_when_loc(tjd_start, ifl, geopos, tret, attr, backward) {
    var retflag = 0, retflag2 = 0;
    var geopos2 = new Array(20), dcore = new Array(10);
    if (geopos[2] < Swe.SwephData.SEI_ECL_GEOALT_MIN || geopos[2] > Swe.SwephData.SEI_ECL_GEOALT_MAX) {
      console.error("location for eclipses must be between " + ((int)Swe.SwephData.SEI_ECL_GEOALT_MIN) + " and " + ((int)Swe.SwephData.SEI_ECL_GEOALT_MAX) + " m above sea");
      return Swe.ERR;
    }
    ifl &= Swe.SEFLG_EPHMASK;
    SweDate.swi_set_tid_acc(tjd_start, ifl, 0);
    if ((retflag = eclipse_when_loc(tjd_start, ifl, geopos, tret, attr,
                                                        backward)) <= 0) {
      return retflag;
    }
    /*
     * diameter of core shadow
     */
    if ((retflag2 = eclipse_where(tret[0], Swe.SE_SUN, null, ifl, geopos2, dcore)) == Swe.ERR) {
      return retflag2;
    }
    retflag |= (retflag2 & Swe.SE_ECL_NONCENTRAL);
    attr[3] = dcore[0];
    return retflag;
  }
  swe_lun_occult_when_loc(tjd_start, ipl, starname, ifl, geopos, tret, attr, backward) {
    var retflag = 0, retflag2 = 0;
    var geopos2 = new Array(20), dcore = new Array(10);
    /* function calls for Pluto with asteroid number 134340
     * are treated as calls for Pluto as main body SE_PLUTO */
    if (geopos[2] < Swe.SwephData.SEI_ECL_GEOALT_MIN || geopos[2] > Swe.SwephData.SEI_ECL_GEOALT_MAX) {
      console.error("location for occultations must be between " + ((int)Swe.SwephData.SEI_ECL_GEOALT_MIN) + " and " + ((int)Swe.SwephData.SEI_ECL_GEOALT_MAX) + " m above sea");
      return Swe.ERR;
    }
    if (ipl < 0) ipl = 0;
    if (ipl == Swe.SE_AST_OFFSET + 134340) {
      ipl = Swe.SE_PLUTO;
    }
    ifl &= Swe.SEFLG_EPHMASK;
    SweDate.swi_set_tid_acc(tjd_start, ifl, 0);
    if ((retflag = occult_when_loc(tjd_start, ipl, starname, ifl, geopos, tret, attr, backward)) <= 0)
      return retflag;
    /*
     * diameter of core shadow
     */
    if ((retflag2 = eclipse_where(tret[0], ipl, starname, ifl, geopos2, dcore)) == Swe.ERR)
      return retflag2;
    retflag |= (retflag2 & Swe.SE_ECL_NONCENTRAL);
    attr[3] = dcore[0];
    return retflag;
  }

  eclipse_when_loc(tjd_start, ifl, geopos, tret, attr, backward) {
    var i, j, k, m;
    var retflag = 0, retc;
    var t, tjd, dt, K, T, T2, T3, T4, F, M, Mm;
    DblObj tjdr = new DblObj(), tjds = new DblObj();
    DblObj dtint=new DblObj();
    var E, Ff, A1, Om;
    var xs = new Array(6), xm = new Array(6),
           ls = new Array(6), lm = new Array(6),
           x1 = new Array(6), x2 = new Array(6), dm, ds;
    var rmoon, rsun, rsplusrm, rsminusrm;
    var dc = new Array(3), dctrmin;
    DblObj dctr=new DblObj();
    var twomin = 2.0 / 24.0 / 60.0;
    var tensec = 10.0 / 24.0 / 60.0 / 60.0;
    var twohr = 2.0 / 24.0;
    var tenmin = 10.0 / 24.0 / 60.0;
    DblObj dt1=new DblObj(0), dt2=new DblObj(0);
    var dtdiv, dtstart;
    var iflag = Swe.SEFLG_EQUATORIAL | Swe.SEFLG_TOPOCTR | ifl;
    var iflagcart = iflag | Swe.SEFLG_XYZ;
    this.sw.swe_set_topo(geopos[0], geopos[1], geopos[2]);
    K = (int) ((tjd_start - Swe.SwephData.J2000) / 365.2425 * 12.3685);
    if (backward!=0) {
      K++;
    } else {
      K--;
    }
//next_try:
    while (true) {
      T = K / 1236.85;
      T2 = T * T; T3 = T2 * T; T4 = T3 * T;
      Ff = F = this.sl.swe_degnorm(160.7108 + 390.67050274 * K
                   - 0.0016341 * T2
                   - 0.00000227 * T3
                   + 0.000000011 * T4);
      if (Ff > 180) {
        Ff -= 180;
      }
      if (Ff > 21 && Ff < 159) {         /* no eclipse possible */
        if (backward!=0) {
          K--;
        } else {
          K++;
        }
        continue;
      }
      /* approximate time of geocentric maximum eclipse.
       * formula from Meeus, German, p. 381 */
      tjd = 2451550.09765 + 29.530588853 * K
                          + 0.0001337 * T2
                          - 0.000000150 * T3
                          + 0.00000000073 * T4;
      M = this.sl.swe_degnorm(2.5534 + 29.10535669 * K
                          - 0.0000218 * T2
                          - 0.00000011 * T3);
      Mm = this.sl.swe_degnorm(201.5643 + 385.81693528 * K
                          + 0.1017438 * T2
                          + 0.00001239 * T3
                          + 0.000000058 * T4);
      Om = this.sl.swe_degnorm(124.7746 - 1.56375580 * K
                          + 0.0020691 * T2
                          + 0.00000215 * T3);
      E = 1 - 0.002516 * T - 0.0000074 * T2;
      A1 = this.sl.swe_degnorm(299.77 + 0.107408 * K - 0.009173 * T2);
      M *= SwissData.DEGTORAD;
      Mm *= SwissData.DEGTORAD;
      F *= SwissData.DEGTORAD;
      Om *= SwissData.DEGTORAD;
      A1 *= SwissData.DEGTORAD;
      tjd = tjd - 0.4075 * Math.sin(Mm)
                + 0.1721 * E * Math.sin(M);
      this.sw.swe_set_topo(geopos[0], geopos[1], geopos[2]);
      dtdiv = 2;
      dtstart = 0.5;
      if (tjd < 1900000 || tjd > 2500000) { /* because above formula is not good (delta t?) */
        dtstart = 2;
      }
      for (dt = dtstart;
           dt > 0.00001;
           dt /= dtdiv) {
        if (dt < 0.1) {
          dtdiv = 3;
        }
        for (i = 0, t = tjd - dt; i <= 2; i++, t += dt) {
          /* this takes some time, but is necessary to avoid
           * missing an eclipse */
          if (this.sw.swe_calc(t, Swe.SE_SUN, iflagcart, xs) ==
                                                                Swe.ERR) {
            return Swe.ERR;
          }
          if (this.sw.swe_calc(t, Swe.SE_SUN, iflag, ls) == Swe.ERR) {
            return Swe.ERR;
          }
          if (this.sw.swe_calc(t, Swe.SE_MOON, iflagcart, xm) ==
                                                                Swe.ERR) {
            return Swe.ERR;
          }
          if (this.sw.swe_calc(t, Swe.SE_MOON, iflag, lm) == Swe.ERR) {
            return Swe.ERR;
          }
          dm = Math.sqrt(this.sl.square_sum(xm));
          ds = Math.sqrt(this.sl.square_sum(xs));
          for (k = 0; k < 3; k++) {
            x1[k] = xs[k] / ds /*ls[2]*/;
            x2[k] = xm[k] / dm /*lm[2]*/;
          }
          dc[i] = Math.acos(this.sl.swi_dot_prod_unit(x1, x2)) * SwissData.RADTODEG;
        }
        find_maximum(dc[0], dc[1], dc[2], dt, dtint, dctr);
        tjd += dtint.val + dt;
      }
      if (this.sw.swe_calc(tjd, Swe.SE_SUN, iflagcart, xs) ==
                                                                 Swe.ERR) {
        return Swe.ERR;
      }
      if (this.sw.swe_calc(tjd, Swe.SE_SUN, iflag, ls) == Swe.ERR) {
        return Swe.ERR;
      }
      if (this.sw.swe_calc(tjd, Swe.SE_MOON, iflagcart, xm) ==
                                                                 Swe.ERR) {
        return Swe.ERR;
      }
      if (this.sw.swe_calc(tjd, Swe.SE_MOON, iflag, lm) == Swe.ERR) {
        return Swe.ERR;
      }
      dctr.val = Math.acos(this.sl.swi_dot_prod_unit(xs, xm)) * SwissData.RADTODEG;
      rmoon = Math.asin(RMOON / lm[2]) * SwissData.RADTODEG;
      rsun = Math.asin(RSUN / ls[2]) * SwissData.RADTODEG;
      rsplusrm = rsun + rmoon;
      rsminusrm = rsun - rmoon;
      if (dctr.val > rsplusrm) {
        if (backward!=0) {
          K--;
        } else {
          K++;
        }
        continue;
      }
      tret[0] = tjd - SweDate.getDeltaT(tjd);
      tret[0] = tjd - SweDate.getDeltaT(tret[0]);
      if ((backward!=0 && tret[0] >= tjd_start - 0.0001)
        || (backward==0 && tret[0] <= tjd_start + 0.0001)) {
        if (backward!=0) {
          K--;
        } else {
          K++;
        }
        continue;
      }
      if (dctr.val < rsminusrm) {
        retflag = Swe.SE_ECL_ANNULAR;
      } else if (dctr.val < Math.abs(rsminusrm)) {
        retflag = Swe.SE_ECL_TOTAL;
      } else if (dctr.val <= rsplusrm) {
        retflag = Swe.SE_ECL_PARTIAL;
      }
      dctrmin = dctr.val;
      /* contacts 2 and 3 */
      if (dctr.val > Math.abs(rsminusrm)) {/* partial, no 2nd and 3rd contact */
        tret[2] = tret[3] = 0;
      } else {
        dc[1] = Math.abs(rsminusrm) - dctrmin;
        for (i = 0, t = tjd - twomin; i <= 2; i += 2, t = tjd + twomin) {
          if (this.sw.swe_calc(t, Swe.SE_SUN, iflagcart, xs) ==
                                                                 Swe.ERR) {
            return Swe.ERR;
          }
          if (this.sw.swe_calc(t, Swe.SE_MOON, iflagcart, xm) ==
                                                                 Swe.ERR) {
            return Swe.ERR;
          }
          dm = Math.sqrt(this.sl.square_sum(xm));
          ds = Math.sqrt(this.sl.square_sum(xs));
          rmoon = Math.asin(RMOON / dm) * SwissData.RADTODEG;
          rmoon *= 0.99916; /* gives better accuracy for 2nd/3rd contacts */
          rsun = Math.asin(RSUN / ds) * SwissData.RADTODEG;
          rsminusrm = rsun - rmoon;
          for (k = 0; k < 3; k++) {
            x1[k] = xs[k] / ds /*ls[2]*/;
            x2[k] = xm[k] / dm /*lm[2]*/;
          }
          dctr.val = Math.acos(this.sl.swi_dot_prod_unit(x1, x2)) * SwissData.RADTODEG;
          dc[i] = Math.abs(rsminusrm) - dctr.val;
        }
        find_zero(dc[0], dc[1], dc[2], twomin, dt1, dt2);
        tret[2] = tjd + dt1.val + twomin;
        tret[3] = tjd + dt2.val + twomin;
        for (m = 0, dt = tensec; m < 2; m++, dt /= 10) {
          for (j = 2; j <= 3; j++) {
            if (this.sw.swe_calc(tret[j], Swe.SE_SUN,
                            iflagcart | Swe.SEFLG_SPEED, xs) ==
                                                                 Swe.ERR) {
              return Swe.ERR;
            }
            if (this.sw.swe_calc(tret[j], Swe.SE_MOON,
                            iflagcart | Swe.SEFLG_SPEED, xm) ==
                                                                 Swe.ERR) {
              return Swe.ERR;
            }
            for (i = 0; i < 2; i++) {
              if (i == 1) {
                for(k = 0; k < 3; k++) {
                  xs[k] -= xs[k+3] * dt;
                  xm[k] -= xm[k+3] * dt;
                }
              }
              dm = Math.sqrt(this.sl.square_sum(xm));
              ds = Math.sqrt(this.sl.square_sum(xs));
              rmoon = Math.asin(RMOON / dm) * SwissData.RADTODEG;
        rmoon *= 0.99916; /* gives better accuracy for 2nd/3rd contacts */
              rsun = Math.asin(RSUN / ds) * SwissData.RADTODEG;
              rsminusrm = rsun - rmoon;
              for (k = 0; k < 3; k++) {
                x1[k] = xs[k] / ds /*ls[2]*/;
                x2[k] = xm[k] / dm /*lm[2]*/;
              }
              dctr.val = Math.acos(this.sl.swi_dot_prod_unit(x1, x2)) *
                                                             SwissData.RADTODEG;
              dc[i] = Math.abs(rsminusrm) - dctr.val;
            }
            dt1.val = -dc[0] / ((dc[0] - dc[1]) / dt);
            tret[j] += dt1.val;
          }
        }
        tret[2] -= SweDate.getDeltaT(tret[2]);
        tret[3] -= SweDate.getDeltaT(tret[3]);
      }
      /* contacts 1 and 4 */
      dc[1] = rsplusrm - dctrmin;
      for (i = 0, t = tjd - twohr; i <= 2; i += 2, t = tjd + twohr) {
        if (this.sw.swe_calc(t, Swe.SE_SUN, iflagcart, xs) ==
                                                                 Swe.ERR) {
          return Swe.ERR;
        }
        if (this.sw.swe_calc(t, Swe.SE_MOON, iflagcart, xm) ==
                                                                 Swe.ERR) {
          return Swe.ERR;
        }
        dm = Math.sqrt(this.sl.square_sum(xm));
        ds = Math.sqrt(this.sl.square_sum(xs));
        rmoon = Math.asin(RMOON / dm) * SwissData.RADTODEG;
        rsun = Math.asin(RSUN / ds) * SwissData.RADTODEG;
        rsplusrm = rsun + rmoon;
        for (k = 0; k < 3; k++) {
          x1[k] = xs[k] / ds /*ls[2]*/;
          x2[k] = xm[k] / dm /*lm[2]*/;
        }
        dctr.val = Math.acos(this.sl.swi_dot_prod_unit(x1, x2)) * SwissData.RADTODEG;
        dc[i] = rsplusrm - dctr.val;
      }
      find_zero(dc[0], dc[1], dc[2], twohr, dt1, dt2);
      tret[1] = tjd + dt1.val + twohr;
      tret[4] = tjd + dt2.val + twohr;
      for (m = 0, dt = tenmin; m < 3; m++, dt /= 10) {
        for (j = 1; j <= 4; j += 3) {
          if (this.sw.swe_calc(tret[j], Swe.SE_SUN,
                          iflagcart | Swe.SEFLG_SPEED, xs) ==
                                                                 Swe.ERR) {
            return Swe.ERR;
          }
          if (this.sw.swe_calc(tret[j], Swe.SE_MOON,
                          iflagcart | Swe.SEFLG_SPEED, xm) ==
                                                                 Swe.ERR) {
            return Swe.ERR;
          }
          for (i = 0; i < 2; i++) {
            if (i == 1) {
              for(k = 0; k < 3; k++) {
                xs[k] -= xs[k+3] * dt;
                xm[k] -= xm[k+3] * dt;
              }
            }
            dm = Math.sqrt(this.sl.square_sum(xm));
            ds = Math.sqrt(this.sl.square_sum(xs));
            rmoon = Math.asin(RMOON / dm) * SwissData.RADTODEG;
            rsun = Math.asin(RSUN / ds) * SwissData.RADTODEG;
            rsplusrm = rsun + rmoon;
            for (k = 0; k < 3; k++) {
              x1[k] = xs[k] / ds /*ls[2]*/;
              x2[k] = xm[k] / dm /*lm[2]*/;
            }
            dctr.val = Math.acos(this.sl.swi_dot_prod_unit(x1, x2)) * SwissData.RADTODEG;
            dc[i] = Math.abs(rsplusrm) - dctr.val;
          }
          dt1.val = -dc[0] / ((dc[0] - dc[1]) / dt);
          tret[j] += dt1.val;
        }
      }
      tret[1] -= SweDate.getDeltaT(tret[1]);
      tret[4] -= SweDate.getDeltaT(tret[4]);
      /*
       * visibility of eclipse phases
       */
      for (i = 4; i >= 0; i--) {        /* attr for i = 0 must be kept !!! */
        if (tret[i] == 0) {
          continue;
        }
        if (eclipse_how(tret[i], Swe.SE_SUN, null, ifl, geopos[0], geopos[1], geopos[2],
                          attr) == Swe.ERR) {
          return Swe.ERR;
        }
        /*if (retflag2 & Swe.SE_ECL_VISIBLE) {} could be wrong for 1st/4th contact*/
        if (attr[6] > 0) {  /* this is save, sun above horizon, using app. alt. */
          retflag |= Swe.SE_ECL_VISIBLE;
          switch(i) {
          case 0: retflag |= Swe.SE_ECL_MAX_VISIBLE; break;
          case 1: retflag |= Swe.SE_ECL_1ST_VISIBLE; break;
          case 2: retflag |= Swe.SE_ECL_2ND_VISIBLE; break;
          case 3: retflag |= Swe.SE_ECL_3RD_VISIBLE; break;
          case 4: retflag |= Swe.SE_ECL_4TH_VISIBLE; break;
          default:  break;
          }
        }
      }

      if ((retflag & Swe.SE_ECL_VISIBLE)==0) {
        if (backward!=0) {
          K--;
        } else {
          K++;
        }
//        goto next_try;
        continue;
      }

      if (swe_rise_trans(tret[1] - 0.001, Swe.SE_SUN, null, iflag, Swe.SE_CALC_RISE|Swe.SE_BIT_DISC_BOTTOM, geopos, 0, 0, tjdr) == Swe.ERR)
        return Swe.ERR;
      if (swe_rise_trans(tret[1] - 0.001, Swe.SE_SUN, null, iflag, Swe.SE_CALC_SET|Swe.SE_BIT_DISC_BOTTOM, geopos, 0, 0, tjds) == Swe.ERR)
        return Swe.ERR;
      if (tjds.val < tret[1] || (tjds.val > tjdr.val && tjdr.val > tret[4])) {
        if (backward != 0)
          K--;
        else
          K++;
//        goto next_try;
        continue;
      }
      break;
    } // while (true)
    if (tjdr.val > tret[1] && tjdr.val < tret[4]) {
      tret[5] = tjdr.val;
      if ((retflag & Swe.SE_ECL_MAX_VISIBLE) == 0) {
        tret[0] = tjdr.val;
        if ((retc = eclipse_how(tret[5], Swe.SE_SUN, null, ifl, geopos[0], geopos[1], geopos[2], attr)) == Swe.ERR)
    return Swe.ERR;
        retflag &= ~(Swe.SE_ECL_TOTAL|Swe.SE_ECL_ANNULAR|Swe.SE_ECL_PARTIAL);
        retflag |= (retc & (Swe.SE_ECL_TOTAL|Swe.SE_ECL_ANNULAR|Swe.SE_ECL_PARTIAL));
      }
    }
    if (tjds.val > tret[1] && tjds.val < tret[4]) {
      tret[6] = tjds.val;
      if ((retflag & Swe.SE_ECL_MAX_VISIBLE) == 0) {
        tret[0] = tjds.val;
        if ((retc = eclipse_how(tret[6], Swe.SE_SUN, null, ifl, geopos[0], geopos[1], geopos[2], attr)) == Swe.ERR)
    return Swe.ERR;
        retflag &= ~(Swe.SE_ECL_TOTAL|Swe.SE_ECL_ANNULAR|Swe.SE_ECL_PARTIAL);
        retflag |= (retc & (Swe.SE_ECL_TOTAL|Swe.SE_ECL_ANNULAR|Swe.SE_ECL_PARTIAL));
      }
    }
    return retflag;
  }


  occult_when_loc(tjd_start, ipl, starname, ifl, geopos, tret, attr, backward) {
    var i, j, k, m;
    var retflag = 0;
    var t, tjd, dt;
    DblObj dtint=new DblObj();
    DblObj tjdr=new DblObj(), tjds=new DblObj();
    var xs = new Array(6), xm = new Array(6), ls = new Array(6), lm = new Array(6), x1 = new Array(6), x2 = new Array(6), dm, ds;
    var rmoon, rsun, rsplusrm, rsminusrm;
    var dc = new Array(20), dctrmin;
    DblObj dctr=new DblObj();
    var twomin = 2.0 / 24.0 / 60.0;
    var tensec = 10.0 / 24.0 / 60.0 / 60.0;
    var twohr = 2.0 / 24.0;
    var tenmin = 10.0 / 24.0 / 60.0;
    DblObj dt1=new DblObj(0), dt2=new DblObj(0);
    var dtdiv, dtstart;
    var dadd2 = 1;
    var drad, dl;
    var iflag = Swe.SEFLG_TOPOCTR | ifl;
    var iflaggeo = iflag & ~Swe.SEFLG_TOPOCTR;
    var iflagcart = iflag | Swe.SEFLG_XYZ;
    var direction = 1;
    var one_try = (backward & Swe.SE_ECL_ONE_TRY) != 0;
    var stop_after_this = false;
    backward &= 1L;
    retflag = 0;
    this.sw.swe_set_topo(geopos[0], geopos[1], geopos[2]);
    for (i = 0; i <= 9; i++)
      tret[i] = 0;
    if (backward!=0)
      direction = -1;
    //t = tjd_start - direction * 0.1;
    //tjd_start = t;
    t = tjd_start;
    tjd = tjd_start;
    var java_break_next_try = false;
    while (true) {
      java_break_next_try = false;
//next_try:
      if (calc_planet_star(t, ipl, starname, iflaggeo, ls) == Swe.ERR)
        return Swe.ERR;
      /* fixed stars with an ecliptic latitude > 7  or < -7 cannot have 
       * an occultation. Even lunar parallax andd proper motion of star
       * will never allow it. */
      if (Math.abs(ls[1]) > 7 && starname != null && starname.length() > 0) {
        console.error("occultation never occurs: star " + starname + " has ecl. lat. " + ls[1]);
        return Swe.ERR;
      }
      if (this.sw.swe_calc(t, Swe.SE_MOON, iflaggeo, lm) == Swe.ERR)
        return Swe.ERR;
      dl = this.sl.swe_degnorm(ls[0] - lm[0]);
      if (direction < 0)
        dl -= 360;
      /* get rough conjunction in ecliptic longitude */
      while (Math.abs(dl) > 0.1) {
        t += dl / 13;
        if (calc_planet_star(t, ipl, starname, iflaggeo, ls) == Swe.ERR)
      return Swe.ERR;
        if (this.sw.swe_calc(t, Swe.SE_MOON, iflaggeo, lm) == Swe.ERR)
      return Swe.ERR;
        dl = this.sl.swe_degnorm(ls[0] - lm[0]);
        if (dl > 180) dl -= 360;
      }
      tjd = t;
      /* difference in latitude too big for an occultation */
      drad = Math.abs(ls[1] - lm[1]);
      if (drad > 2) {
        if (one_try) {
          tret[0] = t + direction; /* return a date suitable for next try */
          return 0;
        }
        t += direction * 20;
        tjd = t;
//        goto next_try;
        continue;
      }
      /*
       * radius of planet disk in AU
       */
      if (starname != null && starname.length() > 0)
        drad = 0;
      else if (ipl < Swe.SwephData.NDIAM)
        drad = Swe.SwephData.pla_diam[ipl] / 2 / Swe.AUNIT;
      else if (ipl > Swe.SE_AST_OFFSET)
        drad = this.swed.ast_diam / 2 * 1000 / Swe.AUNIT; /* km -> m -> AU */
      else
        drad = 0;
      /* now find out, if there is an occultation at our geogr. location */
      dtdiv = 3;
      dtstart = dadd2; /* formerly 0.2 */
      for (dt = dtstart; 
           dt > 0.00001; 
           dt /= dtdiv) {
        if (dt < 0.01) 
          dtdiv = 2;
        for (i = 0, t = tjd - dt; i <= 2; i++, t += dt) {
          /* this takes some time, but is necessary to avoid
           * missing an eclipse */
          if (calc_planet_star(t, ipl, starname, iflagcart, xs) == Swe.ERR)
            return Swe.ERR;
          if (calc_planet_star(t, ipl, starname, iflag, ls) == Swe.ERR)
            return Swe.ERR;
          if (this.sw.swe_calc(t, Swe.SE_MOON, iflagcart, xm) == Swe.ERR)
            return Swe.ERR;
          if (this.sw.swe_calc(t, Swe.SE_MOON, iflag, lm) == Swe.ERR)
            return Swe.ERR;
          if (dt < 0.1 && Math.abs(ls[1] - lm[1]) > 2) {
            if (one_try || stop_after_this) {
              stop_after_this = true;
            } else {
              /*t = tjd + direction * 2;*/
              t = tjd + direction * 20;
              tjd = t;
//goto next_try;
              java_break_next_try = true;
              break;
            }
          }
          dc[i] = Math.acos(this.sl.swi_dot_prod_unit(xs, xm)) * SwissData.RADTODEG;
          rmoon = Math.asin(RMOON / lm[2]) * SwissData.RADTODEG;
          rsun = Math.asin(drad / ls[2]) * SwissData.RADTODEG;
          dc[i] -= (rmoon + rsun);
        }
        if (java_break_next_try) {
          break;
        }
        find_maximum(dc[0], dc[1], dc[2], dt, dtint, dctr);
        tjd += dtint.val + dt;
      }
      if (java_break_next_try) {
        continue;
      }
      if (stop_after_this) { /* has one_try = TRUE */
        tret[0] = tjd;
        return 0;
      }
      if (calc_planet_star(tjd, ipl, starname, iflagcart, xs) == Swe.ERR)
        return Swe.ERR;
      if (calc_planet_star(tjd, ipl, starname, iflag, ls) == Swe.ERR)
        return Swe.ERR;
      if (this.sw.swe_calc(tjd, Swe.SE_MOON, iflagcart, xm) == Swe.ERR)
        return Swe.ERR;
      if (this.sw.swe_calc(tjd, Swe.SE_MOON, iflag, lm) == Swe.ERR)
        return Swe.ERR;
      dctr.val = Math.acos(this.sl.swi_dot_prod_unit(xs, xm)) * SwissData.RADTODEG;
      rmoon = Math.asin(RMOON / lm[2]) * SwissData.RADTODEG;
      rsun = Math.asin(drad / ls[2]) * SwissData.RADTODEG;
      rsplusrm = rsun + rmoon;
      rsminusrm = rsun - rmoon;
      if (dctr.val > rsplusrm) {
        if (one_try) {
          tret[0] = tjd;
          return 0;
        }
        /*t = tjd + direction;*/
        t = tjd + direction * 20;
        tjd = t;
//    goto next_try;
        continue;
      }
      tret[0] = tjd - SweDate.getDeltaT(tjd);
      tret[0] = tjd - SweDate.getDeltaT(tret[0]);
      if ((backward!=0 && tret[0] >= tjd_start - 0.0001) 
          || (backward==0 && tret[0] <= tjd_start + 0.0001)) {
        /* t = tjd + direction;*/
        if (one_try) {
          tret[0] = tjd;
          return 0;
        }
        t = tjd + direction * 20;
        tjd = t;
//    goto next_try;
        continue;
      }
      if (dctr.val < rsminusrm)
        retflag = Swe.SE_ECL_ANNULAR;
      else if (dctr.val < Math.abs(rsminusrm))
        retflag = Swe.SE_ECL_TOTAL;
      else if (dctr.val <= rsplusrm)
        retflag = Swe.SE_ECL_PARTIAL;
      dctrmin = dctr.val;
      /* contacts 2 and 3 */
      if (dctr.val > Math.abs(rsminusrm)) { /* partial, no 2nd and 3rd contact */
        tret[2] = tret[3] = 0;
      } else {
        dc[1] = Math.abs(rsminusrm) - dctrmin;
        for (i = 0, t = tjd - twomin; i <= 2; i += 2, t = tjd + twomin) {
          if (calc_planet_star(t, ipl, starname, iflagcart, xs) == Swe.ERR)
            return Swe.ERR;
          if (this.sw.swe_calc(t, Swe.SE_MOON, iflagcart, xm) == Swe.ERR)
            return Swe.ERR;
          dm = Math.sqrt(this.sl.square_sum(xm));
          ds = Math.sqrt(this.sl.square_sum(xs));
          rmoon = Math.asin(RMOON / dm) * SwissData.RADTODEG;
          rmoon *= 0.99916; /* gives better accuracy for 2nd/3rd contacts */
          rsun = Math.asin(drad / ds) * SwissData.RADTODEG;
          rsminusrm = rsun - rmoon;
          for (k = 0; k < 3; k++) {
            x1[k] = xs[k] / ds /*ls[2]*/;
            x2[k] = xm[k] / dm /*lm[2]*/;
          }
          dctr.val = Math.acos(this.sl.swi_dot_prod_unit(x1, x2)) * SwissData.RADTODEG;
          dc[i] = Math.abs(rsminusrm) - dctr.val;
        }
        find_zero(dc[0], dc[1], dc[2], twomin, dt1, dt2);
        tret[2] = tjd + dt1.val + twomin;
        tret[3] = tjd + dt2.val + twomin;
        for (m = 0, dt = tensec; m < 2; m++, dt /= 10) {
          for (j = 2; j <= 3; j++) {
            if (calc_planet_star(tret[j], ipl, starname, iflagcart | Swe.SEFLG_SPEED, xs) == Swe.ERR)
              return Swe.ERR;
            if (this.sw.swe_calc(tret[j], Swe.SE_MOON, iflagcart | Swe.SEFLG_SPEED, xm) == Swe.ERR)
              return Swe.ERR;
            for (i = 0; i < 2; i++) {
              if (i == 1) {
                for(k = 0; k < 3; k++) {
                  xs[k] -= xs[k+3] * dt;
                  xm[k] -= xm[k+3] * dt;
                }
              }
              dm = Math.sqrt(this.sl.square_sum(xm));
              ds = Math.sqrt(this.sl.square_sum(xs));
              rmoon = Math.asin(RMOON / dm) * SwissData.RADTODEG;
        rmoon *= 0.99916; /* gives better accuracy for 2nd/3rd contacts */
              rsun = Math.asin(drad / ds) * SwissData.RADTODEG;
              rsminusrm = rsun - rmoon;
              for (k = 0; k < 3; k++) {
                x1[k] = xs[k] / ds /*ls[2]*/;
                x2[k] = xm[k] / dm /*lm[2]*/;
              }
              dctr.val = Math.acos(this.sl.swi_dot_prod_unit(x1, x2)) * SwissData.RADTODEG;
              dc[i] = Math.abs(rsminusrm) - dctr.val;
            }
            dt1.val = -dc[0] / ((dc[0] - dc[1]) / dt);
            tret[j] += dt1.val;
          }
        }
        tret[2] -= SweDate.getDeltaT(tret[2]);
        tret[3] -= SweDate.getDeltaT(tret[3]);
      }
      /* contacts 1 and 4 */
      dc[1] = rsplusrm - dctrmin;
      for (i = 0, t = tjd - twohr; i <= 2; i += 2, t = tjd + twohr) {
        if (calc_planet_star(t, ipl, starname, iflagcart, xs) == Swe.ERR)
          return Swe.ERR;
        if (this.sw.swe_calc(t, Swe.SE_MOON, iflagcart, xm) == Swe.ERR)
          return Swe.ERR;
        dm = Math.sqrt(this.sl.square_sum(xm));
        ds = Math.sqrt(this.sl.square_sum(xs));
        rmoon = Math.asin(RMOON / dm) * SwissData.RADTODEG;
        rsun = Math.asin(drad / ds) * SwissData.RADTODEG;
        rsplusrm = rsun + rmoon;
        for (k = 0; k < 3; k++) {
          x1[k] = xs[k] / ds /*ls[2]*/;
          x2[k] = xm[k] / dm /*lm[2]*/;
        }
        dctr.val = Math.acos(this.sl.swi_dot_prod_unit(x1, x2)) * SwissData.RADTODEG;
        dc[i] = rsplusrm - dctr.val;
      }
      find_zero(dc[0], dc[1], dc[2], twohr, dt1, dt2);
      tret[1] = tjd + dt1.val + twohr;
      tret[4] = tjd + dt2.val + twohr;
      for (m = 0, dt = tenmin; m < 3; m++, dt /= 10) {
        for (j = 1; j <= 4; j += 3) {
          if (calc_planet_star(tret[j], ipl, starname, iflagcart | Swe.SEFLG_SPEED, xs) == Swe.ERR)
            return Swe.ERR;
          if (this.sw.swe_calc(tret[j], Swe.SE_MOON, iflagcart | Swe.SEFLG_SPEED, xm) == Swe.ERR)
            return Swe.ERR;
          for (i = 0; i < 2; i++) {
            if (i == 1) {
              for(k = 0; k < 3; k++) {
                xs[k] -= xs[k+3] * dt;
                xm[k] -= xm[k+3] * dt;
              }
            }
            dm = Math.sqrt(this.sl.square_sum(xm));
            ds = Math.sqrt(this.sl.square_sum(xs));
            rmoon = Math.asin(RMOON / dm) * SwissData.RADTODEG;
            rsun = Math.asin(drad / ds) * SwissData.RADTODEG;
            rsplusrm = rsun + rmoon;
            for (k = 0; k < 3; k++) {
              x1[k] = xs[k] / ds /*ls[2]*/;
              x2[k] = xm[k] / dm /*lm[2]*/;
            }
            dctr.val = Math.acos(this.sl.swi_dot_prod_unit(x1, x2)) * SwissData.RADTODEG;
            dc[i] = Math.abs(rsplusrm) - dctr.val;
          }
          dt1.val = -dc[0] / ((dc[0] - dc[1]) / dt);
          tret[j] += dt1.val;
        }
      }
      tret[1] -= SweDate.getDeltaT(tret[1]);
      tret[4] -= SweDate.getDeltaT(tret[4]);
      /*  
       * visibility of eclipse phases 
       */
      for (i = 4; i >= 0; i--) {  /* attr for i = 0 must be kept !!! */
        if (tret[i] == 0)
          continue;
        if (eclipse_how(tret[i], ipl, starname, ifl, geopos[0], geopos[1], geopos[2], 
        attr) == Swe.ERR)
          return Swe.ERR;
        /*if (retflag2 & Swe.SE_ECL_VISIBLE) { could be wrong for 1st/4th contact } */
        if (attr[6] > 0) {  /* this is save, sun above horizon (using app. alt.) */
          retflag |= Swe.SE_ECL_VISIBLE;
          switch(i) {
          case 0: retflag |= Swe.SE_ECL_MAX_VISIBLE; break;
          case 1: retflag |= Swe.SE_ECL_1ST_VISIBLE; break;
          case 2: retflag |= Swe.SE_ECL_2ND_VISIBLE; break;
          case 3: retflag |= Swe.SE_ECL_3RD_VISIBLE; break;
          case 4: retflag |= Swe.SE_ECL_4TH_VISIBLE; break;
          default:  break;
          }
        }
      }

      if ((retflag & Swe.SE_ECL_VISIBLE)==0) {
        /* t = tjd + direction;*/
        if (one_try) {
          tret[0] = tjd;
          return 0;
        }
        t = tjd + direction * 20;
        tjd = t;
//    goto next_try;
        continue;
      }

      break; // next_try
    } // while (true) .. [goto next_try]
    if (swe_rise_trans(tret[1] - 0.1, ipl, starname, iflag, Swe.SE_CALC_RISE|Swe.SE_BIT_DISC_BOTTOM, geopos, 0, 0, tjdr) == Swe.ERR)
      return Swe.ERR;
    if (swe_rise_trans(tret[1] - 0.1, ipl, starname, iflag, Swe.SE_CALC_SET|Swe.SE_BIT_DISC_BOTTOM, geopos, 0, 0, tjds) == Swe.ERR)
      return Swe.ERR;
    if (tjdr.val > tret[1] && tjdr.val < tret[4])
      tret[5] = tjdr.val;
    if (tjds.val > tret[1] && tjds.val < tret[4])
      tret[6] = tjds.val;
    if (swe_rise_trans(tret[2], Swe.SE_SUN, null, iflag, Swe.SE_CALC_RISE, geopos, 0, 0, tjdr) == Swe.ERR)
      return Swe.ERR;
    if (swe_rise_trans(tret[2], Swe.SE_SUN, null, iflag, Swe.SE_CALC_SET, geopos, 0, 0, tjds) == Swe.ERR)
      return Swe.ERR;
    if (tjds.val < tjdr.val)
      retflag |= Swe.SE_ECL_OCC_BEG_DAYLIGHT;
    if (swe_rise_trans(tret[3], Swe.SE_SUN, null, iflag, Swe.SE_CALC_RISE, geopos, 0, 0, tjdr) == Swe.ERR)
      return Swe.ERR;
    if (swe_rise_trans(tret[3], Swe.SE_SUN, null, iflag, Swe.SE_CALC_SET, geopos, 0, 0, tjds) == Swe.ERR)
      return Swe.ERR;
    if (tjds.val < tjdr.val)
      retflag |= Swe.SE_ECL_OCC_END_DAYLIGHT;
    return retflag;
  }

  void swe_azalt(tjd_ut, calc_flag, geopos, atpress, attemp, xin, xaz) {
    var i;
    var x = new Array(6), xra = new Array(3);
    var armc = this.sl.swe_degnorm(this.sl.swe_sidtime(tjd_ut) * 15 + geopos[0]);
    var mdd, eps_true, tjd_et;
    for (i = 0; i < 2; i++)
      xra[i] = xin[i];
    xra[2] = 1;
    if (calc_flag == Swe.SE_ECL2HOR) {
          tjd_et = tjd_ut + SweDate.getDeltaT(tjd_ut);
      this.sw.swe_calc(tjd_et, Swe.SE_ECL_NUT, 0, x, null);
      eps_true = x[0];
          this.sl.swe_cotrans(xra, 0, xra, 0, -eps_true);
    }
    mdd = this.sl.swe_degnorm(xra[0] - armc);
    x[0] = this.sl.swe_degnorm(mdd - 90);
    x[1] = xra[1];
    x[2] = 1;
    /* azimuth from east, counterclock */
    this.sl.swe_cotrans(x, 0, x, 0, 90 - geopos[1]);
    /* azimuth from south to west */
    x[0] = this.sl.swe_degnorm(x[0] + 90);
    xaz[0] = 360 - x[0];
    xaz[1] = x[1];                /* true height */
    if (atpress == 0) {
      /* estimate atmospheric pressure */
      atpress = 1013.25 * Math.pow(1 - 0.0065 * geopos[2] / 288, 5.255);
    }
    xaz[2] = swe_refrac_extended(x[1], geopos[2], atpress, attemp, const_lapse_rate, Swe.SE_TRUE_TO_APP, null);
    /* xaz[2] = swe_refrac_extended(xaz[2], geopos[2], atpress, attemp, const_lapse_rate, Swe.SE_APP_TO_TRUE, null);*/

  }

  void swe_azalt_rev(tjd_ut, calc_flag, geopos, xin, xout) {
    var i;
    var x = new Array(6), xaz = new Array(3);
    var geolon = geopos[0];
    var geolat = geopos[1];
    var armc = this.sl.swe_degnorm(this.sl.swe_sidtime(tjd_ut) * 15 + geolon);
    var eps_true, tjd_et, dang;
    for (i = 0; i < 2; i++)
      xaz[i] = xin[i];
    xaz[2] = 1;
    /* azimuth is from south, clockwise.
     * we need it from east, counterclock */
    xaz[0] = 360 - xaz[0];
    xaz[0] = this.sl.swe_degnorm(xaz[0] - 90);
    /* equatorial positions */
    dang = geolat - 90;
    this.sl.swe_cotrans(xaz, 0, xaz, 0, dang);
    xaz[0] = this.sl.swe_degnorm(xaz[0] + armc + 90);
    xout[0] = xaz[0];
    xout[1] = xaz[1];
    /* ecliptic positions */
    if (calc_flag == Swe.SE_HOR2ECL) {
      tjd_et = tjd_ut + SweDate.getDeltaT(tjd_ut);
      this.sw.swe_calc(tjd_et, Swe.SE_ECL_NUT, 0, x, null);
      eps_true = x[0];
      this.sl.swe_cotrans(xaz, 0, x, 0, eps_true);
      xout[0] = x[0];
      xout[1] = x[1];
    }
  }

  swe_refrac(inalt, atpress, attemp, calc_flag) {
    var  a, refr;
    var  pt_factor = atpress / 1010.0 * 283.0 / (273.0 + attemp);
    var  trualt, appalt;

    /* another algorithm, from Meeus, German, p. 114ff.
     */
    if (calc_flag == Swe.SE_TRUE_TO_APP) {
      trualt = inalt;
      if (trualt > 15) {
        a = Math.tan((90 - trualt) * SwissData.DEGTORAD);
        refr = (58.276 * a - 0.0824 * a * a * a);
        refr *=  pt_factor / 3600.0;
      } else if (trualt > -5) {
        /* the following tan is not defined for a value
         * of trualt near -5.00158 and 89.89158 */
        a = trualt + 10.3 / (trualt + 5.11);
        if (a + 1e-10 >= 90) {
          refr = 0;
        } else {
          refr = 1.02 / Math.tan(a * SwissData.DEGTORAD);
        }
        refr *= pt_factor / 60.0;
      } else {
        refr = 0;
      }
      appalt = trualt;
      if (appalt + refr > 0) {
        appalt += refr;
      }
      return appalt;
    } else { // SE_TRUE_TO_APP
    /* apparent to true */
      appalt = inalt;
      /* the following tan is not defined for a value
       * of inalt near -4.3285 and 89.9225 */
      a = appalt + 7.31 / (appalt + 4.4);
      if (a + 1e-10 >= 90)
        refr = 0;
      else {
        refr = 1.00 / Math.tan(a * SwissData.DEGTORAD);
        refr -= 0.06 * Math.sin(14.7 * refr + 13);
      }
      refr *= pt_factor / 60.0;
      trualt = appalt;
      if (appalt - refr > 0)
        trualt = appalt - refr;
      return trualt;
    }
  }

  void swe_set_lapse_rate(lapse_rate) {
    const_lapse_rate = lapse_rate;
  }

  swe_refrac_extended(inalt, geoalt, atpress, attemp, lapse_rate, calc_flag, dret) {
    var  refr;
    var  trualt;
    var  dip = calc_dip(geoalt, atpress, attemp, lapse_rate);
    var  D, D0, N, y, yy0;
    var i;
    /* make sure that inalt <=90 */
    if( (inalt>90) )
      inalt=180-inalt;
    if (calc_flag == Swe.SE_TRUE_TO_APP) {
      if (inalt < -10) {
        if (dret != null && dret.length > 3) {
          dret[0]=inalt;
          dret[1]=inalt;
          dret[2]=0;
          dret[3]=dip;
        }
        return inalt;
      }
      /* by iteration */
      y = inalt;
      D = 0.0;
      yy0 = 0;
      D0 = D;
      for(i=0; i<5; i++) {
        D = calc_astronomical_refr(y,atpress,attemp);
        N = y - yy0;
        yy0 = D - D0 - N; /* denominator of derivative */
        if (N != 0.0 && yy0 != 0.0) /* sic !!! code by Moshier */
          N = y - N*(inalt + D - y)/yy0; /* Newton iteration with numerically estimated derivative */
        else /* Can't do it on first pass */
          N = inalt + D;
        yy0 = y;
        D0 = D;
        y = N;
      }
      refr = D;
      if( (inalt + refr < dip) ) {
        if (dret != null) {
          dret[0]=inalt;
          dret[1]=inalt;
          dret[2]=0;
          dret[3]=dip;
        }
        return inalt;
      }
      if (dret != null) {
        dret[0]=inalt;
        dret[1]=inalt+refr;
        dret[2]=refr;
        dret[3]=dip;
      }
      return inalt+refr;
    } else {
      refr = calc_astronomical_refr(inalt,atpress,attemp);
      trualt=inalt-refr;
      if (dret != null) {
        if (inalt > dip) {
          dret[0]=trualt;
          dret[1]=inalt;
          dret[2]=refr;
          dret[3]=dip;
        } else {
          dret[0]=inalt;
          dret[1]=inalt;
          dret[2]=0;
          dret[3]=dip;
        }
      }
      if (trualt > dip)
        return trualt;
      else
        return inalt;
    }
  }

  calc_astronomical_refr(inalt, atpress, attemp) {

    /* Formula by Sinclair, see article mentioned above, p. 256. Better for
     * apparent altitudes < 0;  */
    var  r;
    if (inalt > 17.904104638432) { /* for continuous function, instead of '>15' */
      r = 0.97 / Math.tan(inalt * SwissData.DEGTORAD);
    } else {
      r = (34.46 + 4.23 * inalt + 0.004 * inalt * inalt) / (1 + 0.505 * inalt + 0.0845 * inalt * inalt);
    }
    r = ((atpress - 80) / 930 / (1 + 0.00008 * (r + 39) * (attemp - 10)) * r) / 60.0;
    return r;
  }

  calc_dip(geoalt, atpress, attemp, lapse_rate) {
    /* below formula is based on A. Thom, Megalithic lunar observations, 1973 (page 32).
    * conversion to metric has been done by
    * V. Reijs, 2000, http://www.iol.ie/~geniet/eng/refract.htm
    */
    var  krefr = (0.0342 + lapse_rate) / (0.154 * 0.0238);
    var  d = 1-1.8480*krefr*atpress/(273.16+attemp)/(273.16+attemp);
    /* return -0.03203*sqrt(geoalt)*sqrt(d); */
    /* double a = acos(1/(1+geoalt/EARTH_RADIUS));*/
    return -180.0/Math.PI * Math.acos(1 / (1 + geoalt / Swe.SwephData.EARTH_RADIUS)) * Math.sqrt(d);
  }
  swe_lun_eclipse_how(tjd_ut, ifl, geopos, attr) {
    var  dcore = new Array(10);
    var  lm =  new Array(6), xaz =  new Array(6);
    var retc;
    /* attention: geopos[] is not used so far; may be null */
    // if (geopos != NULL)
    //   geopos[0] = geopos[0]; /* to shut up mint */
    if (geopos != null && (geopos[2] < Swe.SwephData.SEI_ECL_GEOALT_MIN || geopos[2] > Swe.SwephData.SEI_ECL_GEOALT_MAX)) {
      console.error("location for eclipses must be between " + ((int)Swe.SwephData.SEI_ECL_GEOALT_MIN) + " and " + ((int)Swe.SwephData.SEI_ECL_GEOALT_MAX) + " m above sea");
      return Swe.ERR;
    }
    ifl = ifl & ~Swe.SEFLG_TOPOCTR;
    ifl &= ~(Swe.SEFLG_JPLHOR | Swe.SEFLG_JPLHOR_APPROX);
    SweDate.swi_set_tid_acc(tjd_ut, ifl, 0);
    retc = lun_eclipse_how(tjd_ut, ifl, attr, dcore);
    if (geopos == null) {
      return retc;
    }
    /* 
     * azimuth and altitude of moon
     */
    this.sw.swe_set_topo(geopos[0], geopos[1], geopos[2]);
    if (this.sw.swe_calc_ut(tjd_ut, Swe.SE_MOON, ifl | Swe.SEFLG_TOPOCTR | Swe.SEFLG_EQUATORIAL, lm) == Swe.ERR)
      return Swe.ERR;
    swe_azalt(tjd_ut, Swe.SE_EQU2HOR, geopos, 0, 10, lm, xaz);
    attr[4] = xaz[0];
    attr[5] = xaz[1];
    attr[6] = xaz[2];
    if (xaz[2] <= 0)
      retc = 0;
    return retc;
  }

  lun_eclipse_how(tjd_ut, ifl, attr, dcore) {
    var i, j, k;
    var retc = 0;
    var  e = new Array(6), rm = new Array(6), rs = new Array(6);
    var  dsm, d0, D0, s0, r0, ds, dm;
    var  dctr, x1 = new Array(6), x2 = new Array(6);
    var  f1, f2;
    var  deltat, tjd, d;
    var  cosf1, cosf2;
    var  rmoon = RMOON;
    var  dmoon = 2 * rmoon;
    var iflag;
    for (i = 0; i < 10; i++)
      dcore[i] = 0;
    for (i = 0; i < 20; i++)
      attr[i] = 0;
    /* nutation need not be in lunar and solar positions,
     * if mean sidereal time will be used */
    iflag = Swe.SEFLG_SPEED | Swe.SEFLG_EQUATORIAL | ifl;
    iflag  = iflag | Swe.SEFLG_XYZ;
    deltat = SweDate.getDeltaT(tjd_ut);
    tjd = tjd_ut + deltat;
    /* moon in cartesian coordinates */
    if (this.sw.swe_calc(tjd, Swe.SE_MOON, iflag, rm) == Swe.ERR) {
      return Swe.ERR;
    }
    /* distance of moon from geocenter */
    dm = Math.sqrt(this.sl.square_sum(rm));
    /* sun in cartesian coordinates */
    if (this.sw.swe_calc(tjd, Swe.SE_SUN, iflag, rs) == Swe.ERR) {
      return Swe.ERR;
    }
    /* distance of sun from geocenter */
    ds = Math.sqrt(this.sl.square_sum(rs));
    for (i = 0; i < 3; i++) {
      x1[i] = rs[i] / ds;
      x2[i] = rm[i] / dm;
    }
    dctr = Math.acos(this.sl.swi_dot_prod_unit(x1, x2)) * SwissData.RADTODEG;
    /* selenocentric sun */
    for (i = 0; i <= 2; i++)
      rs[i] -= rm[i];
    /* selenocentric earth */
    for (i = 0; i <= 2; i++)
      rm[i] = -rm[i];
    /* sun - earth vector */
    for (i = 0; i <= 2; i++)
      e[i] = (rm[i] - rs[i]);
    /* distance sun - earth */
    dsm = Math.sqrt(this.sl.square_sum(e));
    /* sun - earth unit vector */
    for (i = 0; i <= 2; i++)
      e[i] /= dsm;
    f1 = ((RSUN - REARTH) / dsm);
    cosf1 = Math.sqrt(1 - f1 * f1);
    f2 = ((RSUN + REARTH) / dsm);
    cosf2 = Math.sqrt(1 - f2 * f2);
    /* distance of earth from fundamental plane */
    s0 = -sw.dot_prod(rm, e);
    /* distance of shadow axis from selenocenter */
    r0 = Math.sqrt(dm * dm - s0 * s0);
    /* diameter of core shadow on fundamental plane */
           /* one 50th is added for effect of atmosphere, AA98, L4 */
    d0 = Math.abs(s0 / dsm * (DSUN - DEARTH) - DEARTH) * (1 + 1.0 / 50.0) / cosf1;
    /* diameter of half-shadow on fundamental plane */
    D0 = (s0 / dsm * (DSUN + DEARTH) + DEARTH) * (1 + 1.0 / 50.0) / cosf2;
    d0 /= cosf1;
    D0 /= cosf2;
    /* for better agreement with NASA: */
    d0 *= 0.99405;
    D0 *= 0.98813;
    dcore[0] = r0;
    dcore[1] = d0;
    dcore[2] = D0;
    dcore[3] = cosf1;
    dcore[4] = cosf2;
    /**************************
     * phase and umbral magnitude
     **************************/
    retc = 0;
    if (d0 / 2 >= r0 + rmoon / cosf1) {
      retc = Swe.SE_ECL_TOTAL;
      attr[0] = (d0 / 2 - r0 + rmoon) / dmoon;
    } else if (d0 / 2 >= r0 - rmoon / cosf1) {
      retc = Swe.SE_ECL_PARTIAL;
      attr[0] = (d0 / 2 - r0 + rmoon) / dmoon;
    } else if (D0 / 2 >= r0 - rmoon / cosf2) {
      retc = Swe.SE_ECL_PENUMBRAL;
      attr[0] = 0;
    } else {
      console.error("no lunar eclipse at tjd = "+tjd);
    }
    attr[8] = attr[0];
    /**************************
     * penumbral magnitude
     **************************/
    attr[1] = (D0 / 2 - r0 + rmoon) / dmoon;
    if (retc != 0) {
      attr[7] = 180 - Math.abs(dctr);
    }
    /* saros series and member */
    for (i = 0; i < NSAROS_LUNAR; i++) {
      d = (tjd_ut - saros_data_lunar[i].tstart) / SAROS_CYCLE;
      if (d < 0) continue;
      j = (int) d;
      if ((d - j) * SAROS_CYCLE < 2) {
        attr[9] = (double) saros_data_lunar[i].series_no;
        attr[10] = (double) j + 1;
        break;
      }
      k = j + 1;
      if ((k - d) * SAROS_CYCLE < 2) {
        attr[9] = (double) saros_data_lunar[i].series_no;
        attr[10] = (double) k + 1;
        break;
      }
    }
    if (i == NSAROS_LUNAR) {
      attr[9] = attr[10] = -99999999;
    }
    return retc;
  }
  swe_lun_eclipse_when(tjd_start, ifl, ifltype, tret, backward) {
    var i, j, m, n, o, i1 = 0, i2 = 0;
    var retflag = 0, retflag2 = 0;
    var  t, tjd, tjd2, dt, dta, dtb;
    DblObj dtint=new DblObj();
    var  T, T2, T3, T4, K, F, M, Mm;
    var  E, Ff, F1, A1, Om;
    var  xs = new Array(6), xm = new Array(6), dm, ds;
    var  rsun, rearth, dcore = new Array(10);
    var  dc = new Array(3);
    DblObj dctr=new DblObj();
    var  twohr = 2.0 / 24.0;
    var  tenmin = 10.0 / 24.0 / 60.0;
    DblObj dt1=new DblObj(0), dt2=new DblObj(0);
    var  kk;
    var  attr = new Array(20);
    var  dtstart, dtdiv;
    var  xa = new Array(6), xb = new Array(6);
    var direction = 1;
    var iflag;
    var iflagcart;
    ifl &= Swe.SEFLG_EPHMASK;
    SweDate.swi_set_tid_acc(tjd_start, ifl, 0);
    iflag = Swe.SEFLG_EQUATORIAL | ifl;
    iflagcart = iflag | Swe.SEFLG_XYZ;
    if (ifltype == 0) {
      ifltype = Swe.SE_ECL_TOTAL | Swe.SE_ECL_PENUMBRAL |
                Swe.SE_ECL_PARTIAL;
    }
    if (backward!=0) {
      direction = -1;
    }
    K = (int) ((tjd_start - Swe.SwephData.J2000) / 365.2425 * 12.3685);
    K -= direction;
//next_try:
    while (true) {
      retflag = 0;
      for (i = 0; i <= 9; i++)
        tret[i] = 0;
      kk = K + 0.5;
      T = kk / 1236.85;
      T2 = T * T; T3 = T2 * T; T4 = T3 * T;
      Ff = F = this.sl.swe_degnorm(160.7108 + 390.67050274 * kk
                   - 0.0016341 * T2
                   - 0.00000227 * T3
                   + 0.000000011 * T4);
      if (Ff > 180) {
        Ff -= 180;
      }
      if (Ff > 21 && Ff < 159) {         /* no eclipse possible */
        K += direction;
        continue;
      }
      /* approximate time of geocentric maximum eclipse
       * formula from Meeus, German, p. 381 */
      tjd = 2451550.09765 + 29.530588853 * kk
                          + 0.0001337 * T2
                          - 0.000000150 * T3
                          + 0.00000000073 * T4;
      M = this.sl.swe_degnorm(2.5534 + 29.10535669 * kk
                          - 0.0000218 * T2
                          - 0.00000011 * T3);
      Mm = this.sl.swe_degnorm(201.5643 + 385.81693528 * kk
                          + 0.1017438 * T2
                          + 0.00001239 * T3
                          + 0.000000058 * T4);
      Om = this.sl.swe_degnorm(124.7746 - 1.56375580 * kk
                          + 0.0020691 * T2
                          + 0.00000215 * T3);
      E = 1 - 0.002516 * T - 0.0000074 * T2;
      A1 = this.sl.swe_degnorm(299.77 + 0.107408 * kk - 0.009173 * T2);
      M *= SwissData.DEGTORAD;
      Mm *= SwissData.DEGTORAD;
      F *= SwissData.DEGTORAD;
      Om *= SwissData.DEGTORAD;
      F1 = F - 0.02665 * Math.sin(Om) * SwissData.DEGTORAD;
      A1 *= SwissData.DEGTORAD;
      tjd = tjd - 0.4075 * Math.sin(Mm)
                + 0.1721 * E * Math.sin(M)
                + 0.0161 * Math.sin(2 * Mm)
                - 0.0097 * Math.sin(2 * F1)
                + 0.0073 * E * Math.sin(Mm - M)
                - 0.0050 * E * Math.sin(Mm + M)
                - 0.0023 * Math.sin(Mm - 2 * F1)
                + 0.0021 * E * Math.sin(2 * M)
                + 0.0012 * Math.sin(Mm + 2 * F1)
                + 0.0006 * E * Math.sin(2 * Mm + M)
                - 0.0004 * Math.sin(3 * Mm)
                - 0.0003 * E * Math.sin(M + 2 * F1)
                + 0.0003 * Math.sin(A1)
                - 0.0002 * E * Math.sin(M - 2 * F1)
                - 0.0002 * E * Math.sin(2 * Mm - M)
                - 0.0002 * Math.sin(Om);
      /*
       * precise computation:
       * time of maximum eclipse (if eclipse) =
       * minimum selenocentric angle between sun and earth edges.
       * After this time has been determined, check
       * whether or not an eclipse is taking place with
       * the function lun_eclipse_how().
       */
      dtstart = 0.1;
      if (tjd < 2000000 || tjd > 2500000) {
        dtstart = 5;
      }
      dtdiv = 4;
      for (j = 0, dt = dtstart;
           dt > 0.001;
           j++, dt /= dtdiv) {
        for (i = 0, t = tjd - dt; i <= 2; i++, t += dt) {
          if (this.sw.swe_calc(t, Swe.SE_SUN, iflagcart, xs) ==
                                                                 Swe.ERR) {
            return Swe.ERR;
          }
          if (this.sw.swe_calc(t, Swe.SE_MOON, iflagcart, xm) ==
                                                                 Swe.ERR) {
            return Swe.ERR;
          }
          for (m = 0; m < 3; m++) {
            xs[m] -= xm[m];        /* selenocentric sun */
            xm[m] = -xm[m];        /* selenocentric earth */
          }
          ds = Math.sqrt(this.sl.square_sum(xs));
          dm = Math.sqrt(this.sl.square_sum(xm));
          for (m = 0; m < 3; m++) {
            xa[m] = xs[m] / ds;
            xb[m] = xm[m] / dm;
          }
          dc[i] = Math.acos(this.sl.swi_dot_prod_unit(xa, xb)) * SwissData.RADTODEG;
          rearth = Math.asin(REARTH / dm) * SwissData.RADTODEG;
          rsun = Math.asin(RSUN / ds) * SwissData.RADTODEG;
          dc[i] -= (rearth + rsun);
        }
        find_maximum(dc[0], dc[1], dc[2], dt, dtint, dctr);
        tjd += dtint.val + dt;
      }
      tjd2 = tjd - SweDate.getDeltaT(tjd);
      tjd2 = tjd - SweDate.getDeltaT(tjd2);
      tjd = tjd - SweDate.getDeltaT(tjd2);
      if ((retflag = swe_lun_eclipse_how(tjd, ifl, null, attr)) ==
                                                                 Swe.ERR) {
        return retflag;
      }
      if (retflag == 0) {
        K += direction;
        continue;
      }
      tret[0] = tjd;
      if ((backward!=0 && tret[0] >= tjd_start - 0.0001)
        || (backward==0 && tret[0] <= tjd_start + 0.0001)) {
        K += direction;
        continue;
      }
      /*
       * check whether or not eclipse type found is wanted
       */
      /* non penumbral eclipse is wanted: */
      if ((ifltype & Swe.SE_ECL_PENUMBRAL)==0 &&
          (retflag & Swe.SE_ECL_PENUMBRAL)!=0) {
        K += direction;
        continue;
      }
      /* non partial eclipse is wanted: */
      if ((ifltype & Swe.SE_ECL_PARTIAL)==0 &&
          (retflag & Swe.SE_ECL_PARTIAL)!=0) {
        K += direction;
        continue;
      }
      /* annular-total eclipse will be discovered later */
      if ((ifltype & (Swe.SE_ECL_TOTAL))==0 &&
          (retflag & Swe.SE_ECL_TOTAL)!=0) {
        K += direction;
        continue;
      }
      /*
       * n = 0: times of eclipse begin and end
       * n = 1: times of totality begin and end
       * n = 2: times of center line begin and end
       */
      if ((retflag & Swe.SE_ECL_PENUMBRAL)!=0) {
        o = 0;
      } else if ((retflag & Swe.SE_ECL_PARTIAL)!=0) {
        o = 1;
      } else {
        o = 2;
      }
      dta = twohr;
      dtb = tenmin;
      for (n = 0; n <= o; n++) {
        if (n == 0) {
          i1 = 6; i2 = 7;
        } else if (n == 1) {
          i1 = 2; i2 = 3;
        } else if (n == 2) {
          i1 = 4; i2 = 5;
        }

        for (i = 0, t = tjd - dta; i <= 2; i += 1, t += dta) {
          if ((retflag2 = lun_eclipse_how(t, ifl, attr, dcore)) ==
                                                                 Swe.ERR) {
            return retflag2;
          }
          if (n == 0) {
            dc[i] = dcore[2] / 2 + RMOON / dcore[4] - dcore[0];
          } else if (n == 1) {
            dc[i] = dcore[1] / 2 + RMOON / dcore[3] - dcore[0];
          } else if (n == 2) {
            dc[i] = dcore[1] / 2 - RMOON / dcore[3] - dcore[0];
          }
        }
        find_zero(dc[0], dc[1], dc[2], dta, dt1, dt2);
        dtb = (dt1.val + dta) / 2;
        tret[i1] = tjd + dt1.val + dta;
        tret[i2] = tjd + dt2.val + dta;

        for (m = 0, dt = dtb / 2; m < 3; m++, dt /= 2) {
          for (j = i1; j <= i2; j += (i2 - i1)) {
            for (i = 0, t = tret[j] - dt; i < 2; i++, t += dt) {
              if ((retflag2 = lun_eclipse_how(t, ifl, attr, dcore)) ==
                                                                 Swe.ERR) {
                return retflag2;
              }
              if (n == 0) {
                dc[i] = dcore[2] / 2 + RMOON / dcore[4] - dcore[0];
              } else if (n == 1) {
                dc[i] = dcore[1] / 2 + RMOON / dcore[3] - dcore[0];
              } else if (n == 2) {
                dc[i] = dcore[1] / 2 - RMOON / dcore[3] - dcore[0];
              }
            }
            dt1.val = dc[1] / ((dc[1] - dc[0]) / dt);
            tret[j] -= dt1.val;
          }
        }
      }
      break;
    } // while (true)
    return retflag;
  }

  swe_lun_eclipse_when_loc(tjd_start, ifl, geopos[], tret[], attr[], backward) {
    var retflag = 0, retflag2 = 0;
    DblObj tjdr = new DblObj(), tjds = new DblObj();
    var  tjd_max = 0;
    var i;
    if (geopos != null && (geopos[2] < Swe.SwephData.SEI_ECL_GEOALT_MIN || geopos[2] > Swe.SwephData.SEI_ECL_GEOALT_MAX)) {
      console.error("location for eclipses must be between " + ((int)Swe.SwephData.SEI_ECL_GEOALT_MIN) + " and " + ((int)Swe.SwephData.SEI_ECL_GEOALT_MAX) + " m above sea");
      return Swe.ERR;
    }
    ifl &= ~(Swe.SEFLG_JPLHOR | Swe.SEFLG_JPLHOR_APPROX);
//next_lun_ecl:
    while(true) {
      if ((retflag = swe_lun_eclipse_when(tjd_start, ifl, 0, tret, backward)) == Swe.ERR) {
        return Swe.ERR;
      }
      /*
       * visibility of eclipse phases
       */
      retflag = 0;
      for (i = 7; i >= 0; i--) {
        if (i == 1) continue;
        if (tret[i] == 0) continue;
        if ((retflag2 = swe_lun_eclipse_how(tret[i], ifl, geopos, attr)) == Swe.ERR)
          return Swe.ERR;
        if (attr[6] > 0) {  /* moon above horizon, using app. alt. */
          retflag |= Swe.SE_ECL_VISIBLE;
          switch(i) {
          case 0: retflag |= Swe.SE_ECL_MAX_VISIBLE; break;
          case 2: retflag |= Swe.SE_ECL_PARTBEG_VISIBLE; break;
          case 3: retflag |= Swe.SE_ECL_PARTEND_VISIBLE; break;
          case 4: retflag |= Swe.SE_ECL_TOTBEG_VISIBLE; break;
          case 5: retflag |= Swe.SE_ECL_TOTEND_VISIBLE; break;
          case 6: retflag |= Swe.SE_ECL_PENUMBBEG_VISIBLE; break;
          case 7: retflag |= Swe.SE_ECL_PENUMBEND_VISIBLE; break;
          default:  break;
          }
        }
      }
      if ((retflag & Swe.SE_ECL_VISIBLE) == 0) {
        if (backward != 0)
          tjd_start = tret[0] - 25;
        else
          tjd_start = tret[0] + 25;
//        goto next_lun_ecl;
        continue;
      }
      /* moon rise and moon set */
      if (swe_rise_trans(tret[6] - 0.001, Swe.SE_MOON, null, ifl, Swe.SE_CALC_RISE|Swe.SE_BIT_DISC_BOTTOM, geopos, 0, 0, tjdr) == Swe.ERR)
        return Swe.ERR;
      if (swe_rise_trans(tret[6] - 0.001, Swe.SE_MOON, null, ifl, Swe.SE_CALC_SET|Swe.SE_BIT_DISC_BOTTOM, geopos, 0, 0, tjds) == Swe.ERR)
        return Swe.ERR;
      if (tjds.val < tret[6] || (tjds.val > tjdr.val && tjdr.val > tret[7])) {
        if (backward != 0)
          tjd_start = tret[0] - 25;
        else
          tjd_start = tret[0] + 25;
//        goto next_lun_ecl;
        continue;
      }
      tjd_max = tret[0];
      if (tjdr.val > tret[6] && tjdr.val < tret[7]) {
        tret[6] = 0;
        for (i = 2; i <= 5; i++) {
          if (tjdr.val > tret[i])
            tret[i] = 0;
        }
        tret[8] = tjdr.val;
        if (tjdr.val > tret[0]) {
          tjd_max = tjdr.val;
        }
      }
      if (tjds.val > tret[6] && tjds.val < tret[7]) {
        tret[7] = 0;
        for (i = 2; i <= 5; i++) {
          if (tjds.val < tret[i])
            tret[i] = 0;
        }
        tret[9] = tjds.val;
        if (tjds.val < tret[0]) {
          tjd_max = tjds.val;
        }
      }
      tret[0] = tjd_max;
      if ((retflag2 = swe_lun_eclipse_how(tjd_max, ifl, geopos, attr)) == Swe.ERR)
        return Swe.ERR;
      if (retflag2 == 0) {
        if (backward != 0)
          tjd_start = tret[0] - 25;
        else
          tjd_start = tret[0] + 25;
//        goto next_lun_ecl;
        continue;
      }
      break;
    } // while(true) / label next_lun_ecl
    retflag |= (retflag2 & Swe.SE_ECL_ALLTYPES_LUNAR);
    return retflag;
  }

  swe_pheno(tjd, ipl, iflag, attr) {
    var i;
    var  xx = new Array(6), xx2 = new Array(6), xxs = new Array(6),
           lbr = new Array(6), lbr2 = new Array(6), dt = 0, dd;
    var  fac;
    var  T, in, om, sinB, u1, u2, du;
    var  ph1, ph2, me = new Array(2);
    var iflagp, epheflag;
    iflag &= ~(Swe.SEFLG_JPLHOR | Swe.SEFLG_JPLHOR_APPROX);
    /* function calls for Pluto with asteroid number 134340
     * are treated as calls for Pluto as main body SE_PLUTO */
    if (ipl == Swe.SE_AST_OFFSET + 134340) {
      ipl = Swe.SE_PLUTO;
    }
    for (i = 0; i < 20; i++)
      attr[i] = 0;
    /* Ceres - Vesta must be SE_CERES etc., not 10001 etc. */
    if (ipl > Swe.SE_AST_OFFSET && ipl <= Swe.SE_AST_OFFSET + 4) {
      ipl = ipl - Swe.SE_AST_OFFSET - 1 + Swe.SE_CERES;
    }
    iflag = iflag & (Swe.SEFLG_EPHMASK |
                     Swe.SEFLG_TRUEPOS |
                     Swe.SEFLG_J2000 |
                     Swe.SEFLG_NONUT |
                     Swe.SEFLG_NOGDEFL |
                     Swe.SEFLG_NOABERR |
                     Swe.SEFLG_TOPOCTR);
    iflagp = iflag & (Swe.SEFLG_EPHMASK |
                     Swe.SEFLG_TRUEPOS |
                     Swe.SEFLG_J2000 |
                     Swe.SEFLG_NONUT |
                     Swe.SEFLG_NOABERR);
    iflagp |= Swe.SEFLG_HELCTR;
    epheflag = (iflag & Swe.SEFLG_EPHMASK);
    /*
     * geocentric planet
     */
    if (this.sw.swe_calc(tjd, ipl, iflag | Swe.SEFLG_XYZ, xx) ==
                                                                 Swe.ERR) {
      return Swe.ERR;
    }
    if (this.sw.swe_calc(tjd, ipl, iflag, lbr) == Swe.ERR) {
      return Swe.ERR;
    }
    /* if moon, we need sun as well, for magnitude */
    if (ipl == Swe.SE_MOON) {
      if (this.sw.swe_calc(tjd, Swe.SE_SUN, iflag | Swe.SEFLG_XYZ,
                      xxs) == Swe.ERR) {
        return Swe.ERR;
      }
    }
    if (ipl != Swe.SE_SUN && ipl != Swe.SE_EARTH &&
      ipl != Swe.SE_MEAN_NODE && ipl != Swe.SE_TRUE_NODE &&
      ipl != Swe.SE_MEAN_APOG && ipl != Swe.SE_OSCU_APOG) {
      /*
       * light time planet - earth
       */
      dt = lbr[2] * Swe.AUNIT / Swe.SwephData.CLIGHT / 86400.0;
      if ((iflag & Swe.SEFLG_TRUEPOS)!=0) {
        dt = 0;
      }
      /*
       * heliocentric planet at tjd - dt
       */
      if (this.sw.swe_calc(tjd - dt, ipl, iflagp | Swe.SEFLG_XYZ, xx2) ==
                                                                 Swe.ERR) {
        return Swe.ERR;
      }
      if (this.sw.swe_calc(tjd - dt, ipl, iflagp, lbr2) == Swe.ERR) {
        return Swe.ERR;
      }
      /*
       * phase angle
       */
      attr[0] = Math.acos(this.sl.swi_dot_prod_unit(xx, xx2)) * SwissData.RADTODEG;
      /*
       * phase
       */
      attr[1] = (1 + Math.cos(attr[0] * SwissData.DEGTORAD)) / 2;
    }
    /*
     * apparent diameter of disk
     */
    if (ipl < Swe.SwephData.NDIAM) {
      dd = Swe.SwephData.pla_diam[ipl];
    } else if (ipl > Swe.SE_AST_OFFSET) {
      dd = this.swed.ast_diam * 1000;        /* km -> m */
    } else {
      dd = 0;
    }
    if (lbr[2] < dd / 2 / Swe.AUNIT) {
      attr[3] = 180;  /* assume position on surface of earth */
    } else {
      attr[3] = Math.asin(dd / 2 / Swe.AUNIT / lbr[2]) * 2 * SwissData.RADTODEG;
    }
    /*
     * apparent magnitude
     */
    if (ipl > Swe.SE_AST_OFFSET ||
        (ipl < NMAG_ELEM && mag_elem[ipl][0] < 99)) {
      if (ipl == Swe.SE_SUN) {
        /* ratio apparent diameter : average diameter */
        fac = attr[3] / (Math.asin(Swe.SwephData.pla_diam[Swe.SE_SUN] / 2.0 /
                                            Swe.AUNIT) * 2 * SwissData.RADTODEG);
        fac *= fac;
        attr[4] = mag_elem[ipl][0] - 2.5 * log10(fac);
      } else if (ipl == Swe.SE_MOON) {
        /*attr[4] = -21.62 + 5 * log10(384410497.8 / EARTH_RADIUS) / log10(10) + 0.026 * fabs(attr[0]) + 0.000000004 * pow(attr[0], 4);*/
        attr[4] = -21.62 + 5 * log10(lbr[2] * Swe.SwephData.AUNIT / Swe.SwephData.EARTH_RADIUS) / log10(10) + 0.026 * Math.abs(attr[0]) + 0.000000004 * Math.pow(attr[0], 4);

        /*printf("1 = %f, 2 = %f\n", mag, mag2);*/
      } else if (ipl == Swe.SE_SATURN) {
        /* rings are considered according to Meeus, German, p. 329ff. */
        T = (tjd - dt - Swe.SwephData.J2000) / 36525.0;
        in = (28.075216 - 0.012998 * T + 0.000004 * T * T) * SwissData.DEGTORAD;
        om = (169.508470 + 1.394681 * T + 0.000412 * T * T) * SwissData.DEGTORAD;
        sinB = Math.abs(Math.sin(in) * Math.cos(lbr[1] * SwissData.DEGTORAD)
                      * Math.sin(lbr[0] * SwissData.DEGTORAD - om)
                      - Math.cos(in) * Math.sin(lbr[1] * SwissData.DEGTORAD));
        u1 = Math.atan2(Math.sin(in) * Math.tan(lbr2[1] * SwissData.DEGTORAD)
                               + Math.cos(in) * Math.sin(lbr2[0] *
                                                          SwissData.DEGTORAD - om),
                          Math.cos(lbr2[0] * SwissData.DEGTORAD - om)) *
                                                                 SwissData.RADTODEG;
        u2 = Math.atan2(Math.sin(in) * Math.tan(lbr[1] * SwissData.DEGTORAD)
                        + Math.cos(in) * Math.sin(lbr[0] * SwissData.DEGTORAD - om),
                          Math.cos(lbr[0] * SwissData.DEGTORAD - om)) *
                                                                 SwissData.RADTODEG;
        du = this.sl.swe_degnorm(u1 - u2);
        if (du > 10) {
          du = 360 - du;
        }
        attr[4] = 5 * log10(lbr2[2] * lbr[2])
                    + mag_elem[ipl][1] * sinB
                    + mag_elem[ipl][2] * sinB * sinB
                    + mag_elem[ipl][3] * du
                    + mag_elem[ipl][0];
      } else if (ipl < Swe.SE_CHIRON) {
        attr[4] = 5 * log10(lbr2[2] * lbr[2])
                    + mag_elem[ipl][1] * attr[0] /100.0
                    + mag_elem[ipl][2] * attr[0] * attr[0] / 10000.0
                    + mag_elem[ipl][3] * attr[0] * attr[0] * attr[0] / 1000000.0
                    + mag_elem[ipl][0];
      } else if (ipl < NMAG_ELEM || ipl > Swe.SE_AST_OFFSET) {/*asteroids*/
        ph1 = Math.pow(EULER, -3.33 *
                        Math.pow(Math.tan(attr[0] * SwissData.DEGTORAD / 2), 0.63));
        ph2 = Math.pow(EULER, -1.87 *
                        Math.pow(Math.tan(attr[0] * SwissData.DEGTORAD / 2), 1.22));
        if (ipl < NMAG_ELEM) {    /* main asteroids */
          me[0] = mag_elem[ipl][0];
          me[1] = mag_elem[ipl][1];
        } else if (ipl == Swe.SE_AST_OFFSET + 1566) {
                    /* Icarus has elements from JPL database */
                  me[0] = 16.9;
                  me[1] = 0.15;
        } else {      /* other asteroids */
          me[0] = this.swed.ast_H;
          me[1] = this.swed.ast_G;
        }
        attr[4] = 5 * log10(lbr2[2] * lbr[2])
            + me[0]
            - 2.5 * log10((1 - me[1]) * ph1 + me[1] * ph2);
      } else { /* ficticious bodies */
        attr[4] = 0;
      }
    }
    if (ipl != Swe.SE_SUN && ipl != Swe.SE_EARTH) {
      /*
       * elongation of planet
       */
      if (this.sw.swe_calc(tjd, Swe.SE_SUN, iflag | Swe.SEFLG_XYZ,
                      xx2) == Swe.ERR) {
        return Swe.ERR;
      }
      if (this.sw.swe_calc(tjd, Swe.SE_SUN, iflag, lbr2) == Swe.ERR) {
        return Swe.ERR;
      }
      attr[2] = Math.acos(this.sl.swi_dot_prod_unit(xx, xx2)) * SwissData.RADTODEG;
    }
    /* horizontal parallax */
    if (ipl == Swe.SE_MOON) {
      var  sinhp, xm =  new Array(6);
      /* geocentric horizontal parallax */
      /* Expl.Suppl. to the AA 1984, p.400 */
      if (this.sw.swe_calc(tjd, (int) ipl, epheflag|Swe.SEFLG_TRUEPOS|Swe.SEFLG_EQUATORIAL|Swe.SEFLG_RADIANS, xm) == Swe.ERR)
        /* int cast can be removed when swe_calc() gets int32 ipl definition */
        return Swe.ERR;
      sinhp = Swe.SwephData.EARTH_RADIUS / xm[2] / Swe.SwephData.AUNIT;
      attr[5] = Math.asin(sinhp) / SwissData.DEGTORAD;
      /* topocentric horizontal parallax */
      if ((iflag & Swe.SEFLG_TOPOCTR) != 0) {
      if (this.sw.swe_calc(tjd, (int) ipl, epheflag|Swe.SEFLG_XYZ|Swe.SEFLG_TOPOCTR, xm) == Swe.ERR)
        return Swe.ERR;
      if (this.sw.swe_calc(tjd, (int) ipl, epheflag|Swe.SEFLG_XYZ, xx) == Swe.ERR)
        return Swe.ERR;
      attr[5] = Math.acos(this.sl.swi_dot_prod_unit(xm, xx)) / SwissData.DEGTORAD;

      }
    }
    return Swe.OK;
  }
  swe_pheno_ut(tjd_ut, ipl, iflag, attr) {
    SweDate.swi_set_tid_acc(tjd_ut, iflag, 0);
    return swe_pheno(tjd_ut + SweDate.getDeltaT(tjd_ut), ipl, iflag, attr);
  }


  find_maximum(y00, y11, y2, dx,
                           DblObj dxret, DblObj yret) {
    var  a, b, c, x, y;
    c = y11;
    b = (y2 - y00) / 2.0;
    a = (y2 + y00) / 2.0 - c;
    x = -b / 2 / a;
    y = (4 * a * c - b * b) / 4 / a;
    dxret.val = (x - 1) * dx;
    if (yret != null) {
      yret.val = y;
    }
    return Swe.OK;
  }


  find_zero(y00, y11, y2, dx,
                        DblObj dxret, DblObj dxret2) {
    var  a, b, c, x1, x2;
    c = y11;
    b = (y2 - y00) / 2.0;
    a = (y2 + y00) / 2.0 - c;
    if (b * b - 4 * a * c < 0) {
      return Swe.ERR;
    }
    x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / 2 / a;
    x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / 2 / a;
      dxret.val = (x1 - 1) * dx;
      dxret2.val = (x2 - 1) * dx;
    return Swe.OK;
  }

  rdi_twilight(rsmi) {
    var  rdi = 0;
    if ((rsmi & Swe.SE_BIT_CIVIL_TWILIGHT) != 0)
      rdi = 6;
    if ((rsmi & Swe.SE_BIT_NAUTIC_TWILIGHT) != 0)
      rdi = 12;
    if ((rsmi & Swe.SE_BIT_ASTRO_TWILIGHT) != 0)
      rdi = 18;
    return rdi;
  }
  swe_rise_trans(tjd_ut, ipl, starname, epheflag, rsmi, geopos, atpress, attemp, DblObj tret) {
    return swe_rise_trans_true_hor(tjd_ut, ipl, starname, epheflag, rsmi, geopos, atpress, attemp, 0, tret);
  }

  /* same as swe_rise_trans(), but allows to define the height of the horizon
   * at the point of the rising or setting (horhgt) */  
  swe_rise_trans_true_hor(tjd_ut, ipl, starname, epheflag, rsmi, geopos, atpress, attemp, horhgt,
                 DblObj tret) 
  {
    var i, j, k, ii, calc_culm, nculm = -1;
    var  tjd_et = tjd_ut + SweDate.getDeltaT(tjd_ut);
    var  xc = new Array(6);
    var xh = new Array(20);
    for(var i=0; i<20; i++){
      xh[i] = new Array(6);
    }
    var ah = new Array(6);
           aha;
    var  tculm = new Array(4), tcu, tc = new Array(20), h = new Array(20),
           t2 = new Array(6), dc = new Array(6);
    DblObj dtint=new DblObj();
    DblObj dx=new DblObj();
    var  rdi, dd = 0;
    var iflag = epheflag;
    var jmax = 14;
    var  t, te, tt, dt, twohrs = 1.0 / 12.0;
    var  curdist;
    var do_calc_twilight = false;

    var do_fixstar = (starname != null && starname.length() > 0);
    if (geopos[2] < Swe.SwephData.SEI_ECL_GEOALT_MIN || geopos[2] > Swe.SwephData.SEI_ECL_GEOALT_MAX) {
      console.error("location for swe_rise_trans() must be between " + ((int)Swe.SwephData.SEI_ECL_GEOALT_MIN) + " and " + ((int)Swe.SwephData.SEI_ECL_GEOALT_MAX) + " m above sea");
      return Swe.ERR;
    }
    SweDate.swi_set_tid_acc(tjd_ut, epheflag, 0);  
    /* function calls for Pluto with asteroid number 134340
     * are treated as calls for Pluto as main body SE_PLUTO */
    if (ipl == Swe.SE_AST_OFFSET + 134340) {
      ipl = Swe.SE_PLUTO;
    }
    // xh[0][0] = 0; /* to shut up mint */
    /* allowing SEFLG_NONUT and SEFLG_TRUEPOS speeds it up */
    iflag &= (Swe.SEFLG_EPHMASK | Swe.SEFLG_NONUT | Swe.SEFLG_TRUEPOS);
    tret.val = 0;
    iflag |= (Swe.SEFLG_EQUATORIAL | Swe.SEFLG_TOPOCTR);
    this.sw.swe_set_topo(geopos[0], geopos[1], geopos[2]);

    if ((rsmi & (Swe.SE_CALC_MTRANSIT | Swe.SE_CALC_ITRANSIT))!=0) {
      return calc_mer_trans(tjd_ut, ipl, epheflag, rsmi,
                  geopos, starname,
                  tret);
    }
    if ((rsmi & ( Swe.SE_CALC_RISE | Swe.SE_CALC_SET))==0) {
      rsmi |= Swe.SE_CALC_RISE;
    }
    /* twilight calculation */
    if (ipl == Swe.SE_SUN && ((rsmi & (Swe.SE_BIT_CIVIL_TWILIGHT|Swe.SE_BIT_NAUTIC_TWILIGHT|Swe.SE_BIT_ASTRO_TWILIGHT)) != 0)) {
      rsmi |= (Swe.SE_BIT_NO_REFRACTION | Swe.SE_BIT_DISC_CENTER);
      horhgt = -rdi_twilight(rsmi); 
        /* note: twilight is not dependent on height of horizon, so we can
         * use this parameter and define a fictitious height of horizon */
    }
    /* find culmination points within 28 hours from t0 - twohrs.
     * culminations are required in case there are maxima or minima
     * in height slightly above or below the horizon.
     * we do not use meridian transits, because in polar regions
     * the culmination points may considerably deviate from
     * transits. also, there are cases where the moon rises in the
     * western half of the sky for a short time.
     */

    for (ii = 0, t = tjd_ut - twohrs; ii <= jmax; ii++, t += twohrs) {
      tc[ii] = t;

      if (!do_fixstar) {
        te = t + SweDate.getDeltaT(t);
        if (this.sw.swe_calc(te, ipl, iflag, xc) == Swe.ERR) {
          return Swe.ERR;
        }
      }
      /* diameter of object in km */
      if (ii == 0) {
               if ((rsmi & Swe.SE_BIT_DISC_CENTER)!=0) {
          dd = 0;
        } else if (ipl < Swe.SwephData.NDIAM && ipl >= 0) { // added for ArrayOutOfBoundsException
          dd = Swe.SwephData.pla_diam[ipl];
        } else if (ipl > Swe.SE_AST_OFFSET) {
          dd = this.swed.ast_diam * 1000;        /* km -> m */
        } else {
          dd = 0;
        }
      }
      curdist = xc[2];
      if ((rsmi & Swe.SE_BIT_FIXED_DISC_SIZE) != 0) {
        if (ipl == Swe.SE_SUN) {
          curdist = 1.0;
        } else if (ipl == Swe.SE_MOON) {
          curdist = 0.00257;
        }
      }
      /* apparent radius of disc */
      rdi = Math.asin( dd / 2 / Swe.AUNIT / curdist ) * SwissData.RADTODEG;
      /* true height of center of body */
      swe_azalt(t, Swe.SE_EQU2HOR, geopos, atpress, attemp, xc, xh[ii]);
      if ((rsmi & Swe.SE_BIT_DISC_BOTTOM) != 0) {
        /* true height of bottom point of body */
        xh[ii][1] -= rdi;
      } else {
        /* true height of uppermost point of body */
        xh[ii][1] += rdi;
      }
      /* apparent height of uppermost point of body */
      if ((rsmi & Swe.SE_BIT_NO_REFRACTION)!=0) {
        xh[ii][1] -= horhgt;
        h[ii] = xh[ii][1];
      } else {
        swe_azalt_rev(t, Swe.SE_HOR2EQU, geopos, xh[ii], xc);
        swe_azalt(t, Swe.SE_EQU2HOR, geopos, atpress, attemp, xc, xh[ii]);
        xh[ii][1] -= horhgt;
        xh[ii][2] -= horhgt;
        h[ii] = xh[ii][2];
      }
      calc_culm = 0;
      if (ii > 1) {
        dc[0] = xh[ii-2][1];
        dc[1] = xh[ii-1][1];
        dc[2] = xh[ii][1];
        if (dc[1] > dc[0] && dc[1] > dc[2]) {
          calc_culm = 1;
        }
        if (dc[1] < dc[0] && dc[1] < dc[2]) {
          calc_culm = 2;
        }
      }
      if (calc_culm!=0) {
        dt = twohrs;
        tcu = t - dt;
        find_maximum(dc[0], dc[1], dc[2], dt, dtint, dx);
        tcu += dtint.val + dt;
        dt /= 3;
        for (; dt > 0.0001; dt /= 3) {
          for (i = 0, tt = tcu - dt; i < 3; tt += dt, i++) {
            te = tt + SweDate.getDeltaT(tt);

            if (!do_fixstar) {

              if (this.sw.swe_calc(te, ipl, iflag, xc) == Swe.ERR) {
                return Swe.ERR;
              }

            }

            swe_azalt(tt, Swe.SE_EQU2HOR, geopos, atpress, attemp, xc, ah);
      ah[1] -= horhgt;
            dc[i] = ah[1];
          }
          find_maximum(dc[0], dc[1], dc[2], dt, dtint, dx);
          tcu += dtint.val + dt;
        }
        nculm++;
        tculm[nculm] = tcu;
      }
    }
    /* note: there can be a rise or set on the poles, even if
     * there is no culmination. So, we must not leave here
     * in any case. */
    /* insert culminations into array of heights */
    for (i = 0; i <= nculm; i++) {
      for (j = 1; j <= jmax; j++) {
        if (tculm[i] < tc[j]) {
          for (k = jmax; k >= j; k--) {
            tc[k+1] = tc[k];
            h[k+1] = h[k];
          }
          tc[j] = tculm[i];

          if (!do_fixstar) {
            te = tc[j] + SweDate.getDeltaT(tc[j]);
            if (this.sw.swe_calc(te, ipl, iflag, xc) == Swe.ERR) {
              return Swe.ERR;

            }
          }
          curdist = xc[2];
          if ((rsmi & Swe.SE_BIT_FIXED_DISC_SIZE) != 0) {
            if ( ipl == Swe.SE_SUN ) {
              curdist = 1.0;
            } else if (ipl == Swe.SE_MOON) {
              curdist = 0.00257;
            }
          }
          /* apparent radius of disc */
          rdi = Math.asin( dd / 2 / Swe.AUNIT / curdist ) * SwissData.RADTODEG;
          /* true height of center of body */
          swe_azalt(tc[j], Swe.SE_EQU2HOR, geopos, atpress, attemp, xc, ah);
          if ((rsmi & Swe.SE_BIT_DISC_BOTTOM) != 0) {
            /* true height of bottom point of body */
            ah[1] -= rdi;
          } else {
      /* true height of uppermost point of body */
      ah[1] += rdi;
          }
          /* apparent height of uppermost point of body */
          if ((rsmi & Swe.SE_BIT_NO_REFRACTION)!=0) {
      ah[1] -= horhgt;
            h[j] = ah[1];
          } else {
            swe_azalt_rev(tc[j], Swe.SE_HOR2EQU, geopos, ah, xc);
            swe_azalt(tc[j], Swe.SE_EQU2HOR, geopos, atpress, attemp, xc, ah);
      ah[1] -= horhgt;
      ah[2] -= horhgt;
            h[j] = ah[2];
          }
          jmax++;
          break;
        }
      }
    }
    tret.val = 0;
    /* find points with zero height.
     * binary search */
    for (ii = 1; ii <= jmax; ii++) {
      if (h[ii-1] * h[ii] >= 0) {
        continue;
      }
      if (h[ii-1] < h[ii] && ((rsmi & Swe.SE_CALC_RISE) == 0)) {
        continue;
      }
      if (h[ii-1] > h[ii] && ((rsmi & Swe.SE_CALC_SET) == 0)) {
        continue;
      }
      dc[0] = h[ii-1];
      dc[1] = h[ii];
      t2[0] = tc[ii-1];
      t2[1] = tc[ii];
      for (i = 0; i < 20; i++) {
        t = (t2[0] + t2[1]) / 2;

        if (!do_fixstar) {

          te = t + SweDate.getDeltaT(t);
          if (this.sw.swe_calc(te, ipl, iflag, xc) == Swe.ERR) {
            return Swe.ERR;
          }
        }
        curdist = xc[2];
        if ((rsmi & Swe.SE_BIT_FIXED_DISC_SIZE) != 0) {
          if (ipl == Swe.SE_SUN) {
            curdist = 1.0;
          } else if (ipl == Swe.SE_MOON) {
            curdist = 0.00257;
          }
        }
        /* apparent radius of disc */
        rdi = Math.asin( dd / 2 / Swe.AUNIT / curdist ) * SwissData.RADTODEG;
        /* true height of center of body */
        swe_azalt(t, Swe.SE_EQU2HOR, geopos, atpress, attemp, xc, ah);
        if ((rsmi & Swe.SE_BIT_DISC_BOTTOM) != 0) {
          /* true height of bottom point of body */
          ah[1] -= rdi;
        } else {
    /* true height of uppermost point of body */
    ah[1] += rdi;
        }
        /* apparent height of uppermost point of body */
        if ((rsmi & Swe.SE_BIT_NO_REFRACTION)!=0) {
    ah[1] -= horhgt;
          aha = ah[1];
        } else {
          swe_azalt_rev(t, Swe.SE_HOR2EQU, geopos, ah, xc);
          swe_azalt(t, Swe.SE_EQU2HOR, geopos, atpress, attemp, xc, ah);
    ah[1] -= horhgt;
    ah[2] -= horhgt;
          aha = ah[2];
        }
        if (aha * dc[0] <= 0) {
          dc[1] = aha;
          t2[1] = t;
        } else {
          dc[0] = aha;
          t2[0] = t;
        }
      }
      if (t > tjd_ut) {
       tret.val = t;
       return Swe.OK;
      }
    }

    console.error("rise or set not found for planet "+ipl);
    return -2; /* no t of rise or set found */
  }


  calc_mer_trans(tjd_ut, ipl, epheflag, rsmi, geopos, starname,
                             DblObj tret) {
    var i;
    var  tjd_et = tjd_ut + SweDate.getDeltaT(tjd_ut);
    var  armc, armc0, arxc, x0 = new Array(6), x = new Array(6), t, te;
    var  mdd;
    var iflag = epheflag;
    var do_fixstar = (starname != null && starname.length() > 0);
    iflag &= Swe.SEFLG_EPHMASK;
    tret.val = 0;
    iflag |= (Swe.SEFLG_EQUATORIAL | Swe.SEFLG_TOPOCTR);
    armc0 = this.sl.swe_sidtime(tjd_ut) + geopos[0] / 15;
    if (armc0 >= 24) {
      armc0 -= 24;
    }
    if (armc0 < 0) {
      armc0 += 24;
    }
    armc0 *= 15;
    if (this.sw.swe_calc(tjd_et, ipl, iflag, x0) == Swe.ERR) {
      return Swe.ERR;
    }
    /*
     * meridian transits
     */
    x[0] = x0[0];
    x[1] = x0[1];
    t = tjd_ut;
    arxc = armc0;
    if ((rsmi & Swe.SE_CALC_ITRANSIT)!=0) {
      arxc = this.sl.swe_degnorm(arxc + 180);
    }
    for (var i = 0; i < 4; i++) {
      mdd = this.sl.swe_degnorm(x[0] - arxc);
      if (i > 0 && mdd > 180) {
        mdd -= 360;
      }
      t += mdd / 361;
      armc = this.sl.swe_sidtime(t) + geopos[0] / 15;
      if (armc >= 24) {
        armc -= 24;
      }
      if (armc < 0) {
        armc += 24;
      }
      armc *= 15;

      arxc = armc;
      if ((rsmi & Swe.SE_CALC_ITRANSIT)!=0) {
        arxc = this.sl.swe_degnorm(arxc + 180);
      }
      if (!do_fixstar) {
//        te = t + swe_deltat(t);
        te = t + SweDate.getDeltaT(t);
        if (this.sw.swe_calc(te, ipl, iflag, x) == Swe.ERR) {
          return Swe.ERR;
        }
      }
    }
    tret.val = t;
    return Swe.OK;
  }


  swe_nod_aps(tjd_et, ipl, iflag, method, xnasc, xndsc, xperi, xaphe) {
    var ij, i, j;
    var iplx;
    var ipli;
    var istart, iend;
    var iflJ2000;
    var plm;
    var t = (tjd_et - Swe.SwephData.J2000) / 36525, dt;
    var x = new Array(6), xx = new Array(24), xp[],
           xobs = new Array(6), x2000 = new Array(6);
    var xpOffs=0;
    var xpos = new Array(3);
    for(var i=0; i<3; i++){
      xpos[i] = new Array(6).fill(0.0);
    }
    var xnorm = new Array(6);
    var xposm = new Array(6);
    var xn = new Array(3);
    for(var i=0; i<3; i++){
      xn[i] = new Array(6).fill(0.0);
    }
    var xs = new Array(3);
    for(var i=0; i<3; i++){
      xs[i] = new Array(6).fill(0.0);
    }
    var xq = new Array(3);
    for(var i=0; i<3; i++){
      xq[i] = new Array(6).fill(0.0);
    }
    var xa = new Array(3);
    for(var i=0; i<3; i++){
      xa[i] = new Array(6).fill(0.0);
    }

    var xobs2 = new Array(6), x2 = new Array(6);
    var xna, xnd, xpe, xap;
    var xndOffs = 6, xpeOffs = 12, xapOffs = 18;
    var incl, sema, ecce, parg, ea, vincl, vsema, vecce, pargx, eax;
    PlanData pedp = this.swed.pldat[Swe.SwephData.SEI_EARTH];
    PlanData psbdp = this.swed.pldat[Swe.SwephData.SEI_SUNBARY];
    PlanData pldat=new PlanData();
    var xsun = psbdp.x;
    var xear = pedp.x;
    var ep;
    var Gmsm, dzmin;
    var rxy, rxyz, fac, sgn;
    var sinnode, cosnode, sinincl, cosincl, sinu, cosu, sinE, cosE, cosE2;
    var uu, ny, ny2, c2, v2, pp, ro, ro2, rn, rn2;
    Epsilon oe;
    var is_true_nodaps = false;
    var do_aberr = (iflag &
                        (Swe.SEFLG_TRUEPOS | Swe.SEFLG_NOABERR))==0;
    var do_defl = (iflag & Swe.SEFLG_TRUEPOS)==0 &&
                      (iflag & Swe.SEFLG_NOGDEFL)==0;
    var do_focal_point = (method & Swe.SE_NODBIT_FOPOINT) != 0;
    var ellipse_is_bary = false;
    var iflg0;
    iflag &= ~(Swe.SEFLG_JPLHOR | Swe.SEFLG_JPLHOR_APPROX);
    /* function calls for Pluto with asteroid number 134340
     * are treated as calls for Pluto as main body SE_PLUTO */
    if (ipl == Swe.SE_AST_OFFSET + 134340) {
      ipl = Swe.SE_PLUTO;
    }
    xna = xx; 
    xnd = xx; // xndOffs = 6; 
    xpe = xx; // xpeOffs = 12; 
    xap = xx; // xapOffs = 18;
    // xpos[0][0] = 0; /* to shut up mint */
    /* to get control over the save area: */
    this.sw.swi_force_app_pos_etc();
    method %= Swe.SE_NODBIT_FOPOINT;
    ipli = ipl;
    if (ipl == Swe.SE_SUN) {
      ipli = Swe.SE_EARTH;
    }
    if (ipl == Swe.SE_MOON) {
      do_defl = false;
      if ((iflag & Swe.SEFLG_HELCTR)==0) {
        do_aberr = false;
      }
    }
    iflg0 = (iflag & (Swe.SEFLG_EPHMASK|Swe.SEFLG_NONUT)) |
            Swe.SEFLG_SPEED | Swe.SEFLG_TRUEPOS;
    if (ipli != Swe.SE_MOON) {
      iflg0 |= Swe.SEFLG_HELCTR;
    }
    if (ipl == Swe.SE_MEAN_NODE || ipl == Swe.SE_TRUE_NODE ||
            ipl == Swe.SE_MEAN_APOG || ipl == Swe.SE_OSCU_APOG ||
            ipl < 0 ||
            (ipl >= Swe.SE_NPLANETS && ipl <= Swe.SE_AST_OFFSET)) {

      console.error("nodes/apsides for planet "+ipl+" are not implemented");

      if (xnasc != null) {
        for (i = 0; i <= 5; i++)
          xnasc[i] = 0;
      }
      if (xndsc != null) {
        for (i = 0; i <= 5; i++)
          xndsc[i] = 0;
      }
      if (xaphe != null) {
        for (i = 0; i <= 5; i++)
          xaphe[i] = 0;
      }
      if (xperi != null) {
        for (i = 0; i <= 5; i++)
          xperi[i] = 0;
      }
      return Swe.ERR;
    }
    for (i = 0; i < 24; i++)
      xx[i] = 0;
    /***************************************
     * mean nodes and apsides
     ***************************************/
    /* mean points only for Sun - Neptune */
    if ((method == 0 || (method & Swe.SE_NODBIT_MEAN)!=0) &&
          ((ipl >= Swe.SE_SUN && ipl <= Swe.SE_NEPTUNE) ||
                                                    ipl == Swe.SE_EARTH)) {
      if (ipl == Swe.SE_MOON) {
//      this.sm.swi_mean_lunar_elements(tjd_et, &xna[0], &xna[3], &xpe[0], &xpe[3]);
        DblObj xna0=new DblObj(); xna0.val=xna[0];
        DblObj xna3=new DblObj(); xna3.val=xna[3];
        DblObj xpe0=new DblObj(); xpe0.val=xpe[0+xpeOffs];
        DblObj xpe3=new DblObj(); xpe3.val=xpe[3+xpeOffs];
        this.sm.swi_mean_lunar_elements(tjd_et, xna0, xna3, xpe0, xpe3);
        xna[0]=xna0.val;
        xna[3]=xna3.val;
        xpe[0+xpeOffs]=xpe0.val;
        xpe[3+xpeOffs]=xpe3.val;
        incl = Swe.SwephData.MOON_MEAN_INCL;
        vincl = 0;
        ecce = Swe.SwephData.MOON_MEAN_ECC;
        vecce = 0;
        sema = Swe.SwephData.MOON_MEAN_DIST / Swe.AUNIT;
        vsema = 0;
      } else {
        iplx = ipl_to_elem[ipl];
        ep = el_incl[iplx];
        incl = ep[0] + ep[1] * t + ep[2] * t * t + ep[3] * t * t * t;
        vincl = ep[1] / 36525;
        ep = el_sema[iplx];
        sema = ep[0] + ep[1] * t + ep[2] * t * t + ep[3] * t * t * t;
        vsema = ep[1] / 36525;
        ep = el_ecce[iplx];
        ecce = ep[0] + ep[1] * t + ep[2] * t * t + ep[3] * t * t * t;
        vecce = ep[1] / 36525;
        ep = el_node[iplx];
        /* ascending node */
        xna[0] = ep[0] + ep[1] * t + ep[2] * t * t + ep[3] * t * t * t;
        xna[3] = ep[1] / 36525;
        /* perihelion */
        ep = el_peri[iplx];
        xpe[0+xpeOffs] = ep[0] + ep[1] * t + ep[2] * t * t + ep[3] * t * t * t;
        xpe[3+xpeOffs] = ep[1] / 36525;
      }
      /* descending node */
      xnd[0+xndOffs] = this.sl.swe_degnorm(xna[0] + 180);
      xnd[3+xndOffs] = xna[3];
      /* angular distance of perihelion from node */
      parg = xpe[0+xpeOffs] = this.sl.swe_degnorm(xpe[0+xpeOffs] - xna[0]);
      pargx = xpe[3+xpeOffs] = this.sl.swe_degnorm(xpe[0+xpeOffs] + xpe[3+xpeOffs]  - xna[3]);
      /* transform from orbital plane to mean ecliptic of date */
      this.sl.swe_cotrans(xpe, xpeOffs, xpe, xpeOffs, -incl);
      /* xpe+3 is aux. position, not speed!!! */
      this.sl.swe_cotrans(xpe, 3+xpeOffs, xpe, 3+xpeOffs, -incl-vincl);
      /* add node again */
      xpe[0+xpeOffs] = this.sl.swe_degnorm(xpe[0+xpeOffs] + xna[0]);
      /* xpe+3 is aux. position, not speed!!! */
      xpe[3+xpeOffs] = this.sl.swe_degnorm(xpe[3+xpeOffs] + xna[0] + xna[3]);
      /* speed */
      xpe[3+xpeOffs] = this.sl.swe_degnorm(xpe[3+xpeOffs] - xpe[0+xpeOffs]);
      /* heliocentric distance of perihelion and aphelion */
      xpe[2+xpeOffs] = sema * (1 - ecce);
      xpe[5+xpeOffs] = (sema + vsema) * (1 - ecce - vecce) - xpe[2+xpeOffs];
      /* aphelion */
      xap[0+xapOffs] = this.sl.swe_degnorm(xpe[xpeOffs] + 180);
      xap[1+xapOffs] = -xpe[1+xpeOffs];
      xap[3+xapOffs] = xpe[3+xpeOffs];
      xap[4+xapOffs] = -xpe[4+xpeOffs];
      if (do_focal_point) {
        xap[2+xapOffs] = sema * ecce * 2;
        xap[5+xapOffs] = (sema + vsema) * (ecce + vecce) * 2 - xap[2+xapOffs];
      } else {
        xap[2+xapOffs] = sema * (1 + ecce);
        xap[5+xapOffs] = (sema + vsema) * (1 + ecce + vecce) - xap[2+xapOffs];
      }
      /* heliocentric distance of nodes */
      ea = Math.atan(Math.tan(-parg * SwissData.DEGTORAD / 2) *
                                              Math.sqrt((1-ecce)/(1+ecce))) * 2;
      eax = Math.atan(Math.tan(-pargx * SwissData.DEGTORAD / 2) *
                                  Math.sqrt((1-ecce-vecce)/(1+ecce+vecce))) * 2;
      xna[2] = sema * (Math.cos(ea) - ecce) / Math.cos(parg * SwissData.DEGTORAD);
      xna[5] = (sema+vsema) * (Math.cos(eax) - ecce - vecce) /
                                                Math.cos(pargx * SwissData.DEGTORAD);
      xna[5] -= xna[2];
      ea = Math.atan(Math.tan((180 - parg) * SwissData.DEGTORAD / 2) *
                                              Math.sqrt((1-ecce)/(1+ecce))) * 2;
      eax = Math.atan(Math.tan((180 - pargx) * SwissData.DEGTORAD / 2) *
                                  Math.sqrt((1-ecce-vecce)/(1+ecce+vecce))) * 2;
      xnd[2+xndOffs] = sema * (Math.cos(ea) - ecce) / Math.cos((180 - parg) * SwissData.DEGTORAD);
      xnd[5+xndOffs] = (sema+vsema) * (Math.cos(eax) - ecce - vecce) /
                                             Math.cos((180 - pargx) * SwissData.DEGTORAD);
      xnd[5+xndOffs] -= xnd[2+xndOffs];
      /* no light-time correction because speed is extremely small */
      for (i = 0, xp = xx, xpOffs = 0; i < 4; i++, xpOffs += 6) {
        /* to cartesian coordinates */
        xp[0+xpOffs] *= SwissData.DEGTORAD;
        xp[1+xpOffs] *= SwissData.DEGTORAD;
        xp[3+xpOffs] *= SwissData.DEGTORAD;
        xp[4+xpOffs] *= SwissData.DEGTORAD;
        this.sl.swi_polcart_sp(xp, xpOffs, xp, xpOffs);
      }
    /***************************************
     * "true" or osculating nodes and apsides
     ***************************************/
    } else {
      /* first, we need a heliocentric distance of the planet */
      if (this.sw.swe_calc(tjd_et, ipli, iflg0, x) == Swe.ERR) {
        return Swe.ERR;
      }
      iflJ2000 = (iflag & Swe.SEFLG_EPHMASK)|
                 Swe.SEFLG_J2000|
                 Swe.SEFLG_EQUATORIAL|
                 Swe.SEFLG_XYZ|
                 Swe.SEFLG_TRUEPOS|
                 Swe.SEFLG_NONUT|
                 Swe.SEFLG_SPEED;
      ellipse_is_bary = false;
      if (ipli != Swe.SE_MOON) {
        if ((method & Swe.SE_NODBIT_OSCU_BAR)!=0 && x[2] > 6) {
          iflJ2000 |= Swe.SEFLG_BARYCTR; /* only planets beyond Jupiter */
          ellipse_is_bary = true;
        } else {
          iflJ2000 |= Swe.SEFLG_HELCTR;
        }
      }
      /* we need three positions and three speeds
       * for three nodes/apsides. from the three node positions,
       * the speed of the node will be computed. */
      if (ipli == Swe.SE_MOON) {
        dt = Swe.SwephData.NODE_CALC_INTV;
        dzmin = 1e-15;
        Gmsm = Swe.SwephData.GEOGCONST * (1 + 1 / Swe.SwephData.EARTH_MOON_MRAT) /
                            Swe.AUNIT/Swe.AUNIT/Swe.AUNIT*86400.0*86400.0;
      } else {
        if ((ipli >= Swe.SE_MERCURY && ipli <= Swe.SE_PLUTO) ||
                                                   ipli == Swe.SE_EARTH) {
          plm = 1 / plmass[ipl_to_elem[ipl]];
        } else {
          plm = 0;
        }
        dt = Swe.SwephData.NODE_CALC_INTV * 10 * x[2];
        dzmin = 1e-15 * dt / Swe.SwephData.NODE_CALC_INTV;
        Gmsm = Swe.SwephData.HELGRAVCONST * (1 + plm) /
                            Swe.AUNIT/Swe.AUNIT/Swe.AUNIT*86400.0*86400.0;
      }
      if ((iflag & Swe.SEFLG_SPEED)!=0) {
        istart = 0;
        iend = 2;
      } else {
        istart = iend = 0;
        dt = 0;
      }
      for (i = istart, t = tjd_et - dt; i <= iend; i++, t += dt) {
        if (istart == iend) {
          t = tjd_et;
        }
        if (this.sw.swe_calc(t, ipli, iflJ2000, xpos[i]) == Swe.ERR) {
          return Swe.ERR;
        }
        /* the EMB is used instead of the earth */
        if (ipli == Swe.SE_EARTH) {
          if (this.sw.swe_calc(t,
                       Swe.SE_MOON,
                       iflJ2000 & ~(Swe.SEFLG_BARYCTR|Swe.SEFLG_HELCTR),
                       xposm) == Swe.ERR) {
            return Swe.ERR;
          }
          for (j = 0; j <= 2; j++)
            xpos[i][j] += xposm[j] / (Swe.SwephData.EARTH_MOON_MRAT + 1.0);
        }
        this.sw.swi_plan_for_osc_elem(iflg0, t, xpos[i]);
      }
      for (i = istart; i <= iend; i++) {
        if (Math.abs(xpos[i][5]) < dzmin) {
          xpos[i][5] = dzmin;
        }
        fac = xpos[i][2] / xpos[i][5];
        sgn = xpos[i][5] / Math.abs(xpos[i][5]);
        for (j = 0; j <= 2; j++) {
          xn[i][j] = (xpos[i][j] - fac * xpos[i][j+3]) * sgn;
          xs[i][j] = -xn[i][j];
        }
      }
      for (i = istart; i <= iend; i++) {
        /* node */
        rxy =  Math.sqrt(xn[i][0] * xn[i][0] + xn[i][1] * xn[i][1]);
        cosnode = xn[i][0] / rxy;
        sinnode = xn[i][1] / rxy;
        /* inclination */
        this.sl.swi_cross_prod(xpos[i], 0, xpos[i], 3, xnorm, 0);
        rxy =  xnorm[0] * xnorm[0] + xnorm[1] * xnorm[1];
        c2 = (rxy + xnorm[2] * xnorm[2]);
        rxyz = Math.sqrt(c2);
        rxy = Math.sqrt(rxy);
        sinincl = rxy / rxyz;
        cosincl = Math.sqrt(1 - sinincl * sinincl);
        if (xnorm[2] < 0) cosincl = -cosincl; /* retrograde asteroid, e.g. 20461 Dioretsa */
        /* argument of latitude */
        cosu = xpos[i][0] * cosnode + xpos[i][1] * sinnode;
        sinu = xpos[i][2] / sinincl;
        uu = Math.atan2(sinu, cosu);
        /* semi-axis */
        rxyz = Math.sqrt(this.sl.square_sum(xpos[i]));
        v2 = this.sl.square_sum(xpos[i], 3);
        sema = 1 / (2 / rxyz - v2 / Gmsm);
        /* eccentricity */
        pp = c2 / Gmsm;
        ecce = Math.sqrt(1 - pp / sema);
        /* eccentric anomaly */
        cosE = 1 / ecce * (1 - rxyz / sema);
        sinE = 1 / ecce / Math.sqrt(sema * Gmsm) *
                                        this.sw.dot_prod(xpos[i], xpos[i], 3);
        /* true anomaly */
        ny = 2 * Math.atan(Math.sqrt((1+ecce)/(1-ecce)) * sinE / (1 + cosE));
        /* distance of perihelion from ascending node */
        xq[i][0] = this.sl.swi_mod2PI(uu - ny);
        xq[i][1] = 0;                        /* latitude */
        xq[i][2] = sema * (1 - ecce);        /* distance of perihelion */
        /* transformation to ecliptic coordinates */
        this.sl.swi_polcart(xq[i], xq[i]);
        this.sl.swi_coortrf2(xq[i], xq[i], -sinincl, cosincl);
        this.sl.swi_cartpol(xq[i], xq[i]);
        /* adding node, we get perihelion in ecl. coord. */
        xq[i][0] += Math.atan2(sinnode, cosnode);
        xa[i][0] = this.sl.swi_mod2PI(xq[i][0] + Math.PI);
        xa[i][1] = -xq[i][1];
        if (do_focal_point) {
          xa[i][2] = sema * ecce * 2;        /* distance of aphelion */
        } else {
          xa[i][2] = sema * (1 + ecce);        /* distance of aphelion */
        }
        this.sl.swi_polcart(xq[i], xq[i]);
        this.sl.swi_polcart(xa[i], xa[i]);
        /* new distance of node from orbital ellipse:
         * true anomaly of node: */
        ny = this.sl.swi_mod2PI(ny - uu);
        ny2 = this.sl.swi_mod2PI(ny + Math.PI);
        /* eccentric anomaly */
        cosE = Math.cos(2 * Math.atan(Math.tan(ny / 2) /
                                             Math.sqrt((1+ecce) / (1-ecce))));
        cosE2 = Math.cos(2 * Math.atan(Math.tan(ny2 / 2) /
                                             Math.sqrt((1+ecce) / (1-ecce))));
        /* new distance */
        rn = sema * (1 - ecce * cosE);
        rn2 = sema * (1 - ecce * cosE2);
        /* old node distance */
        ro = Math.sqrt(this.sl.square_sum(xn[i]));
        ro2 = Math.sqrt(this.sl.square_sum(xs[i]));
        /* correct length of position vector */
        for (j = 0; j <= 2; j++) {
          xn[i][j] *= rn / ro;
          xs[i][j] *= rn2 / ro2;
        }
      }
      for (i = 0; i <= 2; i++) {
        if ((iflag & Swe.SEFLG_SPEED)!=0) {
          xpe[i+xpeOffs] = xq[1][i];
          xpe[i+3+xpeOffs] = (xq[2][i] - xq[0][i]) / dt / 2;
          xap[i+xapOffs] = xa[1][i];
          xap[i+3+xapOffs] = (xa[2][i] - xa[0][i]) / dt / 2;
          xna[i] = xn[1][i];
          xna[i+3] = (xn[2][i] - xn[0][i]) / dt / 2;
          xnd[i+xndOffs] = xs[1][i];
          xnd[i+3+xndOffs] = (xs[2][i] - xs[0][i]) / dt / 2;
        } else {
          xpe[i+xpeOffs] = xq[0][i];
          xpe[i+3+xpeOffs] = 0;
          xap[i+xapOffs] = xa[0][i];
          xap[i+3+xapOffs] = 0;
          xna[i] = xn[0][i];
          xna[i+3] = 0;
          xnd[i+xndOffs] = xs[0][i];
          xnd[i+3+xndOffs] = 0;
        }
      }
      is_true_nodaps = true;
    }
    /* to set the variables required in the save area,
     * i.e. ecliptic, nutation, barycentric sun, earth
     * we compute the planet */
    if (ipli == Swe.SE_MOON &&
        (iflag & (Swe.SEFLG_HELCTR | Swe.SEFLG_BARYCTR))!=0) {
      this.sw.swi_force_app_pos_etc();
      if (this.sw.swe_calc(tjd_et, Swe.SE_SUN, iflg0, x) == Swe.ERR) {
        return Swe.ERR;
      }
    } else {
      if (this.sw.swe_calc(tjd_et, ipli,
                   iflg0 | (iflag & Swe.SEFLG_TOPOCTR), x) ==
                                                                Swe.ERR) {
        return Swe.ERR;
      }
    }
    /***********************
     * position of observer
     ***********************/
    if ((iflag & Swe.SEFLG_TOPOCTR)!=0) {
      /* geocentric position of observer */
      if (this.sw.swi_get_observer(tjd_et, iflag, false, xobs) != Swe.OK) {
        return Swe.ERR;
      }
      /*for (i = 0; i <= 5; i++)
        xobs[i] = this.swed.topd.xobs[i];*/
    } else {
      for (i = 0; i <= 5; i++)
        xobs[i] = 0;
    }
    if ((iflag & (Swe.SEFLG_HELCTR | Swe.SEFLG_BARYCTR))!=0) {
      if ((iflag & Swe.SEFLG_HELCTR)!=0 &&
          (iflag & Swe.SEFLG_MOSEPH)==0) {
        for (i = 0; i <= 5; i++)
          xobs[i] = xsun[i];
      }
    } else if (ipl == Swe.SE_SUN && (iflag & Swe.SEFLG_MOSEPH)==0) {
      for (i = 0; i <= 5; i++)
        xobs[i] = xsun[i];
    } else {
      /* barycentric position of observer */
      for (i = 0; i <= 5; i++)
        xobs[i] += xear[i];
    }
    /* ecliptic obliqity */
    if ((iflag & Swe.SEFLG_J2000)!=0) {
      oe = this.swed.oec2000;
    } else {
      oe = this.swed.oec;
    }
    /*************************************************
     * conversions shared by mean and osculating points
     *************************************************/
    for (ij = 0, xp = xx, xpOffs = 0; ij < 4; ij++, xpOffs += 6) {
      /* no nodes for earth */
      if (ipli == Swe.SE_EARTH && ij <= 1) {
        for (i = 0; i <= 5; i++)
              xp[i+xpOffs] = 0;
        continue;
      }
      /*********************
       * to equator
       *********************/
      if (is_true_nodaps && (iflag & Swe.SEFLG_NONUT)==0) {
        this.sl.swi_coortrf2(xp, xpOffs, xp, xpOffs, -this.swed.nut.snut, this.swed.nut.cnut);
        if ((iflag & Swe.SEFLG_SPEED)!=0) {
          this.sl.swi_coortrf2(xp, 3+xpOffs, xp, 3+xpOffs, -this.swed.nut.snut, this.swed.nut.cnut);
        }
      }
      this.sl.swi_coortrf2(xp, xpOffs, xp, xpOffs, -oe.seps, oe.ceps);
      this.sl.swi_coortrf2(xp, 3+xpOffs, xp, 3+xpOffs, -oe.seps, oe.ceps);
      if (is_true_nodaps) {
        /****************************
         * to mean ecliptic of date
         ****************************/
        if ((iflag & Swe.SEFLG_NONUT)==0) {
          this.sw.swi_nutate(xp, xpOffs, iflag, true);
        }
      }
      /*********************
       * to J2000
       *********************/
      this.sl.swi_precess(xp, xpOffs, tjd_et, iflag, Swe.SwephData.J_TO_J2000);
      if ((iflag & Swe.SEFLG_SPEED)!=0) {
        this.sw.swi_precess_speed(xp, xpOffs, tjd_et, iflag, Swe.SwephData.J_TO_J2000);
      }
      /*********************
       * to barycenter
       *********************/
      if (ipli == Swe.SE_MOON) {
        for (i = 0; i <= 5; i++)
          xp[i+xpOffs] += xear[i];
      } else {
        if ((iflag & Swe.SEFLG_MOSEPH)==0 && !ellipse_is_bary) {
          for (j = 0; j <= 5; j++)
            xp[j+xpOffs] += xsun[j];
        }
      }
      /*********************
       * to correct center
       *********************/
      for (j = 0; j <= 5; j++)
        xp[j+xpOffs] -= xobs[j];
          /* geocentric perigee/apogee of sun */
      if (ipl == Swe.SE_SUN &&
          (iflag & (Swe.SEFLG_HELCTR | Swe.SEFLG_BARYCTR))==0) {
        for (j = 0; j <= 5; j++)
          xp[j+xpOffs] = -xp[j+xpOffs];
      }
      /*********************
       * light deflection
       *********************/
      dt = Math.sqrt(this.sl.square_sum(xp, xpOffs)) * Swe.AUNIT / Swe.SwephData.CLIGHT / 86400.0;
      if (do_defl) {
        this.sw.swi_deflect_light(xp, xpOffs, dt, iflag);
      }
      /*********************
       * aberration
       *********************/
      if (do_aberr) {
        this.sw.swi_aberr_light(xp, xpOffs, xobs, iflag);
        /*
         * Apparent speed is also influenced by
         * the difference of speed of the earth between t and t-dt.
         * Neglecting this would result in an error of several 0.1"
         */
        if ((iflag & Swe.SEFLG_SPEED)!=0) {
          /* get barycentric sun and earth for t-dt into save area */
          if (this.sw.swe_calc(tjd_et - dt, ipli,
                       iflg0 | (iflag & Swe.SEFLG_TOPOCTR), x2) ==
                                                                Swe.ERR) {
            return Swe.ERR;
          }
          if ((iflag & Swe.SEFLG_TOPOCTR)!=0) {
            /* geocentric position of observer */
            for (i = 0; i <= 5; i++)
              xobs2[i] = this.swed.topd.xobs[i];
          } else {
            for (i = 0; i <= 5; i++)
              xobs2[i] = 0;
          }
          if ((iflag & (Swe.SEFLG_HELCTR | Swe.SEFLG_BARYCTR))!=0) {
            if ((iflag & Swe.SEFLG_HELCTR)!=0 &&
                (iflag & Swe.SEFLG_MOSEPH)==0) {
              for (i = 0; i <= 5; i++)
                xobs2[i] = xsun[i];
            }
          } else if (ipl == Swe.SE_SUN && (iflag & Swe.SEFLG_MOSEPH)==0) {
            for (i = 0; i <= 5; i++)
              xobs2[i] = xsun[i];
          } else {
            /* barycentric position of observer */
            for (i = 0; i <= 5; i++)
              xobs2[i] += xear[i];
          }
          for (i = 3; i <= 5; i++)
            xp[i+xpOffs] += xobs[i] - xobs2[i];
          /* The above call of swe_calc() has destroyed the
           * parts of the save area
           * (i.e. bary sun, earth nutation matrix!).
           * to restore it:
           */
          if (this.sw.swe_calc(tjd_et, Swe.SE_SUN,
                       iflg0 | (iflag & Swe.SEFLG_TOPOCTR), x2) ==
                                                                Swe.ERR) {
            return Swe.ERR;
          }
        }
      }
      /*********************
       * precession
       *********************/
      /* save J2000 coordinates; required for sidereal positions */
      for (j = 0; j <= 5; j++)
        x2000[j] = xp[j+xpOffs];
      if ((iflag & Swe.SEFLG_J2000)==0) {
        this.sl.swi_precess(xp, xpOffs, tjd_et, iflag, Swe.SwephData.J2000_TO_J);
        if ((iflag & Swe.SEFLG_SPEED)!=0) {
          this.sw.swi_precess_speed(xp, xpOffs, tjd_et, iflag, Swe.SwephData.J2000_TO_J);
        }
      }
      /*********************
       * nutation
       *********************/
      if ((iflag & Swe.SEFLG_NONUT)==0) {
        this.sw.swi_nutate(xp, xpOffs, iflag, false);
      }
      /* now we have equatorial cartesian coordinates; keep them */
      for (j = 0; j <= 5; j++)
        pldat.xreturn[18+j] = xp[j+xpOffs];
      /************************************************
       * transformation to ecliptic.                  *
       * with sidereal calc. this will be overwritten *
       * afterwards.                                  *
       ************************************************/
      this.sl.swi_coortrf2(xp, xpOffs, xp, xpOffs, oe.seps, oe.ceps);
      if ((iflag & Swe.SEFLG_SPEED)!=0) {
        this.sl.swi_coortrf2(xp, 3+xpOffs, xp, 3+xpOffs, oe.seps, oe.ceps);
      }
      if ((iflag & Swe.SEFLG_NONUT)==0) {
        this.sl.swi_coortrf2(xp, xpOffs, xp, xpOffs, this.swed.nut.snut, this.swed.nut.cnut);
        if ((iflag & Swe.SEFLG_SPEED)!=0) {
          this.sl.swi_coortrf2(xp, 3+xpOffs, xp, 3+xpOffs,
                          this.swed.nut.snut, this.swed.nut.cnut);
        }
      }
        /* now we have ecliptic cartesian coordinates */
        for (j = 0; j <= 5; j++)
          pldat.xreturn[6+j] = xp[j+xpOffs];
      /************************************
       * sidereal positions               *
       ************************************/
      if ((iflag & Swe.SEFLG_SIDEREAL)!=0) {
        /* project onto ecliptic t0 */
        if ((this.swed.sidd.sid_mode & Swe.SE_SIDBIT_ECL_T0)!=0) {
          if (this.sw.swi_trop_ra2sid_lon(x2000, pldat.xreturn, 6, pldat.xreturn, 18, iflag) != Swe.OK) {
            return Swe.ERR;
          }
        /* project onto solar system equator */
        } else if ((this.swed.sidd.sid_mode & Swe.SE_SIDBIT_SSY_PLANE)!=0) {
          if (this.sw.swi_trop_ra2sid_lon_sosy(x2000, pldat.xreturn, 6, pldat.xreturn, 18, iflag) != Swe.OK) {
            return Swe.ERR;
        }
        } else {
        /* traditional algorithm */
        this.sl.swi_cartpol_sp(pldat.xreturn, 6, pldat.xreturn, 0);
        pldat.xreturn[0] -= sw.swe_get_ayanamsa(tjd_et) * SwissData.DEGTORAD;
        this.sl.swi_polcart_sp(pldat.xreturn, 0, pldat.xreturn, 6);
        }
      }
      if ((iflag & Swe.SEFLG_XYZ)!=0 &&
          (iflag & Swe.SEFLG_EQUATORIAL)!=0) {
        for (j = 0; j <= 5; j++)
          xp[j+xpOffs] = pldat.xreturn[18+j];
        continue;
      }
      if ((iflag & Swe.SEFLG_XYZ)!=0) {
        for (j = 0; j <= 5; j++)
          xp[j+xpOffs] = pldat.xreturn[6+j];
        continue;
      }
      /************************************************
       * transformation to polar coordinates          *
       ************************************************/
      this.sl.swi_cartpol_sp(pldat.xreturn, 18, pldat.xreturn, 12);
      this.sl.swi_cartpol_sp(pldat.xreturn, 6, pldat.xreturn, 0);
      /**********************
       * radians to degrees *
       **********************/
      if ((iflag & Swe.SEFLG_RADIANS) == 0) {
        for (j = 0; j < 2; j++) {
    pldat.xreturn[j] *= SwissData.RADTODEG;   /* ecliptic */
    pldat.xreturn[j+3] *= SwissData.RADTODEG;
    pldat.xreturn[j+12] *= SwissData.RADTODEG;  /* equator */
    pldat.xreturn[j+15] *= SwissData.RADTODEG;
        }
      }
      if ((iflag & Swe.SEFLG_EQUATORIAL)!=0) {
        for (j = 0; j <= 5; j++)
          xp[j+xpOffs] = pldat.xreturn[12+j];
        continue;
      } else {
        for (j = 0; j <= 5; j++)
          xp[j+xpOffs] = pldat.xreturn[j];
        continue;
      }
    }
    for (i = 0; i <= 5; i++) {
      if (i > 2 && (iflag & Swe.SEFLG_SPEED)==0) {
        xna[i] = xnd[i+xndOffs] = xpe[i+xpeOffs] = xap[i+xapOffs] = 0;
      }
      if (xnasc != null) {
        xnasc[i] = xna[i];
      }
      if (xndsc != null) {
        xndsc[i] = xnd[i+xndOffs];
      }
      if (xperi != null) {
        xperi[i] = xpe[i+xpeOffs];
      }
      if (xaphe != null) {
        xaphe[i] = xap[i+xapOffs];
      }
    }
    return Swe.OK;
  }
  swe_nod_aps_ut(tjd_ut, ipl, iflag,  method, xnasc, xndsc, xperi, xaphe) {
    SweDate.swi_set_tid_acc(tjd_ut, iflag, 0);
    return swe_nod_aps(tjd_ut + SweDate.getDeltaT(tjd_ut),
                        ipl, iflag, method, xnasc, xndsc, xperi, xaphe);
  }

  swe_gauquelin_sector(t_ut, ipl, starname, iflag, imeth, geopos, atpress, attemp, DblObj dgsect) {
    DblObj dtmp=new DblObj();
    var rise_found = true;
    var set_found = true;
    var retval;
    var tret = new Array(3);
    var t_et, t;
    var x0 = new Array(6);
    var eps, nutlo = new Array(2), armc;
    var epheflag = iflag & Swe.SEFLG_EPHMASK;
    var do_fixstar = (starname != null && starname.length() > 0);
    var risemeth = 0;
    var above_horizon = false;
    if (imeth < 0 || imeth > 5) {
      console.error("invalid method: "+imeth);
      return Swe.ERR;
    }
    /* function calls for Pluto with asteroid number 134340
     * are treated as calls for Pluto as main body SE_PLUTO */
    if (ipl == Swe.SE_AST_OFFSET + 134340) {
      ipl = Swe.SE_PLUTO;
    }
    /* 
     * geometrically from ecl. longitude and latitude 
     */
    if (imeth == 0 || imeth == 1) {
      t_et = t_ut + SweDate.getDeltaT(t_ut);
      eps = this.sl.swi_epsiln(t_et, iflag) * SwissData.RADTODEG;
      this.sl.swi_nutation(t_et, iflag, nutlo);
      nutlo[0] *= SwissData.RADTODEG;
      nutlo[1] *= SwissData.RADTODEG;
      armc = this.sl.swe_degnorm(this.sl.swe_sidtime0(t_ut, eps + nutlo[1], nutlo[0]) * 15 + geopos[0]);
        if (this.sw.swe_calc(t_et, ipl, iflag, x0) == Swe.ERR)
    return Swe.ERR;

      if (imeth == 1)
        x0[1] = 0;
      dgsect.val = this.sw.swe_house_pos(armc, geopos[1], eps + nutlo[1], 'G', x0, null);
      return Swe.OK;
    }
    /* 
     * from rise and set times
     */
    if (imeth == 2 || imeth == 4)
      risemeth |= Swe.SE_BIT_NO_REFRACTION;
    if (imeth == 2 || imeth == 3)
      risemeth |= Swe.SE_BIT_DISC_CENTER;
    /* find the next rising time of the planet or star */
    dtmp.val=tret[0];
    retval = swe_rise_trans(t_ut, ipl, starname, epheflag,
                            Swe.SE_CALC_RISE|risemeth, geopos, atpress, attemp,

                            dtmp);
    tret[0]=dtmp.val;
    if (retval == Swe.ERR) {
      return Swe.ERR; 
    } else if (retval == -2) {
      /* actually, we could return ERR here. However, we
       * keep this variable, in case we implement an algorithm
       * for Gauquelin sector positions of circumpolar bodies.
       * As with the Ludwig Otto procedure with Placidus, one 
       * could replace missing rises or sets by meridian transits,
       * although there are cases where even this is not possible.
       * Sometimes a body both appears and disappears on the western 
       * part of the horizon. Using true culminations rather than meridan
       * transits would not help in any case either, because there are
       * cases where a body does not have a culmination within days,
       * e.g. the sun near the poles.
       */
      rise_found = false;    
    }
    /* find the next setting time of the planet or star */
    dtmp.val=tret[1];
    retval = swe_rise_trans(t_ut, ipl, starname, epheflag,
                            Swe.SE_CALC_SET|risemeth, geopos, atpress, attemp,
                            dtmp);
    tret[1]=dtmp.val;
    if (retval == Swe.ERR) {
      return Swe.ERR; 
    } else if (retval == -2) {
      set_found = false;
    }
    if (tret[0] < tret[1] && rise_found == true) {
      above_horizon = false;
      /* find last set */
      t = t_ut - 1.2;
      if (set_found) t = tret[1] - 1.2;
      set_found = true;
      dtmp.val=tret[1];
      retval = swe_rise_trans(t, ipl, starname, epheflag,
                            Swe.SE_CALC_SET|risemeth, geopos, atpress, attemp,
                            dtmp);
      tret[1]=dtmp.val;
      if (retval == Swe.ERR) {
        return Swe.ERR; 
      } else if (retval == -2) {
        set_found = false;
      }
    } else if (tret[0] >= tret[1] && set_found == true) {
      above_horizon = true;
      /* find last rise */
      t = t_ut - 1.2;
      if (rise_found) t = tret[0] - 1.2;
      rise_found = true;
      dtmp.val=tret[0];
      retval = swe_rise_trans(t, ipl, starname, epheflag,
                            Swe.SE_CALC_RISE|risemeth, geopos, atpress, attemp,
                            dtmp);

      tret[0]=dtmp.val;
      if (retval == Swe.ERR) {
        return Swe.ERR; 
      } else if (retval == -2) {
        rise_found = false;
      }
    }
    if (rise_found && set_found) {
      if (above_horizon) {
        dgsect.val = (t_ut - tret[0]) / (tret[1] - tret[0]) * 18 + 1;
      } else {
        dgsect.val = (t_ut - tret[1]) / (tret[0] - tret[1]) * 18 + 19;
      }
      return Swe.OK;
    } else {
      dgsect.val = 0;

      console.error("rise or set not found for planet "+ipl);
      return Swe.ERR;
    }
  }
};