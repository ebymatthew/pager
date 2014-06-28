App.EditFormComponent = Ember.Component.extend({
  actions: {
	save: function(){
	    this.sendAction('saveAction');
	},
    cancel: function(){
        this.sendAction('cancelAction');
    }
  }
});