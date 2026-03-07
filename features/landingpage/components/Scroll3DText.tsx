import { Skiper28 } from "@/components/ui/skiper-ui/skiper28";
import React from "react";


const Scroll3DText = () => {
  const array = ["DEVELOPER", "CREATOR", "BUILDER", "DESIGNER", "CODER", "LEARNER"];
  const text = "I'm Prince — a frontend developer who loves crafting clean, interactive UI experiences. I work with Next.js, React, TypeScript, and Tailwind CSS to build things that look great and feel smooth. I enjoy turning ideas into polished products, exploring new tools, and pushing the boundaries of what's possible on the web. Beyond code, I create content and share what I learn along the way. Always curious, always building. 🚀";
  return (
    <div>
        <Skiper28 text={text} arr={array} />
    </div>
  );
};

export default Scroll3DText;
