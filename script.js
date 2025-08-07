console.log("Hello from script.js!");

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll('[data-bs-toggle="tab"]');
  const loading = document.getElementById('loading-screen');

  if (!tabs.length || !loading) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      loading.style.display = 'block';

      // Optional delay (to simulate loading)
      setTimeout(() => {
        loading.style.display = 'none';
      }, 800); // Adjust as needed
    });
  });
});
