/*
 COMP 4610 91.61 GUI Programming I
 Erika Spehlmann erika_spehlmann@student.uml.edu
 Last updated: November 25, 2018
 Copyright (c) 2018 by Erika Spehlmann. All rights reserved.
This webpage validates a form for a multiplication table using jQuery
*/
$( document ).ready( function validate(){
  $("form").validate({
    rules:{
      first_: {
        required: true,
        min: -1000,
        max: 1000
      },
      second_: {
        required: true,
        checkValues: "#one",
        max: 1000
      },
      third_: {
        required: true,
        min: -1000,
        max: 1000
      },
      fourth_: {
        required: true,
        checkValues: "#three",
        max: 1000
      }
    },
    messages: {
      first_: {
        required: "Please enter first number",
        min: "Must be larger than -1000",
        max: "Must be smaller than 1000",
      },
      second_: {
        required: "Please enter second number",
        checkValues: "Must be larger than first number",
        max: "Must be smaller than 1000",
      },
      third_: {
        required: "Please enter third number",
        min: "Must be larger than -1000",
        max: "Must be smaller than 1000",
      },
      fourth_: {
        required: "Please enter fourth number",
        checkValues: "Must be larger than third number",
        max: "Must be smaller than 1000",
      }
    },
  });
});

$.validator.addMethod("checkValues",
function (value, element, param){
  var $otherElement = $(param);
  return parseInt(value, 10) >= parseInt($otherElement.val(), 10);
});

//Function for when submit button is pressed
function myFunction(){
  //check if there is already a table, delete it
  if (document.getElementsByTagName('TABLE').length > 0)
  {
    document.getElementsByTagName("body")[0].removeChild(document.getElementsByTagName("table")[0]);
  }
//  validate();
console.log("in createtable");
//get numbers from form and make sure they are valid, throw errors if not
var h1 = Number(document.forms["getNums"]["one"].value);

var h2= Number(document.forms["getNums"]["two"].value);

var v1 = Number(document.forms["getNums"]["three"].value);

var v2= Number(document.forms["getNums"]["four"].value);


  // Make a table
  var body = document.getElementsByTagName("body")[0];
  var table = document.createElement('TABLE');
  var tblbody = document.createElement('TBODY');

  // append the body to the table
  table.appendChild(tblbody);

 // choose number of cols and rows to be the difference plus two
 var cols = h2-h1 + 2;
 var rows = v2-v1 + 2;

  //use v2 and v1 for rows
  for (var i=0; i<rows; i++){
    var tr =document.createElement('TR');
    tblbody.appendChild(tr);

    //make enough columns for each row
    for (var j = 0; j < cols; j++)
    {
      var td =document.createElement('TD');
      tr.appendChild(td);
      var jOffset = j-1;
      var iOffset = i-1;
      var vert = Number(h1)+jOffset;
      var horiz = Number(v1)+iOffset;

      //these will be the first row and first column
      if (i == 0 || j == 0)
        {
          if (i == 0)
          {
            //top left corner add mult symbol
            if (j == 0)
            {
              td.innerHTML = "X";
            }
            else {
                td.innerHTML = Number(vert);
            }
          }
          if (j == 0)
          {
            if (i > 0)
            {
              td.innerHTML = Number(horiz);
            }
          }
          td.style.fontWeight = "900";
          td.style.backgroundColor = "grey";
        }
      else
      {
        //inner cells - multiply
        td.innerHTML = vert * horiz;
      }
    }
  }
  body.appendChild(table);
  return false;
}

// on click call fundtion aboce
document.getElementById("button").onclick = myFunction;
  body.appendChild(table);
  return false;
}

// on click call fundtion aboce
document.getElementById("button").onclick = myFunction;
