

	  //Initialize Firebase
	var config = {
	apiKey: "AIzaSyBKxmqtm3lsxPpPsvFk2PjjJdWeP6yI2s4",
	authDomain: "trainscheduler-297da.firebaseapp.com",
	databaseURL: "https://trainscheduler-297da.firebaseio.com",
	projectId: "trainscheduler-297da",
	storageBucket: "trainscheduler-297da.appspot.com",
	messagingSenderId: "408157151842"};
	firebase.initializeApp(config);

var url = "https://trainscheduler-297da.firebaseio.com/";
var database = firebase.database();

// var dataRef = new firebase(url);
var trainName = "";
var destination = "";
var frequency = "";
var frequencyMin = "";
var firstTrainTime = "";
var nextArrival = "";
var nextArrivalFormatted = "";
var minAway = "";
var firstConversion = "";
var keyHiolder = "";
var getKey = "";
var currentTime = "";
var diffTime = "";
var tRemainder = '';
var minutesTillTrain = '';
var keyHolder = '';
var getKey = '';

$(document).ready(function() {
//gets the user info to send to fb database


	$("#add-train-btn").on("click", function(event) {
	  event.preventDefault();
	  // Grabs user input
	  var trainName = $("#train-name-input").val().trim();
	  var destination = $("#destination-input").val().trim();
	  frequency = $('#frequency-input').val().trim();
	    firstTimeConverted = moment(firstTrainTime, "HH:mm").subtract(1, "years");
          currentTime = moment();
          diffTime = moment().diff(moment(firstTimeConverted), "minutes");
          tRemainder = diffTime % frequency;
          minutesAway = frequency - tRemainder;
          nextTrain = moment().add(minutesTillTrain, + "minutes");
          nextArrivalFormatted = moment(nextArrival).format("HH:mm");
	   			frequencyMin = moment($("#frequency-input").val().trim();("HH:mm").format("X"));

	  var nextArrival = $("#nextArrival-input").val().trim();
	  var minAway = $("#minAway-input").val().trim();
	  // Creates local "temporary" object for holding employee data
	  var newTrain = {
	    name: trainName,
	    destination: destination,
	    frequency: frequencyMin,
	    arrival: nextArrival,
	    minutes: minAway
	  };
	  console.log(newTrain);
	  database.ref().push(newTrain);
	// Logs everything to console
	  console.log(newTrain.name);
	  console.log(newTrain.destination);
	  console.log(newTrain.frequency);
	  console.log(newTrain.arrival);
	  console.log(newTrain.minutes);
	  //alert
	  alert("Employee successfully added");
	  //clears text inputs for new user data
	  $("#train-name-input").val("");
	  $("#destination-input").val("");
	  $("#frequency-input").val("");
	  $("#nextArrival-input").val("");
	  $("#minAway-input").val("");

	  return false;
	});

dataRef.on("child_added", function(childSnapshot) {


		$('.train-schedule').append("<tr class='firebase' id=" + "'" + childSnapshot.key() + "'" + ">" +

               "<td class='firebase'>" + childSnapshot.val().name +
               "</td>" +
               "<td class='firebase'>" + childSnapshot.val().destination +
               "</td>" +
               "<td class='firebase'>" + childSnapshot.val().frequency +
               "</td>" +
               "<td class='firebase'>" + childSnapshot.val().nextTrainFormatted + // Next Arrival Formula ()
               "</td>" +
               "<td class='firebase'>" + childSnapshot.val().minutesTillTrain + // Minutes Away Formula
               "</td>" +
               "<td class='firebase'>" + "<input type='submit' value='remove train' class='remove-train btn btn-primary btn-sm'>" + "</td>" +
          "</tr>");

}, function(errorObject){


});



$("body").on("click", ".remove-train", function(){

     $(this).closest ('tr').remove();

     getKey = $(this).parent().parent().attr('id');

     dataRef.child(getKey).remove();

});


});