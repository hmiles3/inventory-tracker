const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const salesSchema = new Schema({
    order : [ 
        {name:"Ginger Champagne", id:0},
        {name:"Potato and Cheese Frittata", id:1},
        {name:"Eggnog Thumbprints", id: 2},
        {name:"Succulent Pork Roast", id: 3},
        {name:"Irish Champ", id: 4},
        {name:"Chocolate-Cherry Thumbprints", id: 5},
        {name:"Mean Woman Pasta", id: 6},
        {name:"Hot Spiced Cider", id: 7},
        {name:"Isa's Cola de Mono", id: 8},
        {name:"Amy's Barbecue Chicken Salad", id: 9}
    ],
    dataPoints:  [
        { x: 1, y: 30 },
        { x: 2, y: 35 },
        { x: 3, y: 33 }
    ]
});

const Sales = mongoose.model("Sales", salesSchema)

module.exports = Sales;