var app = angular.module("appEmp",[]);

/* View Data Controller */
app.controller("viewData",function($scope,$http){
    
    $http({
        method : "GET",
        url : "http://dummy.restapiexample.com/api/v1/employees"
      }).then(function mySuccess(response) {
          $scope.data = response.data.data;


          /* Testing Part */

          console.log($scope.data);




        }, function myError(response) {
          $scope.data = response.statusText;
      });

    
});


/* Save Data Controller  */

app.controller('addData', function($scope,$http) {
    $scope.master = {"name":"","salary":"","age":""};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();

    $scope.postdata = function (user) {
        var data = user;
        console.log(data);

        var req = {
            method: 'POST',
            url: 'http://dummy.restapiexample.com/api/v1/create',
            headers: {
              'Content-Type': "application/json"
            },
            data: JSON.stringify(data)
           }


        $http(req).then(
            function (response) {
                if (response.data) $scope.msg = "✅ Post Data Submitted Successfully!";
            },
            function (response) {
                $scope.msg = "Service not Exists";
                $scope.statusval = response.status;
                $scope.statustext = response.statusText;
                $scope.headers = response.headers();
            }
        );
    };


});
