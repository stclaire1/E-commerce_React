import React, { useEffect } from 'react';
import './Products.css';
import CommomPageHeader from '../../components/CommomPageHeader/CommomPageHeader';
import { Sheet } from 'react-modal-sheet';
import { useState } from 'react';
import FilterButton from '../../components/FilterButton/FilterButton';
import SimpleCard from '../../components/SimpleCard/SimpleCard';
import { DataType, fetchData } from '../../services/api/apiService';
import Button from '../../components/Button/Button';

function Products() {
    const [isOpen, setOpen] = useState(false);
    const [products, setProducts] = useState<DataType[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<DataType[]>([]);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<string | null>(null);

    const categoryMap: { [key: string]: string } = {
        Headset: 'headsets',
        Headphone: 'headphones',
      };

      useEffect(() => {
        const getProducts = async () => {
          try {
            const data = await fetchData();
            setProducts(data);
            setFilteredProducts(data);
          } catch (error) {
            console.error('Failed to fetch products:', error);
          }
        };
        getProducts();
      }, []);

      const handleCategoryClick = (category: string) => {
        setActiveCategory((prev) => (prev === categoryMap[category] ? null : categoryMap[category]));
      };

      const handleSortBy = (criteria: string) => {
        setSortBy((prev) => (prev === criteria ? null : criteria));
      };
    

      const applyFilters = () => {
        let filtered = products;
    
        if (activeCategory) {
          filtered = filtered.filter((product) => product.category === activeCategory);
        }
    
        if (sortBy) {
          filtered = [...filtered].sort((a, b) => {
            if (sortBy === 'popularity') return b.popularity - a.popularity;
            if (sortBy === 'newest') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            if (sortBy === 'oldest') return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
            if (sortBy === 'high price') return b.price - a.price;
            if (sortBy === 'low price') return a.price - b.price;
            return 0;
          });
        }
    
        setFilteredProducts(filtered);
      };

    return (
        <>
            <header>
                <CommomPageHeader />
            </header>
            <main>
                <section>
                    <h1>All Products</h1>
                    <button onClick={() => setOpen(true)}>Filter</button>
                    <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
                        <Sheet.Container>
                            <Sheet.Header />
                            <Sheet.Content>
                                <p>Filter</p>
                                <div>
                                    <p>Category</p>
                                    <div>
                                        <FilterButton
                                            btnText="Headphone" 
                                            onClick={() => handleCategoryClick("headphone")}
                                            isActive={activeCategory === "headphone"} 
                                        />
                                    </div>
                                    <div>
                                        <FilterButton
                                            btnText="Headset" 
                                            onClick={() => handleCategoryClick("headset")}
                                            isActive={activeCategory === "headset"} 
                                        />
                                    </div>
                                </div>
                                <div>
                                    <p>Sort By</p>
                                    <div>
                                        <FilterButton
                                            btnText="Popularity" 
                                            onClick={() => handleSortBy("popularity")}
                                            isActive={sortBy === "popularity"} 
                                        />
                                    </div>
                                    <div>
                                        <FilterButton
                                            btnText="Newest" 
                                            onClick={() => handleSortBy("newest")}
                                            isActive={sortBy === "newest"} 
                                        />
                                    </div>
                                    <div>
                                        <FilterButton
                                            btnText="Oldest" 
                                            onClick={() => handleSortBy("oldest")}
                                            isActive={sortBy === "oldest"} 
                                        />
                                    </div>
                                    <div>
                                        <FilterButton
                                            btnText="High Price" 
                                            onClick={() => handleSortBy("high price")}
                                            isActive={sortBy === "high price"} 
                                        />
                                    </div>
                                    <div>
                                        <FilterButton
                                            btnText="Low Price" 
                                            onClick={() => handleSortBy("low price")}
                                            isActive={sortBy === "low price"} 
                                        />
                                    </div>
                                    <Button type="button" btnText="Apply Filter" onClick={applyFilters}/>
                                </div>
                            </Sheet.Content>
                        </Sheet.Container>
                        <Sheet.Backdrop />
                    </Sheet>
                </section>
                <section>
                    {filteredProducts.map((product) => (
                        <SimpleCard key={product.id} id={product.id} img={product.img} name={product.name} price={product.price} showDetails={true} reviews={product.reviews} isVertical={true} />
                    ))}
                </section>
            </main>
        </>
    )
}

export default Products;