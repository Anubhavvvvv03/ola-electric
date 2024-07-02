import Link from "next/link";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
const MeetUs = async () => {
  return (
    <>
      <div
        className="w-full h-full p-10 bg-fit"
        style={{
          backgroundImage: `url(https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/home_experience_center_bg_v2.webp)`,
        }}
      ></div>
      <div className="px-16 p-6">
        <h1 className="text-6xl font-bold mb-2">
          Come on over. Meet us <br />
          in 
          
        </h1>
        <Select>
              <SelectTrigger className="w-[280px]">
                <SelectValue className="text-green-500" placeholder="Gurgaon" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Haryana">Haryana</SelectItem>
                <SelectItem value="Bihar">Bihar</SelectItem>
                <SelectItem value="Karnataka">Karnataka</SelectItem>
                <SelectItem value="TamilNadu">Tamil Nadu</SelectItem>
              </SelectContent>
            </Select>
        <p className="text-gray-600 text-2xl py-8 mb-4">
          Ola Experience Centres. Because nothing beats a <br />
          one on one with the S1.
        </p>

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
    </>
  );
};

export default MeetUs;
