/* /routes/applicationRoute.js 
*/

// use the provided mixins in the application route
App.ApplicationRoute = Ember.Route.extend(Ember.SimpleAuth.ApplicationRouteMixin).extend({
    
    actions: {
        sessionAuthenticationSucceeded: function() {
            var AUTH_TOKEN = this.get('session.access_token');
            var thisObj = this;
            
            console.log("sessionAuthenticationSucceeded");
            App.FB.auth(AUTH_TOKEN, function(error) {
              if(error) {
                thisObj.invalidateSession();
              } else {
                var attemptedTransition = thisObj.get('session.attemptedTransition');
                if (attemptedTransition) {
                  attemptedTransition.retry();
                  thisObj.set('session.attemptedTransition', null);
                } else {
                  thisObj.transitionTo('index');
                }
              }
            });
        },
        sessionInvalidationSucceeded: function() {
            App.FB.unauth();
            window.location.replace('index.html');
        }
    }
});