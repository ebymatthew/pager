/* /controllers/childrenCreate.js 
*/
App.ChildrenCreateController = Ember.ObjectController.extend({
  formTitle: "Create New Child",
  actions: {
    save: function(){
      // create a record and save it to the store
      var newChild = this.get('model');
      
      // redirects to the child itself
      this.transitionToRoute('child', newChild.save());
    },
    cancel: function(){
      var child = this.get('model');
      if (child.get("isDirty")){
    	  child.rollback();
      }
      this.transitionToRoute('children');
    }
  }
});
