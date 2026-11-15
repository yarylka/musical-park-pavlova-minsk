'use strict';

const people = [
  {id:'moniuszko', name:'Станислав Монюшко', bio:'Композитор и автор опер и романсов. Родился в Убеле под Минском. Среди его наиболее известных опер — «Галька» и «Страшный двор».'},
  {id:'elski', name:'Михаил Ельский', bio:'Скрипач, композитор и музыкальный публицист из Дудичей. Писал концерты для скрипки с оркестром, полонезы и мазурки.'},
  {id:'oginski', name:'Михаил Клеофас Огинский', bio:'Композитор и государственный деятель. Его музыкальное наследие включает фортепианные полонезы.'},
  {id:'aladov', name:'Николай Аладов', bio:'Композитор и музыкальный педагог. Писал симфоническую, камерную и вокальную музыку.'},
  {id:'tikotsky', name:'Евгений Тикоцкий', bio:'Композитор, работавший в оперном и симфоническом жанрах. Его опера «Михась Подгорный» была поставлена в 1939 году.'},
  {id:'olovnikov', name:'Владимир Оловников', bio:'Композитор, известный в том числе песнями и сочинениями для хора.'},
  {id:'bogatyrev', name:'Анатолий Богатырёв', bio:'Композитор и педагог. Его опера «В пущах Полесья» относится к ранним белорусским операм.'},
  {id:'khanok', name:'Эдуард Ханок', bio:'Композитор, известный эстрадными песнями. «Малиновку», написанную на слова Анатолия Поперечного, исполнял ансамбль «Верасы».'},
  {id:'luchenok', name:'Игорь Лученок', bio:'Композитор, чьи песни вошли в репертуар ансамбля «Песняры». Одно из его произведений — «Спадчына» на стихи Янки Купалы.'},
  {id:'smolsky', name:'Дмитрий Смольский', bio:'Композитор, автор симфонических и сценических произведений. Написал оперу «Седая легенда» по произведению Владимира Короткевича.'},
  {id:'cortes', name:'Сергей Кортес', bio:'Композитор, работавший в оперном жанре и писавший музыку для театра и кино.'},
  {id:'mulyavin', name:'Владимир Мулявин', bio:'Музыкант, аранжировщик и основатель ансамбля «Песняры». В работе с ансамблем обращался к белорусскому фольклору и поэзии.'},
  {id:'khodosko', name:'Олег Ходоско', bio:'Композитор, автор камерной и вокальной музыки.'},
  {id:'kopytko', name:'Виктор Копытько', bio:'Композитор, автор вокальных, инструментальных и сценических произведений.'},
  {id:'mdivani', name:'Андрей Мдивани', bio:'Композитор и педагог, автор симфонических и камерных произведений.'}
];

const search = document.querySelector('#search');
const list = document.querySelector('#composers');
const empty = document.querySelector('#empty');
const profile = document.querySelector('#profile');
const player = document.querySelector('#player');
const media = document.querySelector('#media');
let opener;
let playTrigger;

const carousel = document.querySelector('#composer-carousel');
const previous = document.querySelector('#composer-prev');
const next = document.querySelector('#composer-next');

function updateCarousel() {
  const remaining = list.scrollWidth - list.clientWidth;
  carousel.querySelector('.carousel-controls').hidden = list.children.length < 2;
  previous.disabled = list.scrollLeft < 2;
  next.disabled = list.scrollLeft >= remaining - 2;
}

function moveCarousel(direction) {
  const first = list.firstElementChild;
  if (!first) return;
  const step = first.getBoundingClientRect().width + parseFloat(getComputedStyle(list).columnGap);
  const count = Math.max(1, Math.floor(list.clientWidth / step));
  list.scrollBy({left: direction * step * count, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
}

previous.addEventListener('click', () => moveCarousel(-1));
next.addEventListener('click', () => moveCarousel(1));
list.addEventListener('scroll', updateCarousel, {passive:true});
new ResizeObserver(updateCarousel).observe(list);

function node(tag, text, className) {
  const item = document.createElement(tag);
  if (text) item.textContent = text;
  if (className) item.className = className;
  return item;
}

function hideTrack() {
  media.replaceChildren();
  player.hidden = true;
}

function showTrack(track, trigger) {
  playTrigger = trigger;
  document.querySelector('#player-title').textContent = track.title;
  player.hidden = false;

  const audio = node('audio');
  audio.controls = true;
  audio.preload = 'metadata';
  audio.setAttribute('aria-label', track.title);
  audio.addEventListener('error', () => {
    const message = node('p', 'Не удалось загрузить запись. Попробуйте открыть плеер ещё раз.');
    message.setAttribute('role', 'status');
    audio.replaceWith(message);
  }, {once:true});
  audio.src = track.audio;
  media.replaceChildren(audio);
  audio.play().catch(() => {});

  document.querySelector('#close-player').focus({preventScroll:true});
  player.scrollIntoView({block:'nearest'});
}

function playControl(track) {
  const button = node('button', '▶  Слушать', 'play');
  button.type = 'button';
  button.setAttribute('aria-label', 'Слушать «' + track.title + '»');
  button.addEventListener('click', () => showTrack(track, button));
  return button;
}

function portraitUrl(person) {
  return person.id + '.jpg?v=composer-media-20261116';
}

function fillPortrait(person) {
  const figure = document.querySelector('#profile-portrait');
  const photo = node('img');
  photo.alt = 'Портрет — ' + person.name;
  photo.src = portraitUrl(person);
  const info = portraitCredits[person.id];
  const caption = node('figcaption');
  if (info) {
    const link = node('a', info.credit);
    link.href = info.source;
    link.target = '_blank';
    link.rel = 'noopener';
    caption.append(link, ' · кадрирование и тонирование');
  } else {
    caption.textContent = 'Из архива проекта';
  }
  figure.replaceChildren(photo, caption);
  figure.hidden = false;
}

function showProfile(person, trigger, updateUrl = true) {
  opener = trigger;
  hideTrack();
  const track = recordings[person.id];
  fillPortrait(person);
  document.querySelector('#profile-title').textContent = person.name;
  document.querySelector('#profile-copy').textContent = person.bio;
  document.querySelector('#profile-work').textContent = track.title;
  const note = document.querySelector('#profile-recording-note');
  note.textContent = track.note || '';
  note.hidden = !track.note;
  document.querySelector('#profile-action').replaceChildren(playControl(track));
  if (updateUrl) history.replaceState(null, '', '#composer-' + person.id);
  if (!profile.open) profile.showModal();
}

function normalize(value) {
  return value.toLocaleLowerCase('ru').replaceAll('ё', 'е').trim();
}

function renderPeople() {
  const words = normalize(search.value).split(/\s+/);
  const matches = people.filter(person => words.every(word => normalize(person.name).includes(word)));
  list.replaceChildren();
  empty.hidden = matches.length > 0;
  for (const person of matches) {
    const row = node('li');
    const button = node('button', '', 'composer');
    button.type = 'button';
    button.id = 'person-' + person.id;
    const arrow = node('span', '↗', 'card-arrow');
    const placeholder = node('span', person.name.split(' ').map(word => word[0]).join(''), 'composer-placeholder');
    placeholder.setAttribute('aria-hidden', 'true');
    arrow.setAttribute('aria-hidden', 'true');
    const photo = node('img', '', 'composer-portrait');
    photo.alt = '';
    photo.loading = 'lazy';
    photo.decoding = 'async';
    photo.addEventListener('error', () => photo.replaceWith(placeholder), {once:true});
    photo.src = portraitUrl(person);
    button.append(photo);
    button.append(node('span', person.name, 'composer-name'), arrow);
    button.append(node('span', recordings[person.id].title, 'composer-work'));
    button.addEventListener('click', () => showProfile(person, button));
    row.append(button);
    list.append(row);
  }
  carousel.hidden = matches.length === 0;
  list.scrollLeft = 0;
  updateCarousel();
}

function openHashProfile() {
  const person = people.find(item => location.hash === '#composer-' + item.id);
  if (person) showProfile(person, document.querySelector('#person-' + person.id), false);
  else if (profile.open) profile.close();
}

profile.addEventListener('close', () => {
  if (location.hash.startsWith('#composer-')) history.replaceState(null, '', '#people');
  hideTrack();
  opener?.focus({preventScroll:true});
});
document.querySelector('#close-player').addEventListener('click', () => {
  hideTrack();
  playTrigger?.focus({preventScroll:true});
});
search.addEventListener('input', renderPeople);
window.addEventListener('hashchange', openHashProfile);

renderPeople();
openHashProfile();
