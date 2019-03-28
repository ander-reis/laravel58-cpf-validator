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

                        @if($errors->any())
                            <ul class="alert alert-danger">
                                @foreach($errors->all() as $error)
                                    <li>{{$error}}</li>
                                @endforeach
                            </ul>
                        @endif


                        <div class="form-row">
                            <div class="col-md-4 mb-3">
                                <label for="cpf">CPF</label>
                                <input type="text" class="form-control" name="cpf" id="cpf" placeholder="CPF"
                                       required>
                                <div class="invalid-feedback">
                                    error
                                </div>
                            </div>
                        </div>


                        <form class="needs-validation" novalidate action="{{ route('teste') }}" method="POST">
                            @csrf
                            <div class="form-row">
                                <div class="col-md-4 mb-3">
                                    <label for="valor">Valor</label>
                                    <input type="text" class="form-control" name="vl_salario" id="vl_salario"
                                           placeholder="valor" required pattern=".{3}|.{3,9}">
                                           {{--placeholder="valor" required pattern="/^0*([1-9]|[1-8][0-9]|9[0-9]|[12][0-9]{2}|300)$/gm">--}}

                                    {{--<div class="invalid-feedback">--}}
                                        {{--Campo obrigatório--}}
                                    {{--</div>--}}
                                    <div id="validate" class="invalid-feedback"></div>


                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="contribuicao">Contribuição</label>
                                    <input type="text" class="form-control" name="vl_boleto" id="vl_boleto"
                                           placeholder="Contribuição">
                                    <div class="invalid-feedback">
                                        error
                                    </div>

                                </div>
                            </div>
                            <button class="btn btn-primary" type="submit">Próximo</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
