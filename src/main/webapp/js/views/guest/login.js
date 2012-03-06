// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/guest/loginForm.html'

], function($, _, Backbone, signupTemplate){
  var signupView = Backbone.View.extend({
    el: $("#page"),
    initialize: function(){
     
    },
    exampleBind: function( model ){
      //console.log(model);
    },
    render: function(){
        this.el.html(signupTemplate);
      }
  });
  return new signupView;
});
