import React, { useState, useMemo } from 'react';
import { Download, Search, ChevronRight } from 'lucide-react';
import './UPSCPortal.css'; // Import the standard CSS file

// Main application component
export default function UPSCPortal() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState(2025);

  // Years sorted descending
  const years = useMemo(() => Array.from({ length: 11 }, (_, i) => 2015 + i).sort((a, b) => b - a), []);

  const allSubjects = useMemo(() => [
    "General Studies Paper I", "General Studies Paper II", "General Studies Paper III", "General Studies Paper IV",
    "Optional Literature (Hindi)", "Optional Literature (English)", "Geography", "Geoscientist", "Economics", "Engineering Services",
    "National Defence Academy", "Naval Academy", "Political Science & IR", "History", "Sociology", "Anthropology",
    "Psychology", "Public Administration", "Philosophy", "Law", "Mathematics", "Physics", "Chemistry", "Biology",
    "Environmental Science", "Agriculture", "Mechanical Engineering", "Electrical Engineering", "Civil Engineering",
    "Computer Science", "Management", "International Relations", "Statistics", "Commerce", "Education", "Home Science",
    "Fine Arts", "Music", "Veterinary Science", "Medical Science"
  ], []);

  // --- Utility Functions ---

  // Function to assign a random difficulty and style
  const getDifficulty = (subject) => {
    const hash = subject.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const difficulties = [
      { name: "Prelims", className: "prelims" },
      { name: "Mains - GS", className: "mains-gs" },
      { name: "Mains - Optional", className: "mains-optional" }
    ];
    return difficulties[hash % 3];
  };

  // Randomized subjects per year (Memoized)
  const yearSubjects = useMemo(() => {
    const subjectsMap = {};
    years.forEach(year => {
      let seed = year * 1337; 
      const shuffled = [...allSubjects].sort(() => Math.sin(seed++) - 0.5);
      subjectsMap[year] = shuffled.slice(0, Math.floor((year % 10) * 0.8) + 5);
    });
    return subjectsMap;
  }, [years, allSubjects]);

  // --- Filtering Logic ---

  const filteredYears = years.filter(y => y.toString().includes(searchTerm));

  const filteredSubjects = useMemo(() => {
    if (!selectedYear) return [];
    
    if (yearSubjects[selectedYear]) {
      // The search term now specifically filters the subject list of the selected year
      return yearSubjects[selectedYear].filter(subj => 
        subj.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return [];
  }, [selectedYear, searchTerm, yearSubjects]);


  return (
    <div className="portal-container">
      
      {/* Header */}
      <header className="portal-header">
        <h1 className="header-title">
          UPSC Exam Question Papers Repository
        </h1>
        <p className="header-subtitle">Union Public Service Commission, Government of India</p>
      </header>

      <div className="portal-main-content">
        
        {/* Search Bar */}
        <div className="search-area">
          <div className="search-wrapper">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder={selectedYear ? `Search subject papers in ${selectedYear}...` : "Select a year to search subjects"}
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="search-input"
              disabled={!selectedYear}
            />
          </div>
        </div>

        {/* Content: Sidebar (Years) and Main Panel (Subjects) */}
        <div className="content-layout">

          {/* Left Sidebar: Years */}
          <aside className="sidebar">
            <h3 className="sidebar-title">Select Exam Year</h3>
            
            <div className="year-list">
              {filteredYears.map(year => (
                <button
                  key={year}
                  className={`year-button ${selectedYear === year ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedYear(year);
                    setSearchTerm('');
                  }}
                >
                  <ChevronRight size={14} className="folder-icon" />
                  {year}
                </button>
              ))}
            </div>
            {filteredYears.length === 0 && (
                <p className="year-list-empty">No years found.</p>
            )}
          </aside>

          {/* Right Panel: Subjects (List View) */}
          <main className="subjects-main-panel">
            {selectedYear ? (
              <>
                <h2 className="main-title">
                  Available Papers for the {selectedYear} Examination
                </h2>
                
                <div className="subject-list">
                    {/* List Header */}
                    <div className="list-header subject-row">
                        <span className="col-subject-name">Subject Name</span>
                        <span className="col-paper-type">Paper Type</span>
                        <span className="col-action">Action</span>
                    </div>

                  {filteredSubjects.length > 0 ? (
                    filteredSubjects.map((subject, index) => {
                      const paperType = getDifficulty(subject);
                      return (
                        <div key={index} className="subject-row">
                          
                          <span className="col-subject-name">
                            {subject}
                          </span>
                          
                          <span className={`col-paper-type difficulty-tag ${paperType.className}`}>
                            {paperType.name}
                          </span>

                          <span className="col-action">
                             <button 
                                className="download-btn"
                                onClick={() => console.log(`Downloading ${subject} for ${selectedYear}`)}
                              >
                                <Download size={18} />
                                <span>Download PDF</span>
                              </button>
                          </span>
                        </div>
                      );
                    })
                  ) : (
                    <div className="empty-search-message">
                      <p className="empty-search-heading">No papers match "{searchTerm}" in {selectedYear}.</p>
                      <p className="empty-search-subtext">Try checking the spelling or selecting a different year.</p>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="initial-prompt">
                <Search size={48} className="prompt-icon" />
                <h2 className="prompt-heading">View Question Papers</h2>
                <p className="prompt-text">
                  Start by clicking an **Exam Year** from the left-hand panel to load the associated papers.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
