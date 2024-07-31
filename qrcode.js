let imagebox= document.getElementById("imgbox");
let qrimg = document.getElementById("qrimg");
let qrinput = document.getElementById("qrinput");

function createqrcode()
{
    if(qrinput.value.length > 0)
    {
       qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="  + qrinput.value ;
       imagebox.classList.add("show-img");
    }
    else
    {
        qrinput.classList.add("error");
        setTimeout(() => {
            qrinput.classList.remove("error");
        },  1000 );
    }
}