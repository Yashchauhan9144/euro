import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  chevronRightIcon,
  icMenu,
  logo,
  mailWhite,
  phoneWhite,
  selectDownIcon,
} from "../../assets/images";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Hidden,
  IconButton,
  Menu,
} from "@mui/material";

interface HeaderProps {
  isHomePage: boolean;
}

function DesignerHeader({ isHomePage }: HeaderProps) {
  const headerClass = isHomePage ? "main-header" : "secondary-header";

  const openDrawer = () => {
    document.documentElement.classList.toggle("open-sidebar");
  };
  const removeDrawer = () => {
    document.documentElement.classList.remove("open-sidebar");
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [expandedDesktop, setExpandedDesktop] = React.useState<string | false>(
    false
  );
  const handleChangeDesktop =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedDesktop(isExpanded ? panel : false);
    };
  return (
    <>
      <header className={headerClass}>
        <div className="top-header">
          <div className="container">
            <div className="top-header-left">
              <p>Welcome to Euro Metals Ltd.</p>
            </div>
            <div className="top-header-right">
              <div className="contact-info">
                <Link to="tel:+44 203 355 9000" aria-label="Call Euro Metals">
                  <em className="icon">
                    <img src={phoneWhite} alt="phone" />
                  </em>
                  +44 203 355 9000
                </Link>
                <Link
                  to="mailto:trade@eurometals.uk"
                  aria-label="Email trade at Euro Metals"
                >
                  <em className="icon">
                    <img src={mailWhite} alt="phone" />
                  </em>
                  trade@eurometals.uk
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-header">
          <div className="container">
            <Hidden lgUp>
              <IconButton
                className="hamburger-menu"
                color="primary"
                onClick={openDrawer}
                data-aos="fade-in"
                aria-label="Open navigation menu"
              >
                <Avatar src={icMenu} alt="Hamburger" />
              </IconButton>
            </Hidden>
            <Link to="/" title="Euro Metal" className="logo" data-aos="fade-in">
              <img src={logo} alt="logo" title="Euro Metal" />
            </Link>
            <nav>
              <ul>
                <li data-aos="fade-in" data-aos-delay="100">
                  <NavLink to="/" title="Home" onClick={removeDrawer}>
                    Home
                  </NavLink>
                </li>
                <li data-aos="fade-in" data-aos-delay="200">
                  <NavLink
                    to="/about-us"
                    title="About Us"
                    onClick={removeDrawer}
                  >
                    About Us
                  </NavLink>
                </li>
                <Hidden lgDown>
                  <li data-aos="fade-in" data-aos-delay="300">
                    <Button
                      id="our-products-button"
                      aria-controls={open ? "our-products-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      href="#"
                      disableRipple
                    >
                      Our Products
                      <Avatar src={selectDownIcon} alt="Select" />
                    </Button>
                    <Menu
                      id="our-products-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "our-products-button",
                      }}
                      className="sub-menu"
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                    >
                      {/* <Accordion
                        expanded={expandedDesktop === "panelDesktop1"}
                        onChange={handleChangeDesktop("panelDesktop1")}
                      >
                        <AccordionSummary
                          aria-controls="panel1-content"
                          id="panel1-header"
                          expandIcon={
                            <Avatar src={chevronRightIcon} alt="Arrow" />
                          }
                        >
                          Scrap
                        </AccordionSummary>
                        <AccordionDetails>
                          <Link to="/ferrous" title="Ferrous">
                            Ferrous
                          </Link>
                          <Link to="/" title="Non-Ferrous">
                            Non-Ferrous
                          </Link>
                        </AccordionDetails>
                      </Accordion> */}
                       <Link to="/mattel-scrap" title="Metal Scrap">
                       Metal Scrap
                      </Link>
                      <Link to="/rubber" title="Rubber">
                        Rubber
                      </Link>
                      <Link to="#" title="Paper">
                        Paper
                      </Link>
                      <Link to="#" title="Plastic">
                        Plastic
                      </Link>
                    </Menu>
                  </li>
                </Hidden>
                <Hidden lgUp>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<Avatar src={chevronRightIcon} alt="Arrow" />}
                      aria-controls="our-products-mobile-content"
                      id="our-products-mobile-header"
                    >
                      Our Products
                    </AccordionSummary>
                    <AccordionDetails className="accordion-details-outer">
                      <div className="accordion-details">
                        <Link to="/mattel-scrap" title="Metal Scrap" onClick={removeDrawer}>
                        Metal Scrap
                        </Link>
                        <Link to="/rubber" title="Rubber" onClick={removeDrawer}>
                          Rubber
                        </Link>
                        <Link to="#" title="Paper" onClick={removeDrawer}>
                          Paper
                        </Link>
                        <Link to="#" title="Plastic" onClick={removeDrawer}>
                          Plastic
                        </Link>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </Hidden>
                <li data-aos="fade-in" data-aos-delay="400">
                  <NavLink
                    title="Certificates"
                    onClick={removeDrawer} to="/certificates"                  >
                    Certificates
                  </NavLink>
                </li>
              </ul>
            </nav>
            <Button
              variant="contained"
              title="Contact Us"
              component={Link}
              to="/contact-us"
              data-aos="fade-in"
              data-aos-delay="500"
            >
              Contact Us
            </Button>
            <Hidden lgUp>
              <div className="overlay" onClick={removeDrawer}></div>
            </Hidden>
          </div>
        </div>
      </header>
    </>
  );
}

export default DesignerHeader;
