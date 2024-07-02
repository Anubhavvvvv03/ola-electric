import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';



const MainAppHeader = async () => {
  return (
    <>
      <header className="text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col justify-between md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-3xl text-white font-extrabold">OLA</span>
          </a>
          <Sheet>
            <SheetTrigger className="">
              <div className="bg-white h-10 w-10 rounded-full p-2">  <Menu className="bg-black" /></div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
};

export default MainAppHeader;
