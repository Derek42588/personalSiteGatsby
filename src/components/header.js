import { Link, graphql } from "gatsby"

import React from "react"

import IconGithub from "../assets/github.svg"
import IconPDF from "../assets/file-pdf.svg"
import IconPhone from "../assets/mobile.svg"
import IconEmail from "../assets/mail4.svg"

import resume from "../media/DCP Resume.pdf"

const Header = ({ toggleShelf }) => (
  <div className="NavBar">
    <ul className="NavBar__nav">
      <li className="NavBar__nav__item NavBar__nav__item--full">
        <Link to="/#AboutMe" className="NavBar__nav__item__link">
          About Me
        </Link>
      </li>
      <li className="NavBar__nav__item NavBar__nav__item--full">
        <Link to="/#Projects" className="NavBar__nav__item__link">
          Projects
        </Link>
      </li>
      <li className="NavBar__nav__item NavBar__nav__item--full">
        <Link to="/#Contact" className="NavBar__nav__item__link">
          Contact
        </Link>
      </li>
      <li className="NavBar__nav__item NavBar__nav__item--full">
        <Link to="/blog" className="NavBar__nav__item__link">
          Blog
        </Link>
      </li>
      <li className="NavBar__nav__item NavBar__nav__item--full">
        <ul className="NavBar__nav__item__sublist">
          <li className="NavBar__nav__item__sublist__item">
            <a href="https://github.com/Derek42588">
              <IconGithub className="NavBar__nav__item__sublist__item__icon" />
            </a>
          </li>
          <li className="NavBar__nav__item__sublist__item">
            <a target="_blank" href={resume}>
              <IconPDF className="NavBar__nav__item__sublist__item__icon" />
            </a>
          </li>
          <li className="NavBar__nav__item__sublist__item">
            <a href="tel:+1(201)400-9742">
              <IconPhone className="NavBar__nav__item__sublist__item__icon" />
            </a>
          </li>
          <li className="NavBar__nav__item__sublist__item">
            <a href="mailto:derekpyle@gmail.com">
              <IconEmail className="NavBar__nav__item__sublist__item__icon" />
            </a>
          </li>
        </ul>
      </li>
      <li
        className="NavBar__nav__item NavBar__nav__item--mobile"
        onClick={() => toggleShelf()}
      >
        <span className="NavBar__nav__item__icon">&nbsp;</span>
      </li>
    </ul>
  </div>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header

// export const query = graphql`
// {
//   allImageSharp {
//     edges {
//       node{
//         fluid {
//           src
//         }
//       }
//     }
//   }
// }
// `
