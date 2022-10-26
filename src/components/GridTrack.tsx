import React from 'react'
import styled from 'styled-components'

const GridTrackLayout = styled.div`
    padding: 1rem;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
        background: lightgray;
    }
`

const GridTrack = () => {
    return <GridTrackLayout></GridTrackLayout>
}

export default GridTrack
