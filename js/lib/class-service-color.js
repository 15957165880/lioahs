 /*
  * Author:liaohs
  * Date:2016.3.16
  * Name:boomgame
  */



mainApp.controller('color',["$scope" ,"$http" ,function($scope,$http) {
	$scope.otohref={
		serviceIsOpen:false,
		href:"#"
	}
    /*  能否预约   */
     $http.get(dataport.serviceIsOpen)
      .success(function(data){

      	console.log(data)
      	if(!data.error){
      		if(data.data.ok){
      			$scope.otohref.serviceIsOpen=true
      		}
      	}

      })  
      .error(function(e){
        console.log(e)
      }); 

      $scope.$watch('otohref',function(n,o){
      	
      	if(n.serviceIsOpen){
      		$scope.otohref.href="one-to-one.html"
      	}
      },true)

}])




