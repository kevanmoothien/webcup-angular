(function() {

  'use strict';

  function HomeController($scope, Auth,$interval, $http, $state, $sce) {
    var vm = this;
   

    // callable methods on the vm
    vm.signedIn = Auth.isAuthenticated;
    vm.logout = Auth.logout;

    //instantiated info
    activate();

    //defined methods on the vm
    function activate() {
        getCurrentUser();
        $http.get('/posts.json')
        .then(handleSuccess)
        .catch(handleError)
    };

    function getCurrentUser() {
        return Auth.currentUser()
                   .then(setCurrentUser);
    };

    function handleSuccess(response){
        vm.data = response.data;

        for(var i = 0 ; i < vm.data.length; i++){
            if(vm.data[i].post_type == 'video'){
                vm.data[i].image = $sce.trustAsResourceUrl(vm.data[i].image);
            }
        }
        console.log('response: ' , response);
    }

    function handleError(error) {
        console.log(error);
    };

    function setCurrentUser(user) {
        vm.user = user;
        // return vm.user = user;
    };

    vm.openPost = function(postId){
        console.log(postId, 'PostId');
        $state.go('home.post', { id: postId });
    } 


    //event listeners for user authentication and logout
    $scope.$on('devise:new-registration', function(e, user){
        return vm.user = user;
    });
    $scope.$on('devise:login', function(e, user){
        return vm.user = user;
    });
    $scope.$on('devise:logout', function(e, user){
        return vm.user = {};
    });

    //controller method
 $interval(function(){
    var endDate = new Date(2044, 4, 5, 0, 0, 0);
    var todayDate = new Date();
    todayDate.setFullYear(2024);
    $scope.$evalAsync(function(){
        var diff = new Date(endDate.getTime() - todayDate.getTime());
        $scope.day = (diff.getUTCFullYear()- 1970)*365;
        $scope.dayP = (Math.round((diff.getUTCFullYear()- 1970)*365)/73) > 50 ? 'over50 p'+(Math.round((diff.getUTCFullYear()- 1970)*365)/73) : 'p'+(Math.round((diff.getUTCFullYear()- 1970)*365)/73);
        $scope.hour = diff.getUTCHours();
        $scope.hourP = Math.round(diff.getUTCHours()/0.24) > 50 ? 'over50 p'+Math.round(diff.getUTCHours()/0.24) : 'p'+Math.round(diff.getUTCHours()/0.24) ;
        $scope.minute = diff.getUTCMinutes();
        $scope.minuteP = Math.round(diff.getUTCMinutes()/0.60) > 50 ? 'over50 p'+Math.round(diff.getUTCMinutes()/0.60) : 'p'+Math.round(diff.getUTCMinutes()/0.60);
        $scope.second = diff.getUTCSeconds();
        $scope.secondP = Math.round(diff.getUTCSeconds()/0.60) > 50 ? 'over 50 p'+Math.round(diff.getUTCSeconds()/0.60) : 'p'+Math.round(diff.getUTCSeconds()/0.60);
    })
}, 1000);

  };

  angular
    .module('app')
    .controller('HomeController', HomeController);
}());
