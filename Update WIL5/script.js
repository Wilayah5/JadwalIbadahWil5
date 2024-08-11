const navTema = document.querySelector('.nav-tema')
const containerUpdate = document.querySelector('.container-main')
const contentTema = document.querySelector('.content-tema')
const navPF = document.querySelector('.nav-pf')
const contentPf = document.querySelector('.content-pengkhotbah')
const navLiturgos = document.querySelector('.nav-liturgos')
const contentLiturgos = document.querySelector('.content-liturgos')
const navMusic = document.querySelector('.nav-music')
const navLocation = document.querySelector('.nav-location')
const contentLocation = document.querySelector('.content-location')
const contentMusic = document.querySelector('.content-music')

const arrowMusic = document.querySelector('#arrowMusic')


const arrowTema = document.querySelector('#arrowTema')

function In() {
    containerUpdate.style.display = 'none'
}
function out() {
    containerUpdate.style.display = 'block'
}

navTema.addEventListener('click', function() {
    containerUpdate.style.display = 'none'
    contentTema.style.display = 'block'

    arrowTema.addEventListener('click', function() {
        containerUpdate.style.display = ''
        contentTema.style.display = ''
    })
})
navPF.addEventListener('click', function() {
    containerUpdate.style.display = 'none'
    contentPf.style.display = 'block'

    const arrowPf = document.querySelector('#arrowPf')
    arrowPf.addEventListener('click', function() {
        containerUpdate.style.display = 'block'
        contentPf.style.display = 'none'
    })
})
navLiturgos.addEventListener('click', function(){
    containerUpdate.style.display = 'none'
    contentLiturgos.style.display = 'block'

    const arrowLiturgos = document.querySelector('#arrowLiturgos')
    arrowLiturgos.addEventListener('click', function() {
        containerUpdate.style.display = 'block'
        contentLiturgos.style.display = 'none'

    })
})

navMusic.addEventListener('click', function() {
    containerUpdate.style.display = 'none'
    contentMusic.style.display = 'block'
    const arrowMusic = document.querySelector('#arrowMusic')
    arrowMusic.addEventListener('click', function() {
        containerUpdate.style.display = ''
        contentMusic.style.display = ''
    })
})
navLocation.addEventListener('click', function() {
    containerUpdate.style.display = 'none'
    contentLocation.style.display = 'block'
    const arrayLocation = document.querySelector('#arrowLocation')
    arrayLocation.addEventListener('click', function() {
        containerUpdate.style.display = ''
        contentLocation.style.display = ''
    })
})
// const navLiturgi = document.querySelector('.nav-liturgi')
// const contentLiturgi = document.querySelector('.content-liturgi')

// navLiturgi.addEventListener('click', function() {
//     containerUpdate.style.display = 'none'
//     contentLiturgi.style.display = 'block'
//     const arrayLiturgi = document.querySelector('#arrowLiturgi')
//     arrayLiturgi.onclick = function() {
//         containerUpdate.style.display = ''
//         contentLiturgi.style.display = ''
//     }
// })

const navTime = document.querySelector('.nav-time')
const contentTime = document.querySelector('.content-time')
navTime.addEventListener('click', function() {
    containerUpdate.style.display = 'none'
    contentTime.style.display = 'block'
    const arrayTime = document.querySelector('#arrowTime')
    arrayTime.onclick = function() {
        containerUpdate.style.display = ''
        contentTime.style.display = ''

    }
})
// const navAyat = document.querySelector('.nav-ayat')
// const contentAyat = document.querySelector('.content-ayat')
// navAyat.addEventListener('click', function() {
//     containerUpdate.style.display = 'none'
//     contentAyat.style.display = 'block'
//     const arrayAyat = document.querySelector('#arrowAyat')
//     arrayAyat.addEventListener('click', function() {
//         containerUpdate.style.display =''
//         contentAyat.style.display = ''
//     })
// })
