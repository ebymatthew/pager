/* /mixins/authorizedRouteMixin.js 
*/

var AuthorizedRouteMixin = Ember.Mixin.create({
  beforeModel: function(transition) {
    if (!this.get('session.isAuthenticated')) {
        transition.abort();
        this.set('session.attemptedTransition', transition);
        transition.send('authenticateSession');
      }
    
    if (!this.get('session.profile.admin')) {
      transition.abort();
      this.set('session.attemptedTransition', transition);
    }
  }
});