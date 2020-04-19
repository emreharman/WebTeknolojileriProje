function formDenetle(){
    var Ad=document.getElementById('ad').value;
    var labelAd=document.getElementById('lblAd');
    var Soyad=document.getElementById('soyad').value;
    var labelSoyad=document.getElementById('lblSoyad');
    var Mesaj=document.getElementById('mesaj').value;
    var labelMesaj=document.getElementById('lblMesaj');
    var Hata=document.getElementById('hata');
    if(!(isNaN(Ad))){
        labelAd.style.color="rgb(201, 55, 19)";
        Hata.style.display="block";
        //return false;
    }
    else{
        labelAd.style.color="black";
        Hata.style.display="none";
    }
    if(!(isNaN(Soyad))){
        labelSoyad.style.color="rgb(201, 55, 19)";
        Hata.style.display="block";
        //return false;
    }
    else{
        labelSoyad.style.color="black";
        Hata.style.display="none";
    }
    if(Mesaj==""){
        labelMesaj.style.color="rgb(201, 55, 19)";
        Hata.style.display="block";
        //return false;
    }
    else{
        labelMesaj.style.color="black";
        Hata.style.display="none";
    }
    if(isNaN(ad) && isNaN(Soyad) && Mesaj != ""){
        return true;
    }
    else{
        return false;
    }
}