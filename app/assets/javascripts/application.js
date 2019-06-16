// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require angular.min
//= require angular-ui-router.min
//= require devise-min
//= require angular-rails-templates
//= require angular-messages.min
//= require bootstrap-sprockets
//= require 'speech.js'
//= require_tree .


if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/service-worker.js', { scope: './' })
        .then(function(reg) {
            console.log('[Companion]', 'Service worker registered!');
            console.log(reg);
        });
}
