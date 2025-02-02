import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './Carousel.css'

interface CarouselProps {
    children: React.ReactNode;
}

function Carousel({ children }: CarouselProps) {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            slidesPerView={1}
            spaceBetween={20}
        > 
            {React.Children.map(children, child => (
                <SwiperSlide>{child}</SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Carousel;