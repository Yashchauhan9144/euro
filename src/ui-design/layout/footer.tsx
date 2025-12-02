import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  callWhiteIcon,
  emailWhiteIcon,
  footerLogo,
  googleIcon,
  linkedInIcon,
  locationWhiteIcon,
  wappWhiteIcon,
} from "../../assets/images";

function DesignerFooter() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <Grid container spacing={2}>
            <Grid item xs={12} lg={4.5} data-aos="fade-up" data-aos-delay="100">
              <Link to="/" title="Euro Metals" className="logo">
                <Avatar src={footerLogo} alt="Euro Metals" />
              </Link>
              <address className="address">
                Euro Metals Limited is a trading company based in London,
                specializing in raw material products related to primary steel
                production. Our main area of expertise is on Ferrous Scrap, Non
                – Ferrous Scrap and Paper Scrap. We also specialize in Secondary
                Steel Products.
              </address>
              <div className="social-media-outer">
                <Link to="/" title="LinkedIn" className="icon">
                  <Avatar src={linkedInIcon} alt="LinkedIn" />
                </Link>
                <Link to="/" title="Google" className="icon">
                  <Avatar src={googleIcon} alt="Google" />
                </Link>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={3.5}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Typography variant="h6">The Company</Typography>
              <ul className="company-list">
                <li>
                  <Link to="/ferrous" title="Ferrous">
                    Ferrous
                  </Link>
                </li>
                <li>
                  <Link to="/" title="Non Ferrous">
                    Non Ferrous
                  </Link>
                </li>
                <li>
                  <Link to="/" title="Secondary Steel Products">
                    Secondary Steel Products
                  </Link>
                </li>
                <li>
                  <Link to="/rubber" title="Rubber">
                    Rubber
                  </Link>
                </li>
                <li>
                  <Link to="/" title="Plastic">
                    Plastic
                  </Link>
                </li>
                <li>
                  <Link to="/" title="Paper">
                    Paper
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Typography variant="h6">Contact</Typography>
              <ul className="contact-list">
                <li>
                  <Avatar src={locationWhiteIcon} alt="Map" />
                  118 Cotswold Avenue, Bushey, WD23 4QH, Hertfordshire, United
                  Kingdom
                </li>
                <li>
                  <Avatar src={callWhiteIcon} alt="Call" />
                  <Link to="tel:+44 203 355 9000" title="+44 203 355 9000">
                    +44 203 355 9000
                  </Link>
                </li>
                <li>
                  <Avatar src={emailWhiteIcon} alt="Email" />
                  <Link
                    to="mailto:trade@eurometals.uk"
                    title="trade@eurometals.uk"
                  >
                    trade@eurometals.uk
                  </Link>
                </li>
                <li>
                  <Avatar src={wappWhiteIcon} alt="WhatsApp" />
                  <Link
                    to="https://wa.me/+447818811786"
                    target="_blank"
                    title="+44 781 881 1786"
                  >
                     +44 781 881 1786
                  </Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        </div>
        <div className="copyright-wrapper">
          <div className="container">
            <div className="copyright-outer">
              <Typography variant="body1">
                © 2020 eurometals.com. All Rights Reserved.
              </Typography>
              <div className="link-wrapper">
                <Link to="/terms-conditions">Terms and Conditions</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default DesignerFooter;
