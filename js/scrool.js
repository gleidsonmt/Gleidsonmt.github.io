$(window).scroll(function() {
  // o fera no javascript kkk
  var x = $(this).scrollTop();

  if($(this).scrollTop() > 150){
    document.getElementById('toolbar').style.background = 'white';
    document.getElementById('toolbar').style.boxShadow  = '0 2px 4px 0 rgba(0,0,0,0.2)';
    document.getElementById('toolbar').style.color  = 'white';
  } else {
    document.getElementById('toolbar').style.background = 'transparent'
    document.getElementById('toolbar').style.boxShadow  = 'none';
  }

  // visualizar posicao do scrool
  // console.log(x);

});
