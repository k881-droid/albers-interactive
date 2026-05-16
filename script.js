let visibleClass = 'visible'

let expandComp = document.querySelector('#expand-comp')
let floatComps = document.querySelectorAll('[data-float]')

let expandObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
        expandComp.classList.add(visibleClass)
    } else {
        expandComp.classList.remove(visibleClass)
    }
}, {
    rootMargin: '-25% 0% -25% 0%',
})

expandObserver.observe(expandComp)

floatComps.forEach((comp) => {
    let floatObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            comp.classList.add(visibleClass)
        } else {
            comp.classList.remove(visibleClass)
        }
    }, {
        rootMargin: '-25% 0% -25% 0%',
    })

    floatObserver.observe(comp)
})
