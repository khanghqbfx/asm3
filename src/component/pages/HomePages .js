import Banner from '../HomPages/Banner';
import OtherInfo from '../HomPages/Other';
import Footer from '../Footer/Footer';
import ListCategories from '../HomPages/ListCategories';
import TrendingProducts  from '../HomPages/TrendingProducts';
import MainNavigation from '../MainNavigation/MainNavigation';


const HomePages = () =>{
    
  
    return(
        <div>
        <MainNavigation />
        <Banner />
        <ListCategories  />
       <TrendingProducts/>
        <OtherInfo />
        <Footer />

        </div>
      
    )
}
   


export default HomePages