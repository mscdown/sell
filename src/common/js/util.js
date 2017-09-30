export function urlParse () {
  let obj = {};
  let url = window.location.search;
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  if (arr) {
      arr.forEach((item) => {
        let itemArr = item.substring(1).split('=');
        let key = decodeURIComponent(itemArr[0]);
        let value = decodeURIComponent(itemArr[1]);
        obj[key] = value;
      });
  }
  return obj;
}
