const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updatecounter = () => {
        const targer = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = targer / 200

        if (c < targer) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updatecounter, 1)
        } else {
            counter.innerText = targer
        }
    }

    updatecounter ()
})