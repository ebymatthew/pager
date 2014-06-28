/* /routes/userEditRoute.js 
*/
App.UserEditRoute = Ember.Route.extend({
  model: function(){ 
    return this.modelFor('user');
  },
  deactivate: function() {
	var model = this.controllerFor('user.edit').get('model');
	if ( (model.get('isNew') || model.get('isDirty')) && (!model.get('isSaving')) ) {
	  model.rollback();
	}
  }
});
