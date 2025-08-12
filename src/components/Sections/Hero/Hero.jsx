import {
  Download,
  Github,
  Linkedin,
  Locate,
  LocateFixed,
  LocateIcon,
  Mail,
} from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { BiLocationPlus } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 md:px-8 relative z-10">
      <div className="py-6 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-10  ">
        <div className="space-y-6 font-inter md:col-span-2">
          <div>
            <h1 className="font-inter font-bold text-4xl">Sifat Hasan</h1>
            <h3 className="text-xl py-2 text-[#71717a]">
              Full Stack Junior Developer
            </h3>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="flex gap-2 ">
              <Mail />{" "}
              <span className="text-sm text-[#71717a]">
                sifatshasan@gmail.com
              </span>
            </div>

            <div className="flex gap-2 ">
              <LocateIcon></LocateIcon>
              <span className="text-sm text-[#71717a]">
                Sirajgonj,Bangladesh
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm text-[#71717a]">
              Passionate Web Developer skilled in React.js, Tailwind CSS,
              Express.js, and MongoDB. I build responsive, user-friendly
              full-stack applications and love turning ideas into clean,
              functional designs. Actively learning and seeking real-world
              projects to grow and collaborate
            </p>
          </div>

          <div className="flex gap-4">
            <a href="/myresume.pdf" download>
              <Button>
                <Download className="mr-2" />
                Resume
              </Button>
            </a>
            <Link to="https://github.com/sifathasan2430" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                <Github />
              </Button>
            </Link>
            <Link to="https://www.linkedin.com/in/sifat-hasan-922b4125b/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                <Linkedin />
              </Button>
            </Link>
            <a href="mailto:sifatshasan@gmail.com">
              <Button variant="outline">
                <MdEmail />
              </Button>
            </a>
          </div>
        </div>
        <div className="p-4">
          <img
            className="h-60 w-60 rounded-full object-cover shadow-lg"
            src="https://i.ibb.co.com/8LPJqTx3/1754646608911-e-1758153600-v-beta-t-TO7-VI7y1-HS0-z-Vy-Fy-LSr6-K4-UG1-WSyfz-it-JDs-KC8-I.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
