var app = angular.module('myApp', ['ngMap']);
app.controller('appCtrl', function($scope,NgMap) {
		$scope.name="Ashok pal"
        
        $scope.logLatLng = function(e) {
          console.log('loc', e.latLng);
        }
         NgMap.getMap({id: 'locomotiveMap'}).then(function(map) {
         	$scope.map = map;
        });

        $scope.displayPoints = function(){
        	// google.maps.event.addListener($scope.map, "drag", function(){
	              // var directionsDisplay = new google.maps.DirectionsRenderer;
	              // var polyline = new google.maps.Polyline({
		             //  strokeColor: '#FF0000',
		             //  strokeOpacity: 0.7,
		             //  strokeWeight: 1
	              // });
              
	              // directionsDisplay.setOptions({polylineOptions: polyline});
	              // directionsDisplay.setMap($scope.map);
	              
	              console.log($scope.map.directionsRenderers[0].directions.routes[0].overview_path)
	              // $scope.displayPoints(map.directionsRenderers[0].directions.routes[0].overview_path);
	              
              // });

        }
   
});