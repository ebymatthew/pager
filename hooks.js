function buildLinks(prefix, links) {
  var result = {};
  links.forEach( function(value) {
    result[value] = prefix + value;
  });
  return result;
}

function wrapName(nameSingular, namePlural, links) {
  return function(ctx, user, next) {
    if(ctx.result) {
      if(Array.isArray(ctx.result)) {
        
        ctx.result.forEach(function (result) {
          //result.links = {"guardians": "/" + namePlural + "/" + result.id + "/" + "guardians"};
          result.links = buildLinks("/" + namePlural + "/" + result.id + "/", links);
        });
        var wrappedResult = {};
        wrappedResult[namePlural] = ctx.result;
        ctx.result = wrappedResult;
      }
      else {
        var wrappedResult = {};
        wrappedResult[nameSingular] = ctx.result;
        ctx.result = wrappedResult;
        
      };
    }
    next();
  }
}

exports.wrapName = wrapName;