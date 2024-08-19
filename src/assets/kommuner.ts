import { pickRandomItems } from "../utils/utils";

/**
 * From Kartverket https://www.kartverket.no/til-lands/fakta-om-norge/norske-fylke-og-kommunar
 * [...document.querySelectorAll('tr:not(:first-child)')].map(tr => ({navn: tr.children[2].textContent, nr: tr.children[4].textContent}))
 */

const kommuner2023 = [{ "navn": "Eigersund", "nr": "1101" }, { "navn": "Stavanger", "nr": "1103" }, { "navn": "Haugesund", "nr": "1106" }, { "navn": "Sandnes", "nr": "1108" }, { "navn": "Sokndal", "nr": "1111" }, { "navn": "Lund", "nr": "1112" }, { "navn": "Bjerkreim", "nr": "1114" }, { "navn": "Hå", "nr": "1119" }, { "navn": "Klepp", "nr": "1120" }, { "navn": "Time", "nr": "1121" }, { "navn": "Gjesdal", "nr": "1122" }, { "navn": "Sola", "nr": "1124" }, { "navn": "Randaberg", "nr": "1127" }, { "navn": "Strand", "nr": "1130" }, { "navn": "Hjelmeland", "nr": "1133" }, { "navn": "Suldal", "nr": "1134" }, { "navn": "Sauda", "nr": "1135" }, { "navn": "Kvitsøy", "nr": "1144" }, { "navn": "Bokn", "nr": "1145" }, { "navn": "Tysvær", "nr": "1146" }, { "navn": "Karmøy", "nr": "1149" }, { "navn": "Utsira", "nr": "1151" }, { "navn": "Vindafjord", "nr": "1160" }, { "navn": "Kristiansund", "nr": "1505" }, { "navn": "Molde", "nr": "1506" }, { "navn": "Ålesund", "nr": "1507" }, { "navn": "Vanylven", "nr": "1511" }, { "navn": "Sande", "nr": "1514" }, { "navn": "Herøy", "nr": "1515" }, { "navn": "Ulstein", "nr": "1516" }, { "navn": "Hareid", "nr": "1517" }, { "navn": "Ørsta", "nr": "1520" }, { "navn": "Stranda", "nr": "1525" }, { "navn": "Sykkylven", "nr": "1528" }, { "navn": "Sula", "nr": "1531" }, { "navn": "Giske", "nr": "1532" }, { "navn": "Vestnes", "nr": "1535" }, { "navn": "Rauma", "nr": "1539" }, { "navn": "Aukra", "nr": "1547" }, { "navn": "Averøy", "nr": "1554" }, { "navn": "Gjemnes", "nr": "1557" }, { "navn": "Tingvoll", "nr": "1560" }, { "navn": "Sunndal", "nr": "1563" }, { "navn": "Surnadal", "nr": "1566" }, { "navn": "Smøla", "nr": "1573" }, { "navn": "Aure", "nr": "1576" }, { "navn": "Volda", "nr": "1577" }, { "navn": "Fjord", "nr": "1578" }, { "navn": "Hustadvika", "nr": "1579" }, { "navn": "Haram", "nr": "*" }, { "navn": "Bodø", "nr": "1804" }, { "navn": "Narvik", "nr": "1806" }, { "navn": "Bindal", "nr": "1811" }, { "navn": "Sømna", "nr": "1812" }, { "navn": "Brønnøy", "nr": "1813" }, { "navn": "Vega", "nr": "1815" }, { "navn": "Vevelstad", "nr": "1816" }, { "navn": "Herøy", "nr": "1818" }, { "navn": "Alstahaug", "nr": "1820" }, { "navn": "Leirfjord", "nr": "1822" }, { "navn": "Vefsn", "nr": "1824" }, { "navn": "Grane", "nr": "1825" }, { "navn": "Aarborte - Hattfjelldal", "nr": "1826" }, { "navn": "Dønna", "nr": "1827" }, { "navn": "Nesna", "nr": "1828" }, { "navn": "Hemnes", "nr": "1832" }, { "navn": "Rana", "nr": "1833" }, { "navn": "Lurøy", "nr": "1834" }, { "navn": "Træna", "nr": "1835" }, { "navn": "Rødøy", "nr": "1836" }, { "navn": "Meløy", "nr": "1837" }, { "navn": "Gildeskål", "nr": "1838" }, { "navn": "Beiarn", "nr": "1839" }, { "navn": "Saltdal", "nr": "1840" }, { "navn": "Fauske - Fuossko", "nr": "1841" }, { "navn": "Sørfold", "nr": "1845" }, { "navn": "Steigen", "nr": "1848" }, { "navn": "Lødingen", "nr": "1851" }, { "navn": "Evenes - Evenášši", "nr": "1853" }, { "navn": "Røst", "nr": "1856" }, { "navn": "Værøy", "nr": "1857" }, { "navn": "Flakstad", "nr": "1859" }, { "navn": "Vestvågøy", "nr": "1860" }, { "navn": "Vågan", "nr": "1865" }, { "navn": "Hadsel", "nr": "1866" }, { "navn": "Bø", "nr": "1867" }, { "navn": "Øksnes", "nr": "1868" }, { "navn": "Sortland - Suortá", "nr": "1870" }, { "navn": "Andøy", "nr": "1871" }, { "navn": "Moskenes", "nr": "1874" }, { "navn": "Hábmer - Hamarøy", "nr": "1875" }, { "navn": "Halden", "nr": "3001" }, { "navn": "Moss", "nr": "3002" }, { "navn": "Sarpsborg", "nr": "3003" }, { "navn": "Fredrikstad", "nr": "3004" }, { "navn": "Hvaler", "nr": "3011" }, { "navn": "Råde", "nr": "3017" }, { "navn": "Våler", "nr": "3018" }, { "navn": "Skiptvet", "nr": "3015" }, { "navn": "Indre Østfold", "nr": "3014" }, { "navn": "Rakkestad", "nr": "3016" }, { "navn": "Marker", "nr": "3013" }, { "navn": "Aremark", "nr": "3012" }, { "navn": "Bærum", "nr": "3024" }, { "navn": "Asker", "nr": "3025" }, { "navn": "Lillestrøm", "nr": "3030" }, { "navn": "Nordre Follo", "nr": "3020" }, { "navn": "Ullensaker", "nr": "3033" }, { "navn": "Nesodden", "nr": "3023" }, { "navn": "Frogn", "nr": "3022" }, { "navn": "Vestby", "nr": "3019" }, { "navn": "Ås", "nr": "3021" }, { "navn": "Enebakk", "nr": "3028" }, { "navn": "Lørenskog", "nr": "3029" }, { "navn": "Rælingen", "nr": "3027" }, { "navn": "Aurskog-Høland", "nr": "3026" }, { "navn": "Nes", "nr": "3034" }, { "navn": "Gjerdrum", "nr": "3032" }, { "navn": "Nittedal", "nr": "3031" }, { "navn": "Lunner", "nr": "3054" }, { "navn": "Jevnaker", "nr": "3053" }, { "navn": "Nannestad", "nr": "3036" }, { "navn": "Eidsvoll", "nr": "3035" }, { "navn": "Hurdal", "nr": "3037" }, { "navn": "Drammen", "nr": "3005" }, { "navn": "Kongsberg", "nr": "3006" }, { "navn": "Ringerike", "nr": "3007" }, { "navn": "Hole", "nr": "3038" }, { "navn": "Lier", "nr": "3049" }, { "navn": "Øvre Eiker", "nr": "3048" }, { "navn": "Modum", "nr": "3047" }, { "navn": "Krødsherad", "nr": "3046" }, { "navn": "Flå", "nr": "3039" }, { "navn": "Nesbyen", "nr": "3040" }, { "navn": "Gol", "nr": "3041" }, { "navn": "Hemsedal", "nr": "3042" }, { "navn": "Ål", "nr": "3043" }, { "navn": "Hol", "nr": "3044" }, { "navn": "Sigdal", "nr": "3045" }, { "navn": "Flesberg", "nr": "3050" }, { "navn": "Rollag", "nr": "3051" }, { "navn": "Nore og Uvdal", "nr": "3052" }, { "navn": "Kongsvinger", "nr": "3401" }, { "navn": "Hamar", "nr": "3403" }, { "navn": "Lillehammer", "nr": "3405" }, { "navn": "Gjøvik", "nr": "3407" }, { "navn": "Ringsaker", "nr": "3411" }, { "navn": "Løten", "nr": "3412" }, { "navn": "Stange", "nr": "3413" }, { "navn": "Nord-Odal", "nr": "3414" }, { "navn": "Sør-Odal", "nr": "3415" }, { "navn": "Eidskog", "nr": "3416" }, { "navn": "Grue", "nr": "3417" }, { "navn": "Åsnes", "nr": "3418" }, { "navn": "Våler", "nr": "3419" }, { "navn": "Elverum", "nr": "3420" }, { "navn": "Trysil", "nr": "3421" }, { "navn": "Åmot", "nr": "3422" }, { "navn": "Stor-Elvdal", "nr": "3423" }, { "navn": "Rendalen", "nr": "3424" }, { "navn": "Engerdal", "nr": "3425" }, { "navn": "Tolga", "nr": "3426" }, { "navn": "Tynset", "nr": "3427" }, { "navn": "Alvdal", "nr": "3428" }, { "navn": "Folldal", "nr": "3429" }, { "navn": "Os", "nr": "3430" }, { "navn": "Dovre", "nr": "3431" }, { "navn": "Lesja", "nr": "3432" }, { "navn": "Skjåk", "nr": "3433" }, { "navn": "Lom", "nr": "3434" }, { "navn": "Vågå", "nr": "3435" }, { "navn": "Nord-Fron", "nr": "3436" }, { "navn": "Sel", "nr": "3437" }, { "navn": "Sør-Fron", "nr": "3438" }, { "navn": "Ringebu", "nr": "3439" }, { "navn": "Øyer", "nr": "3440" }, { "navn": "Gausdal", "nr": "3441" }, { "navn": "Østre Toten", "nr": "3442" }, { "navn": "Vestre Toten", "nr": "3443" }, { "navn": "Gran", "nr": "3446" }, { "navn": "Søndre Land", "nr": "3447" }, { "navn": "Nordre Land", "nr": "3448" }, { "navn": "Sør-Aurdal", "nr": "3449" }, { "navn": "Etnedal", "nr": "3450" }, { "navn": "Nord-Aurdal", "nr": "3451" }, { "navn": "Vestre Slidre", "nr": "3452" }, { "navn": "Øystre Slidre", "nr": "3453" }, { "navn": "Vang", "nr": "3454" }, { "navn": "Horten", "nr": "3801" }, { "navn": "Holmestrand", "nr": "3802" }, { "navn": "Tønsberg", "nr": "3803" }, { "navn": "Sandefjord", "nr": "3804" }, { "navn": "Larvik", "nr": "3805" }, { "navn": "Færder", "nr": "3811" }, { "navn": "Porsgrunn", "nr": "3806" }, { "navn": "Skien", "nr": "3807" }, { "navn": "Notodden", "nr": "3808" }, { "navn": "Siljan", "nr": "3812" }, { "navn": "Bamble", "nr": "3813" }, { "navn": "Kragerø", "nr": "3814" }, { "navn": "Drangedal", "nr": "3815" }, { "navn": "Nome", "nr": "3816" }, { "navn": "Midt-Telemark", "nr": "3817" }, { "navn": "Seljord", "nr": "3820" }, { "navn": "Hjartdal", "nr": "3819" }, { "navn": "Tinn", "nr": "3818" }, { "navn": "Kviteseid", "nr": "3821" }, { "navn": "Nissedal", "nr": "3822" }, { "navn": "Fyresdal", "nr": "3823" }, { "navn": "Tokke", "nr": "3824" }, { "navn": "Vinje", "nr": "3825" }, { "navn": "Risør", "nr": "4201" }, { "navn": "Grimstad", "nr": "4202" }, { "navn": "Arendal", "nr": "4203" }, { "navn": "Kristiansand", "nr": "4204" }, { "navn": "Lindesnes", "nr": "4205" }, { "navn": "Farsund", "nr": "4206" }, { "navn": "Flekkefjord", "nr": "4207" }, { "navn": "Gjerstad", "nr": "4211" }, { "navn": "Vegårshei", "nr": "4212" }, { "navn": "Tvedestrand", "nr": "4213" }, { "navn": "Froland", "nr": "4214" }, { "navn": "Lillesand", "nr": "4215" }, { "navn": "Birkenes", "nr": "4216" }, { "navn": "Åmli", "nr": "4217" }, { "navn": "Iveland", "nr": "4218" }, { "navn": "Evje og Hornnes", "nr": "4219" }, { "navn": "Bygland", "nr": "4220" }, { "navn": "Valle", "nr": "4221" }, { "navn": "Bykle", "nr": "4222" }, { "navn": "Vennesla", "nr": "4223" }, { "navn": "Åseral", "nr": "4224" }, { "navn": "Lyngdal", "nr": "4225" }, { "navn": "Hægebostad", "nr": "4226" }, { "navn": "Kvinesdal", "nr": "4227" }, { "navn": "Sirdal", "nr": "4228" }, { "navn": "Bergen", "nr": "4601" }, { "navn": "Kinn", "nr": "4602" }, { "navn": "Etne", "nr": "4611" }, { "navn": "Sveio", "nr": "4612" }, { "navn": "Bømlo", "nr": "4613" }, { "navn": "Stord", "nr": "4614" }, { "navn": "Fitjar", "nr": "4615" }, { "navn": "Tysnes", "nr": "4616" }, { "navn": "Kvinnherad", "nr": "4617" }, { "navn": "Ullensvang", "nr": "4618" }, { "navn": "Eidfjord", "nr": "4619" }, { "navn": "Ulvik", "nr": "4620" }, { "navn": "Voss", "nr": "4621" }, { "navn": "Kvam", "nr": "4622" }, { "navn": "Samnanger", "nr": "4623" }, { "navn": "Bjørnafjorden", "nr": "4624" }, { "navn": "Austevoll", "nr": "4625" }, { "navn": "Øygarden", "nr": "4626" }, { "navn": "Askøy", "nr": "4627" }, { "navn": "Vaksdal", "nr": "4628" }, { "navn": "Modalen", "nr": "4629" }, { "navn": "Osterøy", "nr": "4630" }, { "navn": "Alver", "nr": "4631" }, { "navn": "Austrheim", "nr": "4632" }, { "navn": "Fedje", "nr": "4633" }, { "navn": "Masfjorden", "nr": "4634" }, { "navn": "Gulen", "nr": "4635" }, { "navn": "Solund", "nr": "4636" }, { "navn": "Hyllestad", "nr": "4637" }, { "navn": "Høyanger", "nr": "4638" }, { "navn": "Vik", "nr": "4639" }, { "navn": "Sogndal", "nr": "4640" }, { "navn": "Aurland", "nr": "4641" }, { "navn": "Lærdal", "nr": "4642" }, { "navn": "Årdal", "nr": "4643" }, { "navn": "Luster", "nr": "4644" }, { "navn": "Askvoll", "nr": "4645" }, { "navn": "Fjaler", "nr": "4646" }, { "navn": "Sunnfjord", "nr": "4647" }, { "navn": "Bremanger", "nr": "4648" }, { "navn": "Stad", "nr": "4649" }, { "navn": "Gloppen", "nr": "4650" }, { "navn": "Stryn", "nr": "4651" }, { "navn": "Trondheim - Tråante", "nr": "5001" }, { "navn": "Steinkjer", "nr": "5006" }, { "navn": "Namsos - Nåavmesjenjaelmie", "nr": "5007" }, { "navn": "Frøya", "nr": "5014" }, { "navn": "Osen", "nr": "5020" }, { "navn": "Oppdal", "nr": "5021" }, { "navn": "Rennebu", "nr": "5022" }, { "navn": "Rosse - Røros", "nr": "5025" }, { "navn": "Holtålen", "nr": "5026" }, { "navn": "Midtre Gauldal", "nr": "5027" }, { "navn": "Melhus", "nr": "5028" }, { "navn": "Skaun", "nr": "5029" }, { "navn": "Malvik", "nr": "5031" }, { "navn": "Selbu", "nr": "5032" }, { "navn": "Tydal", "nr": "5033" }, { "navn": "Meråker", "nr": "5034" }, { "navn": "Stjørdal", "nr": "5035" }, { "navn": "Frosta", "nr": "5036" }, { "navn": "Levanger", "nr": "5037" }, { "navn": "Verdal", "nr": "5038" }, { "navn": "Snåase - Snåsa", "nr": "5041" }, { "navn": "Lierne", "nr": "5042" }, { "navn": "Raarvihke - Røyrvik", "nr": "5043" }, { "navn": "Namsskogan", "nr": "5044" }, { "navn": "Grong", "nr": "5045" }, { "navn": "Høylandet", "nr": "5046" }, { "navn": "Overhalla", "nr": "5047" }, { "navn": "Flatanger", "nr": "5049" }, { "navn": "Leka", "nr": "5052" }, { "navn": "Inderøy", "nr": "5053" }, { "navn": "Indre Fosen", "nr": "5054" }, { "navn": "Heim", "nr": "5055" }, { "navn": "Hitra", "nr": "5056" }, { "navn": "Ørland", "nr": "5057" }, { "navn": "Åfjord", "nr": "5058" }, { "navn": "Orkland", "nr": "5059" }, { "navn": "Nærøysund", "nr": "5060" }, { "navn": "Rindal", "nr": "5061" }, { "navn": "Tromsø", "nr": "5401" }, { "navn": "Harstad - Hárstták", "nr": "5402" }, { "navn": "Kvæfjord", "nr": "5411" }, { "navn": "Tjeldsund - Dielddanuorri", "nr": "5412" }, { "navn": "Ibestad", "nr": "5413" }, { "navn": "Gratangen", "nr": "5414" }, { "navn": "Loabák - Lavangen", "nr": "5415" }, { "navn": "Bardu", "nr": "5416" }, { "navn": "Salangen", "nr": "5417" }, { "navn": "Målselv", "nr": "5418" }, { "navn": "Sørreisa", "nr": "5419" }, { "navn": "Dyrøy", "nr": "5420" }, { "navn": "Senja", "nr": "5421" }, { "navn": "Balsfjord", "nr": "5422" }, { "navn": "Karlsøy", "nr": "5423" }, { "navn": "Lyngen", "nr": "5424" }, { "navn": "Storfjord - Omasvuotna - Omasvuono", "nr": "5425" }, { "navn": "Gáivuotna - Kåfjord - Kaivuono", "nr": "5426" }, { "navn": "Skjervøy", "nr": "5427" }, { "navn": "Nordreisa - Ráisa - Raisi", "nr": "5428" }, { "navn": "Kvænangen", "nr": "5429" }, { "navn": "Alta", "nr": "5403" }, { "navn": "Hammerfest - Hámmerfeasta", "nr": "5406" }, { "navn": "Sør-Varanger", "nr": "5444" }, { "navn": "Vadsø", "nr": "5405" }, { "navn": "Kárášjohka - Karasjok", "nr": "5437" }, { "navn": "Guovdageaidnu - Kautokeino", "nr": "5430" }, { "navn": "Loppa", "nr": "5432" }, { "navn": "Hasvik", "nr": "5433" }, { "navn": "Måsøy", "nr": "5434" }, { "navn": "Nordkapp", "nr": "5435" }, { "navn": "Porsanger - Porsáŋgu - Porsanki", "nr": "5436" }, { "navn": "Lebesby", "nr": "5438" }, { "navn": "Gamvik", "nr": "5439" }, { "navn": "Deatnu - Tana", "nr": "5441" }, { "navn": "Berlevåg", "nr": "5440" }, { "navn": "Båtsfjord", "nr": "5443" }, { "navn": "Vardø", "nr": "5404" }, { "navn": "Unjárga - Nesseby", "nr": "5442" }]
/**
 * From Static printf '"%s",' * | sed 's/,$/\n/'
 */
const fromStatic = ["0101", "0104", "0105", "0106", "0111", "0118", "0119", "0121", "0122", "0123", "0124", "0125", "0127", "0128", "0136", "0137", "0138", "0211", "0213", "0214", "0215", "0216", "0217", "0219", "0220", "0221", "0226", "0227", "0228", "0229", "0230", "0231", "0233", "0234", "0235", "0236", "0237", "0238", "0239", "0301", "0402", "0403", "0412", "0415", "0417", "0418", "0419", "0420", "0423", "0425", "0426", "0427", "0428", "0429", "0430", "0432", "0434", "0436", "0437", "0438", "0439", "0441", "0501", "0502", "0511", "0512", "0513", "0514", "0515", "0516", "0517", "0519", "0520", "0521", "0522", "0528", "0529", "0532", "0533", "0534", "0536", "0538", "0540", "0541", "0542", "0543", "0544", "0545", "0602", "0604", "0605", "0612", "0615", "0616", "0617", "0618", "0619", "0620", "0621", "0622", "0623", "0624", "0625", "0626", "0627", "0628", "0631", "0632", "0633", "0701", "0704", "0710", "0711", "0712", "0713", "0715", "0716", "0729", "0805", "0806", "0807", "0811", "0814", "0815", "0817", "0819", "0821", "0822", "0826", "0827", "0828", "0829", "0830", "0831", "0833", "0834", "0901", "0904", "0906", "0911", "0912", "0914", "0919", "0926", "0928", "0929", "0935", "0937", "0938", "0940", "0941", "1001", "1002", "1003", "1004", "1014", "1017", "1018", "1021", "1026", "1027", "1029", "1032", "1034", "1037", "1046", "1100", "1101", "1102", "1103", "1106", "1108", "1111", "1112", "1114", "1119", "1120", "1121", "1122", "1124", "1127", "1129", "1130", "1133", "1134", "1135", "1141", "1142", "1144", "1145", "1146", "1149", "1151", "1160", "1201", "1211", "1216", "1219", "1221", "1222", "1223", "1224", "1227", "1228", "1231", "1232", "1233", "1234", "1235", "1238", "1241", "1242", "1243", "1244", "1245", "1246", "1247", "1251", "1252", "1253", "1256", "1259", "1260", "1263", "1264", "1265", "1266", "1401", "1411", "1412", "1413", "1416", "1417", "1418", "1419", "1420", "1421", "1422", "1424", "1426", "1428", "1429", "1430", "1431", "1432", "1433", "1438", "1439", "1441", "1443", "1444", "1445", "1449", "1500", "1502", "1504", "1505", "1506", "1507", "1508", "1511", "1514", "1515", "1516", "1517", "1519", "1520", "1523", "1524", "1525", "1526", "1528", "1529", "1531", "1532", "1534", "1535", "1539", "1543", "1545", "1546", "1547", "1548", "1551", "1554", "1557", "1560", "1563", "1566", "1571", "1573", "1576", "1577", "1578", "1579", "1580", "1800", "1804", "1805", "1806", "1811", "1812", "1813", "1815", "1816", "1818", "1820", "1822", "1824", "1825", "1826", "1827", "1828", "1832", "1833", "1834", "1835", "1836", "1837", "1838", "1839", "1840", "1841", "1845", "1848", "1849", "1850", "1851", "1852", "1853", "1854", "1856", "1857", "1859", "1860", "1865", "1866", "1867", "1868", "1870", "1871", "1874", "1875", "1902", "1903", "1911", "1913", "1917", "1919", "1920", "1922", "1923", "1924", "1925", "1926", "1927", "1928", "1929", "1931", "1933", "1936", "1938", "1939", "1940", "1941", "1942", "1943", "2002", "2003", "2004", "2011", "2012", "2014", "2015", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2027", "2028", "2030", "2100", "3000", "3001", "3002", "3003", "3004", "3005", "3006", "3007", "3012", "3013", "3014", "3015", "3016", "3017", "3018", "3019", "3020", "3021", "3022", "3023", "3024", "3025", "3026", "3027", "3028", "3029", "3030", "3031", "3032", "3033", "3034", "3035", "3036", "3037", "3038", "3039", "3040", "3041", "3042", "3043", "3044", "3045", "3046", "3047", "3048", "3049", "3050", "3051", "3052", "3053", "3054", "3099", "3100", "3101", "3103", "3105", "3107", "3112", "3114", "3116", "3118", "3120", "3122", "3124", "3200", "3201", "3203", "3205", "3207", "3209", "3212", "3214", "3216", "3218", "3220", "3222", "3224", "3226", "3228", "3230", "3232", "3234", "3236", "3238", "3240", "3242", "3300", "3301", "3303", "3305", "3310", "3312", "3314", "3316", "3318", "3320", "3322", "3324", "3326", "3328", "3330", "3332", "3334", "3336", "3338", "3400", "3401", "3403", "3405", "3407", "3411", "3412", "3413", "3414", "3415", "3416", "3417", "3418", "3419", "3420", "3421", "3422", "3423", "3424", "3425", "3426", "3427", "3428", "3429", "3430", "3431", "3432", "3433", "3434", "3435", "3436", "3437", "3438", "3439", "3440", "3441", "3442", "3443", "3446", "3447", "3448", "3449", "3450", "3451", "3452", "3453", "3454", "3800", "3801", "3802", "3803", "3804", "3805", "3806", "3807", "3808", "3811", "3812", "3813", "3814", "3815", "3816", "3817", "3818", "3819", "3820", "3821", "3822", "3823", "3824", "3825", "3900", "3901", "3903", "3905", "3907", "3909", "3911", "4000", "4001", "4003", "4005", "4010", "4012", "4014", "4016", "4018", "4020", "4022", "4024", "4026", "4028", "4030", "4032", "4034", "4036", "4200", "4201", "4202", "4203", "4204", "4205", "4206", "4207", "4211", "4212", "4213", "4214", "4215", "4216", "4217", "4218", "4219", "4220", "4221", "4222", "4223", "4224", "4225", "4226", "4227", "4228", "4600", "4601", "4602", "4611", "4612", "4613", "4614", "4615", "4616", "4617", "4618", "4619", "4620", "4621", "4622", "4623", "4624", "4625", "4626", "4627", "4628", "4629", "4630", "4631", "4632", "4633", "4634", "4635", "4636", "4637", "4638", "4639", "4640", "4641", "4642", "4643", "4644", "4645", "4646", "4647", "4648", "4649", "4650", "4651", "4699", "5000", "5001", "5004", "5005", "5006", "5007", "5011", "5012", "5013", "5014", "5015", "5016", "5017", "5018", "5019", "5020", "5021", "5022", "5023", "5024", "5025", "5026", "5027", "5028", "5029", "5030", "5031", "5032", "5033", "5034", "5035", "5036", "5037", "5038", "5039", "5040", "5041", "5042", "5043", "5044", "5045", "5046", "5047", "5048", "5049", "5050", "5051", "5052", "5053", "5054", "5055", "5056", "5057", "5058", "5059", "5060", "5061", "5400", "5401", "5402", "5403", "5404", "5405", "5406", "5411", "5412", "5413", "5414", "5415", "5416", "5417", "5418", "5419", "5420", "5421", "5422", "5423", "5424", "5425", "5426", "5427", "5428", "5429", "5430", "5432", "5433", "5434", "5435", "5436", "5437", "5438", "5439", "5440", "5441", "5442", "5443", "5444", "5500", "5501", "5503", "5510", "5512", "5514", "5516", "5518", "5520", "5522", "5524", "5526", "5528", "5530", "5532", "5534", "5536", "5538", "5540", "5542", "5544", "5546", "5600", "5601", "5603", "5605", "5607", "5610", "5612", "5614", "5616", "5618", "5620", "5622", "5624", "5626", "5628", "5630", "5632", "5634", "5636", "9900"];


const washedList = kommuner2023.filter(value => fromStatic.includes(value.nr));


export type Kommune = {
    image: string,
    navn: string
}

export const randomKommuner = (n: number): Kommune[] => pickRandomItems(washedList, n).map(k => ({ navn: k.navn, image: `https://static.fiks.ks.no/img/kommunevaapen/${k.nr}.png` }))


