
import Hero from "@/views/hero";
import Promotions from "@/views/promotions";
import ProductsList from "@/views/productslist";
import Products from "@/components/products";
import Newsletter from "@/components/newsletter";
import Intro from "@/components/intro";
import Newsletterb from "@/views/newsletterb";
import Introb from "@/views/introb";

export default function Home() {
  return (
  
      <div>
      <Hero/>
      <Promotions/>
      <ProductsList/>
      <Products/>
      <Introb/>
      <Intro/>      
      <Newsletterb/>
      <Newsletter/>
      
  
      </div>
      
      
    
  );
}
