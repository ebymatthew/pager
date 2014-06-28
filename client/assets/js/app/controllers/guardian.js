/* /controllers/guardianController.js 
*/
App.GuardianController = Ember.ObjectController.extend({
  actions: {
    delete: function(){
      // this tells Ember-Data to delete the current guardian
      this.get('model').deleteRecord();
      this.get('model').save();
      // and then go to the users route
      this.transitionToRoute('guardians');
    }
  }
});
