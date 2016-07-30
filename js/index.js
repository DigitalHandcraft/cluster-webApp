$(function() {
  $.ajax({
   type: "GET",
   url: "https://raw.githubusercontent.com/DigitalHandcraft/cluster-webApp/master/testData/user/1",
   success: function(data){
    console.log("fnit")
    console.log(data);
   },
   error: function() {

   }
 });
})
