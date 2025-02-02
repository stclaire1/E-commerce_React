import React, { useEffect, useState } from 'react';
import CommomPageHeader from '../../components/CommomPageHeader/CommomPageHeader';
import TextInput from '../../components/TextInput/TextInput';
import { DataType, fetchData } from '../../services/api/apiService';
import SimpleCard from '../../components/SimpleCard/SimpleCard';
import './Search.css';
import { useNavigate } from 'react-router-dom';

function Search() {
    const [products, setProducts] = useState<DataType[]>([]);
    const [searchName, setSearchName] = useState<string>('');

    const navigate = useNavigate();

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

    const filteredProducts = () => {
        if (!searchName) return [];
        return products.filter((product) => product.name.toLowerCase().includes(searchName.toLowerCase()));
    }

    const getPopularProducts = () => {
        const sortedProducts = [...products].sort((a, b) => b.popularity - a.popularity);
        return sortedProducts.slice(0, 3);
    }

    const handleCartIconClick = () => {
        navigate('/shoppingCart');
    }

    return (
        <>
            <header>
                <CommomPageHeader pageTitle="Search" icon="shopping-cart" onClick={handleCartIconClick} />
            </header>
            <main className="searchPageMain">
                <section className="searchContainer">
                    <TextInput onFocus={() => { }} onChange={(e) => setSearchName(e.target.value)} />
                    <div className="searchResultsContainer">
                        {filteredProducts().map((product) => (
                            <SimpleCard
                                key={product.id}
                                id={product.id}
                                img={product.img}
                                name={product.name}
                                price={product.price}
                                showDetails={true}
                                reviews={product.reviews}
                                isVertical={false}
                            />
                        ))}
                    </div>
                </section>
                <section className="popularProductsContainer">
                    <p>Popular Product</p>
                    {getPopularProducts().map((product) => (
                        <SimpleCard key={product.id} id={product.id} img={product.img} name={product.name} price={product.price} showDetails={true} reviews={product.reviews} isVertical={false} />
                    ))}
                </section>
            </main>
        </>
    )
}

export default Search;