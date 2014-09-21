/* /controllers/usersCreate.js 
*/
App.UsersCreateController = Ember.ObjectController.extend({
  formTitle: "Create New User",
  actions: {
    save: function(){

      // create a record and save it to the store
      var newUser = this.get('model');

      // redirects to the user itself
      this.transitionToRoute('user', newUser.save());
    },
    cancel: function(){
      var user = this.get('model');
  	  if (user.get("isDirty")){
  		user.rollback();
  	  }
      this.transitionToRoute('users');
    }
  }
});
