import Header from "./Header"
import Section from "./Section"
import React from 'react'
import "./Tesla.css"

function home() {
  return (
    <>
    <Header />
    <Section name="Model 3" description="Order Online for touchless delivery"  leftbutton="Custom Order" rightbutton="Existing Inventory" backgroundImage="model-3.jpg" arrow="true" />
    <Section name="Model Y" description="Order Online for touchless delivery"  leftbutton="Custom Order" rightbutton="Existing Inventory" backgroundImage="model-y.jpg"/>
    <Section name="Model S" description="Order Online for touchless delivery"  leftbutton="Custom Order" rightbutton="Existing Inventory" backgroundImage="model-s.jpg"/>
    <Section name="Model X" description="Order Online for touchless delivery"  leftbutton="Custom Order" rightbutton="Existing Inventory" backgroundImage="model-x.jpg"/>
    <Section name="Solar Panels" description="Lower Cost Solar Panels in India" leftbutton="Order Now" rightbutton="Learn More" backgroundImage="solar-panel.jpg"/>
    <Section name="Solar Roofs" description="Produce Clean Energy from your roof" leftbutton="Order Now" rightbutton="Learn More" backgroundImage="solar-roof.jpg"/>
    <Section name="Accessories" leftbutton="Order Now" backgroundImage="accessories.jpg"/>

    </>
  )
}

export default home