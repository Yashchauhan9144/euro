import React from "react";
import { Routes, Route } from "react-router-dom";
import { routing } from "./routing";
import DesignerHome from "../pages/home";
import DesignerAboutUs from "../pages/about";
import DesignerFerrous from "../pages/ferrous";
import DesignerMattelScrap from "../pages/mattel-scrap";
import DesignerCertificates from "../pages/certificates";
import DesignerContactUs from "../pages/contact";
import DesignerTermsCondition from "../pages/terms-condition";
import DesignerPrivacyPolicy from "../pages/privacy-policy";
import DesignerRubber from "../pages/rubber";

export const RouteList = React.memo(() => {
  return (
    <Routes>
      {/* Design Routes */}
      <Route path={routing.home} element={<DesignerHome />} />
      <Route path={routing.aboutUs} element={<DesignerAboutUs />} />
      <Route path={routing.ferrous} element={<DesignerFerrous />} />
      <Route path={routing.mattelScrap} element={<DesignerMattelScrap />} />
      <Route path={routing.rubber} element={<DesignerRubber />} />
      <Route path={routing.certificates} element={<DesignerCertificates />} />
      <Route path={routing.contact} element={<DesignerContactUs />} />
      <Route
        path={routing.termsCondition}
        element={<DesignerTermsCondition />}
      />
      <Route path={routing.privacyPolicy} element={<DesignerPrivacyPolicy />} />
    </Routes>
  );
});
