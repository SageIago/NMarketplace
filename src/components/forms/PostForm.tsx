import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "@/constants";
import { useToast } from "@/hooks/use-toast";
import { useWriteContract } from "wagmi";
import { Input } from "../ui/input";
// import { usdToBigInt } from "../../lib/utils";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  description: z.string().min(10, {
    message: "Please enter a description of at least 10 characters.",
  }),
  title: z.string(),
  nftprice: z.string(),
  tokenName: z.string(),
  tokenURI: z.string(),
});

function PostForm() {
  const { writeContract, isPending } = useWriteContract();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      title: "",
      nftprice: "",
      tokenName: "",
      tokenURI: "",
    },
  });

  console.log("PostForm", form.formState.errors);

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    writeContract(
      {
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: "createToken",
        args: [values.tokenURI, BigInt(25600000000000000)],
        // args: [values.tokenURI, usdToBigInt(Number(values.nftprice), 3974.78)],
      },
      {
        onSuccess: (data) => {
          console.log({ data });
          toast({
            title: "Creation of Token Succeeded",
            description: "Your Token Has Been Created!",
          });

          form.reset();
        },
        onError: (error) => {
          toast({
            title: "Creation of Token Failed",
            description: error.message,
          });
        },
      }
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-7 w-full mt-4 max-w-5xl"
      >
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white-100 font-bold text-[20px]">
                Description of the NFT
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter A Valid NFT Description"
                  {...field}
                  className=" h-36 bg-slate-900 text-white-100 border-none placeholder:text-white-100 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white-100 font-bold text-[20px]">
                Token Initials
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Please Enter the Name Of the Token"
                  {...field}
                  className=" h-12 bg-slate-900 text-white-100 border-none placeholder:text-white-100 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3"
                />
              </FormControl>
              <FormDescription>Example. MIT, ETR</FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="nftprice"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white-100 font-bold text-[20px]">
                Price of the Token
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="The Price Must be Greater Than $10.18 Dollars"
                  {...field}
                  className=" h-12 bg-slate-900 text-white-100 border-none placeholder:text-white-100 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tokenName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white-100 font-bold text-[20px]">
                Name of the NFT
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Name of the NFT"
                  {...field}
                  className=" h-12 bg-slate-900 text-white-100 border-none placeholder:text-white-100 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tokenURI"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white-100 font-bold text-[20px]">
                Token URI <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Please Enter the Token URI"
                  {...field}
                  className=" h-12 bg-slate-900 text-white-100 border-none placeholder:text-white-100 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3"
                />
              </FormControl>
              <FormDescription>Please add with a Image URL</FormDescription>
              {/* <FormMessage className="text-red-500"/> */}
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="bg-accent-100 text-white-100 hover:bg-accent-100 hover:text-white-100"
          disabled={isPending}
        >
          {isPending ? "Creating..." : "Create NFT Token"}
        </Button>
      </form>
    </Form>
  );
}

export default PostForm;
