function initMap() {
	L.mapquest.key = 'omCnAja8aEP7VA98Kg0R6gOUAmJyk39F';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12
	});

	L.marker([32.878805, -117.235921]).addTo(map);
}