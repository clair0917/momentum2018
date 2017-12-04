$('#session-filters').each(function() {
  var $thisDropdown = $(this);
  var options = [],
  $option = $thisDropdown.children('option'),
  customSelect;

  // Hide the ugly browser one.
  $thisDropdown.hide();

  // Create custom select array to prettyfy.
  $option.each(function() {
    options.push($(this).html());
  });

  // Add clean Markup to work with.
  $thisDropdown.after('<ul class="custom-select" data-selected-value="' + options[0] + '">');
  customSelect = $thisDropdown.siblings('.custom-select');
  customSelect.append('<li class="selected-option"><span>' + options[0] + '</span>');
  customSelect.children('.selected-option').append('<ul class="options">');

  // Insert out values and attach.
  for(var i = 1; i < options.length; i++) {
    customSelect.find('.options').append('<li data-value=' + options[i] + '>' + options[i] + '</li>');
  }

  // Click action & synchronization with origin select for submitting form.
  customSelect.click(function() {
    $(this).toggleClass('open');
    $('.options',this).toggleClass('open');
  });

  customSelect.find('.options li').click(function() {
    var selection = $(this).text();
    var dataValue = $(this).attr('data-value');
    var selected = $(customSelect).find('.selected-option span').text(selection);

    for(var i = 1; i < options.length; i++) {
      if($(option[i]).text() === selected.text()) {
        $(option[i]).attr('selected', 'true');
        $(option[i]).siblings().removeAttr('selected');
      }
    }

    $(customSelect).attr('data-selected-value',dataValue);
  });
});
