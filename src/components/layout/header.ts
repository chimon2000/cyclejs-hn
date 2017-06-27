import { white, percent, px } from 'csx'
import { style, classes } from 'typestyle'
import { flexRoot, vertical, centerJustified } from 'csstips'

import { div, nav, a, img } from '@cycle/dom'
import * as logo from './logo.svg'

const header = style(flexRoot, {
    position: 'fixed',
    top: '0',
    right: '0',
    left: '0',
    backgroundColor: white.toHexString(),
    padding: '0 16px',
    height: px(48),
    minHeight: px(48),
    zIndex: 1,
    borderBottom: '#1e5799 1px solid'
})

const navStyle = style(flexRoot, {
    alignItems: 'center',
    width: '90%',
    margin: '0 auto'
})

const logoStyle = style({
    height: ' 30px'
})

const linkStyles = style(flexRoot, vertical, centerJustified, {
    margin: '0 .4rem',
    color: '#1e5799',
    textDecoration: 'none',
    height: percent(100)
})

const activeStyles = style({
    fontWeight: 'bold'
})

export const Nav = [
    {
        name: 'Top',
        route: '/top/1'
    },
    {
        name: 'New',
        route: '/new/1'
    },
    {
        name: 'Show',
        route: '/show/1'
    },
    {
        name: 'Ask',
        route: '/ask/1'
    },
    {
        name: 'Jobs',
        route: '/jobs/1'
    }
]

const link = active => (active ? classes(linkStyles, activeStyles) : linkStyles)

export default () => {
    return div(`.${header}`, [
        nav(`.${navStyle}`, [
            img(`.${logoStyle}`, { src: logo, alt: 'logo' }),
            Nav.map(row => a(`.${link(false)}`, { href: `${row.route}` }, row.name))
        ])
    ])
}
