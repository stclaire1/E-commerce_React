import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './Carousel.css'

interface CarouselProps {
    children: React.ReactNode;
    // slidesPerView?: number;
}

function Carousel({ children }: CarouselProps) {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            slidesPerView="auto"
            setWrapperSize={true}
            spaceBetween={20}
        > 
            {React.Children.map(children, child => (
                <>
                    {child}
                </>
            ))}
        </Swiper>
    );
}

export default Carousel;