angular.module('alurapic').controller('FotoController', function ($scope, recursoFoto, cadastroFotos, $routeParams) {

    $scope.foto = {};
    $scope.mensagem = {};


    if ($routeParams.fotoId){
        recursoFoto.get({fotoId:$routeParams.fotoId}, function (foto) {
            $scope.foto = foto;
            console.log('Foto Alterada com sucesso.');
        }, function (erro) {
            console.log(erro);
            $scope.mensagem = "Não foi possivel obter a foto.";
        } )
    }

    $scope.submeter = function () {
        if ($scope.formulario.$valid){
            cadastroFotos.cadastrar($scope.foto)
                .then(function (dados) {
                    if (dados.inclusao) $scope.foto = {};
                    $scope.mensagem = dados.mensagem;
                })
                .catch(function (erro) {
                    $scope.mensagem = erro.mensagem;
                })
        }

    };

});