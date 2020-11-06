/* ASSIGNMENT
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
BONUS: Aggiungere un’immagine presa anch’essa da un data
*/

var app = new Vue({

  el: '#root',
  data: {
    main_title: 'vue js',
    subtitle: 'JavaScript Framework',
    url_meme_got: 'img/meme_got.png',
    url_meme_react: 'img/meme_react.jpg',
    display_img_got: 'show',
    display_img_react: 'hidden',
  },
  methods: {
    hideImg: function() {
      if (this.display_img_got === 'show') {
        this.display_img_got = 'hidden';
        this.display_img_react = 'show';
      } else {
        this.display_img_got = 'show';
        this.display_img_react = 'hidden';
      }
    },
  },
});
