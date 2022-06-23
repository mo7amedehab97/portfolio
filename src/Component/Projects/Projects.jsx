import React from 'react';
import FreshPet from '../../assets/freshPet.png';
import './projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Pokimony from '../../assets/pokimony.png';
import Tashteeb from '../../assets/tashteeb.png';
import 'swiper/css';
import Eye from '../../assets/eye.png';
import Gith from '../../assets/gith.png';

const Projects = () => {
  return (
    <div className="projects">
      <div className="project-header">
        <span>Most Recent </span>
        <span>Projects</span>
      </div>
      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="project-slider"
      >
        <SwiperSlide>
          <div className="preview">
            <span>
              <img src={Eye} alt="" />
            </span>
            <span>
              <img src={Gith} alt="" />{' '}
            </span>
          </div>
          <img src={Tashteeb} alt="tashteeb website" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="preview">
            <span>
              <img src={Eye} alt="" />
            </span>
            <span>
              <img src={Gith} alt="" />{' '}
            </span>
          </div>
          <img src={Pokimony} alt="tashteeb website" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="preview">
            <span>
              <img src={Eye} alt="" />
            </span>
            <span>
              <img src={Gith} alt="" />{' '}
            </span>
          </div>
          <img src={FreshPet} alt="tashteeb website" />
        </SwiperSlide>{' '}
        <SwiperSlide>
          <div className="preview">
            <span>
              <img src={Eye} alt="" />
            </span>
            <span>
              <img src={Gith} alt="" />{' '}
            </span>
          </div>
          <img src={FreshPet} alt="tashteeb website" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
