array = [{Sipara:undefined}]
var maqarray=[]
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
	if (maqraatcheck == true){
		var some = document.querySelector("select")
		var someother = some.options[some.selectedIndex].text;
		for (var i = 0; i < names.length; i++) {
			if (names[i].name === someother){
				pgno=document.querySelector("#pgno")
				names[i].pages.push(parseInt(pgno.textContent))
			}
		}
	}
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

   if (maqraatcheck == true) {
	   for (var i = 0; i < names.length; i++) {
		   	let tancount = 0
		   	let talcount = 0
		   	for (var f = 0; f < names[i].pages.length; f++) {
		   		tancount = tancount + array[names[i].pages[f]].tanbeeh
		   		talcount = talcount + array[names[i].pages[f]].talqeen
		   	}
		   	let profile = {}
		   	profile.name = names[i].name
		   	profile.tanbeeh = tancount
		   	profile.talqeen = talcount
		   	marks = 10-((tancount/4)+(talcount/2))
		   	profile.marks=marks
		   	maqarray.push(profile)
	   }
	   console.log(maqarray)
	   document.querySelector("select").classList.add("dis")
	   document.querySelector("#alab").classList.add("dis")
		}



			// creating table
	rn = maqarray.length+1;
	cn = 4;
  // rows
  var maqtb = document.createElement("table")
  maqtb.setAttribute("id","maqtb")
  document.querySelector("#final").insertBefore(maqtb,document.querySelector("#reset"))
 for(var r=0;r<parseInt(rn,10);r++)
  {
   var x=document.querySelector("#maqtb").insertRow(r);
   //columns
   for(var c=0;c<parseInt(cn,10);c++)  
    {
     var y=  x.insertCell(c);
     if (r==0 && c==0) {
     	y.innerHTML="Name";
     }else if (r==0 && c==1) {
     	y.innerHTML="Tanbeeh";
     }else if (r==0 && c==2) {
     	y.innerHTML="Talqeen";
     }else if (r==0 && c==3) {
     	y.innerHTML= "Marks";
     }else if (c==0) {
     	y.innerHTML= maqarray[r-1].name;
     }else if (c==1) {
     	y.innerHTML= maqarray[r-1].tanbeeh;
     }else if (c==2) {
     	y.innerHTML= maqarray[r-1].talqeen;
     }else if (c==3) {
     	y.innerHTML= maqarray[r-1].marks;
     }
      
    }
   }




}

names = []


maq = function(){
	maqraatcheck = true
	window.pages = 20
	document.querySelector("#sipsel").classList.add("dis")
	document.querySelector("#maqr").classList.remove("dis")
	var x = document.querySelector("#namelist");
	var y = document.querySelector("#addname");
  myScript = function(){
		names.push({})
		names[names.length-1].pages = []
		names[names.length-1].name = x.value
		var insrow = document.querySelector('#nametb').insertRow(names.length-1)
		var inscell = insrow.insertCell(0)
		inscell.innerHTML = names[names.length-1].name;
		console.log(names[names.length-1].name)
	  x.value=""
   	
}
  y.addEventListener("click", myScript)

}


var next = function () {
	if (names.length>0) {
		document.querySelector("#maqr").classList.add("dis")
		document.querySelector("#main").classList.remove("dis")
		var dds = []
		for (var i = 0; i < names.length; i++) {
			dds.push(names[i].name)
		}
		console.log(dds)
 
    var values = ["dog", "cat", "parrot", "rabbit"];
 
    var select = document.createElement("select");
    select.name = "dd";
    select.id = "dd"
 
    for (const dd of dds)
    {
        var option = document.createElement("option");
        option.value = dd;
        option.text = dd.charAt(0).toUpperCase() + dd.slice(1);
        select.appendChild(option);
    }
 
    var label = document.createElement("label");
    label.innerHTML = "Allot Page"
    label.htmlFor = "dd";
    label.setAttribute("id", "alab");
 
    document.getElementById("main").appendChild(label).appendChild(select);
    pgno=document.querySelector("#pgno")
		pgno.textContent=1
	}else {
		alert("Please enter atleast one name")
	}
}


