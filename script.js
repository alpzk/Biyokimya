<script>
    let slideIndex = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    // Otomatik kaydırma fonksiyonu
    function showSlides() {
        slideIndex++;
        if (slideIndex >= totalSlides) {
            slideIndex = 0;
        }
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    // 3 saniyede bir kaydırma
    let autoSlide = setInterval(showSlides, 3000);

    // Önceki ve sonraki butonlar için fonksiyonlar
    document.querySelector('.prev').addEventListener('click', () => {
        clearInterval(autoSlide); // Elle kontrol edildiğinde otomatik kaydırma durur
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = totalSlides - 1;
        }
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
        autoSlide = setInterval(showSlides, 3000); // Yeniden başlat
    });

    document.querySelector('.next').addEventListener('click', () => {
        clearInterval(autoSlide);
        slideIndex++;
        if (slideIndex >= totalSlides) {
            slideIndex = 0;
        }
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
        autoSlide = setInterval(showSlides, 3000);
    });
</script>
