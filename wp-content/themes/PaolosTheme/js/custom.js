jQuery(document).ready(function($) {

  $('#postTabs a').on('click', function(e) {
    e.preventDefault();
    $('#postTabs a').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();
    //get data-tab of the attribute clicked and add it as class and show the content
    $('#' + $(this).data('tab')).show();
  });

}(jQuery));