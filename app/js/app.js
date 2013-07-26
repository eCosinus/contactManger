var app = angular.module("myApp", []);

app.controller('editCtrl', ['$scope','$routeParams','$location',function($scope,$routeParams,$location){
    var newContact = false;
    if($routeParams.contactId){
        $scope.contact = $scope.contacts[$routeParams.contactId];
    } else {
        $scope.contact = {};
        newContact = true;
    }
    
    $scope.saveContact = function() {
        if (newContact) {
            $scope.contacts.push($scope.contact);
        }
        $location.path("/list");
    }
    
}]);

app.controller('listCtrl', ['$scope',function($scope){
    
}]);
app.controller('ContactCtrl', ['$scope', function($scope) {
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


}]);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/list',{templateUrl:'partials/list.html',controller:'listCtrl'});
    $routeProvider.when('/edit/:contactId',{templateUrl:'partials/edit.html',controller:'editCtrl'})
    $routeProvider.otherwise({redirectTo:'/list'})
}])
app.directive('contact', function(){
   return {
       restrict:'E',
       replace:true,
       templateUrl:'templates/contactWidget.html',
       scope:{
           contact: '='
       }
   } 
});