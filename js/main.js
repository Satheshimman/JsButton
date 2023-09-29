let a=["red","blue","black"];

var row=document.getElementById("row")

var div1=document.createElement("div")
div1.setAttribute("class","col-lg-12 col-12 col-md-6  text-light vh-100 align-items-center ")
row.append(div1);

var div2=document.createElement("div")
div2.setAttribute("class","  text-light")
div1.append(div2);






var btn=document.createElement("button")

btn.setAttribute("class","  px-5 py-3 d-inline-block  text-decoration-none ")
btn.innerHTML=("Click Me")
div2.append(btn);



btn.addEventListener("click",function(){
	

  var c= Math.floor(Math.random() * (a.length));
  

var bdy=document.getElementById("body");
bdy.style.backgroundColor=(a[c]);
  
  
// var para=document.createElement("p")

// para.setAttribute("class","text-decoration-none")
// div2.append(para);
// para.innerHTML=a[c];

 console.log(a[c]);
 

 
 
 });
