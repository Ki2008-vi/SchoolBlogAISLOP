import Lenis from "lenis/react";
import type { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <Lenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
        anchors: true,
        autoRaf: true,
      }}
    >
      {children}
    </Lenis>
  );
}