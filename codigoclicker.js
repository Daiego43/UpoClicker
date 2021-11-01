var score = 0;
var persecond = 0;
var clickpower = 1;

var value1  = 0.1; 			//1
var value2  = 1;			//2
var value3  = 8;			//3
var value4  = 47;			//4
var value5  = 260;			//5
var value6  = 1400;			//6
var value7  = 7800;			//7
var value8  = 44000;		//8
var value9  = 260000;		//9
var value10 = 1600000;		//10
var value11 = 10000000;		//11
var value12 = 65000000;		//12
var value13 = 430000000;	//13
var value14 = 2900000000;	//14
var value15 = 21000000000;	//15
var value16 = 150000000000;	//16


function addToScore(amount){
	score = score + amount;
	document.getElementById("score").innerHTML = Math.trunc(score);
}

function generalBuy(value, price, quantity){
	var thisprice = Number(document.getElementById(price).innerHTML);
	if(score >= thisprice){
		var thisquantity = Number(document.getElementById(quantity).innerHTML);
		score = score - thisprice;
		thisprice = Math.round(thisprice*1.15);
		thisquantity = thisquantity + 1;
		persecond = persecond + value;
		document.getElementById("score").innerHTML = Math.trunc(score);
		document.getElementById(quantity).innerHTML = thisquantity;
		document.getElementById(price).innerHTML = thisprice;
		if((Math.trunc(persecond) - persecond )!= 0){
			document.getElementById("persecond").innerHTML = persecond.toFixed(1);
		}else{
			document.getElementById("persecond").innerHTML = persecond;
		}
	}
}




setInterval(function(){
	score = score + persecond/10;
	document.getElementById("score").innerHTML = Math.trunc(score);
	if((Math.trunc(persecond) - persecond )!= 0){
		document.getElementById("persecond").innerHTML = persecond.toFixed(1);
	}else{
		document.getElementById("persecond").innerHTML = persecond;
	}
}, 100);



