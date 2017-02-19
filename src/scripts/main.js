


(function(){

    document.addEventListener("DOMContentLoaded", function() {

        document.getElementById('js-menu-toggle').addEventListener('click', function (e) {
            e.preventDefault();
            var layout = document.getElementById('js-layout');
            if (layout.classList.contains('is-active')) {
                layout.classList.remove('is-active');
            } else {
                layout.classList.add('is-active');
            }
        });
    });

}());

