import { Montserrat } from "next/font/google";
import { Playfair_Display } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400","500", "600","800"],
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "900"],
});
