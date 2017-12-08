$(document).ready(function() {

  $('.accordion-section').each(function() {
    var $section = $(this);
    var $trigger = $section.find('.accordion-trigger');
    var $content = $section.find('.accordion-content');

    $trigger.on('click', function() {
      $content.toggleClass('open');
      $('.accordion-content').not($content).removeClass('open');
    });
  });
});
