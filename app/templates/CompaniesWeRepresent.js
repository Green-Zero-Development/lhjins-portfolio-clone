'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
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

const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 50}`
}

// #region Styles

const Hero = styled.div`
    .wrapper {
      grid-template-columns: repeat(12, 1fr);
      gap: 30px;
      max-width: 1200px;
      padding: 100px 16px 100px 16px;
      margin: 0 auto;
      @media (min-width: 768px) {
        display: grid;
      }
      .content {
        grid-column: 1 / 5;
        padding-bottom: 50px;
        text-align: center;
        @media (min-width: 768px) {
          padding-bottom: 0px;
          text-align: left;
        }
        h1 {
          font-family: var(--font-canela);
          font-size: 32px;
          line-height: 1.2;
          padding: 5px 0 25px 0;
          color: #11594c;
        }
      }
      .companies {
        grid-column: 5 / 13;
        p {
          text-align: center;
          padding-bottom: 50px;
        }
        .single-company-list {
          grid-template-columns: repeat(2, 1fr);
          @media (min-width: 516px) {
            display: grid;
          }
          a {
            padding: 20px 4px 20px 4px;
            @media (min-width: 516px) {
              border: 4px solid #e4e2dd;
            }
            &:hover {
              border-color: #aa803f;
            }
          }
          .single-company {
            position: relative;
            height: 100%;
            align-items: center;
            text-align: center;
            padding: 45px 8px 45px 8px;
            img {
              margin: 0 auto;
            }
            h6 {
              position: absolute;
              bottom: 0;
              width: 100%;
            }
          }
        }
      }
    }
`;

// #endregion Styles

export default function CompaniesWeRepresent({ pageData }) {

    let sidebarButtonLink = getButtonLink(pageData.acf.sidebar_content.button.link_to_where, pageData.acf.sidebar_content.button.onsite_link, pageData.acf.sidebar_content.button.offsite_link, pageData.acf.sidebar_content.button.file_link);

    const whyUsSection = pageData.global_sections[1];

    return (
        <>
            <Hero>
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
                    <h6>{pageData.acf.sidebar_content.pretitle}</h6>
                    <h1>{pageData.acf.sidebar_content.title}</h1>
                    <Link href={sidebarButtonLink}>
                        <div className="beige-button button">{pageData.acf.sidebar_content.button.text}</div>
                    </Link>
                </motion.div>
                <motion.div 
                        initial={{ y: 20 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5
                        }}
                        className="companies"
                >
                    <p>{pageData.acf.pre_logo_content}</p>
                    <div className="single-company-list">
                    {pageData.acf.companies.map((item, index) => {
                        return (
                            <Link href={item.link_to_website} target="_blank" key={index}>
                            <div className="single-company">
                                <Image src={`${item.logo.url}`} alt={`${item.logo.alt}`} width={200} height={24} loader={imageLoader} />
                                <h6>{item.name}</h6>
                            </div>
                            </Link>
                        );
                    })}
                    </div>

                </motion.div>
              </div>
            </Hero>

            <WhyUs whyUsSection={whyUsSection} />

        </>
    )
}