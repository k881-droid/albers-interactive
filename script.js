let expandComp = document.getElementById('expand-comp');

let expandObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  },
  { threshold: 0.3 }
);

expandObserver.observe(expandComp);

let floatComps = document.querySelectorAll('[data-float]');

let floatObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  },
  { threshold: 0.25 }
);

floatComps.forEach((comp) => floatObserver.observe(comp));
