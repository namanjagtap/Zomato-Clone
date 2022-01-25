import React from "react"
import Header from "./components/Header"
import Category from "./components/Category"
import categoryData from "./categoryData"
import Collection from "./components/Collections"
import collectionData from "./collectionData"
import FamousFood from "./components/FamousFood"
import famousFoodData from "./famousFoodData"
import OtherOptions from "./components/OtherOptions"
import Footer from "./components/Footer"

export default function App(){
  const cat = categoryData.map(item => <Category key={item.id} {...item} />)

  const places = collectionData.map(item => <Collection key={item.id} {...item} />)
  
  const foodItem = famousFoodData.map(item => <FamousFood key={item.id} {...item} />)

  return(
    <div>
      {/* Header Part */}
      <Header />

      {/* Body Part */}
      <section className="main-content">
        
        {/* Category Part */}
        <section className="categories">
          {cat}
        </section>
        
        {/* Collection Part */}
        <h1 className="collection--title">Collections</h1>
        <div className="collection--text">
            <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Indore, based on trends</p>
            <p className="collection--text-link" >All collections in Indore 🢒</p>
        </div>
        <section className="collection">
          {places}
        </section>

        {/* Famous Food Part */}
        <h1 className="collection--title">Famous in Indore</h1>
        <section className="food--menu">
          {foodItem}
        </section>
        
        <OtherOptions />

      </section>
        <Footer />
    </div>
  )
}