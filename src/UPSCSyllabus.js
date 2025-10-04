import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, Download, Menu, X, BookOpen, FileText } from 'lucide-react';
import './UPSCSyllabus.css';

const upscSyllabusData = [
  // ... Paste your entire UPSC syllabus data here (same as original)
];

const OfficialButton = ({ children, onClick, icon: Icon, primary = false, disabled = false }) => (
  <button
    className={`official-button ${primary ? 'primary' : ''} ${disabled ? 'disabled' : ''}`}
    onClick={onClick}
  >
    {Icon && <Icon size={18} />}
    {children}
  </button>
);

const SyllabusCard = ({ section }) => {
  const [expandedPaper, setExpandedPaper] = useState(null);

  const togglePaper = (paperId) => {
    setExpandedPaper(expandedPaper === paperId ? null : paperId);
  };

  const handleDownload = (paperTitle) => {
    alert(`Download functionality: In production, this would download the official PDF for "${paperTitle}"`);
  };

  return (
    <div className="syllabus-card">
      <div className="syllabus-card-header">
        <h3>
          <BookOpen size={22} className="book-icon" />
          {section.title}
        </h3>
        {section.recentlyUpdated && <span className="updated-badge">UPDATED</span>}
      </div>

      {section.papers.map((paper) => {
        const isExpanded = expandedPaper === paper.id;
        const Icon = isExpanded ? ChevronUp : ChevronDown;

        return (
          <div key={paper.id} className="paper-card">
            <div className="paper-card-header">
              <h4>{paper.title}</h4>
              <div className="paper-actions">
                {paper.isNew && <span className="new-badge">NEW</span>}
                <OfficialButton icon={Download} onClick={() => handleDownload(paper.title)}>Download</OfficialButton>
                <OfficialButton icon={Icon} onClick={() => togglePaper(paper.id)}>
                  {isExpanded ? 'Collapse' : 'Expand'}
                </OfficialButton>
              </div>
            </div>
            {isExpanded && (
              <div className="paper-topics">
                <ul>
                  {paper.topics.map((topic, index) => (
                    <li key={index}><span>•</span>{topic}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default function UPSCSyllabus() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ examType: [], subject: [] });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sortBy, setSortBy] = useState('default');

  const allExamTypes = ['Preliminary', 'Mains'];
  const allSubjects = [...new Set(upscSyllabusData.map(d => d.subject))].sort();

  const handleFilterChange = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(v => v !== value)
        : [...prev[category], value]
    }));
  };

  const filteredSyllabus = useMemo(() => {
    let data = [...upscSyllabusData];

    if (filters.examType.length) data = data.filter(item => filters.examType.includes(item.examType));
    if (filters.subject.length) data = data.filter(item => filters.subject.includes(item.subject));
    if (searchTerm) {
      const lower = searchTerm.toLowerCase();
      data = data.filter(item =>
        item.title.toLowerCase().includes(lower) ||
        item.papers.some(paper =>
          paper.title.toLowerCase().includes(lower) ||
          paper.topics.some(topic => topic.toLowerCase().includes(lower))
        )
      );
    }
    if (sortBy === 'updated') data.sort((a, b) => b.recentlyUpdated - a.recentlyUpdated);
    return data;
  }, [filters, searchTerm, sortBy]);

  return (
    <div className="upsc-portal">
      <header className="portal-header">
        <div className="logo-section">
          <div className="logo">⚖</div>
          <div className="logo-text">
            <div className="govt-text">GOVERNMENT OF INDIA</div>
            <div className="commission-text">Union Public Service Commission</div>
          </div>
        </div>
        <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </header>

      <div className="portal-body">
        <aside className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
          <div className="sidebar-inner">
            <div className="search-wrapper">
              <Search size={20} className="search-icon"/>
              <input
                type="text"
                placeholder="Search syllabus..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="filter-section">
              <h4>Examination Stage</h4>
              {allExamTypes.map(type => (
                <label key={type}>
                  <input
                    type="checkbox"
                    checked={filters.examType.includes(type)}
                    onChange={() => handleFilterChange('examType', type)}
                  />
                  {type}
                </label>
              ))}
            </div>

            <div className="filter-section">
              <h4>Subject</h4>
              {allSubjects.map(subject => (
                <label key={subject}>
                  <input
                    type="checkbox"
                    checked={filters.subject.includes(subject)}
                    onChange={() => handleFilterChange('subject', subject)}
                  />
                  {subject}
                </label>
              ))}
            </div>

            <div className="results-count">
              Showing {filteredSyllabus.length} of {upscSyllabusData.length} results
            </div>
          </div>
        </aside>

        <main className="main-content">
          <div className="page-header">
            <h1>Civil Services Examination Syllabus</h1>
            <p>Official syllabus for UPSC Civil Services (IAS) Examination - Preliminary and Mains</p>
          </div>

          <div className="sort-buttons">
            <OfficialButton primary={sortBy === 'default'} onClick={() => setSortBy('default')}>Default Order</OfficialButton>
            <OfficialButton primary={sortBy === 'updated'} onClick={() => setSortBy('updated')}>Recently Updated</OfficialButton>
          </div>

          {filteredSyllabus.length > 0 ? (
            filteredSyllabus.map(section => <SyllabusCard key={section.id} section={section} />)
          ) : (
            <div className="no-results">
              <FileText size={40}/>
              <p>No syllabus sections match your current filters or search criteria.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
