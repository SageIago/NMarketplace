import { createFileRoute } from "@tanstack/react-router";
import { useWriteContract } from "wagmi";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "@/constants";

export const Route = createFileRoute("/market/mint")({
  component: RouteComponent,
});

function RouteComponent() {
  const { writeContract, isPending } = useWriteContract();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const tokenURI = formData.get("tokenURI") as string;
    const tokenPrice = formData.get("price") as string;
    
    if(!tokenPrice && tokenURI) return

    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: "createToken",
      args: [tokenURI, BigInt(tokenPrice)],
    });
  }

  return (
    <>
      <form onSubmit={submit}>
        <input name="tokenURI" placeholder="URI" required />
        <input name="price" placeholder="Price" required />
        <button disabled={isPending} type="submit">
          Mint
        </button>
      </form>
    </>
  );
}
