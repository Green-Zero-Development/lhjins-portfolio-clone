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
    .image {
      position: relative;
      height: 448px;
      margin: 50px auto 0 auto;
    }
`;

// #endregion Styles

export default function OurTeam({ pageData }) {

    const whyUsSection = pageData.global_sections[1];

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
                </motion.div>
            </Hero>

            <WhyUs whyUsSection={whyUsSection} />

        </>
    )
}