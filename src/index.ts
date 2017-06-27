import { makeDOMDriver, div, input, p, DOMSource } from '@cycle/dom'
import { run, Sources } from '@cycle/run'
import xs from 'xstream'
import { style } from 'typestyle'

let divStyle = style({
    color: 'blue'
})

function main(sources: Sources) {
    const sinks = {
        DOM: sources.DOM
            .select('input')
            .events('click')
            .map(ev => ev.target.checked)
            .startWith(false)
            .map(toggled =>
                div(`.${divStyle}`, [
                    input({ attrs: { type: 'checkbox' } }, { className: 'blah' }),
                    'Toggle me',
                    p(toggled ? 'On' : 'Off')
                ])
            )
    }

    return sinks
}

const drivers = {
    DOM: makeDOMDriver('#app')
}

run(main, drivers)
