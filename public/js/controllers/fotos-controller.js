angular.module('alurapic').controller('FotosController', function ($scope, recursoFoto) {

    $scope.fotos = [];

    $scope.filtro = '';

    $scope.mensagem = '';


    recursoFoto.query(function (fotos) {
        $scope.fotos = fotos;
    }, function (erro) {
        console.log(erro);
    });


    //substituido pelo modulo resource
    /*$http.get("/v1/fotos")
        .success(function (fotos) {
            $scope.fotos = fotos;
        }).error(function (erro) {

            console.log(erro);
    });*/


   
    $scope.remover = function (foto) {
        recursoFoto.delete({fotoId : foto._id}, function () {
            var indice = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indice, 1);
            $scope.mensagem = "Foto "+foto.titulo+" removida com sucesso.";
        }, function (erro) {
            console.log(erro);
            $scope.mensagem ='Não foi possível remover a foto.';
        })

        //substituido pelo modulo resource
       /* $http.delete("/v1/fotos/"+foto._id)
            .success(function () {
                var indice = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(indice, 1);
                $scope.mensagem = "Foto "+foto.titulo+" removida com sucesso.";
            })
            .error(function (erro) {
                console.log(erro);
                $scope.mensagem ='Não foi possível remover a foto.';
            });*/
    }
});