function toggleMenu(){document.getElementById('navLinks').classList.toggle('open')}
function demo(e){e.preventDefault();alert('This is a sample link. Replace it with your Google Drive, PDF, PPT or article link.')}
function checkAnswer(button, correct){
  const result=document.getElementById('result');
  if(correct){result.textContent='Correct! Article 14 guarantees equality before law.';result.dataset.ok='1';}
  else{result.textContent='Not quite. Try again.';result.dataset.ok='0';}
}
