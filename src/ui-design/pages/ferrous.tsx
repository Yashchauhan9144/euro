import React from "react";
import DesignerLayout from "../layout/layout";
import { Avatar, Breadcrumbs, Grid, Typography } from "@mui/material";
import {
  ferrousImg1,
  ferrousImg2,
  ferrousImg3,
  ferrousImg4,
  ferrousImg5,
  ferrousImg6,
  ferrousImg7,
  icBreadcrumbSepparator,
} from "../../assets/images";
import { Link } from "react-router-dom";

function DesignerFerrous() {
  return (
    <>
      <DesignerLayout>
        <section className="ferrous-banner breadcrumb-outer">
          <Typography variant="h1" data-aos="fade-up" data-aos-delay="100">
            Ferrous
          </Typography>
          <Breadcrumbs
            separator={<Avatar src={icBreadcrumbSepparator} alt="Separator" />}
            aria-label="breadcrumb"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link to="/">Home</Link>
            <Typography aria-current="page">Ferrous</Typography>
          </Breadcrumbs>
        </section>
        <section className="ferrous-outer">
          <div className="container">
            <Typography component="h1" variant="h2" data-aos="fade-up">
              Ferrous
            </Typography>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                md={6}
                xl={4}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Link to="/" className="ferrous-card">
                  <Avatar
                    src={ferrousImg1}
                    alt="Ferrous Img"
                    className="item-img"
                  />
                  <p className="title">Plate & Structural</p>
                  <div className="hover-content">
                    <Typography variant="body1">
                      Clean steel scrap, maximum size 2 feet by 5 feet,
                      including new factory busheling (for example, sheet
                      clippings, stampings, etc.). May not include old auto body
                      and fender stock. Free of metal coated, limed, vitreous
                      enameled, and electrical sheet containing over 0.5 percent
                      silicon.(ISRI Code-207)
                    </Typography>
                  </div>
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                xl={4}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Link to="/" className="ferrous-card">
                  <Avatar
                    src={ferrousImg2}
                    alt="Ferrous Img"
                    className="item-img"
                  />
                  <p className="title">Heavy Melting Steel Scrap</p>
                  <div className="hover-content">
                    <Typography variant="body1">
                      Clean steel scrap, maximum size 2 feet by 5 feet,
                      including new factory busheling (for example, sheet
                      clippings, stampings, etc.). May not include old auto body
                      and fender stock. Free of metal coated, limed, vitreous
                      enameled, and electrical sheet containing over 0.5 percent
                      silicon.(ISRI Code-207)
                    </Typography>
                  </div>
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                xl={4}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Link to="/" className="ferrous-card">
                  <Avatar
                    src={ferrousImg3}
                    alt="Ferrous Img"
                    className="item-img"
                  />
                  <p className="title">Turnings </p>
                  <div className="hover-content">
                    <Typography variant="body1">
                      Clean steel scrap, maximum size 2 feet by 5 feet,
                      including new factory busheling (for example, sheet
                      clippings, stampings, etc.). May not include old auto body
                      and fender stock. Free of metal coated, limed, vitreous
                      enameled, and electrical sheet containing over 0.5 percent
                      silicon.(ISRI Code-207)
                    </Typography>
                  </div>
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                xl={4}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Link to="/" className="ferrous-card">
                  <Avatar
                    src={ferrousImg4}
                    alt="Ferrous Img"
                    className="item-img"
                  />
                  <p className="title">Plate & Structural</p>
                  <div className="hover-content">
                    <Typography variant="body1">
                      Clean steel scrap, maximum size 2 feet by 5 feet,
                      including new factory busheling (for example, sheet
                      clippings, stampings, etc.). May not include old auto body
                      and fender stock. Free of metal coated, limed, vitreous
                      enameled, and electrical sheet containing over 0.5 percent
                      silicon.(ISRI Code-207)
                    </Typography>
                  </div>
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                xl={4}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <Link to="/" className="ferrous-card">
                  <Avatar
                    src={ferrousImg5}
                    alt="Ferrous Img"
                    className="item-img"
                  />
                  <p className="title">Bushelling</p>
                  <div className="hover-content">
                    <Typography variant="body1">
                      Clean steel scrap, maximum size 2 feet by 5 feet,
                      including new factory busheling (for example, sheet
                      clippings, stampings, etc.). May not include old auto body
                      and fender stock. Free of metal coated, limed, vitreous
                      enameled, and electrical sheet containing over 0.5 percent
                      silicon.(ISRI Code-207)
                    </Typography>
                  </div>
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                xl={4}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <Link to="/" className="ferrous-card">
                  <Avatar
                    src={ferrousImg6}
                    alt="Ferrous Img"
                    className="item-img"
                  />
                  <p className="title">Cast Iron</p>
                  <div className="hover-content">
                    <Typography variant="body1">
                      Clean steel scrap, maximum size 2 feet by 5 feet,
                      including new factory busheling (for example, sheet
                      clippings, stampings, etc.). May not include old auto body
                      and fender stock. Free of metal coated, limed, vitreous
                      enameled, and electrical sheet containing over 0.5 percent
                      silicon.(ISRI Code-207)
                    </Typography>
                  </div>
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                xl={4}
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <Link to="/" className="ferrous-card">
                  <Avatar
                    src={ferrousImg7}
                    alt="Ferrous Img"
                    className="item-img"
                  />
                  <p className="title">Blue Steel</p>
                  <div className="hover-content">
                    <Typography variant="body1">
                      Clean steel scrap, maximum size 2 feet by 5 feet,
                      including new factory busheling (for example, sheet
                      clippings, stampings, etc.). May not include old auto body
                      and fender stock. Free of metal coated, limed, vitreous
                      enameled, and electrical sheet containing over 0.5 percent
                      silicon.(ISRI Code-207)
                    </Typography>
                  </div>
                </Link>
              </Grid>
            </Grid>
          </div>
        </section>
      </DesignerLayout>
    </>
  );
}

export default DesignerFerrous;
