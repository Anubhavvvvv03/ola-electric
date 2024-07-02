import React from 'react';
import Image from 'next/image';

interface Scooter {
  name: string;
  image: string;
  price: string;
  emi: string;
  topSpeed: string;
  range: string;
  modes: string;
  colours: string[];
  chargingTime: string;
  batteryWarranty: string;
  peakPower: string;
  keyType: string;
}

interface SpecRow {
  label: string;
  key: keyof Scooter;
  subkey?: 'emi';
}

const scooters: Scooter[] = [
  {
    name: 'OLA S1 Pro',
    image: 'https://cdn.olaelectric.com/sites/evdp/pages/s1pro/comparison_box_s1_pro_v5.webp',
    price: '1,32,499',
    emi: '3,299',
    topSpeed: '120 km/h',
    range: '195 km',
    modes: 'Eco, Normal, Sports & Hyper',
    colours: ['black', 'white', 'blue', 'darkblue', 'darkgreen'],
    chargingTime: '6.5 Hrs',
    batteryWarranty: '8 years',
    peakPower: '11 kW',
    keyType: 'Digital Key'
  },
  {
    name: 'OLA S1 X+',
    image: 'https://cdn.olaelectric.com/sites/evdp/pages/s1pro/comparison_box_s1_x_v5.webp',
    price: '84,999',
    emi: '2,099',
    topSpeed: '90 km/h',
    range: '151 km',
    modes: 'Eco, Normal, Sports',
    colours: ['black', 'red', 'blue', 'white', 'gray', 'green'],
    chargingTime: '7.4 hrs',
    batteryWarranty: '8 years',
    peakPower: '6kW',
    keyType: 'Digital Key'
  },
  {
    name: 'OLA S1 Air',
    image: 'https://cdn.olaelectric.com/sites/evdp/pages/s1pro/comparison_box_s1_air_v5.webp',
    price: '1,06,499',
    emi: '2,699',
    topSpeed: '90 km/h',
    range: '151 km',
    modes: 'Eco, Normal, Sports',
    colours: ['white', 'red', 'gray', 'blue'],
    chargingTime: '5 hr',
    batteryWarranty: '8 years',
    peakPower: '6kW',
    keyType: 'Digital Key'
  }
];

const PricingSection: React.FC = () => {
  const specRows: SpecRow[] = [
    { label: 'Price', key: 'price', subkey: 'emi' },
    { label: 'Top speed', key: 'topSpeed' },
    { label: 'Certified Range', key: 'range' },
    { label: 'Modes', key: 'modes' },
    { label: 'Colours', key: 'colours' },
    { label: 'Charging Time', key: 'chargingTime' },
    { label: 'Battery warranty', key: 'batteryWarranty' },
    { label: 'Peak Power', key: 'peakPower' },
    { label: 'Key Type', key: 'keyType' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Choose Your S1</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {scooters.map((scooter, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image 
              src={scooter.image} 
              alt={scooter.name} 
              width={300} 
              height={200} 
              className="mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{scooter.name}</h2>
            <button className="text-blue-600 mb-4">▼</button>
          </div>
        ))}
      </div>
      {specRows.map((row, index) => (
        <div key={index} className="grid grid-cols-4 gap-4 py-4 border-b">
          <div className="font-semibold text-gray-600">{row.label}</div>
          {scooters.map((scooter, scooterIndex) => (
            <div key={scooterIndex}>
              {row.key === 'colours' ? (
                <div className="flex space-x-1">
                  {scooter[row.key].map((color, colorIndex) => (
                    <div 
                      key={colorIndex} 
                      className="w-4 h-4 rounded-full" 
                      style={{backgroundColor: color}}
                    ></div>
                  ))}
                </div>
              ) : (
                <>
                  <div className={row.subkey ? "font-bold" : ""}>{scooter[row.key]}</div>
                  {row.subkey && <div className="text-sm text-gray-600">EMI starts at ₹{scooter[row.subkey]}</div>}
                </>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PricingSection;