# Tailor.js
## Suit up your models

Extend your app models with view-related functions.

### Usage
Use Tailor.js to create decorator for your app models, using `Tailor.create` and passing an object with the methods you want to define:

```javascript
product = {
  name : 'JavaScript: The Good Parts',
  price : 23.99,
  description : 'Unearthing the Excellence in JavaScript'
};

ProductDecorator = Tailor.create({
  price : function(unit) {
    if (unit == null) {
      unit = '$';
    }

    return unit + " " + this.model.price;
  }
});
```

Inside the methods of your decorator you can use `this.model` to access the attributes defined in your model.

And use the decorator this way:

```javascript
decoratedProduct = new ProductDecorator(product);

decoratedProduct.price(); //"$ 23.99"
decoratedProduct.price('USD'); //"USD 23.99"
```

You can still access the model's attributes through the `model` attribute in the decorator:

```javascript
decoratedProduct.model.price //23.99
decoratedProduct.model.name //"JavaScript: The Good Parts"
```