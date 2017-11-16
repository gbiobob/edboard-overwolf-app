/**
 * Main vars
 */

var baseurlEdB = 'ed-board.net/en';

/**
 * Page launch
 */

$(function() {

  start();
  initButtons();

});

$('body').css('zoom','200%');

/**
 * Buttons actions
 */

 function initButtons() {

  //-- Lang change
  $('.lang').click(function() {
   lang = $(this).attr('data-lang');
   localStorage.setItem('lang',lang);
    reloadFavNote();
    $('#lang_choose').hide();
    $('#content').show();
  });

  //-- Open/close fav list
  $('#action a.toggle').click(function() {
    $('#action a.toggle').toggle();
    $('#infos iframe').toggle();
  });

  //-- Refresh notes fav list
  $('#action a#reload').click(function() {
    reloadFavNote();
  });

  $('#open-options').click(function() {
    $('#lang_choose').show();
    $('#content').hide();
  });

  $('.orientation').click(function() {
    $('.orientation').toggle();
    $('#content').toggleClass('vertical');
  });

  var show = 0;
  $('.auto_hide').click(function() {
    show = (show+1)%3;
    $('.auto_hide').hide();
    $('.auto_hide.hide-'+show).show();
    $('#content').removeClass('hide-0 hide-1 hide-2');
    $('#content').addClass('hide-'+show);
  });

}

/**
 * Reload fav notes iframe
 */

function reloadFavNote() {
  loadDatas();
}

/**
 * Start load : Lang chooser
 */

function start() {

  var lang = localStorage.getItem('lang');

  if(lang==null) {
    $('#lang_choose').show();
    $('#content').hide();
  } else {
    $('#lang_choose').hide();
    $('#content').show();
  }


  $('.color-opt').each(function(){
    var color = $(this).attr('data-color');
    $(this).css('background-color','#'+color);
  });

  $('.color-opt').click(function() {
    var color = $(this).attr('data-color');
    $('#color-pick').val(color);
    $('#color-pick').keyup();
  });


  loadDatas();
  changeColor();

}

/**
 * Load user data from ed-board.net
 */

function loadDatas() {

  var lang = localStorage.getItem('lang');
  var color = localStorage.getItem('opt_color');

  var baselang = getUrlLang();

  var params = $('#datas').attr('data-url');
  if (color!='' && color!='undefined' && color!='null') {
    params += '&color='+color;
    colorUI(color);
  }
  $('#datas').attr('src', 'https://ed-board.net'+params+'&lang='+baselang+'&utm_source=overwolf&utm_medium=app&utm_campaign=ovedboard');
}

/**
 * Update UI color
 */

function changeColor() {
  var color = localStorage.getItem('opt_color');
  if(color==null) {
    color = 'FD610F';
  } else {
    color = rgb2hex(color);
  }

  $('#color-pick').val(color);

  $('#color-pick').keyup(function(){
    var color = $(this).val();
    if(color.length == 6) {
      localStorage.setItem('opt_color',hexToRgb(color));
      colorUI(hexToRgb(color));
      loadDatas();
    }
  });
}

/**
 * Update UI color
 */

function colorUI(color) {
  $('body *').css({"color":"rgb("+color+")"});
  $('body *').css({"border-color":"rgb("+color+")"});
}

/**
 * Get iframe lang url
 */

function getUrlLang() {

  var lang = localStorage.getItem('lang');

  switch(lang) {
    case 'fr':
      return 'fr';
      break;

    case 'ru':
      return 'ru';
      break;

    case 'de':
      return 'de';
      break;

    case 'es':
      return 'es';
      break;

    case 'pt':
      return 'pt';
      break;

    case 'en':
    default:
      return 'en';
      break;
  }
}

/**
 * Color Hex to RGB
 */

function hexToRgb(hex) {
hex = parseInt(hex,16);
    var r = hex >> 16;
    var g = hex >> 8 & 0xFF;
    var b = hex & 0xFF;
    return r+','+g+','+b;
}

function rgb2hex(rgb) {
 rgb = rgb.match(/^[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ?
  ("0" + parseInt(rgb[0],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) : '';
}

/**
 * Radio
 */

var withRadio = false;
function openSubRadio(){
  overwolf.windows.obtainDeclaredWindow("SubRadio", function(result){
    if (result.status == "success"){
      overwolf.windows.restore(result.window.id, function(result){
          console.log(result);
      });
    }
  });
};

/**
 * Overwolf functions
 */

function dragResize(edge){
  overwolf.windows.getCurrentWindow(function(result){
    if (result.status=="success"){
      overwolf.windows.dragResize(result.window.id, edge);
    }
  });
};

function dragMove() {
  overwolf.windows.getCurrentWindow(function(result){
    if (result.status=="success"){
      overwolf.windows.dragMove(result.window.id);
    }
  });
};

function closeWindow(){
  overwolf.windows.getCurrentWindow(function(result){
    if (result.status=="success"){
      overwolf.windows.close(result.window.id);
    }
  });
};

function minimizeWindow(){
  overwolf.windows.getCurrentWindow(function(result){
    if (result.status=="success"){
      overwolf.windows.minimize(result.window.id);
    }
  });
};

function openSubNotes(){
  overwolf.windows.obtainDeclaredWindow("SubNotes", function(result){
    if (result.status == "success"){
      overwolf.windows.restore(result.window.id, function(result){
          console.log(result);
      });
    }
  });
};

function openSubCmdr(){
  overwolf.windows.obtainDeclaredWindow("SubCmdr", function(result){
    if (result.status == "success"){
      overwolf.windows.restore(result.window.id, function(result){
          console.log(result);
      });
    }
  });
};

function openSubHangar(){
  overwolf.windows.obtainDeclaredWindow("SubHangar", function(result){
    if (result.status == "success"){
      overwolf.windows.restore(result.window.id, function(result){
          console.log(result);
      });
    }
  });
};

function openSubGroup(){
  overwolf.windows.obtainDeclaredWindow("SubGroup", function(result){
    if (result.status == "success"){
      overwolf.windows.restore(result.window.id, function(result){
          console.log(result);
      });
    }
  });
};

function openSubWiki(){
  overwolf.windows.obtainDeclaredWindow("SubWiki", function(result){
    if (result.status == "success"){
      overwolf.windows.restore(result.window.id, function(result){
          console.log(result);
      });
    }
  });
};





