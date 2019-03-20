@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif



                        <form class="needs-validation" novalidate>
                            <div class="form-row">
                                <div class="col-md-4 mb-3">
                                    <label for="cpf">CPF</label>
                                    <input type="text" class="form-control" id="cpf" placeholder="CPF">
                                    {{--<div class="invalid-feedback">--}}
                                        {{--error--}}
                                    {{--</div>--}}
                                </div>
                            </div>
                            <button class="btn btn-primary" type="submit">Próximo</button>
                        </form>

                        {{--<script>--}}
                            {{--// Example starter JavaScript for disabling form submissions if there are invalid fields--}}
                            {{--(function() {--}}
                                {{--'use strict';--}}
                                {{--window.addEventListener('load', function() {--}}
                                    {{--// Fetch all the forms we want to apply custom Bootstrap validation styles to--}}
                                    {{--var forms = document.getElementsByClassName('needs-validation');--}}
                                    {{--// Loop over them and prevent submission--}}
                                    {{--var validation = Array.prototype.filter.call(forms, function(form) {--}}
                                        {{--form.addEventListener('submit', function(event) {--}}
                                            {{--if (form.checkValidity() === false) {--}}
                                                {{--event.preventDefault();--}}
                                                {{--event.stopPropagation();--}}
                                            {{--}--}}
                                            {{--form.classList.add('was-validated');--}}
                                        {{--}, false);--}}
                                    {{--});--}}
                                {{--}, false);--}}
                            {{--})();--}}
                        {{--</script>--}}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
