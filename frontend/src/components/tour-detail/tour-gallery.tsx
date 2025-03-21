"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TourGalleryProps {
  name: string;
  imageCover: string;
  images: string[];
}

export function TourGallery({ name, imageCover, images }: TourGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  // All images including cover
  const allImages = [imageCover, ...images];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length
    );
  };

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setShowLightbox(true);
  };

  const closeLightbox = () => {
    setShowLightbox(false);
  };

  return (
    <>
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full bg-muted">
        <Image
          src={imageCover || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10">
          <div className="container">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              {name}
            </h1>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="absolute bottom-6 right-6 bg-white/80 hover:bg-white"
          onClick={() => setShowLightbox(true)}
        >
          View All Photos
        </Button>
      </div>

      <div className="container mt-4">
        <div className="grid grid-cols-4 gap-2">
          {allImages.slice(0, 4).map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-md"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${name} - Image ${index + 1}`}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
              {index === 3 && allImages.length > 4 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white font-medium">
                  +{allImages.length - 4} more
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {showLightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 text-white hover:bg-white/20"
            onClick={prevImage}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <div className="relative h-[80vh] w-[80vw]">
            <Image
              src={allImages[currentIndex] || "/placeholder.svg"}
              alt={`${name} - Image ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 text-white hover:bg-white/20"
            onClick={nextImage}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          <div className="absolute bottom-4 text-white">
            {currentIndex + 1} / {allImages.length}
          </div>
        </div>
      )}
    </>
  );
}
