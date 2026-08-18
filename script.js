(() => {
  let lang = 'ko';

  const btn = document.getElementById('langBtn');
  const kr = document.getElementById('krState');
  const en = document.getElementById('enState');
  const printResume = document.getElementById('printResume');

  const apply = () => {
    document.documentElement.lang = lang;

    document.querySelectorAll('.ko').forEach((el) => {
      el.hidden = lang !== 'ko';
    });

    document.querySelectorAll('.en').forEach((el) => {
      el.hidden = lang !== 'en';
    });

    document.querySelectorAll('[data-ko][data-en]').forEach((el) => {
      el.textContent = el.dataset[lang];
    });

    if (kr && en) {
      kr.classList.toggle('active', lang === 'ko');
      en.classList.toggle('active', lang === 'en');
    }
  };

  if (btn) {
    btn.addEventListener('click', () => {
      lang = lang === 'ko' ? 'en' : 'ko';
      apply();
    });
  }

  if (printResume) {
    printResume.addEventListener('click', () => {
      window.print();
    });
  }

  apply();
})();
