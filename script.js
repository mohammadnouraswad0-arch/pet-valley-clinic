document.querySelectorAll('[data-service]').forEach((card) => {
  const select = () => {
    document.querySelectorAll('[data-service]').forEach((item) => item.classList.remove('selected'));
    card.classList.add('selected');
  };
  card.addEventListener('click', select);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); select(); }
  });
});
