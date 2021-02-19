import React from 'react'

import styled from 'styled-components'

import PinterestIcon from '@material-ui/icons/Pinterest';

function Header() {
    return (
        <Wrapper>
           <LogoWrapper>
                <IconButton>
                    <PinterestIcon/>
                </IconButton>
           </LogoWrapper>
           <HomePageButton>

           </HomePageButton>
           <FollowingButton>

           </FollowingButton>
           <SearchWrapper>

           </SearchWrapper>
           <SearchBarWrapper>

           </SearchBarWrapper>
        </Wrapper>
    )
}

export default Header


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 56px;
    padding: 12px 4px 4px 16px;
    background-color: white;
    color: black;
`

const LogoWrapper = styled.div`
    .MuiSvgIcon-root {
        color: #e60023;
        font-size: 32px;
        cursor: pointer;
    }

`

const IconButton= styled.div``

const HomePageButton = styled.div``

const FollowingButton = styled.div``

const SearchWrapper = styled.div``

const SearchBarWrapper = styled.div``






