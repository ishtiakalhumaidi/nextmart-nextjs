"use client";

import Image from "next/image";
import Link from "next/link";
import { GiShoppingBag } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

export default function Hero() {
  type Banner = {
    title: string;
    subTitle: string;
    buttonText: string;
    buttonLink: string;
    imageSrc: string;
  };

  const banners: Banner[] = [
    {
      title: "Flat 30% Off on New Arrivals",
      subTitle:
        "Upgrade your wardrobe with our premium collection. Limited time offer valid until Sept 31st.",
      buttonText: "Shop Now",
      buttonLink: "/products",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0070/7032/articles/trending-products_e6821b82-3a8b-4dde-8554-2a034d811a81.png?v=1753993367",
    },
    {
      title: "Summer Sale – Up to 50% Off",
      subTitle:
        "Get your favorite summer outfits before they're gone. Offer valid till Aug 31st.",
      buttonText: "Explore Collection",
      buttonLink: "/products",
      imageSrc:
        "https://static.vecteezy.com/system/resources/previews/011/669/884/non_2x/summer-sale-banner-design-summer-sale-special-offer-text-in-beach-background-with-discount-for-seasonal-shopping-promotion-ads-vector.jpg",
    },
    {
      title: "Exclusive Winter Collection",
      subTitle:
        "Stay cozy and stylish this winter. Discover our limited-edition winter collection now.",
      buttonText: "Browse Collection",
      buttonLink: "/products",
      imageSrc:
        "https://static.vecteezy.com/system/resources/thumbnails/004/563/903/small_2x/winter-sale-background-special-offer-banner-background-for-business-and-advertising-illustration-free-vector.jpg",
    },
  ];

  return (
    <section className="pt-10">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between max-w-10/12">
              <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                  {banner.title}
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12">{banner.subTitle}</p>
                <div>
                  <Link
                    rel="noopener noreferrer"
                    href={banner.buttonLink}
                    className="btn bg-blue-300 rounded-full text-black btn-xl"
                  >
                    <GiShoppingBag className="mr-2 font-bold" />
                    {banner.buttonText}
                  </Link>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  width={1848}
                  height={905}
                  src={banner.imageSrc}
                  alt=""
                  className="object-cover w-3xl h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
