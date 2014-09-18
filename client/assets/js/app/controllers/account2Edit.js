/* /controllers/accountEditController.js 
*/
App.Account2EditController = Ember.ObjectController.extend({
  formTitle: "Edit Account",
  actions: {
    save: function(){
      var account = this.get('model');
      // this will tell Ember-Data to save/persist the new record
      account.save();
      // then transition to the current account
      this.transitionToRoute('account2');
    },
    cancel: function(){
      var account = this.get('model');
      if (account.get("isDirty")){
        account.rollback();
	    }
      this.transitionToRoute('account2');
    }
  }
});
