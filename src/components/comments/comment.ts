import { style, classes } from 'typestyle'

import { px, em, color } from 'csx'
import { flexRoot } from 'csstips'

import { div, span, header, article, a } from '@cycle/dom'

const articleStyle = style({
    marginTop: px(10)
})

const child = style({})

const link = style({
    color: '#666'
})

const content = style(
    {
        // borderBottom: `${px(1)} solid #eee`
    }
)

const hide = style(flexRoot, {})

const select = style({
    cursor: 'pointer',
    userSelect: 'none'
})

const more = style({
    color: '#666',
    display: 'block',
    padding: `${em(0.3)} ${em(0.5)}`,
    borderRadius: px(4),
    backgroundColor: color('#1e5799').lighten(0.55).toHexString()
})

const commentList = style({
    borderTop: `${px(1)} solid #eee`,
    marginTop: px(7),
    marginLeft: px(10)
})

const children = (comments, onclick) => {
    if (comments.length > 0) {
        return div(`.${hide}`, [span(`.${select}`, '[-]'), div(`${commentList}`)])
    }
}

const showMore = (comment, onclick) => {
    return span(`.${classes(more, select)}`, { onclick }, `[+] ${comment.comments.length} replies collapsed`)
}

const comment = (comment, isChild) => {
    return article(`.${isChild ? classes(child, articleStyle) : article}`, [
        header([a(`.${link}`, { href: `/user/${comment.user}` }, comment.user), span(comment.time_ago)]),
        div(`.${content}`, { innerHTML: comment.content }),
        this.showComments
            ? children(comment.comments, () => this.toggleShowComments())
            : showMore(comment, () => this.toggleShowComments())
    ])
}

export default comment
