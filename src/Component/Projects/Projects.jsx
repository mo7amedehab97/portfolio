import React from 'react';
import FreshPet from '../../assets/freshPet.png';
import './projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Pokimony from '../../assets/pokimony.png';
import Tashteeb from '../../assets/tashteeb.png';
import 'swiper/css';
const Projects = () => {
  return (
    <div className="projects">
      <div className="project-header">
        <span>Most Recent </span>
        <span>Projects</span>
      </div>
      {/* slider */}
      <Swiper className="swiper">
        <SwiperSlide>
          <img src={Tashteeb} alt="tashteeb website" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pokimony} alt="tashteeb website" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={FreshPet} alt="tashteeb website" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
