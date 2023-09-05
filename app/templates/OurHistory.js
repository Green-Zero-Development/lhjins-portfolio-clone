'use client';

import { motion } from "framer-motion";
import styled from 'styled-components';
import WhyUs from '../components/WhyUs.js';

function getButtonLink(linkToWhere, onSiteLink, offSiteLink, fileLink) {
    switch (linkToWhere) {
      case "A page on this site":
        return (onSiteLink);
      case "Another site":
        return (offSiteLink);
      case "A file":
        return (fileLink);
      default:
        return ('/');
    }
}

// #region Styles

const Hero = styled.div`
    max-width: 700px;
    margin: 0 auto;
    padding: 100px 16px 100px 16px;
    text-align: center;
    h1 {
      font-family: var(--font-canela);
      font-size: 40px;
      line-height: 1.2;
      padding: 0px 0 15px 0;
      color: #11594c;
      @media (min-width: 516px) {
        font-size: 48px;
      }
    }
    p {
      font-size: 24px;
    }
    .video {
      position: relative;
      height: 400px;
      margin: 50px auto 0 auto;
      @media (min-width: 768px) {
        height: 448px;
      }
    }
`;

const Timeline = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 0px 8px 100px 8px;
    .timeline-item {
      display: flex;
      h4 {
        font-family: var(--font-canela);
        font-size: 32px;
        line-height: 1.0;
        padding: 0px 0 5px 0;
        color: #11594c;
      }
      p {
        font-size: 20px;
        @media (min-width: 1200px) {
            font-size: 24px;
        }
      }
      .pre-space {
        width: 45%;
      }
      .post-space {
        width: 45%;
      }
      .timeline-point {
        width: 10%;
        justify-self: center;
        height: 100%;
        .line {
            width: 4px;
            height: 220px;
            background-color: #000000;
            margin: 0 auto;
            @media (min-width: 516px) {
                height: 200px;
            }
        }
      }
      svg {
        fill: #aa803f;
        width: 30px;
        margin: 0 auto;
        @media (min-width: 516px) {
            width: 36px;
        }
      }
      .pre-content {
        width: 45%;
        text-align: center;
        @media (min-width: 516px) {
            text-align: left;
        }
      }
      .post-content {
        width: 45%;
        text-align: center;
        @media (min-width: 516px) {
            text-align: left;
        }
      }
    }
    @media (min-width: 768px) {
            
    }
`;

// #endregion Styles

export default function OurHistory({ pageData }) {

    const whyUsSection = pageData.global_sections[1];

    const videoLink = pageData.acf.video.replace('youtu.be', 'youtube.com/embed');

    return (
        <>
            
            <Hero>
                <motion.div 
                        initial={{ y: -20 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5
                        }}
                >
                    <h1>{pageData.acf.hero_section.title}</h1>
                    <p>{pageData.acf.hero_section.paragraph}</p>
                    <iframe className="video" width="100%" height="100%" src={videoLink + '?autoplay=1'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </motion.div>
            </Hero>

            <Timeline>
                {pageData.acf.timeline.map((item, index) => {
                  if (index % 2) {
                    return (
                        <div className="timeline-item" key={index}>
                            <motion.div 
                                initial={{ y: -20 }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5
                                }}
                                className="pre-content"
                            >
                                <h4>{item.year}</h4>
                                <p>{item.event}</p>
                            </motion.div>
                            <div className="timeline-point">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
                                <div className="line"></div>
                            </div>
                            <div className="post-space"></div>
                        </div>
                    );
                  } else {
                    return (
                        <div className="timeline-item" key={index}>
                            <div className="pre-space"></div>
                            <div className="timeline-point">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
                                <div className="line"></div>
                            </div>
                            <motion.div 
                                initial={{ y: 20 }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5
                                }}
                                className="post-content"
                            >
                                <h4>{item.year}</h4>
                                <p>{item.event}</p>
                            </motion.div>
                        </div>
                      );
                    }
                })}
            </Timeline>

            <WhyUs whyUsSection={whyUsSection} />

        </>
    )
}