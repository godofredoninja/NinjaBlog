(function(){
  'use strict';
  // Ads Post Top
  var AdsPostTop = '<aside class="Ads-mainTop"> </aside>';
  // Ads Sidebar Top
  var AdsSidebarTop = ' <aside class="Sidebar-items Ads-sidebarTop"> </aside>';
  var AdsSidebarBottom = ' <aside class="Sidebar-items"> <div class="Ads-sidebarBottom"></div></aside>';

  $('.Main').prepend(AdsPostTop);
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
})();
