function getVowels(str){
    var vowel_list = 'aeiouAEIOU'
    var vcount =0;

    for(var x = 0; x < str.length ; x++){
        if (vowel_list.indexOf(str[x]) !== -1){
            vcount += 1;
        }
    }
    return vcount;
}

let searchbtn = document.getElementById("search")
searchbtn.addEventListener("click",function(){
let vowtext = document.getElementById("vowels")
document.getElementById("result").innerHTML = vowtext.value + " got " + getVowels(vowtext.value) + " vowels letter."
})
console.log(getVowels(""));