import React from 'react'
import styled from 'styled-components'

import GlobalStyle from './styles/GlobalStyle'
import GridContainer from './components/GridContainer'

const Layout = styled.div`
    width: 80%;
    margin: 0 auto;
    padding-top: 5rem;
`

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Layout>
                <GridContainer />
            </Layout>
        </>
    )
}

export default App
