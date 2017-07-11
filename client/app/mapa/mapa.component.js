angular
  .module('app')
  .component('mapacomponent', {
    templateUrl: 'html/mapa/mapa.html',
    controller: MapaController
  });


function MapaController(NgMap){



   $http.get(host+'servicios/').success(function(data) {

        console.log('servicios',data)

        $scope.servicios = data


        })

  var vm = this;
  var chicago = new google.maps.LatLng(41.850033, -87.6500523);
  NgMap.getMap().then(function(map) {
    vm.map = map;
  });
  vm.click = function() {
    vm.map.setCenter(chicago);
  };


}
