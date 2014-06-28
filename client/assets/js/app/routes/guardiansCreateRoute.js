/* /routes/guardiansCreateRoute.js 
*/
App.GuardiansCreateRoute = Ember.Route.extend({
  model: function(){
    // the model for this route is a new empty Ember.Object
	return this.store.createRecord('guardian');
  },

  // in this case (the create route), we can reuse the user/edit template
  // associated with the usersCreateController
  renderTemplate: function(){
    this.render('guardian.edit', {
      controller: 'guardiansCreate'
    });
  },
  deactivate: function() {
	var model = this.controllerFor('guardians.create').get('model');
	if ( (model.get('isNew') || model.get('isDirty')) && (!model.get('isSaving')) ) {
	  model.rollback();
	}
  }
});
