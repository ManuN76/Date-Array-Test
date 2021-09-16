/********************************************************************
 * Date Array Test
 *
 * Conversion according to local settings
 *
 * function : glide2Date, date2Glide, isValidDate
 *
 * ------------------------------------------------------------------
 * Converting Glide to a JS Date object
 * return object Date JS
 * the glideDateTimeFormat parameter must match the format used in
 * the array
 * ' example : type "date-time"
 *    let x = glide2Date(date, "short");
 * ' example : type { "kind": "array", "items": "string" }
 *    if (arrDate != undefined) {
 *      arrDate = arrDate.map(dt => {
 *        return glide2Date(dt, glideDateTimeFormat);
 *      })
 *    }
 *
 * glide2Date (dt,format)
 *  dt : date received by glide
 *  format : short, medium, long
 *
 * ------------------------------------------------------------------
 * Converting a JS Date object to Glide
 * return object Date JS
 * ' use in driver.js for arrays
 *
 * date2Glide (dt, format)
 *  dt : object date (js)
 *  format : short, medium, long
 *
 * ------------------------------------------------------------------
 *
 * IMPORTANT :
 * - for a complete conversion of an Array String you must fill in the global
 * variable glideDateTimeFormat with the format (short, medium or long).
 * - for a conversion of a Date-Time column, use the 'short' format
 *
 */

window.function = function (array, arrayformat) {
  let arrDate = array.value;

  glideDateTimeFormat = "short";

  arrayformat = arrayformat.value ?? "";
  if (arrayformat != "") glideDateTimeFormat = arrayformat;

  // !!!!!!! TEST converting Array String with Date
  if (arrDate != undefined) {
    arrDate = arrDate.map((dt) => {
      return glide2Date(dt, glideDateTimeFormat);
    });
  }

  // !!!!!!!! RETURN ARRAY
  return arrDate;
};
