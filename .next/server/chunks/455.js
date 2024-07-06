"use strict";
exports.id = 455;
exports.ids = [455];
exports.modules = {

/***/ 90455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Rl: () => (/* binding */ UpperCaseFirstLetter),
/* harmony export */   p6: () => (/* binding */ formatDate)
/* harmony export */ });
/* unused harmony exports currency, formatPhoneNumber, formatDateAndHour, formatStartDate, formatEndDate */
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const currency = {
    USD: "$0,000"
};
function formatPhoneNumber(value) {
    value = value.trim().replace(/([^0-9+])/g, "");
    const formatted = value.replace(/( ?\d{1,3})?( ?-?\d{1,3})?( ?-?\d{1,4})?(\d)?/, function(_, p1, p2, p3) {
        let output = "";
        if (p1) {
            if (p1.match(/[^A-Z0-9]/gi)) {
                output += `(${p1})`;
            } else {
                p1 = p1.replace(/[^A-Z0-9]/gi, "");
                output += `(${p1})`;
            }
        }
        if (p2) {
            if (p2.match(/[^A-Z0-9]/gi)) {
                output += ` ${p2}`;
            } else {
                p2 = p2.replace(/[^A-Z0-9]/gi, "");
                output += ` ${p2}`;
            }
        }
        if (p3) {
            if (p3.match(/[^A-Z0-9]/gi)) {
                output += `-${p3}`;
            } else {
                p3 = p3.replace(/[^A-Z0-9]/gi, "");
                output += `-${p3}`;
            }
        }
        return output;
    });
    return formatted;
}
const formatDate = (date)=>{
    return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format("DD/MM/YYYY");
};
const formatDateAndHour = (date)=>{
    return moment(date).format("DD/MM/YYYY HH:mm:ss");
};
const formatStartDate = (date)=>{
    return `${moment(date).format("YYYY/MM/DD")} 00:00:00`;
};
const formatEndDate = (date)=>{
    return `${moment(date).format("YYYY/MM/DD")} 23:59:59`;
};
const UpperCaseFirstLetter = (s)=>{
    if (!s) return;
    const split = s.toLocaleLowerCase().split(" ");
    let newString = "";
    for (const i of split){
        newString += i[0].toUpperCase() + i.slice(1) + " ";
    }
    return newString.trim();
};


/***/ })

};
;