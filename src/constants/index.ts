import Asset from "@/assets/index";
import { marketplaceAbi } from "@/generated";
import { linkOptions } from "@tanstack/react-router";
import {
  BadgeDollarSign,
  Download,
  FishSymbol,
  Gem,
  Wallet,
} from "lucide-react";

export const NavLinks = [
  { to: "/marketplace", link: "MarketPlace", key: "#marketplace" },
  { to: "/rankings", link: "Rankings", key: "#rankings" },
];

export const FooterIcons = [
  { icon: Asset.YoutubeIcon, key: "#youtube" },
  { icon: Asset.TwitterIcon, key: "#twitter" },
  { icon: Asset.InstagramIcon, key: "#instagram" },
  { icon: Asset.DiscordIcon, key: "#discord" },
];

export const Sales = [
  { no: "240k+", title: "Total Sales" },
  { no: "100k+", title: "Auctions" },
  { no: "240k+", title: "Total Artists" },
];

export const CONTRACT_ADDRESS = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
export const CONTRACT_ABI = marketplaceAbi;

export const SidebarLinks = [
  linkOptions({
    to: "/market",
    label: "Home",
    icon: FishSymbol,
  }),
  linkOptions({
    to: "/market/create",
    label: "Create NFT",
    icon: Gem,
  }),
  linkOptions({
    to: "/market/view",
    label: "Check Listed NFT's",
    icon: Download,
  }),
  linkOptions({
    to: "/market/mint",
    label: "Mint NFT's",
    icon: Wallet,
  }),
  linkOptions({
    to: "/market/price",
    label: "Check Listing Price",
    icon: BadgeDollarSign,
  }),
];

export const FeaturesArray = [
  {
    title: "Create NFT",
    description:
      "Create your own NFT's and sell them on the marketplace. You can also buy NFT's from other users.",
  },
  {
    title: "Mint NFT",
    description: "Mint your NFT's and sell them on the marketplace. With Wagmi, you can mint your NFT's and sell them on the marketplace.",
  },
  {
    title: "Cheap Listing Price",
    description: "List your NFT's at a cheap price and sell them on the marketplace. And your proceeds will be sent to your wallet.",
  }
]
