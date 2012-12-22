(function() {
  var Tailor = {

    create : function(decorator_functions) {
      if (!(decorator_functions instanceof Object)) {
        throw 'The argument must be a Object';
      }

      var Decorator = function(model) {
        this.model = model;
      };

      for (fn in decorator_functions) {
        Decorator.prototype[fn] = decorator_functions[fn];
      }

      return Decorator;
    }

  };

  window.Tailor = Tailor;
})();