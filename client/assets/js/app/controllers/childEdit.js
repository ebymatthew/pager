/* /controllers/childEditController.js 
*/
App.ChildEditController = Ember.ObjectController.extend({
  formTitle: "Edit Child",
  actions: {
    save: function(){
      var child = this.get('model');
      // this will tell Ember-Data to save/persist the new record
      child.save();
      // then transition to the current child
      this.transitionToRoute('child', child);
    },
    cancel: function(){
      var child = this.get('model');
	  if (child.get("isDirty")){
		child.rollback();
	  }
      this.transitionToRoute('child', child);
    }
  }
});
