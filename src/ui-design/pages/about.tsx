import React from "react";
import DesignerLayout from "../layout/layout";
import { Avatar, Breadcrumbs, Grid, Hidden, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  carsScrapImg,
  dottedFrame,
  icBreadcrumbSepparator,
  lgStoneImg,
  mdMettalsImg,
  mdMettalsPortraitImg,
  scrapLandscapeImg,
  squareRoadsPortraitImg,
  stonelandscapeImg,
  tyreScrapImg,
} from "../../assets/images";

function DesignerAboutUs() {
  return (
    <>
      <DesignerLayout>
        <section className="about-us-banner breadcrumb-outer">
          <Typography variant="h1" data-aos="fade-up" data-aos-delay="100">
            About Us
          </Typography>
          <Breadcrumbs
            separator={<Avatar src={icBreadcrumbSepparator} alt="Separator" />}
            aria-label="breadcrumb"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link to="/">Home</Link>
            <Typography aria-current="page">About Us</Typography>
          </Breadcrumbs>
        </section>
        <div className="container">
          <Grid
            container
            spacing={2}
            alignItems="center"
            className="about-us-row"
          >
            <Grid item xs={12} lg={6} data-aos="fade-up" data-aos-delay="200">
              <div className="imgs-block international-img-block">
                <Avatar
                  src={lgStoneImg}
                  alt="Stones"
                  className="outlined-img lg-img"
                />
                <Avatar
                  src={mdMettalsImg}
                  alt="Metal"
                  className="outlined-img md-img"
                />
                <Avatar src={dottedFrame} alt="Frame" className="frame" />
              </div>
            </Grid>
            <Grid item xs={12} lg={6} data-aos="fade-up" data-aos-delay="300">
              <div className="info-block about-us-block">
                <Typography component="h2" variant="h4" className="primary-heading">
                  About Us
                </Typography>
                <Typography component="h1" variant="h2">
                  <span className="orange-text">Euro Metals</span>{" "}
                  Limited
                </Typography>
                <Typography variant="body1">
                  Euro Metals Limited is a trading company based in London,
                  specializing in raw material products related to primary steel
                  production. Our main area of expertise is on Ferrous Scrap,
                  Non – Ferrous Scrap and Paper Scrap. We also specialize in
                  Secondary Steel Products.
                </Typography>
                <Typography variant="body1">
                  We have affiliate offices across the Americas, the Middle
                  East, Asia and Australia. Our wide geographical presence
                  allows us to provide our suppliers with new markets and our
                  customers with new sourcing opportunities. Our team of quality
                  inspectors is trained and developed in-house to ensure our
                  customers receive exactly what we commit to deliver.
                </Typography>
                <Typography variant="body1">
                  By partnering with us, producers of recyclables and
                  second-choice/stock-lot finished products can concentrate on
                  what they do best – producing. We aim to strengthen long-term
                  relationships with both our customers and suppliers by
                  offering a range of quality products at competitive prices.
                </Typography>
                <Typography variant="body1" className="pb-0">
                  Locally, we provide pre-processors and manufacturers a regular
                  and reliable market for their recovered materials.
                  Internationally, we provide end users with a consistent source
                  of secondary raw material.
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            className="features-row"
            alignItems={"center"}
          >
            <Grid
              item
              xs={12}
              lg={6}
              sx={{ order: { xs: 2, lg: 1 } }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="info-block about-us-block">
                <Typography component="h2" variant="h2">
                  Our <span className="orange-text">Features</span>
                </Typography>
                <Typography variant="body1">
                  Built and backed by a team of experienced professionals and
                  industry experts, Euro Metals International is designed to
                  streamline trade between Asia and the rest of the world.
                </Typography>
                <Typography variant="body1">
                  Our strategic services meet the needs of all types and sizes
                  of clients – from small set-ups to multinational entities.
                </Typography>
                <Typography variant="body1">
                  We deliver real results for American and European companies
                  looking to diversify their sales and gain additional margin on
                  scrap sales.
                </Typography>
                <Typography variant="body1">
                  We help suppliers and consumers gain a better understanding of
                  each other’s needs while taking on the risk directly by buying
                  the material directly from suppliers through direct payment.
                </Typography>
                <Typography variant="body1">
                  We remove the friction and deliver lasting growth to our
                  partners since our service prioritizes quality and
                  sustainability, over quantity.
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              lg={6}
              sx={{ order: { xs: 1, lg: 2 } }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent={{ lg: "flex-end" }}
              >
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
          </Grid>
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item xs={12} lg={6} data-aos="fade-up" data-aos-delay="100">
              <Grid container spacing={2}>
                <Hidden smDown>
                  <Grid item xs="auto">
                    <Avatar
                      src={stonelandscapeImg}
                      alt="Stone"
                      className="outlined-img"
                      sx={{ height: "100%" }}
                    />
                  </Grid>
                </Hidden>
                <Grid item xs="auto">
                  <Avatar
                    src={squareRoadsPortraitImg}
                    alt="Road"
                    className="outlined-img"
                    sx={{
                      marginBottom: "16px",
                      display: { xs: "none", sm: "flex" },
                    }}
                  />
                  <Avatar
                    src={mdMettalsPortraitImg}
                    alt="Metal Img"
                    className="outlined-img"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={6} data-aos="fade-up" data-aos-delay="200">
              <Typography component="h2" variant="h4" sx={{ paddingBottom: "12px" }}>
                Commodities in <span className="orange-text">Focus</span>
              </Typography>
              <Typography variant="body1" sx={{ paddingBottom: "12px" }}>
                Euro Metals International focuses its attention on the trade of
                recycled commodities and helps recycling companies connect with
                Asian mills’ purchasing teams to facilitate meaningful trade.
              </Typography>
              <Typography variant="body1" sx={{ paddingBottom: "24px" }}>
                With extensive sales knowledge and expertise of local markets in
                prevailing & emerging economies, Dhatu International is well
                placed to maximize margins.
              </Typography>
              <Typography component="h2" variant="h4" sx={{ paddingBottom: "12px" }}>
                Our <span className="orange-text">Partners</span>
              </Typography>
              <Typography variant="body1" sx={{ paddingBottom: "12px" }}>
                Our partner companies include some of the largest recycling
                companies in North America, Europe, the UK, Australia, New
                Zealand and Asia with volumes exceeding 100,000mt in just the
                last quarter.
              </Typography>
              <Typography component="h2" variant="h4" sx={{ paddingBottom: "12px" }}>
                Our <span className="orange-text">Team</span>
              </Typography>
              <Typography variant="body1" sx={{ paddingBottom: "0" }}>
                Our management team comprises of industry experts, bringing over
                80 years of combined experience to a well-established company.
                The team is led by Mr Chopra, who has spent the last two decades
                in the multi-lingual world of commodities trade.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </DesignerLayout>
    </>
  );
}

export default DesignerAboutUs;
