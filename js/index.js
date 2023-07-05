import { Router } from './router.js'

const buttonHome = document.querySelector('a.home')
const buttonUniverse = document.querySelector('a.universe')
const buttonExplore = document.querySelector('a.explore')

function changePage() {
    buttonHome.addEventListener('click', () => {
        document.querySelector('body').classList.remove('explore')
        document.querySelector('body').classList.remove('universe')
        document.querySelector('body').classList.add('home')
    })

    buttonUniverse.addEventListener('click', () => {
        document.querySelector('body').classList.remove('home')
        document.querySelector('body').classList.remove('explore')
        document.querySelector('body').classList.add('universe')
    })

    buttonExplore.addEventListener('click', () => {
        document.querySelector('body').classList.remove('home')
        document.querySelector('body').classList.remove('universe')
        document.querySelector('body').classList.add('explore')
    })
}


const router = new Router()

router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/explore', '/pages/explore.html')


router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

changePage()


