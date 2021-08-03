async function generate() {
    try{
        document.getElementById("qr").classList.remove('animate__animated', 'animate__jackInTheBox');
    }
    catch{}
    document.getElementById("loadcover").style.display = "block";
    document.getElementById("qr").style.display = "none";
    await loadImage("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + document.getElementById("content").value, document.getElementById("qr"));
    document.getElementById("qr").style.display = "block";
    document.getElementById("loadcover").style.display = "none";
    document.getElementById("qr").classList.add('animate__animated', 'animate__jackInTheBox');
    document.getElementById("download").style.display = "block";
}

async function loadImage(url, elem) {
    return new Promise((resolve, reject) => {
      elem.onload = () => resolve(elem);
      elem.onerror = reject;
      elem.src = url;
    });
}
