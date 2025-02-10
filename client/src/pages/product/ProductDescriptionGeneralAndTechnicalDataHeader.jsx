import { useState } from "react";
import Button from "../../components/Button";

export default function ProductDescriptionGeneralAndTechnicalDataHeader() {
  const [active, setActive] = useState(true);
  return (
    <div className="flex min-w-full">
      <Button
        extraClasses={active && "border-main border-b-4 cursor-default"}
        type="productDesktop"
      >
        Product Description
      </Button>
      {/* <Button type="productDesktop">General Data</Button> */}
      {/* <Button type="productDesktop">Technical Data</Button> */}
    </div>
  );
}
