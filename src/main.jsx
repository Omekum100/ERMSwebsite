import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BookOpen,
  CalendarDays,
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
  Users,
} from 'lucide-react';
import './styles.css';

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
  { icon: GraduationCap, title: 'Academic Excellence', text: 'CBSE curriculum, guided study, and competency-based learning for classes VI to XII.' },
  { icon: Sprout, title: 'Holistic Development', text: 'Sports, arts, co-curricular clubs, and life skills shape confident young learners.' },
  { icon: Mountain, title: 'Cultural Enrichment', text: 'Traditional art, music, stories, and practices remain part of everyday school life.' },
  { icon: Sparkles, title: 'Future Readiness', text: 'Digital literacy, counseling, leadership, and career exposure help students look ahead.' },
  { icon: HeartHandshake, title: 'Community Bond', text: 'Families, teachers, and local communities remain connected to the school journey.' },
  { icon: ShieldCheck, title: 'Inclusive Campus', text: 'Residential care encourages mutual respect, safety, discipline, and belonging.' },
];

const chapters = [
  { kicker: 'Morning Bell', title: 'A Home For Learning', text: 'The day begins in Sialjora with study, prayer, meals, classes, games, and quiet reading, all within a residential rhythm that gives every child structure and care.' },
  { kicker: 'Open Pages', title: 'Classrooms With Purpose', text: 'Learning follows the CBSE pathway while teachers help students discover their own confidence, curiosity, and inner capability.' },
  { kicker: 'Evening Fireflies', title: 'Culture Walks Beside Progress', text: 'The school initiative respects tribal identity while preparing students for higher education, public life, and modern opportunities.' },
];

const notices = ['School Achievements', 'Notice & Notification', 'School News', 'Important News'];

function App() {
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

      <header className="site-header">
        <a className="brand" href="#home" aria-label="EMRS Hat Gamharia home">
          <img src="/assets/emrs.png" alt="" />
          <span>Eklavya Model Residential School</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#academics">Academics</a>
          <a href="#life">Student Life</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">EMRS Hat Gamharia, West Singhbhum</p>
          <h1>A storybook campus where tribal students grow into tomorrow's confident citizens.</h1>
          <p className="hero-text">
            Village Sialjora, Panchayat Jaipur, Block Hatgamharia, District West Singhbhum, Jharkhand 833214.
          </p>
          <div className="hero-actions">
            <a href="#about">Read the Story</a>
            <a href="#contact">Contact School</a>
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

      <section className="stats" aria-label="School strength">
        {stats.map((item) => (
          <article key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section id="about" className="chapter-section">
        <div className="section-heading">
          <p className="eyebrow">About Us</p>
          <h2>Quality residential education with roots, rhythm, and reach.</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              EMRS Hat Gamharia is a school under the Ministry of Tribal Affairs, Government of India, and is run by the National Education Society for Tribal Students. It strives to impart quality education to tribal students from class VI to XII in a residential setup.
            </p>
            <p>
              The main objective is to uplift the educational status of tribal and backward students and shape them for a competent future through CBSE learning, personal guidance, and a campus life that brings forward each student's inner capabilities.
            </p>
          </div>
          <img src="/assets/school.png" alt="EMRS Hat Gamharia school campus" />
        </div>
      </section>

      <section className="aims">
        <div className="section-heading">
          <p className="eyebrow">Our Aims</p>
          <h2>Three promises at the heart of the school.</h2>
        </div>
        <div className="aim-list">
          {aims.map((aim, index) => (
            <article key={aim}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{aim}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="academics" className="objectives">
        <div className="section-heading">
          <p className="eyebrow">Objectives</p>
          <h2>The learning path is academic, practical, cultural, and human.</h2>
        </div>
        <div className="objective-grid">
          {objectives.map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <Icon size={26} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="life" className="story-flow">
        <div className="section-heading">
          <p className="eyebrow">Campus Chapters</p>
          <h2>Life here reads like a book written one good habit at a time.</h2>
        </div>
        <div className="chapter-cards">
          {chapters.map((chapter) => (
            <article key={chapter.title}>
              <span>{chapter.kicker}</span>
              <h3>{chapter.title}</h3>
              <p>{chapter.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="principal">
        <img src="/assets/principal.png" alt="Kaushal Kishor, Principal of EMRS Hat Gamharia" />
        <div>
          <p className="eyebrow">Principal's Desk</p>
          <h2>Kaushal Kishor</h2>
          <p className="role">Principal, EMRS Hat Gamharia</p>
          <blockquote>
            EMRS Hat Gamharia strives for the betterment of tribal and backward students by providing quality and competency-based education. The school offers guidance, parental care, and a friendly learning environment where children can share their problems and experiences with teachers and staff, helping them use their potential to the fullest.
          </blockquote>
        </div>
      </section>

      <section className="notice-board">
        <div className="section-heading">
          <p className="eyebrow">Notice Board</p>
          <h2>Updates for students, families, and the school community.</h2>
        </div>
        <div className="notice-grid">
          {notices.map((notice, index) => (
            <a key={notice} href="#contact">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{notice}</strong>
              <small>View All</small>
            </a>
          ))}
        </div>
      </section>

      <footer id="contact">
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
            <h3>Resources</h3>
            <a href="https://www.cbse.nic.in/" target="_blank" rel="noreferrer">CBSE</a>
            <a href="https://ncert.nic.in/" target="_blank" rel="noreferrer">NCERT</a>
            <a href="https://tribal.nic.in/" target="_blank" rel="noreferrer">Ministry of Tribal Affairs</a>
            <a href="https://www.education.gov.in/whos-who" target="_blank" rel="noreferrer">Ministry of Education</a>
          </div>
        </div>
        <div className="footer-note">
          <span><Home size={16} /> Eklavya Model Residential School</span>
          <span><CalendarDays size={16} /> Academic Calendar</span>
          <span><ScrollText size={16} /> Mandatory Public Disclosure</span>
          <span><Users size={16} /> Our Team</span>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
