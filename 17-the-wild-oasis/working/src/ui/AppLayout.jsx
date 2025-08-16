import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import styled from "styled-components";

const StyledAppLayout = styled.div`
	display: grid;
	height: 100dvh;
	grid-template-columns: 26rem 1fr;
	grid-template-rows: auto 1fr`

const Main = styled.main`
	background-color: var(--color-grey-50);
	padding: 4rem 4.8rem 6.4rem;
`

function AppLayout(props) {
    return (
        <StyledAppLayout>
            <Header/>
            <Sidebar/>
            <Main>
                <Outlet/>
            </Main>
        </StyledAppLayout>
    );
}

export default AppLayout;