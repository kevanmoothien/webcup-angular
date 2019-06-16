(function() {

  'use strict';

  function PostController($scope, Auth, $stateParams, $http, $sce) {
    var vm = this;
    vm.postId = $stateParams.id;

    $http.get('/posts/' + vm.postId + '.json')
        .then(handleSuccess)
        .catch(handleError)


    function handleSuccess(response) {
        
        console.log('this response: ', response);
        vm.post = response.data;
        vm.post_body = $sce.trustAsHtml(response.data.body);
        vm.post.transcript = $sce.trustAsHtml(response.data.transcript);
        
        console.log('pt:' , vm.post.post_type);
        if(vm.post.post_type == 'video'){
            vm.video_url = $sce.trustAsResourceUrl(response.data.image);
        }

        console.log('vmposturl', vm.post.image);
        // return response.data;
    };

    function handleError(error) {
        console.log(error);
    };

    // callable methods on the vm
    vm.signedIn = Auth.isAuthenticated;
    vm.logout = Auth.logout;

    //instantiated info
    activate();

    //defined methods on the vm
    function activate() {
        getCurrentUser();
    };

    function getCurrentUser() {
        return Auth.currentUser()
                   .then(setCurrentUser);
    };

    function setCurrentUser(user) {
        return vm.user = user;
    };

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

  };

  angular
    .module('app')
    .controller('PostController', PostController);
}());
