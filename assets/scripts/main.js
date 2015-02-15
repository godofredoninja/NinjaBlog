(function(){
  'use strict';
  // Ads Post Top
  var AdsPostBottom = '<aside class="Ads-mainBottom"></aside>';
  // Ads Sidebar Top
  var AdsSidebarTop = ' <aside class="Sidebar-items Ads-sidebarTop"></aside>';
  var AdsSidebarBottom = ' <aside class="Sidebar-items"> <div class="Ads-sidebarBottom"></div></aside>';

  $('.Main').append(AdsPostBottom);
  $('.Sidebar').prepend(AdsSidebarTop);
  $('.Sidebar').append(AdsSidebarBottom);
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
