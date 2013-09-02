

		
	function initialize() {
	  var mapOptions = {
		zoom: 15,
		disableDefaultUI: true,
		zoomControl: false,
		scrollwheel: false,
		center: new google.maps.LatLng(55.007963, -1.59589),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	  }
	  var map = new google.maps.Map(document.getElementById('map-canvas'),
									mapOptions);

	  var image = 'img/map-icon.png';
	  var myLatLng = new google.maps.LatLng(55.007963, -1.59589);
	  var beachMarker = new google.maps.Marker({
		  position: myLatLng,
		  map: map,
		  icon: image
	  });
	}

	google.maps.event.addDomListener(window, 'load', initialize);

	