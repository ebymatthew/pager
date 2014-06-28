/* /routes/usersCreateRoute.js 
*/
App.UsersCreateRoute = Ember.Route.extend({
  model: function(){
    // the model for this route is a new empty Ember.Object
	return this.store.createRecord('user');
  },

  // in this case (the create route), we can reuse the user/edit template
  // associated with the usersCreateController
  renderTemplate: function() {
    this.render('user.edit', {
      controller: 'usersCreate'
    });
  },
  deactivate: function() {
	var model = this.controllerFor('users.create').get('model');
	if ( (model.get('isNew') || model.get('isDirty')) && (!model.get('isSaving')) ) {
	  model.rollback();
	}
  }
  
});
