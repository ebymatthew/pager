/* /routes/guardianEditRoute.js 
*/
App.GuardianEditRoute = Ember.Route.extend({
  model: function(){ 
    return this.modelFor('guardian');
  },
  deactivate: function() {
	var model = this.controllerFor('guardian.edit').get('model');
	if ( (model.get('isNew') || model.get('isDirty')) && (!model.get('isSaving')) ) {
	  model.rollback();
	}
  }
});
