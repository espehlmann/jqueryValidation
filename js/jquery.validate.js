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

var getFirst = parseInt(document.forms["getNums"]["one"].value);
var getSecond = parseInt(document.forms["getNums"]["three"].value);
$(document).ready(function(){
  $("#getNums").validate({
    rules:{
      first_: {
        required: true,
        min: least,
        max: most
      },
      second_: {
        required: true,
        min: getFirst,
        max: most
      },
      third_: {
        required: true,
        min: least,
        max: most
      },
      fourth_: {
        required: true,
        min: getSecond,
        max: most
      }
    },
    messages: {
      first_: {
        required: "Please enter first number",
        min: "Must be larger than -1000",
        max: "Must be smaller than 1000",
      },
      second_: {
        required: "Please enter first number",
        min: "Must be larger than -1000",
        max: "Must be smaller than 1000",
      },
      third_: {
        required: "Please enter first number",
        min: "Must be larger than -1000",
        max: "Must be smaller than 1000",
      },
      fourth_: {
        required: "Please enter first number",
        min: "Must be larger than -1000",
        max: "Must be smaller than 1000",
      }
    },
  });
})
