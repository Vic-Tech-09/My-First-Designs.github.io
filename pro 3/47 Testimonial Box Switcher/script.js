const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials =  [
    {
        name: 'Marie Curie',
        position: 'Physicist',
        photo: 'https://randomuser.me/api/portraits/women/46.jpg',
        text:
    "A pioneering physicist and chemist, Marie Curie was the first woman to win a Nobel Prize and remains the only person to win Nobel Prizes in two different scientific fields—Physics and Chemistry. Her groundbreaking research on radioactivity laid the foundation for advances in medical treatment and nuclear physics."
    },
    {
        name: 'Nelson Mandela',
        position: 'Polities',
        photo: 'https://randomuser.me/api/portraits/men/45.jpg',
        text:
    "Nelson Mandela was a South African anti-apartheid revolutionary and political leader who served as the country’s first black president from 1994 to 1999. He spent 27 years in prison for his activism and became a global symbol of peace and reconciliation, advocating for human rights and social justice."    
},
    {
        name: 'Frida Kaholo',
        position: 'Painter',
        photo: 'https://randomuser.me/api/portraits/women/46.jpg',
        text:
    "A renowned Mexican painter known for her vivid self-portraits, Frida Kahlo's work explores themes of identity, postcolonialism, gender, and pain. Despite facing numerous personal challenges, including health issues and a tumultuous marriage, her artistic legacy continues to inspire and empower."
    },
    {
        name: 'Leonardo',
        position: 'Scientist',
        photo: 'https://randomuser.me/api/portraits/men/45.jpg',
        text:
    "A polymath of the Renaissance era, Leonardo da Vinci was an artist, scientist, and inventor whose contributions spanned multiple fields. Best known for masterpieces like the Mona Lisa and The Last Supper his notebooks reveal insights into anatomy, engineering, and flight, showcasing his insatiable curiosity."
    },
    {
        name: 'Malala Yousafzai',
        position: 'Education Activist',
        photo: 'https://randomuser.me/api/portraits/women/46.jpg',
        text:
    "Malala Yousafzai is a Pakistani education activist who became a global advocate for girls' education after surviving an assassination attempt by the Taliban in 2012. As the youngest-ever Nobel Prize laureate, she continues to fight for educational rights and empowerment for girls worldwide through her organization, Malala Fund."
    },
]



let idx = 1

function updateTestimonial() {
    const {name, position, photo, text} = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML =name
    role.innerHTML = position

    idx++

    if (idx > testimonials.length - 1) {
        idx = 0
    }
}

setInterval(updateTestimonial, 10000)