function check_palindrome( str ) {
	let j = str.length -1;
	for( let i = 0 ; i < j/2 ;i++)
	{
	let x = str[i] ;//forward character
	let y = str[j-i];//backward character
	if( x != y)
	{
		return false;
	}
	}
	return true;
	
}

let searchbtn = document.getElementById("search")
searchbtn.addEventListener("click",function(){
let paltext = document.getElementById("palindrome")
document.getElementById("result").innerHTML = paltext.value + " = string is " + check_palindrome(paltext.value) + " palindrome. "
})