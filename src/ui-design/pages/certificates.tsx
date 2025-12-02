import React from "react";
import DesignerLayout from "../layout/layout";
import { wip } from "../../assets/images";

function DesignerCertificates() {
  return (
    <>
      <DesignerLayout>
        <div className="wip-bg-outer">
            <img src={wip} alt="wip" />
        </div>
      </DesignerLayout>
    </>
  );
}

export default DesignerCertificates;
