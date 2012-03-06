define([
  'jquery',
  'underscore',
  'backbone',
  'models/job'
], function($, _, Backbone, jobModel){
  var projectsCollection = Backbone.Collection.extend({
    model: jobModel,
    initialize: function(){

    }

  });

  return new projectsCollection;
});