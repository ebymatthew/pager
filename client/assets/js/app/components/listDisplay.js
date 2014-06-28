App.ListDisplayComponent = Ember.Component.extend({
  itemCount: function(){
    return this.get('items.length');
  }.property('items.@each')
});