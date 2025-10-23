// import { CommonModule } from '@angular/common';
// import { Component, inject,Signal } from '@angular/core';
// import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
// ...existing code...
import { CommonModule, NgFor } from '@angular/common';
import { Component, inject, HostListener, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// ...existing code...

interface Skill {
  name: string;
  percentage: string;
  icon: string;
}

interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
}

interface Education {
  year: string;
  degree: string;
  institution: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string;
  techList: string[];
  image: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private fb = inject(FormBuilder);
  contactForm: FormGroup;

  skills = signal<Skill[]>([
    { name: 'ASP.NET Core', percentage: '85%', icon: 'bi bi-dotnet' },
    { name: 'C# Programming', percentage: '90%', icon: 'bi bi-code-slash' },
    { name: 'Angular', percentage: '80%', icon: 'bi bi-bootstrap' },
    { name: 'SQL Server', percentage: '75%', icon: 'bi bi-database' },
    { name: 'Entity Framework', percentage: '80%', icon: 'bi bi-diagram-3' },
    { name: 'Web API', percentage: '85%', icon: 'bi bi-cloud' },
    { name: 'TypeScript', percentage: '75%', icon: 'bi bi-file-code' },
    { name: 'HTML/CSS', percentage: '90%', icon: 'bi bi-layout-text-window' }
  ]);

  experiences = signal<Experience[]>([
    // { 
    //   period: '2023 - Present', 
    //   title: '.NET Full Stack Developer', 
    //   company: 'Freelance / Self-Employed',
    //   description: 'Developing full-stack web applications using ASP.NET Core MVC, Web API, Angular, and SQL Server. Building responsive UIs and robust backend services.'
    // }
    { 
    period: 'May 2024 – July 2024', 
    title: 'Hotel Management System Developer',
    company: 'Hindsol Software Company',
    description: 'Developed a Hotel Management System with secure user authentication, role-based access, room booking, customer management, and automated billing using ASP.NET Core MVC, SQL Server, and Bootstrap. Delivered a responsive and maintainable solution following OOP and layered architecture.'
  },
  {
    period: 'July 2024 – July 2025', // <-- Show as 1 year
    title: 'Full Stack Developer',
    company: 'MicroHind Software, Mumbai',
    description: 'Developed and enhanced an E-Commerce platform: https://enthralaviation-demo.microhind.com/. Implemented backend APIs with ASP.NET Core MVC and SQL Server, and frontend features with Angular. Improved functionality and booking accuracy.'
  },
  {
    period: 'July 2025 – Aug 2025',
    title: 'E-Commerce Bug Fix Developer',
    company: 'BinaryEdge Technologies Pvt. Ltd.',
    description: 'Fixed critical bugs in an existing E-Commerce platform using ASP.NET Core MVC and Angular, improving site reliability and user experience.'
  },
  {
    period: 'Sept 2025 – Oct 2025',
    title: 'Carpet PPT Management Software Developer',
    company: 'Freelance / Local Client',
    description: 'Implemented a Carpet Management module in .NET Core MVC following Clean Architecture principles. Delivered functional and user-friendly UI for the client.'
  }
  ]);

  education = signal<Education[]>([
    { 
      year: '2022 - 2025', 
      degree: 'Bachelor of Computer Applications (BCA)', 
      institution: 'JS University, Shikohabad',
      description: 'Completed key projects using ASP.NET Core MVC, Web API, Angular and SQL Server. Focused on software development and web technologies.'
    }
  ]);

  // projects = signal<Project[]>([
  //   {
  //     title: 'E-Commerce Platform',
  //     description: 'Full-stack e-commerce solution with user authentication, product management, and payment integration.',
  //     technologies: 'ASP.NET Core • Angular • SQL Server',
  //     techList: ['ASP.NET Core', 'Angular', 'SQL Server', 'JWT'],
  //     image: 'https://via.placeholder.com/400x250/41228e/ffffff?text=E-Commerce'
  //   },
  //   {
  //     title: 'CRM System',
  //     description: 'Customer Relationship Management system with lead tracking, customer management, and reporting features.',
  //     technologies: 'ASP.NET Core MVC • Entity Framework • Bootstrap',
  //     techList: ['MVC', 'EF Core', 'Bootstrap', 'Razor Pages'],
  //     image: 'https://via.placeholder.com/400x250/9473e6/ffffff?text=CRM+System'
  //   },
  //   {
  //     title: 'Inventory Management',
  //     description: 'Web-based inventory management system with real-time tracking and reporting capabilities.',
  //     technologies: 'Web API • Angular • SQL Server',
  //     techList: ['Web API', 'Angular', 'SQL', 'Chart.js'],
  //     image: 'https://via.placeholder.com/400x250/fdb157/ffffff?text=Inventory+Mgmt'
  //   },
  //   {
  //     title: 'Task Management App',
  //     description: 'Collaborative task management application with real-time updates and team collaboration features.',
  //     technologies: 'ASP.NET Core • Angular • SignalR',
  //     techList: ['SignalR', 'Angular', 'JWT', 'WebSocket'],
  //     image: 'https://via.placeholder.com/400x250/bdecf6/333333?text=Task+App'
  //   },
  //   {
  //     title: 'Blog Platform',
  //     description: 'Modern blog platform with rich text editor, categories, tags, and user comments system.',
  //     technologies: 'ASP.NET Core • Entity Framework • Bootstrap',
  //     techList: ['MVC', 'EF Core', 'Bootstrap', 'Summernote'],
  //     image: 'https://via.placeholder.com/400x250/ffbcaa/333333?text=Blog+Platform'
  //   },
  //   {
  //     title: 'REST API Development',
  //     description: 'Scalable RESTful API with authentication, documentation, and comprehensive error handling.',
  //     technologies: 'ASP.NET Core Web API • Swagger • SQL Server',
  //     techList: ['Web API', 'Swagger', 'SQL', 'JWT Auth'],
  //     image: 'https://via.placeholder.com/400x250/41228e/ffffff?text=REST+API'
  //   }
  // ]);

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.initializeAnimations();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (typeof window === 'undefined') return;
    this.handleScrollAnimations();
    this.updateActiveNavLink();
  }

  scrollToSection(sectionId: string): void {
    if (typeof window === 'undefined') return;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // downloadCV(): void {
  //   if (typeof window === 'undefined') return;
  //   alert('CV download functionality will be implemented!');
  // }
  downloadPDF() {
  const link = document.createElement('a');
  link.href = 'assets/cv/dabblu-ali-cv.pdf';
  link.download = 'dabblu-ali-cv.pdf'; // filename when downloading
  link.click();
}
// filesArray: File[] = []; // store files in this array

  // onFileSelected(event: any): void {
  //   const selectedFiles: FileList = event.target.files;

  //   // Clear old files (optional)
  //   this.filesArray = [];

  //   // Push files to the array
  //   for (let i = 0; i < selectedFiles.length; i++) {
  //     this.filesArray.push(selectedFiles[i]);
  //   }

  //   console.log('Files stored:', this.filesArray);
  // }
  
    selectedFile: File | null = null;

  // Handle file selection
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file && file.type === 'application/pdf') {
      this.selectedFile = file;
      console.log('Selected PDF:', file);
    } else {
      alert('Please select a valid PDF file.');
    }
  }

  // Trigger download of selected file
  downloadSelectedFile(): void {
    if (!this.selectedFile) {
      alert('No file selected.');
      return;
    }

    const blob = new Blob([this.selectedFile], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = this.selectedFile.name;
    link.click();

    // Clean up URL object
    window.URL.revokeObjectURL(url);
  }

  viewProjectDetails(project: Project): void {
    if (typeof window === 'undefined') return;
    alert(`Viewing details for: ${project.title}`);
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      alert('Message sent successfully!');
      this.contactForm.reset();
    }
  }

  private initializeAnimations(): void {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    });

    document.querySelectorAll('.section-title, .skill-box, .timeline-content, .portfolio-card').forEach(el => {
      observer.observe(el);
    });
  }

  private handleScrollAnimations(): void {
    if (typeof window === 'undefined') return;

    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
      navbar?.classList.add('navbar-scrolled');
    } else {
      navbar?.classList.remove('navbar-scrolled');
    }
  }

  private updateActiveNavLink(): void {
    if (typeof window === 'undefined') return;

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 100)) {
        current = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  
  } 
}
