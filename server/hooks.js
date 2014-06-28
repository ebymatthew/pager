function buildLinks(prefix, links) {
  var result = {};
  links.forEach( function(value) {
    result[value] = prefix + value;
  });
  return result;
}

function wrapName2(model, nameSingular, namePlural, links) {
  return function(ctx, user, next) {
    if(ctx.result) {
      var wrappedResult = {};
      if(Array.isArray(ctx.result)) {
        ctx.result.forEach(function (result) {
          
          //model
          
          
          result.links = buildLinks("/" + namePlural + "/" + result.id + "/", links);
        });
        wrappedResult = {};
        wrappedResult[namePlural] = ctx.result;
        ctx.result = wrappedResult;
      }
      else {
        wrappedResult = {};
        wrappedResult[nameSingular] = ctx.result;
        ctx.result = wrappedResult;
        
      };
    }
    next();
  };
}

function wrapName(nameSingular, namePlural, links) {
  return function(ctx, user, next) {
    if(ctx.result) {
      var wrappedResult = {};
      if(Array.isArray(ctx.result)) {
        ctx.result.forEach(function (result) {
          result.links = buildLinks("/" + namePlural + "/" + result.id + "/", links);
        });
        wrappedResult = {};
        wrappedResult[namePlural] = ctx.result;
        ctx.result = wrappedResult;
      }
      else {
        wrappedResult = {};
        wrappedResult[nameSingular] = ctx.result;
        ctx.result = wrappedResult;
        
      };
    }
    next();
  };
}

function wrapToJSON(model, links) {
  return function() {
    var result = this.toJSONOrig();
    
    model.findById(result.id, function(err, child) {
      links.forEach( function(value) {
        var ids = [];
        
        child.guardians(null, function(err, guardians) {
          result[value] = guardians;
        });
      });
    });
    return result;
  };
}

exports.wrapName = wrapName;
exports.wrapToJSON = wrapToJSON;