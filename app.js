'use strict';

const tracks = [
  {id:'polonaise', title:'Прощание с родиной', credit:'Полонез, традиционно приписываемый М. К. Огинскому · версия для флейты', audio:'https://www.flutetunes.com/tunes/oginsky-polonaise-farewell-to-the-fatherland.mp3', source:'https://www.flutetunes.com/tunes.php?id=492', sourceName:'FluteTunes'},
  {id:'halka', title:'Галька', credit:'Станислав Монюшко · спектакль Варшавской камерной оперы, 2019', video:'qNIebX92TFY', source:'https://www.youtube.com/watch?v=qNIebX92TFY', sourceName:'YouTube'},
  {id:'spadchyna', title:'Спадчына', credit:'Музыка Игоря Лученка, слова Янки Купалы · ансамбль «Песняры»', video:'hEPvNSNxKdU', source:'https://www.youtube.com/watch?v=hEPvNSNxKdU', sourceName:'YouTube'},
  {id:'malinovka', title:'Малиновка', credit:'Музыка Эдуарда Ханка, слова Анатолия Поперечного · ВИА «Верасы»', source:'https://mp3.retroportal.ru/estrada_ussr/malinovki_zaslysha_golosok_verasy.html', sourceName:'Retroportal'},
  {id:'dolya', title:'Песнь о доле', credit:'Владимир Мулявин и ансамбль «Песняры» · музыкальная притча по Янке Купале', video:'RzTyrxiAdvI', source:'https://www.youtube.com/watch?v=RzTyrxiAdvI', sourceName:'YouTube'}
];

const people = [
  {id:'moniuszko', name:'Станислав Монюшко', bio:'Композитор и автор опер и романсов. Родился в Убеле под Минском. Среди его наиболее известных опер — «Галька» и «Страшный двор».', track:'halka'},
  {id:'elski', name:'Михаил Ельский', bio:'Скрипач, композитор и музыкальный публицист из Дудичей. Писал концерты для скрипки с оркестром, полонезы и мазурки.', work:'Концерт № 2 для скрипки с оркестром'},
  {id:'oginski', name:'Михаил Клеофас Огинский', bio:'Композитор и государственный деятель. Его музыкальное наследие включает фортепианные полонезы.', track:'polonaise'},
  {id:'aladov', name:'Николай Аладов', bio:'Композитор и музыкальный педагог. Писал симфоническую, камерную и вокальную музыку.', work:'«Тарас на Парнасе»'},
  {id:'tikotsky', name:'Евгений Тикоцкий', bio:'Композитор, работавший в оперном и симфоническом жанрах. Его опера «Михась Подгорный» была поставлена в 1939 году.', work:'«Михась Подгорный»'},
  {id:'olovnikov', name:'Владимир Оловников', bio:'Композитор, известный в том числе песнями и сочинениями для хора.'},
  {id:'bogatyrev', name:'Анатолий Богатырёв', bio:'Композитор и педагог. Его опера «В пущах Полесья» относится к ранним белорусским операм.', work:'«В пущах Полесья»'},
  {id:'khanok', name:'Эдуард Ханок', bio:'Композитор, известный эстрадными песнями. «Малиновку», написанную на слова Анатолия Поперечного, исполнял ансамбль «Верасы».', track:'malinovka'},
  {id:'luchenok', name:'Игорь Лученок', bio:'Композитор, чьи песни вошли в репертуар ансамбля «Песняры». Одно из его произведений — «Спадчына» на стихи Янки Купалы.', track:'spadchyna'},
  {id:'smolsky', name:'Дмитрий Смольский', bio:'Композитор, автор симфонических и сценических произведений. Написал оперу «Седая легенда» по произведению Владимира Короткевича.', work:'«Седая легенда»'},
  {id:'cortes', name:'Сергей Кортес', bio:'Композитор, работавший в оперном жанре и писавший музыку для театра и кино.'},
  {id:'mulyavin', name:'Владимир Мулявин', bio:'Музыкант, аранжировщик и основатель ансамбля «Песняры». В работе с ансамблем обращался к белорусскому фольклору и поэзии.', track:'dolya'},
  {id:'khodosko', name:'Олег Ходоско', bio:'Композитор, автор камерной и вокальной музыки.', work:'Вокальный цикл «Умирающий костёр»'},
  {id:'kopytko', name:'Виктор Копытько', bio:'Композитор, автор вокальных, инструментальных и сценических произведений.', work:'«Три стихотворения Осипа Мандельштама»'},
  {id:'mdivani', name:'Андрей Мдивани', bio:'Композитор и педагог, автор симфонических и камерных произведений.'}
];

const knownTracks = new Map(tracks.map(track => [track.id, track]));
for (const [id, recording] of Object.entries(composerMedia.recordings)) {
  const person = people.find(item => item.id === id);
  const trackId = person.track || id;
  const track = { ...knownTracks.get(trackId), ...recording, id: trackId };
  knownTracks.set(trackId, track);
  person.track = trackId;
}
const programme = [...knownTracks.values()];

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
const playingAt = document.querySelector('#listening-player');
const profilePlayer = document.querySelector('#profile-player');

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

function sourceLink(track, className) {
  const label = className ? 'Слушать на сайте источника' : 'Источник: ' + track.sourceName;
  const link = node('a', label + ' ↗', className);
  link.href = track.source;
  link.target = '_blank';
  link.rel = 'noopener';
  return link;
}

function hideTrack() {
  media.replaceChildren();
  player.hidden = true;
  playingAt.append(player);
}

function showTrack(track, trigger, useProfile) {
  playTrigger = trigger;
  (useProfile ? profilePlayer : playingAt).append(player);
  document.querySelector('#player-title').textContent = track.title;
  player.hidden = false;
  const embed = node(track.audio ? 'audio' : 'iframe');
  if (track.audio) {
    embed.controls = true;
    embed.src = track.audio;
    embed.preload = 'metadata';
    embed.setAttribute('aria-label', track.title);
    embed.play().catch(() => {});
    embed.addEventListener('error', () => {
      const message = node('p', 'Запись можно открыть на сайте источника.');
      message.setAttribute('role', 'status');
      embed.replaceWith(message);
    }, {once:true});
  } else {
    embed.title = track.title;
    embed.src = track.embed || 'https://www.youtube-nocookie.com/embed/' + track.video + '?autoplay=1';
    if (track.embed) embed.className = 'external-player';
    embed.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    embed.allowFullscreen = true;
    embed.referrerPolicy = 'strict-origin-when-cross-origin';
  }
  media.replaceChildren(embed, sourceLink(track));
  if (track.license) {
    const license = node('a', 'Лицензия CC BY-SA 3.0 ↗');
    license.href = track.license;
    license.target = '_blank';
    license.rel = 'noopener';
    media.append(node('br'), license);
  }
  document.querySelector('#close-player').focus({preventScroll:true});
  player.scrollIntoView({block:'nearest'});
}

function playControl(track, useProfile = false) {
  if (!track.audio && !track.video && !track.embed) return sourceLink(track, 'play');
  const button = node('button', '▶  Слушать', 'play');
  button.type = 'button';
  button.setAttribute('aria-label', 'Слушать «' + track.title + '»');
  button.addEventListener('click', () => showTrack(track, button, useProfile));
  return button;
}

function fillPortrait(person) {
  const figure = document.querySelector('#profile-portrait');
  const image = composerMedia.portraits[person.id];
  figure.replaceChildren();
  figure.hidden = !image?.src;
  if (!image?.src) return;
  const photo = node('img');
  photo.alt = image.type === 'painting' ? 'Живописный портрет' : 'Фотография';
  photo.src = image.src;
  const credit = node('figcaption');
  const link = node('a', image.credit);
  link.href = image.source;
  link.target = '_blank';
  link.rel = 'noopener';
  credit.append(link);
  figure.append(photo, credit);
}

function showProfile(person, trigger, updateUrl = true) {
  opener = trigger;
  const track = knownTracks.get(person.track);
  fillPortrait(person);
  document.querySelector('#profile-title').textContent = person.name;
  document.querySelector('#profile-copy').textContent = person.bio;
  const work = document.querySelector('#profile-work');
  work.textContent = track?.title || person.work || 'Подборка записей готовится.';
  const action = document.querySelector('#profile-action');
  action.replaceChildren();
  if (track) action.append(playControl(track, true));
  const portrait = composerMedia.portraits[person.id];
  if (portrait?.source && !portrait.src) {
    const link = node('a', 'Портрет в источнике ↗', 'play');
    link.href = portrait.source;
    link.target = '_blank';
    link.rel = 'noopener';
    action.append(link);
  }
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
    const portrait = composerMedia.portraits[person.id];
    const arrow = node('span', '↗', 'card-arrow');
    const placeholder = node('span', person.name.split(' ').map(word => word[0]).join(''), 'composer-placeholder');
    placeholder.setAttribute('aria-hidden', 'true');
    arrow.setAttribute('aria-hidden', 'true');
    if (portrait?.src) {
      const photo = node('img', '', 'composer-portrait');
      photo.alt = '';
      photo.loading = 'lazy';
      photo.decoding = 'async';
      photo.addEventListener('error', () => photo.replaceWith(placeholder), {once:true});
      photo.src = portrait.src;
      button.append(photo);
    } else {
      button.append(placeholder);
    }
    button.append(node('span', person.name, 'composer-name'), arrow);
    const track = knownTracks.get(person.track);
    if (track || person.work) button.append(node('span', track?.title || person.work, 'composer-work'));
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
  if (profilePlayer.contains(player)) hideTrack();
  opener?.focus({preventScroll:true});
});
document.querySelector('#close-player').addEventListener('click', () => {
  hideTrack();
  playTrigger?.focus({preventScroll:true});
});
search.addEventListener('input', renderPeople);
window.addEventListener('hashchange', openHashProfile);

const trackList = document.querySelector('#tracks');
const trackRows = programme.map(track => {
  const row = node('article', '', 'track');
  const title = node('div');
  title.append(node('h3', track.title), node('p', track.credit));
  row.append(title, playControl(track));
  return row;
});
trackList.replaceChildren(...trackRows);

renderPeople();
openHashProfile();

