const countHeaders = 3
const countTextarea = 5

// список шаблонов в полях textarea
const tab1 = [
  { value: `Text1` },
  { value: 'Text2' },
  { value: 'Text3' },
  { value: 'Text4' },
  { value: 'Text5' },
  { value: 'Text6' },
  { value: 'Text7' },
  { value: 'Text8' },
  { value: 'Text9' },
  { value: 'Text10' },
  { value: 'Text11' },
  { value: 'Text12' },
  { value: 'Text13' },
  { value: 'Text14' },
  { value: 'Text15' },
  { value: 'Text16' },
]
// список ссылок в отдельном поле
const list = [
  { link: 'https://www.youtube.com/?gl=RU&hl=ru', name: 'YouTub' },
  { link: 'https://www.kinopoisk.ru/', name: 'Kinopoisk' },
  { link: 'https://yandex.ru/', name: 'Yandex' },
  { link: 'https://translate.google.com/?hl=ru', name: 'Переводчик' },
]
//рабочие ссыки
const list2 = [
  { name: 'YouTub', link: 'https://www.youtube.com/?gl=RU&hl=ru' },
  { link: 'https://www.kinopoisk.ru/', name: 'Kinopoisk' },
  { link: 'https://yandex.ru/', name: 'Yandex' },
  { link: 'https://translate.google.com/?hl=ru', name: 'fdasdadasd' },
]

const conteiner = document.querySelector('.body__body')
const tabsHeader = document.createElement('div')
tabsHeader.className = 'tabs-header'
conteiner.prepend(tabsHeader)

const nameHeaders = ['Шаблон', 'Вставка', 'Прочее']

function createHeader(num) {
  for (let i = 0; i < num; i++) {
    const header = document.createElement('div')
    header.className = 'tab-h'
    header.innerHTML = nameHeaders.find((e, index) => index === i)
    header.setAttribute('data-tab1', i)
    tabsHeader.appendChild(header)
  }
}
createHeader(countHeaders)

const tabsBody = document.createElement('div')
tabsBody.className = 'tabs-body'
tabsHeader.appendChild(tabsBody)

for (let j = 0; j < countHeaders; j++) {
  const tabBlock = document.createElement('div')
  tabBlock.className = 'tab-b'
  tabBlock.setAttribute('data-tab1', j)
  tabsBody.appendChild(tabBlock)
}

const tabHeaders = document.querySelectorAll('.tab-h')
const tabBlocks = document.querySelectorAll('.tab-b')
tabHeaders[0].classList.add('active')
tabBlocks[0].style.display = 'block'

for (const header of tabHeaders) {
  header.addEventListener('click', (event) => {
    clearStyleAndClasses()
    header.classList.add('active')
    for (const block of tabBlocks) {
      if (
        event.target.getAttribute('data-tab1') ===
        block.getAttribute('data-tab1')
      ) {
        block.style.display = 'block'
      }
    }
  })
}

function clearStyleAndClasses() {
  tabBlocks.forEach((block) => {
    block.style.display = 'none'
  })
  tabHeaders.forEach((header) => {
    header.classList.remove('active')
  })
}

// function clearActiveClasses() {
//   tabHeaders.forEach((header) => {
//     header.classList.remove('active')
//   })
// }

// функция копирования в буфер обмена
function clipboard() {
  document.execCommand('copy')
}

// // перебор массива с шаблонами для копирования.
// const textarea = document.getElementsByClassName('out')
// tab1.forEach(function (text, index) {
//   let value = text.value,
//     number = index
//   textarea[number].textContent = `${value}`
// })

// перебор массива с ссылками и создание их в отдельном поле.
const ul = document.getElementById('list')
createList(list, ul)

const ul2 = document.getElementById('list2')
createList(list2, ul2)

function createList(list, ul) {
  list.forEach((elem) => {
    const { name, link } = elem
    createLi(name, link, ul)
  })
}

function createLi(linkName, link, list) {
  const li = document.createElement('Li')
  const a = document.createElement('a')
  list.appendChild(li).appendChild(a)
  li.setAttribute('class', 'link')
  a.textContent = linkName
  a.setAttribute('href', `${link}`)
  a.setAttribute('target', '_blank')
}
