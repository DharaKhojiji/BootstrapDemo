import React from "react";
import "./Menu.css";
function Menu() {
  return (
    <section id="menu">
      <div className="container">
        <div className="row">
          <div className="menu-desc">
            <h4>MENU________</h4>
            <h1>Check Our Testy Menu</h1>
          </div>
          <div className="menus">
            <ul>
              <li>All</li>
              <li>Starters</li>
              <li>Salads</li>
              <li>Specialty</li>
            </ul>
          </div>
          <div className="menu-list">
            <div className="row">
              <div className="col-lg-6">
                <img src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/menu/lobster-bisque.jpg"></img>
                <div className="menu-content">
                  <a href="">Lobster Bisque</a>
                  <span>$20</span>
                </div>
              </div>
              <div className="col-lg-6">
                <img src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/menu/lobster-bisque.jpg"></img>
                <div className="menu-content">
                  <a href="">Lobster Bisque</a>
                  <span>$20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
