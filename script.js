var imagens        = new Array( 'whats.ico', 'whats1.ico');
var num_img    = 2;
var img_atual =0;

function ChangeImg()
{
    if (img_atual < (num_img - 1) )
    {
        img_atual = img_atual + 1;
    }
   else
   {
        img_atual = 0;
    }
    document["img_apoio"].src    = "imagens/" + imagens[img_atual];
   var x = setTimeout ("ChangeImg()", 1000);
}

//pagina gato
function aparecer() 
{
      var cont=1;
      if(document.getElementById("chek").checked == true)
        {
           while(cont<69)
            {
               document.getElementById(cont).style.display = "none";
               cont=cont+1;
            };      
        }
      var cont=1;
      while(cont<7)
        {
       document.getElementById(cont).style.display = "block";
       cont=cont+1;
        };
      document.getElementById("1").style.width = "100%"; 

}
function aparecer1() 
{
      var cont=1;
      if(document.getElementById("chek1").checked == true)
        {
           while(cont<69)
            {
               document.getElementById(cont).style.display = "none";
               cont=cont+1;
            };      
        }
      var cont=7;
      while(cont<12)
        {
       document.getElementById(cont).style.display = "block";
       cont=cont+1;
        };    
}
function aparecer2() 
{
      var cont=1;
      if(document.getElementById("chek2").checked == true)
        {
           while(cont<69)
            {
               document.getElementById(cont).style.display = "none";
               cont=cont+1;
            };      
        }
      var cont=12;
      while(cont<17)
        {
       document.getElementById(cont).style.display = "block";
       cont=cont+1;
        };    
}
function aparecer3() 
{
      var cont=1;
      if(document.getElementById("chek3").checked == true)
        {
           while(cont<69)
            {
               document.getElementById(cont).style.display = "none";
               cont=cont+1;
            };      
        }
      var cont=17;
      while(cont<24)
        {
       document.getElementById(cont).style.display = "block";
       cont=cont+1;
        };    
}
function aparecer4() 
{
      var cont=1;
      if(document.getElementById("chek4").checked == true)
        {
           while(cont<69)
            {
               document.getElementById(cont).style.display = "none";
               cont=cont+1;
            };      
        }
      var cont=24;
      while(cont<29)
        {
       document.getElementById(cont).style.display = "block";
       cont=cont+1;
        };    
}
function aparecer5() 
 {
      var cont=1;
      if(document.getElementById("chek5").checked == true)
        {
           while(cont<69)
            {
               document.getElementById(cont).style.display = "none";
               cont=cont+1;
            };      
        }
      var cont=29;
      while(cont<46)
        {
       document.getElementById(cont).style.display = "block";
       cont=cont+1;
        };    
}
function aparecer6() 
{
      var cont=1;
      if(document.getElementById("chek6").checked == true)
        {
           while(cont<69)
            {
               document.getElementById(cont).style.display = "none";
               cont=cont+1;
            };      
        }
      var cont=46;
      while(cont<51)
        {
       document.getElementById(cont).style.display = "block";
       cont=cont+1;
        };    
}
function aparecer7() 
{
      var cont=1;
      if(document.getElementById("chek7").checked == true)
        {
           while(cont<69)
            {
               document.getElementById(cont).style.display = "none";
               cont=cont+1;
            };      
        }
      var cont=51;
      while(cont<56)
        {
       document.getElementById(cont).style.display = "block";
       cont=cont+1;
        };    
}
function aparecer8() 
{
      var cont=1;
      if(document.getElementById("chek8").checked == true)
        {
           while(cont<69)
            {
               document.getElementById(cont).style.display = "none";
               cont=cont+1;
            };      
        }
      var cont=56;
      while(cont<64)
        {
       document.getElementById(cont).style.display = "block";
       cont=cont+1;
        };    
}
function aparecer9() 
{
      var cont=1;
      if(document.getElementById("chek9").checked == true)
        {
           while(cont<69)
            {
               document.getElementById(cont).style.display = "none";
               cont=cont+1;
            };      
        }
      var cont=64;
      while(cont<69)
        {
       document.getElementById(cont).style.display = "block";
       cont=cont+1;
        };    
}
function aparecer11() 
{
      var cont=1;
      if(document.getElementById("chek11").checked == true)
        {
           while(cont<69)
            {
               document.getElementById(cont).style.display = "block";
               cont=cont+1;
            };  
            document.getElementById("1").style.display = "none";        
}
}

//pagina cachorro
function aparecer12() 
{
      var cont=68;
      if(document.getElementById("chek12").checked == true){
           while(cont<143)
            {
               document.getElementById(cont).style.display = "block";
               cont=cont+1;
            }; 
           document.getElementById("1").style.display = "none";       
    }    
}
function aparecer13() 
{
      var cont=68;
      if(document.getElementById("chek13").checked == true)
        {
           while(cont<143)
            {
               document.getElementById(cont).style.display = "none";
               cont=cont+1;
            };      
        }
      var cont=68;
      while(cont<74)
        {
       document.getElementById(cont).style.display = "block";
       cont=cont+1;
        }; 
     document.getElementById("68").style.width = "100%";   
}
function aparecer14() 
{
      var cont=68;
      if(document.getElementById("chek14").checked == true)
        {
           while(cont<143)
            {
               document.getElementById(cont).style.display = "none";
               cont=cont+1;
            };      
        }
      var cont=74;
      while(cont<77)
        {
       document.getElementById(cont).style.display = "block";
       cont=cont+1;
        };    
}
function aparecer15() 
{
      var cont=68;
      if(document.getElementById("chek15").checked == true)
        {
           while(cont<143) 
            {
               document.getElementById(cont).style.display = "none";
               cont=cont+1;
            };      
        }
      var cont=77;
      while(cont<82)
        {
       document.getElementById(cont).style.display = "block";
       cont=cont+1;
        };    
}
function aparecer16() 
{
      var cont=68;
      if(document.getElementById("chek16").checked == true)
        {
           while(cont<143)
            {
               document.getElementById(cont).style.display = "none";
               cont=cont+1;
            };      
        }
      var cont=82;
      while(cont<91)
        {
       document.getElementById(cont).style.display = "block";
       cont=cont+1;
        };    
}
function aparecer17() 
{
      var cont=68;
      if(document.getElementById("chek17").checked == true)
        {
           while(cont<143)
            {
               document.getElementById(cont).style.display = "none";
               cont=cont+1;
            };      
        }
      var cont=91;
      while(cont<98)   
        {
       document.getElementById(cont).style.display = "block";
       cont=cont+1;
        };    
}
function aparecer18() 
 {
      var cont=68;
      if(document.getElementById("chek18").checked == true)
        {
           while(cont<143)
            {
               document.getElementById(cont).style.display = "none";
               cont=cont+1;
            };      
        }
      var cont=98;
      while(cont<106)
        {
       document.getElementById(cont).style.display = "block";
       cont=cont+1;
        };    
}
function aparecer19() 
{
      var cont=68;
      if(document.getElementById("chek19").checked == true)
        {
           while(cont<143)
            {
               document.getElementById(cont).style.display = "none";
               cont=cont+1;
            };      
        } 
      var cont=106;
      while(cont<120)
        {
       document.getElementById(cont).style.display = "block";
       cont=cont+1;
        }; 
}
function aparecer20() 
{
      var cont=68;
      if(document.getElementById("chek20").checked == true)
        {
           while(cont<143)
            {
               document.getElementById(cont).style.display = "none";
               cont=cont+1;
            };      
        }
      var cont=120;
      while(cont<128)
        {
       document.getElementById(cont).style.display = "block";
       cont=cont+1;
        };    
}
function aparecer21() 
{
      var cont=68;
      if(document.getElementById("chek21").checked == true)
        {
           while(cont<143)
            {
               document.getElementById(cont).style.display = "none";
               cont=cont+1;
            };      
        }
      var cont=128;
      while(cont<136)
        {
       document.getElementById(cont).style.display = "block";
       cont=cont+1;
        };    
}
function aparecer22() 
{
      var cont=68;
      if(document.getElementById("chek22").checked == true)
        {
           while(cont<143)
            {
               document.getElementById(cont).style.display = "none";
               cont=cont+1;
            };      
        }
      var cont=136;
      while(cont<142)
        {
       document.getElementById(cont).style.display = "block";
       cont=cont+1;
        }; 
}
function aparecer23() 
{
      var cont=68;
      if(document.getElementById("chek23").checked == true)
        {
           while(cont<143)
            {
               document.getElementById(cont).style.display = "none";
               cont=cont+1;
            };      
        }
     document.getElementById("142").style.display = "block";   
}

//pagina passarinho
function aparecer24() 
{
      var cont=143;
      if(document.getElementById("chek24").checked == true)
        {
           while(cont<167)
            {
               document.getElementById(cont).style.display = "block";
               cont=cont+1;
            };      
        }    
}
function aparecer25() 
{
      var cont=143;
      if(document.getElementById("chek25").checked == true)
        {
           while(cont<167)
            {
               document.getElementById(cont).style.display = "none";
               cont=cont+1;
            };      
        }
      var cont=143;
      while(cont<152)
        {
       document.getElementById(cont).style.display = "block";
       cont=cont+1;
        };    
}
function aparecer26() 
{
      var cont=143;
      if(document.getElementById("chek26").checked == true)
        {
           while(cont<167)
            {
               document.getElementById(cont).style.display = "none";
               cont=cont+1;
            };      
        }
      var cont=152;
      while(cont<160)
        {
       document.getElementById(cont).style.display = "block";
       cont=cont+1;
        };    
}
function aparecer27() 
{
      var cont=143;
      if(document.getElementById("chek27").checked == true)
        {
           while(cont<167)
            {
               document.getElementById(cont).style.display = "none";
               cont=cont+1;
            };      
        }
      var cont=160;
      while(cont<165)
        {
       document.getElementById(cont).style.display = "block";
       cont=cont+1;
        };    
}
function aparecer28() 
{
      var cont=143;
      if(document.getElementById("chek28").checked == true)
        {
           while(cont<167)
            {
               document.getElementById(cont).style.display = "none";
               cont=cont+1;
            };
        }      
      
       document.getElementById("165").style.display = "block";
       document.getElementById("166").style.display = "block";
         
}
