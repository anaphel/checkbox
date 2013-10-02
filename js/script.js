$(document).ready(function() {
    $('.awesome-checkbox').click(function() {
        if ($(this).find(':checkbox').attr('checked') != 'checked') {
            $(this).addClass('selected');
            $(this).find(':checkbox').attr('checked', 'checked');
        } else {
            $(this).removeClass('selected');
            $(this).find(':checkbox').removeAttr('checked');
        }
    });
});