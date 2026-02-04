// PRELIMS
export const PRELIMS_SYLLABUS = {
  paper1: {
    title: "Prelims Paper I (General Studies)",
    topics: [
      "Current events of national and international importance",
      "History of India and Indian National Movement",
      "Indian and World Geography – Physical, Social, Economic Geography of India and the World",
      "Indian Polity and Governance – Constitution, Political System, Panchayati Raj, Public Policy, Rights Issues, etc.",
      "Economic and Social Development – Sustainable Development, Poverty, Inclusion, Demographics, Social Sector Initiatives, etc.",
      "General issues on Environmental Ecology, Biodiversity and Climate Change – that do not require subject specialization",
      "General Science",
    ],
    pdf: "https://upsc.gov.in/sites/default/files/UPSC_Prelims_GS_Paper_I_Syllabus.pdf",
  },
  paper2: {
    title: "Prelims Paper II (CSAT)",
    topics: [
      "Comprehension",
      "Interpersonal skills including communication skills",
      "Logical reasoning and analytical ability",
      "Decision‑making and problem‑solving",
      "General mental ability",
      "Basic numeracy (numbers and their relations, orders of magnitude, etc.)",
      "Data interpretation (charts, graphs, tables, data sufficiency, etc.)",
    ],
    pdf: "https://upsc.gov.in/sites/default/files/UPSC_Prelims_CSAT_Paper_II_Syllabus.pdf",
  },
};


// MAINS – COMPULSORY (Languages + Essay)
export const MAINS_COMPULSORY = {
  // Qualifying language papers (A & B)
  languageA: {
    code: "Paper A",
    title: "Indian Language (Qualifying)",
    topics: [
      "Comprehension of given passages",
      "Précis writing",
      "Usage and vocabulary",
      "Short essays",
      "Translation from English to the Indian language and vice versa",
    ],
    note: "Any one Indian language from the Eighth Schedule (conditions/exemptions as per UPSC).",
  },
  languageB: {
    code: "Paper B",
    title: "English (Qualifying)",
    topics: [
      "Comprehension of given passages",
      "Précis writing",
      "Usage and vocabulary",
      "Short essays",
    ],
  },

  // Essay – counts for merit
  essay: {
    code: "Paper I",
    title: "Essay",
    topics: [
      "Write essays on multiple topics selected from given options",
      "Assessment based on subject relevance, idea organization, and effective, precise expression",
    ],
  },
};


// MAINS – GENERAL STUDIES (GS I–IV)
export const MAINS_GS = {
  GS1: {
    code: "Paper II",
    title: "GS Paper I – Indian Heritage, History & Geography of the World and Society",
    topics: [
      "Indian culture – Salient aspects of Art Forms, Literature and Architecture from ancient to modern times",
      "Modern Indian history from about the middle of the eighteenth century until the present – significant events, personalities, issues",
      "The Freedom Struggle – its various stages and important contributors/contributions",
      "Post‑independence consolidation and reorganization within the country",
      "History of the world – events, forms and effect on society (Industrial Revolution, world wars, colonization, decolonization, etc.)",
      "Salient features of Indian Society, Diversity of India, role of women and women’s organizations, population and associated issues, poverty and developmental issues, urbanization and related problems",
      "Social empowerment, communalism, regionalism, secularism",
      "Salient features of world’s physical geography",
      "Distribution of key natural resources across the world (including South Asia and the Indian sub‑continent)",
      "Important geophysical phenomena – earthquakes, tsunami, volcanoes, cyclones, etc. and changes in critical geographical features",
    ],
  },
  GS2: {
    code: "Paper III",
    title: "GS Paper II – Governance, Constitution, Polity, Social Justice and International Relations",
    topics: [
      "Indian Constitution – historical underpinnings, evolution, features, amendments, significant provisions, basic structure",
      "Functions and responsibilities of the Union and the States; issues and challenges pertaining to the federal structure; devolution of powers and finances up to local levels",
      "Separation of powers between various organs, dispute redressal mechanisms and institutions",
      "Parliament and State Legislatures – structure, functioning, conduct of business, powers & privileges, issues arising out of these",
      "Structure, organization and functioning of the Executive and the Judiciary",
      "Appointments to various constitutional posts; powers, functions and responsibilities of various constitutional bodies",
      "Government policies and interventions for development in various sectors and issues arising out of their design and implementation",
      "Development processes and the development industry – role of NGOs, SHGs, various groups and associations, donors, charities, institutional and other stakeholders",
      "Welfare schemes for vulnerable sections and the performance of these schemes; mechanisms, laws, institutions and bodies for protection and betterment of these vulnerable sections",
      "India and its neighbourhood relations; bilateral, regional and global groupings and agreements; effect of policies and politics of developed and developing countries on India’s interests",
      "Important international institutions, agencies and fora – structure, mandate",
    ],
  },
  GS3: {
    code: "Paper IV",
    title: "GS Paper III – Technology, Economic Development, Biodiversity, Environment, Security & Disaster Management",
    topics: [
      "Indian economy and issues relating to planning, mobilization of resources, growth, development and employment",
      "Inclusive growth and issues arising from it",
      "Government Budgeting",
      "Major crops, cropping patterns, irrigation, e‑technology in the aid of farmers, issues related to buffer stocks and food security",
      "Effects of liberalization on the economy, changes in industrial policy and their effects on industrial growth",
      "Infrastructure – energy, ports, roads, airports, railways, etc.",
      "Science and technology – developments and their applications and effects in everyday life; indigenization of technology; awareness in fields of IT, space, computers, robotics, nano‑technology, biotechnology, etc.",
      "Conservation, environmental pollution and degradation, environmental impact assessment",
      "Disaster and disaster management",
      "Internal security challenges – terrorism, insurgency, cyber security, money‑laundering, role of external state and non‑state actors",
      "Various security forces and agencies and their mandate",
    ],
  },
  GS4: {
    code: "Paper V",
    title: "GS Paper IV – Ethics, Integrity and Aptitude",
    topics: [
      "Ethics and Human Interface – essence, determinants and consequences of ethics in human actions; dimensions of ethics; ethics in private and public relationships",
      "Human values – lessons from the lives and teachings of great leaders, reformers and administrators",
      "Attitude – content, structure, function; its influence and relation with thought and behaviour; moral and political attitudes; social influence and persuasion",
      "Emotional intelligence – concepts and their utilities in governance and administration",
      "Contributions of moral thinkers and philosophers from India and world",
      "Public/Civil service values and Ethics in Public administration – status and problems; ethical concerns and dilemmas in government and private institutions",
      "Probity in governance – concept of public service; philosophical basis of governance and probity; information‑sharing and transparency in government",
      "Case studies on above issues",
    ],
  },
};


// OPTIONAL SUBJECTS (Paper VI & VII)
export const OPTIONAL_SUBJECTS = {
  // Already detailed examples
  Sociology: {
    paper1: [
      "Sociology – The Discipline",
      "Sociology as Science",
      "Research Methods and Analysis",
      "Sociological Thinkers",
      "Stratification and Mobility",
      "Works and Economic Life",
      "Politics and Society",
      "Religion and Society",
      "Systems of Kinship",
      "Social Change in Modern Society",
    ],
    paper2: [
      "Perspectives on the Study of Indian Society",
      "Impact of Colonial Rule on Indian Society",
      "Social Structure – Caste System, Tribes, Classes",
      "Family, Marriage and Kinship in India",
      "Religion and Society in India",
      "Rural and Agrarian Social Structure",
      "Industrialization and Urbanisation in India",
      "Politics and Society in India",
      "Social Movements in Modern India",
      "Population Dynamics and Social Change in India",
    ],
  },

  Geography: {
    paper1: [
      "Geomorphology",
      "Climatology",
      "Oceanography",
      "Biogeography",
      "Environmental Geography",
      "Perspectives in Human Geography",
      "Economic Geography",
      "Population and Settlement Geography",
      "Regional Planning",
      "Models, Theories and Laws in Human Geography",
    ],
    paper2: [
      "Physical Setting of India",
      "Resources in India",
      "Agriculture and Irrigation in India",
      "Industry, Transport and Communication in India",
      "Cultural Settings of India",
      "Regional Development and Planning in India",
      "Contemporary Issues in Geography of India",
    ],
  },

  History: {
    paper1: [
      "Sources and Approaches to Ancient Indian History",
      "Indus Valley Civilization",
      "Vedic Period and Mahajanapadas",
      "Mauryan and Post‑Mauryan India",
      "Gupta and Post‑Gupta Period",
      "Early Medieval India",
      "The Delhi Sultanate",
      "Mughal Empire",
      "Socio‑religious Movements in Medieval India",
      "Art, Architecture and Culture – Ancient & Medieval",
    ],
    paper2: [
      "British Expansion in India",
      "Economic Impact of British Rule",
      "Socio‑religious Reform Movements (19th–20th Century)",
      "Growth of Nationalism and Freedom Struggle",
      "Gandhian Era and Other Strands of National Movement",
      "India after Independence – Consolidation and Reorganisation",
      "World History – 18th Century to Present",
      "World Wars, Cold War and Decolonisation",
    ],
  },

  // Agriculture
  Agriculture: {
    paper1: [
      "Ecology and Natural Resource Management",
      "Climatology and Agro‑meteorology",
      "Soil Science and Soil Fertility",
      "Soil and Water Conservation",
      "Cropping Systems and Agronomy",
      "Weed Management",
      "Forestry and Agro‑forestry",
      "Farm Management and Agricultural Economics",
      "Agricultural Extension and Communication",
    ],
    paper2: [
      "Cell Biology and Plant Genetics",
      "Plant Breeding and Seed Technology",
      "Plant Physiology and Growth Regulators",
      "Horticulture and Landscaping",
      "Field Crops and Cropping Systems",
      "Plant Protection – Entomology and Plant Pathology",
      "Food Production and Nutrition Management",
      "Post‑harvest Technology and Value Addition",
    ],
  },

  "Animal Husbandry and Veterinary Science": {
    paper1: [
      "Animal Nutrition",
      "Livestock Production and Management",
      "Genetics and Animal Breeding",
      "Reproduction and Gynecology",
      "Physiology of Domestic Animals",
      "Poultry Production",
    ],
    paper2: [
      "Veterinary Pathology",
      "Veterinary Microbiology and Epidemiology",
      "Veterinary Pharmacology and Toxicology",
      "Veterinary Public Health",
      "Diseases of Livestock and Poultry",
      "Clinical Veterinary Medicine and Surgery",
    ],
  },

  Anthropology: {
    paper1: [
      "Meaning, Scope and Development of Anthropology",
      "Relationship with Other Disciplines",
      "Main Branches of Anthropology",
      "Human Evolution and Fossil Evidence",
      "Biological Basis of Life and Genetics",
      "Race, Ethnicity and Human Variation",
      "Family, Marriage and Kinship",
      "Economic and Political Organization",
      "Religion, Magic and Witchcraft",
      "Research Methods in Anthropology",
    ],
    paper2: [
      "Evolution of Indian Culture and Civilization",
      "Ethno‑archaeology in India",
      "Tribal Communities in India",
      "Tribal Economy and Land‑holding Systems",
      "Social Change and Development Programmes",
      "Problems of Scheduled Tribes and Safeguards",
      "Caste System and Backward Classes",
      "Village Studies and Rural Social Structure",
      "Impact of Modernization and Globalization on Tribes",
    ],
  },

  Botany: {
    paper1: [
      "Microbiology and Plant Pathology",
      "Bryophytes, Pteridophytes and Gymnosperms",
      "Angiosperms – Morphology, Anatomy and Taxonomy",
      "Plant Diversity and Evolution",
      "Paleobotany and Palynology",
    ],
    paper2: [
      "Cell Biology and Genetics",
      "Plant Physiology",
      "Biochemistry and Molecular Biology",
      "Ecology and Environmental Botany",
      "Economic Botany and Biotechnology",
    ],
  },

  Chemistry: {
    paper1: [
      "Quantum Chemistry",
      "Atomic and Molecular Structure",
      "Thermodynamics and Chemical Equilibrium",
      "Chemical Kinetics and Surface Chemistry",
      "Electrochemistry",
      "Coordination Chemistry and Organometallics",
      "Main Group and Transition Metal Chemistry",
    ],
    paper2: [
      "Reaction Mechanisms in Organic Chemistry",
      "Stereochemistry",
      "Named Reactions and Synthetic Methods",
      "Pericyclic and Photochemical Reactions",
      "Bio‑organic Chemistry",
      "Physical Organic Chemistry",
      "Analytical Techniques in Chemistry",
    ],
  },

  "Civil Engineering": {
    paper1: [
      "Engineering Mathematics and Mechanics",
      "Structural Analysis",
      "Design of Concrete Structures",
      "Design of Steel Structures",
      "Construction Materials and Management",
    ],
    paper2: [
      "Fluid Mechanics and Open Channel Flow",
      "Hydrology and Irrigation Engineering",
      "Environmental Engineering – Water Supply and Wastewater",
      "Transportation Engineering",
      "Geotechnical Engineering",
    ],
  },

  "Commerce and Accountancy": {
    paper1: [
      "Financial Accounting",
      "Cost and Management Accounting",
      "Taxation – Direct and Indirect",
      "Auditing and Corporate Governance",
      "Financial Management",
    ],
    paper2: [
      "Organisation Theory and Behaviour",
      "Human Resource Management",
      "Industrial Relations",
      "Marketing Management",
      "Financial Markets and Institutions",
      "International Business",
    ],
  },

  Economics: {
    paper1: [
      "Microeconomic Theory",
      "Macroeconomic Theory",
      "Money, Banking and Finance",
      "International Trade and Finance",
      "Growth and Development",
    ],
    paper2: [
      "Indian Economy since Independence",
      "Planning and Economic Reforms",
      "Poverty, Inequality and Employment",
      "Agriculture, Industry and Services in India",
      "Public Finance in India",
      "External Sector and BoP of India",
    ],
  },

  "Electrical Engineering": {
    paper1: [
      "Circuit Theory",
      "Signals and Systems",
      "Electromagnetic Fields",
      "Analog and Digital Electronics",
      "Measurements and Instrumentation",
    ],
    paper2: [
      "Power Systems",
      "Electrical Machines",
      "Power Electronics and Drives",
      "Control Systems",
      "Microprocessors and Communication Systems",
    ],
  },

  Geology: {
    paper1: [
      "General Geology",
      "Geomorphology and Remote Sensing",
      "Structural Geology",
      "Paleontology",
      "Stratigraphy and Geodynamics",
    ],
    paper2: [
      "Mineralogy and Petrology",
      "Economic Geology",
      "Hydrogeology and Engineering Geology",
      "Environmental Geology",
    ],
  },

  Law: {
    paper1: [
      "Constitutional and Administrative Law",
      "International Law",
      "Law of Crimes – IPC and CrPC",
      "Law of Torts",
      "Law of Contracts and Specific Relief",
    ],
    paper2: [
      "Law of Property and Easement",
      "Law of Trusts and Equity",
      "Law of Negotiable Instruments and Banking",
      "Company Law and Partnership",
      "Contemporary Legal Developments and Human Rights",
    ],
  },

  Management: {
    paper1: [
      "Managerial Function and Process",
      "Organizational Behaviour",
      "Human Resource Management",
      "Financial Management",
      "Marketing Management",
      "Quantitative Techniques in Management",
    ],
    paper2: [
      "Production and Operations Management",
      "Management Information Systems",
      "Strategic Management",
      "International Business",
      "Entrepreneurship and Small Business Management",
    ],
  },

  Mathematics: {
    paper1: [
      "Algebra",
      "Real Analysis",
      "Complex Analysis",
      "Ordinary Differential Equations",
      "Linear Algebra",
    ],
    paper2: [
      "Partial Differential Equations",
      "Mechanics and Fluid Dynamics",
      "Numerical Analysis and Computer Programming",
      "Probability and Statistics",
      "Linear Programming",
    ],
  },

  "Mechanical Engineering": {
    paper1: [
      "Engineering Mechanics and Strength of Materials",
      "Theory of Machines",
      "Vibrations",
      "Design of Machine Elements",
      "Engineering Materials",
    ],
    paper2: [
      "Thermodynamics and Heat Transfer",
      "IC Engines, Refrigeration and Air‑conditioning",
      "Power Plant Engineering",
      "Manufacturing and Production Engineering",
      "Industrial Engineering and Operations Research",
    ],
  },

  "Medical Science": {
    paper1: [
      "Human Anatomy",
      "Physiology",
      "Biochemistry",
      "Pathology and Microbiology",
      "Pharmacology",
    ],
    paper2: [
      "General Medicine",
      "General Surgery",
      "Obstetrics and Gynaecology",
      "Paediatrics",
      "Community Medicine",
    ],
  },

  Philosophy: {
    paper1: [
      "Classical Indian Philosophy",
      "Neo‑Indian Thinkers",
      "Plato and Aristotle",
      "Rationalism and Empiricism",
      "Kant and Post‑Kantian Philosophy",
      "Ethics – Theories and Problems",
    ],
    paper2: [
      "Socio‑political Philosophy",
      "Philosophy of Religion",
      "Religious Pluralism and Secularism",
      "Humanism and Existentialism",
      "Contemporary Indian and Western Thinkers",
    ],
  },

  Physics: {
    paper1: [
      "Mechanics and General Properties of Matter",
      "Oscillations and Waves",
      "Electricity and Magnetism",
      "Thermal and Statistical Physics",
      "Relativity and Quantum Mechanics",
    ],
    paper2: [
      "Atomic and Molecular Physics",
      "Nuclear and Particle Physics",
      "Solid State Physics",
      "Electronics and Devices",
      "Classical and Quantum Optics",
    ],
  },

  "Political Science and International Relations": {
    paper1: [
      "Political Theory and Ideologies",
      "Indian Political Thought",
      "Western Political Thought",
      "Indian Constitution and Political System",
      "Comparative Politics",
    ],
    paper2: [
      "International Relations – Theories and Approaches",
      "India’s Foreign Policy",
      "Global Issues and Institutions",
      "Security, Strategy and World Order",
      "India and the World – Regional and Global Groupings",
    ],
  },

  Psychology: {
    paper1: [
      "Foundations of Psychology",
      "Biological Basis of Behaviour",
      "Sensation, Perception and Attention",
      "Learning and Memory",
      "Thinking, Intelligence and Motivation",
      "Personality and Theories",
      "Research Methods and Statistics",
    ],
    paper2: [
      "Applications of Psychology in Education",
      "Industrial and Organizational Psychology",
      "Clinical and Counseling Psychology",
      "Health and Community Psychology",
      "Psychological Testing and Measurement",
    ],
  },

  "Public Administration": {
    paper1: [
      "Introduction to Public Administration",
      "Administrative Thought",
      "Organisations – Structures and Theories",
      "Accountability and Control",
      "Administrative Law",
      "Personnel Administration",
      "Financial Administration",
    ],
    paper2: [
      "Evolution of Indian Administration",
      "Central, State and Local Government",
      "Public Sector Undertakings and Regulatory Bodies",
      "Planning and Economic Development",
      "Civil Services in India",
      "Policy Implementation and Good Governance",
    ],
  },

  Statistics: {
    paper1: [
      "Probability Theory",
      "Statistical Distributions",
      "Estimation and Testing of Hypotheses",
      "Correlation and Regression",
      "Sampling Theory",
    ],
    paper2: [
      "Design of Experiments",
      "Time Series Analysis",
      "Index Numbers",
      "Statistical Quality Control",
      "Demography and Vital Statistics",
    ],
  },

  Zoology: {
    paper1: [
      "Non‑Chordata and Chordata",
      "Cell Biology and Genetics",
      "Embryology and Developmental Biology",
      "Evolution and Animal Behaviour",
      "Biostatistics and Instrumentation",
    ],
    paper2: [
      "Comparative Anatomy and Physiology",
      "Ecology and Environmental Biology",
      "Economic Zoology and Applied Entomology",
      "Parasitology and Immunology",
      "Biotechnology and Conservation Biology",
    ],
  },

  // Literature optionals – can be filled later with period/author‑wise topics
  "Assamese Literature":  { paper1: [], paper2: [] },
  "Bengali Literature":   { paper1: [], paper2: [] },
  "Bodo Literature":      { paper1: [], paper2: [] },
  "Dogri Literature":     { paper1: [], paper2: [] },
  "Gujarati Literature":  { paper1: [], paper2: [] },
  "Hindi Literature":     { paper1: [], paper2: [] },
  "Kannada Literature":   { paper1: [], paper2: [] },
  "Kashmiri Literature":  { paper1: [], paper2: [] },
  "Konkani Literature":   { paper1: [], paper2: [] },
  "Maithili Literature":  { paper1: [], paper2: [] },
  "Malayalam Literature": { paper1: [], paper2: [] },
  "Manipuri Literature":  { paper1: [], paper2: [] },
  "Marathi Literature":   { paper1: [], paper2: [] },
  "Nepali Literature":    { paper1: [], paper2: [] },
  "Odia Literature":      { paper1: [], paper2: [] },
  "Punjabi Literature":   { paper1: [], paper2: [] },
  "Sanskrit Literature":  { paper1: [], paper2: [] },
  "Santali Literature":   { paper1: [], paper2: [] },
  "Sindhi Literature":    { paper1: [], paper2: [] },
  "Tamil Literature":     { paper1: [], paper2: [] },
  "Telugu Literature":    { paper1: [], paper2: [] },
  "Urdu Literature":      { paper1: [], paper2: [] },
  "English Literature":   { paper1: [], paper2: [] },
};
