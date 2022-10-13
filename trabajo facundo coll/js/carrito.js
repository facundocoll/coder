const pintarCarrito = () => {
    modalContainer.innerHTML = ""
    modalContainer.style.display = "flex"
    const modalHeader = document.createElement("div")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class= "modal-header-tittle">Carrito</h1>
    `
    modalContainer.append(modalHeader)
    
    const modalButton = document.createElement("h1")
    modalButton.innerText = "x"
    modalButton.className = "modal-header-button"
    modalHeader.append(modalButton)
    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none"
    })
    
    carrito.forEach((product) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
        <img src="${product.img}" 
        <h3>${product.nombre}</h3>
        <p>${product.precio}</p>
        <p>Cantidad: ${product.cantidad}</p> 
        <p>Total: $${product.cantidad * product.precio}</p>
        `
        modalContainer.append(carritoContent)

        let eliminar = document.createElement("span")
        eliminar.innerText = ("❌")
        eliminar.className = ("delete-product")
        carritoContent.append(eliminar)

        eliminar.addEventListener("click", eliminarProducto)
    })
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
    
    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `Total a pagar $${total}`
    modalContainer.append(totalBuying)
    
    const realizarCompra = document.createElement("span")
    realizarCompra.innerText = ("COMPRAR")
    realizarCompra.className = ("realizar-compra")
    modalContainer.append(realizarCompra)

    realizarCompra.addEventListener("click", () => {
        Swal.fire({
            title: 'Genial!!!',
            text: 'Su compra fue realizada con exito, en una hora llegaran sus productos',
            icon: 'success',
            confirmButtonText: 'CONTINUAR'
          })
    })
}
verCarrito.addEventListener("click", pintarCarrito)

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id)

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId
    })
    carritoCounter()
    pintarCarrito()
}

const carritoCounter = () => {
    cantidadCarrito.style.display = "block"
    cantidadCarrito.innerText = carrito.length
}
