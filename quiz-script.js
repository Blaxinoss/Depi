// @ts-nocheck

const openQuizBtn = document.getElementById('openQuizBtn');
const quizModal = document.getElementById('quizModal');
const closeQuizBtn = document.getElementById('closeQuizBtn');
const submitQuizBtn = document.getElementById('submitQuizBtn');

openQuizBtn.addEventListener('click', () => {
  quizModal.style.display = 'block';
});

closeQuizBtn.addEventListener('click', () => {
  quizModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === quizModal) {
    quizModal.style.display = 'none';
  }
});

submitQuizBtn.addEventListener('click', () => {
  const carType = document.getElementById('carType').value;
  const budget = document.getElementById('budget').value;
  const features = document.getElementById('features').value;


  alert(`Car Type: ${carType}\nBudget: ${budget}\nFeatures: ${features}`);
  quizModal.style.display = 'none';
});
