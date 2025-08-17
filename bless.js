setTimeout(()=>{
    document.querySelector(".loader").classList.add("fade-out");
setTimeout(()=>{
    document.querySelector(".loader").remove();
    window.location.href="loaded.html"
},200);
},4000);

