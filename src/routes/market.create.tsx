
import assets from '@/assets';
import PostForm from '@/components/forms/PostForm';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/market/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className="flex flex-1">
      <div className="flex flex-1 flex-col items-center gap-10 overflow-scroll px-0 py-10 md:px-10 w-full max-w-5xl">
        <div className="flex-start flex justify-center gap-3 w-[500px]">
          <img
            src={assets.CheckFolderIcon}
            width={30}
            height={30}
            alt="Add Icon"
          />
          <h2 className="text-[20px] leading-[26px] font-bold">
            Create a New NFT  
          </h2>
        </div>
        <PostForm />
      </div>
    </section>
  );
}
