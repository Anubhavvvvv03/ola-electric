"use client";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface CarouselBannerProps {
    items: CarouselBannerItem[];
  }

  export interface CarouselBannerItem {
    url: string;
    text: string;
  }

const FeaturesCarousel: React.FC<CarouselBannerProps> = (props) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const scrollToIndex = React.useCallback(
    (index: number) => {
      if (api) {
        api.scrollTo(index, true);
      }
    },
    [api]
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      if (api.selectedScrollSnap() === count) {
        scrollToIndex(0);
      }
      plugin.current.reset();
      setCurrent(api.selectedScrollSnap());
    });
  }, [api, count, scrollToIndex]);

  const plugin = React.useRef(Autoplay({ delay: 3000 }));
  return (
    <Carousel
      setApi={setApi}
      plugins={[plugin.current]}
      className="w-full max-w-full h-96 p-10"
    >
      <CarouselContent className="relative">
        {props.items.map((item, index) => (
          <CarouselItem key={index}>
            <Card
              style={{ backgroundImage: `url(${item.url})` }}
              className="w-full h-96 bg-cover"
            >
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center absolute bottom-4 left-1/2 transform -translate-x-1/2">
        {Array.from({ length: count }).map((_, idx) => (
          <Button
            size={"icon"}
            key={idx}
            className={`h-2 w-2 rounded-full outline-none cursor-pointer mx-1 ${
              current === idx ? "bg-white shadow" : "bg-gray-500"
            }`}
            onClick={() => scrollToIndex(idx)}
          ></Button>
        ))}
      </div>
    </Carousel>
  );
};

export default FeaturesCarousel;

