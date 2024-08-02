// Question 1
console.log("=========== no argument and no return type ============");

function language() {
    console.log("Javascript is the intresting language");
}
language();
language();
function message() {
    console.log("Have a nice day");
}
message();

// Question 2
console.log("=========== with argument and no return type ============");

function personalDetails(firstName,lastName,collegeName){
    console.log("My first name is:",firstName);
    console.log("My first name is:",lastName);
    console.log("My first name is:",collegeName);
    
}
personalDetails("Vaishnavi","Kharat","RIT Islampur");

// Question 3
console.log("=========== with argument ============");
function addThreeValues(n1,n2,n3) {
    console.log("The numbers are :",n1,n2,n3);
    var result = n1+n2+n3;
    console.log("The addition of three number is:",result);
}
addThreeValues(10.23, 600, 40);
addThreeValues("hello"," Good"," Morning");