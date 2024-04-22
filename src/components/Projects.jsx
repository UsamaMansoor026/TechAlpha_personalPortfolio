import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { myProjects } from "./Constants";

const Projects = () => {
  return (
    <section id="projects" className="px-12 md:px-[70px] mb-16">
      <div className="flex items-center justify-center flex-col h-[600px] ">
        <h1 className="mb-6 text-[#5127db] text-2xl md:text-4xl font-semibold uppercase">
          Latest Projects
        </h1>
        <Swiper
          breakpoints={{
            600: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="w-full"
        >
          {myProjects.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col gap-6 mb-20 group relative shadow-sm shadow-[#5127db] text-my-fontColor rounded-xl px-6 py-8 h-[250px] lg:h-[330px] overflow-hidden cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-80" />
                <div className="mt-16 z-50 hidden group-hover:block ">
                  <h1 className="text-xl lg:text-2xl text-[#5127db] font-semibold my-5 text-center">
                    {item.title}{" "}
                  </h1>
                  <div className="text-center mt-4">
                    <a
                      href={item.liveLink}
                      target="_blank"
                      className="text-sm py-2 px-6 text-my-fontColor bg-white font-semibold"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
