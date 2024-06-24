document.addEventListener('DOMContentLoaded', function() {
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the modal content elements
  var modalContent = document.getElementById('modalContent');
  var modalTitle = modalContent.querySelector('h2');
  var modalText = modalContent.querySelector('p');

  // Get all elements with class "open-modal"
  var openModalButtons = document.querySelectorAll('.open-modal');

  // Get the <span> element that closes the modal
  var closeBtn = modal.querySelector('.close');

  // Function to open the modal
  function openModal(title, snippet) {
    modalTitle.textContent = title;
    modalText.textContent = snippet;
    modal.style.display = 'block'; // Display the modal
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = 'none'; // Hide the modal
  }

  // Event listener for each "Open Modal" button
  openModalButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      var title = this.getAttribute('data-title');
      var snippet = this.getAttribute('data-snippet');
      openModal(title, snippet);
    });
  });

  // Event listener for the close button
  closeBtn.addEventListener('click', function() {
    closeModal();
  });

  // Event listener to close modal if user clicks outside it
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });
});
