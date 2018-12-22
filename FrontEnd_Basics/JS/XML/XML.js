
window.onload = () => {
  let text = 
"<bookstore><book>" +
"<title>Everyday Italian</title>" +
"<author>Giada De Laurentiis</author>" +
"<year>2005</year>" +
"</book></bookstore>";

let parser = new DOMParser();
let xmlDoc = parser.parseFromString(text,"text/xml");

console.log(xmlDoc.getElementsByTagName("title").item(0).innerHTML);

// DOMParser 객체를 이용하여 접근 및 파싱
}

