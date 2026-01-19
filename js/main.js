//ScrollSpy//
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 200;
    const sectionId = section.getAttribute('id');

    // 현재 스크롤 위치가 해당 섹션 영역 안에 있는지 확인
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.add('active');
    } else {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.remove('active');
    }
  });
}

window.addEventListener('scroll', scrollActive);

//HomeClick//
function functionHomeClick() {
  const searchBar = document.querySelector('.home__search__bar');
  const content = document.querySelector('.home__click__content');

  searchBar.classList.toggle('expand');
  content.classList.toggle('active');
}
