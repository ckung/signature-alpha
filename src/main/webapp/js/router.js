// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/main',
  'views/guest/login',
  'views/guest/jobList'
], function($, _, Backbone, mainHomeView, loginView, jobsView ){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'login': 'showLogin',
      'jobs': 'showJobs',
      // Default
      '*actions': 'defaultAction'
    },
    showLogin: function(){

    	loginView.render();
    },
    showJobs: function(){

    	jobsView.render();
    },
    defaultAction: function(actions){
      // We have no matching route, lets display the home page
      mainHomeView.render();
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
