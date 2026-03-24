window.addEventListener('DOMContentLoaded', () => {
    // 1. Lấy tên file hiện tại (ví dụ: projects.html)
    const currentFileName = window.location.pathname.split('/').pop();
    console.log("File hiện tại: " + currentFileName);

    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        // 2. Lấy tên file từ href, bỏ qua các dấu ../ hay ./
        const linkHref = link.getAttribute('href').split('/').pop();
        console.log("Đang so sánh với link: " + linkHref);

        // 3. So khớp tên file
        if (linkHref === currentFileName && linkHref !== "") {
            link.classList.add('active');
            console.log("=> ĐÃ KHỚP!");
        }
    });
});