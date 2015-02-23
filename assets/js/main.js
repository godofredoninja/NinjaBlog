(function(){
  'use strict';
  // Ads Post Top
  var AdsPostBottom = '<aside class="Ads Ads-mainBottom"><ins class="adsbygoogle"style="display:inline-block;width:468px;height:60px"data-ad-client="ca-pub-3462564966072994"data-ad-slot="1972609664"> </ins></aside>';
  // Ads Sidebar Top
  var AdsSidebarTop = '<aside class="Sidebar-items Ads Ads-sidebarTop"><ins class="adsbygoogle"style="display:inline-block;width:300px;height:250px"data-ad-client="ca-pub-3462564966072994"data-ad-slot="7911725262"> </ins></aside>';
  var AdsResponsive = '<ins class="adsbygoogle"style="display:inline-block;width:320px;height:50px"data-ad-client="ca-pub-3462564966072994"data-ad-slot="7857692865"> </ins>';

  $('.Main').append(AdsPostBottom);
  $('.Sidebar').prepend(AdsSidebarTop);
  $('.Ads-Responsive').html(AdsResponsive);
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
