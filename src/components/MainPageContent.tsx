"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";

const corouselPhotos = [
  "https://storage.googleapis.com/society-bucket/colleagues-working-together-project.jpg",
  "https://storage.googleapis.com/society-bucket/high-angle-people-applauding-work.jpg",
  "https://storage.googleapis.com/society-bucket/smiley-woman-talking-phone-medium-shot.jpg",
];

export default function MainPageContent() {
  return (
    <div className="flex flex-row">
      {corouselPhotos.map((url) => (
        <div className="p-1" key={url}>
          <Card key={url}>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <Image src={url} alt="carousel" width={400} height={400} />
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
