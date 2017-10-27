 ///////////////////////////WHATS NEW IN VERSION 4 /////////////////////////////
 // Camera feature

 var dt = new Date();
 var utcDate = dt.toDateString();
 var peeps1 = 0;
 var peeps2 = 0;
 var peeps3 = 0;
 var peeps4 = 0;
 var peeps5 = 0;

 var waitList1 = "";
 var waitList2 = "";
 var waitList3 = "";
 var waitList4 = "";
 var waitList5 = "";
 /////////////////////////////////Konami Cheat/////////////////////////////////
 var i = 0;

 function runKonami() {
     var easter_egg = new Konami(function() {
         if (i < 1) {
             i++;
             document.getElementById('video-background').style.display = "none";
             document.body.style.backgroundImage = "url('trolley.jpg')";
             var audio = new Audio('1up.wav');
             audio.play();
         } else if (i == 1) {
             i++;
             document.getElementById('video-background').style.display = "none";
             document.body.style.backgroundImage = "url('tiajin.jpg')";
             var audio = new Audio('pipe.wav');
             audio.play();
         } else if (i == 2) {
             i++;
             document.getElementById('video-background').style.display = "none";
             document.body.style.backgroundImage = "url('vienna.jpg')";
             var audio = new Audio('powerup.wav');
             audio.play();
         } else {
             i = 0;
             var audio = new Audio('worldClear.wav');
             audio.play();
             document.getElementById('video-background').style.display = "block";
         }
     });
 }






 /////////////////////////////////ROOM ONE/////////////////////////////////
 function add1(event) {

     if ((peeps1 < 3) && (window.event.keyCode == 13)) {
         var r1Name = document.getElementById('roomOneGuest').value;
         var ol = document.getElementById("r1List");
         var li = document.createElement("li");
         var r1NameFinal = document.createTextNode(r1Name);
         var r1TimeFinal = document.createTextNode("Checked in: " + utcDate);
         var createBreak = document.createElement("br");

         li.appendChild(r1NameFinal);
         li.appendChild(createBreak);
         li.appendChild(r1TimeFinal);

         ol.appendChild(li);
         document.getElementById('roomOneGuest').value = "";
         peeps1++;

         //Removes list item on click
         li.onclick = function() {
             this.parentNode.removeChild(this);
             peeps1 -= 1;
             document.getElementById('fullRoom1').innerHTML = "";
             document.getElementById('roomOneGuest').style.display = "block";
             document.getElementById('guest1Label').style.display = "block";
             document.getElementById('guest1Label').innerHTML = "Guest Name";
             document.getElementById('room1').style.backgroundColor = "rgb(241, 254, 198)";
         };

         if (peeps1 == 3) {
             document.getElementById('room1').style.backgroundColor = "orange";
             document.getElementById('fullRoom1').innerHTML = "Room Full.";
             document.getElementById('guest1Label').innerHTML = "Waitlist guest";
         }
     } else if (window.event.keyCode == 13) {
         var waitList1 = document.getElementById('roomOneGuest').value;
         document.getElementById('fullRoom1').innerHTML = waitList1 + " waitlisted.";
         document.getElementById('roomOneGuest').style.display = "none";
         document.getElementById('guest1Label').style.display = "none";
         document.getElementById('room1').style.backgroundColor = "rgb(255, 58, 32)";
     }
 }


 function remove1All() {
     peeps1 = 0;
     while (r1List.hasChildNodes()) {
         r1List.removeChild(r1List.lastChild);
     }
     document.getElementById('fullRoom1').innerHTML = "";
     document.getElementById('roomOneGuest').style.display = "block";
     document.getElementById('guest1Label').style.display = "block";
     document.getElementById('room1cam').style.display = "block";
     document.getElementById('room1photo').innerHTML = "";
     document.getElementById('guest1Label').innerHTML = "Guest Name";
     document.getElementById('room1').style.backgroundColor = "rgb(241, 254, 198)";
 }


 /////////////////////////////////ROOM TWO/////////////////////////////////
 function add2() {

     if ((peeps2 < 3) && (window.event.keyCode == 13)) {
         var r2Name = document.getElementById('roomTwoGuest').value;
         var ol = document.getElementById("r2List");
         var li = document.createElement("li");
         var r2NameFinal = document.createTextNode(r2Name);
         var r2TimeFinal = document.createTextNode("Checked in: " + utcDate);
         var createBreak = document.createElement("br");

         li.appendChild(r2NameFinal);
         li.appendChild(createBreak);
         li.appendChild(r2TimeFinal);

         ol.appendChild(li);
         document.getElementById('roomTwoGuest').value = "";
         peeps2++;

         //Removes list item on click//
         li.onclick = function() {
             this.parentNode.removeChild(this);
             peeps2 -= 1;
             document.getElementById('fullRoom2').innerHTML = "";
             document.getElementById('roomTwoGuest').style.display = "block";
             document.getElementById('guest2Label').style.display = "block";
             document.getElementById('guest2Label').innerHTML = "Guest Name";
             document.getElementById('room2').style.backgroundColor = "rgb(241, 254, 198)";
         };
         if (peeps2 == 3) {
             document.getElementById('room2').style.backgroundColor = "orange";
             document.getElementById('fullRoom2').innerHTML = "Room Full.";
             document.getElementById('guest2Label').innerHTML = "Waitlist guest";
         }
     } else if (window.event.keyCode == 13) {
         var waitList2 = document.getElementById('roomTwoGuest').value;
         document.getElementById('fullRoom2').innerHTML = waitList2 + " waitlisted.";
         document.getElementById('roomTwoGuest').style.display = "none";
         document.getElementById('guest2Label').style.display = "none";
         document.getElementById('room2').style.backgroundColor = "rgb(255, 58, 32)";
     }

 }


 function remove2All() {
     peeps2 = 0;
     while (r2List.hasChildNodes()) {
         r2List.removeChild(r2List.lastChild);
     }
     document.getElementById('fullRoom2').innerHTML = "";
     document.getElementById('roomTwoGuest').style.display = "block";
     document.getElementById('guest2Label').style.display = "block";
     document.getElementById('room2cam').style.display = "block";
     document.getElementById('room2photo').innerHTML = "";
     document.getElementById('guest2Label').innerHTML = "Guest Name";
     document.getElementById('room2').style.backgroundColor = "rgb(241, 254, 198)";
 }
 //////////////////////////////////ROOM THREE///////////////////////////////
 function add3(event) {

     if ((peeps3 < 3) && (window.event.keyCode == 13)) {
         var r3Name = document.getElementById('roomThreeGuest').value;
         var ol = document.getElementById("r3List");
         var li = document.createElement("li");
         var r3NameFinal = document.createTextNode(r3Name);
         var r3TimeFinal = document.createTextNode("Checked in: " + utcDate);
         var createBreak = document.createElement("br");

         li.appendChild(r3NameFinal);
         li.appendChild(createBreak);
         li.appendChild(r3TimeFinal);

         ol.appendChild(li);
         document.getElementById('roomThreeGuest').value = "";
         peeps3++;

         //Removes list item onclick//
         li.onclick = function() {
             this.parentNode.removeChild(this);
             peeps3 -= 1;
             document.getElementById('fullRoom3').innerHTML = "";
             document.getElementById('roomThreeGuest').style.display = "block";
             document.getElementById('guest3Label').style.display = "block";
             document.getElementById('guest3Label').innerHTML = "Guest Name";
             document.getElementById('room3').style.backgroundColor = "rgb(241, 254, 198)";
         };
         if (peeps3 == 3) {
             document.getElementById('room3').style.backgroundColor = "orange";
             document.getElementById('fullRoom3').innerHTML = "Room Full.";
             document.getElementById('guest3Label').innerHTML = "Waitlist guest";
         }

     } else if (window.event.keyCode == 13) {
         var waitList3 = document.getElementById('roomThreeGuest').value;
         document.getElementById('fullRoom3').innerHTML = waitList3 + " waitlisted.";
         document.getElementById('roomThreeGuest').style.display = "none";
         document.getElementById('guest3Label').style.display = "none";
         document.getElementById('room3').style.backgroundColor = "rgb(255, 58, 32)";
     }

 }



 function remove3All() {
     peeps3 = 0;
     while (r3List.hasChildNodes()) {
         r3List.removeChild(r3List.lastChild);
     }
     document.getElementById('fullRoom3').innerHTML = "";
     document.getElementById('roomThreeGuest').style.display = "block";
     document.getElementById('guest3Label').style.display = "block";
     document.getElementById('guest3Label').innerHTML = "Guest Name";
     document.getElementById('room3cam').style.display = "block";
     document.getElementById('room3photo').innerHTML = "";
     document.getElementById('room3').style.backgroundColor = "rgb(241, 254, 198)";
 }
 /////////////////////////////////ROOM FOUR/////////////////////////////////
 function add4(event) {

     if ((peeps4 < 3) && (window.event.keyCode == 13)) {
         var r4Name = document.getElementById('roomFourGuest').value;
         var ol = document.getElementById("r4List");
         var li = document.createElement("li");
         var r4NameFinal = document.createTextNode(r4Name);
         var r4TimeFinal = document.createTextNode("Checked in: " + utcDate);
         var createBreak = document.createElement("br");

         li.appendChild(r4NameFinal);
         li.appendChild(createBreak);
         li.appendChild(r4TimeFinal);

         ol.appendChild(li);
         document.getElementById('roomFourGuest').value = "";
         peeps4++;
         //Removes list item onclick//
         li.onclick = function() {
             this.parentNode.removeChild(this);
             peeps4 -= 1;
             document.getElementById('fullRoom4').innerHTML = "";
             document.getElementById('roomFourGuest').style.display = "block";
             document.getElementById('guest4Label').style.display = "block";
             document.getElementById('guest4Label').innerHTML = "Guest Name";
             document.getElementById('room4').style.backgroundColor = "rgb(241, 254, 198)";
         };
         if (peeps4 == 3) {
             document.getElementById('room4').style.backgroundColor = "orange";
             document.getElementById('fullRoom4').innerHTML = "Room Full.";
             document.getElementById('guest4Label').innerHTML = "Waitlist guest";
         }
     } else if (window.event.keyCode == 13) {
         var waitList4 = document.getElementById('roomFourGuest').value;
         document.getElementById('fullRoom4').innerHTML = waitList4 + " waitlisted.";
         document.getElementById('roomFourGuest').style.display = "none";
         document.getElementById('guest4Label').style.display = "none";
         document.getElementById('room4').style.backgroundColor = "rgb(255, 58, 32)";
     }

 }



 function remove4All() {
     peeps4 = 0;
     while (r4List.hasChildNodes()) {
         r4List.removeChild(r4List.lastChild);
     }
     document.getElementById('fullRoom4').innerHTML = "";
     document.getElementById('roomFourGuest').style.display = "block";
     document.getElementById('guest4Label').style.display = "block";
     document.getElementById('guest4Label').innerHTML = "Guest Name";
     document.getElementById('room4cam').style.display = "block";
     document.getElementById('room4photo').innerHTML = "";
     document.getElementById('room4').style.backgroundColor = "rgb(241, 254, 198)";
 }
 /////////////////////////////////ROOM FIVE/////////////////////////////////
 function add5(event) {

     if ((peeps5 < 3) && (window.event.keyCode == 13)) {
         var r5Name = document.getElementById('roomFiveGuest').value;
         var ol = document.getElementById("r5List");
         var li = document.createElement("li");
         var r5NameFinal = document.createTextNode(r5Name);
         var r5TimeFinal = document.createTextNode("Checked in: " + utcDate);
         var createBreak = document.createElement("br");

         li.appendChild(r5NameFinal);
         li.appendChild(createBreak);
         li.appendChild(r5TimeFinal);

         ol.appendChild(li);
         document.getElementById('roomFiveGuest').value = "";
         peeps5++;

         //Removes list item onclick//
         li.onclick = function() {
             this.parentNode.removeChild(this);
             peeps5 -= 1;
             document.getElementById('fullRoom5').innerHTML = "";
             document.getElementById('roomFiveGuest').style.display = "block";
             document.getElementById('guest5Label').style.display = "block";
             document.getElementById('guest5Label').innerHTML = "Guest Name";
             document.getElementById('room5').style.backgroundColor = "rgb(241, 254, 198)";
         };

         if (peeps5 == 3) {
             document.getElementById('room5').style.backgroundColor = "orange";
             document.getElementById('fullRoom5').innerHTML = "Room Full.";
             document.getElementById('guest5Label').innerHTML = "Waitlist guest";
         }
     } else if (window.event.keyCode == 13) {
         var waitList5 = document.getElementById('roomFiveGuest').value;
         document.getElementById('fullRoom5').innerHTML = waitList5 + " waitlisted.";
         document.getElementById('roomFiveGuest').style.display = "none";
         document.getElementById('guest5Label').style.display = "none";
         document.getElementById('room5').style.backgroundColor = "rgb(255, 58, 32)";
     }

 }

 function remove5All() {
     peeps5 = 0;
     while (r5List.hasChildNodes()) {
         r5List.removeChild(r5List.lastChild);
     }
     document.getElementById('fullRoom5').innerHTML = "";
     document.getElementById('roomFiveGuest').style.display = "block";
     document.getElementById('guest5Label').style.display = "block";
     document.getElementById('guest5Label').innerHTML = "Guest Name";
     document.getElementById('room5cam').style.display = "block";
     document.getElementById('room5photo').innerHTML = "";
     document.getElementById('room5').style.backgroundColor = "rgb(241, 254, 198)";
 }