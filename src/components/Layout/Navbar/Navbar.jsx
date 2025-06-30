import React from 'react';
import { Link } from 'react-scroll'; // ✅ Only use this, not react-router-dom
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='max-w-6xl sticky top-0 bg-white z-50 border-b border-gray-200 mx-auto h-16 flex justify-between items-center px-4 sm:px-6 lg:px-8'>
      <h1 className='font-inter text-lg font-extrabold'>Sifat</h1>

      {/* Desktop Nav */}
      <div className='hidden md:flex items-center justify-center'>
        <NavigationMenu>
          <NavigationMenuList>

            {[
              { name: 'Home', to: 'home' },
              { name: 'About Me', to: 'about' },
              { name: 'Education', to: 'education' },
              { name: 'Skills', to: 'skills' },
              { name: 'Projects', to: 'projects' },
              { name: 'Contact', to: 'contact' },
            ].map(({ name, to }) => (
              <NavigationMenuItem key={to}>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link
                    to={to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="cursor-pointer"
                  >
                    {name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Nav */}
      <div className='md:hidden'>
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent side="top" className="pt-8">
            <div className="flex flex-col space-y-2">
              {[
                { name: 'Home', to: 'home' },
                { name: 'About Me', to: 'about' },
                { name: 'Education', to: 'education' },
                { name: 'Skills', to: 'skills' },
                { name: 'Projects', to: 'projects' },
                { name: 'Contact', to: 'contact' },
              ].map(({ name, to }) => (
                <Link
                  key={to}
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="w-full p-2 text-lg font-medium cursor-pointer"
                >
                  {name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;