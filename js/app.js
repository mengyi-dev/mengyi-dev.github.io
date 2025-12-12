
    const config = {
        navLinks: [
            { name: 'Home', href: '#home' },
            { name: 'About', href: '#about' },
            { name: 'XP', href: '#experience' },
            { name: 'Projects', href: '#projects' },
            { name: 'Contact', href: '#contact' },
        ],
        skills: [
            "Vue.js 3", "Nuxt 3", "React", "Next", "TypeScript", "Tailwind CSS", 
            "Pinia", "Node.js", "Vite", "Figma"
        ],
        experience: [
            {
                company: "Major Financial Institution",
                role: "Frontend Developer",
                period: "2023 - Present",
                description: "Maintained secure banking interfaces using Nuxt.js and Vue. Integrated internal APIs, resolved UI defects, and patched frontend security vulnerabilities to ensure compliance."
            },
            {
                company: "Z1 Flexible Solutions",
                role: "Frontend Developer Intern",
                period: "2022 - 2023",
                description: "Collaborated on building high-performance websites using Next.js and React. Optimized component rendering for speed and implemented interactive animations with GSAP."
            }
        ],
        projects: [
            // {
            //     title: "Crypto Dashboard",
            //     description: "Real-time tracking with WebSockets. Fast, responsive, and data-heavy.",
            //     tech: ["Vue 3", "ApexCharts", "Socket.io"],
            //     links: { github: "#", external: "#" },
            //     shadow: "shadow-brutal-blue",
            //     bg: "bg-white"
            // },
            // {
            //     title: "Neon Shop",
            //     description: "E-commerce platform with 3D product previews and seamless cart states.",
            //     tech: ["Nuxt 3", "Three.js", "Stripe"],
            //     links: { github: "#", external: "#" },
            //     shadow: "shadow-brutal-red",
            //     bg: "bg-paper"
            // },
            // {
            //     title: "Task Master",
            //     description: "Kanban board for agile teams. Drag, drop, and collaborate in real-time.",
            //     tech: ["Vue 3", "Firebase", "DnD"],
            //     links: { github: "#", external: "#" },
            //     shadow: "shadow-brutal",
            //     bg: "bg-white"
            // },
            // {
            //     title: "AI Chat Interface",
            //     description: "Clean UI for LLMs. Includes markdown rendering and code highlighting.",
            //     tech: ["Vue 3", "OpenAI", "PrismJS"],
            //     links: { github: "#", external: "#" },
            //     shadow: "shadow-brutal-blue",
            //     bg: "bg-paper"
            // },
            // {
            //     title: "Weather Art",
            //     description: "Generative canvas art driven by live weather API data.",
            //     tech: ["Canvas API", "WebGL", "Rest API"],
            //     links: { github: "#", external: "#" },
            //     shadow: "shadow-brutal-red",
            //     bg: "bg-white"
            // },
            // {
            //     title: "Portfolio v1",
            //     description: "My first site. Pure HTML & CSS. Kept for nostalgia.",
            //     tech: ["HTML", "CSS", "jQuery"],
            //     links: { github: "#", external: "#" },
            //     shadow: "shadow-brutal",
            //     bg: "bg-paper"
            // }
            {
                title: "Comming Soon!",
                description: "",
                tech: [""],
                links: { github: "#", external: "#" },
                shadow: "shadow-brutal-blue",
                bg: "bg-white"
            },
        ],
        socials: [
            { name: "Github", icon: "github", link: "https://github.com/mengyi-dev" },
            { name: "Twitter", icon: "twitter", link: "#" },
            { name: "Linkedin", icon: "linkedin", link: "#" },
            { name: "Instagram", icon: "instagram", link: "#" }
        ]
    };

    // --- 2. RENDER FUNCTIONS ---

    function renderNav() {
        const desktopNav = document.getElementById('desktop-menu');
        const mobileNav = document.getElementById('mobile-nav-links');
        
        config.navLinks.forEach(link => {
            // Desktop
            const dLink = document.createElement('a');
            dLink.href = link.href;
            dLink.className = "text-sm font-bold uppercase tracking-widest hover:text-popBlue hover:underline decoration-4 decoration-popYellow underline-offset-4 transition-all";
            dLink.textContent = link.name;
            desktopNav.appendChild(dLink);

            // Mobile
            const mLink = document.createElement('a');
            mLink.href = link.href;
            mLink.className = "text-xl font-black uppercase hover:text-popRed border-b-2 border-dashed border-ink pb-2";
            mLink.textContent = link.name;
            mLink.addEventListener('click', toggleMobileMenu);
            mobileNav.appendChild(mLink);
        });
    }

    function renderSkills() {
        const list = document.getElementById('skills-list');
        config.skills.forEach(skill => {
            const li = document.createElement('li');
            li.className = "bg-ink text-white px-3 py-1 font-mono font-bold text-sm hover:bg-popBlue hover:-rotate-2 transition-transform cursor-default border-2 border-transparent hover:border-ink";
            li.textContent = skill;
            list.appendChild(li);
        });
    }

    function renderExperience() {
        const container = document.getElementById('experience-list');
        config.experience.forEach(job => {
            const div = document.createElement('div');
            div.className = "reveal flex flex-col md:flex-row border-3 border-ink bg-white shadow-brutal hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-200";
            div.innerHTML = `
                <div class="md:w-1/4 bg-paper border-b-3 md:border-b-0 md:border-r-3 border-ink p-6 flex flex-col justify-center">
                    <h3 class="font-black text-xl uppercase">${job.company}</h3>
                    <span class="inline-block mt-2 font-mono text-xs font-bold bg-popYellow px-2 py-1 border-2 border-ink w-fit">${job.period}</span>
                </div>
                <div class="md:w-3/4 p-6">
                    <h4 class="text-xl font-bold mb-3 text-popRed flex items-center gap-2">
                        ${job.role}
                    </h4>
                    <p class="font-mono text-sm leading-relaxed">${job.description}</p>
                </div>
            `;
            container.appendChild(div);
        });
    }

    function renderProjects() {
        const grid = document.getElementById('projects-grid');
        config.projects.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = `reveal flex flex-col border-3 border-ink ${project.bg} ${project.shadow} hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-200 group h-full relative`;
            
            // Tech tags
            const techTags = project.tech.map(t => `<span class="text-xs font-mono font-bold border-2 border-ink px-1 bg-white">${t}</span>`).join('');
            
            card.innerHTML = `
                <div class="absolute -top-3 -left-3 bg-ink text-white w-8 h-8 flex items-center justify-center font-black border-2 border-white shadow-sm z-10">
                    ${index + 1}
                </div>
                
                <div class="h-48 border-b-3 border-ink flex items-center justify-center bg-gray-100 overflow-hidden relative">
                     <!-- Placeholder pattern -->
                     <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[length:16px_16px]"></div>
                     <i data-lucide="folder-open" class="w-16 h-16 text-ink opacity-20 group-hover:scale-110 group-hover:text-popBlue transition-all duration-300"></i>
                </div>
                
                <div class="p-6 flex flex-col flex-grow">
                    <div class="flex justify-between items-start mb-4">
                        <h3 class="text-2xl font-black uppercase leading-none tracking-tight group-hover:text-popRed transition-colors">${project.title}</h3>
                    </div>
                    <p class="font-mono text-sm mb-6 flex-grow leading-relaxed">${project.description}</p>
                    
                    <div class="flex flex-wrap gap-2 mb-6">
                        ${techTags}
                    </div>
                    
                    <div class="flex gap-0 mt-auto border-t-3 border-ink -mx-6 -mb-6">
                        <a href="${project.links.github}" class="w-1/2 py-3 flex justify-center items-center gap-2 border-r-3 border-ink hover:bg-popYellow font-bold uppercase text-sm transition-colors">
                            <i data-lucide="github" class="w-4 h-4"></i> Code
                        </a>
                        <a href="${project.links.external}" class="w-1/2 py-3 flex justify-center items-center gap-2 hover:bg-popGreen font-bold uppercase text-sm transition-colors">
                            <i data-lucide="external-link" class="w-4 h-4"></i> Demo
                        </a>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    function renderSocials() {
        const container = document.getElementById('social-icons');
        config.socials.forEach(social => {
            const a = document.createElement('a');
            a.href = social.link;
            a.className = "bg-white text-ink p-2 border-2 border-white hover:border-popYellow hover:text-popYellow rounded-full transition-colors";
            a.innerHTML = `<i data-lucide="${social.icon}" class="w-6 h-6"></i>`;
            container.appendChild(a);
        });
    }

    // --- 3. ANIMATION & INTERACTION LOGIC ---

    function initCursor() {
        const dot = document.getElementById('cursor-dot');
        const ring = document.getElementById('cursor-ring');
        
        // Mouse Movement
        window.addEventListener('mousemove', (e) => {
            dot.style.left = e.clientX + 'px';
            dot.style.top = e.clientY + 'px';
            
            // Add tiny delay for "drag" feel via CSS transition, but update position here
            ring.style.left = e.clientX + 'px';
            ring.style.top = e.clientY + 'px';
        });

        // Hover States
        const interactables = document.querySelectorAll('a, button, .cursor-pointer');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                ring.classList.add('w-16', 'h-16', 'border-popYellow', 'bg-popYellow/20', 'border-solid', 'animate-spin-slow');
                ring.classList.remove('border-dashed', 'border-popRed');
            });
            
            el.addEventListener('mouseleave', () => {
                ring.classList.remove('w-16', 'h-16', 'border-popYellow', 'bg-popYellow/20', 'border-solid', 'animate-spin-slow');
                ring.classList.add('border-dashed', 'border-popRed');
            });
        });
    }

    function initScrollReveal() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); 
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }

    function toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
    }

    // --- 4. INITIALIZATION ---
    
    document.addEventListener('DOMContentLoaded', () => {
        renderNav();
        renderSkills();
        renderExperience();
        renderProjects();
        renderSocials();
        lucide.createIcons();
        
        // Init cursor after elements render to catch all links
        initCursor();
        
        initScrollReveal();

        document.getElementById('mobile-menu-btn').addEventListener('click', toggleMobileMenu);
    });