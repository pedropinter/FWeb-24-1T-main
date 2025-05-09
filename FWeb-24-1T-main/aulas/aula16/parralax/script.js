jQuery(document).ready(function($) {
  $('.parallax-layer').parallax({
    mouseport: 'body',
    xparallax: true,
    yparallax: true,
    xorigin: 0.5,
    yorigin: 0.5,
    decay: 0.66,
    frameDuration: 30,
    freezeClass: 'freeze'
  });
});
