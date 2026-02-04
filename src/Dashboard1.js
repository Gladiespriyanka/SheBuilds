import React, { useState } from "react";
import "./Dashboard1.css";
import ApplicationForm from "./ApplicationForm";
import AdmitCardDownload from "./AdmitCardDownload";
import UPSCResultPortal from "./UPSCResultPortal";
import UPSCPortal from "./UPSCPortal";
import UPSCSyllabus from "./UPSCSyllabus";
import FaqPage from "./FaqPage";
import Resources from "./Resources";
import FormsAndDownloads from "./FormsAndDownloads";

import dashboardBg from "./assets/dashboard-bg.png";
import examScheduleImg from "./assets/exam-schedule1.png";

// helper to open external links in a new tab
const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

// --- Icon Placeholders ---
const UserIcon = () => <span className="icon">👤</span>;
const CalendarIcon = () => <span className="icon">🗓️</span>;
const CardIcon = () => <span className="icon">💳</span>;
const SuccessIcon = () => <span className="icon success-check">✔️</span>;
const SearchIcon = () => <span className="icon">🔍</span>;

// About Us dropdown items
const ABOUT_ITEMS = [
  { key: "historical-perspective", label: "Historical Perspective" },
  { key: "constitutional-provisions", label: "Constitutional Provisions" },
  { key: "commission", label: "The Commission" },
  { key: "functions", label: "Functions" },
  { key: "secretariat", label: "Secretariat" },
  { key: "divisions", label: "Divisions" },
  { key: "citizens-charter", label: "Citizen's Charter" },
  { key: "eop-pwd", label: "EOP for PwD Employees of UPSC" },
  { key: "directory", label: "Directory" },
  { key: "museum", label: "Museum" },
  { key: "virtual-tour", label: "Virtual Tour of Museum" },
];

// Recruitment dropdown items
const RECRUITMENT_ITEMS = [
  "Government Employees",
  "Government Officials",
  "Advertisements",
  "Status of Lateral Recruitment Cases (Advertisement-wise)",
  "Online Recruitment Application (ORA)",
  "Status of Recruitment Cases (Advertisement-wise)",
  "Forms for Certificates",
  "Recruitment Tests",
  "Recruitment Requisition",
  "Recruitment cases kept on hold on account of Pending Litigations",
  "Representation on Question Papers",
];

// Government Users dropdown items
const GOVERNMENT_USERS_ITEMS = [
  "Central Government",
  "Union Territories Government",
  "State Government",
  "Others",
];

// 🔴 Global upcoming events
const upcomingEvents = [
  { icon: "⚙️", title: "CSE Prelims 2026 Notification", date: "14 January 2026" },
  { icon: "🗓️", title: "Application Window (CSE 2026)", date: "14 Jan – 03 Feb 2026" },
  { icon: "💳", title: "Admit Card Release (Prelims 2026)", date: "6 May 2026" },
  { icon: "⏱️", title: "CSE Prelims 2026 Examination", date: "24 May 2026 (Sunday)" },
  { icon: "⚙️", title: "CSE Prelims 2026 Result", date: "11 June 2026" },
  { icon: "🗓️", title: "CSE Mains 2026 Notification", date: "29 July 2026" },
  { icon: "💳", title: "CSE Mains 2026 Begins", date: "21 August 2026" },
  { icon: "⏱️", title: "CSE Mains 2026 Result", date: "October – November 2026" },
  { icon: "⚙️", title: "CSE Prelims 2027 Notification", date: "February 2027" },
  { icon: "🗓️", title: "Application Window (CSE 2027)", date: "February 2027" },
];

// --- Helper Components ---
const CalendarDay = ({ day, isCurrent, isEventDay, isPlaceholder, onClick }) => (
  <div
    className={`calendar-day 
      ${isCurrent ? "current-day" : ""} 
      ${isEventDay ? "event-day" : ""} 
      ${isPlaceholder ? "placeholder" : ""}`}
    onClick={() => !isPlaceholder && onClick(day)}
    style={{ cursor: isPlaceholder ? "default" : "pointer" }}
  >
    {day > 0 ? day : ""}
  </div>
);

// (NotepadModal is defined but not currently used – keep if you use later)
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
        <button onClick={onClose} className="close-btn">
          Close
        </button>
      </div>
    </div>
  );
};

const Card = ({ title, icon, className = "", onSelect }) => {
  const content = (
    <>
      <div className="card-icon-wrapper">{icon}</div>
      <p className="info-card-title">{title}</p>
    </>
  );

  if (typeof onSelect === "function") {
    return (
      <button
        type="button"
        className={`info-card info-card-clickable ${className}`.trim()}
        onClick={onSelect}
      >
        {content}
      </button>
    );
  }

  return <div className={`info-card ${className}`.trim()}>{content}</div>;
};

const QuickLink = ({ title, icon, onClick }) => (
  <div className="quick-link-card" onClick={onClick}>
    <div className="quick-link-icon">{icon}</div>
    <p className="quick-link-title">{title}</p>
  </div>
);

// --- Header with three hover dropdowns ---
const Header = ({
  onApplyClick,
  onLogout,
  onFormsDownloadsClick,
}) => {
  const handleAboutClick = (key) => {
    switch (key) {
      case "historical-perspective":
        openInNewTab(
          "https://upsc.gov.in/sites/default/files/History%20of%20the%20Commission%20final%20%281%29_0.pdf"
        );
        break;
      case "secretariat":
        openInNewTab(
          "https://upsc.gov.in/sites/default/files/Secretariat-OrgChart-Engl-101225.pdf"
        );
        break;
      case "citizens-charter":
        openInNewTab(
          "https://upsc.gov.in/sites/default/files/AboutUs-CtznChrtr-Engl-080422.pdf"
        );
        break;
      case "eop-pwd":
        openInNewTab(
          "https://upsc.gov.in/sites/default/files/EqlOprPwdEmpUPSC-engl-200624.pdf"
        );
        break;
      case "directory":
        openInNewTab(
          "https://upsc.gov.in/sites/default/files/TeleDir-Engl-081225_0.pdf"
        );
        break;
      case "virtual-tour":
        openInNewTab("https://upsc.gov.in/virtual_museum/");
        break;
      default:
        console.log("About Us item:", key);
    }
  };

  const handleRecruitmentClick = (item) => {
    if (item === "Online Recruitment Application (ORA)") {
      openInNewTab("https://upsconline.nic.in/");
    } else if (item === "Representation on Question Papers") {
      openInNewTab(
        "https://upsc.gov.in/sites/default/files/NoticeForRecruitmentQPRep-Engl-181225.pdf"
      );
    } else if (
      item ===
      "Recruitment cases kept on hold on account of Pending Litigations"
    ) {
      openInNewTab(
        "https://upsc.gov.in/sites/default/files/Rectt_PendingLitigation_Eng_171225.pdf"
      );
    } else {
      console.log("Recruitment:", item);
    }
  };

  return (
    <header className="main-header">
      <div className="logo">Civil Services Portal</div>
      <nav className="nav-links">
        {/* About Us */}
        <div className="nav-item nav-item-with-dropdown">
          <a href="#about-us" className="nav-link">
            About Us
          </a>
          <div className="nav-dropdown about-dropdown">
            {ABOUT_ITEMS.map((item) => (
              <div
                key={item.key}
                className="nav-dropdown-item"
                onClick={() => handleAboutClick(item.key)}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Recruitment */}
        <div className="nav-item nav-item-with-dropdown">
          <a href="#recruitment" className="nav-link">
            Recruitment
          </a>
          <div className="nav-dropdown recruitment-dropdown">
            {RECRUITMENT_ITEMS.map((item) => (
              <div
                key={item}
                className="nav-dropdown-item"
                onClick={() => handleRecruitmentClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Government Users */}
        <div className="nav-item nav-item-with-dropdown">
          <a href="#government-users" className="nav-link">
            Government Users
          </a>
          <div className="nav-dropdown government-dropdown">
            {GOVERNMENT_USERS_ITEMS.map((item) => (
              <div
                key={item}
                className="nav-dropdown-item"
                onClick={() => console.log("Government Users:", item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Normal links */}
        <a
          href="#forms-downloads"
          className="nav-link"
          onClick={(e) => {
            e.preventDefault();
            onFormsDownloadsClick && onFormsDownloadsClick();
          }}
        >
          Forms and downloads
        </a>
        <a href="#about" className="nav-link">
          About UPSC
        </a>
      </nav>
      <div className="header-actions">
        <button className="apply-btn" onClick={onApplyClick}>
          Apply Online
        </button>
        <UserIcon />
      </div>
    </header>
  );
};

const HeroBanner = ({ onApplyClick }) => (
  <section
    className="hero-banner"
    style={{
      backgroundImage: `linear-gradient(rgba(31,42,64,0.8), rgba(31,42,64,0.8)), url(${dashboardBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="hero-content">
      <h1>
        Your Journey to <strong>Serve the Nation</strong> Begins{" "}
        <strong>Here</strong>
      </h1>
    </div>
  </section>
);

const CalendarComponent = () => {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const eventDateSet = new Set();

  upcomingEvents.forEach((event) => {
    const text = event.date;

    const fullDateMatch = text.match(/(\d{1,2})\s([A-Za-z]+)\s(\d{4})/);
    if (fullDateMatch) {
      const d = new Date(
        `${fullDateMatch[1]} ${fullDateMatch[2]} ${fullDateMatch[3]}`
      );
      eventDateSet.add(d.toDateString());
    }

    const monthYearMatch = text.match(/^([A-Za-z]+)\s(\d{4})$/);
    if (monthYearMatch) {
      const base = new Date(`1 ${monthYearMatch[1]} ${monthYearMatch[2]}`);
      const days = new Date(base.getFullYear(), base.getMonth() + 1, 0).getDate();
      for (let i = 1; i <= days; i++) {
        eventDateSet.add(
          new Date(base.getFullYear(), base.getMonth(), i).toDateString()
        );
      }
    }
  });

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  const calendarDays = [];

  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    calendarDays.push({ day: daysInPrevMonth - i, isPlaceholder: true });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push({ day, isPlaceholder: false });
  }

  const goPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const isToday = (day) =>
    day === today.getDate() &&
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear();

  const isEventDay = (day) => {
    const d = new Date(currentYear, currentMonth, day);
    return eventDateSet.has(d.toDateString());
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <span className="arrow" onClick={goPrevMonth}>
          {"<"}
        </span>
        <h3 className="month-year">
          {monthNames[currentMonth]} {currentYear}
        </h3>
        <span className="arrow" onClick={goNextMonth}>
          {">"}
        </span>
      </div>

      <div className="calendar-grid">
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
          <div key={day} className="day-label">
            {day}
          </div>
        ))}

        {calendarDays.map((item, idx) => (
          <CalendarDay
            key={idx}
            day={item.day}
            isPlaceholder={item.isPlaceholder}
            isCurrent={!item.isPlaceholder && isToday(item.day)}
            isEventDay={
              !item.isPlaceholder && !isToday(item.day) && isEventDay(item.day)
            }
            onClick={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

const UpcomingEvents = () => (
  <div className="upcoming-events-container">
    <h2>Upcoming Events</h2>
    <div className="events-scroll">
      {upcomingEvents.map((event, index) => (
        <div key={index} className="event-item">
          <div className="event-icon-wrapper">
            <span className="event-icon">{event.icon}</span>
          </div>
          <div className="event-details">
            <p className="event-title">{event.title}</p>
            <p className="event-date">{event.date}</p>
          </div>
        </div>
      ))}
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
        onSelect={() => window.open(examScheduleImg, "_blank")}
      />
      <Card
        title="Admit Card Release"
        icon={<CardIcon />}
        className="admit-card-release"
        onSelect={onAdmitCardClick}
      />
      <Card
        title="Result Announcement"
        icon={<SuccessIcon />}
        className="result-announcement"
        onSelect={onResultClick}
      />
      <Card
        title="Syllabus Revision"
        icon={<SearchIcon />}
        className="syllabus-revision"
      />
    </div>
  </section>
);

const QuickLinks = ({
  onPYQClick,
  onSyllabusClick,
  onFaqClick,
  onResourcesClick,
}) => (
  <section className="quick-links">
    <h1 className="text-2xl font-bold mb-6 text-center">
      Quick Links & Resources
    </h1>
    <div className="quick-links-grid">
      <QuickLink
        title="Syllabus"
        icon={<span>📘</span>}
        onClick={onSyllabusClick}
      />
      <QuickLink
        title="Previous Year Papers"
        icon={<span>📄</span>}
        onClick={onPYQClick}
      />
      <QuickLink title="FAQs" icon={<span>❓</span>} onClick={onFaqClick} />
      <QuickLink
        title="Resources"
        icon={<span>📚</span>}
        onClick={onResourcesClick}
      />
    </div>
  </section>
);

const Footer = () => (
  <footer className="main-footer">
    <div className="footer-content">
      <div className="footer-section contact-us">
        <h3>Contact Us</h3>
        <p>
          For any queries or assistance, please reach out to our help desk or
          contact page.
        </p>
        <div className="footer-buttons">
          <button className="footer-btn">Helpline</button>
          <button className="footer-btn contact-page">Contact Page</button>
        </div>
      </div>
      <div className="footer-section quick-links-footer">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="#accessibility">Accessibility</a>
          </li>
          <li>
            <a href="#terms">Terms of Use</a>
          </li>
          <li>
            <a href="#privacy">Privacy Policy</a>
          </li>
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
    <div className="copyright">
      © 2025 Civil Services Exam Portal. All rights reserved.
    </div>
  </footer>
);

// --- Dashboard Component ---
const Dashboard1 = ({ onLogout }) => {
  const [activeView, setActiveView] = useState("dashboard");

  const handleApplyClick = () => setActiveView("applicationForm");
  const handleReturnToDashboard = () => setActiveView("dashboard");
  const handleAdmitCardClick = () => setActiveView("admitCard");
  const handleResultClick = () => setActiveView("resultPortal");
  const handlePYQClick = () => setActiveView("upscPortal");
  const handleSyllabusClick = () => setActiveView("syllabus");
  const handleFaqClick = () => setActiveView("faq");
  const handleResourcesClick = () => setActiveView("resources");
  const handleFormsDownloadsClick = () => setActiveView("formsDownloads");

  if (activeView === "admitCard") {
    return (
      <div className="civil-services-portal">
        <AdmitCardDownload onBack={handleReturnToDashboard} />
      </div>
    );
  }

  if (activeView === "resultPortal") {
    return <UPSCResultPortal onBack={handleReturnToDashboard} />;
  }

  if (activeView === "upscPortal") {
    return (
      <div className="civil-services-portal">
        <button
          type="button"
          onClick={handleReturnToDashboard}
          className="back-btn"
        >
          ← Back to Dashboard
        </button>
        <UPSCPortal />
      </div>
    );
  }

  if (activeView === "faq") {
    return (
      <div className="civil-services-portal">
        <FaqPage onBack={handleReturnToDashboard} />
      </div>
    );
  }

  if (activeView === "resources") {
    return (
      <div className="civil-services-portal">
        <button onClick={handleReturnToDashboard} className="back-btn">
          ← Back to Dashboard
        </button>
        <Resources />
      </div>
    );
  }

  if (activeView === "formsDownloads") {
    return (
      <div className="civil-services-portal">
        <FormsAndDownloads onBack={handleReturnToDashboard} />
      </div>
    );
  }

  if (activeView === "syllabus") {
    return (
      <div className="civil-services-portal">
        <button
          type="button"
          onClick={handleReturnToDashboard}
          className="back-btn"
        >
          ← Back to Dashboard
        </button>
        <UPSCSyllabus />
      </div>
    );
  }
  // Default dashboard
  return (
    <div className="civil-services-portal">
      <Header
        onApplyClick={handleApplyClick}
        onLogout={onLogout}
        onFormsDownloadsClick={handleFormsDownloadsClick}
      />
      <HeroBanner onApplyClick={handleApplyClick} />
      <div className="main-content-wrapper">
        <div className="calendar-and-events-container">
          <CalendarComponent />
          <UpcomingEvents />
        </div>
        <WhatsNew
          onAdmitCardClick={handleAdmitCardClick}
          onResultClick={handleResultClick}
        />
        <QuickLinks
          onPYQClick={handlePYQClick}
          onSyllabusClick={handleSyllabusClick}
          onFaqClick={handleFaqClick}
          onResourcesClick={handleResourcesClick}
        />
      </div>
      <Footer />
    </div>
  );
};
export default Dashboard1;
