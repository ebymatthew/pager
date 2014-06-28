/* /controllers/userEditController.js 
*/
App.UserEditController = Ember.ObjectController.extend({
  formTitle: "Edit User",
  actions: {
    save: function(){
      var user = this.get('model');
      // this will tell Ember-Data to save/persist the new record
      user.save();
      // then transition to the current user
      this.transitionToRoute('user', user);
    },
    cancel: function(){
      var user = this.get('model');
	  if (user.get("isDirty")){
		user.rollback();
	  }
      this.transitionToRoute('user', user);
    }
  }
});
