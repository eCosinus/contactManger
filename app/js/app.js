var app = angular.module("myApp", []);

app.controller('mainCtrl', ['$scope', function($scope) {
    $scope.contact = {};
    $scope.contact = [{
        name: 'Fabien',
        groupe: 'Groupe1',
        adresse: 'Rennes, France',
        mobile: '060000000000'
    },

    {
        name: 'Audrey',
        groupe: 'Groupe1',
        adresse: 'Paris, France',
        mobile: '060000000000'
    }, {
        name: 'Guy',
        groupe: 'Groupe2',
        adresse: 'Bordeaux, France',
        mobile: '060000000000'
    }];


}])