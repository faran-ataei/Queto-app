"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "./useIsMobile";
import Image from "next/image";

const images = [
  { src: "/greatest/Einstein.jpg", alt: "Einstein" },
  { src: "/greatest/Gandhi.jpg", alt: "Gandhi" },
  { src: "/greatest/Lao.jpg", alt: "Lao Tzu" },
  { src: "/greatest/Robert.jpg", alt: "Robert A. Heinlein" },
  { src: "/greatest/Socrates.jpg", alt: "Socrates" },
  { src: "/greatest/William.jpg", alt: "William Saroyan" },
];

export function CarouselPlugin() {
  const isMobile = useIsMobile();
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <Carousel plugins={[plugin.current]} className="w-full mt-20 bg-blue-700">
      <CarouselContent loop>
        {images.map((item, index) => (
          <CarouselItem key={index} className="w-full flex justify-center">
            <div className="w-full px-4">
              <Card className="w-full max-w-4xl mx-auto bg-white">
                <CardContent className="flex items-center justify-center">
                  <Image
                    className="pointer-events-none select-none object-contain"
                    src={item.src}
                    alt={item.alt}
                    width={500}
                    height={500}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
