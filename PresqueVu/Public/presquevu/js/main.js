var app = app || {
    View: {},
    Logic: {},
    Session: {}
};
var position;

$(document).ready(function () { 
    app.View.initialize = function () {
        template = _.template( $('#loginPage').html() );
        $('#main_container').html(template( {name: '', day:''} ));
        app.Logic.getLocation();
        $('#enterLoginInfo').on('click', function () {
            var name = $('#name').val();            
            app.Logic.addUserToPeople(name, position);
        });
    };
    app.Logic.addUserToPeople = function (name, position) {
        var peopleRef = new Firebase("https://presquevu.firebaseio.com/geolocation/" + name );
        peopleRef.push({
            location: position
        });
    };
    
    app.Logic.getUserLocation = function (user_id) {
        var location;
        var userLocation = new Firebase('https://presquevu.firebaseio.com/geolocation/' + user_id );
        userLocation.on('value', function (snapshot) {
            if (snapshot.val() === null) {
                //alert('User ' + user_id +  'does not exist.');
            } else {
                location = snapshot.val().location;
                console.log('User ' + user_id + "'s location is: " + location);
            }
        });
    };
    app.Logic.getLocation = function () {
        console.log("in get loc");

        if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(success);        
        }

        function success(pos) {
            var crd = pos.coords;            
            position = crd.latitude.toString() + "," + crd.longitude.toString();
            console.log(position);
            console.log('Your current position is:');
            console.log('Latitude : ' + crd.latitude);
            console.log('Longitude: ' + crd.longitude);
            console.log('More or less ' + crd.accuracy + ' meters.');
        };


    };
    window.onload = app.View.initialize();
});