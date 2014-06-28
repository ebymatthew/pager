App.DetailDisplayComponent = Ember.Component.extend({
  actions: {
    delete: function(){
      this.sendAction('deleteAction');
    }
  }
});