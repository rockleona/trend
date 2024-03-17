import { gsap } from "gsap";

import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";



export default defineNuxtPlugin(() => {
    gsap.registerPlugin(Flip, ScrollTrigger, MotionPathPlugin);

    return {
        provide: {
            gsap,
            Flip,
            ScrollTrigger,
            MotionPathPlugin
        }
    }
})