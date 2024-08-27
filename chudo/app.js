function openPDF1() {
    const pdfUrl1 = './pdf/pdf1.pdf';
    window.open(pdfUrl1, '_blank');
}

function openPDF2() {
    const pdfUrl2 = './pdf/pdf2.pdf';
    window.open(pdfUrl2, '_blank');
}

function translateToRussian() {
    document.getElementById('text1').textContent = 'УСЛОВИЯ ПРОВЕДЕНИЯ И ПРАВИЛА УЧАСТИЯ В СТИМУЛИРУЮЩЕЙ ЛОТЕРЕЕ «ЧУДО» с 15 апреля 2024 года по 15 мая 2024 года';
    document.getElementById('text2').textContent = 'УСЛОВИЯ ПРОВЕДЕНИЯ И ПРАВИЛА УЧАСТИЯ В СТИМУЛИРУЮЩЕЙ ЛОТЕРЕЕ «ЧУДО» с 27 июля 2024 года по 27 сентября 2024 года';
    document.getElementById('button1').textContent = 'Ознакомиться';
    document.getElementById('button2').textContent = 'Ознакомиться';
}

function translateToKyrgyz() {
    document.getElementById('text1').textContent = '2024-жылдын 15-апрелинен 2024-жылдын 15-майына чейин «ЧУДО» демөөрчүлүк лотереясына катышуу шарттары жана эрежелери';
    document.getElementById('text2').textContent = '2024-жылдын 27-июлунан 2024-жылдын 27-сентябрына чейин «ЧУДО» демөөрчүлүк лотереясына катышуу шарттары жана эрежелери';
    document.getElementById('button1').textContent = 'Танышуу';
    document.getElementById('button2').textContent = 'Танышуу';
}

function setLanguage(language) {
    if (language === 'ru') {
        translateToRussian();
    } else if (language === 'kg') {
        translateToKyrgyz();
    }
    closeModal();
}

function closeModal() {
    document.getElementById('language-modal').style.display = 'none';
}

// Показать модальное окно при загрузке страницы
window.onload = function() {
    document.getElementById('language-modal').style.display = 'flex';
};