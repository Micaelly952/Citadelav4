        document.addEventListener("DOMContentLoaded", function () {

            /* MENU HAMBÚRGUER */
            const mobileMenu = document.getElementById("mobile-menu");
            const navMenu = document.querySelector(".nav-menu");

            if (mobileMenu) {
                mobileMenu.addEventListener("click", function () {
                    mobileMenu.classList.toggle("is-active");
                    navMenu.classList.toggle("active");
                });
            }

            /* SCROLL SUAVE */
            const navLinks = document.querySelectorAll('a[href^="#"]');

            navLinks.forEach(link => {
                link.addEventListener("click", function (e) {
                    e.preventDefault();

                    if (navMenu.classList.contains("active")) {
                        mobileMenu.classList.remove("is-active");
                        navMenu.classList.remove("active");
                    }

                    const targetId = this.getAttribute("href");
                    const target = document.querySelector(targetId);

                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 80,
                            behavior: "smooth"
                        });
                    }
                });
            });

            /* HEADER DINÂMICO */
            const header = document.getElementById("site-header");

            function checkScroll() {
                if (window.scrollY > 40) {
                    header.classList.add("scrolled");
                } else {
                    header.classList.remove("scrolled");
                }
            }

            window.addEventListener("scroll", checkScroll);
            checkScroll(); 

            /* ANIMAÇÃO DOS CARDS */
            const cards = document.querySelectorAll(".card");

            const revealCards = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                    }
                });
            }, { threshold: 0.15 });

            cards.forEach(card => {
                card.style.opacity = "0";
                card.style.transform = "translateY(30px)";
                card.style.transition = "all 0.6s ease";
                revealCards.observe(card);
            });

            /* TOAST NOTIFICATION */
            let clicouWhatsapp = false;
            const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
            const toast = document.getElementById("toast");

            whatsappButtons.forEach(btn => {
                btn.addEventListener("click", function () {
                    clicouWhatsapp = true;
                });
            });

            document.addEventListener("visibilitychange", function () {
                if (!document.hidden && clicouWhatsapp) {
                    toast.classList.add("show");
                    setTimeout(() => {
                        toast.classList.remove("show");
                    }, 5000);
                    clicouWhatsapp = false;
                }
            });
        });