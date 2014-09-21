/* /controllers/guardiansCreate.js 
*/
App.GuardiansCreateController = Ember.ObjectController.extend({
  formTitle: "Create New Guardian",
  actions: {
    save: function(){
      // create a record and save it to the store
      var newGuardian = this.get('model');

      // redirects to the guardian itself
      this.transitionToRoute('guardian', newGuardian.save());
    },
    cancel: function(){
      var guardian = this.get('model');
      if (guardian.get("isDirty")){
    	guardian.rollback();
      }
      this.transitionToRoute('guardians');
    }
  }
});
