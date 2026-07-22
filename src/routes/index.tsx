import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import heroImg from "@/assets/hero-industrial.jpg";
import surveyImg from "@/assets/survey.jpg";
import inspectionImg from "@/assets/inspection.jpg";
import trainingImg from "@/assets/training.jpg";
import designImg from "@/assets/design.png";
import constructionImg from "@/assets/construction.png";
import inspectionBuildingImg from "@/assets/inspection-building.png";
import logoImg from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  {
    n: "01",
    title: "Строительно-монтажные работы (II категория)",
    img: constructionImg,
    items: [
      "Строительство, реконструкция и капитальный ремонт зданий",
      "Монтаж несущих строительных и металлоконструкций",
      "Кровельные и фасадные работы любой сложности",
      "Устройство оснований, фундаментов и буровые работы",
    ],
  },
  {
    n: "02",
    title: "Инженерные изыскания",
    img: surveyImg,
    items: [
      "Инженерно-геологические изыскания",
      "Инженерно-геодезические и топографические работы",
      "Инженерно-гидрогеологические изыскания",
      "Инженерно-геофизические исследования",
    ],
  },
  {
    n: "03",
    title: "Промышленная безопасность",
    img: inspectionImg,
    items: [
      "Экспертиза опасных производственных объектов",
      "Экспертиза технических устройств (в т.ч. грузоподъемных и сосудов)",
      "Экспертиза технологий и технической документации",
      "Наружный и внутренний осмотр, гидравлические испытания сосудов",
    ],
  },
  {
    n: "04",
    title: "Проектирование (I категория)",
    img: designImg,
    items: [
      "Проектирование технологической части проектов",
      "Проектирование инженерных систем (электроснабжение, отопление, вентиляция)",
      "Архитектурное и строительное проектирование",
      "Разработка генпланов и перспективной застройки",
    ],
  },
  {
    n: "05",
    title: "Техническое обследование зданий",
    img: inspectionBuildingImg,
    items: [
      "Обследование надежности и устойчивости зданий и сооружений",
      "Экспертные работы на сложных объектах I и II уровней ответственности",
      "Комплексная оценка строительных конструкций и фундаментов",
      "Выявление дефектов и разработка рекомендаций по эксплуатации",
    ],
  },
  {
    n: "06",
    title: "Подготовка специалистов",
    img: trainingImg,
    items: [
      "Подготовка и переподготовка ИТР и рабочих",
      "Повышение квалификации в области промышленной безопасности",
      "Аттестация персонала по правилам ПБ",
      "Разработка индивидуальных программ под специфику предприятия",
    ],
  },
];

const clients = [
  { name: "АО «ТНК «Казхром»", work: "Ремонт АБК, дренажная система, ремонт и освидетельствование баллонов", logo: "/ERG.png" },
  { name: "АО «Марганец Жайрема»", work: "Ремонт здания АБК ДСК, кровли, фасадов, тепловых сетей, душевых", logo: "/ERG.png" },
  { name: "АО «Шубарколь Комир»", work: "Ремонт фасадов, кровли, учебных классов, конвейерных эстакад", logo: "/ERG.png" },
  { name: "АО «Алюминий Казахстана»", work: "Ремонт кровли ЦВТ, УСХ, АУП, ремонтных боксов и общежитий", logo: "/ERG.png" },
  { name: "АО «ЕЭК»", work: "Капитальный ремонт фундамента рельсового пути БУПМ", logo: "/ERG.png" },
  { name: "АО «Качары руда»", work: "Монтаж системы воздухообдува стрелочных переводов", logo: "/ERG.png" },
  { name: "ТОО «Таразский металлургический завод»", work: "Экспертиза руднотермических электропечей №3 и №4, освидетельствование ГПМ", logo: "/logos/tmz.svg" },
  { name: "ТОО «Nova Цинк»", work: "Техническое обследование строительных конструкций КК и СД", logo: "/logos/novazinc.svg" },
  { name: "ТОО «ТОМС Индастриал»", work: "Экспертиза промышленной безопасности технологического оборудования", logo: "/logos/toms.svg" },
  { name: "ТОО «АРКАДА ИНДАСТРИ»", work: "Экспертиза промышленной безопасности оборудования", logo: "/logos/arcada.svg" },
  { name: "ТОО «Топаз 2050»", work: "Экспертиза ПБ промышленного оборудования и автокранов", logo: "/logos/topaz.svg" },
  { name: "ТОО «Kaz Prom Expert»", work: "Экспертиза ПБ ГПМ, спецтехники и оборудования под давлением", logo: "/logos/kazprom.svg" },
  { name: "ТОО «Project Technology»", work: "Комплекс инженерно-геологических и геодезических изысканий", logo: "/logos/projtech.svg" },
  { name: "ТОО «GeoLaser»", work: "Инженерно-геологические и инженерно-геодезические работы", logo: "/logos/geolaser.svg" },
  { name: "ТОО «Баймен»", work: "Разработка технических паспортов на краны-манипуляторы", logo: "/logos/baimen.svg" },
  { name: "ТОО «Шахтинсктеплоэнерго»", work: "Капитальный ремонт четырехскатной кровли здания АБК", logo: "/logos/shakhtinsk.svg" },
  { name: "ТОО «Карагандинский фармкомплекс»", work: "Разработка плана перспективной застройки территории", logo: "https://static.tildacdn.pro/tild3863-6634-4030-b530-373565316164/__-_.png" },
  { name: "ХБК «Аксай»", work: "Строительно-монтажные работы на объектах комбината", logo: "/logos/aksai.svg" },
  { name: "ГКП «Карагандинский зоопарк»", work: "Подготовка и планирование земельного участка под строительство", logo: "/logos/zoo.svg" },
  { name: "ОСИ «8-37 Актау»", work: "Реконструкция кровли многоквартирных панельных домов", logo: "/logos/osi.svg" }
];

const stats = [
  { k: "с 2010", v: "Опыт на рынке" },
  { k: "II категория", v: "Строительно-монтажные работы" },
  { k: "25+", v: "Крупных заказчиков" },
  { k: "100%", v: "Строгое соблюдение СНиП и ГОСТ" },
];

const companyRequisites = {
  reliable: {
    title: "ТОО «Reliable Company»",
    details: [
      ["Наименование", "ТОО «Reliable Company»"],
      ["БИН", "190 140 026 975"],
      ["Директор", "Фукс Надежда Сергеевна"],
      ["Юр. адрес", "г. Караганда, мкр. Степной-3, д. 10/1"],
      ["ИИК", "KZ69 8562 2031 0588 3642"],
      ["Банк", "КФ АО «Банк ЦентрКредит»"],
      ["БИК", "KCJBKZKX"],
      ["Телефон", "+7 (778) 944 52 60"],
      ["E-mail", "reliable19com@mail.com"],
      ["Лицензия ПБ", "Гос. разрешение на экспертизу ПБ (МЧС РК)"],
      ["Изыскания", "Гос. лицензия №20009604"],
    ]
  },
  buildEngineering: {
    title: "ТОО «BuildEngineeringGroup»",
    details: [
      ["Наименование", "ТОО «BuildEngineeringGroup»"],
      ["БИН", "070 940 023 915"],
      ["Директор", "Букенов Нурлан Махатович"],
      ["Юр. адрес", "РК, г. Караганда, ул. Московская, стр. 4, оф. 30"],
      ["ИИК", "KZ24 8562 2031 1531 0136"],
      ["Банк", "АО «Банк ЦентрКредит»"],
      ["БИК", "KCJBKZKX"],
      ["Телефон", "+7 (705) 916 46 31"],
      ["E-mail", "begroup22@mail.ru"],
      ["НДС", "Плательщик НДС"],
      ["СМР", "Лицензия №22002428 (II категория)"],
      ["Проектирование", "Лицензия №22002430 (I категория)"],
      ["Аккредитация", "Свидетельство №KZ17VWC00272180 (обследование зданий)"],
    ]
  }
};

const videosList = [
  {
    id: "reel-buildengineering",
    title: "Строительно-монтажные работы",
    category: "СМР Караганда | Астана",
    author: "@buildengineeringgroup",
    url: "https://www.instagram.com/reel/C8wMTVtqlzR/",
    embedHtml: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/C8wMTVtqlzR/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/C8wMTVtqlzR/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Посмотреть эту публикацию в Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/C8wMTVtqlzR/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Публикация от СТРОИТЕЛЬНО-МОНТАЖНЫЕ РАБОТЫ КАРАГАНДА |АСТАНА (@buildengineeringgroup)</a></p></div></blockquote>`,
  },
  {
    id: "reel-bukenov-1",
    title: "Инженерный контроль & Аудит",
    category: "Промбезопасность & Экспертиза",
    author: "@nbukenov1",
    url: "https://www.instagram.com/reel/DI8r6JltaVZ/",
    embedHtml: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DI8r6JltaVZ/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DI8r6JltaVZ/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 523.338,73.347 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Посмотреть эту публикацию в Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DI8r6JltaVZ/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Публикация от Нурлан Букенов (@nbukenov1)</a></p></div> catalog</blockquote>`,
  },
  {
    id: "reel-bukenov-2",
    title: "Техническое обследование конструкций",
    category: "Обследование зданий",
    author: "@nbukenov1",
    url: "https://www.instagram.com/reel/C4ATRdbthxN/",
    embedHtml: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/C4ATRdbthxN/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/C4ATRdbthxN/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,30.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Посмотреть эту публикацию в Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/C4ATRdbthxN/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Публикация от Нурлан Букенов (@nbukenov1)</a></p></div></blockquote>`,
  },
  {
    id: "local-video-work",
    title: "Производственный процесс на объекте",
    category: "Видеоотчет компании",
    author: "Build Engineering Group",
    src: "/videos/work_process.mp4",
  }
];

function Index() {
  const [activeCompany, setActiveCompany] = useState<"reliable" | "buildEngineering">("buildEngineering");

  useEffect(() => {
    const processEmbeds = () => {
      if ((window as any).instgrm?.Embeds?.process) {
        (window as any).instgrm.Embeds.process();
      }
    };

    if (!(window as any).instgrm) {
      const s = document.createElement("script");
      s.async = true;
      s.src = "//www.instagram.com/embed.js";
      s.onload = () => setTimeout(processEmbeds, 200);
      document.body.appendChild(s);
    } else {
      setTimeout(processEmbeds, 100);
      setTimeout(processEmbeds, 600);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/60">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-24 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-5 group">
            <img src={logoImg} alt="Build Engineering Group Logo" className="h-16 md:h-20 lg:h-24 w-auto object-contain scale-125 origin-center transition-transform group-hover:scale-135" />
            <div className="leading-tight">
              <div className="font-display text-xl md:text-2xl tracking-tight flex items-center gap-2">
                <span>Build Engineering</span>
                <span className="text-primary font-light">Group</span>
              </div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition">О нас</a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition">Услуги</a>
            <a href="#videos" className="text-muted-foreground hover:text-foreground transition">Видео</a>
            <a href="#clients" className="text-muted-foreground hover:text-foreground transition">Заказчики</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition">Контакты</a>
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] border border-primary/60 text-primary px-4 py-2 hover:bg-primary hover:text-primary-foreground transition"
          >
            Обсудить проект →
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <img
          src={heroImg}
          alt="Промышленный объект Республики Казахстан"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/30" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-32 pb-16 lg:pb-24 w-full">
          <div className="flex items-center gap-3 mb-8 text-xs uppercase tracking-[0.3em] text-primary font-mono">
            <span className="w-8 h-px bg-primary" />
            Караганда · Республика Казахстан · с 2010
          </div>

          <h1 className="font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.9] tracking-[-0.02em] max-w-[20ch]">
            Инженерная <em className="italic text-primary font-light">точность</em> и строительная надежность.
          </h1>

          <div className="mt-10 lg:mt-14 grid md:grid-cols-3 gap-10 items-end">
            <p className="md:col-span-2 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              ТОО «BuildEngineeringGroup» и ТОО «Reliable Company» — стратегический союз,
              выполняющий полный цикл строительно-монтажных работ, изысканий,
              экспертизы промышленной безопасности и проектирования для предприятий Казахстана.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="#services"
                className="inline-flex items-center justify-between gap-2 bg-primary text-primary-foreground px-6 py-4 uppercase tracking-[0.2em] text-xs font-medium hover:bg-primary/90 transition"
              >
                Наши услуги
                <span>→</span>
              </a>
              <a
                href="/presentation.pdf"
                target="_blank"
                className="inline-flex items-center justify-between gap-2 border border-primary text-primary px-6 py-4 uppercase tracking-[0.2em] text-xs font-medium hover:bg-primary/10 transition"
              >
                Скачать презентацию
                <span>↓</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-between gap-2 border border-border px-6 py-4 uppercase tracking-[0.2em] text-xs text-muted-foreground hover:text-foreground hover:border-foreground transition"
              >
                Связаться
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Ticker of specs bottom */}
        <div className="relative border-t border-border/60 bg-background/60 backdrop-blur">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5 flex flex-wrap items-center justify-between gap-6 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
            <span>◉ Лицензии: №20009604, №22002430 (I кат.), №22002428</span>
            <span className="hidden md:inline">◉ Аккредитация №KZ17VWC00272180</span>
            <span>◉ БИН: 190140026975 / 070940023915</span>
            <span className="hidden md:inline">◉ Комитет ПБ МЧС РК / ГАСК</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.v}
              className={`py-10 lg:py-14 ${i !== 0 ? "lg:border-l border-border" : ""} ${i % 2 !== 0 ? "border-l" : ""} ${i >= 2 ? "border-t lg:border-t-0" : ""}`}
            >
              <div className="font-display text-4xl lg:text-5xl tracking-tight text-primary">{s.k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 lg:py-36 border-b border-border overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side: Text and List */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-primary font-mono mb-6">
                  / 01 — О компании
                </div>
                <h2 className="font-display text-4xl lg:text-6xl leading-[0.95] tracking-tight max-w-[18ch]">
                  Объединенные компетенции лидеров.
                </h2>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground max-w-2xl">
                <p className="text-foreground text-xl">
                  Мы объединили возможности ТОО «BuildEngineeringGroup» и ТОО «Reliable Company» для предоставления заказчикам комплексных инженерных решений.
                </p>
                <p>
                  Компании расположены в одном офисе, обладают всеми государственными лицензиями (включая II категорию строительно-монтажных работ и I категорию проектирования), свидетельством об аккредитации на тех. обследование зданий, современным приборным парком и квалифицированным штатом специалистов.
                </p>
              </div>

              <div className="pt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4 border-t border-border/80">
                {[
                  { title: "Строительно-монтажные работы", badge: "II категория" },
                  { title: "Лицензия на проектирование", badge: "I категория" },
                  { title: "Аккредитация на тех. обследование зданий" },
                  { title: "Экспертиза промышленной безопасности" },
                  { title: "Инженерно-геологические и геодезические изыскания" },
                  { title: "Обучение и подготовка специалистов по ПБ" },
                ].map((f) => (
                  <div key={f.title} className="flex items-start gap-4 pt-6 text-foreground">
                    <span className="text-primary font-mono mt-1 text-xl">✕</span>
                    <div className="leading-snug flex flex-col items-start gap-2.5">
                      <span className="font-semibold text-[17px] md:text-lg">{f.title}</span>
                      {f.badge && (
                        <span className="inline-flex items-center rounded-sm bg-primary/10 px-3 py-1.5 text-xs font-mono font-bold text-primary uppercase tracking-[0.2em] border border-primary/30 shadow-sm">
                          {f.badge}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Instagram Embed */}
            <div className="lg:col-span-4 lg:col-start-9 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[340px] rounded-2xl overflow-hidden border border-border/60 shadow-2xl bg-card p-2 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
                <div className="bg-white rounded-xl overflow-hidden relative z-10 w-full flex items-center justify-center">
                  <div className="w-full scale-[1.01] transform origin-top -mt-0.5 -mb-2">
                    <div dangerouslySetInnerHTML={{ __html: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/C4ATRdbthxN/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/C4ATRdbthxN/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Посмотреть эту публикацию в Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/C4ATRdbthxN/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Публикация от Нурлан Букенов (@nbukenov1)</a></p></div></blockquote>` }} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 lg:py-36 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 lg:mb-24">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary font-mono mb-6">
                / 02 — Направления деятельности
              </div>
              <h2 className="font-display text-4xl lg:text-6xl leading-[0.95] tracking-tight max-w-[16ch]">
                Комплексный спектр услуг.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              От выполнения СМР и геодезических изысканий до обеспечения промышленной безопасности, разработки проектов любой сложности и технического аудита зданий.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((s) => (
              <article
                key={s.n}
                className="bg-background p-8 lg:p-10 flex flex-col gap-6 group hover:bg-card transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-primary tracking-[0.2em]">{s.n}</span>
                  <span className="w-8 h-px bg-border group-hover:bg-primary transition" />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={s.img}
                    alt={s.title}
                    width={1280}
                    height={1280}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
                <h3 className="font-display text-2xl lg:text-3xl leading-tight">{s.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground flex-grow">
                  {s.items.map((i) => (
                    <li key={i} className="flex gap-3 border-t border-border pt-3">
                      <span className="text-primary font-mono">→</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section id="videos" className="py-24 lg:py-36 border-b border-border bg-card/20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 lg:mb-20">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary font-mono mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                / 03 — Видео с объектов
              </div>
              <h2 className="font-display text-4xl lg:text-6xl leading-[0.95] tracking-tight max-w-[18ch]">
                Наши работы в движении.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Видеоотчеты с площадок проведения строительно-монтажных работ, технического обследования зданий, геодезических изысканий и испытаний.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start">
            {videosList.map((v) => (
              <div
                key={v.id}
                className="bg-card border border-border/80 rounded-2xl overflow-hidden shadow-xl hover:border-primary/50 transition-all flex flex-col h-full"
              >
                {/* Header tag */}
                <div className="p-4 border-b border-border/60 bg-background/50 flex items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-primary">
                      {v.category}
                    </span>
                    <span className="text-xs font-semibold text-foreground tracking-tight mt-0.5">
                      {v.title}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground bg-muted/60 px-2 py-0.5 rounded shrink-0">
                    {v.author}
                  </span>
                </div>

                {/* Body: Embed or Video */}
                <div className="p-2 bg-white/95 text-slate-900 flex-grow flex items-center justify-center min-h-[420px]">
                  {v.embedHtml ? (
                    <div
                      className="w-full flex justify-center scale-[0.98]"
                      dangerouslySetInnerHTML={{ __html: v.embedHtml }}
                    />
                  ) : (
                    <div className="w-full h-full min-h-[380px] bg-black rounded-lg overflow-hidden flex flex-col justify-center">
                      <video
                        src={v.src}
                        controls
                        playsInline
                        className="w-full h-full max-h-[440px] object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Footer link if instagram */}
                {v.url && (
                  <div className="p-3 border-t border-border/60 bg-background/80 flex items-center justify-between text-xs">
                    <span className="text-muted-foreground font-mono text-[11px]">Instagram Reel</span>
                    <a
                      href={v.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium inline-flex items-center gap-1"
                    >
                      Открыть в IG ↗
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="py-24 lg:py-36 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.3em] text-primary font-mono mb-6">
                / 04 — Реализованные проекты
              </div>
              <h2 className="font-display text-4xl lg:text-6xl leading-[0.95] tracking-tight">
                Нам доверяют лидеры отрасли.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 text-muted-foreground text-lg leading-relaxed">
              Наш референс-лист включает успешно реализованные работы по техническому обследованию конструкций, капитальному ремонту зданий и эстакад, изысканиям и промышленной экспертизе для крупнейших металлургических и горнодобывающих холдингов Казахстана.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border">
            {clients.map((c, i) => (
              <div
                key={c.name}
                className="bg-background p-6 flex flex-col justify-between hover:bg-card transition min-h-[160px]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {c.logo ? (
                      <img src={c.logo} alt="Client Logo" className="h-7 w-auto object-contain transition-transform group-hover:scale-105" />
                    ) : (
                      <span className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                    )}
                  </div>
                  <div className="font-display text-lg leading-snug text-foreground">{c.name}</div>
                </div>
                <div className="mt-4 text-xs text-muted-foreground leading-normal border-t border-border/40 pt-3">
                  {c.work}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 lg:py-36 relative overflow-hidden">
        <div className="absolute -top-24 right-0 font-display text-[20vw] leading-none text-primary/5 select-none pointer-events-none">
          Build Engineering Group
        </div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <div className="text-xs uppercase tracking-[0.3em] text-primary font-mono mb-6">
                / 05 — Свяжитесь с нами
              </div>
              <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] tracking-tight">
                Готовы обсудить <em className="italic text-primary font-light">ваш проект</em>.
              </h2>
              <p className="mt-8 text-lg text-muted-foreground max-w-lg">
                Свяжитесь с нашими специалистами для расчета стоимости работ или отправки технического задания.
              </p>

              <div className="mt-12 flex flex-col gap-4">
                <div className="border-t border-border py-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Контакты компаний</div>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-primary font-mono">ТОО «BuildEngineeringGroup»</div>
                      <a href="tel:+77059164631" className="block group">
                        <div className="text-xs text-muted-foreground mb-1">Телефон</div>
                        <div className="font-display text-2xl group-hover:text-primary transition">+7 (705) 916 46 31</div>
                      </a>
                      <a href="mailto:begroup22@mail.ru" className="block group">
                        <div className="text-xs text-muted-foreground mb-1">E-mail</div>
                        <div className="font-display text-lg group-hover:text-primary transition break-all">begroup22@mail.ru</div>
                      </a>
                    </div>
                    <div className="space-y-4">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-primary font-mono">ТОО «Reliable Company»</div>
                      <a href="tel:+77789445260" className="block group">
                        <div className="text-xs text-muted-foreground mb-1">Телефон</div>
                        <div className="font-display text-2xl group-hover:text-primary transition">+7 (778) 944 52 60</div>
                      </a>
                      <a href="mailto:reliable19com@mail.com" className="block group">
                        <div className="text-xs text-muted-foreground mb-1">E-mail</div>
                        <div className="font-display text-lg group-hover:text-primary transition break-all">reliable19com@mail.com</div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border py-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Написать в WhatsApp</div>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://wa.me/77059164631" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-card border border-border px-5 py-3 hover:border-primary hover:text-primary transition"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                      </svg>
                      <span className="font-display text-lg tracking-wide">+7 (705) 916 46 31</span>
                    </a>
                    <a 
                      href="https://wa.me/77021209019" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-card border border-border px-5 py-3 hover:border-primary hover:text-primary transition"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                      </svg>
                      <span className="font-display text-lg tracking-wide">+7 (702) 120 90 19</span>
                    </a>
                  </div>
                </div>

                <div className="border-t border-b border-border py-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Адрес офиса</div>
                  <div className="font-display text-2xl leading-tight">
                    г. Караганда, ул. Московская, 4, оф. 30<br />
                    <span className="text-muted-foreground text-lg">ТОО «Reliable Company»: мкр. Степной-3, д. 10/1</span>
                  </div>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-5 lg:col-start-8 bg-card p-8 lg:p-10 border border-border h-fit">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-4 mb-6 gap-3">
                <div className="text-xs uppercase tracking-[0.3em] text-primary font-mono">Реквизиты</div>
                <div className="flex bg-background border border-border p-0.5 rounded text-[10px] uppercase tracking-wider font-mono">
                  <button
                    onClick={() => setActiveCompany("buildEngineering")}
                    className={`px-3 py-1.5 transition ${activeCompany === "buildEngineering" ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    BuildEngineering
                  </button>
                  <button
                    onClick={() => setActiveCompany("reliable")}
                    className={`px-3 py-1.5 transition ${activeCompany === "reliable" ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    Reliable
                  </button>
                </div>
              </div>

              <dl className="space-y-4 text-sm">
                {companyRequisites[activeCompany].details.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-3 gap-4 border-b border-border/60 pb-3 last:border-b-0 last:pb-0">
                    <dt className="text-muted-foreground uppercase text-[9px] tracking-[0.15em] pt-0.5">{k}</dt>
                    <dd className="col-span-2 text-foreground font-mono break-words text-xs lg:text-sm">{v}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          <div>© {new Date().getFullYear()} Build Engineering Group · Reliable · Karaganda, KZ</div>
          <div>Строительство · Изыскания · Безопасность · Проектирование</div>
        </div>
      </footer>
    </div>
  );
}
