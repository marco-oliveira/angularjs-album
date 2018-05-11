angular.module('minhasDiretivas', [])
    .directive('meuPanel', function () {
        var ddo = {};
        ddo.restrict = 'AE';
        ddo.transclude = true;
        ddo.scope = {
            titulo : '@'
        };
        ddo.templateUrl = 'js/directives/meu-panel.html';

        return ddo;
    }).directive('minhaFoto', function () {
        var ddo = {};
        ddo.restrict = 'AE';
        ddo.scope = {
            titulo : '@',
            url : '@'
        };
        ddo.templateUrl = 'js/directives/minha-foto.html';

        return ddo;
    })
    .directive('meuBotaoPerigo', function () {
        var ddo = {};
        ddo.restrict= 'AE';
        ddo.transclude= true;
        ddo.scope = {
            nome : '@',
            acao: '&'
        };

        ddo.template = ' <button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>'

        return ddo;
    })
    .directive('meuFocus', function () {
        var ddo = {};
        ddo.restrict='A';

        ddo.link = function (scope, element) {
            scope.$on('fotoCadastrada', function () {
                element[0].focus();
            })
        };

        return ddo;
    });