import { Link } from "@tanstack/react-router";

import assets from "@/assets";
import { FooterIcons, NavLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="container mt-2 bg-secondary-100 px-8 py-5 sm:px-12 sm:py-10">
      <div className="flex items-start justify-between max-lg:flex-col max-lg:gap-10">
        {/* FIRST ONE */}
        <div className="flex flex-col flex-wrap items-start gap-3 ">
          <div className="flex items-center justify-between gap-2 text-white-100">
            <img
              src={assets.MarketPlaceLogo}
              alt="Logo"
              width={30}
              height={30}
            />
            <p className="font-mono text-[20px] font-bold leading-[26px]">
              NFT Marketplace
            </p>
          </div>

          <p className="text-wrap font-serif text-[16px] leading-[22.2px] text-[#CCCCCC]">
            NFT marketplace UI created with Anima for Figma.
          </p>
          <p className="font-serif text-[16px] leading-[22.2px] text-[#CCCCCC]">
            Join our community
          </p>

          <div className="flex justify-center gap-2">
            {FooterIcons.map((icon) => (
              <img
                src={icon.icon}
                alt="Icon"
                width={25}
                height={25}
                key={icon.key}
                className="cursor-pointer invert-[#CCCCCC] hover:scale-110"
              />
            ))}
          </div>
        </div>
        {/* THE SECOMD */}
        <div className="flex flex-col justify-between gap-3">
          <h5 className="h5 font-mono text-[#FFFFFF]">Explore</h5>

          {NavLinks.map((link) => (
            <Link
              to={link.to}
              key={link.key}
              className="text-[16px] leading-[22.2px] text-[#CCCCCC]"
            >
              {link.link}
            </Link>
          ))}
        </div>

        <div className="flex flex-col justify-between gap-2">
          <h5 className="h5 font-mono text-[#FFFFFF]">
            Join Our Weekly Digest
          </h5>

          <p className="text-[16px] leading-[22.2px] text-[#CCCCCC]">
            Get exclusive promotions & updates straight to your inbox.
          </p>

          <div>
            <div></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
