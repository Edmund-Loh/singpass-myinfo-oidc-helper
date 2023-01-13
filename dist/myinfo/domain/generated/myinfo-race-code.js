"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyInfoRaceCode = void 0;
// tslint:disable
// =============================================================================
// This file was generated with `npm run generate-myinfo-typings` on 2022-09-16
// Any modifications to this file may be overwritten when the script runs again
// Check README.md for more information
// =============================================================================
const EnumUtils_1 = require("../../../util/EnumUtils");
var MyInfoRaceCode;
(function (MyInfoRaceCode) {
    MyInfoRaceCode["ANGLO_BURMESE"] = "AB";
    MyInfoRaceCode["ANGLO_CHINESE"] = "AC";
    MyInfoRaceCode["AMERINDIAN"] = "AD";
    MyInfoRaceCode["AFRICAN"] = "AF";
    MyInfoRaceCode["AFGHAN"] = "AG";
    MyInfoRaceCode["ANGLO_THAI"] = "AH";
    MyInfoRaceCode["ANGLO_INDIAN"] = "AI";
    MyInfoRaceCode["ACHEHNESE"] = "AJ";
    MyInfoRaceCode["ALBANIAN"] = "AL";
    MyInfoRaceCode["ARMENIAN"] = "AM";
    MyInfoRaceCode["ANNAMITE"] = "AN";
    MyInfoRaceCode["AMBONESE"] = "AO";
    MyInfoRaceCode["ANGLO_FILIPINO"] = "AP";
    MyInfoRaceCode["ARAB"] = "AR";
    MyInfoRaceCode["ASSAMI"] = "AS";
    MyInfoRaceCode["AUSTRIAN"] = "AT";
    MyInfoRaceCode["AUSTRALIAN"] = "AU";
    MyInfoRaceCode["ANGLO_SAXON"] = "AX";
    MyInfoRaceCode["ARYAN"] = "AY";
    MyInfoRaceCode["AZERI"] = "AZ";
    MyInfoRaceCode["BATAK"] = "BA";
    MyInfoRaceCode["BULGARIAN"] = "BB";
    MyInfoRaceCode["BUTONESE"] = "BC";
    MyInfoRaceCode["BANGLADESHI"] = "BD";
    MyInfoRaceCode["BELGIAN"] = "BE";
    MyInfoRaceCode["BAJAU"] = "BF";
    MyInfoRaceCode["BUGIS"] = "BG";
    MyInfoRaceCode["BURGHER"] = "BH";
    MyInfoRaceCode["BENGALI"] = "BI";
    MyInfoRaceCode["BANJARESE"] = "BJ";
    MyInfoRaceCode["BAMAR"] = "BK";
    MyInfoRaceCode["BANGALA"] = "BL";
    MyInfoRaceCode["BALINESE"] = "BM";
    MyInfoRaceCode["BHUTANESE"] = "BN";
    MyInfoRaceCode["BANTEN"] = "BO";
    MyInfoRaceCode["BASQUE"] = "BQ";
    MyInfoRaceCode["BRAHMIN"] = "BR";
    MyInfoRaceCode["BISAYA"] = "BS";
    MyInfoRaceCode["BRITISH"] = "BT";
    MyInfoRaceCode["BURMESE"] = "BU";
    MyInfoRaceCode["BOSNIAK"] = "BV";
    MyInfoRaceCode["BETAWI"] = "BW";
    MyInfoRaceCode["BOYANESE"] = "BY";
    MyInfoRaceCode["BRAZILIAN"] = "BZ";
    MyInfoRaceCode["CAUCASIAN"] = "CA";
    MyInfoRaceCode["CANADIAN"] = "CB";
    MyInfoRaceCode["CAPE_COLOURED"] = "CC";
    MyInfoRaceCode["CAMBODIAN"] = "CD";
    MyInfoRaceCode["CEYLONESE"] = "CE";
    MyInfoRaceCode["CORNISH"] = "CF";
    MyInfoRaceCode["CREOLE"] = "CG";
    MyInfoRaceCode["SWISS"] = "CH";
    MyInfoRaceCode["CROAT"] = "CI";
    MyInfoRaceCode["CHAMORRO"] = "CJ";
    MyInfoRaceCode["CEYLON_MOOR"] = "CM";
    MyInfoRaceCode["CHINESE"] = "CN";
    MyInfoRaceCode["COCOS"] = "CO";
    MyInfoRaceCode["CARIBBEAN"] = "CR";
    MyInfoRaceCode["CZECHOSLOVAK"] = "CS";
    MyInfoRaceCode["CZECH"] = "CZ";
    MyInfoRaceCode["DANE"] = "DA";
    MyInfoRaceCode["DUTCH_BURGHER"] = "DB";
    MyInfoRaceCode["BIDAYUH"] = "DH";
    MyInfoRaceCode["DUSUN"] = "DS";
    MyInfoRaceCode["DUTCH"] = "DU";
    MyInfoRaceCode["DAYAK"] = "DY";
    MyInfoRaceCode["ENGLISH"] = "EL";
    MyInfoRaceCode["EUROPEAN"] = "ER";
    MyInfoRaceCode["SPANISH"] = "ES";
    MyInfoRaceCode["ETHIOPIAN"] = "ET";
    MyInfoRaceCode["EURASIAN"] = "EU";
    MyInfoRaceCode["EGYPTIAN"] = "EY";
    MyInfoRaceCode["FINN"] = "FI";
    MyInfoRaceCode["FIJIAN"] = "FJ";
    MyInfoRaceCode["FLEMISH"] = "FM";
    MyInfoRaceCode["FRENCH"] = "FR";
    MyInfoRaceCode["GOAN"] = "GA";
    MyInfoRaceCode["GUJARATI"] = "GE";
    MyInfoRaceCode["GHANAIAN"] = "GH";
    MyInfoRaceCode["GURKHA"] = "GK";
    MyInfoRaceCode["GERMAN"] = "GM";
    MyInfoRaceCode["GOANESE"] = "GO";
    MyInfoRaceCode["GREEK"] = "GR";
    MyInfoRaceCode["HAITIAN"] = "HA";
    MyInfoRaceCode["HISPANIC"] = "HI";
    MyInfoRaceCode["HOLLANDER"] = "HO";
    MyInfoRaceCode["HINDUSTANI"] = "HT";
    MyInfoRaceCode["HUNGARIAN"] = "HU";
    MyInfoRaceCode["HAWAIIAN"] = "HW";
    MyInfoRaceCode["IRANIAN"] = "IA";
    MyInfoRaceCode["IBAN"] = "IB";
    MyInfoRaceCode["INDONESIAN"] = "ID";
    MyInfoRaceCode["ISOKO"] = "IK";
    MyInfoRaceCode["ISRAELI"] = "IL";
    MyInfoRaceCode["INDIAN"] = "IN";
    MyInfoRaceCode["IRAQI"] = "IQ";
    MyInfoRaceCode["IRISH"] = "IR";
    MyInfoRaceCode["ICELANDER"] = "IS";
    MyInfoRaceCode["ITALIAN"] = "IT";
    MyInfoRaceCode["INUIT"] = "IU";
    MyInfoRaceCode["JAVANESE"] = "JA";
    MyInfoRaceCode["JAKUN"] = "JK";
    MyInfoRaceCode["JAMAICAN"] = "JM";
    MyInfoRaceCode["JORDANIAN"] = "JO";
    MyInfoRaceCode["JAPANESE"] = "JP";
    MyInfoRaceCode["JEW"] = "JW";
    MyInfoRaceCode["KACHIN"] = "KA";
    MyInfoRaceCode["KHASI"] = "KB";
    MyInfoRaceCode["KAYAH"] = "KC";
    MyInfoRaceCode["KAYIN"] = "KD";
    MyInfoRaceCode["KENYAN"] = "KE";
    MyInfoRaceCode["KINH"] = "KF";
    MyInfoRaceCode["KYRGYZ"] = "KG";
    MyInfoRaceCode["KHMER"] = "KH";
    MyInfoRaceCode["KENYAH"] = "KI";
    MyInfoRaceCode["KAZAKH"] = "KK";
    MyInfoRaceCode["KELABIT"] = "KL";
    MyInfoRaceCode["KAMPUCHEAN"] = "KM";
    MyInfoRaceCode["KAREN"] = "KN";
    MyInfoRaceCode["KOREAN"] = "KR";
    MyInfoRaceCode["KAYAN"] = "KY";
    MyInfoRaceCode["KADAZAN"] = "KZ";
    MyInfoRaceCode["LAO"] = "LA";
    MyInfoRaceCode["LEBANESE"] = "LB";
    MyInfoRaceCode["LITHUANIAN"] = "LI";
    MyInfoRaceCode["SRI_LANKAN"] = "LK";
    MyInfoRaceCode["LATIN"] = "LT";
    MyInfoRaceCode["LATVIAN"] = "LV";
    MyInfoRaceCode["LUXEMBOURGER"] = "LX";
    MyInfoRaceCode["LIBYAN"] = "LY";
    MyInfoRaceCode["MADURESE"] = "MA";
    MyInfoRaceCode["MALABARI"] = "MB";
    MyInfoRaceCode["MAGYARS"] = "MC";
    MyInfoRaceCode["MOLDAVIAN"] = "MD";
    MyInfoRaceCode["MINANGKABAU"] = "ME";
    MyInfoRaceCode["MANX"] = "MF";
    MyInfoRaceCode["MALAGASY"] = "MG";
    MyInfoRaceCode["MAHRATTA"] = "MH";
    MyInfoRaceCode["MAORI"] = "MI";
    MyInfoRaceCode["MURUT"] = "MJ";
    MyInfoRaceCode["MAKASARESE"] = "MK";
    MyInfoRaceCode["MALDIVIAN"] = "ML";
    MyInfoRaceCode["MALAYALEE"] = "MM";
    MyInfoRaceCode["MELANESIAN"] = "MN";
    MyInfoRaceCode["MONGOLIAN"] = "MO";
    MyInfoRaceCode["MANIPURI"] = "MP";
    MyInfoRaceCode["MESTIZO"] = "MQ";
    MyInfoRaceCode["MARATHI"] = "MR";
    MyInfoRaceCode["METIS"] = "MS";
    MyInfoRaceCode["MALTESE"] = "MT";
    MyInfoRaceCode["MAURITIAN"] = "MU";
    MyInfoRaceCode["MON"] = "MV";
    MyInfoRaceCode["MOROCCAN"] = "MW";
    MyInfoRaceCode["MEXICAN"] = "MX";
    MyInfoRaceCode["MALAY"] = "MY";
    MyInfoRaceCode["MELANAU"] = "MZ";
    MyInfoRaceCode["NAGA"] = "NA";
    MyInfoRaceCode["NEGRO"] = "NG";
    MyInfoRaceCode["NIGERIAN"] = "NI";
    MyInfoRaceCode["NETHERLANDER"] = "NL";
    MyInfoRaceCode["NORWEGIAN"] = "NO";
    MyInfoRaceCode["NEPALESE"] = "NP";
    MyInfoRaceCode["NAURUAN"] = "NR";
    MyInfoRaceCode["NEWAR"] = "NW";
    MyInfoRaceCode["NEW_ZEALANDER"] = "NZ";
    MyInfoRaceCode["PENAN"] = "PA";
    MyInfoRaceCode["PALESTINE"] = "PB";
    MyInfoRaceCode["POLISH"] = "PC";
    MyInfoRaceCode["PERSIAN"] = "PE";
    MyInfoRaceCode["FILIPINO"] = "PH";
    MyInfoRaceCode["PUNJABI"] = "PJ";
    MyInfoRaceCode["PAKISTANI"] = "PK";
    MyInfoRaceCode["POLE"] = "PL";
    MyInfoRaceCode["PATHAN"] = "PN";
    MyInfoRaceCode["PORTUGUESE"] = "PO";
    MyInfoRaceCode["PERUVIAN"] = "PR";
    MyInfoRaceCode["PARSEE"] = "PS";
    MyInfoRaceCode["PUNAN"] = "PU";
    MyInfoRaceCode["POLYNESIAN"] = "PY";
    MyInfoRaceCode["RAJPUT"] = "RJ";
    MyInfoRaceCode["RAKHINE"] = "RK";
    MyInfoRaceCode["ROMANIAN"] = "RO";
    MyInfoRaceCode["RUSSIAN"] = "RU";
    MyInfoRaceCode["SINO_KADAZAN"] = "SA";
    MyInfoRaceCode["SAMMARINESE"] = "SB";
    MyInfoRaceCode["SCOT"] = "SC";
    MyInfoRaceCode["SINDHI"] = "SD";
    MyInfoRaceCode["SWEDE"] = "SE";
    MyInfoRaceCode["SERBIA_MONTENGERIN"] = "SF";
    MyInfoRaceCode["SAMOAN"] = "SG";
    MyInfoRaceCode["SHAN"] = "SH";
    MyInfoRaceCode["SINHALESE"] = "SI";
    MyInfoRaceCode["SINO_JAPANESE"] = "SJ";
    MyInfoRaceCode["SIKH"] = "SK";
    MyInfoRaceCode["SLOVAK"] = "SL";
    MyInfoRaceCode["SUMATRAN"] = "SM";
    MyInfoRaceCode["SINO_INDIAN"] = "SN";
    MyInfoRaceCode["SOMALI"] = "SO";
    MyInfoRaceCode["SLAVIC"] = "SQ";
    MyInfoRaceCode["SERANI"] = "SR";
    MyInfoRaceCode["SUNDANESE"] = "SS";
    MyInfoRaceCode["SUDANESE"] = "SU";
    MyInfoRaceCode["SWEDISH"] = "SW";
    MyInfoRaceCode["SEYCHELLOIS"] = "SY";
    MyInfoRaceCode["TELUGU"] = "TE";
    MyInfoRaceCode["THAI"] = "TH";
    MyInfoRaceCode["TIBETAN"] = "TI";
    MyInfoRaceCode["TAJIK"] = "TJ";
    MyInfoRaceCode["TAMIL"] = "TM";
    MyInfoRaceCode["TURKMEN"] = "TN";
    MyInfoRaceCode["TONGAN"] = "TO";
    MyInfoRaceCode["TIMOR"] = "TP";
    MyInfoRaceCode["TURK"] = "TR";
    MyInfoRaceCode["UNKNOWN"] = "UN";
    MyInfoRaceCode["UKRAINIAN"] = "UR";
    MyInfoRaceCode["AMERICAN"] = "US";
    MyInfoRaceCode["UYGHUR"] = "UY";
    MyInfoRaceCode["UZBEK"] = "UZ";
    MyInfoRaceCode["VENEZUELAN"] = "VE";
    MyInfoRaceCode["VIETNAMESE"] = "VN";
    MyInfoRaceCode["WELSH"] = "WE";
    MyInfoRaceCode["OTHER_INDONESIAN"] = "XD";
    MyInfoRaceCode["OTHER_EURASIAN"] = "XE";
    MyInfoRaceCode["OTHER_INDIAN"] = "XI";
    MyInfoRaceCode["OTHERS"] = "XX";
    MyInfoRaceCode["YUGOSLAV"] = "YU";
    MyInfoRaceCode["ZIMBABWEAN"] = "ZW";
})(MyInfoRaceCode = exports.MyInfoRaceCode || (exports.MyInfoRaceCode = {}));
var MyInfoRaceCodeMapping;
(function (MyInfoRaceCodeMapping) {
    MyInfoRaceCodeMapping["ANGLO_BURMESE"] = "ANGLO BURMESE";
    MyInfoRaceCodeMapping["ANGLO_CHINESE"] = "ANGLO CHINESE";
    MyInfoRaceCodeMapping["AMERINDIAN"] = "AMERINDIAN";
    MyInfoRaceCodeMapping["AFRICAN"] = "AFRICAN";
    MyInfoRaceCodeMapping["AFGHAN"] = "AFGHAN";
    MyInfoRaceCodeMapping["ANGLO_THAI"] = "ANGLO THAI";
    MyInfoRaceCodeMapping["ANGLO_INDIAN"] = "ANGLO INDIAN";
    MyInfoRaceCodeMapping["ACHEHNESE"] = "ACHEHNESE";
    MyInfoRaceCodeMapping["ALBANIAN"] = "ALBANIAN";
    MyInfoRaceCodeMapping["ARMENIAN"] = "ARMENIAN";
    MyInfoRaceCodeMapping["ANNAMITE"] = "ANNAMITE";
    MyInfoRaceCodeMapping["AMBONESE"] = "AMBONESE";
    MyInfoRaceCodeMapping["ANGLO_FILIPINO"] = "ANGLO FILIPINO";
    MyInfoRaceCodeMapping["ARAB"] = "ARAB";
    MyInfoRaceCodeMapping["ASSAMI"] = "ASSAMI";
    MyInfoRaceCodeMapping["AUSTRIAN"] = "AUSTRIAN";
    MyInfoRaceCodeMapping["AUSTRALIAN"] = "AUSTRALIAN";
    MyInfoRaceCodeMapping["ANGLO_SAXON"] = "ANGLO SAXON";
    MyInfoRaceCodeMapping["ARYAN"] = "ARYAN";
    MyInfoRaceCodeMapping["AZERI"] = "AZERI";
    MyInfoRaceCodeMapping["BATAK"] = "BATAK";
    MyInfoRaceCodeMapping["BULGARIAN"] = "BULGARIAN";
    MyInfoRaceCodeMapping["BUTONESE"] = "BUTONESE";
    MyInfoRaceCodeMapping["BANGLADESHI"] = "BANGLADESHI";
    MyInfoRaceCodeMapping["BELGIAN"] = "BELGIAN";
    MyInfoRaceCodeMapping["BAJAU"] = "BAJAU";
    MyInfoRaceCodeMapping["BUGIS"] = "BUGIS";
    MyInfoRaceCodeMapping["BURGHER"] = "BURGHER";
    MyInfoRaceCodeMapping["BENGALI"] = "BENGALI";
    MyInfoRaceCodeMapping["BANJARESE"] = "BANJARESE";
    MyInfoRaceCodeMapping["BAMAR"] = "BAMAR";
    MyInfoRaceCodeMapping["BANGALA"] = "BANGALA";
    MyInfoRaceCodeMapping["BALINESE"] = "BALINESE";
    MyInfoRaceCodeMapping["BHUTANESE"] = "BHUTANESE";
    MyInfoRaceCodeMapping["BANTEN"] = "BANTEN";
    MyInfoRaceCodeMapping["BASQUE"] = "BASQUE";
    MyInfoRaceCodeMapping["BRAHMIN"] = "BRAHMIN";
    MyInfoRaceCodeMapping["BISAYA"] = "BISAYA";
    MyInfoRaceCodeMapping["BRITISH"] = "BRITISH";
    MyInfoRaceCodeMapping["BURMESE"] = "BURMESE";
    MyInfoRaceCodeMapping["BOSNIAK"] = "BOSNIAK";
    MyInfoRaceCodeMapping["BETAWI"] = "BETAWI";
    MyInfoRaceCodeMapping["BOYANESE"] = "BOYANESE";
    MyInfoRaceCodeMapping["BRAZILIAN"] = "BRAZILIAN";
    MyInfoRaceCodeMapping["CAUCASIAN"] = "CAUCASIAN";
    MyInfoRaceCodeMapping["CANADIAN"] = "CANADIAN";
    MyInfoRaceCodeMapping["CAPE_COLOURED"] = "CAPE COLOURED";
    MyInfoRaceCodeMapping["CAMBODIAN"] = "CAMBODIAN";
    MyInfoRaceCodeMapping["CEYLONESE"] = "CEYLONESE";
    MyInfoRaceCodeMapping["CORNISH"] = "CORNISH";
    MyInfoRaceCodeMapping["CREOLE"] = "CREOLE";
    MyInfoRaceCodeMapping["SWISS"] = "SWISS";
    MyInfoRaceCodeMapping["CROAT"] = "CROAT";
    MyInfoRaceCodeMapping["CHAMORRO"] = "CHAMORRO";
    MyInfoRaceCodeMapping["CEYLON_MOOR"] = "CEYLON MOOR";
    MyInfoRaceCodeMapping["CHINESE"] = "CHINESE";
    MyInfoRaceCodeMapping["COCOS"] = "COCOS";
    MyInfoRaceCodeMapping["CARIBBEAN"] = "CARIBBEAN";
    MyInfoRaceCodeMapping["CZECHOSLOVAK"] = "CZECHOSLOVAK";
    MyInfoRaceCodeMapping["CZECH"] = "CZECH";
    MyInfoRaceCodeMapping["DANE"] = "DANE";
    MyInfoRaceCodeMapping["DUTCH_BURGHER"] = "DUTCH BURGHER";
    MyInfoRaceCodeMapping["BIDAYUH"] = "BIDAYUH";
    MyInfoRaceCodeMapping["DUSUN"] = "DUSUN";
    MyInfoRaceCodeMapping["DUTCH"] = "DUTCH";
    MyInfoRaceCodeMapping["DAYAK"] = "DAYAK";
    MyInfoRaceCodeMapping["ENGLISH"] = "ENGLISH";
    MyInfoRaceCodeMapping["EUROPEAN"] = "EUROPEAN";
    MyInfoRaceCodeMapping["SPANISH"] = "SPANISH";
    MyInfoRaceCodeMapping["ETHIOPIAN"] = "ETHIOPIAN";
    MyInfoRaceCodeMapping["EURASIAN"] = "EURASIAN";
    MyInfoRaceCodeMapping["EGYPTIAN"] = "EGYPTIAN";
    MyInfoRaceCodeMapping["FINN"] = "FINN";
    MyInfoRaceCodeMapping["FIJIAN"] = "FIJIAN";
    MyInfoRaceCodeMapping["FLEMISH"] = "FLEMISH";
    MyInfoRaceCodeMapping["FRENCH"] = "FRENCH";
    MyInfoRaceCodeMapping["GOAN"] = "GOAN";
    MyInfoRaceCodeMapping["GUJARATI"] = "GUJARATI";
    MyInfoRaceCodeMapping["GHANAIAN"] = "GHANAIAN";
    MyInfoRaceCodeMapping["GURKHA"] = "GURKHA";
    MyInfoRaceCodeMapping["GERMAN"] = "GERMAN";
    MyInfoRaceCodeMapping["GOANESE"] = "GOANESE";
    MyInfoRaceCodeMapping["GREEK"] = "GREEK";
    MyInfoRaceCodeMapping["HAITIAN"] = "HAITIAN";
    MyInfoRaceCodeMapping["HISPANIC"] = "HISPANIC";
    MyInfoRaceCodeMapping["HOLLANDER"] = "HOLLANDER";
    MyInfoRaceCodeMapping["HINDUSTANI"] = "HINDUSTANI";
    MyInfoRaceCodeMapping["HUNGARIAN"] = "HUNGARIAN";
    MyInfoRaceCodeMapping["HAWAIIAN"] = "HAWAIIAN";
    MyInfoRaceCodeMapping["IRANIAN"] = "IRANIAN";
    MyInfoRaceCodeMapping["IBAN"] = "IBAN";
    MyInfoRaceCodeMapping["INDONESIAN"] = "INDONESIAN";
    MyInfoRaceCodeMapping["ISOKO"] = "ISOKO";
    MyInfoRaceCodeMapping["ISRAELI"] = "ISRAELI";
    MyInfoRaceCodeMapping["INDIAN"] = "INDIAN";
    MyInfoRaceCodeMapping["IRAQI"] = "IRAQI";
    MyInfoRaceCodeMapping["IRISH"] = "IRISH";
    MyInfoRaceCodeMapping["ICELANDER"] = "ICELANDER";
    MyInfoRaceCodeMapping["ITALIAN"] = "ITALIAN";
    MyInfoRaceCodeMapping["INUIT"] = "INUIT";
    MyInfoRaceCodeMapping["JAVANESE"] = "JAVANESE";
    MyInfoRaceCodeMapping["JAKUN"] = "JAKUN";
    MyInfoRaceCodeMapping["JAMAICAN"] = "JAMAICAN";
    MyInfoRaceCodeMapping["JORDANIAN"] = "JORDANIAN";
    MyInfoRaceCodeMapping["JAPANESE"] = "JAPANESE";
    MyInfoRaceCodeMapping["JEW"] = "JEW";
    MyInfoRaceCodeMapping["KACHIN"] = "KACHIN";
    MyInfoRaceCodeMapping["KHASI"] = "KHASI";
    MyInfoRaceCodeMapping["KAYAH"] = "KAYAH";
    MyInfoRaceCodeMapping["KAYIN"] = "KAYIN";
    MyInfoRaceCodeMapping["KENYAN"] = "KENYAN";
    MyInfoRaceCodeMapping["KINH"] = "KINH";
    MyInfoRaceCodeMapping["KYRGYZ"] = "KYRGYZ";
    MyInfoRaceCodeMapping["KHMER"] = "KHMER";
    MyInfoRaceCodeMapping["KENYAH"] = "KENYAH";
    MyInfoRaceCodeMapping["KAZAKH"] = "KAZAKH";
    MyInfoRaceCodeMapping["KELABIT"] = "KELABIT";
    MyInfoRaceCodeMapping["KAMPUCHEAN"] = "KAMPUCHEAN";
    MyInfoRaceCodeMapping["KAREN"] = "KAREN";
    MyInfoRaceCodeMapping["KOREAN"] = "KOREAN";
    MyInfoRaceCodeMapping["KAYAN"] = "KAYAN";
    MyInfoRaceCodeMapping["KADAZAN"] = "KADAZAN";
    MyInfoRaceCodeMapping["LAO"] = "LAO";
    MyInfoRaceCodeMapping["LEBANESE"] = "LEBANESE";
    MyInfoRaceCodeMapping["LITHUANIAN"] = "LITHUANIAN";
    MyInfoRaceCodeMapping["SRI_LANKAN"] = "SRI LANKAN";
    MyInfoRaceCodeMapping["LATIN"] = "LATIN";
    MyInfoRaceCodeMapping["LATVIAN"] = "LATVIAN";
    MyInfoRaceCodeMapping["LUXEMBOURGER"] = "LUXEMBOURGER";
    MyInfoRaceCodeMapping["LIBYAN"] = "LIBYAN";
    MyInfoRaceCodeMapping["MADURESE"] = "MADURESE";
    MyInfoRaceCodeMapping["MALABARI"] = "MALABARI";
    MyInfoRaceCodeMapping["MAGYARS"] = "MAGYARS";
    MyInfoRaceCodeMapping["MOLDAVIAN"] = "MOLDAVIAN";
    MyInfoRaceCodeMapping["MINANGKABAU"] = "MINANGKABAU";
    MyInfoRaceCodeMapping["MANX"] = "MANX";
    MyInfoRaceCodeMapping["MALAGASY"] = "MALAGASY";
    MyInfoRaceCodeMapping["MAHRATTA"] = "MAHRATTA";
    MyInfoRaceCodeMapping["MAORI"] = "MAORI";
    MyInfoRaceCodeMapping["MURUT"] = "MURUT";
    MyInfoRaceCodeMapping["MAKASARESE"] = "MAKASARESE";
    MyInfoRaceCodeMapping["MALDIVIAN"] = "MALDIVIAN";
    MyInfoRaceCodeMapping["MALAYALEE"] = "MALAYALEE";
    MyInfoRaceCodeMapping["MELANESIAN"] = "MELANESIAN";
    MyInfoRaceCodeMapping["MONGOLIAN"] = "MONGOLIAN";
    MyInfoRaceCodeMapping["MANIPURI"] = "MANIPURI";
    MyInfoRaceCodeMapping["MESTIZO"] = "MESTIZO";
    MyInfoRaceCodeMapping["MARATHI"] = "MARATHI";
    MyInfoRaceCodeMapping["METIS"] = "METIS";
    MyInfoRaceCodeMapping["MALTESE"] = "MALTESE";
    MyInfoRaceCodeMapping["MAURITIAN"] = "MAURITIAN";
    MyInfoRaceCodeMapping["MON"] = "MON";
    MyInfoRaceCodeMapping["MOROCCAN"] = "MOROCCAN";
    MyInfoRaceCodeMapping["MEXICAN"] = "MEXICAN";
    MyInfoRaceCodeMapping["MALAY"] = "MALAY";
    MyInfoRaceCodeMapping["MELANAU"] = "MELANAU";
    MyInfoRaceCodeMapping["NAGA"] = "NAGA";
    MyInfoRaceCodeMapping["NEGRO"] = "NEGRO";
    MyInfoRaceCodeMapping["NIGERIAN"] = "NIGERIAN";
    MyInfoRaceCodeMapping["NETHERLANDER"] = "NETHERLANDER";
    MyInfoRaceCodeMapping["NORWEGIAN"] = "NORWEGIAN";
    MyInfoRaceCodeMapping["NEPALESE"] = "NEPALESE";
    MyInfoRaceCodeMapping["NAURUAN"] = "NAURUAN";
    MyInfoRaceCodeMapping["NEWAR"] = "NEWAR";
    MyInfoRaceCodeMapping["NEW_ZEALANDER"] = "NEW ZEALANDER";
    MyInfoRaceCodeMapping["PENAN"] = "PENAN";
    MyInfoRaceCodeMapping["PALESTINE"] = "PALESTINE";
    MyInfoRaceCodeMapping["POLISH"] = "POLISH";
    MyInfoRaceCodeMapping["PERSIAN"] = "PERSIAN";
    MyInfoRaceCodeMapping["FILIPINO"] = "FILIPINO";
    MyInfoRaceCodeMapping["PUNJABI"] = "PUNJABI";
    MyInfoRaceCodeMapping["PAKISTANI"] = "PAKISTANI";
    MyInfoRaceCodeMapping["POLE"] = "POLE";
    MyInfoRaceCodeMapping["PATHAN"] = "PATHAN";
    MyInfoRaceCodeMapping["PORTUGUESE"] = "PORTUGUESE";
    MyInfoRaceCodeMapping["PERUVIAN"] = "PERUVIAN";
    MyInfoRaceCodeMapping["PARSEE"] = "PARSEE";
    MyInfoRaceCodeMapping["PUNAN"] = "PUNAN";
    MyInfoRaceCodeMapping["POLYNESIAN"] = "POLYNESIAN";
    MyInfoRaceCodeMapping["RAJPUT"] = "RAJPUT";
    MyInfoRaceCodeMapping["RAKHINE"] = "RAKHINE";
    MyInfoRaceCodeMapping["ROMANIAN"] = "ROMANIAN";
    MyInfoRaceCodeMapping["RUSSIAN"] = "RUSSIAN";
    MyInfoRaceCodeMapping["SINO_KADAZAN"] = "SINO KADAZAN";
    MyInfoRaceCodeMapping["SAMMARINESE"] = "SAMMARINESE";
    MyInfoRaceCodeMapping["SCOT"] = "SCOT";
    MyInfoRaceCodeMapping["SINDHI"] = "SINDHI";
    MyInfoRaceCodeMapping["SWEDE"] = "SWEDE";
    MyInfoRaceCodeMapping["SERBIA_MONTENGERIN"] = "SERBIA/MONTENGERIN";
    MyInfoRaceCodeMapping["SAMOAN"] = "SAMOAN";
    MyInfoRaceCodeMapping["SHAN"] = "SHAN";
    MyInfoRaceCodeMapping["SINHALESE"] = "SINHALESE";
    MyInfoRaceCodeMapping["SINO_JAPANESE"] = "SINO JAPANESE";
    MyInfoRaceCodeMapping["SIKH"] = "SIKH";
    MyInfoRaceCodeMapping["SLOVAK"] = "SLOVAK";
    MyInfoRaceCodeMapping["SUMATRAN"] = "SUMATRAN";
    MyInfoRaceCodeMapping["SINO_INDIAN"] = "SINO INDIAN";
    MyInfoRaceCodeMapping["SOMALI"] = "SOMALI";
    MyInfoRaceCodeMapping["SLAVIC"] = "SLAVIC";
    MyInfoRaceCodeMapping["SERANI"] = "SERANI";
    MyInfoRaceCodeMapping["SUNDANESE"] = "SUNDANESE";
    MyInfoRaceCodeMapping["SUDANESE"] = "SUDANESE";
    MyInfoRaceCodeMapping["SWEDISH"] = "SWEDISH";
    MyInfoRaceCodeMapping["SEYCHELLOIS"] = "SEYCHELLOIS";
    MyInfoRaceCodeMapping["TELUGU"] = "TELUGU";
    MyInfoRaceCodeMapping["THAI"] = "THAI";
    MyInfoRaceCodeMapping["TIBETAN"] = "TIBETAN";
    MyInfoRaceCodeMapping["TAJIK"] = "TAJIK";
    MyInfoRaceCodeMapping["TAMIL"] = "TAMIL";
    MyInfoRaceCodeMapping["TURKMEN"] = "TURKMEN";
    MyInfoRaceCodeMapping["TONGAN"] = "TONGAN";
    MyInfoRaceCodeMapping["TIMOR"] = "TIMOR";
    MyInfoRaceCodeMapping["TURK"] = "TURK";
    MyInfoRaceCodeMapping["UNKNOWN"] = "UNKNOWN";
    MyInfoRaceCodeMapping["UKRAINIAN"] = "UKRAINIAN";
    MyInfoRaceCodeMapping["AMERICAN"] = "AMERICAN";
    MyInfoRaceCodeMapping["UYGHUR"] = "UYGHUR";
    MyInfoRaceCodeMapping["UZBEK"] = "UZBEK";
    MyInfoRaceCodeMapping["VENEZUELAN"] = "VENEZUELAN";
    MyInfoRaceCodeMapping["VIETNAMESE"] = "VIETNAMESE";
    MyInfoRaceCodeMapping["WELSH"] = "WELSH";
    MyInfoRaceCodeMapping["OTHER_INDONESIAN"] = "OTHER INDONESIAN";
    MyInfoRaceCodeMapping["OTHER_EURASIAN"] = "OTHER EURASIAN";
    MyInfoRaceCodeMapping["OTHER_INDIAN"] = "OTHER INDIAN";
    MyInfoRaceCodeMapping["OTHERS"] = "OTHERS";
    MyInfoRaceCodeMapping["YUGOSLAV"] = "YUGOSLAV";
    MyInfoRaceCodeMapping["ZIMBABWEAN"] = "ZIMBABWEAN";
})(MyInfoRaceCodeMapping || (MyInfoRaceCodeMapping = {}));
(function (MyInfoRaceCode) {
    MyInfoRaceCode.fn = {
        keys: EnumUtils_1.EnumUtils.keysFunc(MyInfoRaceCode),
        values: EnumUtils_1.EnumUtils.valuesFunc(MyInfoRaceCode),
        toEnumKey: EnumUtils_1.EnumUtils.toEnumKeyFunc(MyInfoRaceCode),
        toEnumValue: EnumUtils_1.EnumUtils.toEnumValueFunc(MyInfoRaceCode),
        toEnumDesc: EnumUtils_1.EnumUtils.toEnumDescFunc(MyInfoRaceCode, MyInfoRaceCodeMapping),
    };
})(MyInfoRaceCode = exports.MyInfoRaceCode || (exports.MyInfoRaceCode = {}));
//# sourceMappingURL=myinfo-race-code.js.map