import { Link } from "@tanstack/react-router";
import assets from "@/assets";
import { NavLinks } from "@/constants";
import { useAccount, useDisconnect } from "wagmi";
import { Button } from "../ui/button";

const Navbar = () => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  return (
    <nav className="p-container container flex items-center justify-between py-4">
      <Link
        className="flex items-center justify-between gap-2 text-white-100"
        to="/"
      >
        <img src={assets.MarketPlaceLogo} alt="Logo" width={30} height={30} />
        <p className="font-mono text-[20px] font-bold leading-[26px]">
          NFT Marketplace
        </p>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NavLinks.map((link) => (
          <Link
            to={link.to}
            key={link.key}
            className="p-3 text-[16px] font-bold leading-[22px] text-white-100 hover:text-accent-100"
          >
            {link.link}
          </Link>
        ))}

        {address ? (
          <Button
            className={
              "bg-accent-100 text-white-100 p-3 border-[1px] hover:btn-hover flex justify-between gap-2 rounded-[10px]"
            }
            onClick={() => disconnect()}
          >
            Disconnect Wallet
          </Button>
        ) : (
          <Link
            className={
              "bg-accent-100 text-white-100 p-3 border-[1px] hover:btn-hover flex justify-between gap-2 rounded-[10px]"
            }
            to="/connect-wallet"
          >
            Connect Wallet
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
