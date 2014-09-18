/* /routes/accountEditRoute.js 
*/
App.Account2EditRoute = Ember.Route.extend({
  model: function(){ 
    return this.modelFor('account2');
  },
  deactivate: function() {
	var model = this.controllerFor('account2.edit').get('model');
	if ( (model.get('isNew') || model.get('isDirty')) && (!model.get('isSaving')) ) {
	  model.rollback();
	}
  }
});
