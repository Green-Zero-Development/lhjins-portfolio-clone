'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import styled from 'styled-components';
import SearchBox from '../components/SearchBox.js';
import WhyUs from '../components/WhyUs.js';

function faqClick(faq) {
    const allFaqs = document.querySelectorAll('.faq-single');
    for (let i = 0; i < allFaqs.length; i++) {
        allFaqs[i].querySelector('.answer').classList.add('closed-answer');
    }
    faq.target.querySelector('.answer').classList.remove('closed-answer');
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
    .search-input-box {
        display: flex;
        .input-wrapper {
            position: relative;
            padding: 150px 16px 150px 16px;
            .search-input {
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
            .search-results {
                position: absolute;
                display: flex;
                flex-wrap: wrap;
                background-color: #fff;
                font-family: var(--font-calibre);
                font-size: 18px;
                margin-top: 8px;
                border-radius: 5px;
                line-height: 1;
                max-width: 290px;
                @media (min-width: 516px) {
                    max-width: 450px;
                }
                a {
                    width: 100%;
                    padding: 8px;
                    border-radius: 5px;
                    &:hover {
                        background-color: #edf2f7;
                        cursor: pointer;
                    }
                }
            }
            margin: 0 auto;
        }
    }
`;

const FAQsSection = styled.div`
    .wrapper {
        grid-template-columns: repeat(12, 1fr);
        gap: 50px;
        max-width: 1200px;
        margin: 0 auto;
        padding: 50px 16px 50px 16px;
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
                padding: 8px 0 12px 0;
                color: #11594c;
            }
            p {
                padding: 0px 0 30px 0;
            }
        }
        .faqs {
            grid-column: 7 / 13;
            .faq-anchor {
                margin-top: -100px;
                padding-bottom: 130px;
                pointer-events: none;
            }
            .faq-single {
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
                p {
                    white-space: pre-wrap;
                }
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
            ol {
                padding: 15px 40px 15px 40px;
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

export default function Faqs({ pageData }) {

    const data = pageData.acf.faqs;

    const personalFaqs = [];
    const businessFaqs = [];
    const lifeFaqs = [];

    {pageData.acf.faqs.map((item) => {
        if (item.type_of_faq === "Personal Insurance") {
            personalFaqs.push(item);
        } else if (item.type_of_faq === "Business Insurance") {
            businessFaqs.push(item);
        } else if (item.type_of_faq === "Life Insurance") {
            lifeFaqs.push(item);
        } else {};
    })}

    const whyUsSection = pageData.global_sections[1];

    return (
        <>
            <Hero>
                <Image src={`${pageData.acf.hero_image.url}`} alt={`${pageData.acf.hero_image.alt}`} fill style={{ objectFit: 'cover' }} loader={imageLoader} />
                <div className="search-input-box">
                    <SearchBox data={data} />
                </div>
            </Hero>

            <div className="spacer"></div>

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
                        <h6>{pageData.acf.personal_section.pretitle}</h6>
                        <h2>{pageData.acf.personal_section.title}</h2>
                        <p>{pageData.acf.personal_section.paragraph}</p>
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
                        {personalFaqs.map((item, index) => {
                                const id = encodeURIComponent(item.question.slice(0, 50));
                                if (index == 0) {
                                    return (
                                        <>
                                            <div id={id} className="faq-anchor"></div>
                                            <div className="faq-single" onClick={faqClick} key={index}>
                                                <h6>Personal Insurance</h6>
                                                <h4>{item.question}</h4>
                                                <div dangerouslySetInnerHTML={{ __html: item.answer }} className="answer"></div>
                                            </div>
                                        </>
                                    );
                                } else {
                                    return (
                                        <>
                                            <div id={id} className="faq-anchor"></div>
                                            <div className="faq-single" onClick={faqClick} key={index}>
                                                <h6>Personal Insurance</h6>
                                                <h4>{item.question}</h4>
                                                <div dangerouslySetInnerHTML={{ __html: item.answer }} className="answer closed-answer"></div>
                                            </div>
                                        </>
                                    );
                                }
                            })}
                    </motion.div>
                </div>
            </FAQsSection>

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
                        <h6>{pageData.acf.business_section.pretitle}</h6>
                        <h2>{pageData.acf.business_section.title}</h2>
                        <p>{pageData.acf.business_section.paragraph}</p>
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
                        {businessFaqs.map((item, index) => {
                                const id = encodeURIComponent(item.question.slice(0, 50));
                                if (index == 0) {
                                    return (
                                        <>
                                            <div id={id} className="faq-anchor"></div>
                                            <div className="faq-single" onClick={faqClick} key={index}>
                                                <h6>Business Insurance</h6>
                                                <h4>{item.question}</h4>
                                                <div dangerouslySetInnerHTML={{ __html: item.answer }} className="answer"></div>
                                            </div>
                                        </>
                                    );
                                } else {
                                    return (
                                        <>
                                            <div id={id} className="faq-anchor"></div>
                                            <div className="faq-single" onClick={faqClick} key={index}>
                                                <h6>Business Insurance</h6>
                                                <h4>{item.question}</h4>
                                                <div dangerouslySetInnerHTML={{ __html: item.answer }} className="answer closed-answer"></div>
                                            </div>
                                        </>
                                    );
                                }
                            })}
                    </motion.div>
                </div>
            </FAQsSection>

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
                        <h6>{pageData.acf.life_section.pretitle}</h6>
                        <h2>{pageData.acf.life_section.title}</h2>
                        <p>{pageData.acf.life_section.paragraph}</p>
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
                        {lifeFaqs.map((item, index) => {
                            const id = encodeURIComponent(item.question.slice(0, 50));
                            if (index == 0) {
                                return (
                                    <>
                                        <div id={id} className="faq-anchor"></div>
                                        <div className="faq-single" onClick={faqClick} key={index}>
                                            <h6>Life Insurance</h6>
                                            <h4>{item.question}</h4>
                                            <div dangerouslySetInnerHTML={{ __html: item.answer }} className="answer"></div>
                                        </div>
                                    </>
                                );
                            } else {
                                return (
                                    <>
                                        <div id={id} className="faq-anchor"></div>
                                        <div className="faq-single" onClick={faqClick} key={index}>
                                            <h6>Life Insurance</h6>
                                            <h4>{item.question}</h4>
                                            <div dangerouslySetInnerHTML={{ __html: item.answer }} className="answer closed-answer"></div>
                                        </div>
                                    </>
                                );
                            }
                        })}
                    </motion.div>
                </div>
            </FAQsSection>

            <div className="spacer"></div>

            <WhyUs whyUsSection={whyUsSection} />

        </>
    )
}