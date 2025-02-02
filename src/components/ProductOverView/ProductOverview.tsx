import ProductReview from '../ProductReview/ProductReview';
import { Link } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import SimpleCard from '../SimpleCard/SimpleCard';
import './ProductOverview.css';

interface Review {
    userId: string;
    userName: string;
    rating: number;
    comment: string;
    postedAt: string;
}

interface Product {
    id: string;
    name: string;
    price: number;
    img: string;
}

interface ProductReviewProps {
    img: string;
    name: string;
    price: number | string;
    reviews: Review[];
    products: Product[];
}

function ProductOverview({ img, reviews, name, products }: ProductReviewProps) {
        
    return (
        <>
            <div className="mainProductImg">
                <img src={img} alt={name} />
            </div>
            <div className="productOverviewContainer">
                <p className="overviewReviews">Reviews ({reviews.length})</p>
                <ProductReview reviews={reviews} />
            </div>
            <div className="productOverviewCarouselContainer">
                <div className="productOverviewCarouselHeader">
                    <p>Another Product</p>
                    <Link to="/products">See all</Link>
                </div>
                <Carousel>
                    {products.slice(0, 5).map((product) => (
                        <SimpleCard key={product.id} id={product.id} img={product.img} name={product.name} price={product.price} showDetails={false} isVertical={true} />
                    ))}
                </Carousel>
            </div>
        </>
    );
}

export default ProductOverview;