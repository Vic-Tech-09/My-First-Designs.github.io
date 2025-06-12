 const content = document.querySelectorAll('.content')
 const listItems = document.querySelectorAll('nav ul li')

 listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllContents()

        item.classList.add('active')
        content[idx].classList.add('show')
    })
 })

 function hideAllContents() {
    content.forEach(content => content.classList.remove('show'))
 }

 function hideAllItem() {
    listItem.forEach(item => item.classList.remove('active'))
 }