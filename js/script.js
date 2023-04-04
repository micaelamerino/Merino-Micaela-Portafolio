const formulario = document.getElementById("form");
formulario.addEventListener("submit", actionSubmit);

async function actionSubmit(e) {
  e.preventDefault();

  const nombre = document.getElementById("name").value;
  const asunto = document.getElementById("asunto").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  if (nombre === "" || asunto === "" || email === "" || mensaje === "") {
    swal("Oops...", "Complete todos los campos", "error");
  } else {
    const form = new FormData(this);
    const response = await fetch(this.action, {
      method: this.method,
      body: form,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      swal(`¡Gracias ${nombre}, mensaje recibido!`, "", "success");
    }
    formulario.reset();
  }
}
