let captchaText = document.querySelector('#captcha');
let userText = document.querySelector('#textBox');
let submitButton = document.querySelector('#submit');
let output = document.querySelector('#output');
let refreshButton = document.querySelector('#refresh');
let username = document.querySelector('#username');
let password = document.querySelector('#password');

let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let emptyArr = [];
for(let i = 1; i <= 6; i++) {
	emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}

key = 'J@NcRfUjXn2r5u8x/A?D(G+KbPdSgVkY';
iv = '6100a863bc120c929242329e7012d4bc';

captchaText.innerHTML = emptyArr.join('');
//captchaText.innerHTML = 'yUFimo';
document.cookie = "captchaText="+captchaText.innerHTML+";path=/";

userText.addEventListener('keyup', function(e) {
	//var encodepassword  = btoa(password.value);
	
	var encodepassword  =  CryptoJS.AES.encrypt(JSON.stringify(password.value), key, {format: CryptoJSAesJson}).toString();
	
	document.cookie = "captchaText="+captchaText.innerHTML+";path=/";
	if(e.keyCode === 13) {
		if(username.value == '' && password.value == '' && userText.value == ''){
			 e.preventDefault();
			output.classList.add("redText");
			output.innerHTML = "Please provide above informantion !";
			
		}else if(password.value == ''){
			e.preventDefault();
		   output.classList.add("redText");
		   output.innerHTML = "Please provide  password !";
		}else if(username.value == '' ){
			e.preventDefault();
		   output.classList.add("redText");
		   output.innerHTML = "Please provide username !";
		}else{
			if(userText.value === captchaText.innerHTML){ 
				document.getElementById('password').value=encodepassword; 
				output.classList.add("greenText");
				output.innerHTML = "Signing in...";
			} else {
				output.classList.add("redText");
				output.innerHTML = "Invalid captcha";
				 document.getElementById("#refresh").click();
			}
		}
	}
});

submitButton.addEventListener('click',  function(e) {
	//var encodepassword  = btoa(password.value);
	
	var encodepassword  =  CryptoJS.AES.encrypt(JSON.stringify(password.value), key, {format: CryptoJSAesJson}).toString();
	
	document.cookie = "captchaText="+captchaText.innerHTML+";path=/";
	
	if(username.value == '' && password.value == '' && userText.value == ''){
			 e.preventDefault();
			output.classList.add("redText");
			output.innerHTML = "Please provide above informantion !";
			
		}else if(password.value == ''){
			e.preventDefault();
		   output.classList.add("redText");
		   output.innerHTML = "Please provide  password !";
		}else if(username.value == '' ){
			e.preventDefault();
		   output.classList.add("redText");
		   output.innerHTML = "Please provide username !";
		}else{
	if(userText.value === captchaText.innerHTML) {
		document.getElementById('password').value=encodepassword; 
		output.classList.add("greenText");
		output.innerHTML = "Signing in...";
      
	} else {
        e.preventDefault();
		output.classList.add("redText");
		output.innerHTML = "Invalid captcha";
		
			
			 document.getElementById("#refresh").click();
		}}
});

refreshButton.addEventListener('click', function () {
	document.cookie = "captchaText="+captchaText.innerHTML+";path=/";
	userText.value = "";
	let refreshArr = [];
	for(let j = 1; j <= 6; j++) {
		refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
	}
	captchaText.innerHTML = refreshArr.join('');
	output.innerHTML = "";
});

submitButton.addEventListener('keyup', function(e) {
	//var encodepassword  = btoa(password.value);
	
	var encodepassword  =  CryptoJS.AES.encrypt(JSON.stringify(password.value), key, {format: CryptoJSAesJson}).toString();
	
	document.cookie = "captchaText="+captchaText.innerHTML+";path=/";
	if(username.value == '' && password.value == '' && userText.value == ''){
			 e.preventDefault();
			output.classList.add("redText");
			output.innerHTML = "Please provide above informantion !";
			
		}else if(password.value == ''){
			e.preventDefault();
		   output.classList.add("redText");
		   output.innerHTML = "Please provide  password !";
		}else if(username.value == '' ){
			e.preventDefault();
		   output.classList.add("redText");
		   output.innerHTML = "Please provide username !";
		}else{
	if(e.keyCode === 13) {
	if(userText.value === captchaText.innerHTML) {
		document.getElementById('password').value=encodepassword; 
		console.log("correct!");
		output.classList.add("greenText");
		
		output.innerHTML = "Signing in...";
     
	} else {
        e.preventDefault();
		output.classList.add("redText");
		output.innerHTML = "Invalid captcha";
		
			 document.getElementById("#refresh").click();
	}}
	}
});
