app.controller('mainController',['$scope',function($scope){
    var bookedSeats=[];
    $scope.showTickets=false;
    var stringValue="";
    $scope.seats=[];


//Seats Geneartion
    for(var i=65;i<73;i++){
        var res=String.fromCharCode(i);
        for(var j=1;j<6;j++){
            $scope.seats.push({
                value:res,
                number:j,
                status:true,
                available:true
            });
        }
    }
    
    
    
    
    
    $scope.seatAvailability=true;
    var count=0;


    $scope.book=function(){
        $scope.showTickets=true;
        stringValue="";
    
    }



    function storeDet(){
        $scope.seatNo= stringValue;
        $scope.seatAvailability=false;
        if($scope.seatno!=""){
        bookedSeats.push({
            name:$scope.name,
            tickets:$scope.total,
            seatno:$scope.seatNo
        });
        console.log("bookedSeats are==>"+bookedSeats.length);
        $scope.bookedDetails=bookedSeats;
        $scope.showTickets=false;
        count=0;
        }
        else{
            alert("please select  the seats");
        }
    }


    
    

    $scope.setSeatStatus=function(){
             if(count==$scope.total){
                for(var i=0;i<$scope.seats.length;i++){
                   
                        if($scope.seats[i].available==true && $scope.seats[i].status==false ){
                            $scope.seats[i].available=false;       
                            var tempValue= $scope.seats[i].value+""+$scope.seats[i].number;
                            stringValue=stringValue+tempValue;
                        
                        
                        console.log($scope.seatNo);
                        }
                    }
             
                storeDet();
             }
             else if(count>$scope.total){
                 alert("Please select only " +$scope.total + "tickets");
             }
             else{
                 var remainingSeats=$scope.total-count;
                 alert("please select "+remainingSeats+" more tickets");
             }
        }


      $scope.errorAlert=function(seat){
          
          if(seat.available==false){
              alert("already booked");
          }
          else{
             seat.status=!seat.status;
             if(seat.status==false){
                 count++;
             }
             else{
                 count--;
             }
            }
          }

          $scope.falseAlert=function(){
              alert("already booked");
          }
          
       

}]);