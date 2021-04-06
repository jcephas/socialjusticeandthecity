var c,ctx;
onload=setInterval(randomize,1000);

//function to generate random circle parameters, x,y and radius

function randomize(){
 // console.log("here");
  c = document.getElementById("canvas");
  ctx = c.getContext("2d");
  var rr = Math.ceil((30* Math.random())+5);
  var rx = Math.ceil(290* Math.random());
  var ry = Math.ceil(290* Math.random());
  drawCircle(rx,ry,rr);  
}
function drawCircle(rx,ry,rr){
  var myColors  =["blue","red","green","yellow"];
  var colorPicker = Math.ceil(4* Math.random() -1);
  ctx.strokeStyle = myColors[colorPicker];
  ctx.beginPath();
  ctx.arc(rx,ry,rr,0,2*Math.PI);
  ctx.stroke();
  ctx.closePath();
}

