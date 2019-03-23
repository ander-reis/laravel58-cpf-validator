// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

})();


$(document).ready(function () {
    $('#cpf').mask('000.000.000-00');
    $('#valor').mask('000.000.000.000.000,00', {reverse: true});
    // $('#contribuicao').mask('000.000.000.000.000,00', {reverse: true});


    const valor = document.querySelector("#valor");
    const contribuicao = document.querySelector('#contribuicao');

    $("#valor").on("keyup", function(){
        const total = valor.value / 3;

        console.log(total);
        contribuicao.value = total;
    })
});
