import React from "react"
import Container from "react-bootstrap/Container"
import Navbar from "../Components/Navbar"
import ContactForm from "../Components/ContactForm"
import "bootstrap/dist/css/bootstrap.min.css"
import { graphql } from "gatsby"
import SEO from "../Components/seo"

export default ({ data }) => {
  return (
    <>
      <Navbar />
      <SEO title={data.contentfulSlimMedia.title} />
      <Container fluid className="overall">
        <Container fluid className="banner">

          <video className="backgroundVideo" loop autoPlay muted>
            <source
              src={data.contentfulSlimMedia.bannerVideo.file.url}
              type="video/mp4"
            />
            Your browser does not support the video.
          </video>

          <Container
            fluid
            className="glitch"
            data-text={data.contentfulSlimMedia.title}
          >
            {data.contentfulSlimMedia.title}
          </Container>
        </Container>

        <Container
          fluid
          className="about"
          style={{
            backgroundImage: `url(${data.contentfulSlimMedia.tonyImage.file.url}), linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0), rgba(0,0,0,1))`,
          }}
        >
          <p>{data.contentfulSlimMedia.blurb.blurb}</p>
        </Container>

        <Container fluid className="portfolio">
          <iframe
            className="portfolioVideo"
            title="Oh Gosh & Boomtick Presents; AJ Tracy"
            src={data.contentfulSlimMedia.preivewVideoLink}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>
            Please check out my{" "}
            <a
              href="https://vimeo.com/tonyknight"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "yellow" }}
            >
              Vimeo
            </a> for my portfolio
          </p>
        </Container>

        <Container
          fluid
          className="fightweek"
          style={{
            backgroundImage: `url(${data.contentfulSlimMedia.background2.file.url}), linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0), rgba(0,0,0,1))`,
          }}
        >
          <h1>{data.contentfulSlimMedia.fightweekTitle}</h1>
          <p>{data.contentfulSlimMedia.fightweekBlurb}</p>
          <p>Link to the series YouTube below</p>
          <iframe
            className="fightVideo"
            title="FIGHTWEEK EPISODE 1: Chris Killa Watt Pt1"
            src={data.contentfulSlimMedia.fightWeekVideoLink}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Container>

        <Container fluid className="contact" style={{
            backgroundImage: `url(${data.contentfulSlimMedia.background3.file.url}), linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0), rgba(0,0,0,1))`,
          }}>
          <h1>{data.contentfulSlimMedia.contactTitle}</h1>
          <p>{data.contentfulSlimMedia.contactHeader}</p>
          <ContactForm />
          <Container fluid className="author">
          <Container fluid className="links">
            <a
              href="https://www.facebook.com/slimjongil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/images/facebook.png")}
                height="30px"
                width="30px"
                alt="slimjongil_fb"
              ></img>
            </a>
            <a
              href="https://www.instagram.com/slimjongil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/images/instagram.png")}
                height="30px"
                width="30px"
                alt="slimjongil_ig"
              ></img>
            </a>
            <a
              href="https://vimeo.com/tonyknight"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/images/vimeo.png")}
                height="30px"
                width="30px"
                alt="slimjongil_vm"
              ></img>
            </a>
            <a
              href="https://www.youtube.com/channel/UCmXvxk9rqozVQU6RE1EMdYw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/images/youtube.png")}
                height="30px"
                width="30px"
                alt="slimjongil_yt"
              ></img>
            </a>
          </Container>
            <div>
              <a
                href="https://github.com/mikesinc"
                target="_blank"
                rel="noopener noreferrer"
              >
                website by mikesinc
              </a>
              <div style={{ fontSize: "6px" }}>
                Icons made by{" "}
                <a
                  href="https://www.flaticon.com/authors/freepik"
                  title="Freepik"
                >
                  Freepik
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>
              </div>
            </div>
          </Container>
        </Container>
      </Container>
    </>
  )
}

export const query = graphql`
  {
    contentfulSlimMedia {
      title
      blurb {
        blurb
      }
      bannerVideo {
        file {
          url
        }
      }
      background3 {
        file {
          url
        }
      }
      background2 {
        file {
          url
        }
      }
      background1 {
        file {
          url
        }
      }
      tonyImage {
        file {
          url
        }
      }
      contactHeader
      contactTitle
      fightWeekVideoLink
      fightweekBlurb
      fightweekTitle
      navbarLogo {
        file {
          url
        }
      }
      preivewVideoLink
    }
  }
`
