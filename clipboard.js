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
// список программ
const listApp = [
  { app: 'Выбери название программы' },
  { app: 'Adobe Reader 11' },
  { app: 'КСУОП' },
  { app: 'Java' },
  { app: 'Program' },
  { app: 'Программа для записи' },
]

const tabHeaders = document.querySelectorAll('.tab-h')
const tabBlocks = document.querySelectorAll('.tab-b')

for (const header of tabHeaders) {
  header.addEventListener('click', (event) => {
    clearStyleBlock()
    clearActiveClasses()
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

function clearStyleBlock() {
  tabBlocks.forEach((block) => {
    block.style.display = 'none'
  })
}

function clearActiveClasses() {
  tabHeaders.forEach((header) => {
    header.classList.remove('active')
  })
}

document.querySelector('.tabs-body').addEventListener('click', fBtn)

// функция перебора кнопок копирования
function fBtn(event) {
  if (event.target.className === 'copy') {
    // dataTab1 - номер кнопки, которую нажали
    let dataTab1 = event.target.getAttribute('data-tab')
    // все textarea с содержимым
    let tabBody1 = document.getElementsByClassName('out')
    for (let i = 0; i < tabBody1.length; i++) {
      if (dataTab1 == i) {
        tabBody1[i].focus()
        tabBody1[i].select()
        clipboard()
      }
    }
  }
}

// функция копирования в буфер обмена
function clipboard() {
  document.execCommand('copy')
}

// перебор массива с шаблонами для копирования.
const textarea = document.getElementsByClassName('out')
tab1.forEach(function (text, index) {
  let value = text.value,
    number = index
  textarea[number].textContent = `${value}`
})

// перебор массива с ссылками и создание их в отдельном поле.
const ul = document.getElementById('list')
createList(list, ul)

const ul2 = document.getElementById('list2')
createList(list2, ul2)

function createList(arg, lisssst) {
  arg.forEach(function (links) {
    let linkName = links.name,
      link = links.link
    createLi(linkName, link, lisssst)
  })
}

function createLi(linkName, link, spisok) {
  let li = document.createElement('Li')
  let a = document.createElement('a')
  spisok.appendChild(li).appendChild(a)
  li.setAttribute('class', 'link')
  a.textContent = linkName
  a.setAttribute('href', `${link}`)
  a.setAttribute('target', '_blank')
}

// перебор массива с названием программ и создине шаблона
listApp.forEach(function (program) {
  let prog = program.app
  createOption(prog)
})

function createOption(el) {
  let option = document.createElement('option')
  document.getElementById('listapp').appendChild(option)
  option.setAttribute('value', `${el}`)
  option.textContent = `${el}`
}

//функция подстановки шаблона при выборе элемента из списка
document.getElementById('listapp').onchange = function () {
  let sel = document.getElementById('listapp').selectedIndex
  let options = document.getElementById('listapp').options
  let text = options[sel].text
  tab1[0].value = `Для установки выберите пакет ${text} и дождитесь выполнения!`
  document.getElementById('first').value = tab1[0].value
}
