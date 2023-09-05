'use client';

import { useEffect } from 'react';
import styled from 'styled-components';

const TopBarStyle = styled.div`
    background-color: #aa803f;
    padding: 10px 8px 10px 8px;
    color: #ffffff;
    font-family: var(--font-calibre);
    .wrapper {
        display: flex;
        justify-content: space-between;
        max-width: 1280px;
        margin: auto;
    }
    .left-link {
        width: 100%;
        text-align: center;
        @media (min-width: 768px) {
            width: auto;
            text-align: left;
        }
    }
    .right-link {
        display: none;
        @media (min-width: 768px) {
            display: block;
        }
    }
`;

export default function TopBar({ topBar, phoneNumbers }) {

    const phone = phoneNumbers[0].values[0].value;

    return (
        <TopBarStyle>
            <div className="wrapper">
                <a href={`tel:${phone}`} className="left-link">
                    {topBar[0].acf.left_link.text} {phone}
                </a>
                <a href={topBar[0].acf.right_link.link} className="right-link">
                    {topBar[0].acf.right_link.text}
                </a>
            </div>
        </TopBarStyle>
    );
}