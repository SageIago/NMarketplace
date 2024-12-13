
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/market/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="">
      <div>
        
        <h1>Welcome to the NFT MarketPlace...</h1>
      </div>

      <div>See Listed NFT's</div>

      <div>NFT's That Are On Sale</div>

      <div>Features</div>
    </div>
  );
}
