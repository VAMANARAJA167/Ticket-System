import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

const Image = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="fade-left" data-aos-delay="200">
      <img src="assets/img/hero-img.png" className="img-fluid animated" alt="Hero" />
    </div>
  );
};

export default Image;
