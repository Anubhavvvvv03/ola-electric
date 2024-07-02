import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const categories = [
    {
      title: "Product",
      links: ["Ola S1 Pro", "Ola S1 air", "Ola S1 x+", "Motorcycles"]
    },
    {
      title: "Tech & Design",
      links: ["Software", "Cell tech", "Manufacturing", "Performance","Design","Giga Factory"]
    },
    {
      title: "Ownership",
      links: ["Exp center", "Hyperchargers", "Accessories", "Community","Refferals","Referrals"]
    },
    {
      title: "Company",
      links: ["Abouts US", "Investor", "News room", "Blogs","Careers","Dealership"]
    }
  ];
  
  const Footer = () => {
    return (
      <footer className="text-white bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="ml-3 text-white text-4xl">OLA</span>
            </a>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            {categories.map((category, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                  {category.title}
                </h2>
                <nav className="list-none mb-10">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a className="text-white hover:font-extrabold">
                        {link}
                      </a>
                    </li>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  