import React, { useState } from 'react'
import styled from 'styled-components'

import GridItem from './GridItem'

const defaultColumns = 6

const defaultGrid = Array.from({ length: defaultColumns }, (v, i) => {
    return {
        id: i,
        colStart: i + 1,
        colEnd: i + 2,
        rowStart: 1,
        rowEnd: 2,
    }
})

const GridContainerLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(${defaultColumns}, 1fr);
    grid-auto-rows: auto;
    grid-gap: 10px;
`

const GridContainer = () => {
    const [grid, setGrid] = useState(defaultGrid)
    return (
        <GridContainerLayout>
            {grid.map((item) => (
                <GridItem
                    key={item.id}
                    colStart={item.colStart}
                    colEnd={item.colEnd}
                    rowStart={item.rowStart}
                    rowEnd={item.rowEnd}
                />
            ))}
        </GridContainerLayout>
    )
}

export default GridContainer
