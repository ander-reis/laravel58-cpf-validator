// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                var valor = $('#vl_salario').val();
                var virgula = valor.split(',');
                var salario = virgula[0].replace('.', '');
                console.log(salario);

                if (salario < 300) {
                    //     console.log('erro');
                    //
                    $("#validate").html("Valor do Salário deve ser maior que R$ 300,00");
                    $(".form-control").addClass("invalid");
                    $(".form-control").addClass("is-invalid");

                    $("#validate").addClass("error");
                    $("#vl_salario").addClass("error-text");

                    event.preventDefault();
                    event.stopPropagation();
                    form.classList.add('was-invalidated');
                } else {
                    //     console.log('certo');
                        $("#validate").removeClass("error");
                        $(".form-control").removeClass("is-invalid");
                        form.classList.add('was-validated');
                        $("#vl_salario").removeClass("error-text");
                        $("#validate").html("Certo!");
                }
                form.classList.add('was-validated');
            }, false);
        });

    }, false);

})();

// ^([0–9]|1[0-9]|2[0–9]|3[0-9]|4[0-9])

$(document).ready(function () {
    $('#cpf').mask('000.000.000-00');
    $('#valor').mask('000.000,00', {reverse: true});
    $('#contribuicao').mask('#.##0,00', {reverse: true});


    // const valor = document.querySelector("#valor");
    // const contribuicao = document.querySelector('#contribuicao');

    function moedaParaNumero(valor) {
        return isNaN(valor) == false ? parseFloat(valor) : parseFloat(valor.replace("R$", "").replace(".", "").replace(",", "."));
    }

    function numeroParaMoeda(n, c, d, t) {
        c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "," : d, t = t == undefined ? "." : t, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    }

    //http://blog.fmansano.com/javascript/converter-numero-para-moeda-e-vice-versa/

    $("#valor").on("keyup", function () {


        let valor = $("#valor").val();
        // let contribuicao = $('#contribuicao').val();

        let valor1 = valor.replace(",", "").replace('.', '');

        const total = Math.floor(valor1 / 30);

        console.log(total / 100);

        // $('#contribuicao').val(total/100);
        $('#contribuicao').val((total / 100).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
    })
});
