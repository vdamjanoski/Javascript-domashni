const broevi = [1, 132, 324, 456, 851, 1203, 1233, 120, 135, 180];
for (var i=0; i<broevi.length-1;i++){
    console.log(broevi[i]+broevi[i+1]);
}
const students = [{ime:"Vladimir" ,prezime:"Damjanoski",prosek:"9.3",grad: "Skopje", stipendija: null},
    {ime: "Srdjan" , prezime:"Dimitrovski" , prosek: "9.9" ,grad:"Veles", stipendija: null},
    {ime: "Jovana" , prezime: "Taseva",prosek: "7.6",grad:"Bitola" , stipendija: null},
    {ime: "Kristina" , prezime: "Ivanovska",prosek:"6.3",grad:"Prilep" , stipendija: null},
    {ime: "Dragan" , prezime: "Nikolovski",prosek: "8.5",grad: "Ohrid", stipendija: null},
    {ime: "Atanas" , prezime: "Manevski",prosek:"8.2" ,grad: "Skopje", stipendija: null},
    {ime: "Atanas" , prezime: "Manev",prosek:"5.2" ,grad: "Skopje", stipendija: null},
    {ime: "Dragan" , prezime: "Nikolovski",prosek:"4.2" ,grad: "Skopje", stipendija: null},
    {ime: "Atanas" , prezime: "Nikoloski",prosek:"5.9" ,grad: "Skopje", stipendija: null},
    
]
const studentiSoStipendija=students.filter(students=> students.prosek >8);
console.log("Studenti so stipendija se:",studentiSoStipendija);
const studentiPadnati=students.filter(students=> students.prosek<6);
console.log("Studenti padnati se:",studentiPadnati);

const gradovi= [{ime:"Skopje",zhiteli:"422540"},
    {ime:"Belgrad", zhiteli:"1197714"},
    {ime:"Amsterdam", zhiteli:"2480394"},
    {ime:"Ankara", zhiteli:"5153000"},
    {ime:"Antalija", zhiteli:"945049"},
    {ime:"London", zhiteli:"8866180"},
]
const gradoviSoPovekjeOdMilion=gradovi.filter(gradovi=>gradovi.zhiteli>1000000&&gradovi.ime.includes("A"));
console.log("Gradovi so povekje od milion zhiteli i imeto im zapochnuva so A:",gradoviSoPovekjeOdMilion);
const najnaseleniGradovi=gradovi.sort((b,a)=>a.zhiteli-b.zhiteli);
console.log("Najnaseleni gradovi se:",najnaseleniGradovi);
const triNajnaseleniGradovi=najnaseleniGradovi.slice(0,3);
console.log("Tri najnaseleni gradovi se:",triNajnaseleniGradovi);