
var randomBoolean1 = true;
var randomString1 = "gert";
var randomBoolean2 = false;
var randomString2 = "henk";
var randomBoolean3 = false;
var randomBoolean4 = false;
var randomBoolean5 = true;
var randomNum1 = 5;
var randomString3 = "1800";
var randomString4 = "popcorn";
var randomBoolean6 = true;
var randomString5 = "stardew";
var randomString6 = "valley";
var randomNum2 = 18;
var randomBoolean8 = false;

var keuzeBoolean = true;
if (keuzeBoolean == true){
    randomBoolean1 = false;
    randomBoolean4 = true;
    randomString1 = "bert";
    randomNum1 = 18;
}

document.getElementById("var1").innerHTML = randomBoolean1;
document.getElementById("var2").innerHTML = randomBoolean4;
document.getElementById("var3").innerHTML = randomString1;
document.getElementById("var4").innerHTML = randomNum1;

document.getElementById("var5").innerHTML = typeof randomBoolean2;
document.getElementById("var6").innerHTML = typeof randomBoolean5;
document.getElementById("var7").innerHTML = typeof randomString5;
document.getElementById("var8").innerHTML = typeof randomNum2;

document.getElementById("var9").innerHTML = randomBoolean2 + randomString4;
document.getElementById("var10").innerHTML = randomBoolean8 + randomNum2;
document.getElementById("var11").innerHTML = randomString6 + randomNum2;
document.getElementById("var12").innerHTML = randomString3 + randomNum2;
document.getElementById("var13").innerHTML = randomNum2 + randomString3;

var keuzeBoolean2 = true;
if (keuzeBoolean2 == true){
    randomBoolean3 = true;
    randomBoolean6 = false;
    randomString2 = "bert";
}

document.getElementById("var14").innerHTML = randomBoolean6;
document.getElementById("var15").innerHTML = randomBoolean3;
document.getElementById("var16").innerHTML = randomString2;

function som (som1,som2) {

    console.log(som1 + som2)

}
som(10,10);

function naam (voornaam,achternaam) {

    console.log(voornaam + " " + achternaam)

}
naam("Gert","Jansen");


var gert = function (gert1,gert2) {
    console.log(gert1,gert2)
};

gert("Gert"," Ghert");


var henk = function (henk1,henk2) {
    console.log(henk1,henk2)
};

henk("Henk"," Henkie");

var x = function(x1,x2){
    console.log(x1,x2)
}("Bert","Ernie");

var y = function(y1,y2){
    console.log(y1,y2)
}("Karel","Jan");

function naam2 (voornaam,achternaam){
    console.log(voornaam + " " + achternaam)
    return naam2;
}
naam2("Bert","Ernie");

var bandNaam = ("awolnation");

function displayBand(displayBand) {
   var bandNaam = ("Chef special");
    bandNaam = "bart";
    console.log(window.bandNaam);
}
displayBand();



















































