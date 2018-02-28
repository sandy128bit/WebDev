var p1Button= document.querySelector("#p1");
var p2Button= document.getElementById("p2");
var reset= document.getElementById("resetb")
var p1Dis= document.querySelector("#p1dis");
var p2Dis= document.getElementById("p2dis");
var winscdisp=document.getElementById("winscdis")
var p1sc=0;
var p2sc=0;
var winsc= document.querySelector("input");
var gameover= false;
var winningscore=5;
var wonBy=0;

winsc.addEventListener("change", function(){
	winningscore=Number(this.value);
	winscdisp.textContent= this.value;
	console.log(winningscore);
});

p1Button.addEventListener("click", function(){
if (!gameover) {
		p1sc++;
		p1Dis.textContent= p1sc;
		if (p1sc===winningscore) {
			p1Dis.classList.add("winner");
			wonBy=(Number(p1sc)-Number(p2sc));
			gameover=!gameover;
			alert("Player 1st won");

		}	
	}
});

p2Button.addEventListener("click", function(){
if (!gameover) {
		p2sc++;
		p2Dis.textContent= p2sc;
		if (p2sc===winningscore) {
			p2Dis.classList.add("winner");
			wonBy=(Number(p2sc)-Number(p1sc));
			gameover=!gameover;
			alert("Player 2nd won");
		}
	}
});

reset.addEventListener("click", function(){
	winningscore=0;
	winscdisp.textContent= winningscore;
	p1sc=0;
	p1Dis.classList.remove("winner")
	p1Dis.textContent= p1sc;
	p2sc=0;
	p2Dis.classList.remove("winner")
	p2Dis.textContent= p2sc;
	gameover=false;
	winningscore=0;
	wonBy=0;
	clear();
});

