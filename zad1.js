const defaultPizza = {
  baseIngredients: ['dough', 'sauce', 'cheese'],
  ingredients: {
    chicken: 3,
    salami: 2,
    letuce: 1,
    jalapeno: 2,
  },
};

const makePizza = (name, ingredients) => {
  const allIngredients = [...defaultPizza.baseIngredients, ...ingredients];
  const price = ingredients
    .map((ingredient) => defaultPizza.ingredients[ingredient])
    .reduce((totalPrice, currentPrice) => totalPrice + currentPrice);

  return {
    name,
    allIngredients,
    price,
  };
};

console.log(makePizza('Chicken', ['chicken', 'letuce', 'jalapeno']));
