
function login(){
    var kulAd="b191210049";
    var sifre="12345";
    var kullaniciAdi=document.getElementById('kulAdi').value;
    var Parola=document.getElementById('parola').value;
    var Hata=document.getElementById('hata');
    
   if(kullaniciAdi=="" || Parola==""){
       Hata.style.visibility="visible";
       Hata.innerHTML="Kullanıcıadı ya da Parola boş bırakılamaz";
   }
   if((kullaniciAdi!="" && kullaniciAdi!=kulAd) || (Parola!="" && Parola!=sifre)){
    Hata.style.visibility="visible";
    Hata.innerHTML="Kullanıcıadı ya da Parola yanlış";
   }
   if((kullaniciAdi!="" && kullaniciAdi==kulAd) || (Parola!="" && Parola==sifre)){
    Hata.style.visibility="visible";
    Hata.innerHTML="Hoşgeldin "+kulAd;
   }
   
   
}
