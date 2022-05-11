import { createSlice } from "@reduxjs/toolkit";

type State = {
  allProducts: Array<{
    title: string;
    description: string;
    bgImage: string;
    darkButtonTitle?: string;
    lightButtonTitle?: string;
    type?: string;
  }>;
};

const initialState: State = {
  allProducts: [
    {
      title: "Model S",
      description: "Order Online for touchless delivery",
      darkButtonTitle: "Custom Order",
      lightButtonTitle: "Existing Inventory",
      bgImage: "model-s.jpg",
      type: "car",
    },

    {
      title: "Model X",
      description: "Order Online for touchless delivery",
      darkButtonTitle: "Custom Order",
      lightButtonTitle: "Existing Inventory",
      bgImage: "model-x.jpg",
      type: "car",
    },
    {
      title: "Model Y",
      description: "Order Online for touchless delivery",
      darkButtonTitle: "Custom Order",
      lightButtonTitle: "Existing Inventory",
      bgImage: "model-y.jpg",
      type: "car",
    },

    {
      title: "Model 3",
      description: "Order Online for touchless delivery",
      darkButtonTitle: "Custom Order",
      lightButtonTitle: "Existing Inventory",
      bgImage: "model-3.jpg",
      type: "car",
    },

    {
      title: "Lowest Cost Solar Panels",
      description: "Money back guarantee",
      darkButtonTitle: "Order Now",
      lightButtonTitle: "Learn More",
      bgImage: "solar-panel.jpg",
    },

    {
      title: "Solar for new Roofs",
      description: "Solar Roofs Costs Less Than a New Roof Plus Solar Panels",
      darkButtonTitle: "Order Now",
      lightButtonTitle: "Learn More",
      bgImage: "solar-roof.jpg",
    },

    {
      title: "Accessories",
      description: "Our Most Popular Accessories",
      darkButtonTitle: "Order Now",
      bgImage: "accessories.jpg",
    },
  ],
};

const productsSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
