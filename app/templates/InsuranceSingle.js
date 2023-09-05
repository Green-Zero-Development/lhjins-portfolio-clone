'use client';

import { motion } from "framer-motion";
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import WhyUs from '../components/WhyUs.js';

function goToPage() {
    let select = document.getElementById("page-select");
    let selectedOption = select.options[select.selectedIndex];
    if (selectedOption.value !== "") {
        window.location.href = selectedOption.value;
    }
}

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
    position: relative;
    .image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(34,34,34,.3);
        z-index: 2;
    }
    .input-box {
        position: relative;
        display: flex;
        margin: 0 auto;
        z-index: 3;
        .input-wrapper {
            position: relative;
            padding: 150px 16px 150px 16px;
            margin: 0 auto;
            .input {
                width: 100%;
                background-color: #fff;
                font-family: var(--font-canela);
                font-size: 24px;
                line-height: 1.2;
                padding: 8px;
                color: #11594c;
                border-radius: 5px;
                ::placeholder {
                    opacity: 0.5;
                }
                @media (min-width: 516px) {
                    min-width: 450px;
                }
            }
        }
    }
`;

const HeroContent = styled.div`
    .wrapper {
        grid-template-columns: repeat(12, 1fr);
        gap: 50px;
        max-width: 1000px;
        margin: 0 auto;
        padding: 80px 16px 150px 16px;
        @media (min-width: 768px) {
            display: grid;
        }
        .content {
            grid-column: 1 / 8;
            padding-bottom: 80px;
            text-align: center;
            @media (min-width: 768px) {
                padding-bottom: 0px;
                text-align: left;
            }
            h1 {
                font-family: var(--font-canela);
                font-size: 32px;
                line-height: 1.2;
                padding: 8px 0 12px 0;
                color: #11594c;
            }
            p {
                padding: 0px 0 30px 0;
                white-space: pre-line;
            }
        }
        .sidebar {
            grid-column: 8 / 13;
            text-align: center;
            p {
                font-size: 24px;
                line-height: 1.5;
                color: #11594c;
                padding-bottom: 25px;
            }
            @media (min-width: 768px) {
                text-align: left;
            }
        }
    }
    @media (min-width: 516px) {
        
    }
`;

const SidebarSection = styled.div`
    .wrapper {
        grid-template-columns: repeat(12, 1fr);
        gap: 50px;
        max-width: 1200px;
        margin: 0 auto;
        padding: 80px 16px 150px 16px;
        text-align: center;
        @media (min-width: 768px) {
            display: grid;
            text-align: left;
        }
        .sidebar-content {
            grid-column: 1 / 5;
            padding-bottom: 80px;
            text-align: center;
            @media (min-width: 768px) {
                padding-bottom: 0px;
                text-align: left;
            }
            h2 {
                font-family: var(--font-canela);
                font-size: 32px;
                line-height: 1.2;
                padding: 8px 0 12px 0;
                color: #11594c;
            }
            p {
                padding: 0px 0 30px 0;
            }
        }
        .content {
            grid-column: 5 / 13;
            p {
                font-size: 20px;
                white-space: pre-line;
                padding-bottom: 25px;
            }
            ul {
                padding: 15px 40px 15px 40px;
                font-size: 20px;
                color: #262626;
                @media (min-width: 768px) {
                    list-style: disc;
                }
            }
            li {
                padding-bottom: 25px;
            }
            ol {
                padding: 15px 40px 15px 40px;
                font-size: 20px;
                color: #262626;
                @media (min-width: 768px) {
                    list-style: number;
                }
            }
        }
    }
    @media (min-width: 516px) {
        
    }
`;

const ImageSection = styled.div`
    .wrapper {
        grid-template-columns: repeat(12, 1fr);
        gap: 30px;
        max-width: 1200px;
        margin: 0 auto;
        padding: 80px 16px 150px 16px;
        text-align: center;
        @media (min-width: 768px) {
            display: grid;
            text-align: left;
        }
        .image {
            position: relative;
            grid-column: 1 / 8;
            margin-bottom: 80px;
            text-align: center;
            height: 250px;
            @media (min-width: 516px) {
                height: 400px;
            }
            @media (min-width: 768px) {
                margin-bottom: 0px;
                text-align: left;
                height: 608px;
            }
        }
        .content {
            grid-column: 8 / 13;
            h2 {
                font-family: var(--font-canela);
                font-size: 32px;
                line-height: 1.2;
                padding: 8px 0 12px 0;
                color: #11594c;
            }
            p {
                font-size: 20px;
                white-space: pre-line;
                padding-bottom: 25px;
            }
            ul {
                padding: 15px 40px 15px 40px;
                font-size: 20px;
                color: #262626;
                @media (min-width: 768px) {
                    list-style: disc;
                }
            }
            li {
                padding-bottom: 25px;
            }
            ol {
                padding: 15px 40px 15px 40px;
                font-size: 20px;
                color: #262626;
                @media (min-width: 768px) {
                    list-style: number;
                }
            }
        }
    }
    @media (min-width: 516px) {
        
    }
`;

// #endregion Styles

export default function InsuranceSingle({ pageData, allPages }) {

    useEffect(()=>{

        const pageSelect = document.getElementById("page-select");
        const path = window.location.pathname;
        const slug = path.substring(path.lastIndexOf('/') + 1);
        pageSelect.value = slug;
    
    }, []);

    const sidebarButtonLink = getButtonLink(pageData.acf.sidebar.button.link_to_where, pageData.acf.sidebar.button.onsite_link, pageData.acf.sidebar.button.offsite_link, pageData.acf.sidebar.button.file_link);

    const whyUsSection = pageData.global_sections[1];

    let personalCounter = 0;
    let businessCounter = 0;
    let lifeCounter = 0;

    return (
        <>
            <Hero>
                <div className="image-overlay"></div>
                <Image src={`${pageData.acf.page_image.url}`} alt={`${pageData.acf.page_image.alt}`} fill style={{ objectFit: 'cover' }} loader={imageLoader} />
                <div className="input-box">
                    <div className="input-wrapper">
                        <select id="page-select" className="input" onChange={goToPage}>
                            <option selected disabled hidden>Find insurance...</option>
                            {allPages.map((item, index) => {
                                if (item.acf.type_of_insurance == "Personal" && personalCounter === 0) {
                                    personalCounter++;
                                    return (
                                        <>
                                            <option disabled>Personal</option>
                                            <option value={item.slug} key={index}>{item.title}</option>
                                        </>
                                    );
                                } else if (item.acf.type_of_insurance == "Business" && businessCounter === 0) {
                                    businessCounter++;
                                    return (
                                        <>
                                            <option disabled>Business</option>
                                            <option value={item.slug} key={index}>{item.title}</option>
                                        </>
                                    );
                                } else if (item.acf.type_of_insurance == "Life" && lifeCounter === 0) {
                                    lifeCounter++;
                                    return (
                                        <>
                                            <option disabled>Life</option>
                                            <option value={item.slug} key={index}>{item.title}</option>
                                        </>
                                    );
                                } else {
                                    return (
                                        <>
                                            <option value={item.slug} key={index}>{item.title}</option>
                                        </>
                                    );
                                }
                            })}
                        </select>
                    </div>
                </div>
            </Hero>

            <HeroContent>
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
                        <h1>{pageData.acf.hero_section.title}</h1>
                        <p>{pageData.acf.hero_section.paragraph}</p>
                    </motion.div>
                    <motion.div 
                        initial={{ y: 20 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5
                        }}
                        className="sidebar"
                    >
                        <p>{pageData.acf.sidebar.text}</p>
                        <Link href={sidebarButtonLink}>
                            <div className="beige-button button">{pageData.acf.sidebar.button.text}</div>
                        </Link>
                    </motion.div>
                </div>
            </HeroContent>

            {pageData.acf.content_sections 
            ?
                pageData.acf.content_sections.map((item, index) => {
                    let sectionButtonLink = getButtonLink(item.button.link_to_where, item.button.onsite_link, item.button.offsite_link, item.button.file_link);
                    {item.acf_fc_layout}
                    if (item.acf_fc_layout == 'left_sidebar_section') {
                        return (
                            <SidebarSection key={index}>
                                <div className="wrapper">
                                    <motion.div 
                                        initial={{ y: -20 }}
                                        whileInView={{ y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5
                                        }}
                                        className="sidebar-content"
                                    >
                                        <h6>{item.pretitle}</h6>
                                        <h2>{item.title}</h2>
                                        <Link href={sectionButtonLink}>
                                            <div className="beige-button button">{item.button.text}</div>
                                        </Link>
                                    </motion.div>
                                    <motion.div 
                                        initial={{ y: 20 }}
                                        whileInView={{ y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5
                                        }}
                                        className="content"
                                        dangerouslySetInnerHTML={{ __html: item.content }}
                                    >

                                    </motion.div>
                                </div>
                            </SidebarSection>
                        );
                    } else if (item.acf_fc_layout == 'left_image_section') {
                        let sectionButtonLink = getButtonLink(item.button.link_to_where, item.button.onsite_link, item.button.offsite_link, item.button.file_link);
                        return (
                            <ImageSection key={index}>
                                <div className="wrapper">
                                    <motion.div 
                                        initial={{ y: -20 }}
                                        whileInView={{ y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5
                                        }}
                                        className="image"
                                    >
                                        <Image src={`${item.image.url}`} alt={`${item.image.alt}`} fill style={{ objectFit: 'contain', objectPosition: 'top' }} loader={imageLoader} />
                                    </motion.div>
                                    <motion.div 
                                        initial={{ y: 20 }}
                                        whileInView={{ y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5
                                        }}
                                        className="content"
                                    >
                                        <h6>{item.pretitle}</h6>
                                        <h2>{item.title}</h2>
                                        <div className="content" dangerouslySetInnerHTML={{ __html: item.content }}>
                                        
                                        </div>
                                        <Link href={sectionButtonLink}>
                                            <div className="beige-button button">{item.button.text}</div>
                                        </Link>
                                    </motion.div>
                                </div>
                            </ImageSection>
                        );
                    } else {

                    };
                })
            : ''}

            <WhyUs whyUsSection={whyUsSection} />

        </>
    )
}