     // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const nav = document.getElementById('nav');
        
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileMenuBtn.innerHTML = nav.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking a link
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
      
        const steps = document.querySelectorAll('.step');
        
        function checkSteps() {
            const triggerBottom = window.innerHeight / 5 * 4;
            
            steps.forEach(step => {
                const stepTop = step.getBoundingClientRect().top;
                
                if (stepTop < triggerBottom) {
                    step.classList.add('visible');
                }
            });
        }
        
        window.addEventListener('scroll', checkSteps);
        checkSteps(); 
        
        // Form submission
        const quoteForm = document.getElementById('quoteRequestForm');
        if (quoteForm) {
            quoteForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Here you would typically send the form data to your server
                // For demo purposes, we'll just show an alert
                alert('Thank you for your request! We will contact you within 24 hours with your quote.');
                this.reset();
                
                // Scroll to top of form to show success message
                window.scrollTo({
                    top: quoteForm.offsetTop - 100,
                    behavior: 'smooth'
                });
            });
        }
    