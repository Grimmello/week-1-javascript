var Doctor = require('./../js/doctor.js').doctorModule;

var showDoctor = function(doctors) {
  for (var i = 0; i < doctors.length; i += 1) {
    try {
      $("#results").append(
          `<div class="panel panel-default">
            <div class="panel-header" role="tab"  id="header+i">
              <h3 class="panel-title">
                doctors[i].profile.first_name  doctors[i].profile.last_name
              </h3>
            </div>
            <div class="panel-body">
              <img src='doctors[i].profile.image_url'>
              <h4>Specialty</h4>
              doctors[i].specialties[0].name
              <h4>Practice</h4>
                doctors[i].practices[0].name
              <h4>Location</h4>
                doctors[i].practices[0].visit_address.street ,  doctors[i].practices[0].visit_address.city doctors[i].practices[0].visit_address.state ,  doctors[i].practices[0].visit_address.zip
              <h4>NPI</h4>
                doctors[i].npi
              <h4>Bio</h4>
                doctors[i].profile.bio
            </div>
          </div>`
    } catch(error) {
      console.log("Failed to get Doctor");
    }
  }
};


$(document).ready(function() {
  var doctorObject = new Doctor();

  $('#search').submit(function() {
    event.preventDefault();
    $('#results').empty();
    var firstName = $('#firstName').val().replace(" ", "-");
    var lastName = $('#lastName').val().replace(" ", "-");
    var city = $('#city').val().toLowerCase().replace(" ", "-");
    var state = $('#state').val();
    $('#firstName').val("");
    $('#lastName').val("");
    $('#city').val("");
    doctorObject.getDoctor(firstName, lastName, city, state, showDoctor);
  });
});
