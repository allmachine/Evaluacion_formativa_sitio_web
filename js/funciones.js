/* ========== CALCULADORA ========== */
function apagarAmpolleta() {
  document.getElementById("ampolleta").src = "../img/apagada.jpg";
}

function encenderAmpolleta() {
  document.getElementById("ampolleta").src = "../img/encendida.jpg";
}

function sumar() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("resultado").value = num1 + num2;
}

function restar() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("resultado").value = num1 - num2;
}

function multiplicar() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("resultado").value = num1 * num2;
}

function dividir() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  if (num2 === 0) {
    alert("No se puede dividir por cero");
    return;
  }

  document.getElementById("resultado").value = num1 / num2;
}

/* ========== VALIDACIÓN DE CONTACTOS (jQuery) ========== */
$(document).ready(function () {
  const $form = $("#formContacto");
  if ($form.length === 0) return; // si no estamos en contactos, no hace nada

  const reglas = {
    nombre: (v) => {
      if (v === "") return "El nombre es obligatorio";
      if (v.length < 2) return "Debe tener al menos 2 letras";
      if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s'-]+$/.test(v))
        return "Solo se permiten letras";
      return "";
    },
    apellido: (v) => {
      if (v === "") return "El apellido es obligatorio";
      if (v.length < 2) return "Debe tener al menos 2 letras";
      if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s'-]+$/.test(v))
        return "Solo se permiten letras";
      return "";
    },
    date: (v) => {
      if (v === "") return "La fecha de nacimiento es obligatoria";
      if (new Date(v) > new Date()) return "La fecha no puede ser futura";
      return "";
    },
    region: (v) => (v === "" ? "Selecciona una región" : ""),
    email: (v) => {
      if (v === "") return "El correo es obligatorio";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
        return "Ingresa un correo válido";
      return "";
    },
    telefono: (v) => {
      if (v === "") return "";
      if (!/^\+?\d{8,12}$/.test(v.replace(/\s/g, "")))
        return "Ingresa un teléfono válido (8 a 12 dígitos)";
      return "";
    },
    carrera: (v) => {
      if ($("input[name='nivel']:checked").val() === "superior" && v === "")
        return "Selecciona una carrera";
      return "";
    },
    mensaje: (v) => {
      if (v === "") return "El mensaje es obligatorio";
      if (v.length < 10) return "Escribe al menos 10 caracteres";
      return "";
    },
  };

  function marcarError($campo, texto) {
    $campo.removeClass("is-valid").addClass("is-invalid");
    let $fb = $campo.siblings(".invalid-feedback");
    if ($fb.length === 0) {
      $fb = $('<div class="invalid-feedback"></div>').insertAfter($campo);
    }
    $fb.text(texto);
  }

  function marcarOk($campo) {
    $campo.removeClass("is-invalid").addClass("is-valid");
    $campo.siblings(".invalid-feedback").remove();
  }

  function validarCampo(id) {
    const $campo = $("#" + id);
    const valor = ($campo.val() || "").trim();
    const error = reglas[id](valor);
    if (error) {
      marcarError($campo, error);
      return false;
    }
    marcarOk($campo);
    return true;
  }

  const ids = Object.keys(reglas);
  const selector = ids.map((id) => "#" + id).join(", ");

  // Campo a campo
  $(selector).on("blur change", function () {
    validarCampo(this.id);
  });

  $("input[name='nivel']").on("change", function () {
    validarCampo("carrera");
  });

  // Al enviar
  $form.on("submit", function (event) {
    let todoOk = true;
    ids.forEach((id) => {
      if (!validarCampo(id)) todoOk = false;
    });
    if (!todoOk) {
      event.preventDefault();
      $(".is-invalid").first().trigger("focus");
    }
  });

  // Limpiar
  $form.on("reset", function () {
    $form.find(".is-valid, .is-invalid").removeClass("is-valid is-invalid");
    $form.find(".invalid-feedback").remove();
  });
});

