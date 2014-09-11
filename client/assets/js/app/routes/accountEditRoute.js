/* /routes/accountEditRoute.js 
*/
App.AccountEditRoute = Ember.Route.extend({
  model: function(){ 
    return this.modelFor('account');
  },
  deactivate: function() {
	var model = this.controllerFor('account.edit').get('model');
	if ( (model.get('isNew') || model.get('isDirty')) && (!model.get('isSaving')) ) {
	  model.rollback();
	}
  }
});
