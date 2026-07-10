import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Dumbbell,
  Fingerprint,
  Gauge,
  MapPin,
  Menu,
  Plane,
  Radar,
  ShieldCheck,
  X,
} from "lucide-react";
import "./styles.css";

const navItems = [
  { label: "Home", path: "#home" },
  { label: "Method", path: "#/system" },
  { label: "Programs", path: "#/residencies" },
  { label: "Fieldhouse", path: "#/fieldhouse" },
  { label: "Journal", path: "#/dispatch" },
  { label: "Apply", path: "#/apply" },
];

const residencies = [
  {
    slug: "red-eye-reset",
    title: "Red-Eye Reset",
    eyebrow: "10 days",
    location: "Dubai / Singapore",
    price: "From US$6,800",
    capacity: "Four starts each month",
    image:
      "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=1400&q=86",
    copy: "A coached re-entry block for long-haul travel, disrupted sleep, and a calendar that cannot pause.",
    stats: ["Five coached sessions", "Sleep and mobility review", "Departure plan"],
  },
  {
    slug: "operator-strength",
    title: "Private Membership",
    eyebrow: "12 weeks minimum",
    location: "Fieldhouse + remote",
    price: "From US$2,400 / month",
    capacity: "12 members per coach",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1400&q=86",
    copy: "Two private sessions each week, individual programming, quarterly reviews, and support between cities.",
    stats: ["Two coached sessions weekly", "Quarterly assessment", "Travel rewrites"],
  },
  {
    slug: "nomad-continuity",
    title: "Global Continuity",
    eyebrow: "12 weeks minimum",
    location: "Worldwide",
    price: "From US$1,250 / month",
    capacity: "Remote coaching",
    image:
      "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&w=1400&q=86",
    copy: "A remote strength and conditioning plan rebuilt around each hotel, apartment, or temporary gym.",
    stats: ["Weekly coach review", "Equipment substitutions", "Async support"],
  },
  {
    slug: "board-week-engine",
    title: "Executive Reset",
    eyebrow: "6 weeks",
    location: "Dubai / London",
    price: "From US$4,200",
    capacity: "Six starts each quarter",
    image:
      "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=1400&q=86",
    copy: "A focused conditioning and recovery block before board cycles, media, or sustained business travel.",
    stats: ["Strength and conditioning", "Posture protocol", "Recovery schedule"],
  },
];

const pageData = {
  system: {
    kicker: "The Vantage Standard",
    title: "One plan. Rewritten for the week you actually have.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1800&q=88",
    copy:
      "Assessment, strength, conditioning, recovery, and travel planning sit in one coaching relationship. The program changes when your workload, location, or equipment changes.",
    chips: ["Quarterly assessment", "Weekly programming", "24-hour travel rewrite"],
    cards: [
      ["01 / Assess", "We document movement, strength, injury history, sleep, travel frequency, equipment access, and the outcome that matters."],
      ["02 / Build", "Your coach creates a 12-week block with clear progression, session duration, recovery targets, and fallback versions."],
      ["03 / Adapt", "Travel plans and high-pressure weeks are rewritten within one business day, not treated as missed weeks."],
    ],
  },
  residencies: {
    kicker: "Programs",
    title: "Defined blocks for strength, travel, and recovery.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=88",
    copy:
      "Choose a long-term private membership, remote continuity, or a short residency. Every option begins with an assessment and ends with a plan you can continue.",
    chips: ["From 10 days", "Private or remote", "Limited quarterly intake"],
    cards: [
      ["Private membership", "Two coached sessions each week, individual programming, quarterly reviews, and travel support from US$2,400 per month."],
      ["Global continuity", "Remote coaching for members moving between cities, with weekly review and equipment-specific rewrites from US$1,250 per month."],
      ["Executive residency", "Ten-day and six-week private blocks combining assessment, coaching, recovery, and a departure program from US$6,800."],
    ],
  },
  fieldhouse: {
    kicker: "Dubai Fieldhouse",
    title: "A private training floor, available by appointment.",
    image:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1800&q=88",
    copy:
      "The Fieldhouse is designed for focused coaching: one strength floor, one recovery room, private changing, and no open-gym traffic.",
    chips: ["DIFC, Dubai", "Mon-Sat / 06:00-21:00", "Private arrival"],
    cards: [
      ["Training floor", "Two platforms, cable stations, dumbbells, sled lane, cardio equipment, and mobility space selected for coached sessions."],
      ["Recovery room", "Quiet post-session space for mobility, breathwork, soft-tissue work, and coach-led recovery protocols."],
      ["Travel desk", "Before departure, members receive the exact session, equipment substitutions, and schedule for their next location."],
    ],
  },
  dispatch: {
    kicker: "Journal",
    title: "Useful notes from the coaching floor.",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1800&q=88",
    copy:
      "Short, specific guidance on strength, travel, recovery, and nutrition for people whose week changes faster than a standard program can follow.",
    chips: ["Travel", "Strength", "Recovery"],
    cards: [
      ["42 minutes in a hotel gym", "A practical session structure when the equipment list is short and the workday is not."],
      ["When to reduce training volume", "Four signals your coach uses to change the week before fatigue changes it for you."],
      ["A workable client-dinner default", "A simple ordering framework that supports body composition without making dinner awkward."],
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
        Private intake
        <ArrowRight size={15} />
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label={drawerOpen ? "Close menu" : "Open menu"}
        aria-expanded={drawerOpen}
        onClick={() => setDrawerOpen((open) => !open)}
      >
        {drawerOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <div className={`mobile-drawer ${drawerOpen ? "open" : ""}`} aria-hidden={!drawerOpen}>
        <div className="drawer-inner">
          {navItems.map((item) => (
            <a href={item.path} key={item.path}>
              {item.label}
            </a>
          ))}
          <p>Private strength, conditioning, and travel coaching for founders and executives.</p>
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
  if (key === "apply") return <ApplyPage />;
  if (key && key !== "home" && pageData[key]) return <Page data={pageData[key]} />;
  return <Home />;
}

function Home() {
  return (
    <>
      <section className="hero" aria-label="Vantage Performance Club">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=2400&q=90"
          alt="Private strength training floor"
        />
        <div className="hero-vignette" />
        <div className="hero-plate">
          <p className="kicker">Private performance / Dubai + remote</p>
          <h1>Strength that travels with you.</h1>
          <p>
            Private coaching, recovery, and travel programming for founders and executives. One plan, rebuilt
            around every city and every demanding week.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#/apply">
              Request a private call
              <CalendarDays size={17} />
            </a>
            <a className="button secondary" href="#/residencies">
              View programs
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
        <div className="hero-note">
          <span>Now accepting Q3</span>
          <span>12 memberships available</span>
        </div>
      </section>

      <ServiceStandards />
      <IntroSection />
      <ResidencyCarousel />
      <SystemSection />
      <FieldhouseSection />
      <MembershipSection />
      <ApplyPanel />
    </>
  );
}

function ServiceStandards() {
  const standards = [
    ["12", "members maximum per coach"],
    ["24h", "travel-program turnaround"],
    ["3", "formal reviews each quarter"],
    ["1:1", "private coached sessions"],
  ];

  return (
    <section className="signal-strip" aria-label="Vantage service standards">
      {standards.map(([value, label]) => (
        <div key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </section>
  );
}

function IntroSection() {
  return (
    <section className="intro-section">
      <div>
        <p className="kicker">The practice</p>
        <h2>A private coaching relationship built around work and travel.</h2>
      </div>
      <div className="intro-copy">
        <p>
          Your coach owns the full plan: assessment, strength, conditioning, recovery, and the version you use
          when equipment or time changes.
        </p>
        <a className="text-link" href="#/system">
          Read the Vantage Standard <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}

function ResidencyCarousel() {
  const railRef = React.useRef(null);
  const orbRef = React.useRef(null);
  const orbRafRef = React.useRef(null);
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

  React.useEffect(
    () => () => {
      if (orbRafRef.current) window.cancelAnimationFrame(orbRafRef.current);
      if (dragRef.current.scrollRaf) window.cancelAnimationFrame(dragRef.current.scrollRaf);
    },
    [],
  );

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
      if (card) setActiveIndex(Number(card.dataset.carouselIndex));
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
      const nextDistance = Math.abs(rect.left + rect.width / 2 - center);
      if (nextDistance < distance) {
        distance = nextDistance;
        closest = Number(card.dataset.carouselIndex);
      }
    });
    setActiveIndex(closest);
  }, [setActiveIndex]);

  const moveOrb = (event) => {
    if (!orbRef.current) return;
    const x = event.clientX;
    const y = event.clientY;
    if (orbRafRef.current) window.cancelAnimationFrame(orbRafRef.current);
    orbRafRef.current = window.requestAnimationFrame(() => {
      if (orbRef.current) {
        orbRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      orbRafRef.current = null;
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
          if (railRef.current) railRef.current.scrollLeft = dragRef.current.targetScrollLeft;
          dragRef.current.scrollRaf = null;
        });
      }
    }
  };

  const finishPointer = (event) => {
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
      dragRef.current.moved = false;
      return;
    }
    openResidency(index);
  };

  return (
    <section className="residency-section" aria-label="Vantage programs">
      <div className="section-heading">
        <div>
          <p className="kicker">Programs</p>
          <h2>Choose the structure your schedule needs now.</h2>
        </div>
        <p>
          Long-term private coaching, remote continuity, and short residencies. Every program states its duration,
          level of support, and starting investment.
        </p>
      </div>
      <div
        className={`carousel-area ${dragging ? "dragging" : ""}`}
        onPointerEnter={() => setOrbVisible(true)}
        onPointerLeave={() => {
          setOrbVisible(false);
          dragRef.current.active = false;
          setDragging(false);
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={finishPointer}
        onPointerCancel={finishPointer}
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
              <img src={residency.image} alt={`${residency.title} training`} draggable="false" />
              <div className="card-meta">
                <span>{residency.eyebrow}</span>
                <span>{residency.location}</span>
              </div>
              <h3>{residency.title}</h3>
              <p>{residency.copy}</p>
              <div className="card-price">
                <span>{residency.price}</span>
                <ArrowRight size={16} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemSection() {
  const items = [
    { icon: <Radar size={20} />, title: "Assess", copy: "Movement, strength, sleep, injury history, travel, and calendar constraints." },
    { icon: <Dumbbell size={20} />, title: "Build", copy: "A progressive 12-week block with primary sessions and practical fallback versions." },
    { icon: <Plane size={20} />, title: "Translate", copy: "The exact plan for each hotel, apartment, or temporary training floor." },
    { icon: <Gauge size={20} />, title: "Review", copy: "Scheduled checkpoints for strength, capacity, recovery, and body composition." },
  ];

  return (
    <section className="system-section">
      <div className="system-media">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1700&q=88"
          alt="Coach leading a private strength session"
        />
        <div className="image-caption">
          <span>Private session</span>
          <span>Dubai Fieldhouse</span>
        </div>
      </div>
      <div className="system-copy">
        <p className="kicker">The Vantage Standard</p>
        <h2>One accountable coach. Four clear stages.</h2>
        <p className="system-lede">
          Your program is designed to survive changing locations and demanding weeks without losing progression.
        </p>
        <div className="system-list">
          {items.map((item, index) => (
            <article key={item.title}>
              <span className="system-number">0{index + 1}</span>
              <div className="icon-pill">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
        <a className="button outline-light" href="#/system">
          Explore the method <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

function FieldhouseSection() {
  const details = [
    [<MapPin size={18} />, "DIFC, Dubai", "Private arrival and appointment-only access"],
    [<Clock3 size={18} />, "Mon-Sat", "Coached sessions from 06:00 to 21:00"],
    [<ShieldCheck size={18} />, "Private by design", "No open gym, classes, cameras, or public leaderboard"],
  ];

  return (
    <section className="fieldhouse-section">
      <div className="fieldhouse-copy">
        <p className="kicker">Dubai Fieldhouse</p>
        <h2>The room supports the work.</h2>
        <p>
          A focused strength floor, recovery room, private changing, and coach desk. Every visit is scheduled;
          nothing competes with the session.
        </p>
        <div className="facility-list">
          {details.map(([icon, title, copy]) => (
            <div key={title}>
              <span>{icon}</span>
              <strong>{title}</strong>
              <p>{copy}</p>
            </div>
          ))}
        </div>
        <a className="text-link" href="#/fieldhouse">
          View the Fieldhouse <ArrowRight size={15} />
        </a>
      </div>
      <div className="fieldhouse-media">
        <img
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1800&q=88"
          alt="Vantage private training floor"
        />
        <div className="facility-index">
          <span>01 / Strength floor</span>
          <span>02 / Recovery room</span>
          <span>03 / Private changing</span>
        </div>
      </div>
    </section>
  );
}

function MembershipSection() {
  const tiers = [
    {
      label: "Fieldhouse",
      title: "Private Membership",
      price: "US$2,400",
      suffix: "from / month",
      copy: "For Dubai-based members who want private sessions and continuity when they travel.",
      features: ["Two coached sessions each week", "Individual 12-week programming", "Quarterly performance review", "Travel-program rewrites"],
    },
    {
      label: "Worldwide",
      title: "Global Continuity",
      price: "US$1,250",
      suffix: "from / month",
      copy: "For members working between cities who need one plan adapted to changing equipment.",
      features: ["Weekly program review", "Async coach access", "Hotel and apartment versions", "Quarterly remote assessment"],
    },
    {
      label: "Private block",
      title: "Executive Residency",
      price: "US$6,800",
      suffix: "from / 10 days",
      copy: "For an intensive reset after travel or before a concentrated period of work.",
      features: ["Initial assessment", "Five private sessions", "Recovery and sleep plan", "Four-week departure program"],
    },
  ];

  return (
    <section className="membership-section">
      <div className="membership-heading">
        <div>
          <p className="kicker">Membership</p>
          <h2>Know what is included before you apply.</h2>
        </div>
        <p>All prices are starting investments. Final recommendations follow a confidential fit call.</p>
      </div>
      <div className="membership-grid">
        {tiers.map((tier, index) => (
          <article className={index === 0 ? "featured" : ""} key={tier.title}>
            <span className="tier-label">{tier.label}</span>
            <h3>{tier.title}</h3>
            <p className="tier-copy">{tier.copy}</p>
            <div className="tier-price">
              <strong>{tier.price}</strong>
              <span>{tier.suffix}</span>
            </div>
            <ul>
              {tier.features.map((feature) => (
                <li key={feature}>
                  <Check size={15} /> {feature}
                </li>
              ))}
            </ul>
            <a className="text-link" href="#/apply">
              Discuss this option <ArrowRight size={15} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function ApplyPanel() {
  return (
    <section className="apply-panel">
      <div>
        <p className="kicker">Confidential intake</p>
        <h2>Start with a 20-minute private call.</h2>
      </div>
      <div>
        <p>
          Tell us where you train, how often you travel, and what you need to change. You will receive a fit decision
          and recommended program within two business days.
        </p>
        <a className="button light" href="#/apply">
          Request a call <ArrowRight size={17} />
        </a>
      </div>
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

function ApplyPage() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <article className="apply-page">
      <section className="apply-intro">
        <div>
          <p className="kicker">Private intake</p>
          <h1>A short conversation before any recommendation.</h1>
        </div>
        <div className="process-list">
          <div><span>01</span><p>Share your schedule, training history, travel, and intended outcome.</p></div>
          <div><span>02</span><p>Complete a confidential 20-minute fit call with the performance team.</p></div>
          <div><span>03</span><p>Receive a program recommendation and clear starting investment within two business days.</p></div>
        </div>
      </section>

      <section className="intake-layout">
        <aside>
          <Fingerprint size={25} />
          <h2>Private by default.</h2>
          <p>Your information is used only to assess fit and is never added to a marketing list.</p>
          <div className="intake-meta">
            <span>Q3 intake</span><strong>12 places</strong>
            <span>Response time</span><strong>2 business days</strong>
            <span>Locations</span><strong>Dubai + worldwide</strong>
          </div>
        </aside>
        {submitted ? (
          <div className="form-success" role="status">
            <Check size={28} />
            <p className="kicker">Request received</p>
            <h2>Thank you. The performance team will reply within two business days.</h2>
            <a className="text-link" href="#home">Return home <ArrowRight size={15} /></a>
          </div>
        ) : (
          <form className="intake-form" onSubmit={handleSubmit}>
            <div className="field-row">
              <label>First name<input name="firstName" autoComplete="given-name" required /></label>
              <label>Last name<input name="lastName" autoComplete="family-name" required /></label>
            </div>
            <div className="field-row">
              <label>Work email<input name="email" type="email" autoComplete="email" required /></label>
              <label>Primary city<input name="city" autoComplete="address-level2" required /></label>
            </div>
            <label>
              Program of interest
              <select name="program" defaultValue="">
                <option value="" disabled>Select a program</option>
                <option>Private Membership</option>
                <option>Global Continuity</option>
                <option>Executive Residency</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label>
              What needs to change?
              <textarea name="goals" rows="5" placeholder="Training history, travel rhythm, constraints, and the outcome you need." required />
            </label>
            <label className="consent-row">
              <input type="checkbox" required />
              <span>I agree to be contacted about this private intake request.</span>
            </label>
            <button className="button primary submit-button" type="submit">
              Request private call <ArrowRight size={17} />
            </button>
          </form>
        )}
      </section>
    </article>
  );
}

function ResidencyDetail({ residency }) {
  return (
    <article className="detail-page">
      <a className="back-link" href="#/residencies">
        <ArrowLeft size={16} />
        All programs
      </a>
      <section className="detail-hero">
        <div>
          <p className="kicker">{residency.eyebrow}</p>
          <h1>{residency.title}</h1>
          <p>{residency.copy}</p>
          <div className="detail-commercial">
            <div><span>Starting investment</span><strong>{residency.price}</strong></div>
            <div><span>Availability</span><strong>{residency.capacity}</strong></div>
          </div>
          <div className="chip-row">
            {residency.stats.map((stat) => (
              <span key={stat}>{stat}</span>
            ))}
          </div>
          <a className="button primary" href="#/apply">
            Discuss this program <ArrowRight size={17} />
          </a>
        </div>
        <img src={residency.image} alt={`${residency.title} program`} />
      </section>
    </article>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a className="wordmark footer-wordmark" href="#home">Vantage</a>
        <p>Private strength, conditioning, and travel coaching.</p>
      </div>
      <div className="footer-links">
        {navItems.map((item) => <a href={item.path} key={item.path}>{item.label}</a>)}
      </div>
      <div className="footer-meta">
        <span>DIFC, Dubai / Worldwide coaching</span>
        <a href="mailto:intake@vantage.club">intake@vantage.club</a>
        <span>By appointment / Mon-Sat</span>
      </div>
    </footer>
  );
}

function isActive(route, path) {
  if (path === "#home") return route === "#home" || route === "";
  return route.startsWith(path);
}

createRoot(document.getElementById("root")).render(<App />);
