/* /controllers/childController.js 
*/
App.ChildController = Ember.ObjectController.extend({
  actions: {
    delete: function(){
      // this tells Ember-Data to delete the current child
      this.get('model').deleteRecord();
      this.get('model').save();
      // and then go to the children route
      this.transitionToRoute('children');
    }
  }
});
