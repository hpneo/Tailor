module('Creating a Decorator', {
  setup: function() {

    ProductDecorator = Tailor.create({
      price : function(unit) {
        if (unit == null) {
          unit = '$';
        }

        return unit + " " + this.model.price;
      }
    });

    product = {
      name : 'JavaScript: The Good Parts',
      price : 23.99,
      description : 'Unearthing the Excellence in JavaScript'
    };
    
    decoratedProduct = new ProductDecorator(product);

  },
  teardown: function() {
  }
});

test('should extend a model', function() {
  ok(decoratedProduct instanceof ProductDecorator);
});

test('should present methods defined in constructor', function() {
  equal(decoratedProduct.price(), "$ 23.99");
});

test('should enable access to model attributes', function() {
  equal(decoratedProduct.model.name, 'JavaScript: The Good Parts');
  equal(decoratedProduct.model.price, 23.99);
});