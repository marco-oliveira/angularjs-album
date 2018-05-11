angular.module('meusServicos', [])
    .factory('recursoFoto', function ($resource) {
      return  $resource('v1/fotos/:fotoId', null, {
            update:{
                method: 'PUT'
            }
        });
    })
    .factory('cadastroFotos', function (recursoFoto, $q, $rootScope) {
       var service = {};
        service.cadastrar = function (foto) {
            return $q(function (resolve, reject) {
                if (foto._id){
                    recursoFoto.update({fotoId:foto._id}, foto, function () {
                        $rootScope.$broadcast('fotoCadastrada');
                        resolve({
                            mensagem : 'Foto '+foto.titulo+' alterada com sucesso.',
                            inclusao : false
                        });
                        reject({
                            mensagem: 'Não pode alterar a foto '+ foto.titulo
                        })
                    })
                }else {
                    recursoFoto.save(foto, function () {
                        $rootScope.$broadcast('fotoCadastrada');

                        resolve({
                            mensagem : 'Foto '+foto.titulo+' salva com sucesso.',
                            inclusao : true
                        });
                        reject({
                            mensagem: 'Não pode a foto '+ foto.titulo
                        })
                    })
                }
            })
        };

       return service;
    });