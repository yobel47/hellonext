import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Page() {
  const app = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".square", { rotate: 360, duration: 5 });
      //gsap.to(".square2", { rotate: 360, duration: 5 });
      //gsap.to(".square3", { rotate: 360, duration: 5 });
    }, app);

    return () => ctx.revert();
  }, []);
  return (
    <div  ref={app}>
      {/* <div className="w-3/4 h-1/2 bg-red-500">tes</div> */}
      <h1 className="square">Hello, Next.js!</h1>
    </div>
  );
}
