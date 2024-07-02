import * as React from "react";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  return (
    <>
      <div className="w-full h-full pb-10 bg-green-100 p-20">
        <h1 className="text-5xl pb-8">Our community drives us</h1>
        <h1 className="text-xl text-gray-600 pb-8">Hear what our community has to say</h1>
        <Carousel
          opts={{
            align: "start",
          }}
        >
          <CarouselPrevious className="pl-1" />
          <CarouselContent>
            {[1, 2, 3, 4, 5,6,7].map((index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div key={index} className="bg-white rounded-xl">
                  <Card className="relative h-full p-5">
                    <CardContent>
                      <div className="rounded-full w-50 h-50">
                      <Image
                        width={300}
                        height={300}
                        src="https://plus.unsplash.com/premium_photo-1661962318201-c7faa790617b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2VydmljZSUyMGNlbnRlcnxlbnwwfDB8MHx8fDA%3D"
                        alt="service center image"
                        className="w-full h-auto"
                      />
                      </div>
                      <h3 className="text-center pt-5 text-3xl px-6 font-semibold mb-2">
                        {"'"} Best range Among competition {"'"}
                      </h3>
                      <p className="text-center px-6 text-xl text-gray-600">
                        Mr. Vishal Arora
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="block pl-1" />
        </Carousel>
      </div>
    </>
  );
};

export default Testimonials;
