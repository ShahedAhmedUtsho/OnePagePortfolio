import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Navigation } from 'swiper/modules';
import { Clock, Download, Facebook, Github, Linkedin, Mail, MoveUpRight } from 'lucide-react';
import Lottie from 'react-lottie';

import reactIcon from '../../../../public/skills-icons/react.svg';
import css from '../../../../public/skills-icons/css.svg';
import firebase from '../../../../public/skills-icons/firebase.svg';
import html from '../../../../public/skills-icons/gtml.svg';
import jwt from '../../../../public/skills-icons/icons8-jwt.svg';
import expressjs from '../../../../public/skills-icons/icons8-express-js.svg';
import mongodb from '../../../../public/skills-icons/mongodb.svg';
import js from '../../../../public/skills-icons/icons8-javascript.svg';

const projectData = [
  {
    title: 'MediCamps',
    description: 'Medicamps is a free medical camps management website. It allows users to see available camps and offers features for managing and organizing medical camps effectively. Organizers can host medical camps, and participants can register for those camps. The admin has a dashboard, and participants have a profile and a dashboard where they can check payments and all registrations.',
    features: [
      'User authentication and management',
      'Responsive design for all devices',
      'Payment gateway'
    ],
    imageUrl: 'https://i.ibb.co/LnJfd99/1718779217702.jpg',
    order: {
      image: 'lg:order-1',
      content: 'lg:order-2'
    }
  },
  {
    title: 'PicassoPallet',
    description: 'Picassopallet is a gateway to the world of art. Explore, create, and connect with artists and paintings that inspire you. This is a painting selling website where artists and art enthusiasts can come together to buy and sell paintings.',
    features: [
      'Dynamic Routing',
      'Responsive in all devices',
      'Painting Listings: Browse through a wide range of paintings from various artists, sorted by categories.',
      'User Authentication',
      'Dark Mode and Light Mode'
    ],
    imageUrl: 'https://i.ibb.co/Q6yRnkH/screencapture-assignment-10-6777f-web-app-2024-07-04-01-57-14.png',
    order: {
      image: 'lg:order-2',
      content: 'lg:order-1'
    }
  },
  {
    title: 'ShareBite',
    description: 'ShareBite is a cutting-edge MERN stack project designed to combat food insecurity by connecting food donors with individuals in need. The platform ensures a seamless experience for users, from contributing food donations to requesting assistance. This full-stack web application leverages MongoDB, Express.js, React, and Node.js to deliver a seamless and efficient user experience.',
    features: [
      'User authentication and management',
      'Responsive design for all devices',
      'Request and Donate food'
    ],
    imageUrl: 'https://i.ibb.co/dGw66BN/screencapture-assignment-11-f266c-web-app-2024-07-04-02-20-09.png',
    order: {
      image: 'lg:order-1',
      content: 'lg:order-2'
    }
  }
];

const icons = [reactIcon, css, firebase, html, jwt, expressjs, mongodb, js];

const ProjectsSection = () => {
  return (
    <div className="mt-2 md:p-[0.5px] rounded-sm bg-gradient-to-tr dark:from-slate-600 dark:to-teal-600">
      <div className="flex flex-col md:min-h-96 gap-2 bg-indigo-200 dark:bg-slate-800 globalBG rounded-sm lg:p-6 md:p-4 p-2 box-border">
        {projectData.map((project, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="grid lg:grid-cols-12 w-full h-full gap-2 items-center justify-center p-3">
              <div navigation={true} className={`mySwiper relative min-h-80 mb-2 lg:mb-0 bannarCard h-full w-full col-span-12 lg:col-span-3 ${project.order.image}`}>
                <div className={`bg-[url("${project.imageUrl}")] bg-cover bg-top bg-no-repeat h-full`}></div>
              </div>
              <div className={`min-h-80 bannarCard col-span-12 lg:col-span-9 ${project.order.content}`}>
                <div className="md:min-h-fit min-h-44 w-full md:col-span-2 md:row-span-2">
                  <div className="border-black w-full p-4 md:col-span-3 lg:col-span-6 order-3 lg:row-span-4">
                    <h6 className="text-xs mb-[0.5px] font-black dark:text-slate-400 text-slate-600 leading-tight tracking-tight uppercase">
                      Mern Stack
                    </h6>
                    <div className="text-lg dark:text-slate-200 text-slate-800 md:text-2xl font-medium leading-tight tracking-tight">
                      {project.title}
                    </div>
                    <div className="text-sm dark:text-slate-400 text-slate-600 font-light leading-relaxed tracking-normal">
                      {project.description}
                      <div className="mt-4">
                        <div className="text-sm dark:text-slate-400 text-slate-600 font-light leading-relaxed tracking-normal">
                          <span className="font-black text-teal-600 dark:text-teal-300">Some features</span>
                        </div>
                        <ul className="list-disc list-inside">
                          {project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="min-h-14 flex w-full p-2 gap-2 items-center">
                    {icons.map((icon, i) => (
                      <div key={i} className="col-span-1 bannar-grid2-listItem commonBox flex justify-center items-center gap-2">
                        <img className="p-2 border-box" src={icon} alt="" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
