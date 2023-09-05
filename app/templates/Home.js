'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

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

function faqClick(faq) {
    const allFaqs = document.querySelectorAll('.faq-single');
    for (let i = 0; i < allFaqs.length; i++) {
        allFaqs[i].querySelector('.answer').classList.add('closed-answer');
    }
    faq.target.querySelector('.answer').classList.remove('closed-answer');
}

const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 50}`
}

// #region Styles

const Hero = styled.div`
    background-color: #00594d;
    padding: 0px 16px 50px 16px;
    .wrapper {
        max-width: 1200px;
        margin: 0 auto;
        grid-template-columns: repeat(12, 1fr);
        gap: 30px;
        text-align: center;
        @media (min-width: 768px) {
            display: grid;
            text-align: left;
        }
        @media (min-width: 992px) {
            grid-template-columns: repeat(11, 1fr);
            align-items: center;
        }
        @media (min-width: 1200px) {
            gap: 50px;
        }
        .content {
            grid-column: 1 / 6;
            color: #fff;
            padding-top: 50px;
            @media (min-width: 992px) {
                grid-column: 1 / 5;
            }
            h2 {
                font-family: var(--font-calibre);
                font-size: 12px;
                color: #ac8042;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.1em;
            }
            h1 {
                font-family: var(--font-canela);
                font-size: 48px;
                line-height: 1.2;
                padding: 15px 0 15px 0;
            }
            p {
                font-size: 20px;
                padding: 0px 0 15px 0;
                color: #ffffff;
                @media (min-width: 1200px) {
                    font-size: 24px;
                }
            }
            .button {
                margin: 0 auto 0 auto;
                @media (min-width: 768px) {
                    margin-left: 0px;
                }
            }
            .desktop-hero-button {
                display: none;
                @media (min-width: 768px) {
                    display: inline-block;
                }
            }
            .mobile-hero-button {
                @media (min-width: 768px) {
                    display: none;
                }
            }
        }
        .image {
            position: relative;
            grid-column: 6 / 13;
            height: 300px;
            margin-top: 50px;
            margin-bottom: -100px;
            @media (min-width: 516px) {
                height: 450px;
            }
            @media (min-width: 768px) {
                height: 606px;
                margin-top: 0px;
            }
            @media (min-width: 992px) {
                grid-column: 5 / 12;
            }
        }
    }
`;

const SliderSection = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 150px 0px 0 0px;
    .content {
        max-width: 720px;
        text-align: center;
        margin: 0 auto;
        padding-bottom: 100px;
        padding: 0 16px 0 16px;
        h2 {
            font-family: var(--font-canela);
            font-size: 40px;
            color: #00594d;
            padding-bottom: 15px;
            @media (min-width: 768px) {
                font-size: 48px;
            }
        }
        p {
            font-size: 20px;
            @media (min-width: 1200px) {
                font-size: 24px;
            }
        }
    }
    .slide {
        align-items: center;
        grid-template-columns: repeat(12, 1fr);
        background-color: #ffffff;
        @media (min-width: 768px) {
           display: grid;
        }
    }
    .slide-content {
        grid-column: 1 / 9;
        padding: 20px;
        text-align: center;
        @media (min-width: 516px) {
           padding: 30px;
        }
        @media (min-width: 768px) {
           padding: 20px;
           text-align: left;
        }
        @media (min-width: 992px) {
           padding: 50px;
        }
        h6 {
            font-family: var(--font-calibre);
            font-size: 12px;
            color: #ac8042;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }
        h4 {
            font-family: var(--font-canela);
            font-size: 32px;
            line-height: 1.2;
            padding: 15px 0 30px 0;
            color: #11594c;
        }
    }
    .slide-image {
        position: relative;
        grid-column: 9 / 13;
        height: 256px;
        @media (min-width: 516px) {
           height: 350px;
        }
        @media (min-width: 768px) {
            height: 320px;
        }
    }
    .splide__track {
        padding: 100px 0 100px 0;
        .is-active {
            opacity: 1;
            transform: translateY(-10px);
            box-shadow: 0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04)!important;
        }
    }
    .splide__slide {
        opacity: 0.5;
        transition: 0.25s;
    }
    .splide__pagination__page.is-active {
        background: #00594d;
    }
`;

const FAQsSection = styled.div`
    .wrapper {

        grid-template-columns: repeat(12, 1fr);
        gap: 50px;
        max-width: 1000px;
        margin: 0 auto;
        padding: 150px 16px 100px 16px;
        @media (min-width: 768px) {
            display: grid;
        }
        .content {
            grid-column: 1 / 7;
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
                padding: 0px 0 12px 0;
                color: #11594c;
            }
            p {
                padding: 0px 0 30px 0;
            }
        }
        .faqs {
            grid-column: 7 / 13;
            .faq-single {
                padding-bottom: 30px;
                cursor: pointer;
                text-align: center;
                @media (min-width: 768px) {
                    text-align: left;
                }
            }
            .answer {
                pointer-events: none;
                transform-origin: top left;
                transition: 0.15s;
            }
            .closed-answer {
                opacity: 0;
                transform: scale(0);
                transform-origin: top left;
                height: 0px;
                transition: 0s;
            }
            h6 {
                pointer-events: none;
            }
            h4 {
                font-family: var(--font-canela);
                font-size: 24px;
                line-height: 1.2;
                padding: 8px 0 10px 0;
                color: #11594c;
                pointer-events: none;
            }
            p {
                font-size: 20px;
                line-height: 1.2;
            }
            ul {
                padding: 15px 40px 15px 40px;
                @media (min-width: 768px) {
                    list-style: disc;
                }
            }
        }
    }
    @media (min-width: 516px) {
        
    }
`;

const TrustedAdvisors = styled.div`
    .wrapper {
        grid-template-columns: repeat(12, 1fr);
        gap: 20px;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
        padding: 100px 16px 200px 16px;
        @media (min-width: 768px) {
            display: grid;
        }
        @media (min-width: 992px) {
            gap: 50px;
        }
        @media (min-width: 1200px) {
            gap: 80px;
        }
        .image-box {
            position: relative;
            grid-column: 1 / 8;
            height: 250px;
            box-shadow: 0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);
            @media (min-width: 516px) {
                height: 400px;
            }
            @media (min-width: 768px) {
                height: 400px;
            }
            @media (min-width: 1200px) {
                height: 550px;
            }
        }
        .content {
            grid-column: 8 / 13;
            padding-top: 50px;
            text-align: center;
            @media (min-width: 768px) {
                padding-top: 0px;
                text-align: left;
            }
            h2 {
                font-family: var(--font-canela);
                font-size: 32px;
                line-height: 1.2;
                padding: 15px 0 15px 0;
                color: #11594c;
            }
            p {
                font-size: 20px;
                padding: 0px 0 30px 0;
            }
        }
    }
    @media (min-width: 516px) {
        
    }
`;

// #endregion Styles

export default function Home({ pageData }) {
    
    let desktopHeroButtonLink = getButtonLink(pageData.acf.hero_section.desktop_button.link_to_where, pageData.acf.hero_section.desktop_button.onsite_link, pageData.acf.hero_section.desktop_button.offsite_link, pageData.acf.hero_section.desktop_button.file_link);

    let mobileHeroButtonLink = getButtonLink(pageData.acf.hero_section.mobile_button.link_to_where, pageData.acf.hero_section.mobile_button.onsite_link, pageData.acf.hero_section.mobile_button.offsite_link, pageData.acf.hero_section.mobile_button.file_link);

    let faqsButtonLink = getButtonLink(pageData.acf.faqs_section.button.link_to_where, pageData.acf.faqs_section.button.onsite_link, pageData.acf.faqs_section.button.offsite_link, pageData.acf.faqs_section.button.file_link);

    let trustedAdvisorsButtonLink = getButtonLink(pageData.acf.trusted_advisors_section.button.link_to_where, pageData.acf.trusted_advisors_section.button.onsite_link, pageData.acf.trusted_advisors_section.button.offsite_link, pageData.acf.trusted_advisors_section.button.file_link);

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
                        <h2>{pageData.acf.hero_section.pretitle}</h2>
                        <h1>{pageData.acf.hero_section.title}</h1>
                        <p>{pageData.acf.hero_section.paragraph}</p>
                        <Link href={mobileHeroButtonLink}>
                            <div className="beige-button button mobile-hero-button">{pageData.acf.hero_section.mobile_button.text}</div>
                        </Link>
                        <Link href={desktopHeroButtonLink}>
                            <div className="beige-button button desktop-hero-button">{pageData.acf.hero_section.desktop_button.text}</div>
                        </Link>
                    </motion.div>
                    <motion.div 
                        initial={{ y: 20 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5
                        }}
                        className="image"
                    >
                        <Image src={`${pageData.acf.hero_section.image.url}`} alt={`${pageData.acf.hero_section.image.alt}`} fill style={{ objectFit: 'cover' }} loader={imageLoader} />
                    </motion.div>
                </div>
            </Hero>

            <SliderSection>
                <motion.div 
                        initial={{ y: 20 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5
                        }}
                        className="wrapper"
                >
                    <div className="content">
                        <h2>{pageData.acf.slider_section.title}</h2>
                        <p>{pageData.acf.slider_section.paragraph}</p>
                    </div>
                    <Splide hasTrack={ false }
                        options={ 
                            {
                                type: 'slide',
                                perPage: 1,
                                start: 1,
                                padding: 350,
                                gap: 80,
                                arrows: false,
                                breakpoints: {
                                    516: {
                                        padding: 10,
                                        gap: 0,
                                    },
                                    768: {
                                        padding: 50,
                                        gap: 20,
                                    },
                                    992: {
                                        padding: 150,
                                        gap: 80,
                                    },
                                    1200: {
                                        padding: 200,
                                    },
                                    1300: {
                                        padding: 250,
                                    }
                              }
                            } 
                        }
                    >
                        <SplideTrack>
                            {pageData.acf.slider_section.slide.map((item, index) => {
                                let slideButtonLink = getButtonLink(item.button.link_to_where, item.button.onsite_link, item.button.offsite_link, item.button.file_link);
                                return (
                                <SplideSlide key={index} className="">
                                    <div className="slide">
                                        <div className="slide-content">
                                            <h6>{item.pretitle}</h6>
                                            <h4>{item.title}</h4>
                                            <Link href={slideButtonLink}>
                                                <div className="beige-button button">{item.button.text}</div>
                                            </Link>
                                        </div>
                                        <div className="slide-image">
                                            <Image src={`${item.image.url}`} alt={`${item.image.alt}`} fill style={{ objectFit: 'cover' }} loader={imageLoader} />
                                        </div>
                                    </div>
                                </SplideSlide>
                                );
                            })}
                        </SplideTrack>
                    </Splide>
                </motion.div>
            </SliderSection>

            <FAQsSection>
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
                        <h2>{pageData.acf.faqs_section.title}</h2>
                        <p>{pageData.acf.faqs_section.paragraph}</p>
                        <Link href={faqsButtonLink}>
                            <div className="beige-button button">{pageData.acf.faqs_section.button.text}</div>
                        </Link>
                    </motion.div>
                    <motion.div 
                            initial={{ y: 20 }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5
                            }}
                            className="faqs"
                    >
                        {pageData.acf.faqs_section.faqs.map((item, index) => {
                            if (index == 0) {
                                return (
                                    <div className="faq-single" onClick={faqClick} key={index}>
                                        <h6>{item.pretitle}</h6>
                                        <h4>{item.question}</h4>
                                        <div dangerouslySetInnerHTML={{ __html: item.answer }} className="answer"></div>
                                    </div>
                                );
                            } else {
                                return (
                                    <div className="faq-single" onClick={faqClick} key={index}>
                                        <h6>{item.pretitle}</h6>
                                        <h4>{item.question}</h4>
                                        <div dangerouslySetInnerHTML={{ __html: item.answer }} className="answer closed-answer"></div>
                                    </div>
                                );
                            }
                        })}
                    </motion.div>
                </div>
            </FAQsSection>

            <TrustedAdvisors>
                <div className="wrapper">
                    <motion.div 
                            initial={{ y: -20 }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5
                            }}
                            className="image-box"
                    >
                        <Image src={`${pageData.acf.trusted_advisors_section.image.url}`} alt={`${pageData.acf.trusted_advisors_section.image.alt}`} fill style={{ objectFit: 'cover' }} loader={imageLoader} />

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
                        <h6>{pageData.acf.trusted_advisors_section.pretitle}</h6>
                        <h2>{pageData.acf.trusted_advisors_section.title}</h2>
                        <p>{pageData.acf.trusted_advisors_section.paragraph}</p>
                        <Link href={trustedAdvisorsButtonLink}>
                            <div className="beige-button button">{pageData.acf.trusted_advisors_section.button.text}</div>
                        </Link>
                    </motion.div>
                </div>
            </TrustedAdvisors>
        </>
    );
}