import { memo } from "react";

export default memo(function Context() {
  console.log("Context component rendered");

  return <h1 className="font-bold text-2xl">Click to increase number</h1>;
});
