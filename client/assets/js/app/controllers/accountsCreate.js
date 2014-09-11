/* /controllers/accountsCreate.js 
*/
App.AccountsCreateController = Ember.ObjectController.extend({
  formTitle: "Create New Account",
  actions: {
    save: function(){
      // create a record and save it to the store
      var newAccount = this.get('model');
      newAccount.save();

      // redirects to the account itself
      this.transitionToRoute('account', newAccount);
    },
    cancel: function(){
      var account = this.get('model');
      if (account.get("isDirty")){
    	account.rollback();
      }
      this.transitionToRoute('accountns');
    }
  }
});
