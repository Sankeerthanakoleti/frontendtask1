const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg'
  ];
  
  let currentIndex = 0;
  
  function showImage(index) {
    currentIndex = index;
    const imageElement = document.getElementById('current-image');
    imageElement.src = images[currentIndex];
    updateActiveThumbnail();
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
  
  function updateActiveThumbnail() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.classList.toggle('active', index === currentIndex);
    });
  }
  
  // Initialize the first image and active thumbnail
  showImage(currentIndex);
  