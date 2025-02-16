import React, { useEffect } from 'react';
import './Products.css';
import CommomPageHeader from '../../components/CommomPageHeader/CommomPageHeader';
import { Sheet } from 'react-modal-sheet';
import { useState } from 'react';
import FilterButton from '../../components/FilterButton/FilterButton';
import SimpleCard from '../../components/SimpleCard/SimpleCard';
import { DataType, fetchData } from '../../services/api/apiService';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import './Products.css';
import FeatherIcon from 'feather-icons-react';

function Products() {
    const [isOpen, setOpen] = useState(false);
    const [products, setProducts] = useState<DataType[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<DataType[]>([]);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<string | null>(null);

    const navigate = useNavigate();

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

    const handleSortByClick = (sortedBy: string) => {
        setSortBy((prev) => (prev === sortedBy ? null : sortedBy));
    };

    const applyFilters = () => {
        let filtered = [...products];

        if (activeCategory) {
            filtered = filtered.filter((product) => product.category === activeCategory);
        }

        if (sortBy) {
            switch (sortBy) {
                case 'popularity':
                    filtered.sort((a, b) => b.popularity - a.popularity);
                    break;
                case 'newest':
                    filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
                    break;
                case 'oldest':
                    filtered.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
                    break;
                case 'high price':
                    filtered.sort((a, b) => b.price - a.price);
                    break;
                case 'low price':
                    filtered.sort((a, b) => a.price - b.price);
                    break;
                default:
                    break;
            }
        }

        setFilteredProducts(filtered);
        setOpen(false);
    };

    const handleCartIconClick = () => {
        navigate('/shoppingCart');
    }

    return (
        <>
            <header>
                <CommomPageHeader icon="shopping-cart" onClick={handleCartIconClick} />
            </header>
            <main>
                <section className="productsTitleAndFilter">
                    <h1>All Products</h1>
                    <button onClick={() => setOpen(true)} className="productsFilterBtn">
                        <FeatherIcon icon="sliders" className="sliderIcon"/>
                        Filter
                    </button>
                    <Sheet isOpen={isOpen} onClose={() => setOpen(false)} className="filterSheet">
                        <Sheet.Container>
                            <Sheet.Header />
                            <Sheet.Content>
                                <p className="filterSheetTitle">Filter</p>
                                <div className="categoryContainer">
                                    <p>Category</p>
                                    <div className="categoryBtnContainer">
                                        <div>
                                            <FilterButton
                                                btnText="Headphone"
                                                onClick={() => handleCategoryClick("Headphone")}
                                                isActive={activeCategory === "headphones"}
                                            />
                                        </div>
                                        <div>
                                            <FilterButton
                                                btnText="Headset"
                                                onClick={() => handleCategoryClick("Headset")}
                                                isActive={activeCategory === "headsets"}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="sortByContainer">
                                    <p>Sort By</p>
                                    <div className="sortByBtnContainer">
                                        <div>
                                        <FilterButton
                                                btnText="Popularity"
                                                onClick={() => handleSortByClick("popularity")}
                                                isActive={sortBy === "popularity"}
                                                isSortBy={true}
                                            />
                                        </div>
                                        <div>
                                            <FilterButton
                                                btnText="Newest"
                                                onClick={() => handleSortByClick("newest")}
                                                isActive={sortBy === "newest"}
                                                isSortBy={true}
                                            />
                                        </div>
                                        <div>
                                            <FilterButton
                                                btnText="Oldest"
                                                onClick={() => handleSortByClick("oldest")}
                                                isActive={sortBy === "oldest"}
                                                isSortBy={true}
                                            />
                                        </div>
                                        <div>
                                            <FilterButton
                                                btnText="High Price"
                                                onClick={() => handleSortByClick("high price")}
                                                isActive={sortBy === "high price"}
                                                isSortBy={true}
                                            />
                                        </div>
                                        <div>
                                            <FilterButton
                                                btnText="Low Price"
                                                onClick={() => handleSortByClick("low price")}
                                                isActive={sortBy === "low price"}
                                                isSortBy={true}
                                            />
                                        </div>
                                    </div>
                                    <Button type="button" btnText="Apply Filter" onClick={applyFilters} />
                                </div>
                            </Sheet.Content>
                        </Sheet.Container>
                        <Sheet.Backdrop />
                    </Sheet>
                </section>
                <section className="productsContainer">
                    {filteredProducts.map((product) => (
                        <SimpleCard key={product.id} id={product.id} img={product.img} name={product.name} price={product.price} showDetails={true} reviews={product.reviews} isVertical={true} isFullCard={true} />
                    ))}
                </section>
            </main>
        </>
    )
}

export default Products;