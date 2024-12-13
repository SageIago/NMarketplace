import { Sales } from "@/constants"
import { Button } from "../ui/button"
import assets from "@/assets";

const Hero = () => {
  return (
    <section className="flex !justify-center flex-col lg:flex-row lg:justify-between !gap-10">
      {/* THE FIRST DIV */}
      <div className="flex flex-col !gap-5">
        <div className="space-y-5 sm:space-y-0">
        <h1 className="text-[28px] leading-[39px] font-bold text-white-100 mb-3 sm:h1">Discover digital art
                <br className="sm:block hidden" /> {" "}
             & Collect NFTs {" "}
             </h1>
        <p className=" text-white-100  font-normal mt-2 body sm:text-[22px] sm:leading-[35px] text-[18px] leading-[20px]">
          NFT marketplace UI created with Anima for Figma. <br className="sm:block hidden" /> { "  "}Collect, buy and sell art from more than 20k NFT artists.
        </p>
        <Button className="flex gap-2 justify-between btn-primary hover:btn-hover bg-accent-100 text-white-100 border-[0px] !mt-3">
            <img src={assets.RocketLaunch}  alt="Rocket Launcher" width={20} height={20} />
            Get Started
        </Button>
        </div>

        <div className="flex justify-between !gap-3 mt-2">
          {Sales.map((sale, index) => (
            <div key={index + sale.no} className="mt-2 flex flex-col">
              <h4 className="font-mono font-bold mb-0.5 sm:h4 mt-2 text-[16px] leading-[22px]">{sale.no}</h4>
              <p className="sm:text-[24px] sm:leading-[39px] font-normal text-[13px] leading-[20px]">{sale.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* THE SECOND DIV */}
      <div className="flex flex-col rounded-[10px] text-white-100  !mx-10">
          <img src={assets.AnimaKidNFT} alt="Primary Image" className="object-contain" width={450} height={50}/>
          <div className="flex flex-col bg-secondary-100 w-full p-4 rounded-b-[10px]">
            <h5 className="font-[600] h5 ml-2">Space Walking</h5>
                <div className="flex gap-3 mx-2">
                    <img src={assets.Avatar1} alt="Anima Kid Logo" width={15} height={15} className="object-contain"/>
                    <p className="body font-normal">Animakid</p>
                </div>
          </div>
      </div>
    </section>
  );
}

export default Hero
