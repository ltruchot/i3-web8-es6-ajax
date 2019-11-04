import $ from 'jquery';
import { post } from 'axios';
import { uniq, uniqBy, prop } from 'ramda';

/*
const data = {
  id: 2744025822,
  userId: 'ltruchot',
  auteur: 'Douglas Crockford',
  annee: 2013,
  titre: 'Javascript - Les bons éléments',
  url: 'https://www.amazon.fr/Javascript-bons-%C3%A9l%C3%A9ments-Douglas-Crockford/dp/2744025828/ref=sr_1_3?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=les+bons+%C3%A9l%C3%A9ments&qid=1570712312&sr=8-3',
  imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41YXREIo1sL._SX351_BO1,204,203,200_.jpg',
};


$.ajax({
  contentType: 'application/json',
  url: 'https://mini-json-server.committers.ngo/livres',
  dataType: 'json',
  data: JSON.stringify(data),
  type: 'POST',
})
  .then(() => $.get('https://mini-json-server.committers.ngo/livres'))
  .then(console.log);

*/


$.get('https://mini-json-server.committers.ngo/livres').then((livres) => {
  const filteredLivres = uniqBy(prop('id'), livres);

  const divs = filteredLivres
    .filter((livre) => !!livre.id)
    // .filter((l) => (l.titre && l.titre.toUpperCase()) !== 'LA VIE EST UNE PLAGE')
    .map((livre) => $(`
    <div style="display:flex;">
    <div>
      <img src="${livre.imageUrl}" class="image-rounded" />
    </div>
     <div>
        <h3>${livre.titre}</h3>
        <h4>${livre.auteur} - ${livre.annee}</h4>
        <a href="${livre.url}">Acheter</a>
      </div>
    </div>
  `));
  $('body').append(divs);
});
