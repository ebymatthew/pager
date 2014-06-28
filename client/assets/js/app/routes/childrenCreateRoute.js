/* /routes/childrenCreateRoute.js 
*/
App.ChildrenCreateRoute = Ember.Route.extend({
  model: function(){
    // the model for this route is a new empty Ember.Object
	return this.store.createRecord('child');
  },

  // in this case (the create route), we can reuse the user/edit template
  // associated with the usersCreateController
  renderTemplate: function(){
    this.render('child.edit', {
      controller: 'childrenCreate'
    });
  },
  deactivate: function() {
	var model = this.controllerFor('children.create').get('model');
	if ( (model.get('isNew') || model.get('isDirty')) && (!model.get('isSaving')) ) {
	  model.rollback();
	}
  }
});
