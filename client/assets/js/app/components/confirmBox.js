App.ConfirmBoxComponent = Ember.Component.extend({
    
    isVisibleObserver: function(){                
      if (this.get('isVisible')){
      	this.$('.modal').modal('show');
      }
      else{
      	this.$('.modal').modal('hide');
      }
    }.observes('isVisible'),
    
    actions: {
      clickNo: function(){
        this.toggleProperty('isVisible');
      },
      clickYes: function(){
        this.toggleProperty('isVisible');
        this.sendAction('action');
      }
    }
});