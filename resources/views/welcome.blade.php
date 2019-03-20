@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">aqui Dashboard</div>

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

                        <form class="needs-validation" novalidate action="{{ route('teste') }}" method="POST">
                            @csrf
                            <div class="form-row">
                                <div class="col-md-4 mb-3">
                                    <label for="cpf">CPF</label>
                                    <input type="text" class="form-control" name="cpf" id="cpf" placeholder="CPF" required>
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
