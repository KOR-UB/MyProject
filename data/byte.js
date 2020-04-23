var a = "안녕하세요";
var aa = ["안","녕","하","세","요"];
var aaa = ["안녕하세요"];
var aaaa = {string:"안녕하세요", num: 1};
var b = 1;
var aaaaaa = '안녕하세요'[2];

console.log(aaaaaa);

console.log(a + aa + aaa + aaaa.string);

if(a === aaaa.string)
{
    console.log("같다");
}
if (b === aaaa.num)
{
    console.log("이놈도 같다");
}


