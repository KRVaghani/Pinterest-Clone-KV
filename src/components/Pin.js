import React from 'react'

import styled from 'styled-components'

function Pin() {
    return (
        <Wrapper>
            <Container>
                <img src="https://images.unsplash.com/photo-1613651804618-0bc879c94f74?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"/>
            </Container>

        </Wrapper>
    )
}

export default Pin

const Wrapper = styled.div`
    display: inline-flex;
    padding: 8px;
`
const Container = styled.div`
    display:flex;
    align-items:center;
    box-sizing: border-box;
    cursor:pointer;
    width:236px;

    img {
        display:flex;
        width:100%;
        cursor: zoom-in;
        border-radius:16px;
        object-fit: cover;
    }

`
