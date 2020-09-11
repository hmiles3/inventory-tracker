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
          thumbnail: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F25473.jpg",
          ingredients: "champagne, ginger, ice, vodka",
          dataPoints: [
                { x: 1, y: 30 },
                { x: 2, y: 35 },
                { x: 3, y: 33 }
          ]
      },
      {
        title: "Potato and Cheese Frittata",
        id: 1,
        thumbnail: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1018997.jpg&w=596&h=596&c=sc&poi=face&q=85",
        ingredients: "cheddar cheese, eggs, olive oil, onions, potato, salt",
        dataPoints: [
              { x: 1, y: 30 },
              { x: 2, y: 35 },
              { x: 3, y: 33 }
        ]
    },
    {
        title: "Eggnog Thumbprints",
        id: 2,
        thumbnail: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F55007.jpg&w=596&h=596&c=sc&poi=face&q=85",
        ingredients: "brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar",
        dataPoints: [
              { x: 1, y: 30 },
              { x: 2, y: 35 },
              { x: 3, y: 33 }
        ]
    },
    {
        title: "Succulent Pork Roast",
        id: 3,
        thumbnail: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F11665.jpg&q=85",
        ingredients: "brown sugar, garlic, pork chops, water",
        dataPoints: [
              { x: 1, y: 30 },
              { x: 2, y: 35 },
              { x: 3, y: 33 }
        ]
    },
    {
        title: "Irish Champ",
        id: 4,
        thumbnail: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8429.jpg&w=596&h=596&c=sc&poi=face&q=85",
        ingredients: "black pepper, butter, green onion, milk, potato, salt",
        dataPoints: [
              { x: 1, y: 30 },
              { x: 2, y: 35 },
              { x: 3, y: 33 }
        ]
    },
    {
        title: "Chocolate-Cherry Thumbprints",
        id: 5,
        thumbnail: "https://i.pinimg.com/236x/bb/4b/ca/bb4bcaa6bbebd19eb821b738b71c3835--chocolate-thumbprint-cookies-chocolate-cookies.jpg",
        ingredients: "cocoa powder, baking powder, butter, eggs, flour, oats, salt, sugar, vanilla extract",
        dataPoints: [
              { x: 1, y: 30 },
              { x: 2, y: 35 },
              { x: 3, y: 33 }
        ]
    },
    {
        title: "Mean Woman Pasta",
        id: 6,
        thumbnail: "https://lh6.ggpht.com/uBYaVwV5qGbAg4hsi7C4NRKB3kFUEEKIDVsoHmuCDm37BnJfP5KnIzxIbYjS4nniwUnai_OtOhF20K_mCoyc=s343-c-rj-v1-e365",
        ingredients: "garlic, kalamata olive, olive oil, pepperoncini, seashell pasta, tomato",
        dataPoints: [
              { x: 1, y: 30 },
              { x: 2, y: 35 },
              { x: 3, y: 33 }
        ]
    },
    {
        title: "Hot Spiced Cider",
        id: 7,
        thumbnail: "https://lh5.ggpht.com/Nns9_8ao4Vbm1Pc3m2yM3YUpLqnj3tp8CV4KKKZIwURUcg0fBd9wpKI2O1aHPcGv9kLih5oFBxNV7pRnf6Ed9Q=s343-c-rj-v1-e365",
        ingredients: "allspice, apple cider, brown sugar, cinnamon, cloves, nutmeg, orange, salt",
        dataPoints: [
              { x: 1, y: 30 },
              { x: 2, y: 35 },
              { x: 3, y: 33 }
        ]
    },
    // {
    //     title: "Isa's Cola de Mono",
    //     id: 8,
    //     thumbnail: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1053744.jpg",
    //     ingredients: "cinnamon, cloves, instant coffee, milk, rum, vanilla extract, water, sugar",
    //     dataPoints: [
    //           { x: 1, y: 30 },
    //           { x: 2, y: 35 },
    //           { x: 3, y: 33 }
    //     ]
    // },
    {
        title: "Amy's Barbecue Chicken Salad",
        id: 9,
        thumbnail: "https://images.media-allrecipes.com/userphotos/300x300/1119077.jpg",
        ingredients: "barbecue sauce, chicken, cilantro, lettuce, ranch dressing, lettuce, tomato",
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