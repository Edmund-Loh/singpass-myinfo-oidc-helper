"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Childrenbirthrecords = void 0;
const moment = require("moment");
const formatDateToString = (date) => {
    if (date) {
        return date.format("YYYY-MM-DD").toString();
    }
    return moment().format("YYYY-MM-DD").toString();
};
const childYoungest = {
    birthcertno: { value: "T9722304H" },
    name: { value: "Tan Ke Xuan" },
    dob: { value: formatDateToString() },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const child1MonthOld = {
    birthcertno: { value: "T1537509J" },
    name: { value: "Tan Ke Yu" },
    dob: { value: formatDateToString(moment().subtract(1, "months")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const child2MonthsOld = {
    birthcertno: { value: "T0837193D" },
    name: { value: "Tan Keh Guan" },
    dob: { value: formatDateToString(moment().subtract(2, "months")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childMiddle1 = {
    birthcertno: { value: "T5608952C" },
    name: { value: "Tan Chiu" },
    dob: { value: formatDateToString(moment().subtract(2, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childMiddle2 = {
    birthcertno: { value: "T8624969Z" },
    name: { value: "Tan Chua" },
    dob: { value: formatDateToString(moment().subtract(2, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childMiddle3 = {
    birthcertno: { value: "T2026211C" },
    name: { value: "Tan Su" },
    dob: { value: formatDateToString(moment().subtract(3, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childMiddle4 = {
    birthcertno: { value: "T9375993H" },
    name: { value: "Tan Go" },
    dob: { value: formatDateToString(moment().subtract(4, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childMiddle5 = {
    birthcertno: { value: "T0194397E" },
    name: { value: "Tan Sy" },
    dob: { value: formatDateToString(moment().subtract(5, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const child6YearsOld = {
    birthcertno: { value: "T2307145I" },
    name: { value: "Tan Kim" },
    dob: { value: formatDateToString(moment().subtract(6, "years").startOf("year")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const child7YearsOld = {
    birthcertno: { value: "T6326168D" },
    name: { value: "Tan Liu" },
    dob: { value: formatDateToString(moment().subtract(7, "years").endOf("year")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
const childSuperOld = {
    birthcertno: { value: "T1589002E" },
    name: { value: "Tan Ke Wei" },
    dob: { value: formatDateToString(moment().subtract(8, "years")) },
    lifestatus: { code: "A", desc: "ALIVE" },
};
exports.Childrenbirthrecords = {
    childYoungest,
    child1MonthOld,
    child2MonthsOld,
    childMiddle1,
    childMiddle2,
    childMiddle3,
    childMiddle4,
    childMiddle5,
    child6YearsOld,
    child7YearsOld,
    childSuperOld,
};
//# sourceMappingURL=normalChildren.js.map