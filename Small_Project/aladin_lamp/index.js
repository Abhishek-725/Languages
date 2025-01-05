document.addEventListener('DOMContentLoaded', function() {
    const lampArea = document.getElementById('lampArea');
    const smokeEffect = document.getElementById('smokeEffect');
    const smokePath = document.getElementById('smokePath');
    lampArea.addEventListener('mouseover', function() {
      smokeEffect.style.display = 'block';
    });
  
    lampArea.addEventListener('mouseout', function() {
      smokeEffect.style.display = 'none';
    });
  });