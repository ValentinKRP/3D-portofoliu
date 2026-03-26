import React, { useState } from "react";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({
  index,
  name,
  description,
  role,
  stack,
  useCase,
  highlights,
  tags,
  images,
  source_code_link,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasGallery = images.length > 1;

  const showSlide = (nextIndex) => {
    setActiveIndex((nextIndex + images.length) % images.length);
  };

  return (
    <div className='w-full'>
      <div className='w-full rounded-2xl border border-white/10 bg-[#0d1324] p-6 shadow-card md:p-8'>
        <div>
          <h3 className='text-[28px] font-bold text-white'>{name}</h3>
          <p className='mt-3 text-[15px] leading-[28px] text-white/80'>{description}</p>

          <div className='mt-6 grid gap-3 sm:grid-cols-3'>
            <div className='rounded-2xl border border-white/10 bg-black/30 p-4'>
              <p className='text-[12px] uppercase tracking-[0.18em] text-white/55'>Role</p>
              <p className='mt-2 text-[15px] leading-6 text-white'>{role}</p>
            </div>
            <div className='rounded-2xl border border-white/10 bg-black/30 p-4'>
              <p className='text-[12px] uppercase tracking-[0.18em] text-white/55'>Stack</p>
              <p className='mt-2 text-[15px] leading-6 text-white'>{stack}</p>
            </div>
            <div className='rounded-2xl border border-white/10 bg-black/30 p-4'>
              <p className='text-[12px] uppercase tracking-[0.18em] text-white/55'>Use Case</p>
              <p className='mt-2 text-[15px] leading-6 text-white'>{useCase}</p>
            </div>
          </div>

          <ul className='mt-6 space-y-3'>
            {highlights.map((highlight, highlightIndex) => (
              <li
                key={`${name}-highlight-${highlightIndex}`}
                className='flex gap-3 text-[15px] leading-[27px] text-white/80'
              >
                <span className='mt-[10px] h-2 w-2 shrink-0 rounded-full bg-[#915EFF]' />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className='mt-6 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>

          {source_code_link ? (
            <button
              type='button'
              onClick={() => window.open(source_code_link, "_blank")}
              className='mt-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/30 px-5 py-3 text-[14px] font-medium text-white transition hover:border-[#915EFF] hover:bg-black/50'
            >
              <img
                src={github}
                alt='source code'
                className='h-4 w-4 object-contain'
              />
              View repository
            </button>
          ) : null}

          <div className='mt-8'>
            <div className='relative overflow-hidden rounded-2xl border border-white/10 bg-black/30'>
              <img
                src={images[activeIndex]}
                alt={`${name} preview ${activeIndex + 1}`}
                className='h-[340px] w-full bg-[#050816] object-contain'
              />

              {hasGallery ? (
                <>
                  <button
                    type='button'
                    onClick={() => showSlide(activeIndex - 1)}
                    className='absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/65 text-white'
                  >
                    &#8249;
                  </button>
                  <button
                    type='button'
                    onClick={() => showSlide(activeIndex + 1)}
                    className='absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/65 text-white'
                  >
                    &#8250;
                  </button>
                </>
              ) : null}
            </div>

            {hasGallery ? (
              <div className='mt-3 flex gap-2 overflow-x-auto pb-2'>
                {images.map((image, imageIndex) => (
                  <button
                    key={`${name}-thumb-${imageIndex}`}
                    type='button'
                    onClick={() => showSlide(imageIndex)}
                    className={`shrink-0 overflow-hidden rounded-xl border ${
                      imageIndex === activeIndex ? "border-[#915EFF]" : "border-white/10"
                    } bg-[#050816]`}
                  >
                    <img
                      src={image}
                      alt={`${name} thumbnail ${imageIndex + 1}`}
                      className='h-20 w-28 bg-[#050816] object-contain'
                    />
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Selected Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>

      <div className='w-full flex'>
        <p className='mt-3 max-w-4xl text-[17px] leading-[30px] text-white/80'>
          A selection of projects across marketplace operations, seller workflows, inventory tooling,
          and personal product development. Each project is presented with screenshots, technical
          context, and feature highlights.
        </p>
      </div>

      <div className='mt-14 flex flex-col gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
