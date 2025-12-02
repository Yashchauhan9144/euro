import React from "react";
import DesignerLayout from "../layout/layout";
import {
  Avatar,
  Breadcrumbs,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import {
  callPrimaryIcon,
  emailPrimaryIcon,
  icBreadcrumbSepparator,
  locationPrimaryIcon,
  wappPrimaryIcon,
} from "../../assets/images";
import { Link } from "react-router-dom";

function DesignerContactUs() {
  const [selectProduct, setSelectProduct] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setSelectProduct(event.target.value as string);
  };
  return (
    <>
      <DesignerLayout>
        <section className="contact-us-banner breadcrumb-outer">
          <Typography variant="h1" data-aos="fade-up" data-aos-delay="100">
            Contact Us
          </Typography>
          <Breadcrumbs
            separator={<Avatar src={icBreadcrumbSepparator} alt="Separator" />}
            aria-label="breadcrumb"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link to="/">Home</Link>
            <Typography aria-current="page">Contact Us</Typography>
          </Breadcrumbs>
        </section>
        <section className="contact-us-outer">
          <div className="container">
            <Typography variant="h2" data-aos="fade-up" data-aos-delay="300">
              Get In <span className="orange-text">Touch!</span>
            </Typography>
            <Typography
              variant="body1"
              className="content-info"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Thank you for your interest in Euro Metals. If you have any
              questions, need assistance, or would like to speak with a member
              of our team, please don’t hesitate to contact us. You can reach us
              by filling out the contact form on our website. We’re here to help
              and look forward to connecting with you.
            </Typography>
            <div className="contact-wrapper">
              <div
                className="contact-form"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <Grid container spacing={2} sx={{ marginBottom: "24px" }}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      variant="outlined"
                      // value="Martin Smith"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      // value="martin.smith@gmail.com"
                      type="email"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      variant="outlined"
                      // value="+44 123 456 7890"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel id="select-product">
                        Select Product
                      </InputLabel>
                      <Select
                        labelId="select-product"
                        id="select-product-input"
                        value={selectProduct}
                        label="Select Product"
                        onChange={handleChange}
                      >
                        <MenuItem value="heavy-melting-steel">
                          Heavy Melting Steel Scrap
                        </MenuItem>
                        <MenuItem value="ferrous">Ferrous</MenuItem>
                        <MenuItem value="rubber">Rubber</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={4}
                      variant="outlined"
                      // defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
                    />
                  </Grid>
                </Grid>
                <Button variant="contained" color="primary">
                  Send Message
                </Button>
              </div>
              <div
                className="contact-primary-card"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <Typography variant="h3">Contact With Us</Typography>
                <ul>
                  <li>
                    <i className="icon">
                      <Avatar src={locationPrimaryIcon} alt="Location" />
                    </i>
                    <Typography variant="body1">
                      118 Cotswold Avenue, Bushey, WD23 4QH, Hertfordshire, United
                      Kingdom
                    </Typography>
                  </li>
                  <li>
                    <i className="icon">
                      <Avatar src={callPrimaryIcon} alt="Call" />
                    </i>
                    <Link
                      to="tel:+44 203 355 9000"
                      title="+44 203 355 9000"
                      aria-label="Call Euro Metals"
                    >
                      +44 203 355 9000
                    </Link>
                  </li>
                  <li>
                    <i className="icon">
                      <Avatar src={emailPrimaryIcon} alt="Email" />
                    </i>
                    <Link
                      to="mailto:trade@eurometals.uk"
                      title="trade@eurometals.uk"
                      aria-label="Email trade at Euro Metals"
                    >
                      trade@eurometals.uk
                    </Link>
                  </li>
                  <li>
                    <i className="icon">
                      <Avatar src={wappPrimaryIcon} alt="WhatsApp" />
                    </i>
                    <Link
                      target="_blank"
                      to="https://wa.me/+447818811786"
                      title="+44 781 881 1786"
                      aria-label="Chat with Euro Metals on WhatsApp"
                    >
                      +44 781 881 1786
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="map-outer" data-aos="fade-up" data-aos-delay="500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19832.223426053654!2d-0.3868975!3d51.6410371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48763f34d9400023%3A0xb8f5e82882dc00b5!2s118%20Cotswold%20Ave%2C%20Bushey%20WD23%204QH%2C%20UK!5e0!3m2!1sen!2sin!4v1714468501609!5m2!1sen!2sin"
                loading="lazy"
                width="100%"
                title="Location"
              ></iframe>
            </div>
          </div>
        </section>
      </DesignerLayout>
    </>
  );
}

export default DesignerContactUs;
