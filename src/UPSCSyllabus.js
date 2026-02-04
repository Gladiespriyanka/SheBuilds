import React, { useState, useEffect } from "react";
import "./UPSCSyllabus.css";

import {
  PRELIMS_SYLLABUS,
  MAINS_COMPULSORY,
  MAINS_GS,
  OPTIONAL_SUBJECTS,
} from "./data/upscSyllabusData";

export default function UPSCSyllabus() {
  const [activeTab, setActiveTab] = useState("prelims");
  const [selectedOptional, setSelectedOptional] = useState("");

  // Progress tracking removed from UI (no checklist),
  // but you can leave the logic if you want to re‑enable later.
  const [completedTopics, setCompletedTopics] = useState(() => {
    const saved = localStorage.getItem("upsc-progress");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("upsc-progress", JSON.stringify(completedTopics));
  }, [completedTopics]);

  const toggleTopic = (topic) => {
    // no visual checklist now, but keep state for future use
    setCompletedTopics((prev) =>
      prev.includes(topic)
        ? prev.filter((t) => t !== topic)
        : [...prev, topic]
    );
  };

  const renderSyllabusCards = (dataSource) => {
    return Object.values(dataSource).map((item) => (
      <div key={item.title} className="syllabus-card">
        <div className="syllabus-card-header">
          <h3>{item.title}</h3>
          {item.code && <span className="paper-code-badge">{item.code}</span>}
        </div>
        {item.topics && item.topics.length > 0 && (
          <ul>
            {item.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        )}
        {item.pdf && (
          <a
            href={item.pdf}
            target="_blank"
            rel="noreferrer"
            className="official-button"
          >
            Official Syllabus PDF
          </a>
        )}
      </div>
    ));
  };

  // For prelims, keep order Paper I then II
  const getPrelimsArray = () => [PRELIMS_SYLLABUS.paper1, PRELIMS_SYLLABUS.paper2];

  return (
    <div className="upsc-portal">
      <div className="main-content">
        <header className="syllabus-header">
          <div className="syllabus-header-left">
            <div className="syllabus-emblem">⚖️</div>
            <h1>UPSC Examination Syllabus</h1>
          </div>
        </header>

        {/* TABS */}
        <div className="syllabus-tabs">
          <button
            className={activeTab === "prelims" ? "active" : ""}
            onClick={() => setActiveTab("prelims")}
          >
            Prelims
          </button>
          <button
            className={activeTab === "mains" ? "active" : ""}
            onClick={() => setActiveTab("mains")}
          >
            Mains
          </button>
          <button
            className={activeTab === "gs" ? "active" : ""}
            onClick={() => setActiveTab("gs")}
          >
            GS Papers
          </button>
          <button
            className={activeTab === "optional" ? "active" : ""}
            onClick={() => setActiveTab("optional")}
          >
            Optional Subjects
          </button>
        </div>

        {/* CONTENT SECTIONS */}
        <div className="tab-content">
          {activeTab === "prelims" &&
            getPrelimsArray().map((item) => (
              <div key={item.title} className="syllabus-card">
                <div className="syllabus-card-header">
                  <h3>{item.title}</h3>
                </div>
                <ul>
                  {item.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
                {item.pdf && (
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="official-button"
                  >
                    Official Syllabus PDF
                  </a>
                )}
              </div>
            ))}

          {activeTab === "mains" && renderSyllabusCards(MAINS_COMPULSORY)}

          {activeTab === "gs" && renderSyllabusCards(MAINS_GS)}

          {activeTab === "optional" && (
            <>
              <div className="optional-selector-container">
                <select
                  className="optional-selector"
                  value={selectedOptional}
                  onChange={(e) => setSelectedOptional(e.target.value)}
                >
                  <option value="">— Select Optional Subject —</option>
                  {Object.keys(OPTIONAL_SUBJECTS).map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              {selectedOptional && (
                <div className="optional-papers">
                  <div className="syllabus-card">
                    <div className="syllabus-card-header">
                      <h3>{selectedOptional} – Paper I</h3>
                    </div>
                    <ul>
                      {OPTIONAL_SUBJECTS[selectedOptional].paper1.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="syllabus-card">
                    <div className="syllabus-card-header">
                      <h3>{selectedOptional} – Paper II</h3>
                    </div>
                    <ul>
                      {OPTIONAL_SUBJECTS[selectedOptional].paper2.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
