import React from "react";
import DesignerLayout from "../layout/layout";
import { Avatar, Breadcrumbs, Grid, Typography } from "@mui/material";
import {
  icBreadcrumbSepparator,
  rubberImg1,
  rubberImg2,
  rubberImg3,
} from "../../assets/images";
import { Link } from "react-router-dom";

function DesignerRubber() {
  return (
    <>
      <DesignerLayout>
        <section className="ferrous-banner breadcrumb-outer">
          <Typography variant="h1" data-aos="fade-up" data-aos-delay="100">
            Rubber
          </Typography>
          <Breadcrumbs
            separator={<Avatar src={icBreadcrumbSepparator} alt="Separator" />}
            aria-label="breadcrumb"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link to="/">Home</Link>
            <Typography aria-current="page">Rubber</Typography>
          </Breadcrumbs>
        </section>
        <section className="what-we-do">
          <div className="container">
            <Typography component="h3" variant="h2" align="center" gutterBottom>
              We <span className="orange-text">Focus On</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: 3 }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We focus on the global trade of high‑quality rubber scrap, including truck,
              OTR and industrial tyres. Our sourcing network allows us to supply
              consistent, specification‑driven material suitable for retreading,
              granulation, pyrolysis and other downstream recycling applications.
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: 3 }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Working closely with vetted collection and processing partners, we ensure
              material is prepared, sorted and loaded to meet customer requirements while
              complying with local and international regulations. From loose whole tyres
              to cut or baled material, we provide flexible options based on logistics
              and end‑use needs.
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: 0 }}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Whether you are looking to secure stable, long‑term supplies or market
              your available rubber scrap, our team is committed to building reliable,
              sustainable partnerships that add value across the supply chain.
            </Typography>
          </div>
        </section>
        <section className="ferrous-outer">
          <div className="container">
            <Typography component="h1" variant="h2" data-aos="fade-up">
              Rubber
            </Typography>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                md={4}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Link to="/" className="ferrous-card">
                  <Avatar
                    src={rubberImg1}
                    alt="rubber Img"
                    className="item-img"
                  />
                  <p className="title">BCT - Baled Car Tires</p>
                  <div className="hover-content">
                    <Typography variant="body1">
                      Baled car tyres (BCT) sourced from passenger and light
                      commercial vehicles. Uniform, compact bales optimised for
                      container or bulk shipment, suitable for shredding,
                      granulation, pyrolysis and other rubber recycling
                      processes.
                    </Typography>
                  </div>
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Link to="/" className="ferrous-card">
                  <Avatar
                    src={rubberImg2}
                    alt="rubber Img"
                    className="item-img"
                  />
                  <p className="title">3 Cut PCR / TBR / OTR Tires</p>
                  <div className="hover-content">
                    <Typography variant="body1">
                      Three-cut passenger car radial (PCR), truck and bus
                      radial (TBR), and off‑the‑road (OTR) tyres prepared to
                      standard sizes. Designed for efficient container loading,
                      easier handling and downstream processing in shredding,
                      crumbing and pyrolysis plants.
                    </Typography>
                  </div>
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Link to="/" className="ferrous-card">
                  <Avatar
                    src={rubberImg3}
                    alt="rubber Img"
                    className="item-img"
                  />
                  <p className="title">Baled TBR Tires</p>
                  <div className="hover-content">
                    <Typography variant="body1">
                      Baled truck and bus radial (TBR) tyres compressed and
                      tied for efficient storage and transport. Suitable for
                      retreading markets, tyre-derived fuel (TDF) and
                      large-scale recycling operations.
                    </Typography>
                  </div>
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Link to="/" className="ferrous-card">
                  <Avatar
                    src={rubberImg2}
                    alt="rubber Img"
                    className="item-img"
                  />
                  <p className="title">Shredded Tires</p>
                  <div className="hover-content">
                    <Typography variant="body1">
                      Mechanically shredded tyre scrap produced to controlled
                      size ranges. Ideal feedstock for crumb rubber, TDF
                      (tyre-derived fuel), moulded products and civil
                      engineering applications.
                    </Typography>
                  </div>
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <Link to="/" className="ferrous-card">
                  <Avatar
                    src={rubberImg3}
                    alt="rubber Img"
                    className="item-img"
                  />
                  <p className="title">Rubber Crumb / Powder</p>
                  <div className="hover-content">
                    <Typography variant="body1">
                      Processed rubber crumb and fine powder produced from
                      post-consumer and industrial tyres. Available in a range
                      of mesh sizes for moulded products, sports surfaces,
                      playgrounds, asphalt modification and other specialised
                      applications.
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

export default DesignerRubber;
