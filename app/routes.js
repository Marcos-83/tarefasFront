app.config(function($routeProvider) {
    $routeProvider
       
    .when('/home', {
            templateUrl: 'app/views/home.html',
            controller: 'HomeController'
        })

    .when('/projetos', {
            templateUrl: 'app/views/projetos.html',
            controller: 'projetosController'
        })
        



        
        .otherwise({
            redirectTo: '/home' // Redireciona para a página inicial por padrão
        });
});
