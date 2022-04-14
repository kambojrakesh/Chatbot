var count =0;

$(document).on('click', '.alm-load-more-btn', function (e) {

     event.preventDefault();       
     location.href = "events";
     
    $("#load-more").css('display', 'none');

  });

// $(document).on('click', '.alm-load-more-btn', function (e) {
//   e.preventDefault();
//   //console.log("loadmore click");
//   if(count == 2){
//   //  location.href = "events";
//   document.getElementById("load-more").style.display = 'block';
  
//   }else
//   {
//     count +=1;
//     document.getElementById("load-more").style.backgroundColor = 'green';
//     document.getElementById("load-more").style.color = 'green';
//   }
// });



