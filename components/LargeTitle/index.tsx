import React from "react";

function LargeTitle({ title }: { title: string }) {
  return <h2 className={`large-title accent-color mb-3`}>{title}</h2>;
}

export default LargeTitle;
