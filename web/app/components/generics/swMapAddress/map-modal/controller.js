(function () {
    'use strict';

    module.exports = [
        '$scope',
        '$uibModalInstance',
        'bootBoxService',
        'address',
        '$log',
        function CropImageModal($scope, $uibModalInstance, bootBoxService, address, $log) {
            var self = this;

            self.address = address;
            self.showMap = true;

            self.map = {
                searchbox: {
                    template: 'searchbox.tpl.html',
                    events: {
                        places_changed: placesChanged
                    }
                },
                events: {
                    dblclick: getLatLong
                },
                options: {
                    scrollwheel: false,
                    disableDoubleClickZoom: true
                },
                zoom: 14,
                center: {
                    latitude: -29.7537583,
                    longitude: -51.1458786
                }
            };

            self.marker = {
                id: 0,
                coords: {
                    latitude: undefined,
                    longitude: undefined
                }
            };

            self.ok = function () {
                $uibModalInstance.close({
                    address: self.address
                });
            };

            self.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };

            function placesChanged(searchBox) {
                var places = searchBox.getPlaces();

                if (places && places.length > 0) {
                    var place = places[0];
                    var goPlace;

                    if (place.geometry.viewport) {
                        self.map.bounds = {
                            northeast: {
                                latitude: place.geometry.viewport.getNorthEast().lat(),
                                longitude: place.geometry.viewport.getNorthEast().lng()
                            },
                            southwest: {
                                latitude: place.geometry.viewport.getSouthWest().lat(),
                                longitude: place.geometry.viewport.getSouthWest().lng()
                            }
                        };
                    } else {
                        self.map.center = {
                            latitude: place.geometry.location.lat(),
                            longitude: place.geometry.location.lng()
                        };
                    }
                }
            }

            function getLatLong(event, eventType, latLong, teste) {
                var latLng = {
                    latitude: latLong[0].latLng.lat(),
                    longitude: latLong[0].latLng.lng()
                };

                $.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latLng.latitude + ',' + latLng.longitude + '&sensor=true',
                    function (data) {
                        setAdress(data, latLng);
                    });
            }

            function setAdress(data, latLng) {
                if (data.status === "OK") {
                    self.lastAddress = self.address;
                    self.address = {};

                    self.marker.coords.latitude = latLng.latitude;
                    self.marker.coords.longitude = latLng.longitude;

                    self.address.Coordinates = {
                        type: 'Point',
                        coordinates: [latLng.latitude, latLng.longitude]
                    };

                    self.address.FormattedAddress = data.results[0].formatted_address;

                    var addressComponents = data.results[0].address_components;

                    addressComponents.forEach(function (data) {
                        if (data.types.find(function (type) { return type === 'street_number'; })) {
                            self.address.Number = data.long_name;
                        }

                        if (data.types.find(function (type) { return type === 'route'; })) {
                            self.address.Street = data.long_name;
                        }

                        if (data.types.find(function (type) { return type === 'sublocality'; })) {
                            self.address.Neighborhood = data.long_name;
                        }

                        if (data.types.find(function (type) { return type === 'locality'; })) {
                            self.address.City = data.long_name;
                        }

                        // Caso não tenha a cidade no tipo 'locality' obter a cidade em 'administrative_area_level_2'
                        if (!self.address.City && data.types.find(function (type) { return type === 'administrative_area_level_2'; })) {
                            self.address.City = data.long_name;
                        }

                        if (data.types.find(function (type) { return type === 'administrative_area_level_1'; })) {
                            self.address.State = data.long_name;
                            self.address.InitialsState = data.short_name;
                        }

                        if (data.types.find(function (type) { return type === 'country'; })) {
                            self.address.Country = data.long_name;
                            self.address.InitialsCountry = data.short_name;
                        }
                    });

                    bootBoxService.confirm('pleaseCheckTheAddressIsThatYouWant', [self.address.FormattedAddress])
                        .then(
                        function (resut) {
                        },
                        function () {
                            self.address = self.lastAddress;
                        });
                }
            }

            function setCenterMap(latitude, longitude) {
                self.map.center.latitude = latitude;
                self.map.center.longitude = longitude;
            }

            function getLocation() {
                if (navigator.geolocation) {
                    navigator.geolocation
                        .getCurrentPosition(function (position) {
                            setCenterMap(position.coords.latitude, position.coords.longitude);
                            $scope.$apply();
                        });
                } else {
                    bootBoxService.alert('geolocationIsNotSupportedByThisBrowser.')
                        .then();
                }
            }

            function init() {
                if (self.address && self.address.Coordinates && self.address.Coordinates.coordinates[0] && self.address.Coordinates.coordinates[1]) {
                    setCenterMap(self.address.Coordinates.coordinates[0], self.address.Coordinates.coordinates[1]);
                    self.marker.coords.latitude = self.address.Coordinates.coordinates[0];
                    self.marker.coords.longitude = self.address.Coordinates.coordinates[1];
                } else {
                    getLocation();
                }

                $uibModalInstance.closed
                    .then(function () {
                        self.showMap = false;
                    });
            }

            self.$onInit = init;
        }
    ];

})();
