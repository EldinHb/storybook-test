import React from "react";
import styled from "styled-components";
import { Label } from "../labels";
import { SearchBox } from "../searchBox";

export const Header = () => {
    return (
        <HeaderContainer>
            <Label
                text={'Debble'}
                size='lg'
            />
            <SearchBox
                onSearchClick={() => { }}
            />
        </HeaderContainer>
    )
};

const HeaderContainer = styled.div`
    border-bottom-style: solid;
    border-bottom-width: 1px;
    padding: .5rem 1rem;
    border-bottom-color: #C8C8C8;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;