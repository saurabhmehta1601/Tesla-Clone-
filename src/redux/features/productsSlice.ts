import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [
    {
      title: "Model S",
      description: "Order Online for touchless delivery",
      darkButtonTitle: "Custom Order",
      lightButtontitle: "Existing Inventory",
      bgImage: "model-s.jpg",
    },

    {
      title: "Model Y",
      description: "Order Online for touchless delivery",
      darkButtonTitle: "Custom Order",
      lightButtontitle: "Existing Inventory",
      bgImage: "model-y.jpg",
    },

    {
      title: "Accessories",
      description: "Our Most Popular Accessories",
      darkButtonTitle: "Order Now",
      bgImage: "accessories.jpg",
    },

    {
      title: "Model 3",
      description: "Order Online for touchless delivery",
      darkButtonTitle: "Custom Order",
      lightButtontitle: "Existing Inventory",
      bgImage: "model-3.jpg",
    },

    {
      title: "Model X",
      description: "Order Online for touchless delivery",
      darkButtonTitle: "Custom Order",
      lightButtontitle: "Existing Inventory",
      bgImage: "model-x.jpg",
    },

    {
      title: "Lowest Cost Solar Panels",
      description: "Money back guarantee",
      darkButtonTitle: "Order Now",
      lightButtontitle: "Learn More",
      bgImage: "solar-panel.jpg",
    },

    {
      title: "Solar for new Roofs",
      description: "Solar Roofs Costs Less Than a New Roof Plus Solar Panels",
      darkButtonTitle: "Order Now",
      lightButtontitle: "Learn More",
      bgImage: "solar-roof.jpg",
    },
  ],
};

const productsSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
