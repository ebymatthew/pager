/* /controllers/account.js 
*/
App.AccountController = Ember.ObjectController.extend({
  actions: {
    delete: function(){
      // this tells Ember-Data to delete the current account
      this.get('model').deleteRecord();
      this.get('model').save();
      // and then go to the accounts route
      this.transitionToRoute('accounts');
    }
  }
});


//Ember.ArrayController.extend({
//  sortProperties: ['name'],
//  sortAscending: true,
//});
