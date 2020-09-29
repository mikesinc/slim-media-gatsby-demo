import React, { useState, useEffect } from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { graphql, useStaticQuery } from "gatsby"

const NavBar = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulSlimMedia {
        navbarLogo {
          file {
            url
          }
        }
      }
    }
  `)

  const [, setIsTop] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)

  const setTop = height => {
    document.querySelector(height).scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
    setIsExpanded(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > window.innerHeight * 0.4) {
        setIsTop(false)
        document.querySelectorAll(".nav-link").forEach(item => {
          item.classList.add("shrunk")
        })
      } else {
        document.querySelectorAll(".nav-link").forEach(item => {
          item.classList.remove("shrunk")
        })
        setIsTop(true)
      }
    })
  })

  return (
    <>
     <Navbar
        className="navy"
        fixed="top"
        bg="transparent"
        variant="dark"
        collapseOnSelect="true"
        expand="lg"
        expanded={isExpanded}
      >
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setIsExpanded(!isExpanded)}
        />
        <Navbar.Collapse className="toggled" id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Navbar.Brand>
              <img src={data.contentfulSlimMedia.navbarLogo.file.url} alt="logo" width="50px"></img>
            </Navbar.Brand>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link onClick={() => setTop(".about")}>
              About
            </Nav.Link>
            <Nav.Link onClick={() => setTop(".portfolio")}>
              Vimeo
            </Nav.Link>
            <Nav.Link onClick={() => setTop(".fightweek")}>
              Fightweek
            </Nav.Link>
            <Nav.Link onClick={() => setTop(".contact")}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavBar
