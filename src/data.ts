import { Education, WorkExperience, Certification, AcademicProject, SkillCategory } from './types';

export const personalInfo = {
  name: 'Elijah David Lopez',
  tagline: 'Electronics & Communications Engineering Student',
  specialization: 'Embedded Systems, Networking, and Software Development',
  email: 'elijahdavid.lopez.eng@ust.edu.ph',
  phone: '0968-310-4801',
  location: 'Valenzuela City, Metro Manila, PH 1400',
  linkedin: '#', // Placeholder as not listed on CV, can be styled elegantly
  github: '#',
  gradYear: '2027',
  about: 'Electronics & Communications Engineering student at the University of Santo Tomas, specializing in Embedded Systems, Cisco Networking, and software implementations. Adept at leveraging technical concepts—from microcontrollers to enterprise-grade switching and routing—to streamline local government IT operations, design efficient physical and logical topologies, and structure data workflows.',
};

export const educationHistory: Education[] = [
  {
    institution: 'University of Santo Tomas',
    degree: 'Bachelor of Science in Electronics and Communications Engineering',
    location: 'España, Manila, Philippines',
    period: 'Expected Graduation: May 2027',
    gpa: 'Current CGPA: 2.2135 (UST Grading System: 1.00 is Excellent, 3.00 is Passing)',
    scholarship: 'DOST SEI Undergrad Scholar (2023 - Present)',
    details: [
      'Recipient of the highly prestigious Department of Science and Technology - Science Education Institute (DOST-SEI) Merit Undergraduate Scholarship for STEM excellence.',
      'Active coursework in Signals and Systems, Basic Communications, Advanced Networking, MATLAB Simulation, and Foundational Programming.',
    ],
  },
];

export const workExperience: WorkExperience[] = [
  {
    role: 'IT Assistant & Operations Intern (Work Immersion)',
    company: 'Local Government Unit / IT Department',
    period: 'March 2023 - April 2023',
    location: 'Valenzuela City, Metro Manila',
    responsibilities: [
      'Maintained a precise inventory of physical IT assets and networking equipment, facilitating timely hardware updates and proactive component replacements.',
      'Supported municipal staff in troubleshooting local network connectivity, workstation configuration, and software environments, reducing workstation downtime.',
      'Sorted, structured, and organized administrative databases, spreadsheets, and municipal performance reports using advanced office automation tools.',
      'Gained valuable hands-on experience in public-sector software systems, successfully increasing personal technical proficiency in hardware and network maintenance.',
      'Assisted IT administrators in creating and managing critical operational timelines, scheduling routine server checks, and coordinating upgrade projects.',
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    issueDate: 'June 23, 2026',
    skillsVerified: [
      'Configure VLANs & Inter-VLAN Routing (Layer 3 Switches)',
      'Troubleshoot VLAN Routing and Mitigate LAN Attacks',
      'Redundancy Management via STP (Spanning Tree Protocol) & EtherChannel',
      'Dynamic Addressing Allocation (DHCPv4 & DHCPv6)',
      'WLAN (Wireless LAN) configuration using a Wireless LAN Controller (WLC)',
      'IPv4 and IPv6 Static Routing Protocol Configuration',
    ],
    verificationUrl: 'https://www.credly.com/badges/816c1f11-dfca-41f4-b078-368a38eef1ca/public_url',
  },
  {
    name: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    issueDate: 'January 27, 2026',
    skillsVerified: [
      'IP Subnetting and VLSM Calculations',
      'OSI and TCP/IP Model Foundations',
      'Basic Switch and Router Device Configuration',
      'Cisco IOS Commands & Command Line Interface',
      'Physical & Logical Network Topology Design',
    ],
    verificationUrl: 'https://www.credly.com/badges/9fb89662-b6de-4027-88eb-6bec639855ed/public_url',
  },
];

export const academicProjects: AcademicProject[] = [
  {
    title: 'Spotify Charts 2023 Exploratory Data Analysis',
    period: 'November 2024',
    technologies: ['Jupyter Notebook', 'Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    description: 'An exhaustive exploratory data science and statistical analysis project using public streaming datasets to evaluate listening trends and audio characteristics from top-ranking global tracks.',
    contributions: [
      'Performed intensive data cleaning, handling missing values, standardizing track names, and parsing complex numeric streaming volumes in Python.',
      'Conducted multi-dimensional sorting and group-by operations to isolate top-performing artists, danceability scores, and key signatures.',
      'Generated elegant data visualizations (box plots, correlation heatmaps, histograms) comparing audio attributes to chart longevity.',
    ],
    category: 'software',
    githubUrl: 'https://github.com/EliLopez4774/SpotifyCharts2023EDA_Lopez',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Networking',
    skills: [
      { name: 'Switching & Routing Essentials', level: 'Proficient', tags: ['VLANs', 'Inter-VLAN', 'OSPF', 'Static Routing', 'DHCP'] },
      { name: 'LAN Redundancy & Security', level: 'Proficient', tags: ['STP', 'EtherChannel', 'Port Security', 'DHCP Snooping'] },
      { name: 'WLAN & Addressing Services', level: 'Intermediate', tags: ['WLC', 'IPv4 Subnetting', 'VLSM', 'IPv6'] },
    ],
  },
  {
    category: 'Programming',
    skills: [
      { name: 'Python & Data Science', level: 'Intermediate', tags: ['Python', 'Jupyter Notebook', 'Pandas', 'Matplotlib', 'Seaborn'] },
      { name: 'C++ Control Logic', level: 'Foundational', tags: ['C++', 'Control Structures', 'Array Parsing', 'Logic Gates'] },
      { name: 'Mathematical Signal Modeling', level: 'Intermediate', tags: ['MATLAB', 'Simulink', 'Wave Modeling', 'Filter Design'] },
    ],
  },
  {
    category: 'Productivity & Engineering Tools',
    skills: [
      { name: 'IT Infrastructure Support', level: 'Intermediate', tags: ['Hardware Inventory', 'Network Diagnostics', 'Technical Support'] },
      { name: 'Administrative Automation', level: 'Proficient', tags: ['MS Excel', 'Google Workspace', 'Spreadsheets', 'Data Sorting'] },
      { name: 'Circuit Design & Lab Instrumentation', level: 'Intermediate', tags: ['Multisim', 'Oscilloscope', 'BJT Amplifiers', 'Thyristors'] },
    ],
  },
];
