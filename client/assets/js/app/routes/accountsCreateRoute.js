/* /routes/accountCreateRoute.js 
*/
App.AccountsCreateRoute = Ember.Route.extend({
  model: function(){
    // the model for this route is a new empty Ember.Object
	return this.store.createRecord('account');
  },

  // in this case (the create route), we can reuse the account/edit template
  // associated with the accountsCreateController
  renderTemplate: function(){
    this.render('account.edit', {
      controller: 'accountsCreate'
    });
  },
  deactivate: function() {
	var model = this.controllerFor('accounts.create').get('model');
	if ( (model.get('isNew') || model.get('isDirty')) && (!model.get('isSaving')) ) {
	  model.rollback();
	}
  }
});
