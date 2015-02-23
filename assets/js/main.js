(function(){
  'use strict';
  // Embed Video Responsive
  $('.Main').fitVids();
  // Search Header Top
  $('#search').ghostHunter({
    results: '#search-results',
    zeroResultsInfo : false,
    info_template   : '<p>Numero de Post: {{amount}}</p>',
    result_template : "<div class='searchResults'><a href='{{link}}'><p><h4>{{title}}</h4></p></a></div>",
    onKeyUp         : true
  });
  // Facebook Embed
  $('.fb-post').wrap( '<div class="Facebook-embed"></div>');
  // Facebook Embed
  $('.twitter-tweet').wrap( '<div class="Twitter-embed"></div>');
})();
