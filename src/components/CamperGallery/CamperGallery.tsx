// CamperGallery: main + thumbs Swiper gallery for camper photos.
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import "swiper/css/free-mode";
import type { GalleryImage } from "@/types/camper";
import styles from "./CamperGallery.module.css";

interface CamperGalleryProps {
  gallery: GalleryImage[];
  camperName: string;
}

const CamperGallery = ({ gallery, camperName }: CamperGalleryProps) => {
  const mainSwiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [...gallery].sort((a, b) => a.order - b.order);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <Swiper
        loop
        onSwiper={(swiper) => {
          mainSwiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className={styles.mainSwiper}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className={styles.mainSlide}>
              <Image
                src={image.original}
                alt={camperName}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.mainImage}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[FreeMode]}
        freeMode
        slidesPerView={4}
        spaceBetween={32}
        className={styles.thumbsSwiper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.id}>
            <div
              className={`${styles.thumbSlide} ${
                index === activeIndex ? styles.thumbActive : ""
              }`}
              onClick={() => mainSwiperRef.current?.slideToLoop(index)}
            >
              <Image
                src={image.thumb}
                alt=""
                fill
                sizes="120px"
                className={styles.thumbImage}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CamperGallery;
