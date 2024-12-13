import assets from "@/assets";
import { useConnect } from "wagmi";

export function WalletOptions() {
  const { connectors, connect } = useConnect();
  
  return connectors.map((connector) => (
        <button
          onClick={() => connect({ connector })}
          key={connector.uid}
          className="text-white-100 p-8 space-x-6 border-[1px] border-accent-100 flex justify-between gap-2 text-[16px] leading-[22px] mt-3 rounded-[10px] font-bold items-center"
        >
          {connector.name === "MetaMask" && (
            <img src={assets.MetaMaskIcon} alt="" width={30} height={50} />
          )}
          {connector.name === "Coinbase Wallet" && (
            <img src={assets.CoinbaseIcon} alt="" width={30} height={50} />
          )}

          <p className="!text-[18px]">{connector.name}</p>
        </button>
      ))

}
