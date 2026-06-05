function login() {
    window.location.href = "catalogo.html";
}

window.publicar = function() {
    let titulo = document.getElementById("titulo").value;
    let descripcion = document.getElementById("descripcion").value;
    let precio = document.getElementById("precio").value;
    let categoria = document.getElementById("categoria").value;

    let materiales = JSON.parse(localStorage.getItem("materiales")) || [];

   materiales.push({
    titulo: titulo,
    descripcion: descripcion,
    precio: precio,
    categoria: categoria,
    pdf: document.getElementById("pdf").files[0]?.name || ""
});
guardarMaterial({
    titulo: titulo,
    descripcion: descripcion,
    precio: Number(precio),
    categoria: categoria,
    pdf: "https://drive.google.com/uc?export=download&id=15_jSF21Ztx1sUcQu9kUYBUmLnfVElaoh"
});
    localStorage.setItem("materiales", JSON.stringify(materiales));

    alert("Material guardado correctamente");

    document.getElementById("titulo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("precio").value = "";
}