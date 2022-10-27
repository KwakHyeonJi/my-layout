import React from 'react'

import styled from 'styled-components'

interface GridItemProps {
    colStart: number
    colEnd: number
    rowStart: number
    rowEnd: number
}

const GridItemLayout = styled.div<GridItemProps>`
    grid-column-start: ${(props) => props.colStart};
    grid-column-end: ${(props) => props.colEnd};
    grid-row-start: ${(props) => props.rowStart};
    grid-row-end: ${(props) => props.rowEnd};

    padding: 1rem;
    border-radius: 15px;
    background: lightgrey;
    cursor: pointer;

    &:hover {
        background: gray;
    }
`

const GridItem = ({ colStart, colEnd, rowStart, rowEnd }: GridItemProps) => {
    return (
        <GridItemLayout colStart={colStart} colEnd={colEnd} rowStart={rowStart} rowEnd={rowEnd}>
            GridItem
        </GridItemLayout>
    )
}

export default GridItem
