import React from 'react'
import Color from './Color'
import { text, select } from '@storybook/addon-knobs'

import { Spacing } from '@brkedon/foundation'

// css
import '@brkedon/scss/lib/Utilities.css'

export default {
    title: 'Atoms|Color'
}

export const Common = () => <Color hexCode={text('HexCode', 'pink')} />

export const CustomDimensions = () => <Color
hexCode={text('HexCode', 'pink')}
width="xxl"
height="xxl"
// width={select('Width', Object.values(Spacing), 'xxl')}
// height={select('Height', Object.values(Spacing), 'xxl')}  
/>