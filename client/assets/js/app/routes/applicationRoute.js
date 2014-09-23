/* /routes/applicationRoute.js 
*/

// use the provided mixins in the application route
App.ApplicationRoute = Ember.Route.extend(Ember.SimpleAuth.ApplicationRouteMixin).extend({
  actions: {
    // then this hook will be fired with the error and most importantly a Transition
    // object which you can use to retry the transition after you handled the error
    error: function(error, transition) {
      // handle the error
      if (error && error.status === 401) {
        transition.abort();
        transition.send('invalidateSession');
        return false;
      }

      // Return true to bubble this event to any parent route.
      return true;
    }
  }
});