import { style, classes } from 'typestyle'

import { px, em, color } from 'csx'
import { flexRoot } from 'csstips'

import { div, span, article, a } from '@cycle/dom'

const articleStyle = style(flexRoot, {
    paddingLeft: em(1),
    $nest: {
        '&:not(:last-child)': {
            marginBottom: em(1.5)
        }
    }
})

const index = style({
    fontSize: em(1.6),
    width: px(50)
})

const detail = style({
    marginTop: em(0.5),
    color: '#666',
    fontSize: em(0.8)
})

const link = style({
    color: '#666'
})

const unstyled = style({
    textDecoration: 'none'
})

const unstyledLink = classes(link, unstyled)

export default (story, idx) => {
    return article(`.${articleStyle}`, [
        div(`.${index}`, idx + 1),
        div([
            a(`.${unstyledLink}`),
            div(`.${detail}`, [
                span('.points-by', `${story.points} points by `),
                a(`.${link}`, { href: `/user/${story.user}` }, story.user),
                span('.time-ago', ` ${story.time_ago} | `),
                a(`.${link}`, { href: `/item/${story.id}` }, `${story.comments_count} comments`)
            ])
        ])
    ])
}
