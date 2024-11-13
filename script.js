var a=3
var b=5
if (a%3==0 && b%5==0)
{console.log("fizzbuzz");
    }
if(a%3==0){
        console.log("fizz");
    }
if(b%5==0){
        console.log("buzz");
    }
function gigabytesToBytes(number) {
    return number*1000000000;
};
console.log((gigabytesToBytes(10)))
console.log(gigabytesToBytes(1))
console.log(gigabytesToBytes(1000))
function pitagorovaTeorema(A,B){
    return Math.sqrt(Math.pow(A,2)+Math.pow(B,2));
}
console.log(pitagorovaTeorema(3,4))
function minutesToHours(number){
    return number/60;
}
console.log(minutesToHours(120));
const country =[
    countryName = "Macedonia",
    countryCapital = "Skopje",
    countryOfficialLanguage = "Macedonian",
    countryPopulation = "1,836,713"
]
const numbers= [
    "2143",
    "1928",
    "2545",
    "740",
    "2716",
    "1834",
    "1654",
    "657",
    "1143",
]
for (var i = 0; i < numbers.length; i++){
    if (numbers[i]%2==0){
        console.log(`Brojot ${numbers[i]} e paren broj`);
    } else{
        console.log(`Brojot ${numbers[i]} e neparen broj`);
    }
}
