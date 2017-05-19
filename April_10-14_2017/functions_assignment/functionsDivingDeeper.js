//JavaScript restaurant
//use the generateMenu() function to get a menu object when you need it

// This is a test order. It should take 8 seconds and should cost $65.
// You can also test your restaurant functions with other menu items.

// Modify the order function of your restaurant to check whether or not the user's ordered items are on the menu. If not, the function should reject the user's order and ask the user to order different items.

// Then, modify all 3 functions so that a user can order any number of items from the restaurant, as long as they are on the menu. You may need to use JavaScript's arguments object to accomplish this.
order('Lobster','Wild Rice','Wine')


// WRITE YOUR CODE BELOW
// Order Function Here:


function order(main, side, drink) {

    if(arguments in generateMenu()){
        console.log("Yes we have that");
    } else {
        console.log("We don't have that")
        cook(main, side, drink);
    }
}

// Cook Function Here:

function cook(main, side, drink){
    let menu = generateMenu();
    let time = 0;
    let totalTime = 0;
    for(let i = 0; i<menu.length; i++){

        if(menu[i].name==main || menu[i].name==side || menu[i].name==drink){
            time += (menu[i].time * 1000);
            totalTime = time / 1000;
        }
        
    }
   console.log("Your meal will be ready in " + totalTime + " seconds.");
    setTimeout(function(){serve(main, side, drink)}, time);
}


// Serve Function Here:
function serve(main, side, drink){
let menu = generateMenu();
let totalPrice = 0;
    for(let i = 0; i<menu.length; i++){

         if(menu[i].name==main || menu[i].name==side || menu[i].name==drink){
            totalPrice += menu[i].price;
            
        }
        
    }
    console.log("Your meal is ready! That'll be $" + totalPrice + ", please.");
}


// function that returns a menu array, no need to modify this function
function generateMenu (){
    return [{
        name:'Steak',
        time:5,
        price:40
    },{
        name:'Burger',
        time:4,
        price:15
    },{
        name:'Shawarma',
        time:4,
        price:20
    },{
        name:'Pizza',
        time:3,
        price:10
    },{
        name:'Sushi',
        time:3,
        price:15
    },{
        name:'Lobster',
        time:5,
        price:50
    },{
        name:'Carpaccio',
        time:5,
        price:25
    },{
        name:'Chicken',
        time:4,
        price:10
    },{
        name:'Wild Rice',
        time:2,
        price:5
    },{
        name:'Fries',
        time:1,
        price:5
    },{
        name:'Baked Potato',
        time:1,
        price:5
    },{
        name:'Salad',
        time:1,
        price:5
    },{
        name:'Coffee',
        time:1,
        price:0
    },{
        name:'Tea',
        time:1,
        price:0
    },{
        name:'Pop',
        time:1,
        price:0
    },{
        name:'Beer',
        time:1,
        price:5
    },{
        name:'Wine',
        time:1,
        price:10
    }]
}
