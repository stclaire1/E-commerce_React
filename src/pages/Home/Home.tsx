import React, { useContext, useEffect, useState } from 'react';
import HomePageHeader from '../../components/HomePageHeader/HomePageHeader';
import { AuthContext } from '../../services/context/AuthContext'
import TextInput from '../../components/TextInput/TextInput';
import FilterButton from '../../components/FilterButton/FilterButton';
import { fetchData, DataType } from '../../services/api/apiService';
import Carousel from '../../components/Carousel/Carousel';
import SalesCard from '../../components/SalesCard/SalesCard';
import { Link } from 'react-router-dom';
import SimpleCard from '../../components/SimpleCard/SimpleCard';

function Home() {

  const user = useContext(AuthContext);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [products, setProducts] = useState<DataType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<DataType[]>([]);

  const categoryMap: { [key: string]: string } = {
    Headset: 'headsets',
    Headphone: 'headphones',
  };

  const handleCategoryClick = (category: string) => {
    const mappedCategory = categoryMap[category];
    setActiveCategory(mappedCategory);
  };

  useEffect(() => {
    // Fetch products data on component mount
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
    // Filter products based on the selected category
    if (activeCategory) {
      setFilteredProducts(products.filter((product) => product.category === activeCategory));
    } else {
      setFilteredProducts(products); // Show all products if no category is selected
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
        <section>
          <h1>Hi, {user ? user.displayName : 'welcome!'}</h1>
          <h2>What are you looking for today?</h2>
          <TextInput />
        </section>
        <section>
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
        </section>
        <section>
          <Carousel>
            {filteredProducts.map((product) => (
              <SalesCard
                key={product.id}
                id={product.id}
                name={product.name}
                img={product.img}
              />
            ))}
          </Carousel>
        </section>
        <section>
          <div>
            <p>Featured Products</p>
            <Link to="products">See all</Link>
          </div>
          <div className="carouselContainer">
            <Carousel>
              {products.slice(0, 5).map((product) => (
                <SimpleCard key={product.id} img={product.img} name={product.name} price={product.price} showDetails={false} />
              ))}
            </Carousel>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home;