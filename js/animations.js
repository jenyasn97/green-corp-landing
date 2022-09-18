const INCREASE_NUMBER_ANIMATION_SPEED = 50;
let animationInited = false;

function increaseNumberAnimationStep(i, element, endNumber) {
  if (i <= endNumber) {
    if (i === endNumber) {
      element.innerText = i + '+';
    } else {
      element.innerText = i;
    }
    i ++
  }
  setTimeout(() => {
    increaseNumberAnimationStep(i, element, endNumber);
  }, INCREASE_NUMBER_ANIMATION_SPEED);

}


function initIncreaseNumberAnimation() {
  let element = document.querySelector('.features__clients-count');
  increaseNumberAnimationStep(0, element, 5000);
}





document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
  if (event.target.value === 'other') {
    let formContainer = document.createElement('div');
    formContainer.classList.add('form__group', 'form__other-input');
    input = document.createElement('input');
    input.type = "text";
    input.placeholder = 'Введите ваш вариант';
    formContainer.appendChild(input);
    let form = document.querySelector('#form');
    let btnSubmit = document.querySelector('.form__submit');
    form.insertBefore(formContainer, btnSubmit)

  }
  let otherInput = document.querySelector('.form__other-input');
  if (event.target.value !== 'other' && Boolean(otherInput)) {
    let form = document.querySelector('#form');
    form.removeChild(otherInput)
  }
});

function updateScroll() {
  let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
  let windowBottomPosition = window.scrollY + window.innerHeight;
  if (windowBottomPosition >= countElementPosition && !animationInited) {
    animationInited = true;
    initIncreaseNumberAnimation();
  }

  if (window.scrollY > 0) {
    document.querySelector('header').classList.add('header__scrolled')
  } else {
    document.querySelector('header').classList.remove('header__scrolled')
  }
}

window.addEventListener('scroll', updateScroll)


function addSmoothScroll(link) {
  link.addEventListener('click', onLinkClick)
}

function onLinkClick(event) {
  event.preventDefault();
  document.querySelector(event.target.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
  });
}

document.querySelectorAll('a[href^="#"]').forEach(e => {
  addSmoothScroll(e);
})
addSmoothScroll(document.querySelector('.more-button'));