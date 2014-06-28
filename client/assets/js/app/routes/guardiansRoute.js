/* /routes/guardiansRoute.js 
*/
App.GuardiansRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('guardian');
  }
});
