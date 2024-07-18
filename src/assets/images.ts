import { pickRandomItems } from "../utils/utils";

// printf '"%s",' * | sed 's/,$/\n/'
const kommunevaapen = ["0001.png", "0101.png", "0104.png", "0105.png", "0106.png", "0111.png", "0118.png", "0119.png", "0121.png", "0122.png", "0123.png", "0124.png", "0125.png", "0127.png", "0128.png", "0136.png", "0137.png", "0138.png", "0211.png", "0213.png", "0214.png", "0215.png", "0216.png", "0217.png", "0219.png", "0220.png", "0221.png", "0226.png", "0227.png", "0228.png", "0229.png", "0230.png", "0231.png", "0233.png", "0234.png", "0235.png", "0236.png", "0237.png", "0238.png", "0239.png", "0301.png", "0402.png", "0403.png", "0412.png", "0415.png", "0417.png", "0418.png", "0419.png", "0420.png", "0423.png", "0425.png", "0426.png", "0427.png", "0428.png", "0429.png", "0430.png", "0432.png", "0434.png", "0436.png", "0437.png", "0438.png", "0439.png", "0441.png", "0501.png", "0502.png", "0511.png", "0512.png", "0513.png", "0514.png", "0515.png", "0516.png", "0517.png", "0519.png", "0520.png", "0521.png", "0522.png", "0528.png", "0529.png", "0532.png", "0533.png", "0534.png", "0536.png", "0538.png", "0540.png", "0541.png", "0542.png", "0543.png", "0544.png", "0545.png", "0602.png", "0604.png", "0605.png", "0612.png", "0615.png", "0616.png", "0617.png", "0618.png", "0619.png", "0620.png", "0621.png", "0622.png", "0623.png", "0624.png", "0625.png", "0626.png", "0627.png", "0628.png", "0631.png", "0632.png", "0633.png", "0701.png", "0704.png", "0710.png", "0711.png", "0712.png", "0713.png", "0715.png", "0716.png", "0729.png", "0805.png", "0806.png", "0807.png", "0811.png", "0814.png", "0815.png", "0817.png", "0819.png", "0821.png", "0822.png", "0826.png", "0827.png", "0828.png", "0829.png", "0830.png", "0831.png", "0833.png", "0834.png", "0901.png", "0904.png", "0906.png", "0911.png", "0912.png", "0914.png", "0919.png", "0926.png", "0928.png", "0929.png", "0935.png", "0937.png", "0938.png", "0940.png", "0941.png", "1001.png", "1002.png", "1003.png", "1004.png", "1014.png", "1017.png", "1018.png", "1021.png", "1026.png", "1027.png", "1029.png", "1032.png", "1034.png", "1037.png", "1046.png", "1100.png", "1101.png", "1102.png", "1103.png", "1106.png", "1108.png", "1111.png", "1112.png", "1114.png", "1119.png", "1120.png", "1121.png", "1122.png", "1124.png", "1127.png", "1129.png", "1130.png", "1133.png", "1134.png", "1135.png", "1141.png", "1142.png", "1144.png", "1145.png", "1146.png", "1149.png", "1151.png", "1160.png", "1201.png", "1211.png", "1216.png", "1219.png", "1221.png", "1222.png", "1223.png", "1224.png", "1227.png", "1228.png", "1231.png", "1232.png", "1233.png", "1234.png", "1235.png", "1238.png", "1241.png", "1242.png", "1243.png", "1244.png", "1245.png", "1246.png", "1247.png", "1251.png", "1252.png", "1253.png", "1256.png", "1259.png", "1260.png", "1263.png", "1264.png", "1265.png", "1266.png", "1401.png", "1411.png", "1412.png", "1413.png", "1416.png", "1417.png", "1418.png", "1419.png", "1420.png", "1421.png", "1422.png", "1424.png", "1426.png", "1428.png", "1429.png", "1430.png", "1431.png", "1432.png", "1433.png", "1438.png", "1439.png", "1441.png", "1443.png", "1444.png", "1445.png", "1449.png", "1500.png", "1502.png", "1504.png", "1505.png", "1506.png", "1507.png", "1508.png", "1511.png", "1514.png", "1515.png", "1516.png", "1517.png", "1519.png", "1520.png", "1523.png", "1524.png", "1525.png", "1526.png", "1528.png", "1529.png", "1531.png", "1532.png", "1534.png", "1535.png", "1539.png", "1543.png", "1545.png", "1546.png", "1547.png", "1548.png", "1551.png", "1554.png", "1557.png", "1560.png", "1563.png", "1566.png", "1571.png", "1573.png", "1576.png", "1577.png", "1578.png", "1579.png", "1580.png", "1800.png", "1804.png", "1805.png", "1806.png", "1811.png", "1812.png", "1813.png", "1815.png", "1816.png", "1818.png", "1820.png", "1822.png", "1824.png", "1825.png", "1826.png", "1827.png", "1828.png", "1832.png", "1833.png", "1834.png", "1835.png", "1836.png", "1837.png", "1838.png", "1839.png", "1840.png", "1841.png", "1845.png", "1848.png", "1849.png", "1850.png", "1851.png", "1852.png", "1853.png", "1854.png", "1856.png", "1857.png", "1859.png", "1860.png", "1865.png", "1866.png", "1867.png", "1868.png", "1870.png", "1871.png", "1874.png", "1875.png", "1902.png", "1903.png", "1911.png", "1913.png", "1917.png", "1919.png", "1920.png", "1922.png", "1923.png", "1924.png", "1925.png", "1926.png", "1927.png", "1928.png", "1929.png", "1931.png", "1933.png", "1936.png", "1938.png", "1939.png", "1940.png", "1941.png", "1942.png", "1943.png", "2002.png", "2003.png", "2004.png", "2011.png", "2012.png", "2014.png", "2015.png", "2017.png", "2018.png", "2019.png", "2020.png", "2021.png", "2022.png", "2023.png", "2024.png", "2025.png", "2027.png", "2028.png", "2030.png", "2100.png", "3000.png", "3001.png", "3002.png", "3003.png", "3004.png", "3005.png", "3006.png", "3007.png", "3012.png", "3013.png", "3014.png", "3015.png", "3016.png", "3017.png", "3018.png", "3019.png", "3020.png", "3021.png", "3022.png", "3023.png", "3024.png", "3025.png", "3026.png", "3027.png", "3028.png", "3029.png", "3030.png", "3031.png", "3032.png", "3033.png", "3034.png", "3035.png", "3036.png", "3037.png", "3038.png", "3039.png", "3040.png", "3041.png", "3042.png", "3043.png", "3044.png", "3045.png", "3046.png", "3047.png", "3048.png", "3049.png", "3050.png", "3051.png", "3052.png", "3053.png", "3054.png", "3099.png", "3100.png", "3101.png", "3103.png", "3105.png", "3107.png", "3112.png", "3114.png", "3116.png", "3118.png", "3120.png", "3122.png", "3124.png", "3200.png", "3201.png", "3203.png", "3205.png", "3207.png", "3209.png", "3212.png", "3214.png", "3216.png", "3218.png", "3220.png", "3222.png", "3224.png", "3226.png", "3228.png", "3230.png", "3232.png", "3234.png", "3236.png", "3238.png", "3240.png", "3242.png", "3300.png", "3301.png", "3303.png", "3305.png", "3310.png", "3312.png", "3314.png", "3316.png", "3318.png", "3320.png", "3322.png", "3324.png", "3326.png", "3328.png", "3330.png", "3332.png", "3334.png", "3336.png", "3338.png", "3400.png", "3401.png", "3403.png", "3405.png", "3407.png", "3411.png", "3412.png", "3413.png", "3414.png", "3415.png", "3416.png", "3417.png", "3418.png", "3419.png", "3420.png", "3421.png", "3422.png", "3423.png", "3424.png", "3425.png", "3426.png", "3427.png", "3428.png", "3429.png", "3430.png", "3431.png", "3432.png", "3433.png", "3434.png", "3435.png", "3436.png", "3437.png", "3438.png", "3439.png", "3440.png", "3441.png", "3442.png", "3443.png", "3446.png", "3447.png", "3448.png", "3449.png", "3450.png", "3451.png", "3452.png", "3453.png", "3454.png", "3800.png", "3801.png", "3802.png", "3803.png", "3804.png", "3805.png", "3806.png", "3807.png", "3808.png", "3811.png", "3812.png", "3813.png", "3814.png", "3815.png", "3816.png", "3817.png", "3818.png", "3819.png", "3820.png", "3821.png", "3822.png", "3823.png", "3824.png", "3825.png", "3900.png", "3901.png", "3903.png", "3905.png", "3907.png", "3909.png", "3911.png", "4000.png", "4001.png", "4003.png", "4005.png", "4010.png", "4012.png", "4014.png", "4016.png", "4018.png", "4020.png", "4022.png", "4024.png", "4026.png", "4028.png", "4030.png", "4032.png", "4034.png", "4036.png", "4200.png", "4201.png", "4202.png", "4203.png", "4204.png", "4205.png", "4206.png", "4207.png", "4211.png", "4212.png", "4213.png", "4214.png", "4215.png", "4216.png", "4217.png", "4218.png", "4219.png", "4220.png", "4221.png", "4222.png", "4223.png", "4224.png", "4225.png", "4226.png", "4227.png", "4228.png", "4600.png", "4601.png", "4602.png", "4611.png", "4612.png", "4613.png", "4614.png", "4615.png", "4616.png", "4617.png", "4618.png", "4619.png", "4620.png", "4621.png", "4622.png", "4623.png", "4624.png", "4625.png", "4626.png", "4627.png", "4628.png", "4629.png", "4630.png", "4631.png", "4632.png", "4633.png", "4634.png", "4635.png", "4636.png", "4637.png", "4638.png", "4639.png", "4640.png", "4641.png", "4642.png", "4643.png", "4644.png", "4645.png", "4646.png", "4647.png", "4648.png", "4649.png", "4650.png", "4651.png", "4699.png", "5000.png", "5001.png", "5004.png", "5005.png", "5006.png", "5007.png", "5011.png", "5012.png", "5013.png", "5014.png", "5015.png", "5016.png", "5017.png", "5018.png", "5019.png", "5020.png", "5021.png", "5022.png", "5023.png", "5024.png", "5025.png", "5026.png", "5027.png", "5028.png", "5029.png", "5030.png", "5031.png", "5032.png", "5033.png", "5034.png", "5035.png", "5036.png", "5037.png", "5038.png", "5039.png", "5040.png", "5041.png", "5042.png", "5043.png", "5044.png", "5045.png", "5046.png", "5047.png", "5048.png", "5049.png", "5050.png", "5051.png", "5052.png", "5053.png", "5054.png", "5055.png", "5056.png", "5057.png", "5058.png", "5059.png", "5060.png", "5061.png", "5400.png", "5401.png", "5402.png", "5403.png", "5404.png", "5405.png", "5406.png", "5411.png", "5412.png", "5413.png", "5414.png", "5415.png", "5416.png", "5417.png", "5418.png", "5419.png", "5420.png", "5421.png", "5422.png", "5423.png", "5424.png", "5425.png", "5426.png", "5427.png", "5428.png", "5429.png", "5430.png", "5432.png", "5433.png", "5434.png", "5435.png", "5436.png", "5437.png", "5438.png", "5439.png", "5440.png", "5441.png", "5442.png", "5443.png", "5444.png", "5500.png", "5501.png", "5503.png", "5510.png", "5512.png", "5514.png", "5516.png", "5518.png", "5520.png", "5522.png", "5524.png", "5526.png", "5528.png", "5530.png", "5532.png", "5534.png", "5536.png", "5538.png", "5540.png", "5542.png", "5544.png", "5546.png", "5600.png", "5601.png", "5603.png", "5605.png", "5607.png", "5610.png", "5612.png", "5614.png", "5616.png", "5618.png", "5620.png", "5622.png", "5624.png", "5626.png", "5628.png", "5630.png", "5632.png", "5634.png", "5636.png", "9900.png",];

export const images = (n: number) => pickRandomItems(kommunevaapen, n).map(img => `https://static.fiks.ks.no/img/kommunevaapen/${img}`)