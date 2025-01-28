import ProductReview from '../ProductReview/ProductReview';
import { Link } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import SimpleCard from '../SimpleCard/SimpleCard';

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
    price: number;
    reviews: Review[];
    products: Product[];
}

function ProductOverview({ img, reviews, name, products }: ProductReviewProps) {
        
    return (
        <section>
            <p>Reivews ({reviews.length})</p>
            <img src={img} alt={name} className="mainProductImg" />
            <ProductReview reviews={reviews} />
            <div>
                <p>Another Product</p>
                <Link to="/products">View all</Link>
            </div>
            <div className="carouselContainer">
                <Carousel>
                    {products.slice(0, 5).map((product) => (
                        <SimpleCard key={product.id} img={product.img} name={product.name} price={product.price} showDetails={false} />
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

export default ProductOverview;