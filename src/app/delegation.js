import $ from 'jquery';

$(document).ready(() => {
  $('body').on('click', '.toto', () => {
    alert('tata');
  });
  $('<div class="toto">tutu</div>').appendTo('body');
});
