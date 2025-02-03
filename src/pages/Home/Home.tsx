import React, { useContext, useEffect, useState } from 'react';
import HomePageHeader from '../../components/HomePageHeader/HomePageHeader';
import { useAuth } from '../../services/context/Authentication/AuthContext'
import TextInput from '../../components/TextInput/TextInput';
import FilterButton from '../../components/FilterButton/FilterButton';
import { fetchData, DataType } from '../../services/api/apiService';
import Carousel from '../../components/Carousel/Carousel';
import SalesCard from '../../components/SalesCard/SalesCard';
import { Link, useNavigate } from 'react-router-dom';
import SimpleCard from '../../components/SimpleCard/SimpleCard';
import './Home.css';
import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/types';

function Home() {

  const user = useAuth();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [products, setProducts] = useState<DataType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<DataType[]>([]);

  const navigate = useNavigate();

  const handleInputFocus = () => {
    navigate('/search');
  }

  //this mapping is necessary to match the category names from the API with the ones we use in the app "Headset" and "Headphone" in the interface / "headsets" and "headphones" in the API
  const categoryMap: { [key: string]: string } = {
    Headset: 'headsets',
    Headphone: 'headphones',
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory((prev) => (prev === categoryMap[category] ? null : categoryMap[category]));
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchData();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    // filter products based on the selected category
    if (activeCategory) {
      setFilteredProducts(products.filter((product) => product.category === activeCategory));
    } else {
      setFilteredProducts(products); // show all products if no category is selected
    }
  }, [activeCategory, products]);

  useEffect(() => {
    console.log("User from context:", user);
  }, [user]);

  return (
    <>
      <header>
        <HomePageHeader />
      </header>
      <main>
        <section className="homeContainer">
          <p>Hi, { user?.displayName ? `${user.displayName}!` : 'welcome!'}</p>
          <h2>What are you looking for today?</h2>
          <TextInput onFocus={handleInputFocus} />
        </section>
        <section className="homeProductsContainer">
          <div className="filterContainer">
            <FilterButton
              btnText="Headphone"
              onClick={() => handleCategoryClick('Headphone')}
              isActive={activeCategory === 'headphones'}
            />
            <FilterButton
              btnText="Headset"
              onClick={() => handleCategoryClick('Headset')}
              isActive={activeCategory === 'headsets'}
            />
          </div>
          <section className="homePageCarouselContainer">
            <Carousel>
              {filteredProducts.map((product) => (
                <SwiperSlide>
                  <SalesCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    img={product.img}
                  />
                </SwiperSlide>
              ))}
            </Carousel>
          </section>
          <section className="featuredProductsContainer">
            <div>
              <p>Featured Products</p>
              <Link to="products" className="seeAllLink">See all</Link>
            </div>
            <div className="carouselContainer">
              <Carousel>
                {products.map((product) => (
                  <SwiperSlide>
                    <SimpleCard key={product.id} id={product.id} img={product.img} name={product.name} price={product.price} showDetails={false} isVertical={true} />
                  </SwiperSlide>
                ))}
              </Carousel>
            </div>
          </section>
        </section>
      </main>
    </>
  )
}

export default Home;