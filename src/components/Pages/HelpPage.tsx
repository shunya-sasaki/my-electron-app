import mermaid from "mermaid";
import { useEffect, useState } from "react";

interface mermaidData {
  src: string;
}

const Mermaid = ({ src }: mermaidData) => {
  useEffect(() => {
    if (src?.length > 0) {
      mermaid.initialize({ startOnLoad: true });
      mermaid.run();
    }
  }, []);

  return <div className="mermaid text-transparent">{src}</div>;
};

export const HelpPage = () => {
  const src: string = `
    flowchart TD
    
    image["fa:fa-image image"]

    test --> image
  `;
  const src2: string = `
    flowchart TD

    test4["fa:fa-text text"]
    test3 --> test4
  `;
  return (
    <div>
      <div className=" text-xl">Help</div>
      test
      <Mermaid src={src} />
      <Mermaid src={src2} />
    </div>
  );
};
