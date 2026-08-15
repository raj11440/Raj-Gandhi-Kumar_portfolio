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
  Menu,
  X,
  ChevronDown,
  Code2,
  Brain,
  Zap,
  Award,
  BookOpen,
  Briefcase,
  Star,
  ArrowRight,
} from 'lucide-react';

const HERO_IMAGE = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663892409792/XvHHODNUhIRofGEX.png';
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
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
  ];

  const skills = {
    programming: ['Python', 'JavaScript', 'HTML', 'CSS', 'TypeScript', 'React'],
    aiData: ['Machine Learning', 'Data Analytics', 'TensorFlow', 'Pandas', 'NumPy', 'Data Visualization'],
    engineering: ['Digital Communication', 'Networking', 'MATLAB', 'Electronics', 'Signal Processing', 'Embedded Systems'],
  };

  const projects = [
    {
      title: 'Hospital Readmission Prediction',
      description: 'AI-powered system predicting patient readmission risk using ML algorithms. Achieved 87.6% accuracy with comprehensive data analytics.',
      image: PROJECT_IMAGES.hospital,
      tech: ['Python', 'Machine Learning', 'Data Analytics', 'TensorFlow'],
      github: '#',
      live: '#',
    },
    {
      title: 'Student AI Hub',
      description: 'Collaborative learning platform with AI chatbot, code editor, and curated resources for student development.',
      image: PROJECT_IMAGES.aiHub,
      tech: ['React', 'Python', 'AI/ML', 'Web Development'],
      github: '#',
      live: '#',
    },
    {
      title: 'Face Pattern Recognition System',
      description: 'Computer vision system for face detection and pattern analysis with 92% recognition accuracy.',
      image: PROJECT_IMAGES.faceRecognition,
      tech: ['Python', 'OpenCV', 'Deep Learning', 'Computer Vision'],
      github: '#',
      live: '#',
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Responsive portfolio showcasing projects and skills with modern design and smooth interactions.',
      image: HERO_IMAGE,
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Web Design'],
      github: '#',
      live: '#',
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for real-time data visualization and business intelligence insights.',
      image: HERO_IMAGE,
      tech: ['React', 'Recharts', 'Data Visualization', 'Analytics'],
      github: '#',
      live: '#',
    },
  ];

  const education = [
    {
      degree: 'B.Tech in Electronics & Communication Engineering',
      institution: 'Maharaja Surajmal Institute of Technology (MSIT), Delhi',
      year: '2022 - 2026',
      details: 'Specialization in Digital Communication and Signal Processing',
    },
    {
      degree: 'Diploma in Electronics & Communication Engineering',
      institution: 'CRRIT, Delhi',
      year: '2019 - 2022',
      details: 'Foundation in electronics, networking, and embedded systems',
    },
    {
      degree: '12th Grade',
      institution: 'Central Board of Secondary Education (CBSE)',
      year: '2018 - 2019',
      details: 'Science Stream - PCM',
    },
    {
      degree: '10th Grade',
      institution: 'Central Board of Secondary Education (CBSE)',
      year: '2016 - 2017',
      details: 'General Education',
    },
  ];

  const experience = [
    {
      title: 'Intern - Electronics & Networking',
      company: 'Delhi Metro Rail Corporation (DMRC)',
      duration: '3 months',
      description: 'Worked on networking infrastructure and electronic systems. Gained hands-on experience with real-world engineering challenges.',
    },
  ];

  const certifications = [
    'Python for Data Science - Coursera',
    'Machine Learning Specialization - Andrew Ng',
    'Web Development Bootcamp - Udemy',
    'Digital Signal Processing - NPTEL',
    'Embedded Systems Fundamentals - LinkedIn Learning',
  ];

  const achievements = [
    'Top 10% in B.Tech Program',
    'Winner - Inter-College Hackathon 2024',
    'Published Research Paper on AI in Healthcare',
    'AWS Certified Cloud Practitioner',
    'Selected for Google Summer of Code 2024',
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
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
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
                <Button variant="outline" className="w-full" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500" size="sm">
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
              B.Tech Electronics & Communication Engineering student at MSIT, Delhi. Passionate about building intelligent systems, data-driven solutions, and innovative software. Experienced in Python, Machine Learning, Web Development, and embedded systems.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 h-12">
                <Briefcase className="w-4 h-4 mr-2" />
                Hire Me
              </Button>
              <Button variant="outline" className="px-6 h-12">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="#" className="p-3 bg-slate-100 hover:bg-blue-100 rounded-lg transition-colors text-slate-700 hover:text-blue-600">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-slate-100 hover:bg-blue-100 rounded-lg transition-colors text-slate-700 hover:text-blue-600">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-slate-100 hover:bg-blue-100 rounded-lg transition-colors text-slate-700 hover:text-blue-600">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-2xl blur-3xl opacity-20" />
            <img
              src={HERO_IMAGE}
              alt="Hero"
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
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
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">About Me</h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                I'm a passionate ECE engineering student with a strong foundation in electronics, networking, and digital communication. My journey has evolved from understanding hardware fundamentals to exploring the intersection of AI, data science, and software development.
              </p>
              <p>
                At MSIT, Delhi, I've developed expertise in Python, machine learning, and web technologies. My internship at Delhi Metro Rail Corporation provided practical experience with real-world engineering challenges and networking infrastructure.
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
      </section>

      {/* Education Timeline */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Education</h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <Card key={idx} className="p-6 border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
                    <p className="text-blue-600 font-semibold">{edu.institution}</p>
                  </div>
                  <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{edu.year}</span>
                </div>
                <p className="text-slate-600">{edu.details}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Programming */}
            <Card className="p-6 hover:shadow-lg transition-all hover:border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Code2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Programming</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            {/* AI & Data Science */}
            <Card className="p-6 hover:shadow-lg transition-all hover:border-cyan-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-cyan-100 rounded-lg">
                  <Brain className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">AI & Data Science</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.aiData.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            {/* Engineering */}
            <Card className="p-6 hover:shadow-lg transition-all hover:border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Engineering</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.engineering.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
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

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <Card key={idx} className="p-4 flex items-center gap-4 hover:shadow-lg transition-shadow hover:border-blue-200">
                <Award className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <p className="text-slate-700 font-medium">{cert}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-all hover:scale-105 duration-300">
                <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <p className="text-slate-700 font-medium">{achievement}</p>
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
              <a href="mailto:raj.gandhi@example.com" className="font-semibold text-slate-900 hover:text-blue-600">
                raj.gandhi@example.com
              </a>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Phone className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
              <p className="text-sm text-slate-600 mb-2">Phone</p>
              <a href="tel:+919876543210" className="font-semibold text-slate-900 hover:text-cyan-600">
                +91 98765 43210
              </a>
            </Card>
          </div>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <p className="text-sm text-slate-600 mb-2">Location</p>
            <p className="font-semibold text-slate-900">Delhi, India</p>
          </Card>

          <div className="flex justify-center gap-4 mt-8">
            <a href="#" className="p-4 bg-slate-100 hover:bg-blue-100 rounded-lg transition-colors text-slate-700 hover:text-blue-600">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="p-4 bg-slate-100 hover:bg-blue-100 rounded-lg transition-colors text-slate-700 hover:text-blue-600">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-4 bg-slate-100 hover:bg-blue-100 rounded-lg transition-colors text-slate-700 hover:text-blue-600">
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
