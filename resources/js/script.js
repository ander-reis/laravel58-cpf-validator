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


    // const valor = document.querySelector("#valor");
    // const contribuicao = document.querySelector('#contribuicao');

    function moedaParaNumero(valor)
    {
        return isNaN(valor) == false ? parseFloat(valor) :   parseFloat(valor.replace("R$","").replace(".","").replace(",","."));
    }

    //http://blog.fmansano.com/javascript/converter-numero-para-moeda-e-vice-versa/

    $("#valor").on("keyup", function(){
        let valor = $("#valor").val();
        // let contribuicao = $('#contribuicao').val();

        let valor1 = valor.toString().replace(",", "")
        const total = Math.floor(valor1/3);


        console.log(total.toFixed(2));
        $('#contribuicao').val(total);
    })
});
