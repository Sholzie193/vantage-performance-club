import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Fingerprint,
  Gauge,
  Menu,
  Plane,
  Radar,
  X,
} from "lucide-react";
import "./styles.css";

const navItems = [
  { label: "Home", path: "#home" },
  { label: "System", path: "#/system" },
  { label: "Residencies", path: "#/residencies" },
  { label: "Fieldhouse", path: "#/fieldhouse" },
  { label: "Dispatch", path: "#/dispatch" },
  { label: "Apply", path: "#/apply" },
];

const heroSlides = [
  {
    label: "Midnight strength floor",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=2400&q=88",
  },
  {
    label: "Travel-proof conditioning",
    image:
      "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=2400&q=88",
  },
  {
    label: "Private recovery protocol",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=2400&q=88",
  },
];

const residencies = [
  {
    slug: "red-eye-reset",
    title: "Red-Eye Reset",
    eyebrow: "10 days",
    location: "Dubai / Singapore",
    image:
      "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=1400&q=86",
    copy: "A fast decompression block for founders landing after fundraising, launches, or three-city weeks.",
    stats: ["Sleep rebuild", "Mobility triage", "Low-friction meals"],
  },
  {
    slug: "operator-strength",
    title: "Operator Strength",
    eyebrow: "12 weeks",
    location: "Hybrid",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1400&q=86",
    copy: "A progressive strength cycle for executives who want visible capability without a public gym routine.",
    stats: ["Four lifts weekly", "Body comp target", "Board-week deloads"],
  },
  {
    slug: "nomad-continuity",
    title: "Nomad Continuity",
    eyebrow: "Ongoing",
    location: "Global",
    image:
      "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&w=1400&q=86",
    copy: "A travel operating system for founders moving between hotels, apartments, and unfamiliar equipment.",
    stats: ["Hotel translations", "City maps", "Weekly recalibration"],
  },
  {
    slug: "board-week-engine",
    title: "Board Week Engine",
    eyebrow: "6 weeks",
    location: "London / NYC",
    image:
      "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=1400&q=86",
    copy: "Conditioning, posture, and recovery for leaders entering investor meetings, media, and high-pressure travel.",
    stats: ["Zone work", "Posture protocol", "Energy reporting"],
  },
];

const pageData = {
  system: {
    kicker: "Operating System",
    title: "Training logic for people whose calendar is a contact sport.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1800&q=88",
    copy:
      "Vantage treats training as executive infrastructure: assessment, strength, conditioning, recovery, and nutrition translated into the real week instead of an ideal week.",
    chips: ["Movement audit", "Travel rules", "Recovery dashboard"],
    cards: [
      ["Signal first", "We map sleep, stress, equipment access, injuries, calendar density, and current capacity before prescribing load."],
      ["No fragile plans", "Every block includes hotel, apartment, and no-equipment fallbacks so momentum survives flights and investor weeks."],
      ["Measured quietly", "Progress is tracked through strength markers, body composition, HRV trends, posture, and subjective energy."],
    ],
  },
  residencies: {
    kicker: "Private Residencies",
    title: "Short blocks for leaders between markets, deals, and time zones.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=88",
    copy:
      "Residencies compress the work: private coaching, recovery windows, simple nutrition, and a portable plan you can carry into the next city.",
    chips: ["10 days", "21 days", "Team weeks"],
    cards: [
      ["Founder landing", "A focused first week for founders arriving in Dubai, Singapore, Lisbon, or London with poor sleep and no routine."],
      ["Performance block", "A structured training residency for leaders preparing for board cycles, stages, offsites, or public visibility."],
      ["Team protocol", "Small executive teams can book private weeks with assessments, training, recovery, and travel systems."],
    ],
  },
  fieldhouse: {
    kicker: "Fieldhouse",
    title: "A private floor without gym theater.",
    image:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1800&q=88",
    copy:
      "The room is quiet, exact, and appointment-only. Strength racks, sled lanes, recovery bays, consult rooms, and coach stations are organized for repeatable work.",
    chips: ["4:1 floor ratio", "Recovery bay", "Private entry"],
    cards: [
      ["Strength floor", "Racks, platforms, dumbbells, cables, sleds, and conditioning tools selected for useful work rather than spectacle."],
      ["Recovery lab", "Mobility, breathwork, soft tissue, heat, and decompression windows scheduled around the training block."],
      ["Travel desk", "Coach-built hotel gym plans, restaurant defaults, and equipment substitutions for each member's next city."],
    ],
  },
  dispatch: {
    kicker: "Dispatch",
    title: "Briefings for high-output bodies in motion.",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1800&q=88",
    copy:
      "Short notes from the floor on travel training, executive recovery, meals that do not make dinner weird, and the difference between discipline and design.",
    chips: ["Travel", "Strength", "Recovery"],
    cards: [
      ["The three-gym rule", "How to build a week around the hotel gym, the office gym, and the one proper session you can actually protect."],
      ["The founder deload", "When to reduce volume before the calendar breaks the plan for you."],
      ["Dinner math", "Practical ordering defaults for members eating with clients, investors, and teams."],
    ],
  },
  apply: {
    kicker: "Membership",
    title: "Selective intake for founders, CEOs, and operators in motion.",
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1800&q=88",
    copy:
      "Membership begins with a confidential intake. We review goals, health history, travel rhythm, equipment access, and the periods where your routine usually fails.",
    chips: ["Quarterly starts", "Private intake", "Limited members"],
    cards: [
      ["01 / Map", "Share current training, calendar pressure, travel markets, injury history, and the outcome you need."],
      ["02 / Diagnose", "Complete a fit call and receive a recommended residency, remote block, or hybrid structure."],
      ["03 / Operate", "Start with a clear training block, recovery schedule, nutrition defaults, and travel continuity plan."],
    ],
  },
};

function useHashRoute() {
  const getRoute = () => window.location.hash || "#home";
  const [route, setRoute] = React.useState(getRoute);

  React.useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHashChange);
    if (!window.location.hash) window.location.hash = "home";
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}

function App() {
  const route = useHashRoute();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  React.useEffect(() => {
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [route]);

  return (
    <div className="site-shell">
      <Nav route={route} drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <main>
        <Router route={route} />
      </main>
      <Footer />
    </div>
  );
}

function Nav({ route, drawerOpen, setDrawerOpen }) {
  return (
    <header className="nav-shell">
      <a className="wordmark" href="#home" aria-label="Vantage home">
        Vantage
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.slice(0, -1).map((item) => (
          <a className={isActive(route, item.path) ? "active" : ""} href={item.path} key={item.path}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="#/apply">
        Apply
        <ArrowRight size={15} />
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label={drawerOpen ? "Close menu" : "Open menu"}
        aria-expanded={drawerOpen}
        onClick={() => setDrawerOpen((open) => !open)}
      >
        {drawerOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <div className={`mobile-drawer ${drawerOpen ? "open" : ""}`} aria-hidden={!drawerOpen}>
        <div className="drawer-inner">
          {navItems.map((item) => (
            <a href={item.path} key={item.path}>
              {item.label}
            </a>
          ))}
          <p>Private strength, recovery, and travel systems for founders and operators.</p>
        </div>
      </div>
    </header>
  );
}

function Router({ route }) {
  if (route.startsWith("#/residencies/")) {
    const slug = route.replace("#/residencies/", "");
    const residency = residencies.find((item) => item.slug === slug);
    return residency ? <ResidencyDetail residency={residency} /> : <Page data={pageData.residencies} />;
  }

  const key = route.replace("#/", "").replace("#", "");
  if (key && key !== "home" && pageData[key]) return <Page data={pageData[key]} />;
  return <Home />;
}

function Home() {
  const [slideIndex, setSlideIndex] = React.useState(0);

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setSlideIndex((index) => (index + 1) % heroSlides.length);
    }, 6200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      <section className="hero" aria-label="Vantage Performance Club">
        {heroSlides.map((slide, index) => (
          <img
            className={`hero-image ${index === slideIndex ? "visible" : ""}`}
            src={slide.image}
            alt={slide.label}
            key={slide.image}
          />
        ))}
        <div className="hero-vignette" />
        <div className="hero-plate">
          <p className="kicker">Private performance club / founders in motion</p>
          <h1>
            <span>Built for </span>
            <span>the body that </span>
            <span>carries the deal.</span>
          </h1>
          <p>
            Strength, recovery, and travel-proof training systems for CEOs, founders, and digital nomads who
            cannot afford a fragile routine.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#/apply">
              Request Intake
              <CalendarDays size={17} />
            </a>
            <a className="button secondary" href="#/system">
              See the System
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
        <div className="hero-meter">
          <span>{String(slideIndex + 1).padStart(2, "0")}</span>
          <span>{heroSlides[slideIndex].label}</span>
        </div>
      </section>

      <section className="signal-strip" aria-label="Performance signals">
        {[
          ["4:1", "maximum floor ratio"],
          ["24h", "travel plan turnaround"],
          ["0", "public membership feed"],
          ["3", "global residency markets"],
        ].map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <IntroSection />
      <ResidencyCarousel />
      <SystemSection />
      <EditorialSection />
      <ApplyPanel />
    </>
  );
}

function IntroSection() {
  return (
    <section className="intro-section">
      <div>
        <p className="kicker">The Club</p>
        <h2>Not a gym. A private operating room for strength, sleep, and composure.</h2>
      </div>
      <p>
        Vantage is designed for high-output lives: late flights, board weeks, investor dinners, temporary
        apartments, and the kind of schedule that turns generic wellness into decorative noise.
      </p>
    </section>
  );
}

function ResidencyCarousel() {
  const railRef = React.useRef(null);
  const orbRef = React.useRef(null);
  const dragRef = React.useRef({
    active: false,
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    targetScrollLeft: 0,
    scrollRaf: null,
    moved: false,
    targetIndex: null,
    hoverIndex: 0,
    openedFromPointer: false,
  });
  const [active, setActive] = React.useState(0);
  const [orbVisible, setOrbVisible] = React.useState(false);
  const [dragging, setDragging] = React.useState(false);

  const setActiveIndex = React.useCallback((index) => {
    if (Number.isNaN(index) || index === dragRef.current.hoverIndex) return;
    dragRef.current.hoverIndex = index;
    setActive(index);
  }, []);

  const syncActiveToPointer = React.useCallback(
    (event) => {
      const card = document
        .elementsFromPoint(event.clientX, event.clientY)
        .map((element) => (element instanceof HTMLElement ? element.closest("[data-carousel-index]") : null))
        .find(Boolean);
      if (!card) return;
      setActiveIndex(Number(card.dataset.carouselIndex));
    },
    [setActiveIndex],
  );

  const syncActiveToCenter = React.useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const railRect = rail.getBoundingClientRect();
    const center = railRect.left + railRect.width / 2;
    let closest = 0;
    let distance = Infinity;

    rail.querySelectorAll("[data-carousel-index]").forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const nextDistance = Math.abs(cardCenter - center);
      if (nextDistance < distance) {
        distance = nextDistance;
        closest = Number(card.dataset.carouselIndex);
      }
    });

    setActiveIndex(closest);
  }, [setActiveIndex]);

  const moveOrb = (event) => {
    const orb = orbRef.current;
    if (!orb) return;
    window.requestAnimationFrame(() => {
      orb.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
    });
  };

  const openResidency = (index) => {
    window.location.hash = `#/residencies/${residencies[index].slug}`;
  };

  const onPointerDown = (event) => {
    const rail = railRef.current;
    if (!rail || event.pointerType === "touch") return;
    const card = event.target.closest("[data-carousel-index]");
    syncActiveToPointer(event);
    dragRef.current = {
      active: true,
      startX: event.clientX,
      startY: event.clientY,
      scrollLeft: rail.scrollLeft,
      targetScrollLeft: rail.scrollLeft,
      scrollRaf: null,
      moved: false,
      targetIndex: card ? Number(card.dataset.carouselIndex) : null,
      hoverIndex: dragRef.current.hoverIndex,
      openedFromPointer: false,
    };
    rail.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event) => {
    moveOrb(event);
    if (event.pointerType !== "touch") syncActiveToPointer(event);

    const state = dragRef.current;
    const rail = railRef.current;
    if (!state.active || !rail || event.pointerType === "touch") return;

    const dx = event.clientX - state.startX;
    const dy = event.clientY - state.startY;
    if (Math.hypot(dx, dy) > 7) {
      state.moved = true;
      setDragging(true);
      event.preventDefault();
    }

    if (state.moved) {
      state.targetScrollLeft = state.scrollLeft - dx;
      if (!state.scrollRaf) {
        state.scrollRaf = window.requestAnimationFrame(() => {
          rail.scrollLeft = dragRef.current.targetScrollLeft;
          dragRef.current.scrollRaf = null;
        });
      }
    }
  };

  const onPointerUp = (event) => {
    const state = dragRef.current;
    const rail = railRef.current;
    if (!state.active || event.pointerType === "touch") return;

    if (rail?.hasPointerCapture(event.pointerId)) rail.releasePointerCapture(event.pointerId);
    if (state.scrollRaf) {
      window.cancelAnimationFrame(state.scrollRaf);
      state.scrollRaf = null;
      if (rail) rail.scrollLeft = state.targetScrollLeft;
    }

    if (!state.moved && state.targetIndex !== null) {
      state.openedFromPointer = true;
      openResidency(state.targetIndex);
    }

    if (state.moved) syncActiveToPointer(event);
    dragRef.current.active = false;
    window.setTimeout(() => setDragging(false), 80);
  };

  const onClick = (event, index) => {
    if (dragRef.current.openedFromPointer || dragRef.current.moved) {
      event.preventDefault();
      dragRef.current.openedFromPointer = false;
      return;
    }
    openResidency(index);
  };

  return (
    <section className="residency-section" aria-label="Residency programs">
      <div className="section-heading">
        <p className="kicker">Residencies</p>
        <h2>Select the pressure you are under.</h2>
        <p>
          Each block is built around a constraint: travel fatigue, strength loss, poor sleep, public visibility,
          or the blank space between cities.
        </p>
      </div>
      <div
        className={`carousel-area ${dragging ? "dragging" : ""}`}
        onPointerEnter={() => setOrbVisible(true)}
        onPointerLeave={() => {
          setOrbVisible(false);
          setDragging(false);
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        <div ref={orbRef} className={`drag-orb ${orbVisible ? "visible" : ""}`}>
          Drag
        </div>
        <div
          className="residency-rail"
          ref={railRef}
          onScroll={() => {
            if (!dragRef.current.active) syncActiveToCenter();
          }}
        >
          {residencies.map((residency, index) => (
            <article
              className={`residency-card ${active === index ? "selected" : ""}`}
              data-carousel-index={index}
              role="button"
              tabIndex={0}
              aria-label={`Open ${residency.title}`}
              aria-pressed={active === index}
              key={residency.slug}
              onClick={(event) => onClick(event, index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openResidency(index);
                }
              }}
            >
              <img src={residency.image} alt={`${residency.title} training block`} draggable="false" />
              <div className="card-meta">
                <span>{residency.eyebrow}</span>
                <span>{residency.location}</span>
              </div>
              <h3>{residency.title}</h3>
              <p>{residency.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemSection() {
  const items = [
    {
      icon: <Radar size={21} />,
      title: "Calendar-aware load",
      copy: "Training volume moves around travel, board weeks, investor dinners, and the days where sleep is already compromised.",
    },
    {
      icon: <Plane size={21} />,
      title: "City translations",
      copy: "Every member gets hotel, apartment, and local gym versions of the week before they board.",
    },
    {
      icon: <Gauge size={21} />,
      title: "Recovery as output",
      copy: "Breathwork, mobility, deloads, and nutrition defaults are treated as performance inputs, not spa extras.",
    },
    {
      icon: <Fingerprint size={21} />,
      title: "Private by default",
      copy: "No feed, no class schedule, no public leaderboard. The work is confidential, measured, and appointment-only.",
    },
  ];

  return (
    <section className="system-section">
      <div className="system-media">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1700&q=88"
          alt="Private performance coaching"
        />
      </div>
      <div className="system-copy">
        <p className="kicker">System</p>
        <h2>Structure beats motivation when the week gets hostile.</h2>
        <div className="system-grid">
          {items.map((item) => (
            <article key={item.title}>
              <div className="icon-pill">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EditorialSection() {
  return (
    <section className="editorial-section">
      <div className="section-heading">
        <p className="kicker">Dispatch</p>
        <h2>The field notes are practical, not inspirational.</h2>
      </div>
      <div className="editorial-grid">
        <article className="editorial-feature">
          <img
            src="https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?auto=format&fit=crop&w=1600&q=88"
            alt="Strength training detail"
          />
          <div>
            <span>Travel systems</span>
            <h3>The hotel gym audit for people who only have 42 minutes.</h3>
          </div>
        </article>
        <article>
          <span>Recovery</span>
          <h3>When sleep is the bottleneck, discipline is the wrong lever.</h3>
          <p>How we reduce load, move nutrition earlier, and protect the nervous system during deal weeks.</p>
        </article>
        <article>
          <span>Nutrition</span>
          <h3>The client dinner protocol.</h3>
          <p>Ordering rules that keep body composition moving without turning dinner into a performance.</p>
        </article>
      </div>
    </section>
  );
}

function ApplyPanel() {
  return (
    <section className="apply-panel">
      <p className="kicker">Quarterly Intake</p>
      <h2>Build the system before the calendar breaks the routine.</h2>
      <p>
        Apply for private membership, a residency block, or remote continuity. Intake is limited so coach attention
        and floor privacy stay intact.
      </p>
      <a className="button primary light" href="#/apply">
        Start Intake
        <ArrowRight size={17} />
      </a>
    </section>
  );
}

function Page({ data }) {
  return (
    <article className="page">
      <section className="page-hero">
        <div>
          <p className="kicker">{data.kicker}</p>
          <h1>{data.title}</h1>
          <p>{data.copy}</p>
          <div className="chip-row">
            {data.chips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
        </div>
        <img src={data.image} alt="" />
      </section>
      <section className="page-cards">
        {data.cards.map(([title, copy]) => (
          <article key={title}>
            <span>{title}</span>
            <p>{copy}</p>
          </article>
        ))}
      </section>
      <ApplyPanel />
    </article>
  );
}

function ResidencyDetail({ residency }) {
  return (
    <article className="detail-page">
      <a className="back-link" href="#home">
        <ArrowLeft size={16} />
        Back to residencies
      </a>
      <section className="detail-hero">
        <div>
          <p className="kicker">{residency.eyebrow}</p>
          <h1>{residency.title}</h1>
          <p>{residency.copy}</p>
          <div className="chip-row">
            {residency.stats.map((stat) => (
              <span key={stat}>{stat}</span>
            ))}
          </div>
          <a className="button primary" href="#/apply">
            Request This Block
            <ArrowRight size={17} />
          </a>
        </div>
        <img src={residency.image} alt={`${residency.title} residency`} />
      </section>
    </article>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a className="wordmark" href="#home">
          Vantage
        </a>
        <p>Private performance club for founders, CEOs, and digital nomads.</p>
      </div>
      <div className="footer-links">
        {navItems.map((item) => (
          <a href={item.path} key={item.path}>
            {item.label}
          </a>
        ))}
      </div>
      <div className="footer-meta">
        <span>Dubai / Singapore / Lisbon / Remote</span>
        <span>intake@vantage.club</span>
      </div>
    </footer>
  );
}

function isActive(route, path) {
  if (path === "#home") return route === "#home" || route === "";
  return route.startsWith(path);
}

createRoot(document.getElementById("root")).render(<App />);
