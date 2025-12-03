// main.js - small script for nav toggle and dynamic year
document.addEventListener('DOMContentLoaded', function(){
  // set year in all pages
  var years = document.querySelectorAll('#year, #year-2, #year-3, #year-4, #year-5');
  years.forEach(function(el){ if(el) el.textContent = new Date().getFullYear(); });

  // nav toggles (several pages have their own toggle id)
  ['#nav-toggle','#nav-toggle-2','#nav-toggle-3','#nav-toggle-4','#nav-toggle-5'].forEach(function(toggleId){
    var t = document.querySelector(toggleId);
    if(!t) return;
    var nav = t.nextElementSibling || document.getElementById('nav') || document.getElementById('nav-2') || document.getElementById('nav-3');
    t.addEventListener('click', function(){
      // attempt to find nearest nav
      var parent = t.closest('.header-inner');
      var localNav = parent ? parent.querySelector('.nav') : null;
      if(localNav) localNav.style.display = (localNav.style.display === 'block') ? 'none' : 'block';
      else if(nav) nav.style.display = (nav.style.display === 'block') ? 'none' : 'block';
      t.setAttribute('aria-expanded', nav && nav.style.display === 'block' ? 'true' : 'false');
    });
  });
});
