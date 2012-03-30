var CWLite = function () {

    // private vars

    // public properties & methods
    return {

        displayUserMessage: function (msgType, msgText) {
        
            var messageClassName = '';
            switch (msgType.toLowerCase()) {
                case 'info':
                    messageClassName = 'cwlite-info';
                    break;
                case 'error':
                    messageClassName = 'cwlite-error';
                    break;
                default:
                    break;
            } 

            $('#cwlite-message').addClass(messageClassName).find('span#msg-txt').text(msgText);
            $('#cwlite-message').fadeIn('slow');
            window.setTimeout(function () { $('#cwlite-message').fadeOut('slow'); }, 6000);

        }
    
    };

}();

CWLite.Course = function () {

    return {

        loadCreateForm: function () {

            // only need to create the container once
            if ($('#create-container').length === 0) {
                $('#main').append('<section id="create-container"></section>');
            }

            // if present, show it; otherwise, load html
            if ($('#course-config-block').length > 0) {
                $('#course-config-block').fadeIn('slow');
            } else {
                $('#create-container').load('course_config.html').fadeIn('slow');
            }

            // close menu
            $(document).trigger('click');

        }

    };

}();

$(document).ready(function () {

    // right now, just want to make sure links go nowhere
    $('a').click(function (ev) {

        ev.preventDefault();

        if ($(this).parent('li#create-course').length > 0) {
            CWLite.Course.loadCreateForm();
        }

    })

});
