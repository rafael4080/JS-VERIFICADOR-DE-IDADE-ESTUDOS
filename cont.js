function verificar(){
var data = new Date()
var ano= data.getFullYear()
var fano =window.document.getElementById('txtano')
var res=window.document.getElementById('res')
if(fano.value.length == 0 || Number(fano.value )> ano){
window.alert('[ERRO!] Verifique os dados digitados e tente novamente.')
}else{
    var fsex = window.document.getElementsByName('radsex')
     var idade = ano - Number(fano.value)
     res.innerHTML=`Idade calculada ${idade}`
     var gênero = ""
     var img=window.document.createElement('img')
     img.setAttribute('id' , 'foto')
     if(fsex [0].checked){
         gênero ='Homem'
         if(idade >= 0 && idade < 10){
          img.setAttribute('src' , 'bebe-homem05.png')
  
          }else if( idade < 21){
           img.setAttribute('src' , 'homem-jovem05.png')

            }else if(idade < 50){
               img.setAttribute('src' , 'homem-adulto05.png')
              }else{
                  img.setAttribute('src' ,'homem-velho05.png')

             }
               }else if(fsex[1].checked){
     gênero ="Mulher"
       if(idade >= 0 && idade < 10){
        img.setAttribute('src' ,'bebe-mulher05.png')
    
        }else if( idade < 21){
          img.setAttribute('src' , 'mulher-jovem05.png')

                }else if(idade < 50){
                  img.setAttribute('src' , 'mulher-adulta05.png')

               }else{
                img.setAttribute('src' , 'mulher-velha05.png')
   }
     }
     res.style.textAlign= 'center'
     res.innerHTML=`Detectamos ${gênero} com ${idade}, anos.`
     res.appendChild(img)
}
}