'use strict'

const spinBtn = document.querySelector('.spin_btn');
const popUp = document.querySelector('.pop_up');
const wheel = document.querySelector('.wheel_box');

spinBtn.addEventListener('click', wheelAnimate);

if (window.matchMedia('(max-width: 1279px)').matches) {
  spinBtn.addEventListener('click', () => {
    move('.wheel_box.mobile').set('margin-top', 'calc((100vh - 100vmin) / 2)').duration('0.8s').delay('0.3s').end();
  });
} else {
  wheel.classList.remove('mobile');
  wheel.classList.add('large');
  spinBtn.addEventListener('click', () => {
    move('.wheel_box.large').set('margin-right', 'calc((100vw - 100vmin) / 2)').duration('0.8s').delay('0.3s').end();
  });
}

function wheelAnimate() {
  move('.offer_title').set('margin-left', '-100vw').duration('0.3s').end();
  move('.subtitle').set('margin-left', '-175vw').duration('0.4s').delay('0.1s').end();
  move('.btn_wrap').set('margin-left', '-100vw').duration('0.5s').delay('0.2s').end();
  move('.wheel').rotate(1642).ease('cubic-bezier(.53, .12, .25, 1.19)').duration('8.4s').delay('1.5s').end(
   function () {
    move('.pop_up').set('display', 'flex').end();
    move('.pop_up').set('opacity', 100).ease('in').duration('0.5s').delay('0.5s').end()
   }
  );
}

