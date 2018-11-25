/*
 COMP 4610 91.61 GUI Programming I
 Erika Spehlmann erika_spehlmann@student.uml.edu
 Last updated: November 25, 2018
 Copyright (c) 2018 by Erika Spehlmann. All rights reserved.
This webpage validates a form for a multiplication table using jQuery
*/


//to check min and max values
var least = -1000;
var most = 1000;


$(document).ready(function(){
  var getFirst = Number(document.forms["getNums"]["one"].value);
  var getSecond = Number(document.forms["getNums"]["three"].value);
  $("#getNums").validate({
    rules:{
      one: {
        required: true,
        min: least,
        max: most
      },
      two: {
        required: true,
        min: getFirst,
        max: most
      },
      three: {
        required: true,
        min: least,
        max: most
      },
      four: {
        required: true,
        min: getSecond,
        max: most
      }
    },
    messages: {
      one: {
        required: "Please enter first number",
        min: "Must be larger than -1000",
        max: "Must be smaller than 1000",
      },
      two: {
        required: "Please enter first number",
        min: "Must be larger than -1000",
        max: "Must be smaller than 1000",
      },
      three: {
        required: "Please enter first number",
        min: "Must be larger than -1000",
        max: "Must be smaller than 1000",
      },
      four: {
        required: "Please enter first number",
        min: "Must be larger than -1000",
        max: "Must be smaller than 1000",
      }
    },
  });
})
