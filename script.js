document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.25,
    };

    const revealOnScroll = new IntersectionObserver((entries, revealOnScroll) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("show");
            revealOnScroll.unobserve(entry.target);
        });
    }, options);

    sections.forEach((section) => {
        revealOnScroll.observe(section);
    });
});
