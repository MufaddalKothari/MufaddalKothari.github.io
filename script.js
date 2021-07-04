array = [{Sipara:undefined}]
console.log(array)



tanbeehs=document.querySelector(".a")
talqeens=document.querySelector(".b")
tanbut1=document.querySelector(".c")
tanbut2=document.querySelector(".d")
talbut1=document.querySelector(".e")
talbut2=document.querySelector(".f")
console.log(tanbeehs)

increase = function(){
	tanbeehs.value=parseInt(tanbeehs.value)+1
}
increase2 = function(){
	talqeens.value=parseInt(talqeens.value)+1
}
decrease1 = function(){
	tanbeehs.value=parseInt(tanbeehs.value)-1
}
decrease2 = function(){
	talqeens.value=parseInt(talqeens.value)-1
}

display = function(){
	var sipara = document.querySelector("#sipara").value
	window.pages = document.querySelector("#safha").value
	if (window.pages>20 || window.pages<0 || window.pages.length == 0) {
		alert("Please Enter Number of Pages")
		return
	}else{
	
	let nondis = document.querySelector(".dis")
	console.log(nondis)
	nondis.classList.toggle("dis")
	tanbeehs.value=0
	talqeens.value=0
	pgno=document.querySelector("#pgno")
	pgno.textContent=1
	document.querySelector("#sipsel").classList.add("dis")
}

}


nextpg = function(){
	array.push({})
	pgno=document.querySelector("#pgno")
	array[parseInt(pgno.textContent)].tanbeeh=parseInt(tanbeehs.value)
	array[parseInt(pgno.textContent)].talqeen=parseInt(talqeens.value)
	console.log(array)
	pgno.textContent=parseInt(pgno.textContent)+1
	if (pgno.textContent==parseInt(pages)) {
		document.querySelector("#pgnum").classList.add("dis")
	//	document.querySelector("#calc").classList.remove("dis")
	}
	tanbeehs.value=0
	talqeens.value=0
	

}


	

calc = function(){
	globaltan = 0
	globaltal = 0
	array.push({})
	// incrementing page no.
	pgno=document.querySelector("#pgno")
	array[parseInt(pgno.textContent)].tanbeeh=parseInt(tanbeehs.value)
	array[parseInt(pgno.textContent)].talqeen=parseInt(talqeens.value)
	console.log(array)
	// calculating total tanbeeh and talqeens
	for (var i = 1; i < parseInt(array.length); i++) {
		localtan = array[i].tanbeeh
		globaltan = globaltan+localtan
	}
	
	for (var i = 1; i < parseInt(array.length); i++) {
		localtal = array[i].talqeen
		globaltal = globaltal+localtal
	}
	// removing tanbeeh talqeen input tables and buttons
	let uraw = document.querySelectorAll(".box")
	uraw[0].classList.add("dis")
	uraw[1].classList.add("dis")
	document.querySelector("#calc").classList.add("dis")
	document.querySelector(".pgno").classList.add("dis")
	// calculating marks
	if (parseInt(array.length)<6) {
		marks=(10-(globaltan/2+globaltal));
	}else if(parseInt(array.length)<11){
			marks=(10-(globaltan/4+globaltal/2));
	}else{
			marks=(10-(globaltan/8+globaltal/4))
	}
	// creating table
	rn = 3;
	cn = array.length;
  // rows
 for(var r=0;r<parseInt(rn,10);r++)
  {
   var x=document.getElementById('table').insertRow(r);
   //columns
   for(var c=0;c<parseInt(cn,10);c++)  
    {
     var y=  x.insertCell(c);
     if (r==0) {
     	y.innerHTML=c;
     }else if (r==1 && c==0) {
     	y.innerHTML="Tanbeeh";
     }else if (r==1) {
     	y.innerHTML=array[c].tanbeeh;
     }else if (r==2 && c==0) {
     	y.innerHTML="Talqeen";
     }else if (r==2) {
     	y.innerHTML=array[c].talqeen;
     }
      
    }
   }
   // final output
   document.querySelector("#final").classList.remove("dis")
   document.querySelector("#pgnum").classList.add("dis")
   document.querySelector("#tantot").textContent = globaltan
   document.querySelector("#taltot").textContent = globaltal
   document.querySelector("#marks").textContent = marks
   
}

