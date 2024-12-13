import { CONTRACT_ABI, CONTRACT_ADDRESS } from "@/constants";
import { createFileRoute } from "@tanstack/react-router";
import { useAccount, useReadContract } from "wagmi";

export const Route = createFileRoute("/market/view")({
  component: RouteComponent,
});
 
function RouteComponent() {
  const { address } = useAccount();
  const { data, error, isPending } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "fetchMarketItems",
    args: [],
    query: {
      enabled: !!address,
    },
  });

  console.log("fetchMarketItems", { data });

  if (isPending) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return "Hello /market/view!";
}
