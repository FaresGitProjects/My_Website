console.log("Start");
// $("res-button").on("click", function() {
//     console.log("inner");
//     document.getElementsByClassName("body-container").fadeToggle("slow", function () {
//         $("#resume-body").fadeToggle("slow");
//     });
//     console.log("outer");
// })
// console.log("exiting");
function fadeIn(element) {
  console.log("3");
  var op = 0.1; // initial opacity
  var timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer);
      console.log("4");
    }
    element.opacity = op;
    op += 0.1;
  }, 10);
}

// function fadeOutAndfadeIn(container, newtainer){
//     container = document.getElementsByClassName("body-container")[2];
//     newtainer = document.getElementById("resume-body");
//     console.log("1");
// 	var opacity = 1;
// 	var timer = setInterval(function(){
//         console.log("2");
// 		if(opacity < 0.1){
// 			clearInterval(timer);
// 			//swap the image, and fadeIn, which is the same as above function
// 			container = newtainer;
// 			fadeIn(newtainer);
// 		}
// 		newtainer.opacity = opacity;
// 		opacity -=  0.1;
// 	}, 50);
// }
// $("#res-button").on("click", fadeOutAndfadeIn);

$("#res-button").on("click", function () {
  $(".body-container")
    .fadeOut(250)
    .promise()
    .done(function () {
      $("#resume-body").fadeIn(250);
    });
});
$("#abt-button").on("click", function () {
  $(".body-container")
    .fadeOut(250)
    .promise()
    .done(function () {
      $("#about-body").fadeIn(250);
    });
});
$("#ctc-button").on("click", function () {
  $(".body-container")
    .fadeOut(250)
    .promise()
    .done(function () {
      $("#contact-body").fadeIn(250);
    });
});
$("#prj-button").on("click", function () {
  $(".body-container")
    .fadeOut(250)
    .promise()
    .done(function () {
      $("#project-body").fadeIn(250);
    });
});



// OBTAIN FORM DATA

function getData() {
  var sendData = new FormData();

  var fetchedData = document.querySelectorAll(
    "#name-box, #email-box, #subject-box, #message-box"
  );
  for (field of fetchedData) {
    sendData.append(field.name, field.value);
  }


  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://127.0.0.1:5000");
  //    THIS NEEDS TO BE CHANGED ON THE SERVER ^^^^^^^
  xhr.onload = function () {
    console.log(this.response);
  };
  xhr.send(sendData);

  console.log("Running Clear");
  document.getElementById("contact-form").reset(); 
  window.alert("Message Sent! I look forward to responding!");
}
