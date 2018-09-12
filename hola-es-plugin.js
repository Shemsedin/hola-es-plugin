videojs.registerPlugin('hola-es', function() {

  var vhola = document.createElement("script");
  vhola.async = false;
  vhola.type = "text/javascript";
  vhola.crossOrigin = "Anonymous";

  var useSSL = "https:" == document.location.protocol;
  vhola.src = (useSSL ? "https:" : "http:") + "//player.h-cdn.com/loader.js?customer=estandard";
  var node = document.getElementsByTagName("script")[0];
  node.parentNode.insertBefore(vhola, node);

  if (!window.videojs)
    return;

  function init_hola() {
    window.hola_cdn.init_estandard();
  }
  if (window.hola_cdn)
    init_hola();
  else
    window.hola_cdn_on_load = init_hola;
});
