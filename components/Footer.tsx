import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take your digital
          presence to the <span className="text-[#8b5cf6] "> next level?</span>
        </h1>      <Image
            src="/foot.svg"
            width={80}
            height={50}
            alt="emoji"
            className="inline-block justify-center align-middle"
          />
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you to
          achieve your goals.
        </p>
        <a href="mailto:abhiolics@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 mb-6 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal  font-light mb-2">
        Created with bugs, laughs & &#128155; by <span className="text-[#45ff42] md:text-base text-sm md:font-normal  font-light   mb-2">Abhay Pratap Singh</span> 
        </p>

        <div className="flex items-center md:gap-3 sm:gap-6 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.url} target="blank">   
              <img src={info.img} alt="icons" width={20} height={20} />
              </a>   
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;