'use strict';

const people = [
  {
    "id": "moniuszko",
    "name": "Станислав Монюшко",
    "years": "1819–1872",
    "bio": [
      "Польский композитор и один из создателей польской национальной оперы. Родился в Убеле под Минском, начал учиться музыке у матери, затем брал уроки в Минске и Варшаве. После учёбы в Берлине работал органистом в Вильно, а позднее дирижировал в варшавском Большом театре.",
      "В опере «Галька» история крестьянской девушки разворачивается на фоне польских танцев и хоров. В «Страшном дворе» действие перенесено в шляхетскую усадьбу. Для домашнего музицирования Монюшко издавал сборники песен, в один из которых вошла «Праснічка» (Prząśniczka)."
    ],
    "source": [
      "Большой театр — Национальная опера Польши",
      "https://teatrwielki.pl/en/people/stanislaw-moniuszko"
    ]
  },
  {
    "id": "elski",
    "name": "Михаил Ельский",
    "years": "1831–1904",
    "bio": [
      "Скрипач, композитор и музыкальный публицист из Дудичей под Минском. Учился в Дрездене, Париже и Мюнхене. Выступал с концертами в Минске, а также в городах Польши и Германии.",
      "Ельский писал скрипичные концерты, мазурки и другие пьесы. Интересовался и народной музыкой. Во время поездки в окрестностях Тыкоцина он записывал местные мелодии."
    ],
    "source": [
      "Очерк Зыгмунта Глогера с примечанием о Ельском",
      "https://ksiaznicapodlaska.pl/site/gloger/t2/r_III.pdf"
    ]
  },
  {
    "id": "oginski",
    "name": "Михаил Клеофас Огинский",
    "years": "1765–1833",
    "bio": [
      "Композитор, дипломат и участник восстания Тадеуша Костюшко. В начале XIX века жил в Залесье, ныне в Сморгонском районе. При нём усадьба стала местом встреч музыкантов и литераторов, где устраивали концерты.",
      "Огинский писал полонезы и другие пьесы для фортепиано. С его именем традиционно связывают полонез ля минор «Прощание с родиной». В записи можно услышать, как мерный танцевальный ритм сочетается с лирической мелодией."
    ],
    "source": [
      "История усадьбы Огинского в Залесье",
      "https://www.ais.by/story/5930"
    ]
  },
  {
    "id": "aladov",
    "name": "Николай Аладов",
    "years": "1890–1972",
    "bio": [
      "Композитор и педагог, сыгравший заметную роль в становлении музыкального образования в Беларуси. Преподавал в Белорусской государственной консерватории и в послевоенные годы возглавлял её.",
      "Писал симфоническую, камерную и хоровую музыку. Одноимённая белорусская поэма легла в основу его комической оперы «Тарас на Парнасе». Симфониетта до мажор, соч. 40, представляет его оркестровое творчество."
    ],
    "source": [
      "История Белорусской государственной консерватории",
      "https://dokumen.pub/1932-2017.html"
    ]
  },
  {
    "id": "tikotsky",
    "name": "Евгений Тикоцкий",
    "years": "1893–1970",
    "bio": [
      "Один из композиторов, стоявших у истоков белорусской оперы и симфонической музыки. Родился в Санкт-Петербурге, работал в Бобруйске и Минске. Среди его сочинений — симфонии и оперы «Михась Подгорный» и «Алеся».",
      "«Михася Подгорного» поставили в Минске в 1939 году. В опере судьбы белорусских крестьян показаны на фоне Первой мировой войны и революции. Вокальные партии и хоры опираются на интонации белорусской песни."
    ],
    "source": [
      "Очерк об опере «Михась Подгорный»",
      "https://www.belcanto.ru/opera_mikhas.html"
    ]
  },
  {
    "id": "olovnikov",
    "name": "Владимир Оловников",
    "years": "1919–1996",
    "bio": [
      "Композитор и педагог, учившийся композиции у Василия Золотарёва в Белорусской государственной консерватории. Позднее преподавал и руководил консерваторией.",
      "Особое место в его музыке занимают песни для солистов и хора. Оловников писал и для оркестра. В симфонической поэме «Партизанская быль» 1952 года он обратился к теме партизанского движения во время войны."
    ],
    "source": [
      "«Избранные песни» в каталоге Российской государственной библиотеки",
      "https://search.rsl.ru/ru/record/01001965009"
    ]
  },
  {
    "id": "bogatyrev",
    "name": "Анатолий Богатырёв",
    "years": "1913–2003",
    "bio": [
      "Родился в Витебске, изучал композицию у Василия Золотарёва. Преподавал в Белорусской государственной консерватории и возглавлял её. Среди его учеников были Андрей Мдивани и Олег Ходоско, чьи карточки также есть в каталоге парка.",
      "Для оперы «В пущах Полесья», поставленной в 1939 году, Богатырёв обратился к повести Якуба Коласа «Дрыгва». Писал также хоры, оркестровые сочинения и музыку к драматическим спектаклям, в том числе к лермонтовскому «Маскараду»."
    ],
    "source": [
      "Энциклопедия современной Украины",
      "https://esu.com.ua/article-35735"
    ]
  },
  {
    "id": "khanok",
    "name": "Эдуард Ханок",
    "years": "Родился в 1940 году",
    "bio": [
      "Композитор и популяризатор белорусской эстрадной песни. Его произведения вошли в репертуар вокально-инструментальных ансамблей и сольных исполнителей. Среди них — «Завіруха», «Малиновка» и «Зима», известная по первой строке «Потолок ледяной».",
      "«Малиновку» на слова Анатолия Поперечного исполнял ансамбль «Верасы». Ханок писал и для сольных певцов. «Зиму», например, исполнял Эдуард Хиль."
    ],
    "source": [
      "Интервью с Эдуардом Ханком",
      "https://daily.afisha.ru/music/18325-avtor-pesen-verasov-i-hilya-eduard-hanok-o-belorusskih-via-i-sovremennoy-muzyke/"
    ]
  },
  {
    "id": "luchenok",
    "name": "Игорь Лученок",
    "years": "1938–2018",
    "bio": [
      "Белорусский композитор и педагог, выпускник класса композиции Анатолия Богатырёва. Писал хоровую, камерную и оркестровую музыку, а широкую известность получил благодаря песням. Среди них — «Мой родны кут», «Майский вальс» и «Жураўлі на Палессе ляцяць».",
      "Лученок обращался к белорусской поэзии. На стихи Янки Купалы он написал «Спадчыну», вошедшую в репертуар «Песняров». Для того же ансамбля создал поэму-легенду «Гусляр» по Купале."
    ],
    "source": [
      "Биография и хоровые сочинения на ХОР.by",
      "https://hor.by/personalii/igar-luchanok/"
    ]
  },
  {
    "id": "smolsky",
    "name": "Дмитрий Смольский",
    "years": "1937–2017",
    "bio": [
      "Минский композитор и педагог. В центре его творчества — музыка для оркестра и сцены. Он написал 15 симфоний, инструментальные концерты, в том числе для цимбал, и музыку к спектаклям и фильмам.",
      "Опера «Седая легенда» создана по произведению Владимира Короткевича. В карточке можно послушать вторую часть Симфонии № 13, обозначенную Allegro. Такое обозначение указывает на быстрый темп."
    ],
    "source": [
      "Большая российская энциклопедия",
      "https://old.bigenc.ru/music/text/5544502"
    ]
  },
  {
    "id": "cortes",
    "name": "Сергей Кортес",
    "years": "1935–2016",
    "bio": [
      "Родился в Чили, музыкальное образование начал получать в Буэнос-Айресе и продолжил в Минске. Работал в драматическом театре, на киностудии «Беларусьфильм» и в Большом театре Беларуси.",
      "Среди его сценических произведений — оперы «Матушка Кураж» по пьесе Бертольта Брехта и «Визит дамы» по Фридриху Дюрренматту. В основу оперы «Джордано Бруно» легли последние годы жизни мыслителя. Её первоначальное название — «Еретик»."
    ],
    "source": [
      "Интервью с Сергеем Кортесом о его операх",
      "https://www.operanews.ru/kortes.html"
    ]
  },
  {
    "id": "mulyavin",
    "name": "Владимир Мулявин",
    "years": "1941–2003",
    "bio": [
      "Певец, гитарист, композитор и аранжировщик. Родился в Свердловске, работал в Белорусской государственной филармонии. Создал ансамбль «Лявоны», получивший впоследствии название «Песняры».",
      "Мулявин соединял белорусские народные мелодии и поэзию с эстрадным звучанием. В репертуаре ансамбля были обработки народных песен, например «Косил Ясь конюшину», и крупные программы, в том числе «Песня о доле» по Янке Купале. «Александрына» вошла в число ранних записей «Песняров»."
    ],
    "source": [
      "«Славянский базар в Витебске» о Мулявине и «Песнярах»",
      "https://fest-sbv.by/participants/vladimir-mulavin"
    ]
  },
  {
    "id": "khodosko",
    "name": "Олег Ходоско",
    "years": "Родился в 1964 году",
    "bio": [
      "Белорусский композитор, выпускник класса Анатолия Богатырёва в Белорусской государственной консерватории. Пишет симфоническую, камерную и хоровую музыку. В хоровых сочинениях обращается и к народной песне, и к духовным текстам.",
      "Ходоско работает и для сцены. Музыку к балету-сказке «Дюймовочка» он написал специально для постановки балетной школы Вежновец. Для маршрута музыкального парка выбрано «Купалле»."
    ],
    "source": [
      "Балетная школа Вежновец о постановке «Дюймовочки»",
      "https://ballet.of.by/duimovochka/"
    ]
  },
  {
    "id": "kopytko",
    "name": "Виктор Копытько",
    "years": "1956–2025",
    "bio": [
      "Родился в Минске, окончил Ленинградскую консерваторию по классу композиции. Писал хоровую, камерную и сценическую музыку, сотрудничал с драматическими и кукольными театрами и создавал музыку для кино.",
      "В хоровой музыке Копытько обращался к духовным текстам, например в «Двух песнопениях памяти Александра Меня». Для «Старинного танца» он выбрал дуэт белорусских цимбал и виолончели."
    ],
    "source": [
      "Исследование «Двух песнопений памяти Александра Меня»",
      "https://www.terrahumana.ru/arhiv/14_04/14_04all.pdf"
    ]
  },
  {
    "id": "mdivani",
    "name": "Андрей Мдивани",
    "years": "1937–2021",
    "bio": [
      "Родился в Тбилиси, изучал композицию у Анатолия Богатырёва в Белорусской государственной консерватории. Ещё во время учёбы написал симфоническую поэму «Фрески». Позднее преподавал композицию и создавал музыку для оркестра и театра.",
      "В симфонии «Полоцкие письмена» и балете «Страсти (Рогнеда)» Мдивани обращался к истории Полоцка и древнерусским сюжетам. Балет в постановке Большого театра Беларуси открывал Дни культуры Беларуси в Москве в 2001 году."
    ],
    "source": [
      "Биография на сайте Андрея Мдивани",
      "https://www.andreimdivani.com/"
    ]
  }
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
  if (playTrigger) playTrigger.hidden = false;
  playTrigger = null;
}

function showTrack(track, trigger) {
  playTrigger = trigger;
  trigger.hidden = true;
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

function portraitUrl(person, extension) {
  return 'portraits/' + person.id + '.' + extension;
}

function fillPortrait(person) {
  const figure = document.querySelector('#profile-portrait');
  const photo = node('img');
  photo.alt = 'Портрет — ' + person.name;
  photo.src = portraitUrl(person, 'png');
  const info = portraitCredits[person.id];
  const caption = node('figcaption');
  if (info) {
    const link = node('a', info.credit);
    link.href = info.source;
    link.target = '_blank';
    link.rel = 'noopener';
    caption.append(link, ' · стилизованный портрет');
  } else {
    caption.textContent = 'Стилизованный портрет по материалам проекта';
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
  document.querySelector('#profile-years').textContent = person.years;
  document.querySelector('#profile-copy').replaceChildren(...person.bio.map(text => node('p', text)));
  const [sourceTitle, sourceUrl] = person.source;
  const source = document.querySelector('#profile-source');
  source.textContent = sourceTitle;
  source.href = sourceUrl;
  document.querySelector('#profile-work').textContent = track.title;
  const note = document.querySelector('#profile-recording-note');
  note.textContent = track.note || '';
  note.hidden = !track.note;
  document.querySelector('#profile-action').replaceChildren(playControl(track));
  if (updateUrl) history.replaceState(null, '', '#composer-' + person.id);
  if (!profile.open) profile.showModal();
  profile.scrollTop = 0;
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
    photo.src = portraitUrl(person, 'webp');
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
  const trigger = playTrigger;
  hideTrack();
  trigger?.focus({preventScroll:true});
});
search.addEventListener('input', renderPeople);
window.addEventListener('hashchange', openHashProfile);

renderPeople();
openHashProfile();
