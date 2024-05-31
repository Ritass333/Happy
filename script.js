// Дублирование содержимого карусели для создания бесконечного эффекта прокрутки
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width + 20; // 100px ширина + 10px margin-left + 10px margin-right
const totalWidth = slideWidth * slides.length;

let cloneCount = 2; // Дублируем содержимое 2 раза

for (let i = 0; i < cloneCount; i++) {
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        track.appendChild(clone);
    });
}
