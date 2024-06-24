// JavaScript to handle click events and show modal
const portfolioItems = document.querySelectorAll('.portfolio-item');
const modal = document.getElementById('portfolioModal');
const closeButton = modal.querySelector('.close-button');

portfolioItems.forEach(item => {
  item.addEventListener('click', () => {
    // Get data attributes for title and description
    const title = item.getAttribute('data-title');
    const description = item.getAttribute('data-description');

    // Update modal content
    modal.querySelector('.modal-title').textContent = title;
    modal.querySelector('.modal-description').textContent = description;

    // Show modal
    modal.style.display = 'flex';
  });
});

// Close modal
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal if user clicks outside of it
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
