import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  GraduationCap,
  School,
  Award,
  Menu,
  X,
  ChevronDown,
  Code2,
  Brain,
  Zap,
  Briefcase,
} from 'lucide-react';

const HERO_IMAGE = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663892409792/XvHHODNUhIRofGEX.png';
const PROFILE_IMAGE = '/manus-storage/photo_85db27d1.webp';
const PROJECT_IMAGES = {
  hospital: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663892409792/fIlvQuMTtGKCVgkt.png',
  aiHub: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663892409792/SnVatSkHrzKhJNXx.png',
  faceRecognition: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663892409792/ONWUhbZcqgHhgwNg.png',
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  const skillGroups = [
    {
      title: 'Core Development',
      subtitle: 'Programming foundations',
      accent: 'blue',
      skills: [
        { name: 'Python', level: 'Basic', logo: '/manus-storage/python_827bd3ca.svg' },
        { name: 'HTML', level: 'Basic', logo: '/manus-storage/html5_a440d297.svg' },
        { name: 'CSS', level: 'Basic', logo: '/manus-storage/css_9d7ce49a.svg' },
        { name: 'JavaScript', level: 'Basic', logo: '/manus-storage/javascript_850fc213.svg' },
        { name: 'GitHub', level: 'Version control', logo: '/manus-storage/github_457bd28f.svg' },
      ],
    },
    {
      title: 'Data & Engineering',
      subtitle: 'Conceptual and academic exposure',
      accent: 'cyan',
      skills: [
        { name: 'Machine Learning', level: 'Concepts', logo: '/manus-storage/scikitlearn_3e897336.svg' },
        { name: 'Data Analytics', level: 'Basics', logo: '/manus-storage/googleanalytics_cf0fb32e.svg' },
        { name: 'Google Colab', level: 'Notebook workflow', logo: '/manus-storage/googlecolab_ab719db1.svg' },
        { name: 'MATLAB', level: 'Academic', logo: '/manus-storage/matlab_2f3839ea.png' },
        { name: 'Microsoft Excel', level: 'Productivity', logo: '/manus-storage/excel_7e19ac79.png' },
      ],
    },
    {
      title: 'AI Tools & Workflow',
      subtitle: 'AI-assisted building and ideation',
      accent: 'purple',
      skills: [
        { name: 'AI Tools', level: 'Practical use' },
        { name: 'ChatGPT', level: 'AI assistant', logo: '/manus-storage/chatgpt_27fda54e.png' },
        { name: 'Gemini', level: 'AI assistant', logo: '/manus-storage/googlegemini_07f0b5b6.svg' },
        { name: 'AI-assisted Projects', level: 'Development workflow' },
        { name: 'Prompt Engineering', level: 'Prompt design' },
      ],
    },
  ];

  const projects = [
    {
      title: 'Hospital Readmission Prediction',
      description: 'Machine-learning project focused on analyzing healthcare data and estimating the likelihood of patient readmission.',
      image: PROJECT_IMAGES.hospital,
      tech: ['Python', 'Machine Learning', 'Data Analytics'],
      github: '#',
      live: '#',
    },
    {
      title: 'Student AI Hub',
      description: 'Collaborative learning platform with AI chatbot, code editor, and curated resources for student development.',
      image: PROJECT_IMAGES.aiHub,
      tech: ['HTML', 'CSS', 'JavaScript', 'AI/ML'],
      github: '#',
      live: '#',
    },
    {
      title: 'Face Pattern Recognition System',
      description: 'AI/ML project exploring face detection, feature patterns, and recognition workflows.',
      image: PROJECT_IMAGES.faceRecognition,
      tech: ['Python', 'Machine Learning', 'AI/ML'],
      github: '#',
      live: '#',
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Responsive portfolio showcasing projects and skills with modern design and smooth interactions.',
      image: HERO_IMAGE,
      tech: ['HTML', 'CSS', 'JavaScript', 'Web Design'],
      github: '#',
      live: '#',
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for real-time data visualization and business intelligence insights.',
      image: HERO_IMAGE,
      tech: ['Python', 'Data Analytics', 'Data Visualization'],
      github: '#',
      live: '#',
    },
  ];

  const education = [
    {
      degree: 'B.Tech in Electronics & Communication Engineering',
      institution: 'Maharaja Surajmal Institute of Technology (MSIT), Janakpuri, Delhi',
      year: '2024 - Present',
      details: 'Guru Gobind Singh Indraprastha University (GGSIPU) • Lateral Entry • 6th semester examination completed',
      logo: '/manus-storage/ggsipu-logo_38d992ff.png',
      logoAlt: 'GGSIPU logo',
    },
    {
      degree: 'Diploma in Electronics & Communication Engineering',
      institution: 'Chhotu Ram Rural Institute of Technology (CRRIT), Kanjhawala, Delhi',
      year: 'Completed 2024',
      details: 'Board of Technical Education (BTE), Delhi • First Division • 1,750/2,540 marks • 68.89%',
      logo: '/manus-storage/crrit-logo_1386ae5d.png',
      logoAlt: 'CRRIT logo',
    },
    {
      degree: 'Senior Secondary (Class 12) — Humanities',
      institution: 'Govt. Sarvodaya Boys SSS No. 2, Shakarpur, Delhi',
      year: '2021',
      details: 'CBSE • Core five aggregate: 58.0% • Web Application: 75/100 • Result: Pass',
      logo: '/manus-storage/cbse-logo_a0b974d5.png',
      logoAlt: 'CBSE logo',
    },
    {
      degree: 'Secondary School Examination (Class 10)',
      institution: 'Govt. Sarvodaya Boys SSS No. 2, Shakarpur, Delhi',
      year: '2019',
      details: 'CBSE • Core five aggregate: 49.2% • Information Technology: 74/100 • Result: Pass',
      logo: '/manus-storage/cbse-logo_a0b974d5.png',
      logoAlt: 'CBSE logo',
    },
  ];

  const experience = [
    {
      title: 'Telecom Intern',
      company: 'Delhi Metro Rail Corporation (DMRC)',
      duration: '2023',
      description: 'Completed an internship in the Telecom department, gaining practical exposure to telecom and networking systems used in metro operations.',
    },
  ];

  const additionalQualifications = [
    {
      title: 'Diploma in Information Technology',
      issuer: 'Dr. Bhim Rao Ambedkar Technical Training Institute',
      location: 'Vaishali, Ghaziabad, Uttar Pradesh',
      duration: 'One-year course',
      result: 'First Division • Grade A+',
      issued: '20 March 2021',
    },
    {
      title: 'NCC Certificate “A”',
      issuer: 'National Cadet Corps — Delhi Directorate',
      location: 'Unit: 3 DBN • Rank: Cadet (CDT)',
      duration: 'Examination: 2019',
      result: 'Certificate A — Passed',
      issued: 'September 2020',
      logo: '/manus-storage/ncc-logo_bd5063f4.png',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-200/50'
            : 'bg-transparent'
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            RGK
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex gap-2">
            <Button asChild variant="outline" size="sm">
              <a href="https://drive.google.com/file/d/1tUHMJUhZdnIIcbe1p2OZhBuM7w_SEqdf/view?usp=drive_link" target="_blank" rel="noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </Button>
            <Button onClick={() => scrollToSection('contact')} size="sm" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
            <div className="container py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 space-y-2">
                <Button asChild variant="outline" className="w-full" size="sm">
                  <a href="https://drive.google.com/file/d/1tUHMJUhZdnIIcbe1p2OZhBuM7w_SEqdf/view?usp=drive_link" target="_blank" rel="noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </a>
                </Button>
                <Button onClick={() => scrollToSection('contact')} className="w-full bg-gradient-to-r from-blue-600 to-cyan-500" size="sm">
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent pointer-events-none" />
        <div className="container grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Welcome to my portfolio</p>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                Raj Gandhi
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Kumar
                </span>
              </h1>
              <p className="text-xl text-slate-600">ECE Engineer | Software Developer | AI/ML Enthusiast</p>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              B.Tech Electronics & Communication Engineering student at MSIT, GGSIPU, admitted through lateral entry after completing a diploma in ECE. Skilled in Python, web technologies, machine learning, data analytics, MATLAB, and networking.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 h-12">
                <Briefcase className="w-4 h-4 mr-2" />
                Hire Me
              </Button>
              <Button asChild variant="outline" className="px-6 h-12">
                <a href="https://drive.google.com/file/d/1tUHMJUhZdnIIcbe1p2OZhBuM7w_SEqdf/view?usp=drive_link" target="_blank" rel="noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/raj11440" target="_blank" rel="noreferrer" aria-label="Raj Gandhi Kumar on GitHub" className="p-3 bg-slate-100 hover:bg-blue-100 rounded-lg transition-colors text-slate-700 hover:text-blue-600">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/raj-gandhi-k-141756199/" target="_blank" rel="noreferrer" aria-label="Raj Gandhi Kumar on LinkedIn" className="p-3 bg-slate-100 hover:bg-blue-100 rounded-lg transition-colors text-slate-700 hover:text-blue-600">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:rg7065455@gmail.com" aria-label="Email Raj Gandhi Kumar" className="p-3 bg-slate-100 hover:bg-blue-100 rounded-lg transition-colors text-slate-700 hover:text-blue-600">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative hidden md:flex justify-end">
            <div className="absolute inset-8 bg-gradient-to-br from-blue-500 to-cyan-300 rounded-[2rem] blur-3xl opacity-25" />
            <div className="absolute -top-5 right-8 h-24 w-24 rounded-2xl border border-blue-200 bg-blue-100/60 -rotate-6" />
            <div className="absolute -bottom-5 -right-3 h-32 w-32 rounded-full bg-cyan-300/30 blur-xl" />
            <img
              src={PROFILE_IMAGE}
              alt="Raj Gandhi Kumar"
              className="relative z-10 aspect-[4/5] w-full max-w-md rounded-[2rem] border-8 border-white bg-white object-cover object-top shadow-2xl ring-1 ring-slate-200"
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-blue-600" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative order-2 mx-auto w-full max-w-md lg:mx-0">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-100 via-cyan-50 to-purple-100 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 shadow-xl">
                <img
                  src="/manus-storage/raj-cartoon-about-angle_2143594a.png"
                  alt="Professional cartoon portrait of Raj Gandhi Kumar facing toward the About Me text"
                  className="aspect-square w-full rounded-[1.55rem] object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-3 rounded-2xl border border-blue-100 bg-white/95 px-5 py-3 shadow-lg backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Engineer in progress</p>
                <p className="mt-1 text-sm font-medium text-slate-700">ECE • Software • AI/ML</p>
              </div>
            </div>

            <div className="order-1">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">The person behind the projects</p>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">About Me</h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                I'm Raj Gandhi Kumar, born on 02 October 2002, and currently pursuing B.Tech in Electronics & Communication Engineering at Maharaja Surajmal Institute of Technology, affiliated with GGSIPU. I entered the program through lateral entry after completing my ECE diploma.
              </p>
              <p>
                I have completed my 6th semester examination and continue to build practical skills in Python, HTML, CSS, JavaScript, machine learning, data analytics, MATLAB, networking, and AI/ML. My 2023 internship in DMRC's Telecom department provided exposure to professional telecom and networking systems.
              </p>
              <p>
                I'm driven by the challenge of building intelligent systems that solve real problems. Whether it's predicting healthcare outcomes, creating collaborative learning platforms, or developing computer vision applications, I approach each project with curiosity and precision.
              </p>
              <p>
                Currently seeking opportunities as a Software Engineer, Data Analyst, or AI/ML Engineer where I can contribute my technical skills and continue learning from industry experts.
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Education</h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <Card key={idx} className="p-6 border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
                    {edu.logo ? (
                      <img src={edu.logo} alt={edu.logoAlt} className="h-full w-full object-contain" />
                    ) : idx === 2 ? (
                      <GraduationCap className="h-8 w-8 text-blue-600" aria-label="Senior secondary education" />
                    ) : (
                      <School className="h-8 w-8 text-blue-600" aria-label="Secondary education" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
                        <p className="text-blue-600 font-semibold">{edu.institution}</p>
                      </div>
                      <span className="w-fit shrink-0 rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-500">{edu.year}</span>
                    </div>
                    <p className="text-slate-600">{edu.details}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Qualifications & Credentials */}
      <section className="bg-gradient-to-b from-white to-slate-50 pb-20">
        <div className="container">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Verified credentials</p>
              <h2 className="text-3xl font-bold text-slate-900">Additional Qualifications & Achievements</h2>
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {additionalQualifications.map((qualification) => (
              <Card key={qualification.title} className="overflow-hidden border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center">
                <div className={`flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl shadow-lg ${qualification.logo ? 'border border-slate-200 bg-white p-2 shadow-slate-200' : 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-blue-200'}`}>
                  {qualification.logo ? (
                    <img src={qualification.logo} alt={`${qualification.title} logo`} className="h-full w-full object-contain" />
                  ) : (
                    <Award className="h-8 w-8" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{qualification.title}</h3>
                      <p className="font-semibold text-blue-600">{qualification.issuer}</p>
                      <p className="mt-1 text-sm text-slate-500">{qualification.location}</p>
                    </div>
                    <span className="w-fit shrink-0 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">Issued {qualification.issued}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">{qualification.duration}</span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">{qualification.result}</span>
                  </div>
                </div>
              </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Technical toolkit</p>
            <h2 className="text-4xl font-bold text-slate-900">Skills & AI Tools</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              A transparent view of my current foundations, academic exposure, and AI-assisted development workflow.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {skillGroups.map((group, groupIndex) => (
              <Card key={group.title} className="overflow-hidden border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className={`h-1.5 ${group.accent === 'blue' ? 'bg-blue-600' : group.accent === 'cyan' ? 'bg-cyan-500' : 'bg-purple-500'}`} />
                <div className="p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${group.accent === 'blue' ? 'bg-blue-50 text-blue-600' : group.accent === 'cyan' ? 'bg-cyan-50 text-cyan-600' : 'bg-purple-50 text-purple-600'}`}>
                      {groupIndex === 0 ? <Code2 className="h-5 w-5" /> : groupIndex === 1 ? <Brain className="h-5 w-5" /> : <Zap className="h-5 w-5" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{group.title}</h3>
                      <p className="text-sm text-slate-500">{group.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="group/skill flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50/70 p-3 transition-all duration-200 hover:border-blue-200 hover:bg-white hover:shadow-md">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
                          {skill.logo ? (
                            <img src={skill.logo} alt={`${skill.name} logo`} className="h-full w-full object-contain" />
                          ) : skill.name === 'Prompt Engineering' ? (
                            <Zap className="h-6 w-6 text-purple-600" />
                          ) : skill.name === 'AI-assisted Projects' ? (
                            <Code2 className="h-6 w-6 text-purple-600" />
                          ) : (
                            <Brain className="h-6 w-6 text-purple-600" />
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-slate-900">{skill.name}</p>
                          <p className="text-sm text-slate-500">{skill.level}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all hover:scale-105 duration-300">
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <Card key={idx} className="p-6 border-l-4 border-l-cyan-500 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                    <p className="text-cyan-600 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{exp.duration}</span>
                </div>
                <p className="text-slate-600">{exp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-cyan-50">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Let's Connect</h2>
            <p className="text-lg text-slate-600">
              I'm always interested in hearing about new opportunities and projects. Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <p className="text-sm text-slate-600 mb-2">Email</p>
              <a href="mailto:rg7065455@gmail.com" className="font-semibold text-slate-900 transition-colors hover:text-blue-600">
                rg7065455@gmail.com
              </a>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Phone className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
              <p className="text-sm text-slate-600 mb-2">Phone</p>
              <a href="tel:+919416255389" className="font-semibold text-slate-900 transition-colors hover:text-cyan-600">
                +91 94162 55389
              </a>
            </Card>
          </div>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <p className="text-sm text-slate-600 mb-2">Location</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=3F%2F615%2C%201st%20Floor%2C%20Vaishali%20Sector%203%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201010"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-slate-900 transition-colors hover:text-purple-600"
            >
              3F/615, 1st Floor, Vaishali Sector 3,<br />Ghaziabad, Uttar Pradesh 201010
            </a>
          </Card>

          <div className="flex justify-center gap-4 mt-8">
            <a href="https://github.com/raj11440" target="_blank" rel="noreferrer" aria-label="Raj Gandhi Kumar on GitHub" className="p-4 bg-slate-100 hover:bg-blue-100 rounded-lg transition-colors text-slate-700 hover:text-blue-600">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/raj-gandhi-k-141756199/" target="_blank" rel="noreferrer" aria-label="Raj Gandhi Kumar on LinkedIn" className="p-4 bg-slate-100 hover:bg-blue-100 rounded-lg transition-colors text-slate-700 hover:text-blue-600">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:rg7065455@gmail.com" aria-label="Email Raj Gandhi Kumar" className="p-4 bg-slate-100 hover:bg-blue-100 rounded-lg transition-colors text-slate-700 hover:text-blue-600">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8">
        <div className="container text-center">
          <p className="mb-2">
            © 2026 Raj Gandhi Kumar. All rights reserved.
          </p>
          <p className="text-sm text-slate-400">
            Crafted with care for placement success • Designed for recruiters from TCS, Infosys, Wipro, Amazon, Microsoft, Google & more
          </p>
        </div>
      </footer>
    </div>
  );
}
