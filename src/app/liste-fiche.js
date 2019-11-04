import { get } from 'axios';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/accordion';


const clickHandler = function (event) {
  event.preventDefault();
  const target = $(this);
  target.parent().next().html('<img src="assets/images/ajax-loader.gif" />');
  get(target.attr('href')).then(({ data }) => {
    target.parent().next().html(`<div>${data.description}</div>`);
  });
};

get('http://localhost:3000/list')
  .then((res) => res.data)
  .then((list) => {
    const accordion = $('#accordion');
    for (const el of list) {
      accordion.append(`<h3>
        <a href="http://localhost:3000/all/${el.id}">${el.shortname}</a>
      </h3>`);
      accordion.append('<div></div>');
    }
    $('a').on('click', clickHandler);
    $('#accordion').accordion({ collapsible: true, heightStyle: 'content', active: false });
    $('.overlay').fadeOut(4000);
  });
