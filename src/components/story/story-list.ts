import { style } from 'typestyle'
import { white, em } from 'csx'

import story from './story-item'
import { div } from '@cycle/dom'

const className = style({ backgroundColor: white.toHexString(), padding: `${em(2)} ${em(2)} 0` })
const getIndex = (start, index) => index + 30 * (start - 1)

export default (stories, start) => {
    div(`.${className}`, stories.map((row, idx) => story(row, getIndex(start, idx))))
}
