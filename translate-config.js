/**
 * GTranslate Configuration & Loader
 * Supports English and Indonesian
 */
window.gtranslateSettings = {
  "default_language": "en",
  "languages": ["en", "id"],
  "wrapper_selector": ".gtranslate_wrapper",
  "flag_size": 24,
  "flag_style": "3d",
  "alt_flags": { "en": "usa" },
  "horizontal_position": "inline"
};

// Load GTranslate Script
(function() {
  var s = document.createElement('script');
  s.src = 'https://cdn.gtranslate.net/widgets/latest/dropdown.js';
  s.defer = true;
  document.head.appendChild(s);
})();
