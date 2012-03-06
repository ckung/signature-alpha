// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'collections/jobs',
  'text!templates/guest/jobList.html'

], function($, _, Backbone, projectsCollection, projectListTemplate){
  var projectListView = Backbone.View.extend({
    el: $("#page"),
    initialize: function(){
      this.collection = projectsCollection;
      this.collection.bind("add", this.exampleBind);
      this.collection = projectsCollection.add({ name: "Director of Sales"});
      this.collection = projectsCollection.add({ name: "UX Designer"});
      this.collection = projectsCollection.add({ name: "Project Manager"});
    },
    exampleBind: function( model ){
      //console.log(model);
    },
    render: function(){
      var data = {
        projects: this.collection.models,
        _: _
      };
      var compiledTemplate = _.template( projectListTemplate, data );
      $("#page").html( compiledTemplate );
    }
  });
  return new projectListView;
});