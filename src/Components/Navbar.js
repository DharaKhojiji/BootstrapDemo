import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          RESTAURANTLY
        </a>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item items">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Menu
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Specials
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Events
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Chefs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Gallery
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Dropdown 1 &raquo;
                  </a>
                  <ul className="dropdown-menu dropdown-submenu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Sub Dropdown 1
                      </a>
                    </li>
                  </ul>

                  <li>
                    <a class="dropdown-item" href="#">
                      Dropdown 2
                    </a>
                  </li>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Dropdown 3
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Dropdown 4
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Dropdown 5
                  </a>
                </li>{" "}
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
            <button type="button" class="btn btn-outline-secondary">
              Book A Table
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
