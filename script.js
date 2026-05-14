let currentIndex = 0; // Текущий индекс активного изображения в галерее
const images = document.querySelectorAll('.gallery-item'); // Получаем все элементы галереи
const totalImages = images.length; // Общее количество изображений в галерее
const gallery = document.querySelector('.gallery'); // Получаем контейнер галереи
const galleryContainer = document.querySelector('.gallery-container'); // Получаем контейнер галереи
let autoScrollInterval; // Переменная для хранения интервала автоматической прокрутки


function updateGallery() {
    const offset = -currentIndex * 100; 
    gallery.style.transform = `translateX(${offset}%)`; 
}

// Переключение на следующее изображение
function nextImage() {
    if (currentIndex < totalImages - 1) {
        currentIndex++; 
    } else {
        currentIndex = 0; 
    }
    updateGallery();
}

// Переключение на предыдущее изображение
function prevImage() {
    if (currentIndex > 0) {
        currentIndex--; // Уменьшаем индекс, если не достигли начала галереи
    } else {
        currentIndex = totalImages - 1; // Переходим к последнему изображению, если достигли начала
    }
    updateGallery(); // Обновляем галерею
}
// Обработка кликов по кнопкам
document.getElementById('nextButton').addEventListener('click', nextImage); // Переключение на следующее изображение при клике
document.getElementById('prevButton').addEventListener('click', prevImage); // Переключение на предыдущее изображение при клике


// Обработка прокрутки колеса мыши
document.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        nextImage(); // Прокрутка вниз -> следующее изображение
    } else {
        prevImage(); // Прокрутка вверх -> предыдущее изображение
    }
});

// Функция для автоматического пролистывания
function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        nextImage();
    }, 1000);
}
// Функция для остановки автоматического пролистывания
function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

// Запуск автоматического пролистывания при загрузке страницы
startAutoScroll();

// Остановка автоматического пролистывания при наведении мыши на галерею
galleryContainer.addEventListener('mouseenter', () => {
    stopAutoScroll(); // Останавливаем автоматическую прокрутку
});

// Возобновление автоматического пролистывания при убирании мыши с галереи
galleryContainer.addEventListener('mouseleave', () => {
    startAutoScroll(); // Возобновляем автоматическую прокрутку
});