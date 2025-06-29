function openModal() {
      document.getElementById('editModal').style.display = 'flex';
    }
    function closeModal() {
      document.getElementById('editModal').style.display = 'none';
    }
    // Optional: Close modal when clicking outside content
    document.getElementById('editModal').addEventListener('click', function(e) {
      if (e.target === this) closeModal();
    });