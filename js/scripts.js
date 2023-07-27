
const usuario = {
    nombre: "Johan",
    edad: 30,
    deuda: 0
}

let pedido = []
let costopedido = 0

const mostrarmenu = () => {
    console.log (`CODIGO - PRODUCTO - COSTO`)
    productos.forEach(producto =>  console.log(`${producto.codigo} - ${producto.nombre} - ${producto.costo}`)   );
}

const pedirproducto = cod => {
    if (!cod) return "Ingrese un codigo valido" 

   const productoencontrado = productos.find(producto => producto.codigo === cod)
   if (!productoencontrado) return "El producto no existe"
   
   pedido.push(productoencontrado)
   console.log ("Su producto ha sido agregado a su pedido. su pedido es:")
   return verpedido
}

const verpedido = () => pedido

const calcularcosto = () => {
    let costo = 0
    for (producto of pedido) {
        costo += producto.costo
    }
    costopedido = costo
    return costopedido
}

const finalizarpedido = () => {
    calcularcosto() 
    usuario.deuda = costopedido

    pedido = []
    costopedido = 0
    
    return `${usuario.nombre}, debes pagar $${usuario.deuda} pesos colombianos`

}

const pagarpedido = (montoentregado) => {
    switch (usuario.deuda) {
      case (montoentregado < usuario.deuda) :
        return `no te alcanza para pagar tu pedido.`
        break
      case  (montoentregado === usuario.deuda) :
            usuario.deuda = 0
        return `tu pedido ha sido pagado.`
        break
      default:
        return `tu pedido ha sido pagado y tu cambio es de ${usuario.deuda}`
    }  
} 