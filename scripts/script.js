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
         document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('quoteRequestForm');
        const formMessages = document.getElementById('form-messages');
        const submitBtn = form.querySelector('.submit-btn');
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            form.classList.add('form-submitting');
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            
            // Submit form via Fetch API
            fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Success message
                    formMessages.innerHTML = 'Thank you! Your quote request has been submitted. We will contact you within 24 hours.';
                    formMessages.className = 'success';
                    form.reset();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .catch(error => {
                // Error message
                formMessages.innerHTML = 'Oops! There was a problem submitting your form. Please try again or contact us directly.';
                formMessages.className = 'error';
            })
            .finally(() => {
                // Remove loading state
                form.classList.remove('form-submitting');
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                
                // Scroll to message
                formMessages.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Hide message after 10 seconds
                setTimeout(() => {
                    formMessages.style.display = 'none';
                }, 10000);
            });
        });
    });
    