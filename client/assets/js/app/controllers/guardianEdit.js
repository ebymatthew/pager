/* /controllers/guardianEditController.js 
*/
App.GuardianEditController = Ember.ObjectController.extend({
  formTitle: "Edit Guardian",
  actions: {
    save: function(){
      var guardian = this.get('model');
      // this will tell Ember-Data to save/persist the new record
      guardian.save();
      // then transition to the current guardian
      this.transitionToRoute('guardian', guardian);
    },
    cancel: function(){
      var guardian = this.get('model');
	  if (guardian.get("isDirty")){
		guardian.rollback();
	  }
      this.transitionToRoute('guardian', guardian);
    }
  }
});
