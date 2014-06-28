/* /routes/childEditRoute.js 
*/
App.ChildEditRoute = Ember.Route.extend({
  model: function(){ 
    return this.modelFor('child');
  },
  deactivate: function() {
	var model = this.controllerFor('child.edit').get('model');
	if ( (model.get('isNew') || model.get('isDirty')) && (!model.get('isSaving')) ) {
	  model.rollback();
	}
  }
});
