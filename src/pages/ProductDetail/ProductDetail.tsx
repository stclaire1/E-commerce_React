import React, { useEffect, useState } from 'react';
import { fetchData, DataType } from '../../services/api/apiService';
import { useNavigate, useParams } from 'react-router-dom';
import CommomPageHeader from '../../components/CommomPageHeader/CommomPageHeader';
import './ProductDetail.css';
import ProductOverview from '../../components/ProductOverView/ProductOverview';
import ProductSpecification from '../../components/ProductSpecification/ProductSpecification';
import Button from '../../components/Button/Button';
import { useCart } from '../../services/context/ShoppingCart/CartProvider';

function ProductDetail() {

    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<DataType | null>(null);
    const [products, setProducts] = useState<DataType[]>([]);
    const [selectedTab, setSelectedTab] = useState<'overview' | 'features'>('overview');
    const { addToCart } = useCart();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await fetchData();
                const selectedProduct = data.find((product) => product.id.toString() === id);
                setProduct(selectedProduct || null);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        fetchProduct();
    }, [id]);

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

    const handleAddToCart = () => {
        if(product) {
            addToCart({
                id: product.id,
                img: product.img,
                name: product.name,
                price: product.price,
                quantity: 1,
            });
        }
    };

    const handleCartIconClick = () => {
        navigate('/shoppingCart');
    }

    return (
        <>
            <header>
                <CommomPageHeader icon="shopping-cart" onClick={handleCartIconClick}/>
            </header>
            <main>
                {product && (
                    <>
                        <section>
                            <h1>{product.name}</h1>
                            <h2>USD {product.price}</h2>
                            <div className="tabs">
                                <button className={selectedTab === 'overview' ? 'tab tab-active' : 'tab'}
                                    onClick={() => setSelectedTab('overview')}>Overview</button>
                                <button className={selectedTab === 'features' ? 'tab tab-active' : 'tab'}
                                    onClick={() => setSelectedTab('features')}>Features</button>
                            </div>
                        </section>
                        <section>
                            {selectedTab === 'overview' ? (
                                <ProductOverview
                                    key={product.id}
                                    img={product.img}
                                    reviews={product.reviews}
                                    name={product.name}
                                    price={`USD ${product.price}`}
                                    products={products}
                                />
                            ) : (
                                <ProductSpecification
                                    details={product.details}
                                    description={product.description}
                                />
                            )}
                        </section>
                        <Button type="button" btnText="Add to cart" onClick={handleAddToCart} />
                    </>
                )}
            </main>
        </>
    )
}

export default ProductDetail;