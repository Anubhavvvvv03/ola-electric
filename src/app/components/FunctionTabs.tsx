"use client"

import React, { useState } from 'react';
import { TabData } from '../page';
import Image from 'next/image';

interface TabProps {
  tabs: TabData[];
}

const FunctionTabs: React.FC<TabProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 -mb-px font-semibold 
              ${activeTab === index ? 'text-black border-b-2 border-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 gap-5">
          {tabs.map((tab, tabIndex) => (
            <div key={tabIndex} className="grid grid-cols-3 gap-5">
              <h3 className="text-4xl font-semibold mb-4">{tab.title}</h3>
              {tab.imageUrls.map((url, i) => (
                <div key={`${tabIndex}-${i}`} className="relative">
                  <Image
                    width={300}
                    height={300}
                    src={url}
                    alt={`${tab.title} ${i}`}
                    className="w-full h-auto"
                  />
                  
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FunctionTabs;
