// TRIANGLE
const area = ( ) => {
  var height = document.getElementById("myHeight").value;
  var base = document.getElementById("myBase").value;
  var calculate = base*height/2;
  var answer = calculate.toFixed(2);
    return answer + " un<sup>2</sup>";
}
const myArea = ( ) => {
  document.getElementById("demo").innerHTML = area( );
};
// RECTANGLE 
const area3 = ( ) => {
  var length = document.getElementById("myRLength").value;
  var width = document.getElementById("myRWidth").value;
  var calculate = length*width;
  var answer = calculate.toFixed(2);
    return answer + " un<sup>2</sup>";
}
const myArea3 = ( ) => {
  document.getElementById("demo3").innerHTML = area3( );
};
// SQUARE 
const area2 = ( ) => {
  var length = document.getElementById("mySquare").value;
  var calculate = length*length;
  var answer = calculate.toFixed(2);
    return answer + " un<sup>2</sup>";
}
const myArea2 = ( ) => {
  document.getElementById("demo2").innerHTML = area2( );
};
//PARALLELOGRAM
const area4 = ( ) => {
  var length = document.getElementById("myPLength").value;
  var width = document.getElementById("myPWidth").value;
  var calculate = length*width;
  var answer = calculate.toFixed(2);
    return answer + " un<sup>2</sup>";
}
const myArea4 = ( ) => {
  document.getElementById("demo4").innerHTML = area4( );
};
// RHOMBUS
const area5 = ( ) => {
  var length = document.getElementById("myRD1").value;
  var width = document.getElementById("myRD2").value;
  var calculate = length*width/2;
  var answer = calculate.toFixed(2);
    return answer + " un<sup>2</sup>";
}
const myArea5 = ( ) => {
  document.getElementById("demo5").innerHTML = area5( );
};
// KITE
const area6 = ( ) => {
  var length = document.getElementById("myKD1").value;
  var width = document.getElementById("myKD2").value;
  var calculate = length*width/2;
  var answer = calculate.toFixed(2);
    return answer + " un<sup>2</sup>";
}
const myArea6 = ( ) => {
  document.getElementById("demo6").innerHTML = area6( );
};
// TRAPEZOID    **NOT RETURNING ANSWER DOING A+B=12 WHEN A=1,B=2
const area7 = ( ) => {
  var a = document.getElementById("myTB1").value;
  var b = document.getElementById("myTB2").value;
  var height = document.getElementById("myTHeight").value;
  var calculate = a+b;
  var calc2 = height/2;
  var calc3 = calculate*calc2;
  var answer = calc3.toFixed(2);
    return answer + " un<sup>2</sup>";
}
const myArea7 = ( ) => {
  document.getElementById("demo7").innerHTML = area7( );
};

// REGULAR PENTAGON 
const area8 = ( ) => {
  var side = document.getElementById("myPentaSide").value;
  var calculate = 5 * (side) * (side);
  var calc2 = 4 * (Math.tan(Math.PI / 6));
    //calc2's output is in radians 
  var calc3 = calculate/calc2;  
    //calc 3's answer will yield the area.
  var answer = calc3.toFixed(2);
    return answer + " un<sup>2</sup>";
}
const myArea8 = ( ) => {
  document.getElementById("demo8").innerHTML = area8( );
};

// REGULAR HEXAGON 
// EXPRESSIONS INVOLVING SIN, COS, AND TAN:
// YOU MUST CONVERT DEGREES TO RADIANS prior to the trig 
// function being executed. JAVASCRIPT ONLY DEALS WITH RADIANS FOR 
// INPUT AND OUPTPUT, SO YOU MUST CONVERT degrees to radians by mult the degrees by pi/180.
const area9 = ( ) => {
  var side = document.getElementById("myHexaSide").value;
  var calculate = 3*(side)*(side);
  var calc2 = Math.tan(Math.PI / 3);
  var calc3 = calculate / calc2;
  var answer = calc3.toFixed(2);
    return answer + " un<sup>2</sup>";
}
const myArea9 = ( ) => {
  document.getElementById("demo9").innerHTML = area9( );
};

// REGULAR HEPTAGON    
const area10 = ( ) => {
  var side = document.getElementById("myHeptaSide").value;
  var calc2 = Math.tan(64.285 * Math.PI / 180);
    console.log(calc2);
  var calc3 = 1.75 * (side) * (side) * calc2;
  var answer = calc3.toFixed(2);
    return answer + " un<sup>2</sup>";
}
const myArea10 = ( ) => {
  document.getElementById("demo10").innerHTML = area10( );
};

// REGULAR OCTAGON 
const area11 = ( ) => {
  var side = document.getElementById("myOctaSide").value;
  var calculate = Math.tan(67.5 * Math.PI / 180);
    console.log(calculate);
  var calc2 = 2 * (side) * (side);
    console.log(calc2);
  var calc3 = calc2 * calculate;
  var answer = calc3.toFixed(2);
    return answer + " un<sup>2</sup>";
}
const myArea11 = ( ) => {
  document.getElementById("demo11").innerHTML = area11( );
};

