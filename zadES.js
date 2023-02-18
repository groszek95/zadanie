const pizza = {
  baseIngredients: ['dough', 'sauce', 'cheese'],
  additionalIngredients: {
    salami: 3,
    olives: 4,
    ham: 5,
    tuna: 6,
  },
};

const anotherPizza = {
  baseIngredients: ['dough', 'tomato', 'soft cheese'],
  additionalIngredients: {
    anchovies: 10,
    sausage: 3,
    mushrooms: 2,
    onion: 6,
  },
};

function makePizza(name, ingredients) {
  return {
    name: name,
    ingredients: `${ingredients.baseIngredients.toString(' ')},${Object.keys(
      ingredients.additionalIngredients
    )}`.split(','),
    price: Object.values(ingredients.additionalIngredients).reduce(
      (curr, prev) => curr + prev,
      0
    ),
  };
}

console.log('I have made two different pizzas for you:');
console.log(makePizza('Exclusive', pizza));
console.log(makePizza('Premium', anotherPizza));
