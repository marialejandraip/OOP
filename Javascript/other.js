const bread = ['potato bread', 'sesame bread', 'white bread'];
const vegetables = ['tomato', 'onion', 'lettuce', 'eggplant', 'mushrooms', 'bellpepper'];
const sauce = ['mayonnaise', 'ketchup', 'mustard', 'barbecue', 'chipotle', 'hotsauce'];

const list = ['potato bread', 'tomato', 'onion', 'ketchup', 'cheedar', 'beef', 'potato bread']

function balancedBurgerScore(ingredientsList) {
    let valueBalanced = 0;
    let contain = 2
    const containBread = bread.every(element => {  
        ingredientsList.includes(element)
    })
    console.log(containBread);
    if(containBread === true){
        valueBalanced = valueBalanced + 1 
        return valueBalanced
    }
    const containVegetable = vegetables.every(element => {
        return ingredientsList.includes(element)
    })
     if (containVegetable){
        valueBalanced = valueBalanced+1
    }
    return valueBalanced
 "A list of ingredients is required"
}