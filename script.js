let BD = [
  {
      nombre: "",
      precio: 10000,
      descripcion: "Bandana al estilo RAP de los 90's",
      stock: 50,
      imagen: "assets/images/gorra1.jpg",
      tipo: "gorras"
  },
  {
    nombre: "Bandana de Rap",
    precio: 10000,
    descripcion: "Bandana al estilo RAP de los 90's",
    stock: 50,
    imagen: "assets/images/gafa1.jpg",
    tipo: "gafas"
 },
  {
      nombre: "Bandana de Rap",
      precio: 10000,
      descripcion: "Bandana al estilo RAP de los 90's",
      stock: 50,
      imagen: "assets/images/cadena1.jpg",
      tipo: "cadenas" // gorras, gafas, cadenas, durag 
  },
]

function printProducts() {

  // gorras

  let gorras = document.getElementById("gorras")

  //gafas

  let gafas = document.getElementById("gafas")

  //cadenas

  let cadenas = document.getElementById("cadenas")

  //durags

  let durags = document.getElementById("durags")

  for (let product of BD) {

    // gorras
    if (product.tipo === "gorras"){
      gorras.innerHTML += `
        
        <div class="card" style="width: 18rem">
          <img
            height="300px"
            width="300px"
            src="${product.imagen}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h6 class="card-title">
              ${product.nombre}
            </h6>
            <p class="card-text"><b>$${product.precio}</b></p>
            <a href="#" class="btn btn-outline-dark">Agregar al carrito</a>
          </div>
        </div>
        
        
        `
    }

    // gafas
    if (product.tipo === "gafas"){
      gafas.innerHTML += `
        
        <div class="card" style="width: 18rem">
          <img
            height="300px"
            width="300px"
            src="${product.imagen}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h6 class="card-title">
              ${product.nombre}
            </h6>
            <p class="card-text"><b>$${product.precio}</b></p>
            <a href="#" class="btn btn-outline-dark">Agregar al carrito</a>
          </div>
        </div>
        `
    }

    // cadenas
    if (product.tipo === "cadenas"){
      cadenas.innerHTML += `
        
        <div class="card" style="width: 18rem">
          <img
            height="300px"
            width="300px"
            src="${product.imagen}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h6 class="card-title">
              ${product.nombre}
            </h6>
            <p class="card-text"><b>$${product.precio}</b></p>
            <a href="#" class="btn btn-outline-dark">Agregar al carrito</a>
          </div>
        </div>
        
        
        `
    }

    // durags
    if (product.tipo === "durags"){
      durags.innerHTML += `
        
        <div class="card" style="width: 18rem">
          <img
            height="300px"
            width="300px"
            src="${product.imagen}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h6 class="card-title">
              ${product.nombre}
            </h6>
            <p class="card-text"><b>$${product.precio}</b></p>
            <a href="#" class="btn btn-outline-dark">Agregar al carrito</a>
          </div>
        </div>
        
        
        `
    }


    console.log(product.tipo === "gorras" ? product : "")
  }
}

printProducts();
