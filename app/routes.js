app.config(function($routeProvider) {
    $routeProvider
       
    .when('/home', {
            templateUrl: 'app/views/home.html',
            controller: 'HomeController'
        })

    
        



        
        .otherwise({
            redirectTo: '/home' // Redireciona para a página inicial por padrão
        });
});
