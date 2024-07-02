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

export interface ExperienceCentre {
  id: number;
  name: string;
  address: string;
  location: string;
}

interface Props {
  cardData: ExperienceCentre;
}

const LocationCards = ({ cardData }: Props) => {
  return (
    <Card className="relative h-full p-5">
      <CardContent>
        <Image
          width={300}
          height={300}
          src="https://plus.unsplash.com/premium_photo-1661962318201-c7faa790617b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2VydmljZSUyMGNlbnRlcnxlbnwwfDB8MHx8fDA%3D"
          alt="service center image"
          className="w-full h-auto"
        />
        <h3 className="text-left text-3xl px-6 font-semibold mb-2">
          {cardData.name}
        </h3>
        <p className="text-left px-6 text-xl text-gray-600">
          {cardData.address}
        </p>
      </CardContent>
      <CardFooter>
        <Link
          href={`/schedule-visit/${cardData.id}`}
          className="w-full text-2xl bg-black text-white py-2 px-4 text-center"
        >
          Schedule a visit →
        </Link>
      </CardFooter>
    </Card>
  );
};

export default LocationCards;
