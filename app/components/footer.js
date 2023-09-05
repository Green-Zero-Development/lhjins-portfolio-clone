'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

function getYear() {
    return new Date().getFullYear();
}

// #region Styles

const FooterStyle = styled.footer`
    background-color: #e4e2dd;
    font-family: var(--font-calibre);
    @media (min-width: 992px) {
        
    }
    .wrapper {
        grid-template-columns: repeat(5, 1fr);
        max-width: 1440px;
        margin: 0 auto;
        padding: 60px 16px 100px 16px;
        @media (min-width: 992px) {
            display: grid;
        }
        img {
            grid-column: 1 / 6;
            margin: 0 auto;
            @media (min-width: 768px) {
                margin-left: 0px;
            }
            @media (min-width: 1200px) {
                grid-column: 1 / 1;
            }
        }
    }
    .footer-menus {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-column: 1 / 6;
        padding: 50px 0px 0px 0px;
        text-align: center;
        @media (min-width: 516px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 768px) {
            grid-template-columns: repeat(4, 1fr);
            text-align: left;
        }
        @media (min-width: 1200px) {
            grid-column: 2 / 6;
            padding: 0px 0px 0px 0px;
        }
        h6 {
            font-size: 14px;
            color: #ac8042;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            padding-bottom: 10px;
        }
        .footer-child {
            display: block;
            width: 100%;
            padding-bottom: 5px;
            &:hover {
                text-decoration: underline;
            }
        }
        .footer-badge {
            padding-top: 40px;
        }
        .footer-menu-item {
            padding-bottom: 50px;
            @media (min-width: 768px) {
                padding-bottom: 0px;
            }
        }
    }
    .copyright {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        align-items: center;
        padding: 0 32px 150px 32px;
        .text {
            opacity: 0.5;
            font-size: 12px;
            text-align: center;
            padding-bottom: 50px;
        }
        .pioneer {
            img {
                margin: 0 auto;
            }
        }
        .social {
            display: flex;
            max-width: 200px;
            margin: 0 auto;
            padding-top: 50px;
            a {
                margin: 0 auto;
            }
        }
        @media (min-width: 768px) {
            display: flex;
            .text {
                width: 33.33%;
                text-align: left;
                padding-bottom: 0px;
            }
            .pioneer {
                width: 33.33%;
            }
            .social {
                padding-top: 0px;
                margin-right: 0;
                a {
                    margin-left: auto;
                    padding-right: 24px;
                    svg {
                        transition: .25s;
                        :hover {
                            fill: #00594d;
                            transition: .25s;
                        }
                    }
                }
            }
        }
        @media (min-width: 992px) {
            padding: 0 32px 50px 32px;
        }
`;

// #endregion Styles

export default function Footer({ logos, footerMenu, footerBadges, socialMedia }) {

    const footerLogo = logos[0].acf.footer_logo.url;
    const footerLogoAlt = logos[0].acf.footer_logo.alt;
    const footerBadge = footerBadges[0].acf.logo[0].image.url;
    const instagram = socialMedia[0].acf.value_list[0].value;
    const facebook = socialMedia[0].acf.value_list[1].value;

    return (
        <FooterStyle>
            <div className="wrapper">
                <a href="/">
                    <Image src={`${footerLogo}`} alt={`${footerLogoAlt}`} width={192} height={68} />
                </a>
                <div className="footer-menus">
                    {footerMenu.map((item, index) => {
                        if (index < 3) {
                            return (
                                <div key={item.id} className="footer-menu-item">
                                    <div>
                                        <h6>{item.title}</h6>
                                    </div>
                                    {Object.keys(item.children).map((key, index) => {
                                        return (
                                            <Link key={index} href={item.children[key].url} className="footer-child">{item.children[key].title}</Link>
                                        );
                                    })}
                                </div>
                            )
                        } else {
                            return (
                                <div key={item.id} className="footer-menu-item">
                                    <div>
                                        <h6>{item.title}</h6>
                                    </div>
                                    {Object.keys(item.children).map((key, index) => {
                                        return (
                                            <Link key={index} href={item.children[key].url} className="footer-child">{item.children[key].title}</Link>
                                        );
                                    })}
                                    <div className="footer-badge">
                                        <Image src={`${footerBadge}`} alt={`${footerLogoAlt}`} width={140} height={1} />
                                    </div>
                                </div>
                                
                            )
                        }
                    })}
                </div>
            </div>
            <div className="copyright">
                    <div className="text">
                        &copy; {getYear()} Lee, Hill and Johnston Insurors | All Rights Reserved
                    </div>
                    <a href="https://madebypioneer.com/" className="pioneer">
                        <img src="https://inside.lhjins.com/wp-content/uploads/2023/06/built-by-pioneer.svg" />
                    </a>
                    <div className="social">
                        <a href={facebook}>
                            <svg width="24px" fill="#c3975d" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>
                        </a>
                        <a href={instagram}>
                            <svg width="24px" fill="#c3975d" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"/></svg>
                        </a>
                    </div>
                </div>
        </FooterStyle>
    );
}