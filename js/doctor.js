
var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctor = function(firstName, lastName, city, state, showDoctor) {
  var apiUrl = "";
  if (firstName === "") {
    apiUrl = 'https://api.betterdoctor.com/2016-03-01/doctors?last_name=' + lastName + '&location=' + state + '-' + city + '&skip=0&limit=100&user_key=' + apiKey
  } else if (lastName === "") {
    apiUrl = 'https://api.betterdoctor.com/2016-03-01/doctors?first_name=' + firstName + '&location=' + state + '-' + city + '&skip=0&limit=100&user_key=' + apiKey
  } else if (city === "" || state === "") {
    apiUrl = 'https://api.betterdoctor.com/2016-03-01/doctors?first_name=' + firstName + '&last_name=' + lastName + '&skip=0&limit=100&user_key=' + apiKey
  } else {
    apiUrl = 'https://api.betterdoctor.com/2016-03-01/doctors?first_name=' + firstName + '&last_name=' + lastName + '&location=' + state + '-' + city + '&skip=0&limit=100&user_key=' + apiKey
  }
  $.get(apiUrl).then(function(response) {
    if (response.data.length < 1) {
      $('#results').html("<h4>No doctors were found using your search criteria, please try again.</h4>");
    } else {
      showDoctor(response.data);
    }
  }).fail(function(error) {
    $('#results').text("Search Failed");
  });
};

exports.doctorModule = Doctor;
