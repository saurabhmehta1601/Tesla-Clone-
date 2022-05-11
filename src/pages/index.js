import styled from "styled-components";
import tw from "twin.macro";
import { Section } from "../components/Section";

export default function Home() {
  return (
    <>
      <Section
        data={{
          title: "Model S",
          description: "Order Online for touchless delivery",
          darkButtonTitle: "Custom Order",
          lightButtontitle: "Existing Inventory",
          bgImage: "model-s.jpg",
        }}
      />
      <Section
        data={{
          title: "Model Y",
          description: "Order Online for touchless delivery",
          darkButtonTitle: "Custom Order",
          lightButtontitle: "Existing Inventory",
          bgImage: "model-y.jpg",
        }}
      />
      <Section
        data={{
          title: "Model 3",
          description: "Order Online for touchless delivery",
          darkButtonTitle: "Custom Order",
          lightButtontitle: "Existing Inventory",
          bgImage: "model-3.jpg",
        }}
      />
      <Section
        data={{
          title: "Model X",
          description: "Order Online for touchless delivery",
          darkButtonTitle: "Custom Order",
          lightButtontitle: "Existing Inventory",
          bgImage: "model-x.jpg",
        }}
      />
      <Section
        data={{
          title: "Lowest Cost Solar Panels",
          description: "Money back guarantee",
          darkButtonTitle: "Order Now",
          lightButtontitle: "Learn More",
          bgImage: "solar-panel.jpg",
        }}
      />
      <Section
        data={{
          title: "Solar for new Roofs",
          description:
            "Solar Roofs Costs Less Than a New Roof Plus Solar Panels",
          darkButtonTitle: "Order Now",
          lightButtontitle: "Learn More",
          bgImage: "solar-roof.jpg",
        }}
      />
      <Section
        data={{
          title: "Accessories",
          description: "Our Most Popular Accessories",
          darkButtonTitle: "Order Now",
          bgImage: "accessories.jpg",
        }}
      />
    </>
  );
}
