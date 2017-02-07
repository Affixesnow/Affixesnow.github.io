jQuery(document).ready(function($) {
  var affixCombos = [];
  affixCombos[0] = ["Raging","Necrotic","Fortified"];
  affixCombos[1] = ["Bolstering","Overflowing","Tyrannical"];
  affixCombos[2] = ["Sanguine","Volcanic","Fortified"];
  affixCombos[3] = ["Teeming","Necrotic","Tyrannical"];
  affixCombos[4] = ["Raging","Volcanic","Tyrannical"];
  affixCombos[5] = ["Bolstering","Skittish","Fortified"];
  affixCombos[6] = ["Sanguine","Overflowing","Tyrannical"];
  affixCombos[7] = ["Teeming","Skittish","Fortified"];

  Bolstering = "//www.wowhead.com/affix=7/bolstering";
  Fortified = "www.wowhead.com/affix=10/fortified";
  Necrotic = "www.wowhead.com/affix=4/necrotic";
  Overflowing = "www.wowhead.com/affix=1/overflowing";
  Raging = "//www.wowhead.com/affix=6/raging";
  Sanguine = "www.wowhead.com/affix=8/sanguine";
  Skittish = "www.wowhead.com/affix=2/skittish";
  Teeming = "www.wowhead.com/affix=5/teeming";
  Tyrannical = "www.wowhead.com/affix=9/tyrannical";
  Volcanic = "www.wowhead.com/affix=3/volcanic";

  Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(),0,1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
  }

  $(function(){
    var today = new Date();
    var weekno = today.getWeek();
    var affixWeekEU = weekno + 4;
    var affixWeekUS = weekno + 2;

    if(new Date().getDay() >= 3){
      affixWeekEU += 1;
    }

    if(new Date().getDay() >= 2){
      affixWeekUS += 1;
    }

    affixWeekEU = affixWeekEU % 8;
    affixWeekUS = affixWeekUS % 8;

    AppendLastWeek(affixWeekEU, affixWeekUS);

    AppendThisWeek(affixWeekEU, affixWeekUS);

    AppendNextWeek(affixWeekEU, affixWeekUS);


  });

  $(".arrowButton").click(function(){
    $("html, body").animate({
        scrollTop: $('.allAffixes').offset().top
    }, 1000);
  });

  function AppendThisWeek(weekEU, weekUS) {
    $('.affixesEU').append('<div class="affix"><p>' + affixCombos[weekEU][0] + '</p><a rel="' + window[affixCombos[weekEU][0]] + '"><img src="AffixesImgs/' + affixCombos[weekEU][0] + '.jpg" height="100px" width="100px"></a></div>');
    $('.affixesEU').append('<div class="affix"><p>' + affixCombos[weekEU][1] + '</p><a rel="' + window[affixCombos[weekEU][1]] + '"><img src="AffixesImgs/' + affixCombos[weekEU][1] + '.jpg" height="100px" width="100px"></a></div>');
    $('.affixesEU').append('<div class="affix"><p>' + affixCombos[weekEU][2] + '</p><a rel="' + window[affixCombos[weekEU][2]] + '"><img src="AffixesImgs/' + affixCombos[weekEU][2] + '.jpg" height="100px" width="100px"></a></div>');

    $('.affixesUS').append('<div class="affix"><p>' + affixCombos[weekUS][0] + '</p><a rel="' + window[affixCombos[weekUS][0]] + '"><img src="AffixesImgs/' + affixCombos[weekUS][0] + '.jpg" height="100px" width="100px"></a></div>');
    $('.affixesUS').append('<div class="affix"><p>' + affixCombos[weekUS][1] + '</p><a rel="' + window[affixCombos[weekUS][1]] + '"><img src="AffixesImgs/' + affixCombos[weekUS][1] + '.jpg" height="100px" width="100px"></a></div>');
    $('.affixesUS').append('<div class="affix"><p>' + affixCombos[weekUS][2] + '</p><a rel="' + window[affixCombos[weekUS][2]] + '"><img src="AffixesImgs/' + affixCombos[weekUS][2] + '.jpg" height="100px" width="100px"></a></div>');
  }

  function AppendLastWeek(weekEU, weekUS) {
    weekEU -= 1;
    if(weekEU < 0)
    {
      weekEU = 7;
    }

    weekUS -= 1;
    if(weekUS < 0)
    {
      weekUS = 7;
    }

    $('.lastAffixesEU').append('<div class="smallAffix"><p>' + affixCombos[weekEU][0] + '</p><a rel="' + window[affixCombos[weekEU][0]] + '"><img src="AffixesImgs/' + affixCombos[weekEU][0] + '.jpg" height="75px" width="75px"></a></div>');
    $('.lastAffixesEU').append('<div class="smallAffix"><p>' + affixCombos[weekEU][1] + '</p><a rel="' + window[affixCombos[weekEU][1]] + '"><img src="AffixesImgs/' + affixCombos[weekEU][1] + '.jpg" height="75px" width="75px"></a></div>');
    $('.lastAffixesEU').append('<div class="smallAffix"><p>' + affixCombos[weekEU][2] + '</p><a rel="' + window[affixCombos[weekEU][2]] + '"><img src="AffixesImgs/' + affixCombos[weekEU][2] + '.jpg" height="75px" width="75px"></a></div>');

    $('.lastAffixesUS').append('<div class="smallAffix"><p>' + affixCombos[weekUS][0] + '</p><a rel="' + window[affixCombos[weekUS][0]] + '"><img src="AffixesImgs/' + affixCombos[weekUS][0] + '.jpg" height="75px" width="75px"></a></div>');
    $('.lastAffixesUS').append('<div class="smallAffix"><p>' + affixCombos[weekUS][1] + '</p><a rel="' + window[affixCombos[weekUS][1]] + '"><img src="AffixesImgs/' + affixCombos[weekUS][1] + '.jpg" height="75px" width="75px"></a></div>');
    $('.lastAffixesUS').append('<div class="smallAffix"><p>' + affixCombos[weekUS][2] + '</p><a rel="' + window[affixCombos[weekUS][2]] + '"><img src="AffixesImgs/' + affixCombos[weekUS][2] + '.jpg" height="75px" width="75px"></a></div>');
  }

  function AppendNextWeek(weekEU, weekUS) {
    weekEU += 1;
    if(weekEU > 7)
    {
      weekEU = 0;
    }

    weekUS += 1;
    if(weekUS > 7)
    {
      weekUS = 0;
    }

    $('.nextAffixesEU').append('<div class="smallAffix"><p>' + affixCombos[weekEU][0] + '</p><a rel="' + window[affixCombos[weekEU][0]] + '"><img src="AffixesImgs/' + affixCombos[weekEU][0] + '.jpg" height="75px" width="75px"></a></div>');
    $('.nextAffixesEU').append('<div class="smallAffix"><p>' + affixCombos[weekEU][1] + '</p><a rel="' + window[affixCombos[weekEU][1]] + '"><img src="AffixesImgs/' + affixCombos[weekEU][1] + '.jpg" height="75px" width="75px"></a></div>');
    $('.nextAffixesEU').append('<div class="smallAffix"><p>' + affixCombos[weekEU][2] + '</p><a rel="' + window[affixCombos[weekEU][2]] + '"><img src="AffixesImgs/' + affixCombos[weekEU][2] + '.jpg" height="75px" width="75px"></a></div>');

    $('.nextAffixesUS').append('<div class="smallAffix"><p>' + affixCombos[weekUS][0] + '</p><a rel="' + window[affixCombos[weekUS][0]] + '"><img src="AffixesImgs/' + affixCombos[weekUS][0] + '.jpg" height="75px" width="75px"></a></div>');
    $('.nextAffixesUS').append('<div class="smallAffix"><p>' + affixCombos[weekUS][1] + '</p><a rel="' + window[affixCombos[weekUS][1]] + '"><img src="AffixesImgs/' + affixCombos[weekUS][1] + '.jpg" height="75px" width="75px"></a></div>');
    $('.nextAffixesUS').append('<div class="smallAffix"><p>' + affixCombos[weekUS][2] + '</p><a rel="' + window[affixCombos[weekUS][2]] + '"><img src="AffixesImgs/' + affixCombos[weekUS][2] + '.jpg" height="75px" width="75px"></a></div>');
  }

});

//  1	        2	        3
// (+4)	    (+7)	    (+10)
//Raging	Necrotic	Fortified
//Bolstering	Overflowing	Tyrannical
//Sanguine	Volcanic	Fortified
//Teeming	Necrotic	Tyrannical
//Raging	Volcanic	Tyrannical
//Bolstering	Skittish	Fortified
//Sanguine	Overflowing	Tyrannical
//Teeming	Skittish	Fortified
