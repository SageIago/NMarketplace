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

export const CONTRACT_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
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
