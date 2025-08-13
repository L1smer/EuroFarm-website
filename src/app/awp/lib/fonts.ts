import { Manrope } from "next/font/google";
import { Sora } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
});

export const sora = Sora({
  subsets: ["latin"],
  weight: "400",
});
