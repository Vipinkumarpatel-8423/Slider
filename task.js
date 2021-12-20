     var imgNo=0;
             function slider(){
                   var img=document.getElementsByClassName("img");
                   var indicator=document.getElementsByClassName("indicator");

                  for(var i=0;i<img.length;i++){
                     img[i].style.display="none";
                     indicator[i].style.background="white";
                    }
             img[imgNo].style.display="block";
             indicator[imgNo].style.background="blue";

            imgNo++;
                if(imgNo==3)
                   imgNo=0;
              } 
          setInterval("slider()",1500);
    