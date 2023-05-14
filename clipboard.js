const countHeaders = 3
const countTextarea = 5

const nameHeaders = ['Шаблон', 'Вставка', 'Прочее']
// список шаблонов в полях textarea
const valueTextarea = ['Text1', 'Text2', 'Text3', 'Text4', 'Text5', 'Text6']
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

//Создание вкладок
function createHeader(num, elem) {
  for (let i = 0; i < num; i++) {
    const div = document.createElement('div')
    div.setAttribute('data-tab1', i)
    if (elem === 'tab-h') {
      div.className = 'tab-h'
      div.innerHTML =
        nameHeaders.find((e, index) => index === i) || `Прочее-${i}`
      tabsHeader.appendChild(div)
    } else if (elem === 'tab-b') {
      div.className = 'tab-b'
      tabsBody.appendChild(div)
      createTextBlockAndBtn(countTextarea, div)
    }
  }
}
createHeader(countHeaders, 'tab-h')

const tabsBody = document.createElement('div')
tabsBody.className = 'tabs-body'
tabsHeader.appendChild(tabsBody)

createHeader(countHeaders, 'tab-b')

const tabHeaders = document.querySelectorAll('.tab-h')
const tabBlocks = document.querySelectorAll('.tab-b')
tabHeaders[0].classList.add('active')
tabBlocks[0].style.display = 'block'

//Перебок вкладок, ставиться слушатель на какую нажали
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

//Очистка стилей и отображение блоков
function clearStyleAndClasses() {
  tabBlocks.forEach((block) => {
    block.style.display = 'none'
  })
  tabHeaders.forEach((header) => {
    header.classList.remove('active')
  })
}

//Создание блока textarea с полем информации и кнопки копирования в буфер
function createTextBlockAndBtn(countBlocks, tab_block) {
  for (let i = 0; i < countBlocks; i++) {
    const div = document.createElement('div')
    div.className = 'textarea'
    const textarea = document.createElement('textarea')
    textarea.className = 'out'
    textarea.setAttribute('cols', '60')
    textarea.setAttribute('rows', '6')
    const btn = document.createElement('button')
    btn.className = 'copy'
    btn.innerText = 'Копировать'
    div.append(textarea, btn)
    tab_block.appendChild(div)
  }
}

//Добавление текста из массива в блок textarea
const valueText = document.querySelectorAll('.out')
valueText.forEach((item, index) => {
  item.textContent = valueTextarea.filter((el, ind) => ind === index)
})

//Копирование текста из блока textarea в буфер
const btnTextarea = document.querySelectorAll('.copy')
for (const btn of btnTextarea) {
  btn.addEventListener('click', (elem) => {
    elem.target.previousSibling.focus()
    elem.target.previousSibling.select()
    clipboard()
  })
}

// функция копирования в буфер обмена
function clipboard() {
  document.execCommand('copy')
}

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
