import React from "react";
import DesignerLayout from "../layout/layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Avatar, Button, Grid, Hidden, IconButton, Typography } from "@mui/material";
import {
  aboutUsImg1,
  aboutUsImg2,
  aboutUsImg3,
  aboutUsImg4,
  arrowRightPrimaryIcon,
  bannerBottomLeftShape,
  bannerBottomRightShape,
  carsScrapImg,
  clientImg1,
  clientImg2,
  ferrousImg1,
  ferrousImg2,
  ferrousImg3,
  ferrousImg4,
  ferrousImg5,
  ferrousImg6,
  heroBanner1,
  heroBanner2,
  heroBanner3,
  scrapLandscapeImg,
  slideNextArrow,
  slidePrevArrow,
  tyreScrapImg,
} from "../../assets/images";
import { Link } from "react-router-dom";

function DesignerHome() {
  const pagination = {
    clickable: true,
  };
  return (
    <DesignerLayout>
        <section className="hero-banner">
          <div
            className="hero-banner-inner"
            data-aos="fade-in"
            data-aos-delay="300"
            > 
            <Swiper
              className="swiper-outer"
              pagination={pagination}
              loop={true}
              navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
              modules={[Navigation, Pagination]}
            >
              <SwiperSlide>
                <div className="slide-content">
                  <Grid container spacing={{ xs: 2, xl: 6 }}>
                    <Grid item xs={12}>
                      <div className=""> {/* removed banner-block class */}
                        <div className="banner-block-inner" style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
                          <Avatar
                            src={heroBanner1}
                            alt="Banner Img"
                            className="banner-img"
                            sx={{
                              width: "100%",
                              height: "100%",
                              maxWidth: "100%",
                              objectFit: "cover",
                              zIndex: 2
                            }}
                          />
                          <Avatar
                            src={bannerBottomLeftShape}
                            alt="Banner Bottom Left"
                            className="banner-bottom-left shape"
                            sx={{
                              width: { xs: 80, sm: 120 },
                              height: "auto",
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              zIndex: 1
                            }}
                          />
                          <Avatar
                            src={bannerBottomRightShape}
                            alt="Banner Bottom Right"
                            className="banner-bottom-right shape"
                            sx={{
                              width: { xs: 80, sm: 120 },
                              height: "auto",
                              position: "absolute",
                              bottom: 0,
                              right: 0,
                              zIndex: 1
                            }}
                          />
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-content">
                  <Grid container spacing={{ xs: 2, xl: 6 }}>
                    <Grid item xs={12}>
                      <div className="">
                        <div className="banner-block-inner" style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
                          <Avatar
                            src={heroBanner2}
                            alt="Banner Img"
                            className="banner-img"
                            sx={{
                              width: "100%",
                              height: "100%",
                              maxWidth: "100%",
                              objectFit: "cover",
                              zIndex: 2
                            }}
                          />
                          <Avatar
                            src={bannerBottomLeftShape}
                            alt="Banner Bottom Left"
                            className="banner-bottom-left shape"
                            sx={{
                              width: { xs: 80, sm: 120 },
                              height: "auto",
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              zIndex: 1
                            }}
                          />
                          <Avatar
                            src={bannerBottomRightShape}
                            alt="Banner Bottom Right"
                            className="banner-bottom-right shape"
                            sx={{
                              width: { xs: 80, sm: 120 },
                              height: "auto",
                              position: "absolute",
                              bottom: 0,
                              right: 0,
                              zIndex: 1
                            }}
                          />
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-content">
                  <Grid container spacing={{ xs: 2, xl: 6 }}>
                    <Grid item xs={12}>
                      <div className="">
                        <div className="banner-block-inner" style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
                          <Avatar
                            src={heroBanner3}
                            alt="Banner Img"
                            className="banner-img"
                            sx={{
                              width: "100%",
                              height: "100%",
                              maxWidth: "100%",
                              objectFit: "cover",
                              zIndex: 2
                            }}
                          />
                          <Avatar
                            src={bannerBottomLeftShape}
                            alt="Banner Bottom Left"
                            className="banner-bottom-left shape"
                            sx={{
                              width: { xs: 80, sm: 120 },
                              height: "auto",
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              zIndex: 1
                            }}
                          />
                          <Avatar
                            src={bannerBottomRightShape}
                            alt="Banner Bottom Right"
                            className="banner-bottom-right shape"
                            sx={{
                              width: { xs: 80, sm: 120 },
                              height: "auto",
                              position: "absolute",
                              bottom: 0,
                              right: 0,
                              zIndex: 1
                            }}
                          />
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </SwiperSlide>              
            </Swiper>
            <IconButton
              color="primary"
              className="arrow-left arrow"
              aria-label="Previous slide"
            >
              <Avatar src={slidePrevArrow} alt="Previous slide" />
            </IconButton>
            <IconButton
              color="primary"
              className="arrow-right arrow"
              aria-label="Next slide"
            >
              <Avatar src={slideNextArrow} alt="Next slide" />
            </IconButton>
          </div>
        </section>
        <section className="about-us">
          <div className="container">
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid
                item
                xs={12}
                lg={6}
                sx={{ order: { xs: 1, lg: 0 } }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="content-block">
                  <Typography component="h2" variant="h4" className="primary-heading">
                    About Us
                  </Typography>
                  <Typography component="h3" variant="h2">
                    <span className="orange-text">Euro Metals</span> Limited
                  </Typography>
                  <Typography variant="body1">
                  Euro Metals Limited is a trading company based in London,
                  specializing in raw material products related to primary steel
                  production. Our main area of expertise is on Ferrous Scrap,
                  Non–Ferrous Scrap and Paper Scrap. We also specialize in
                  Secondary Steel Products.
                </Typography>
                <Typography variant="body1">
                  We have affiliate offices across the Americas, the Middle East,
                  Asia and Australia. Our wide geographical spread and presence in
                  several markets allows us to provide our suppliers with new
                  markets and our customers with new sourcing opportunities. Our
                  team of quality inspectors is trained and developed in-house
                  to ensure our customers receive nothing less than what we
                  commit to deliver.
                </Typography>
                <Typography variant="body1">
                  By partnering with us, the producers of recyclables and
                  secondary or stock-lot finished products can concentrate on
                  what they do best – producing. We aim to strengthen
                  long-term relationships with both our customers and suppliers
                  by offering a range of quality products at competitive prices.
                </Typography>
                <Typography variant="body1">
                  Locally, we provide pre-processors and manufacturers a regular
                  and reliable market for their recovered materials.
                  Internationally, we provide end users with a consistent source
                  of secondary raw material.
                </Typography>
                  <Button
                    variant="contained"
                    component={Link}
                    to="/about-us"
                    color="primary"
                  >
                    More Details
                  </Button>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                lg="auto"
                sx={{ order: { xs: 0, lg: 1 } }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Grid container spacing={2}>
                  <Hidden smDown>
                    <Grid item xs={12} sm="auto">
                      <div className="img-block">
                        <Avatar
                          src={aboutUsImg1}
                          alt="About US"
                          className="outlined-img img-1"
                        />
                        <Avatar
                          src={aboutUsImg2}
                          alt="About US"
                          className="outlined-img img-2"
                        />
                      </div>
                    </Grid>
                  </Hidden>
                  <Grid item xs={12} sm="auto">
                    <div className="img-block">
                      <Avatar
                        src={aboutUsImg3}
                        alt="About US"
                        className="outlined-img img-3"
                      />
                      <Avatar
                        src={aboutUsImg4}
                        alt="About US"
                        className="outlined-img img-4"
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </section>
        <section className="features">
          <div className="container">
            <Grid container spacing={2} alignItems={"center"}>
              <Grid item xs={12} lg={6} data-aos="fade-up" data-aos-delay="100">
                <Grid container spacing={2} alignItems="center">
                  <Grid
                    item
                    xs="auto"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <Avatar
                      src={tyreScrapImg}
                      alt="Banner Img"
                      className="outlined-img portrait-img"
                      sx={{
                        marginBottom: "16px",
                        display: { xs: "none", sm: "flex" },
                      }}
                    />
                    <Avatar
                      src={carsScrapImg}
                      alt="Banner Img"
                      className="outlined-img"
                    />
                  </Grid>
                  <Grid item xs="auto">
                    <Avatar
                      src={scrapLandscapeImg}
                      alt="Banner Img"
                      className="outlined-img portrait-img"
                      sx={{
                        marginBottom: "16px",
                        display: { xs: "none", sm: "flex" },
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={6} data-aos="fade-up" data-aos-delay="200">
                <div className="info-block">
                  <Typography component="h2" variant="h4" className="primary-heading">
                    Our Features
                  </Typography>
                  <Typography component="h3" variant="h2">
                    Briefly introduce your{" "}
                    <span className="orange-text">company</span>, its{" "}
                    <span className="orange-text">mission</span>, and commitment
                    to recycling.
                  </Typography>
                  <Typography variant="body1">
                    Built and backed by a team of experienced professionals and
                    industry experts, Euro Metals is designed to streamline trade
                    between Asia and the rest of the world.
                  </Typography>
                  <Typography variant="body1">
                    Our strategic services meet the needs of all types and sizes
                    of clients – from small set-ups to multinational entities.
                  </Typography>
                  <Button
                    variant="contained"
                    component={Link}
                    to="/about-us"
                    color="primary"
                  >
                    More Details
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </section>
        {/* <section className="green-energy">
          <Typography
            variant="body1"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            "Reduce, Reuse, Recycle: Be the Change for a Greener Future!"
          </Typography>
        </section> */}
        <section className="products">
          <div className="container">
            <Typography component="h2" variant="h2" data-aos="fade-up">
              Our <span className="orange-text">Products</span>
            </Typography>
            <Typography variant="body1" data-aos="fade-up" data-aos-delay="100">
              We provide a seamless platform for individuals and businesses to
              contribute to a sustainable future by recycling their scrap
              materials.
            </Typography>
            <Grid container spacing={2}>
              {/* <Grid
                item
                xs={12}
                md={6}
                lg={4}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="ferrous-card">
                  <Avatar
                    src={ferrousImg1}
                    alt="Ferrous Img"
                    className="item-img"
                  />
                  <p className="title">Ferrous</p>
                  <Link to="/ferrous" title="Read More" className="primary-link">
                    Read More
                    <Avatar src={arrowRightPrimaryIcon} alt="Right Arrow" />
                  </Link>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="ferrous-card">
                  <Avatar
                    src={ferrousImg2}
                    alt="Ferrous Img"
                    className="item-img"
                  />
                  <p className="title">Non Ferrous</p>
                  <Link to="/" title="Read More" className="primary-link">
                    Read More
                    <Avatar src={arrowRightPrimaryIcon} alt="Right Arrow" />
                  </Link>
                </div>
              </Grid> */}
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="ferrous-card">
                  <Avatar
                    src={ferrousImg3}
                    alt="Ferrous Img"
                    className="item-img"
                  />
                  <p className="title">Metal Scrap</p>
                  <Link to="/mattel-scrap" title="Read More" className="primary-link">
                    Read More
                    <Avatar src={arrowRightPrimaryIcon} alt="Right Arrow" />
                  </Link>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="ferrous-card">
                  <Avatar
                    src={ferrousImg4}
                    alt="Ferrous Img"
                    className="item-img"
                  />
                  <p className="title">Rubber</p>
                  <Link to="/rubber" title="Read More" className="primary-link">
                    Read More
                    <Avatar src={arrowRightPrimaryIcon} alt="Right Arrow" />
                  </Link>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="ferrous-card">
                  <Avatar
                    src={ferrousImg5}
                    alt="Ferrous Img"
                    className="item-img"
                  />
                  <p className="title">Plastic</p>
                  <Link to="/" title="Read More" className="primary-link">
                    Read More
                    <Avatar src={arrowRightPrimaryIcon} alt="Right Arrow" />
                  </Link>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div className="ferrous-card">
                  <Avatar
                    src={ferrousImg6}
                    alt="Ferrous Img"
                    className="item-img"
                  />
                  <p className="title">Paper</p>
                  <Link to="/" title="Read More" className="primary-link">
                    Read More
                    <Avatar src={arrowRightPrimaryIcon} alt="Right Arrow" />
                  </Link>
                </div>
              </Grid>
            </Grid>
          </div>
        </section>
      </DesignerLayout>
  );
}

export default DesignerHome;
