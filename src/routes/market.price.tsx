import assets from '@/assets'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/constants'
import { toast } from '@/hooks/use-toast'
import { ethersToUSD } from '@/utils'
import { createFileRoute } from '@tanstack/react-router'
import { useAccount, useReadContract } from 'wagmi'

export const Route = createFileRoute('/market/price')({
  component: RouteComponent,
})



function RouteComponent() {
  const { address } = useAccount()
  // Fetch the Listing Price
  const { data:listing_Price, error} = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "getListingPrice",
    query: {
      enabled: !!address
    }
  })

  if(error) {
    toast({
      title: "",
      description: "",
    })
  }

  return (
    <div className="flex flex-1">
      <div className="flex flex-1 flex-col items-center gap-10 overflow-scroll py-10 md:px-10">
        <div className="flex-start flex justify-center gap-3 w-full">
          <img
            src={assets.CheckFolderIcon}
            width={30}
            height={30}
            alt="Add Icon"
          />
          <h2 className="text-[20px] leading-[26px]">
            Check The MarketPlace Listing Price
          </h2>
        </div>

        <div className="!h-36 !rounded-xl !border-accent-100 border-[1px] justify-center px-10 py-10 flex flex-col">
          <h1 className="h1 text-center">
            {listing_Price
              ? `$${ethersToUSD({
                  etherAmount: listing_Price,
                  dollarPrice: 3974.78,
                })}`
              : "Not Found"}
          </h1>

          <p className="text-[20px] leading-[25px] p-3">
            This is the Minimum By Which You can Trade on the Marketplace
          </p>
        </div>
      </div>
    </div>
  );
}
