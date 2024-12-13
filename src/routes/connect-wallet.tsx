import assets from "@/assets";
import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import { WalletOptions } from "@/components/wallet-options";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useAccount } from "wagmi";

export const Route = createFileRoute("/connect-wallet")({
  component: ConnectWalletPage,
});

function ConnectWalletPage() {
  const { address } = useAccount();

  return (
    <>
      <Navbar />
      <section className="flex min-h-screen">
      {/* IMAGE */}
      <img
        src={assets.StarNFT}
        alt="StarNFT"
        className="hidden h-screen xl:block w-1/2 object-cover bg-no-repeat"
      />

      {address ? (
        <>
         <div className="max-h-[300px] flex flex-1 justify-between space-y-5 mt-10 items-center flex-col">
         <h2 className="text-[36px] leading-[49px] font-bold">
            Your Wallet has been Connected!
          </h2>
          <Link className="text-[18px] leading-[24px] font-normal mt-2" to="/market">
            Click Here to Redirect To Marketplace.
          </Link>
         </div>
        </>
      ) : (
        <div className=" max-h-[300px] flex flex-1 justify-between space-y-5 mt-10 items-center flex-col">
          <h2 className="text-[36px] leading-[49px] font-bold">
            Connect Your Wallet
          </h2>
          <p className="text-[18px] leading-[24px] font-normal mt-2">
            Choose A Wallet You Want to Connect.{" "}
            <br className="sm:block hidden" />
            There are several Wallet Providers.
          </p>

          <div className="items-center flex justify-between gap-2 flex-col">
            <WalletOptions />
          </div>
        </div>
      )}
    </section>

    <Footer />
    </>
  );
}
