var computerNumber = function(){
	return Math.floor((Math.random()*100)+1);
}
var computerChoice = computerNumber();
var timer = 1;
var input = document.getElementsByTagName('input')[0];
var form = document.getElementsByTagName('form')[0];
var p = document.getElementsByTagName('p')[0];
var userNumber;
form.addEventListener('submit', function(e) {
	e.preventDefault();
	userNumber = input.value;
	compare(userNumber,computerChoice);
	 });
console.log(computerChoice)
var compare = function(num1,num2) {
		if(num1<num2){
			var div = document.getElementsByTagName('div')[0];
			div.innerText = 'Szukana liczba jest liczba jest wyższa.';
			timer ++;
		}
		else if(num1>num2){
			var div = document.getElementsByTagName('div')[0];
			div.innerText = 'Szukana liczba jest liczba jest niższa.';
			timer ++;
		}
		else{
			form.removeChild(p);
			var div = document.getElementsByTagName('div')[0];
			console.log(timer);
			div.innerText = 'Liczba odgadnięta za '+timer+' razem.';
		}
	
}