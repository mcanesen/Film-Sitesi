const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll("img").length;

  arrow.addEventListener("click", function () {
    const visibleImages = Math.floor(movieLists[i].clientWidth / 300); // Görünen resim sayısını hesapla (her resim 300px genişlikte)
    const maxClickCount = imageItem - visibleImages;

    // Tıklama sayısını artır
    if (clickCounter < maxClickCount) {
      clickCounter++;
      
      // Mevcut transform değerini almak
      const currentTransform = getComputedStyle(movieLists[i]).getPropertyValue("transform");

      // `matrix` ifadesini parse etmek
      let currentTranslateX = 0;
      if (currentTransform !== 'none') {
        const matrixValues = currentTransform.match(/matrix.*\((.+)\)/)[1].split(', ');
        currentTranslateX = parseFloat(matrixValues[4]);  // translateX değeri
      }

      // 300px sola kaydırma ekleyerek güncelle
      movieLists[i].style.transform = `translateX(${currentTranslateX - 300}px)`;
    } else {
      // Eğer son resme ulaştıysan sıfırla
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});


// toggle-ball sınıfına sahip elementi seç
const ball = document.querySelector(".toggle-ball");

// Tüm ilgili elementleri seç
const items = document.querySelectorAll(
  ".container, .navbar, .sidebar, .sidebar i, .toggle, .toggle-ball, .movie-list-filter select, .movie-list-title"
);

// "ball" elementine tıklama olayı ekle
ball.addEventListener("click", function () {
  // Her bir item üzerinde "active" sınıfını toggle yap
  items.forEach((item) => item.classList.toggle("active"));
});
