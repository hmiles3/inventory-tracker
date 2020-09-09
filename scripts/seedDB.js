const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/Final-Project"
  );

  const inventory = [
      {
          title: "Ginger Champagne",
          id: 0,
          dataPoints: [
                { x: 1, y: 30 },
                { x: 2, y: 35 },
                { x: 3, y: 33 }
          ]
      },
      {
        title: "Potato and Cheese Frittata",
        id: 1,
        dataPoints: [
              { x: 1, y: 30 },
              { x: 2, y: 35 },
              { x: 3, y: 33 }
        ]
    },
    {
        title: "Eggnog Thumbprints",
        id: 2,
        dataPoints: [
              { x: 1, y: 30 },
              { x: 2, y: 35 },
              { x: 3, y: 33 }
        ]
    },
    {
        title: "Succulent Pork Roast",
        id: 3,
        dataPoints: [
              { x: 1, y: 30 },
              { x: 2, y: 35 },
              { x: 3, y: 33 }
        ]
    },
    {
        title: "Irish Champ",
        id: 4,
        dataPoints: [
              { x: 1, y: 30 },
              { x: 2, y: 35 },
              { x: 3, y: 33 }
        ]
    },
    {
        title: "Chocolate-Cherry Thumbprints",
        id: 5,
        dataPoints: [
              { x: 1, y: 30 },
              { x: 2, y: 35 },
              { x: 3, y: 33 }
        ]
    },
    {
        title: "Mean Woman Pasta",
        id: 6,
        dataPoints: [
              { x: 1, y: 30 },
              { x: 2, y: 35 },
              { x: 3, y: 33 }
        ]
    },
    {
        title: "Hot Spiced Cider",
        id: 7,
        dataPoints: [
              { x: 1, y: 30 },
              { x: 2, y: 35 },
              { x: 3, y: 33 }
        ]
    },
    {
        title: "Isa's Cola de Mono",
        id: 8,
        dataPoints: [
              { x: 1, y: 30 },
              { x: 2, y: 35 },
              { x: 3, y: 33 }
        ]
    },
    {
        title: "Amy's Barbecue Chicken Salad",
        id: 9,
        dataPoints: [
              { x: 1, y: 30 },
              { x: 2, y: 35 },
              { x: 3, y: 33 }
        ]
    },
  ]

db.Sales.remove({})
    .then(() => db.Sales.collection.insertMany(inventory))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
    console.error(err);
    process.exit(1);
    });