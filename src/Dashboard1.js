import React, { useState } from 'react';
import './Dashboard1.css';
import ApplicationForm from './ApplicationForm';
import AdmitCardDownload from './AdmitCardDownload';
import UPSCResultPortal from './UPSCResultPortal';
import UPSCPortal from './UPSCPortal';
import UPSCSyllabus from './UPSCSyllabus'; // ✅ Import for Syllabus

// --- Import local images ---
import dashboardBg from './assets/dashboard-bg.png';
import examScheduleImg from './assets/exam-schedule1.png';

// --- Icon Placeholders ---
const UserIcon = () => <span className="icon">👤</span>;
const CalendarIcon = () => <span className="icon">🗓️</span>;
const ClockIcon = () => <span className="icon">⏱️</span>;
const CardIcon = () => <span className="icon">💳</span>;
const SuccessIcon = () => <span className="icon success-check">✔️</span>;
const SearchIcon = () => <span className="icon">🔍</span>;
const SettingsIcon = () => <span className="icon">⚙️</span>;

// --- Helper Components ---
const CalendarDay = ({ day, isCurrent, isHighlighted, isPlaceholder, onClick }) => (
  <div
    className={`calendar-day ${isCurrent ? 'current-day' : ''} ${isHighlighted ? 'highlighted' : ''} ${isPlaceholder ? 'placeholder' : ''}`}
    onClick={() => !isPlaceholder && onClick(day)}
    style={{ cursor: isPlaceholder ? 'default' : 'pointer' }}
  >
    {day > 0 ? day : ""}
  </div>
);

const NotepadModal = ({ day, event, onClose }) => {
  const mainsDate = new Date(2025, 9, 25);
  const clickedDate = new Date(2025, 9, day);
  const diffTime = mainsDate - clickedDate;
  const diffDays = Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 0);

  return (
    <div className="notepad-overlay">
      <div className="notepad">
        <h2>Day {day}</h2>
        <p>{event ? event : "NO EVENTS TODAY"}</p>
        <p className="countdown">📅 {diffDays} DAYS left for UPSC Mains 2025</p>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
};

const EventItem = ({ icon, title, dateRange }) => (
  <div className="event-item">
    <div className="event-icon-wrapper">{icon}</div>
    <div className="event-details">
      <p className="event-title">{title}</p>
      <p className="event-date">{dateRange}</p>
    </div>
  </div>
);

const Card = ({ title, icon, className = '', onSelect }) => {
  const content = (
    <>
      <div className="card-icon-wrapper">{icon}</div>
      <p className="info-card-title">{title}</p>
    </>
  );

  if (typeof onSelect === 'function') {
    return (
      <button type="button" className={`info-card info-card-clickable ${className}`.trim()} onClick={onSelect}>
        {content}
      </button>
    );
  }

  return <div className={`info-card ${className}`.trim()}>{content}</div>;
};

const QuickLink = ({ title, icon, bgImage, onClick }) => (
  <div
    className="quick-link-card"
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', cursor: onClick ? 'pointer' : 'default' }}
    onClick={onClick}
  >
    <div
      className="link-icon-wrapper"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '120px',
        borderRadius: '8px',
      }}
    >
      {icon}
    </div>
    <p style={{ fontWeight: 'bold', fontSize: '1.2rem', marginTop: '0.5rem' }}>{title}</p>
  </div>
);

// --- Sections ---
const Header = ({ onApplyClick }) => (
  <header className="main-header">
    <div className="logo">Civil Services Portal</div>
    <nav className="nav-links">
      <a href="#exams">Exams</a>
      <a href="#notifications">Notifications</a>
      <a href="#results">Results</a>
      <a href="#dashboard">Aspirant Dashboard</a>
      <a href="#about">About UPSC</a>
    </nav>
    <div className="header-actions">
      <button className="apply-btn" onClick={onApplyClick}>Apply Online</button>
      <UserIcon />
    </div>
  </header>
);

const HeroBanner = ({ onApplyClick }) => (
  <section
    className="hero-banner"
    style={{
      backgroundImage: `linear-gradient(rgba(31,42,64,0.8), rgba(31,42,64,0.8)), url(${dashboardBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="hero-content">
      <h1>
        Your Journey to <strong>Serve the Nation</strong> Begins <strong>Here</strong>
      </h1>
      <p>Prepare for the Civil Services Examination with confidence. Access resources, apply online, and track your progress.</p>
      <div className="hero-actions">
        <button className="btn btn-apply" onClick={onApplyClick}>Apply Online</button>
        <button className="btn btn-view">View Latest Results</button>
      </div>
    </div>
  </section>
);

const CalendarComponent = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const events = {
    4: "Essay Paper Practice Scheduled",
    16: "Mock Test - GS Paper 1",
    20: "Strategy Session with Mentors",
    25: "UPSC Mains Exam Begins"
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <span className="arrow">{'<'}</span>
        <h3 className="month-year">October 2025</h3>
        <span className="arrow">{'>'}</span>
      </div>
      <div className="calendar-grid">
        <div className="day-label">SUN</div>
        <div className="day-label">MON</div>
        <div className="day-label">TUE</div>
        <div className="day-label">WED</div>
        <div className="day-label">THU</div>
        <div className="day-label">FRI</div>
        <div className="day-label">SAT</div>

        {[29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((day, idx) => (
          <CalendarDay
            key={idx}
            day={day}
            isCurrent={day === 4}
            isHighlighted={day >= 16 && day <= 31}
            isPlaceholder={day < 1}
            onClick={(clickedDay) => setSelectedDay(clickedDay)}
          />
        ))}
      </div>

      {selectedDay && (
        <NotepadModal
          day={selectedDay}
          event={events[selectedDay]}
          onClose={() => setSelectedDay(null)}
        />
      )}
    </div>
  );
};

const UpcomingEvents = () => (
  <div className="upcoming-events-container">
    <h2>Upcoming Events</h2>
    <div className="events-list">
      <EventItem icon={<SettingsIcon />} title="CSE Main 2025 Results" dateRange="Oct - mid-Nov 2025" />
      <EventItem icon={<ClockIcon />} title="CSE Prelims 2026 Notification" dateRange="August 2026" />
      <EventItem icon={<CalendarIcon />} title="Application Window Opens" dateRange="02 Oct - 03 Oct 2024" />
      <EventItem icon={<CardIcon />} title="Admit Card Release" dateRange="27 Oct 2024" />
    </div>
  </div>
);

const WhatsNew = ({ onAdmitCardClick, onResultClick }) => (
  <section className="whats-new">
    <h1 className="text-2xl font-bold mb-6 text-center">What's New</h1>
    <div className="whats-new-grid">
      <Card
        title="Exam Schedule Update"
        icon={<CalendarIcon />}
        className="exam-schedule-update"
        onSelect={() => window.open(examScheduleImg, '_blank')}
      />
      <Card title="Admit Card Release" icon={<CardIcon />} className="admit-card-release" onSelect={onAdmitCardClick} />
      <Card title="Result Announcement" icon={<SuccessIcon />} className="result-announcement" onSelect={onResultClick} />
      <Card title="Syllabus Revision" icon={<SearchIcon />} className="syllabus-revision" />
    </div>
  </section>
);

const QuickLinks = ({ onPYQClick, onSyllabusClick }) => (
  <section className="quick-links">
    <h1 className="text-2xl font-bold mb-6 text-center">Quick Links & Resources</h1>
    <div className="quick-links-grid">
      <QuickLink title="Syllabus" icon={<span>📘</span>} onClick={onSyllabusClick} /> {/* ✅ Opens UPSCSyllabus */}
      <QuickLink title="Previous Year Papers" icon={<span>📄</span>} onClick={onPYQClick} />
      <QuickLink title="FAQs" icon={<span>❓</span>} />
      <QuickLink title="Resources" icon={<span>📚</span>} />
    </div>
  </section>
);

const Footer = () => (
  <footer className="main-footer">
    <div className="footer-content">
      <div className="footer-section contact-us">
        <h3>Contact Us</h3>
        <p>For any queries or assistance, please reach out to our help desk or contact page.</p>
        <div className="footer-buttons">
          <button className="footer-btn">Helpline</button>
          <button className="footer-btn contact-page">Contact Page</button>
        </div>
      </div>
      <div className="footer-section quick-links-footer">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#accessibility">Accessibility</a></li>
          <li><a href="#terms">Terms of Use</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="footer-section follow-us">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <span className="social-icon">T</span>
          <span className="social-icon">Y</span>
        </div>
      </div>
    </div>
    <div className="copyright">© 2025 Civil Services Exam Portal. All rights reserved.</div>
  </footer>
);

// --- Dashboard Component ---
const Dashboard1 = () => {
  const [activeView, setActiveView] = useState('dashboard');

  const handleApplyClick = () => setActiveView('applicationForm');
  const handleReturnToDashboard = () => setActiveView('dashboard');
  const handleAdmitCardClick = () => setActiveView('admitCard');
  const handleResultClick = () => setActiveView('resultPortal');
  const handlePYQClick = () => setActiveView('upscPortal'); // Previous Year Papers
  const handleSyllabusClick = () => setActiveView('syllabus'); // ✅ Syllabus

  if (activeView === 'applicationForm') {
    return (
      <div className="civil-services-portal">
        <div className="application-form-wrapper">
          <button type="button" onClick={handleReturnToDashboard} className="back-btn">← Back to Dashboard</button>
          <ApplicationForm />
        </div>
      </div>
    );
  }

  if (activeView === 'admitCard') {
    return (
      <div className="civil-services-portal">
        <AdmitCardDownload onBack={handleReturnToDashboard} />
      </div>
    );
  }

  if (activeView === 'resultPortal') {
    return <UPSCResultPortal onBack={handleReturnToDashboard} />;
  }

  if (activeView === 'upscPortal') {
    return (
      <div className="civil-services-portal">
        <button type="button" onClick={handleReturnToDashboard} className="back-btn">← Back to Dashboard</button>
        <UPSCPortal />
      </div>
    );
  }

  if (activeView === 'syllabus') { // ✅ Syllabus view
    return (
      <div className="civil-services-portal">
        <button type="button" onClick={handleReturnToDashboard} className="back-btn">← Back to Dashboard</button>
        <UPSCSyllabus />
      </div>
    );
  }

  return (
    <div className="civil-services-portal">
      <Header onApplyClick={handleApplyClick} />
      <HeroBanner onApplyClick={handleApplyClick} />
      <div className="main-content-wrapper">
        <div className="calendar-and-events-container">
          <CalendarComponent />
          <UpcomingEvents />
        </div>
        <WhatsNew onAdmitCardClick={handleAdmitCardClick} onResultClick={handleResultClick} />
        <QuickLinks onPYQClick={handlePYQClick} onSyllabusClick={handleSyllabusClick} /> {/* ✅ Pass handler */}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard1;
