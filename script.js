// =============== navegação por tabs ========================
function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabConteudo = document.querySelectorAll('.js-tabcontent section')
    tabConteudo[0].classList.add('ativo')

    if (tabMenu.length && tabConteudo.length) {
        function activeTab(index) {
            tabConteudo.forEach((section) => {
                section.classList.remove('ativo')
            })
            tabConteudo[index].classList.add('ativo')
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index)
            })
        })
    }

}

initTabNav()

// ====================== Accordion List =============================
function initAccordionList() {
    const accordionList = document.querySelectorAll('.js-accordion dt')
    const ativoClass = 'ativo'
    if (accordionList.length) {
        accordionList[0].classList.add(ativoClass)
        accordionList[0].nextElementSibling.classList.add(ativoClass)
        function activeAccordion() {
            this.classList.toggle(ativoClass)
            this.nextElementSibling.classList.toggle(ativoClass)
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        })
    }
}

initAccordionList()

// ==================== Scroll Suave Links Internos =====================

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

    function scrollToSection(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)

        // const topo = section.offsetTop
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth',
        // })

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}

initScrollSuave()

// ===================== Animação ao Scroll ==========================
function initAnimacaoScroll() {
    const section = document.querySelectorAll('.js-scroll')
    if (section) {
        const pontoAnimação = window.innerHeight * 0.6
    
        function animaScroll() {
            section.forEach((elemento) => {
                const topoElemento = elemento.getBoundingClientRect().top;
                const animarAqui = (topoElemento - pontoAnimação) < 0
                if (animarAqui) {
                    elemento.classList.add('animar')
                } else {
                    elemento.classList.remove('animar')
                }
            })
        }
        
        animaScroll()
        window.addEventListener('scroll', animaScroll)
    }
    }
    
    initAnimacaoScroll()