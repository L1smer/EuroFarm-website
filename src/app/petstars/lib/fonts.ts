import { Montserrat } from "next/font/google";
import { Playfair_Display } from "next/font/google";

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['500']
})

export const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['900']
})