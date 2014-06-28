App.ConfirmButtonComponent = Ember.Component.extend({
	
  tagName: 'span',
	
  // the deleteMode property is false by default
  deleteMode: false,

  actions: {
    delete: function(){
      // our delete method now only toggles deleteMode's value
      this.toggleProperty('deleteMode');
    },
    confirmDelete: function(){
      this.toggleProperty('deleteMode');
      this.sendAction();
    }
  }
});