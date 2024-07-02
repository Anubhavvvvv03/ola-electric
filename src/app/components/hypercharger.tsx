"use client";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const HyperchargerCards = () => {
  return (
    <div className="p-20">
      <div
        className="w-full h-full p-10 bg-fit"
        style={{
          backgroundImage: `url(https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/home_experience_center_bg_v2.webp)`,
        }}
      ></div>
      <div className="px-16 p-6">
        <h1 className="text-6xl font-bold mb-2">
        Find a Hypercharger <br />
        near you in Bangalore
          
        </h1>
        <p className="text-gray-600 text-2xl py-8 mb-4">
        We are gunning for 2000+ Hypercharging points by the end of 2023</p>

        <Link
          href="#"
          className="text-green-500 py-8 font-semibold text-2xl flex items-center"
        >
          More about Ola Experience Centres
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
      <div className="flex flex-row gap-5 p-10">
      {[1, 2, 3].map((index) => (
        <Card key={index} className="relative h-full p-5 bg-gray-100">
          <CardContent>
            <h3 className="text-left text-3xl px-6 font-semibold mb-2">
              Ola hyper charger, ola experience centres
            </h3>
            <p className="text-left px-6 text-xl text-gray-600">
              2GCM+V7W, Narasimha Layout, Yeswanthpur, Bengaluru, Karnataka
              560022
            </p>
          </CardContent>
        </Card>
      ))}
      </div>
    </div>
  );
};

export default HyperchargerCards;
