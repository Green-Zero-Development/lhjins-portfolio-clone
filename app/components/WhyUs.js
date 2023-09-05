'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import styled from 'styled-components';

const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 50}`
}

const Section = styled.div`
    .wrapper {
        grid-template-columns: repeat(12, 1fr);
        gap: 50px;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 16px 0 16px;
        @media (min-width: 768px) {
            display: grid;
        }
    }
    .content {
        grid-column: 1 / 7;
        text-align: center;
        padding-bottom: 50px;
        @media (min-width: 768px) {
            padding-bottom: 0px;
            text-align: left;
        }
        h4 {
            font-family: var(--font-canela);
            font-size: 32px;
            line-height: 1.2;
            padding: 8px 0 12px 0;
            color: #11594c;
        }
        p {
            font-size: 20px;
            padding: 0px 0 30px 0;
        }
    }
    .image-box {
        position: relative;
        grid-column: 7 / 13;
        height: 300px;
        @media (min-width: 768px) {
            height: 608px;
        }
        img {
            object-fit: cover;
            @media (min-width: 768px) {
                object-fit: contain;
            }
        }
    }
`;

export default function WhyUs({ whyUsSection }) {

    return (
        <Section>
            <div className="wrapper">
                <motion.div 
                        initial={{ y: -20 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5
                        }}
                        className="content"
                >
                    <h6>{whyUsSection.acf.pretitle}</h6>
                    <h4>{whyUsSection.acf.title}</h4>
                    <p>{whyUsSection.acf.paragraph}</p>
                </motion.div>
                <motion.div 
                        initial={{ y: 20 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5
                        }}
                        className="image-box"
                >
                    <Image src={`${whyUsSection.acf.image.url}`} alt={`${whyUsSection.acf.image.alt}`} fill loader={imageLoader} />
                </motion.div>
            </div>
        </Section>
    );
}