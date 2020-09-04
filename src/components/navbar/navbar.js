import React from "react"
import logo from "../../images/Logo.webp"
import {graphql,StaticQuery} from 'gatsby';

const Navbar = () => {

    return <StaticQuery 
        query={graphql`
        {
  allWordpressWpApiMenusMenusItems {
    edges {
      node {
        items {
          object_slug
          title
        }
      }
    }
  }
}

        `}
    render={props => {
        return (
            <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
              <div className="container">
              <a className="navbar-brand" href="#">
                <img src={logo} alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">

                    {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(menu => 
                            <li className="nav-item ">
                            <a className="nav-link" href={`/${menu.object_slug}`}>
                             {menu.title}
                            </a>
                          </li>
                        
                        )}
                  {/* <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home 
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li> */}
                </ul>
              </div>
              </div>
            </nav>
          )
    }}    
    
    />



  
}

export default Navbar
