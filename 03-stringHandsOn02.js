// ========== Using String Template ===========

console.log("========== String Template ==============");
console.log(`Hey you are doing good, keep it up`);

console.log("--------------------------------------------------------------------------------------");


console.log("===================== no argument , no return type ===================");
function stringHandsOn() {
    var sentence ="Hey you are doing good, keep it up";
    console.log(sentence);
    var sentenceLength=sentence.length;
    console.log(`The total length of string is:${sentenceLength}`);
    
    console.log("-------------------------------------------------------------------------------------");
    console.log("===================== Trim ===================");
    var sen = "   Hey you are doing good, keep it up    ";
    console.log(sen);
    var senLength=sen.length;
    console.log(`The total length of string is:${senLength}`);

    var senAfterTrim = sen.trim();
    var senAfterTrimLength = senAfterTrim.length;
    console.log(`length of string  after trim is:${senAfterTrimLength}`);
    // console.log(senAfterTrim);
    
    console.log(`Total removed extra space are - ${senLength-senAfterTrimLength}`);

    console.log("--------------------------------------------------------------------------------------");
    console.log("============ First and last Character ============");
    var charAt0 = sentence.charAt(0);
    console.log("Character at first index is: ", charAt0);


    console.log("==== Last index character ====");
    var lastChar= sentence.charAt(sentence.length-1);
    console.log("Character at last index is: ", lastChar);

    console.log("--------------------------------------------------------------------------------------");
    console.log("========== slice ==========");
    var result =sentence.slice(22);
    console.log(result);

    console.log("--------------------------------------------------------------------------------------");
    console.log("==========  Checking start or end with particular word ==========");
    var result = sentence.includes("up");
    console.log(`Is string end with up:${result}`);

    var result = sentence.includes("Hey");
    console.log(`Is string start with Hey:${result}`);

}
stringHandsOn();
