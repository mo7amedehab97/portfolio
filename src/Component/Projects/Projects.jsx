import React from 'react';
import FreshPet from '../../assets/freshPet.png';
import './projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Pokimony from '../../assets/pokimony.png';
import Tashteeb from '../../assets/tashteeb.png';
import 'swiper/css';
import Eye from '../../assets/eye.png';
import Gith from '../../assets/gith.png';
import Reddit from '../../assets/reddit.png';

const Projects = () => {
  return (
    <div className="projects">
      <div className="project-header">
        <span>Most Recent </span>
        <span>Projects</span>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="project-slider"
      >
        <SwiperSlide>
          <div className="preview">
            <span>
              <a
                href="https://tash6eeb.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Eye} alt="" />
              </a>
            </span>
            <span>
              <a
                href="https://github.com/GSG-G11/Tashteeb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Gith} alt="" />{' '}
              </a>
            </span>
          </div>
          <img src={Tashteeb} alt="tashteeb website" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="preview">
            <span>
              <a
                href="https://imaginative-crisp-6a6d5b.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Eye} alt="" />
              </a>
            </span>
            <span>
              <a
                href="https://github.com/GSG-G11/pokimony"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Gith} alt="" />{' '}
              </a>
            </span>
          </div>
          <img src={Pokimony} alt="Pokimony website" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="preview">
            <span>
              <a
                href="https://fresh-pet.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Eye} alt="" />
              </a>
            </span>
            <span>
              <a
                href="https://github.com/GSG-G11/fresh-pet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Gith} alt="" />{' '}
              </a>
            </span>
          </div>
          <img src={FreshPet} alt="FreshPet website" />
        </SwiperSlide>{' '}
        <SwiperSlide>
          <div className="preview">
            <span>
              <a
                href="https://reddit-mo7amed.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Eye} alt="" />
              </a>
            </span>
            <span>
              <a
                href="https://github.com/GSG-G11/mo7amed-reddit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Gith} alt="" />{' '}
              </a>
            </span>
          </div>
          <img src={Reddit} alt="Reddit website" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
