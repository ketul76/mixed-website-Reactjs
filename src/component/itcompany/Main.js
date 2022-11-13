import React from "react";
import './it-company-style.css';
function Main({menuData}){
return(
  <main>
        <section className="home" id="home">
          <img src="it_images/home_image.jpg" />
          <div className="text">
            <h1>{menuData.hometitle}</h1>
            <p>
              {menuData.hometext}
            </p>
          </div>
        </section>
        <section className="about" id="about">
          <div className="about-text">
            <h1>{menuData.abouttitle}</h1>
            <p>
              {menuData.abouttext}
            </p>
          </div>
          <img src="it_images/about.jpeg" />
        </section>
        <section className="services" id="service">
          <h1>{menuData.servicetitle}</h1>
          <div className="service-list">
            <div className="list1">
              <img src="images/services/digital.png" alt="" />
              <h2>{menuData.servicelist1}</h2>
              <img src="images/services/web-design.png" alt="" />
              <h2>{menuData.servicelist2}</h2>
              <img src="it_images/services/web-devlopment.jpg" alt="" />
              <h2>{menuData.servicelist3}</h2>
            </div>
            <div className="list2">
              <img src="it_images/services/seo.png" alt="" />
              <h2>{menuData.servicelist4}</h2>
              <img src="it_images/services/graphics.png" alt="" />
              <h2>{menuData.servicelist5}</h2>
              <img src="it_images/services/mobile.png" alt="" />
              <h2>{menuData.servicelist6}</h2>
            </div>
          </div>
        </section>
        <section className="contact" id="contact">
          <img src="it_images/contactus.jpg" alt="" />
          <div className="form">
            <h1>{menuData.contacttitle}</h1>
            <form action="">
              <label>{menuData.name}</label>
              <input type="text" placeholder="Enter Your Name" />

              <label>{menuData.email}</label>
              <input type="email" placeholder="Enter Your Email" />

              <label>{menuData.mobile}</label>
              <input type="number" placeholder="Enter Your Mobile number" />
              <input type="button" value="Submit" />
            </form>
          </div>
        </section>
      </main>
)
}

export default Main;