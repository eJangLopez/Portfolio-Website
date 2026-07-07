import { jsPDF } from 'jspdf';

export function downloadCV() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // Margins & initial cursor
  const marginX = 18;
  let currentY = 18;

  // Title: ELIJAH DAVID LOPEZ
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(22);
  const titleText = 'ELIJAH DAVID LOPEZ';
  const titleWidth = doc.getTextWidth(titleText);
  const centerX = (210 - titleWidth) / 2;
  doc.text(titleText, centerX, currentY);
  currentY += 8;

  // Contact details
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  const contactText = 'elijahdavid.lopez.eng@ust.edu.ph | 0968-310-4801 | Valenzuela City, Metro Manila PH 1400';
  const contactWidth = doc.getTextWidth(contactText);
  const contactX = (210 - contactWidth) / 2;
  doc.text(contactText, contactX, currentY);
  currentY += 4;

  // Top divider line (styled like a clean modern resume)
  doc.setLineWidth(0.3);
  doc.setDrawColor(180, 180, 180);
  doc.line(marginX, currentY, 210 - marginX, currentY);
  currentY += 8;

  // Helper to add elegant section headers
  const addSectionHeader = (title: string) => {
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.text(title, marginX, currentY);
    currentY += 2;
    
    // Thin charcoal gray section separator line
    doc.setLineWidth(0.25);
    doc.setDrawColor(120, 120, 120);
    doc.line(marginX, currentY, 210 - marginX, currentY);
    currentY += 6;
  };

  // --- SUMMARY ---
  addSectionHeader('SUMMARY');
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  const summaryText = 'Currently in junior year with a practical experience in basic network configuration, coding, and management, obtained through work immersion and completed university coursework. Adept at using technical skills to streamline local government IT operations, optimize project schedules, and improve team productivity.';
  const summaryLines = doc.splitTextToSize(summaryText, 210 - 2 * marginX);
  
  // Set line spacing (leading) explicitly by multiplying line index
  summaryLines.forEach((line: string) => {
    doc.text(line, marginX, currentY);
    currentY += 4.5;
  });
  currentY += 5;

  // --- EDUCATION ---
  addSectionHeader('EDUCATION');
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('University of Santo Tomas – Manila, Metro Manila, Philippines | Bachelor of Science', marginX, currentY);
  currentY += 4.5;
  
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('Electronics and Communications Engineering, Expected in 05/2027', marginX, currentY);
  currentY += 4.5;

  // Bullet items
  doc.text('•  Current CGPA: 1.937 (1.0–5.0 system)', marginX + 4, currentY);
  currentY += 4.5;
  doc.text('•  DOST SEI Undergrad Scholarship, 2023, from Department of Science and Technology SEI', marginX + 4, currentY);
  currentY += 8;

  // --- WORK EXPERIENCE ---
  addSectionHeader('WORK EXPERIENCE');
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('Internship (Work Immersion) | 03/2023 to 04/2023', marginX, currentY);
  currentY += 5;

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);

  const experienceBullets = [
    'Maintained inventory of IT equipment, facilitating timely updates and replacements.',
    'Supported staff members in their daily tasks, reducing workload burden and allowing for increased focus on higher-priority assignments.',
    'Sorted and organized files, spreadsheets, and reports.',
    'Gained hands-on experience in various software programs, increasing proficiency and expanding technical skill set.',
    'Created and managed project plans, schedules, and timelines.'
  ];

  experienceBullets.forEach(bullet => {
    const wrapped = doc.splitTextToSize(`•  ${bullet}`, 210 - 2 * marginX - 4);
    wrapped.forEach((line: string) => {
      doc.text(line, marginX + 4, currentY);
      currentY += 4.5;
    });
    currentY += 1;
  });
  currentY += 4;

  // --- KEY SKILLS ---
  addSectionHeader('KEY SKILLS');
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  
  const leftSkills = [
    '•  Basic Network Configuration (Cisco Devices)',
    '•  Foundational Level Coding (Python, C++, MATLAB)'
  ];
  const rightSkills = [
    '•  Computer Software Skills (MS Office Tools,',
    '    Google Office Tools)'
  ];

  let tempY1 = currentY;
  leftSkills.forEach(skill => {
    doc.text(skill, marginX + 4, tempY1);
    tempY1 += 4.5;
  });

  let tempY2 = currentY;
  rightSkills.forEach(skill => {
    doc.text(skill, 112, tempY2);
    tempY2 += 4.5;
  });

  currentY = Math.max(tempY1, tempY2) + 5;

  // --- CERTIFICATIONS ---
  addSectionHeader('CERTIFICATIONS');
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('•  CCNA: Introduction to Networks, Cisco Networking Academy | 01/27/2026', marginX + 4, currentY);
  currentY += 8;

  // --- ACADEMIC PROJECTS ---
  addSectionHeader('ACADEMIC PROJECTS');
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('•  Spotify Charts 2023 Exploratory Data Analysis (Jupyter, Python) | 11/06/2024', marginX + 4, currentY);
  currentY += 4.5;
  
  doc.setFont('Helvetica', 'normal');
  doc.text('o  Data Cleaning, Sorting, Data Visualization', marginX + 8, currentY);

  // Open the PDF in a new window/tab instead of directly downloading it
  const blobUrl = doc.output('bloburl');
  window.open(blobUrl, '_blank');
}
