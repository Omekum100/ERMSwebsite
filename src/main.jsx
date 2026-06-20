import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BookOpen,
  CalendarDays,
  ExternalLink,
  GraduationCap,
  HeartHandshake,
  Home,
  Mail,
  MapPin,
  Mountain,
  Phone,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Sprout,
  Trophy,
  Users,
} from 'lucide-react';
import './styles.css';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'academics', label: 'Academics' },
  { id: 'life', label: 'Student Life' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'notices', label: 'Notices' },
  { id: 'contact', label: 'Contact' },
];

const stats = [
  { value: '165', label: 'Total Students' },
  { value: '80', label: 'Boys' },
  { value: '85', label: 'Girls' },
  { value: 'VI-XII', label: 'CBSE Classes' },
];

const aims = [
  'Uplift educational standards for tribal and backward students through academic care and personal growth.',
  'Create a nurturing residential environment where education, culture, sports, and life skills grow together.',
  'Prepare responsible, confident, and compassionate citizens who carry their cultural heritage with pride.',
];

const objectives = [
  { icon: GraduationCap, title: 'Academic Excellence', text: 'CBSE curriculum, guided study, competency-based learning, and regular assessment support for classes VI to XII.' },
  { icon: Sprout, title: 'Holistic Development', text: 'Sports, arts, clubs, reading habits, and life skills shape confident learners beyond textbooks.' },
  { icon: Mountain, title: 'Cultural Enrichment', text: 'Traditional art, music, stories, language, and community knowledge remain part of everyday school life.' },
  { icon: Sparkles, title: 'Future Readiness', text: 'Digital literacy, counseling, leadership practice, and career exposure help students look ahead.' },
  { icon: HeartHandshake, title: 'Community Bond', text: 'Families, teachers, wardens, and local communities stay connected to the school journey.' },
  { icon: ShieldCheck, title: 'Inclusive Campus', text: 'Residential care encourages mutual respect, safety, discipline, hygiene, and belonging.' },
];

const academicPrograms = [
  { title: 'Middle Stage Foundation', text: 'Classes VI to VIII focus on language fluency, mathematics confidence, science curiosity, social understanding, and study discipline.' },
  { title: 'Secondary Preparation', text: 'Classes IX and X receive board-focused academic planning with remedial sessions, practice tests, and subject mentoring.' },
  { title: 'Senior Secondary Pathway', text: 'Classes XI and XII build subject depth, exam readiness, career awareness, and preparation for higher education.' },
  { title: 'Guided Study Hours', text: 'Daily supervised study time helps residential students revise classwork, complete assignments, and ask for help.' },
];

const facilities = [
  'Residential hostel care with daily routine and supervision',
  'CBSE-aligned classrooms for classes VI to XII',
  'Sports, games, assemblies, and cultural activities',
  'Parent communication and student mentoring',
  'Clean dining, health awareness, and personal discipline',
  'Digital learning exposure and career guidance',
];

const chapters = [
  { kicker: 'Morning Bell', title: 'A Home For Learning', text: 'The day begins in Sialjora with study, prayer, meals, classes, games, and quiet reading within a residential rhythm that gives every child structure and care.' },
  { kicker: 'Open Pages', title: 'Classrooms With Purpose', text: 'Learning follows the CBSE pathway while teachers help students discover confidence, curiosity, and inner capability.' },
  { kicker: 'Evening Routine', title: 'Care After Class', text: 'Hostel life includes supervised study, healthy habits, peer learning, and guidance from teachers and staff.' },
  { kicker: 'Culture Circle', title: 'Roots Beside Progress', text: 'The school respects tribal identity while preparing students for higher education, public life, and modern opportunities.' },
];

const dailyRhythm = [
  'Morning assembly, prayer, and campus discipline',
  'Regular academic classes and practical learning',
  'Lunch, rest, and monitored hostel routine',
  'Games, sports, clubs, and cultural practice',
  'Evening study, doubt clearing, and reading time',
];

const notices = [
  { title: 'School Achievements', text: 'Academic, cultural, sports, and community accomplishments from the current session.' },
  { title: 'Notice & Notification', text: 'Important circulars for students, parents, guardians, and visitors.' },
  { title: 'School News', text: 'Updates from campus activities, assemblies, events, and student participation.' },
  { title: 'Important News', text: 'Priority information related to admissions, examinations, holidays, and public disclosure.' },
];

const galleryMedia = [
  { src: '/assets/WhatsApp Image 2026-06-10 at 8.27.41 AM.jpeg', alt: 'Campus activity photograph' },
  { src: '/assets/WhatsApp Image 2026-06-10 at 8.27.42 AM.jpeg', alt: 'School campus photograph' },
  { src: '/assets/WhatsApp Image 2026-06-10 at 8.27.42 AM (1).jpeg', alt: 'Student life photograph' },
  { src: '/assets/WhatsApp Image 2026-06-10 at 8.27.43 AM.jpeg', alt: 'School event photograph' },
  { src: '/assets/WhatsApp Image 2026-06-10 at 8.45.34 AM.jpeg', alt: 'Campus moment photograph' },
  { src: '/assets/WhatsApp Image 2026-06-10 at 8.45.34 AM (1).jpeg', alt: 'School gathering photograph' },
  { src: '/assets/school.png', alt: 'EMRS Hat Gamharia school campus' },
  { src: '/assets/hostel.png', alt: 'EMRS Hat Gamharia hostel building' },
  { src: '/assets/principal.png', alt: 'Principal of EMRS Hat Gamharia' },
];

function getPageFromHash() {
  const page = window.location.hash.replace('#/', '') || 'home';
  return navItems.some((item) => item.id === page) ? page : 'home';
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-text">{text}</p>}
    </div>
  );
}

function Header({ page }) {
  return (
    <header className="site-header">
      <a className="brand" href="#/home" aria-label="EMRS Hat Gamharia home">
        <img src="/assets/emrs.png" alt="" />
        <span>Eklavya Model Residential School</span>
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.id} className={page === item.id ? 'active' : undefined} href={`#/${item.id}`}>
            {item.label}
          </a>
        ))}
        <a className="parent-org-link" href="https://nests.tribal.gov.in/" target="_blank" rel="noreferrer">
          NESTS <ExternalLink size={15} />
        </a>
      </nav>
    </header>
  );
}

function CountUpValue({ value, active }) {
  const target = Number(value);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active || Number.isNaN(target)) {
      return undefined;
    }

    let frameId;
    const duration = 1200;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [active, target]);

  if (Number.isNaN(target)) {
    return value;
  }

  return count;
}

function Stats() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="stats" aria-label="School strength">
      {stats.map((item) => (
        <article key={item.label}>
          <strong><CountUpValue value={item.value} active={active} /></strong>
          <span>{item.label}</span>
        </article>
      ))}
    </section>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">EMRS Hat Gamharia, West Singhbhum</p>
          <h1>A residential campus where tribal students grow with knowledge, care, and confidence.</h1>
          <p className="hero-text">
            Village Sialjora, Panchayat Jaipur, Block Hatgamharia, District West Singhbhum, Jharkhand 833214.
          </p>
          <div className="hero-actions">
            <a href="#/about">Read the Story</a>
            <a href="#/contact">Contact School</a>
          </div>
          <div className="contact-strip" aria-label="School contact information">
            <span><Phone size={17} /> 8674943374</span>
            <span><Mail size={17} /> hatgamhariaemrs@gmail.com</span>
          </div>
        </div>
        <div className="storybook" aria-label="School hostel photograph in a storybook frame">
          <div className="page left-page">
            <img src="/assets/hostel.png" alt="EMRS Hat Gamharia hostel building" />
          </div>
          <div className="page right-page">
            <BookOpen size={34} />
            <p>Every child deserves a page filled with care, knowledge, culture, and courage.</p>
          </div>
        </div>
      </section>
      <Stats />
      <section className="page-section overview-section">
        <SectionHeading
          eyebrow="At a glance"
          title="A complete school experience inside a caring residential environment."
          text="The campus brings together formal learning, hostel life, cultural identity, sports, guidance, and community connection."
        />
        <div className="quick-links">
          {navItems.slice(1, 6).map((item) => (
            <a key={item.id} href={`#/${item.id}`}>
              <span>{item.label}</span>
              <small>Open Page</small>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <section className="page-section about-page">
      <SectionHeading
        eyebrow="About Us"
        title="Quality residential education with roots, rhythm, and reach."
        text="EMRS Hat Gamharia works under the Ministry of Tribal Affairs, Government of India, and is run by the National Education Society for Tribal Students."
      />
      <div className="about-grid">
        <div className="about-copy">
          <p>
            The school strives to impart quality education to tribal students from class VI to XII in a residential setup. Its main objective is to uplift the educational status of tribal and backward students and shape them for a competent future.
          </p>
          <p>
            Students receive academic guidance, personal care, and a friendly learning environment where they can share their problems and experiences with teachers and staff.
          </p>
          <p>
            Campus life encourages discipline, mutual respect, cultural pride, self-confidence, and readiness for higher education.
          </p>
        </div>
        <img src="/assets/school.png" alt="EMRS Hat Gamharia school campus" />
      </div>
      <div className="aim-list page-cards">
        {aims.map((aim, index) => (
          <article key={aim}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{aim}</p>
          </article>
        ))}
      </div>
      <div className="principal compact-principal">
        <img src="/assets/principal.png" alt="Kaushal Kishor, Principal of EMRS Hat Gamharia" />
        <div>
          <p className="eyebrow">Principal's Desk</p>
          <h2>Kaushal Kishor</h2>
          <p className="role">Principal, EMRS Hat Gamharia</p>
          <blockquote>
            EMRS Hat Gamharia strives for the betterment of tribal and backward students by providing quality and competency-based education with parental care, guidance, and a supportive learning environment.
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function AcademicsPage() {
  return (
    <section className="page-section academics-page">
      <SectionHeading
        eyebrow="Academics"
        title="The learning path is academic, practical, cultural, and human."
        text="Classes VI to XII follow the CBSE pattern with attention to foundational learning, board readiness, and the confidence needed for higher studies."
      />
      <div className="objective-grid">
        {objectives.map(({ icon: Icon, title, text }) => (
          <article key={title}>
            <Icon size={26} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <div className="program-grid">
        {academicPrograms.map((program) => (
          <article key={program.title}>
            <h3>{program.title}</h3>
            <p>{program.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function LifePage() {
  return (
    <section className="page-section story-flow page-flow life-page">
      <SectionHeading
        eyebrow="Student Life"
        title="Life here reads like a book written one good habit at a time."
        text="Residential life gives students a balanced day of classes, study, food, rest, games, culture, and mentoring."
      />
      <div className="chapter-cards">
        {chapters.map((chapter) => (
          <article key={chapter.title}>
            <span>{chapter.kicker}</span>
            <h3>{chapter.title}</h3>
            <p>{chapter.text}</p>
          </article>
        ))}
      </div>
      <div className="split-panel">
        <div>
          <h3>Daily rhythm</h3>
          <ul>
            {dailyRhythm.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div>
          <h3>Campus facilities</h3>
          <ul>
            {facilities.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function GalleryPage() {
  return (
    <section className="page-section gallery-section gallery-page">
      <SectionHeading
        eyebrow="Gallery"
        title="Moments from campus, classrooms, and community life."
        text="A visual record of the school environment, activities, people, and spaces that shape daily life at EMRS Hat Gamharia."
      />
      <div className="gallery-grid" aria-label="School media gallery">
        {galleryMedia.map((item, index) => (
          <figure key={item.src} className={index === 0 || index === 5 ? 'feature-tile' : undefined}>
            <img src={item.src} alt={item.alt} loading="lazy" />
            <figcaption>{String(index + 1).padStart(2, '0')}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function NoticesPage() {
  return (
    <section className="page-section notice-board">
      <SectionHeading
        eyebrow="Notice Board"
        title="Updates for students, families, and the school community."
        text="This page can hold school circulars, achievement notes, academic reminders, admission updates, and public information."
      />
      <div className="notice-grid">
        {notices.map((notice, index) => (
          <a key={notice.title} href="#/contact">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{notice.title}</strong>
            <p>{notice.text}</p>
            <small>Contact Office</small>
          </a>
        ))}
      </div>
      <div className="info-band">
        <Trophy size={28} />
        <p>School achievements, exam notices, holidays, admission guidance, and activity reports can be added here as they are announced.</p>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="page-section contact-page">
      <SectionHeading
        eyebrow="Contact"
        title="Reach EMRS Hat Gamharia."
        text="Parents, guardians, visitors, and officials can use the details below for school communication."
      />
      <div className="contact-grid">
        <article>
          <MapPin size={28} />
          <h3>Address</h3>
          <p>Village Sialjora, Panchayat Jaipur, Block Hatgamharia, District West Singhbhum, Jharkhand 833214</p>
        </article>
        <article>
          <Phone size={28} />
          <h3>Phone</h3>
          <p>8674943374</p>
        </article>
        <article>
          <Mail size={28} />
          <h3>Email</h3>
          <p>hatgamhariaemrs@gmail.com</p>
        </article>
      </div>
      <div className="resource-panel">
        <h3>Useful resources</h3>
        <a href="https://www.cbse.nic.in/" target="_blank" rel="noreferrer">CBSE</a>
        <a href="https://ncert.nic.in/" target="_blank" rel="noreferrer">NCERT</a>
        <a href="https://tribal.nic.in/" target="_blank" rel="noreferrer">Ministry of Tribal Affairs</a>
        <a href="https://www.education.gov.in/whos-who" target="_blank" rel="noreferrer">Ministry of Education</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div>
          <div className="footer-brand">
            <img src="/assets/emrs.png" alt="" />
            <h2>EMRS Hat Gamharia</h2>
          </div>
          <p>Residential CBSE education for tribal students from class VI to XII.</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p><MapPin size={17} /> Village Sialjora, Panchayat Jaipur, Block Hatgamharia, West Singhbhum, Jharkhand 833214</p>
          <p><Phone size={17} /> 8674943374</p>
          <p><Mail size={17} /> hatgamhariaemrs@gmail.com</p>
        </div>
        <div>
          <h3>Pages</h3>
          {navItems.slice(1).map((item) => (
            <a key={item.id} href={`#/${item.id}`}>{item.label}</a>
          ))}
        </div>
      </div>
      <div className="footer-note">
        <span><Home size={16} /> Eklavya Model Residential School</span>
        <span><CalendarDays size={16} /> Academic Calendar</span>
        <span><ScrollText size={16} /> Mandatory Public Disclosure</span>
        <span><Users size={16} /> Our Team</span>
      </div>
    </footer>
  );
}

const pages = {
  home: HomePage,
  about: AboutPage,
  academics: AcademicsPage,
  life: LifePage,
  gallery: GalleryPage,
  notices: NoticesPage,
  contact: ContactPage,
};

function App() {
  const [page, setPage] = useState(getPageFromHash);
  const Page = pages[page] || HomePage;

  useEffect(() => {
    const handleHashChange = () => {
      setPage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <main>
      <div className="animated-bg" aria-hidden="true">
        <span className="leaf leaf-one"></span>
        <span className="leaf leaf-two"></span>
        <span className="leaf leaf-three"></span>
        <span className="paper paper-one"></span>
        <span className="paper paper-two"></span>
        <span className="paper paper-three"></span>
        <span className="spark spark-one"></span>
        <span className="spark spark-two"></span>
        <span className="spark spark-three"></span>
        <span className="story-line story-line-one"></span>
        <span className="story-line story-line-two"></span>
      </div>
      <Header page={page} />
      <Page />
      <Footer />
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
