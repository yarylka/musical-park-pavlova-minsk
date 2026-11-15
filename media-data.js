'use strict';

const composerMedia = {
  "portraits": {
    "moniuszko": {
      "src": "moniuszko.jpg",
      "source": "https://commons.wikimedia.org/wiki/File:Stanislaw_Moniuszko_ca_1865_(891336)_(cropped).jpg",
      "credit": "Jan Mieczkowski, ок. 1865 · общественное достояние"
    },
    "elski": {
      "src": "elski.jpg",
      "source": "https://commons.wikimedia.org/wiki/File:Micha%C5%82_Jelski._%D0%9C%D1%96%D1%85%D0%B0%D0%BB_%D0%95%D0%BB%D1%8C%D1%81%D0%BA%D1%96_(XIX).jpg",
      "credit": "Неизвестный фотограф, XIX век · общественное достояние"
    },
    "oginski": {
      "src": "oginski.jpg",
      "source": "https://commons.wikimedia.org/wiki/File:Micha%C5%82_Kleafas_Aginski._%D0%9C%D1%96%D1%85%D0%B0%D0%BB_%D0%9A%D0%BB%D0%B5%D0%B0%D1%84%D0%B0%D1%81_%D0%90%D0%B3%D1%96%D0%BD%D1%81%D0%BA%D1%96_(F._Fabre%2C_1805).jpg",
      "credit": "Франсуа-Ксавье Фабр, 1805 · общественное достояние",
      "type": "painting"
    },
    "aladov": {
      "src": "aladov.jpg",
      "source": "https://commons.wikimedia.org/wiki/File:%D0%9C%D1%96%D0%BA%D0%B0%D0%BB%D0%B0%D0%B9_%D0%A2%D0%B0%D1%80%D0%B0%D1%81%D1%96%D0%BA%D0%B0%D1%9E._%D0%9F%D0%B0%D1%80%D1%82%D1%80%D1%8D%D1%82_%D0%9C._%D0%86._%D0%90%D0%BB%D0%B0%D0%B4%D0%B0%D0%B2%D0%B0._1960.jpg",
      "credit": "Мікалай Тарасікаў, 1960 · общественное достояние в Беларуси",
      "type": "painting"
    },
    "bogatyrev": {
      "src": "bogatyrev.jpg",
      "source": "https://commons.wikimedia.org/wiki/File:Anatol_Bahatyro%C5%AD._%D0%90%D0%BD%D0%B0%D1%82%D0%BE%D0%BB%D1%8C_%D0%91%D0%B0%D0%B3%D0%B0%D1%82%D1%8B%D1%80%D0%BE%D1%9E_(1940).jpg",
      "credit": "Неизвестный фотограф, 1940 · общественное достояние"
    },
    "khanok": {
      "src": "khanok.jpg",
      "source": "https://commons.wikimedia.org/wiki/File:Ksenevich_Hanok_cropped.jpg",
      "credit": "Bogatstvo · CC BY-SA 4.0"
    },
    "luchenok": {
      "src": "luchenok.jpg",
      "source": "https://commons.wikimedia.org/wiki/File:Igor_Luchenok.jpg",
      "credit": "Serge Serebro / Vitebsk Popular News · CC BY-SA 3.0"
    },
    "smolsky": {
      "src": "smolsky.jpg",
      "source": "https://commons.wikimedia.org/wiki/File:%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%91%D1%80%D0%BE%D0%BD%D0%B8%D1%81%D0%BB%D0%B0%D0%B2%D0%BE%D0%B2%D0%B8%D1%87_%D0%A1%D0%BC%D0%BE%CC%81%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9_(25_%D0%B8%D1%8E%D0%BB%D1%8F_1937)%2C_%D0%B1%D0%B5%D0%BB%D0%BE%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80.jpg",
      "credit": "AnnQuende · CC BY-SA 4.0"
    },
    "cortes": {
      "src": "cortes.jpg",
      "source": "https://commons.wikimedia.org/wiki/File:Kortez.jpg",
      "credit": "Fryta 73 · CC BY-SA 2.0"
    },
    "mulyavin": {
      "src": "mulyavin.jpg",
      "source": "https://commons.wikimedia.org/wiki/File:Vladimir_Muliavin.jpg",
      "credit": "Boris Semenov · CC BY 4.0"
    },
    "kopytko": {
      "src": "kopytko.jpg",
      "source": "https://commons.wikimedia.org/wiki/File:V.Copytsko.jpg",
      "credit": "А. Кушнер · CC BY-SA 4.0"
    },
    "tikotsky": {
      "source": "https://sofiaphilharmonic.com/en/artists/yevgeny-tikotsky"
    },
    "olovnikov": {
      "source": "https://ru.wikipedia.org/wiki/%D0%9E%D0%BB%D0%BE%D0%B2%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%2C_%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B8%D1%87"
    },
    "khodosko": {
      "source": "https://www.belcantofund.com/people/khodosko-o/"
    },
    "mdivani": {
      "source": "https://www.andreimdivani.com/"
    }
  },
  "recordings": {
    "elski": {
      "title": "Концерт № 2 для скрипки с оркестром",
      "credit": "Михаил Ельский · фрагмент, скрипка — Лев Горелик",
      "video": "ouUga5XM-gc",
      "source": "https://www.youtube.com/watch?v=ouUga5XM-gc",
      "sourceName": "YouTube"
    },
    "aladov": {
      "title": "Симфониетта до мажор, соч. 40",
      "credit": "Николай Аладов · симфониетта на белорусские народные темы",
      "video": "zIHFepi8vRk",
      "source": "https://www.youtube.com/watch?v=zIHFepi8vRk",
      "sourceName": "YouTube"
    },
    "tikotsky": {
      "title": "«Михась Подгорный» — ария Марыси",
      "credit": "Евгений Тикоцкий · «Плача рэчка з ручайкамі», II действие",
      "audio": "https://moosic.my.mail.ru/file/9329aff19be2a5141250c53aeeaf4693.mp3",
      "source": "https://my.mail.ru/music/songs/%D1%82%D0%B8%D0%BA%D0%BE%D1%86%D0%BA%D0%B8%D0%B9-%D0%B5-%D0%BA-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0-%D0%BC%D0%B8%D1%85%D0%B0%D1%81%D1%8C-%D0%BF%D0%BE%D0%B4%D0%B3%D0%BE%D1%80%D0%BD%D1%8B%D0%B9-%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D0%B5-2-%D0%B0%D1%80%D0%B8%D1%8F-%D0%BC%D0%B0%D1%80%D1%8B%D1%81%D0%B8-%D0%BF%D0%BB%D0%B0%D1%87%D0%B0-%D1%80%D1%8D%D1%87%D0%BA%D0%B0-%D0%B7-%D1%80%D1%83%D1%87%D0%B0%D0%B9%D0%BA%D0%B0%D0%BCi-9329aff19be2a5141250c53aeeaf4693",
      "sourceName": "Музыка Mail"
    },
    "olovnikov": {
      "title": "Радзіма мая дарагая",
      "credit": "Владимир Оловников · слова Алеся Бачило",
      "embed": "https://ok.ru/videoembed/9063235457506",
      "source": "https://ok.ru/video/9063235457506",
      "sourceName": "OK Видео"
    },
    "bogatyrev": {
      "title": "Симфония № 1",
      "credit": "Анатолий Богатырёв · Государственный академический симфонический оркестр Беларуси, дирижёр Михаил Козинец",
      "embed": "https://ok.ru/videoembed/1201286482467",
      "source": "https://ok.ru/video/1201286482467",
      "sourceName": "OK Видео"
    },
    "khanok": {
      "video": "Dc1sTzsNIVE",
      "source": "https://www.youtube.com/watch?v=Dc1sTzsNIVE",
      "sourceName": "Гостелерадиофонд на YouTube"
    },
    "smolsky": {
      "title": "Седая легенда",
      "credit": "Дмитрий Смольский · опера, запись спектакля 13 февраля 2024 года",
      "video": "O0IG6SQsw2w",
      "source": "https://www.youtube.com/watch?v=O0IG6SQsw2w",
      "sourceName": "YouTube"
    },
    "cortes": {
      "title": "А хто там ідзе?",
      "credit": "Сергей Кортес · стихи Янки Купалы, ансамбль «Песняры»",
      "video": "ck-szAYrDxo",
      "source": "https://www.youtube.com/watch?v=ck-szAYrDxo",
      "sourceName": "YouTube"
    },
    "khodosko": {
      "title": "Купалле",
      "credit": "Олег Ходоско · Симфонический оркестр Белтелерадиокомпании, дирижёр Александр Высоцкий",
      "source": "https://test.orpheusradio.ru/programs/music_around_the_world/2025-10-04/41552-radio-kultura-belorussiya-predstavlyaet",
      "sourceName": "Радио «Орфей»"
    },
    "kopytko": {
      "title": "Посвящение",
      "credit": "Виктор Копытько · Государственный камерный хор Республики Беларусь, дирижёр Игорь Матюхов",
      "audio": "https://classic-online.ru/a.php?file_id=52512",
      "source": "https://classic-online.ru/ru/production/29332",
      "sourceName": "Classic-Online"
    },
    "mdivani": {
      "title": "Симфония № 1",
      "credit": "Андрей Мдивани · запись с сайта композитора",
      "audio": "https://www.andreimdivani.com/mp3/s1.mp3",
      "source": "https://www.andreimdivani.com/products.php",
      "sourceName": "Сайт Андрея Мдивани"
    },
    "moniuszko": {
      "title": "Галька",
      "credit": "Станислав Монюшко · опера",
      "video": "8uDkktZ69wo",
      "source": "https://www.youtube.com/watch?v=8uDkktZ69wo",
      "sourceName": "YouTube"
    },
    "oginski": {
      "audio": "recordings/oginski-polonez.ogg",
      "credit": "Полонез, традиционно приписываемый М. К. Огинскому · Sk444~commonswiki, электрический контрабас · CC BY-SA 3.0",
      "source": "https://commons.wikimedia.org/wiki/File:Polonezz.ogg",
      "sourceName": "Wikimedia Commons",
      "license": "https://creativecommons.org/licenses/by-sa/3.0/"
    }
  }
};
