import { Manrope } from "next/font/google";
import { Libertinus_Math } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
});

export const libertinusMath = Libertinus_Math({
  subsets: ["latin"],
  weight: ["400"],
});
