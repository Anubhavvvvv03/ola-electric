import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  return (
    <>
      <div className="flex flex-row gap-20">
        <div className="w-1/2">
          <p className="text-6xl py-8">Most Frequently asked questions</p>
          <p className="">
            Got questions? We have already got answers. Its like we can hear you
            thinking.
          </p>
          <p className="text-2xl pt-8">Did we miss something?</p>
          <p>Get on a one on one call with our experts.</p>
          <button className="bg-black mt-8 text-white h-16 w-44 text-xl">
            Request a call
          </button>
        </div>
        <div className="w-1/2">
          <Accordion type="single" collapsible className="w-full gap-14">
            <AccordionItem  value="item-1">
              <AccordionTrigger>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eaque ?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odio possimus aliquid et enim mollitia sequi repudiandae modi animi dolore perspiciatis molestias laborum totam officiis sit facere, facilis, beatae unde.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eaque ?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, provident recusandae ipsam deserunt omnis minus eos porro placeat quidem, suscipit enim necessitatibus expedita voluptatum voluptatibus iste. Quibusdam soluta qui ducimus.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eaque ?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, provident recusandae ipsam deserunt omnis minus eos porro placeat quidem, suscipit enim necessitatibus expedita voluptatum voluptatibus iste. Quibusdam soluta qui ducimus.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eaque ?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, provident recusandae ipsam deserunt omnis minus eos porro placeat quidem, suscipit enim necessitatibus expedita voluptatum voluptatibus iste. Quibusdam soluta qui ducimus.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eaque ?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa neque, corrupti error doloremque dolore omnis dignissimos minus repellendus maxime ut veritatis. Eveniet, tenetur delectus? Cumque vitae harum necessitatibus explicabo hic?
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
