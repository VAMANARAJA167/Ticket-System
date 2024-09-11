import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

const IconBoxes = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="row">
      <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div className="icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div className="icon"><i className="bx bxl-dribbble"></i></div>
          <h4 className="title"><a href="">Design</a></h4>
          <p className="description">
            Our web design services can assist you in reclaiming your company's online image. 
            Your business will flourish on the Internet thanks to the combination of style and technology we provide, 
            as well as our experience.
          </p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div className="icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
          <div className="icon"><i className="bx bx-file"></i></div>
          <h4 className="title"><a href="">Development</a></h4>
          <p className="description">
            Our development team can construct platforms to help your business thrive by creating powerful customised solutions 
            tailored to your particular requirements. Akeshya makes use of established and effective web development tools.
          </p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div className="icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
          <div className="icon"><i className="bx bx-world"></i></div>
          <h4 className="title"><a href="">Marketing</a></h4>
          <p className="description">
            A beautiful website is the foundation of effective marketing. Our customers achieve success where it counts—in the real world—by combining our proven approach with our passion for improving conversions and increasing ROI.
          </p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div className="icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
          <div className="icon"><i className="bx bx-tachometer"></i></div>
          <h4 className="title"><a href="">Support</a></h4>
          <p className="description">
            Since the beginning, we at Akeshya have specialised in website maintenance. We recognise the significance of having your business online 24 hours a day, seven days a week, and we've created a system to ensure that we're always available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IconBoxes;
