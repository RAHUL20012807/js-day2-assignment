var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
console.log(sln);

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
console.log(pos);


var sta = "Please locate where 'locate' occurs!";
var poa = sta.lastIndexOf("locate");
console.log(poa);


var stb = "Please locate where 'locate' occurs!";
var pob = stb.lastIndexOf("John");
console.log(pob);


var stc = "Please locate where 'locate' occurs!";
var poc = stc.indexOf("locate", 15);
console.log(poc);

var std = "Please locate where 'locate' occurs!";
var pod = std.search("locate");
console.log(pod);

var ste = "Apple, Banana, Kiwi";
var res = ste.slice(7, 13)
console.log(res)
var re = ste.slice(-12);
console.log(re);

var stf = "pineapple, greenbanana, australiankiwi";
var rea = stf.substr(7, 6);
console.log(rea);

stg = "Please visit Microsoft!";
var n = stg.replace("MICROSOFT", "W3Schools");

var text1 = "Hello World!";       
var text2 = text1.toUpperCase();
console.log(text2);

var text3 = "Hello";
var text4 = "World";
var text5 = text3.concat(" ", text4);
console.log(text5);

var sts = "HELLO WORLD";
var ret=sts.charAt(0);
console.log(ret);
