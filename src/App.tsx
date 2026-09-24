import React, { useState } from "react";
import "./App.css";

const company = {
  shortName: "НОРДСТРОЙ",
  legalName: "ООО «СК НОРДСТРОЙ»",
  phone: "+7 980 660-71-09",
  email: "nordstroi2022@mail.ru",
  address: "Ярославль, проспект Октября, зд. 56/2, офис 413",
  inn: "7606134615",
  ogrn: "1237600001760",
  director: "Круглов Денис Витальевич",
};

const images = {
  hero: `${import.meta.env.BASE_URL}images/hero-fast.jpg`,
  steel:
    "https://images.pexels.com/photos/8377792/pexels-photo-8377792.jpeg?cs=srgb&dl=pexels-goldcircuits-8377792.jpg&fm=jpg",
  workers:
    "https://images.pexels.com/photos/11580364/pexels-photo-11580364.jpeg?cs=srgb&dl=pexels-tkirkgoz-11580364.jpg&fm=jpg",
};

const services = [
  [
    "01",
    "Инженерные сети",
    "Внутренние и наружные сети водоснабжения, канализации, отопления и технологических трубопроводов.",
  ],
  [
    "02",
    "Технологический монтаж",
    "Монтаж котельного и технологического оборудования в составе строительных и инженерных работ.",
  ],
  [
    "03",
    "Сварочные работы",
    "Сварка для инженерных систем, трубопроводов и металлоконструкций.",
  ],
  [
    "04",
    "Металлоконструкции",
    "Изготовление и монтаж металлических конструкций для строительных и промышленных задач.",
  ],
];

const audiences = [
  [
    "Генподрядчикам",
    "Подключаемся к отдельному разделу работ и соблюдаем согласованный график.",
  ],
  [
    "Промышленным предприятиям",
    "Берём инженерные и монтажные задачи на действующих и новых объектах.",
  ],
  [
    "Застройщикам",
    "Закрываем отдельные строительные и инженерные работы в составе проекта.",
  ],
  [
    "Техническим заказчикам",
    "Работаем по ТЗ, чертежам, ведомостям и исходным данным заказчика.",
  ],
];

const steps = [
  [
    "01",
    "Получаем ТЗ",
    "Изучаем чертежи, ведомости, объём и условия работы на объекте.",
  ],
  [
    "02",
    "Считаем",
    "Уточняем состав работ, материалы, сроки и готовим предложение.",
  ],
  [
    "03",
    "Выполняем",
    "Организуем производство, монтаж и контроль работ на объекте.",
  ],
  [
    "04",
    "Сдаём",
    "Передаём результат и необходимую исполнительную документацию по договорённости.",
  ],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const task = String(data.get("task") || "").trim();

    if (!name || !phone || !task) return;

    const subject = encodeURIComponent(`Заявка с сайта — ${name}`);
    const body = encodeURIComponent(
      `Имя: ${name}\nТелефон: ${phone}\nКомпания: ${data.get("company") || ""}\nEmail: ${data.get("email") || ""}\nГород: ${data.get("city") || ""}\n\nЗадача:\n${task}`,
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="site">
      <header className="header">
        <a
          className="logo"
          href="#top"
          onClick={closeMenu}
          aria-label="Нордстрой — на главную"
        >
          <span className="logo-n">N</span>
          <span className="logo-text">
            <b>НОРДСТРОЙ</b>
            <small>строительно-монтажная компания</small>
          </span>
        </a>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#services" onClick={closeMenu}>
            Услуги
          </a>
          <a href="#projects" onClick={closeMenu}>
            Проекты
          </a>
          <a href="#about" onClick={closeMenu}>
            О компании
          </a>
          <a href="#contacts" onClick={closeMenu}>
            Контакты
          </a>
        </nav>

        <div className="header-right">
          <a className="header-phone" href="tel:+79806607109">
            {company.phone}
          </a>
          <a className="header-button" href="#contacts">
            Отправить ТЗ <span>↗</span>
          </a>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <i></i>
          <i></i>
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <img
            className="hero-photo"
            src={images.hero}
            alt="Промышленное строительное сооружение"
          />
          <div className="hero-shade"></div>
          <div className="hero-inner">
            <div className="hero-kicker">
              <span></span> СТРОИТЕЛЬНО-МОНТАЖНЫЕ РАБОТЫ
            </div>
            <h1>
              Инженерные системы
              <br />и монтаж <em>для объекта</em>
            </h1>
            <p className="hero-description">
              Инженерные сети, технологический монтаж, сварочные работы и
              металлоконструкции. Работаем по техническому заданию и исходным
              данным заказчика.
            </p>
            <div className="hero-actions">
              <a className="btn btn-accent" href="#contacts">
                Отправить ТЗ <span>↗</span>
              </a>
              <a className="hero-link" href="#services">
                Посмотреть услуги <span>↓</span>
              </a>
            </div>
          </div>
          <div className="hero-bottom">
            <span>ЯРОСЛАВЛЬ · САНКТ-ПЕТЕРБУРГ</span>
            <span>ООО «СК НОРДСТРОЙ»</span>
            <span>С 2023 ГОДА</span>
          </div>
        </section>

        <section className="trust-strip">
          <div>
            <b>2023</b>
            <span>год регистрации</span>
          </div>
          <div>
            <b>41.20</b>
            <span>основной ОКВЭД</span>
          </div>
          <div>
            <b>4</b>
            <span>ключевых направления</span>
          </div>
          <div>
            <b>2</b>
            <span>города в открытых данных</span>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section-top">
            <div>
              <div className="eyebrow">
                <span></span> КОМПЕТЕНЦИИ
              </div>
              <h2>
                Работы, которые
                <br />
                <em>закрываем</em>
              </h2>
            </div>
            <p>
              Основные направления сформированы по открытым данным о профиле
              компании. Конкретный состав работ определяем после получения ТЗ.
            </p>
          </div>

          <div className="service-list">
            {services.map(([num, title, text]) => (
              <article className="service-row" key={num}>
                <span className="service-num">{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#contacts" aria-label={`Обсудить ${title}`}>
                  ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="audience">
          <div className="section">
            <div className="eyebrow light">
              <span></span> ДЛЯ КОГО
            </div>
            <div className="audience-head">
              <h2>
                Подключаемся
                <br />
                <em>к задачам бизнеса</em>
              </h2>
              <p>
                Не обещаем то, чего не проверили. Сначала изучаем исходные
                данные — затем определяем объём и формат участия.
              </p>
            </div>
            <div className="audience-grid">
              {audiences.map(([title, text], index) => (
                <div className="audience-card" key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="section-top">
            <div>
              <div className="eyebrow">
                <span></span> ПРОЕКТЫ
              </div>
              <h2>
                Показываем
                <br />
                <em>подход к работе</em>
              </h2>
            </div>

            <p>
              Инженерные системы, монтаж и строительные работы — в центре
              внимания точность, организация и качество исполнения.
            </p>
          </div>

          <div className="project-grid">
            <article className="project-main">
              <img
                src={images.steel}
                alt="Металлоконструкции внутри промышленного здания"
                loading="lazy"
              />
              <div>
                <small>ИНЖЕНЕРНЫЕ И СТРОИТЕЛЬНЫЕ РАБОТЫ</small>
                <h3>
                  Металлоконструкции
                  <br />и монтаж
                </h3>
              </div>
            </article>

            <div className="project-side">
              <article>
                <img
                  src={images.workers}
                  alt="Работы на строительном объекте"
                  loading="lazy"
                />
                <div>
                  <small>ОРГАНИЗАЦИЯ РАБОТ</small>
                  <h3>
                    Монтаж и<br />
                    строительные работы
                  </h3>
                </div>
              </article>

              <div className="project-note">
                <small>КОМПЕТЕНЦИИ</small>
                <strong>
                  От инженерных систем
                  <br />
                  до комплексного монтажа
                </strong>
                <p>
                  Работаем с техническими решениями, инженерными сетями,
                  технологическими трубопроводами и металлоконструкциями.
                </p>
                <a href="#services">
                  Смотреть услуги <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="section about-grid">
            <div className="about-intro">
              <div className="eyebrow">
                <span></span> О КОМПАНИИ
              </div>
              <h2>
                Строительно-
                <br />
                <em>монтажная компания</em>
              </h2>
              <p className="lead">
                ООО «СК НОРДСТРОЙ» зарегистрировано 7 февраля 2023 года.
                Юридический адрес компании — Ярославль.
              </p>
              <p>
                В открытых данных также отражён филиал в Санкт-Петербурге.
                Профиль компании включает строительство, инженерные и монтажные
                работы, сварку и металлоконструкции.
              </p>
            </div>
            <div className="company-card">
              <div>
                <small>ЮРИДИЧЕСКОЕ ЛИЦО</small>
                <b>{company.legalName}</b>
              </div>
              <div>
                <small>ИНН / ОГРН</small>
                <b>
                  {company.inn} / {company.ogrn}
                </b>
              </div>
              <div>
                <small>РУКОВОДИТЕЛЬ</small>
                <b>{company.director}</b>
              </div>
              <div>
                <small>ЮРИДИЧЕСКИЙ АДРЕС</small>
                <b>{company.address}</b>
              </div>
              <div>
                <small>ФИЛИАЛ</small>
                <b>
                  Санкт-Петербург, пр-кт Кондратьевский, д. 72, литера А, помещ.
                  11ЛК, офис 301/13
                </b>
              </div>
            </div>
          </div>
        </section>

        <section className="process">
          <div className="section">
            <div className="section-top">
              <div>
                <div className="eyebrow">
                  <span></span> ПРОЦЕСС
                </div>
                <h2>
                  От ТЗ
                  <br />
                  <em>до сдачи</em>
                </h2>
              </div>
              <p>
                Понятный порядок работы без лишних обещаний: сначала данные и
                расчёт, потом договорённости и выполнение.
              </p>
            </div>
            <div className="steps">
              {steps.map(([num, title, text]) => (
                <div className="step" key={num}>
                  <span>{num}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contacts" id="contacts">
          <div className="section contact-grid">
            <div className="contact-info">
              <div className="eyebrow light">
                <span></span> НОВЫЙ ПРОЕКТ
              </div>
              <h2>
                Есть ТЗ?
                <br />
                <em>Присылайте.</em>
              </h2>
              <p>
                Для предметного разговора лучше всего отправить техническое
                задание, чертежи или краткое описание объекта.
              </p>
              <div className="contact-links">
                <a href="tel:+79806607109">
                  <small>ТЕЛЕФОН</small>
                  <b>{company.phone}</b>
                </a>
                <a href={`mailto:${company.email}`}>
                  <small>EMAIL</small>
                  <b>{company.email}</b>
                </a>
                <div>
                  <small>ЮРИДИЧЕСКИЙ АДРЕС</small>
                  <b>{company.address}</b>
                </div>
                <div>
                  <small>ФИЛИАЛ</small>
                  <b>
                    Санкт-Петербург, пр-кт Кондратьевский, д. 72, литера А,
                    помещ. 11ЛК, офис 301/13
                  </b>
                </div>
              </div>
            </div>

            <form className="lead-form" onSubmit={submit}>
              <div className="form-title">Запросить расчёт</div>
              <div className="form-grid">
                <label>
                  Имя *<input name="name" required placeholder="Ваше имя" />
                </label>
                <label>
                  Телефон *
                  <input name="phone" required placeholder="+7 ___ ___-__-__" />
                </label>
                <label>
                  Компания
                  <input name="company" placeholder="Название компании" />
                </label>
                <label>
                  Email
                  <input
                    name="email"
                    type="email"
                    placeholder="name@company.ru"
                  />
                </label>
                <label>
                  Город
                  <input name="city" placeholder="Город объекта" />
                </label>
                <label className="full">
                  Задача *
                  <textarea
                    name="task"
                    required
                    placeholder="Что нужно выполнить?"
                  ></textarea>
                </label>
              </div>
              <div className="form-bottom">
                <small>
                  Сейчас форма формирует письмо. Для production подключите
                  API/CRM и загрузку файлов.
                </small>
                <button className="btn btn-accent" type="submit">
                  Отправить заявку <span>↗</span>
                </button>
              </div>
              {sent && (
                <div className="success">
                  Письмо подготовлено. Если почтовый клиент не открылся —
                  позвоните нам напрямую.
                </div>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <span className="logo-n">N</span>
          <b>НОРДСТРОЙ</b>
        </div>
        <div>
          ООО «СК НОРДСТРОЙ» · ИНН {company.inn} · Ярославль / Санкт-Петербург
        </div>
        <a href="#top">Наверх ↑</a>
      </footer>

      <div className="mobile-cta">
        <a href={`tel:+79806607109`}>Позвонить</a>
        <a href="#contacts">Отправить ТЗ</a>
      </div>
    </div>
  );
}

export default App;
