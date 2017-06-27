import { percent } from 'csx'
import { media, style } from 'typestyle'
import { flexRoot, vertical, flex } from 'csstips'
import { div } from '@cycle/dom'

const layout = style(flexRoot, vertical, flex)
const main = style(
    flex,
    {
        width: percent(80),
        margin: '0 auto',
        marginTop: '48px',
        flexBasis: 'auto',
        flexGrow: 1
    },
    media(
        {
            maxWidth: 600
        },
        { width: percent(100) }
    )
)

import header from './header'

export default children => div(`.${layout}`, [header(), div(`.${main}`, children)])
