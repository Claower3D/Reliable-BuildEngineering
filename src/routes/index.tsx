import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
  { name: "АО «ТНК «Казхром»", work: "Ремонт АБК, дренажная система, ремонт и освидетельствование баллонов" },
  { name: "АО «Марганец Жайрема»", work: "Ремонт здания АБК ДСК, кровли, фасадов, тепловых сетей, душевых" },
  { name: "АО «Шубарколь Комир»", work: "Ремонт фасадов, кровли, учебных классов, конвейерных эстакад" },
  { name: "АО «Алюминий Казахстана»", work: "Ремонт кровли ЦВТ, УСХ, АУП, ремонтных боксов и общежитий" },
  { name: "АО «ЕЭК»", work: "Капитальный ремонт фундамента рельсового пути БУПМ" },
  { name: "АО «Качары руда»", work: "Монтаж системы воздухообдува стрелочных переводов" },
  { name: "ТОО «Таразский металлургический завод»", work: "Экспертиза руднотермических электропечей №3 и №4, освидетельствование ГПМ" },
  { name: "ТОО «Nova Цинк»", work: "Техническое обследование строительных конструкций КК и СД" },
  { name: "ТОО «ТОМС Индастриал»", work: "Экспертиза промышленной безопасности технологического оборудования" },
  { name: "ТОО «АРКАДА ИНДАСТРИ»", work: "Экспертиза промышленной безопасности оборудования" },
  { name: "ТОО «Топаз 2050»", work: "Экспертиза ПБ промышленного оборудования и автокранов" },
  { name: "ТОО «Kaz Prom Expert»", work: "Экспертиза ПБ ГПМ, спецтехники и оборудования под давлением" },
  { name: "ТОО «Project Technology»", work: "Комплекс инженерно-геологических и геодезических изысканий" },
  { name: "ТОО «GeoLaser»", work: "Инженерно-геологические и инженерно-геодезические работы" },
  { name: "ТОО «Баймен»", work: "Разработка технических паспортов на краны-манипуляторы" },
  { name: "ТОО «Шахтинсктеплоэнерго»", work: "Капитальный ремонт четырехскатной кровли здания АБК" },
  { name: "ТОО «Карагандинский фармкомплекс»", work: "Разработка плана перспективной застройки территории" },
  { name: "ХБК «Аксай»", work: "Строительно-монтажные работы на объектах комбината" },
  { name: "ГКП «Карагандинский зоопарк»", work: "Подготовка и планирование земельного участка под строительство" },
  { name: "ОСИ «8-37 Актау»", work: "Реконструкция кровли многоквартирных панельных домов" }
];

const stats = [
  { k: "с 2010", v: "Опыт на рынке" },
  { k: "II категория", v: "Строительно-монтажные работы" },
  { k: "25+", v: "Крупных заказчиков" },
  { k: "100%", v: "Соблюдение стандартов ПБ и ГАСК" },
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

function Index() {
  const [activeCompany, setActiveCompany] = useState<"reliable" | "buildEngineering">("buildEngineering");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <img src={logoImg} alt="Reliable & BuildEngineering Logo" className="w-8 h-8 object-contain" />
            <div className="leading-tight">
              <div className="font-display text-base tracking-tight flex items-center gap-1.5">
                <span>Build Engineering</span>
                <span className="text-primary font-light">Group</span>
              </div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition">О нас</a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition">Услуги</a>
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
      <section id="about" className="py-24 lg:py-36 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.3em] text-primary font-mono mb-6">
              / 01 — О компании
            </div>
            <h2 className="font-display text-4xl lg:text-6xl leading-[0.95] tracking-tight">
              Объединенные компетенции лидеров.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className="text-foreground text-xl">
              Мы объединили возможности ТОО «BuildEngineeringGroup» и ТОО «Reliable Company» для предоставления заказчикам комплексных инженерных решений.
            </p>
            <p>
              Компании расположены в одном офисе, обладают всеми государственными лицензиями (включая I категорию проектирования), свидетельством об аккредитации на тех. обследование зданий, современным приборным парком и квалифицированным штатом экспертов.
            </p>
            <div className="pt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4 border-t border-border">
              {[
                "Строительно-монтажные работы",
                "Инженерно-геологические и геодезические изыскания",
                "Экспертиза промышленной безопасности",
                "Лицензия на проектирование I категории",
                "Аккредитация на тех. обследование зданий",
                "Обучение и подготовка специалистов по ПБ",
              ].map((f) => (
                <div key={f} className="flex items-start gap-3 pt-4 text-sm text-foreground">
                  <span className="text-primary font-mono mt-1">✕</span>
                  {f}
                </div>
              ))}
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
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
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

      {/* CLIENTS */}
      <section id="clients" className="py-24 lg:py-36 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.3em] text-primary font-mono mb-6">
                / 03 — Реализованные проекты
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
                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
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
                / 04 — Свяжитесь с нами
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
