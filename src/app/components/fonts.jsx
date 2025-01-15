import { Alata } from "next/font/google";
import { Jost } from "next/font/google";

export const alata = Alata({
  subsets: ["latin"],
  preload: true,
  weight: "400",
});
export const jost = Jost({
  weight: ["400", "700"],
  subsets: ["latin"],
});
