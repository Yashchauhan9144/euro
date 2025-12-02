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

function DesignerMattelScrap() {
  const ferrousItems = [
    {
      title: "Shredded Steel Scrap",
      image: ferrousImg1,
      description:
        "High-quality shredded steel scrap suitable for melting and secondary steelmaking applications.",
    },
    {
      title: "Heavy Melting Steel Scrap",
      image: ferrousImg2,
      description:
        "Heavy melting steel (HMS) scrap in graded sizes, ideal for efficient furnace charging.",
    },
    {
      title: "Turnings",
      image: ferrousImg3,
      description:
        "Clean steel turnings generated from machining operations, ready for recycling.",
    },
    {
      title: "Plate & Structural",
      image: ferrousImg4,
      description:
        "Plate and structural steel scrap (PNS) from beams, plates, and profiles for remelting.",
    },
    {
      title: "Bushelling",
      image: ferrousImg5,
      description:
        "Prime bushelling scrap with low residual content for high-quality steel production.",
    },
    {
      title: "Blue Steel",
      image: ferrousImg6,
      description:
        "Blue steel and other premium ferrous offcuts with consistent chemistry and sizing.",
    },
  ];

  const nonFerrousItems = [
    {
      title: "Alternators & Starters",
      image: ferrousImg2,
      description:
        "Non-ferrous rich alternators and starters recovered from automotive dismantling.",
    },
    {
      title: "Electric Motors",
      image: ferrousImg3,
      description:
        "Copper and aluminium-bearing electric motors for recovery and refining.",
    },
    {
      title: "Taint Tabor",
      image: ferrousImg4,
      description:
        "Mixed aluminium sheet scrap (Taint/Tabor) suitable for re-melting and alloying.",
    },
    {
      title: "Tense",
      image: ferrousImg5,
      description:
        "Aluminium cast scrap (Tense) from automotive and industrial components.",
    },
    {
      title: "Zorba",
      image: ferrousImg6,
      description:
        "Zorba non-ferrous mix recovered from shredded scrap streams for further separation.",
    },
    {
      title: "Rotor",
      image: ferrousImg7,
      description:
        "Motor rotors and stators with recoverable copper and aluminium content.",
    },
  ];

  return (
    <>
      <DesignerLayout>
        <section className="ferrous-banner breadcrumb-outer">
          <Typography variant="h1" data-aos="fade-up" data-aos-delay="100">
            Metal Scrap
          </Typography>
          <Breadcrumbs
            separator={<Avatar src={icBreadcrumbSepparator} alt="Separator" />}
            aria-label="breadcrumb"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link to="/">Home</Link>
            <Typography aria-current="page">Metal Scrap</Typography>
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
              We focus on the global trade of a diverse range of scrap metals. On the ferrous
              side, this includes heavy melting steel (HMS 1, HMS 1&amp;2), shredded steel
              scrap 211, steel turnings, plate and structural scrap (PNS), and busheling
              grades. We also handle key non‑ferrous materials such as aluminium to support
              a wide mix of industrial and manufacturing needs.
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: 3 }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Beyond scrap, we offer an extensive portfolio of iron and steel products,
              including billets, blooms, slabs, hot‑rolled and cold‑rolled coils, rail tracks,
              cast iron, plate end cuts, re‑rollable steel, railway axles, and pure iron
              ingots. Leveraging our logistics experience, we coordinate reliable deliveries
              to customers across the globe.
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: 0 }}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Whether you are looking to buy or sell metal, and regardless of the volume, our
              team is committed to helping you find the right solution. With strong global
              sourcing capabilities, we provide competitive options tailored to your
              requirements so you can rely on us as a trusted, long‑term partner in the metal
              trade.
            </Typography>
          </div>
        </section>

        <section className="ferrous-outer">
          <div className="container">
            <Typography component="h1" variant="h2" data-aos="fade-up">
              Ferrous Scrap
            </Typography>
            <Grid container spacing={2}>
              {ferrousItems.map((item, index) => (
                <Grid
                  key={item.title}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  data-aos="fade-up"
                  data-aos-delay={`${(index + 1) * 100}`}
                >
                  <div className="ferrous-card">
                    <Avatar
                      src={item.image}
                      alt={item.title}
                      className="item-img"
                    />
                    <p className="title">{item.title}</p>
                    {item.description && (
                      <div className="hover-content">
                        <Typography variant="body1">
                          {item.description}
                        </Typography>
                      </div>
                    )}
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </section>

        <section className="ferrous-outer">
          <div className="container">
            <Typography
              component="h1"
              variant="h2"
              sx={{ marginTop: { xs: 4, md: 6 } }}
              data-aos="fade-up"
            >
              Non Ferrous Scrap
            </Typography>
            <Grid container spacing={2}>
              {nonFerrousItems.map((item, index) => (
                <Grid
                  key={item.title}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  data-aos="fade-up"
                  data-aos-delay={`${(index + 1) * 100}`}
                >
                  <div className="ferrous-card">
                    <Avatar
                      src={item.image}
                      alt={item.title}
                      className="item-img"
                    />
                    <p className="title">{item.title}</p>
                    {item.description && (
                      <div className="hover-content">
                        <Typography variant="body1">
                          {item.description}
                        </Typography>
                      </div>
                    )}
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </section>
      </DesignerLayout>
    </>
  );
}

export default DesignerMattelScrap;


