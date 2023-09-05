'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

function toggleDropdownOn(dropTrig) {
  dropTrig.target.nextSibling.classList.add("desktop-menu-toggle");
}

function toggleDropdownOff(dropTrig) {
    const desktopDropdowns = document.querySelectorAll('.desktop-dropdown');
    for (let i = 0; i < desktopDropdowns.length; i++) {
        desktopDropdowns[i].classList.remove("desktop-menu-toggle");
    }
}

function toggleMobileDropdown(dropTrig) {
    dropTrig.target.nextSibling.classList.toggle("mobile-menu-toggle");
    dropTrig.target.querySelector('svg').classList.toggle("mobile-menu-svg-flip");
}

const mobiletoggle = () => {
  document.getElementById("mobile-menu").classList.toggle("mobile-menu-active");
  document.getElementById("mobile-menu-close").classList.toggle("hidden");
}

// #region Styles

const HeaderStyle = styled.header`
    position: sticky;
    top: 0;
    width: 100%;
    background-color: #00594d;
    font-family: var(--font-calibre);
    padding: 16px 6px 16px 6px;
    z-index: 50;
    transition: .25s;
    @media (min-width: 992px) {
        
    }
    .wrapper {
        max-width: 1280px;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        align-items: center;
        justify-content: center;
    }
    .dropdown-trigger {
        display: flex;
        align-items: center;
        svg {
            width: 10px;
            height: 10px;
            fill: #ffffff;
            margin-left: 4px;
            margin-top: 4px;
        }
    }
    .dropdown-mobile-trigger {
        display: flex;
        align-items: center;
        justify-content: space-between;
        svg {
            width: 20px;
            height: 20px;
            fill: #ffffff;
        }
    }
`;

const DesktopLogoLink = styled.div`
    grid-column: span 12 / span 12;
    margin: auto;
    @media (min-width: 992px) {
        grid-column: span 2 / span 2;
        margin-left: 0;
    }
    img {
        @media (min-width: 576px) {
            max-width: 210px;
        }
        @media (min-width: 992px) {
            max-width: 150px;
        }
        @media (min-width: 1200px) {
            max-width: 210px;
        }
    }
`;

const MobileMenuOpen = styled.div`
    position: fixed;
    bottom: 55px;
    left: auto;
    right: auto;
    width: 100%;
    z-index: 999;
    svg {
        background-color: #00594d;
        margin: auto;
        padding: 10px;
        border: 2px solid #aa803f;
    }
    @media (min-width: 992px) {
        display: none;
    }
`

const MobileMenuClose = styled.div`
    position: fixed;
    bottom: 55px;
    left: auto;
    right: auto;
    width: 100%;
    z-index: 999;
    svg {
        background-color: #aa803f;
        margin: auto;
        padding: 10px;
        border: 2px solid #222222;
    }
`

const DesktopNavi = styled.div`
    grid-column: span 10 / span 10;
    display: flex;
    align-items: center;
    margin-left: auto;
`

const DesktopMenu = styled.ul`
    display: none;
    @media (min-width: 992px) {
        display: flex;
    }
`

const DesktopMenuSingle = styled.li`
    color: #ffffff;
    font-size: 14px;
    a {
        color: #ffffff;
    }
    .desktop-no-drop {
        padding: 10px 0 10px 0;
    }
    .dropdown-trigger { 
        padding: 10px 0 10px 0;
    }
    .dropdown-mobile-trigger { 
        padding: 10px 0 10px 0;
    }
    @media (min-width: 992px) {
        font-size: 16px;
        margin-left: 32px;
    }
`

const DesktopDropdown = styled.div`
    opacity: 0;
    pointer-events: none;
    position: absolute;
    background-color: #ffffff;
    margin: -15px 0 0 -40px;
    transform: translateY(15px);
    border: solid 1px #aa803f;
    transition: 0.25s;
    a {
        display: block;
        width: 100%;
        color: #000000;
        padding: 10px 15px 10px 15px;
        &:hover {
            background-color: #edf2f7;
        }
    }
    svg {
        width: 100%;
        fill: #ffffff;
        width: 40px;
        height: 40px;
        margin: -20px auto -20px auto;
        pointer-events: none;
    }
`

const MobileDropdown = styled.div`
    opacity: 0;
    pointer-events: none;
    height: 0px;
    
    svg {
        width: 100%;
        fill: #ffffff;
        width: 40px;
        height: 40px;
        margin: -20px auto -20px auto;
        pointer-events: none;
    }
`

const MobileMenu = styled.div`
    position: fixed;
    inset: 0;
    overflow-y: scroll;
    pointer-events: none;
    opacity: 0;
    transform: scale(1.1);
    background-color: #00594d;
    color: #ffffff;
    padding: 24px 0px 0px 0px;
    z-index: 998;
    transition: .25s;
`

const MobileItems = styled.div`
    position: relative;
    max-width: 600px;
    margin: auto;
    padding-bottom: 200px;
    font-size: 32px;
    z-index: 998;
`

const MobileMenuHeader = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    justify-content: center;
    padding: 6px 6px 6px 6px;
`

const MobileMenuList = styled.ul`
    padding-top: 3rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    a {
        display: flex;
        width: 100%;
    }
    @media (min-width: 992px) {
        
    }
`

const MobileMenuSingle = styled.li`

    font-size: 32px;
    
    padding-bottom: 22px !important;
    
`

const MobileMenuSingleDrop = styled.li`
    margin-bottom: 1.5rem;
    .single-drop-link {
        display: block;
        padding: 10px 0px 5px 10px;
        width: 100%;
        font-size: 24px;
    }
    .desktop-trigger {
        display: grid;
    }
    svg {
        pointer-events: none;
        width: 12px;
    }
`

const MobileMenuDropTitle = styled.div`
    pointer-events: none;
`

const MobileSocial = styled.div`
    display: flex;
    padding-left: 20px;
    a {
        padding: 10px;
    }
    svg {
        fill: #ffffff;
        width: 50px;
        height: 50px;
    }
`

// #endregion

export default function Header({ logos, mainMenu, mobileMenu }) {

    const mainLogo = logos[0].acf.logo.url;
    const mainLogoAlt = logos[0].acf.logo.alt;

    return (
        <>
        <HeaderStyle>
            <div className="wrapper">
                <DesktopLogoLink>
                    <a href="/">
                        <Image src={`${mainLogo}`} alt={`${mainLogoAlt}`} width={192} height={68} />
                    </a>
                </DesktopLogoLink>
                <DesktopNavi>
                    <DesktopMenu>
                        {mainMenu.map((item) => {
                            if (item.children) {
                                return (
                                    <DesktopMenuSingle key={item.id} onMouseLeave={toggleDropdownOff}>
                                        <div id="dropdown-trigger" className="dropdown-trigger" onMouseOver={toggleDropdownOn}>
                                        {item.title}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 353.9l17-17L401 177l17-17L384 126.1l-17 17-143 143L81 143l-17-17L30.1 160l17 17L207 337l17 17z"/></svg>
                                        </div>
                                        <DesktopDropdown id="dropdown" className="desktop-dropdown" onMouseLeave={toggleDropdownOff}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M0 272L160 128 320 272v48H0V272z"/></svg>
                                        {Object.keys(item.children).map((key, index) => {
                                            return (
                                                <Link key={index} href={item.children[key].url}>{item.children[key].title}</Link>
                                            );
                                        })}
                                        </DesktopDropdown>
                                    </DesktopMenuSingle>
                                )
                            } else {
                                return (
                                    <DesktopMenuSingle key={item.id}>
                                        <div className="desktop-no-drop">
                                            <Link href={item.url}>{item.title}</Link>
                                        </div>
                                    </DesktopMenuSingle>
                                )
                            }
                        })}
                    </DesktopMenu>
                </DesktopNavi>
                <MobileMenu id="mobile-menu">
                    <MobileItems id="mobile-items">
                        <MobileMenuHeader>
                            <DesktopLogoLink>
                                <a href="/">
                                    <Image src={`${mainLogo}`} alt={`${mainLogoAlt}`} width={192} height={68} />
                                </a>
                            </DesktopLogoLink>
                        </MobileMenuHeader>
                        <MobileMenuList className="pt-12 px-6">
                        {mainMenu.map((item) => {
                            if (item.children) {
                                return (
                                    <MobileMenuSingleDrop key={item.id}>
                                        <div id="dropdown-trigger" className="dropdown-mobile-trigger" onClick={toggleMobileDropdown}>
                                            <MobileMenuDropTitle>{item.title}</MobileMenuDropTitle>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 353.9l17-17L401 177l17-17L384 126.1l-17 17-143 143L81 143l-17-17L30.1 160l17 17L207 337l17 17z"/></svg>
                                        </div>
                                        <MobileDropdown className="dropdown">
                                        {Object.keys(item.children).map((key, index) => {
                                            return (
                                                <Link key={index} href={item.children[key].url} onClick={toggleMobileDropdown} className="single-drop-link">{item.children[key].title}</Link>
                                            );
                                        })}
                                        </MobileDropdown>
                                    </MobileMenuSingleDrop>
                                )
                            } else {
                                return (
                                    <MobileMenuSingle key={item.id}>
                                        <Link href={item.url} onClick={toggleMobileDropdown}>{item.title}</Link>
                                    </MobileMenuSingle>
                                )
                            }
                        })}
                        </MobileMenuList>
                        <MobileSocial>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>
                            </a>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"/></svg>
                            </a>
                        </MobileSocial>
                    </MobileItems>
                </MobileMenu>
            </div>
        </HeaderStyle>
        <MobileMenuOpen id="mobile-menu-open" onClick={mobiletoggle}>
            <svg width="48" height="48" viewBox="0 0 25 28" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                <rect width="25" height="4" />
                <rect y="12" width="25" height="4" />
                <rect y="24" width="25" height="4" />
            </svg>
        </MobileMenuOpen>
        <MobileMenuClose id="mobile-menu-close" className="hidden" onClick={mobiletoggle}>
            <svg width="48" height="48" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
        </MobileMenuClose>
        </>
    );
}