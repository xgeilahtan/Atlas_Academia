    var contador = 1; //variável pública criada fora da function
        var img1="img/carrossel/aulas.png";
        var img2="img/carrossel/BANNERSHAKE.png";
        var img3="img/carrossel/BANNERmensalidade.png";
        var img4="img/carrossel/BANNERFRANQUIA.png"
        var tempo=3500; //1800(milessegundos) : 1000 (milessegundo) = 1.8s
        var exibir=setInterval("Exibindo()",tempo);
          
        function Exibindo()
        {
              document.images["slide"].src=eval("img"+contador);

            if (contador<4)
                contador++;
            else
                contador=1;
        }
          
        function Anterior()
        {
            clearInterval(exibir);//interrompe o looping
            
            if (contador == 0)
                contador = 4;
            else if (contador > 0)
                contador--;
                
          
            clearInterval(exibir);//interrompe o looping 
            document.images["slide"].src=eval("img"+contador);
                        
            exibir=setInterval("Exibindo()",tempo);
        }
         
         function Proximo()
        {
            clearInterval(exibir);//interrompe o looping 
            document.images["slide"].src=eval("img"+contador);
        
            if (contador<4)
                contador++;
            else
                contador=1;
                
            exibir=setInterval("Exibindo()",tempo);
        }
        
        function exibeResposta(x)
        {
            // x = resp1, resp2...
            if(document.getElementById(x).className.indexOf("exibida")==-1)
            document.getElementById(x).className = document.getElementById(x).className.replace("escondida","exibida");
            else 
            document.getElementById(x).className = document.getElementById(x).className.replace("exibida","escondida");
        }

        function transformarMenuHam()
        {
            if(document.getElementById("menuHam").className.indexOf("exibida") == -1){
                document.getElementById("menuHam").className = document.getElementById("menuHam").className.replace("escondida","exibida");
            }
            else{
                document.getElementById("menuHam").className = document.getElementById("menuHam").className.replace("exibida","escondida");
            }
            
        }
        function erros(){
             alert("Usuário não cadastrado no sistema");
             document.getElementById("usuario"). value = "";
             document.getElementById("senha"). value = "";

            return false;
            
        }