import { MenuIcon } from "lucide-react";
import FaqSection from "./components/Faq";
import FunctionTabs from "./components/FunctionTabs";
import LocationCards, { ExperienceCentre } from "./components/LocationCards";
import Charts from "./components/charts";
import FeaturesCarousel from "./components/features";
import Footer from "./components/footer";
import MainAppHeader from "./components/header";
import MeetUs from "./components/meetUs";
import PricingSection from "./components/pricing";
import { CiChat1 } from "react-icons/ci";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Testimonials from "./components/testimonials";
import Financing from "./components/Financing";
import HyperchargerCards from "./components/hypercharger";
import Charging from "./components/charging";
import Service from "./components/service";

export interface TabData {
  title: string;
  imageUrls: string[];
}

const LandingPage = async () => {
  return (
    <>
      <main className="">
        <div className="fixed right-10 bottom-10 py-30 z-10 flex justify-center items-center">
          <div className="w-10 flex justify-center items-center h-10 rounded-full bg-white">
            <Popover>
              <PopoverTrigger>
                <CiChat1 />
              </PopoverTrigger>
              <PopoverContent className="w-screen/3 h-56">
                <p>Welcome to OLA chatbot</p>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div
          className="bg-cover bg-center h-screen w-full"
          style={{
            backgroundImage: `url(https://cdn.olaelectric.com/sites/evdp/pages/gen2/gen2_banner_v3.webp)`,
          }}
        >
          <MainAppHeader />
          <div className="text-center">
            <h1 className="text-white text-5xl py-2">S1 Pro</h1>
            <h1 className="text-white text-6xl py-2">Engineered to thrill</h1>
            <h1 className="text-white text-2xl">At ₹1,32,499</h1>
            <div className="justify-center pt-6 flex flex-row gap-10">
              <button className="bg-white h-16 w-44 text-xl">Order Now</button>
              <button className="bg-black text-white h-16 w-44 text-xl">
                Watch the Film
              </button>
            </div>
            <div className="pt-56 flex flex-row gap-5 justify-center">
              <div className="flex flex-col font-bold">
                <h1 className="text-white text-4xl">195 km</h1>\
                <h1 className="text-white text-xl ">Certified Range</h1>
              </div>
              <div className="flex flex-col font-bold">
                <h1 className="text-white text-4xl">195 km</h1>\
                <h1 className="text-white text-xl ">Certified Range</h1>
              </div>
              <div className="flex flex-col font-bold">
                <h1 className="text-white text-4xl">195 km</h1>\
                <h1 className="text-white text-xl ">Certified Range</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="p-10">
          <h1 className="text-black text-5xl py-2 ">Our Most</h1>
          <h1 className="text-black text-5xl "> Powerful Scooter Yet.</h1>
        </div>

        <FeaturesCarousel items={Featurescarouselcontent} />
        <div className="py-32">
          <FeaturesCarousel items={Bannercarouselcontent} />
        </div>
        <div className="py-32 px-10">
          <FunctionTabs tabs={tabs} />
        </div>

        <Charts />
        <MeetUs />
        <div className="flex flex-row gap-10 p-5">
          {experienceCentres.map((centre, index) => (
            <LocationCards key={index} cardData={centre} />
          ))}
        </div>
        <Financing/>
        <HyperchargerCards/>
        <Charging/>
        <PricingSection />
        <Testimonials/>
        <div className="p-10 px-16">
          <FaqSection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default LandingPage;

const Featurescarouselcontent = [
  {
    url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VydmljZSUyMGNlbnRlcnxlbnwwfDB8MHx8fDA%3D",
    text: "Enjoy easy financing benifits on OLA S1",
  },
  {
    url: "https://images.unsplash.com/photo-1503434396599-58ba8a18d932?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Nvb3RlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "Enjoy easy financing benifits on OLA S1",
  },
  {
    url: "https://images.unsplash.com/photo-1538895490524-0ded232a96d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nvb3RlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "Enjoy easy financing benifits on OLA S1",
  },
  {
    url: "https://images.unsplash.com/photo-1503434396599-58ba8a18d932?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Nvb3RlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "Enjoy easy financing benifits on OLA S1",
  },
  {
    url: "https://images.unsplash.com/photo-1538895490524-0ded232a96d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nvb3RlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "Enjoy easy financing benifits on OLA S1",
  },
  {
    url: "https://images.unsplash.com/photo-1503434396599-58ba8a18d932?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Nvb3RlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "Enjoy easy financing benifits on OLA S1",
  },
  {
    url: "https://images.unsplash.com/photo-1538895490524-0ded232a96d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nvb3RlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "Enjoy easy financing benifits on OLA S1",
  },
];

const Bannercarouselcontent = [
  {
    url: "https://cdn.olaelectric.com/sites/evdp/components/massets/s1x_m_assets_web_14062024_v2.webp",
    text: "Enjoy easy financing benifits on OLA S1",
  },
  {
    url: "https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/home-merch-asset-3-01022024.webp",
    text: "Enjoy easy financing benifits on OLA S1",
  },
  {
    url: "https://cdn.olaelectric.com/sites/evdp/components/massets/homepage_massets_easyfinance_web_image.webp",
    text: "Enjoy easy financing benifits on OLA S1",
  },
];

const tabs: TabData[] = [
  {
    title: "Performance",
    imageUrls: [
      "https://cdn.olaelectric.com/sites/evdp/pages/s1pro/s1pro_performance_web_image01_v1.webp",
      "https://cdn.olaelectric.com/sites/evdp/pages/s1pro/s1pro_performance_web_image02.webp",
      "https://cdn.olaelectric.com/sites/evdp/pages/s1pro/s1pro_performance_web_image03.webp",
      "https://cdn.olaelectric.com/sites/evdp/pages/s1pro/s1pro_performance_web_image04.webp",
      "https://cdn.olaelectric.com/sites/evdp/pages/s1pro/s1pro_performance_web_image05.webp",
    ],
  },
  {
    title: "Technology",
    imageUrls: [
      "https://cdn.olaelectric.com/sites/evdp/pages/s1pro/s1pro_dt_web_image_01.webp",
      "https://cdn.olaelectric.com/sites/evdp/pages/s1pro/s1pro_dt_web_image_02.webp",
      "https://cdn.olaelectric.com/sites/evdp/pages/s1pro/s1pro_dt_web_image_03.webp",
      "https://cdn.olaelectric.com/sites/evdp/pages/s1pro/s1pro_dt_web_image_04.webp",
      "https://cdn.olaelectric.com/sites/evdp/pages/s1pro/s1pro_dt_web_image_05.webp",
      "https://cdn.olaelectric.com/sites/evdp/pages/s1pro/s1pro_dt_web_image_06_v2.webp",
      "https://cdn.olaelectric.com/sites/evdp/pages/s1pro/s1pro_dt_web_image_07.webp",
      "https://cdn.olaelectric.com/sites/evdp/pages/s1pro/s1pro_dt_web_image_08.webp",
    ],
  },
  {
    title: "Design",
    imageUrls: [
      "https://cdn.olaelectric.com/sites/evdp/pages/s1pro/s1pro_design_web_image01.webp",
      "https://cdn.olaelectric.com/sites/evdp/pages/s1pro/s1pro_design_web_image02_v2.webp",
      "https://cdn.olaelectric.com/sites/evdp/pages/s1pro/s1pro_design_web_image03.webp",
      "https://cdn.olaelectric.com/sites/evdp/pages/s1pro/s1pro_design_web_image05.webp",
      "https://cdn.olaelectric.com/sites/evdp/pages/s1pro/s1pro_design_web_image04.webp",
    ],
  },
];
const experienceCentres: ExperienceCentre[] = [
  {
    id: 1,
    name: "Ola Experience Centre, Sadashiva Nagar",
    address:
      "CNR Towers, Bellary Road, Sadashiva Nagar, Armane Nagar, Bengaluru, Karnataka 560080",
    location: "Sadashiva Nagar",
  },
  {
    id: 2,
    name: "Ola Experience Centre, Anekal",
    address:
      "Prawasthi Complex, Anekal - Hosur Road, KSRTC Colony, Anekal, Karnataka 562106",
    location: "Anekal",
  },
  {
    id: 3,
    name: "Ola Experience Centre, Dasarahalli",
    address:
      "Yash Avenue, Nelamangala - Majestic Service Road, Maheswari Nagar, T. Dasarahalli, Bengaluru, Karnataka",
    location: "Dasarahalli",
  },
];
