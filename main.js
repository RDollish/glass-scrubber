const dishes = [
    "Dinner plate", "Water glass", "Salad bowl",
    "Dinner plate", "Wine glass", "Spoon",
    "Spoon", "Fork", "Salad bowl", "Whiskey glass",
    "Fork", "Spoon", "Fork"
]

/*
    Declare three variables to store the string value
    of a glass in the array. Use the correct index to
    get the right value.
*/
Dirty = dishes.filter(element => element.includes("glass"));

console.log("I am cleaning the following glasses:")

// Put each variable in one of the parenthesis below
console.log(Dirty[0])
console.log(Dirty[1])
console.log(Dirty[2])