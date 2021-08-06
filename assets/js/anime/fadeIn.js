import { TweenMax } from 'gsap'

export default class {
    constructor(el) {
        this.el = el

        this.init()
    }

    init() {
        TweenMax.set(this.el, {
            alpha: 0,
            y: 100,
        })
    }

    anime() {
        TweenMax.to(this.el, 0.8, {
            alpha: 1,
            y: 0,
            ease: "power2.out"

        })
    }
}
