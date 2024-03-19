import React from "react";
import Header from "../Components/Layout/Header";
import Hero from "../Components/Route/Hero/Hero";
import Categories from "../Components/Route/Categories/Categories";
import BestDeals from "../Components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../Components/Route/FeaturedProduct/FeaturedProduct";
import PopularEvents from "../Components/Route/PopularEvents/PopularEvents";
import Sponsored from "../Components/Route/Sponsored/Sponsored";
import Footer from "../Components/Layout/Footer";
function HomePage() {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <PopularEvents />
      <FeaturedProduct />
      <Sponsored />
      <Footer />
      
      
    </div>
  );
}

export default HomePage;
