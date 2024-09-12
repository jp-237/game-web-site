function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  // DOM Elements
  const modalbg = document.querySelector(".bground");
  const modalBtn = document.querySelectorAll(".modal-btn");
  const formData = document.querySelectorAll(".formData");
  //les checkbox
  const checkbox1 = document.getElementById('checkbox1');
  const checkbox2 = document.getElementById('checkbox2');
  
  
  
  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  
  // launch modal form
  function launchModal() {
    modalbg.style.display = "block";
  }

 
  //pop up pour l'inscription
  document.getElementsByClassName(".formData").addEventListener('submit', function(event) {
    event.preventDefault(); // Empeche l'envoi du formulaire

    let isValid = true;

   
  // validation du nom
  const prenom = document.getElementById("#first").value;
    if (prenom.length < 2) {
        isValid = false;
        alert('Le prénom doit contenir au moins 2 caractères.');
    }

  //validation du nom de famile
  const nom = document.getElementById("#last").value;
  if(nom.length <2){
    isValid = false;
    alert('Le nom doit contenir au moins 2 caractères')
  }

//validation de l'email
const email = document.getElementById("#email").value;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        alert('Veuillez entrer une adresse email valide.');
    }

// validation sur les concours
const concours = getElementById("#quantity").value;
if (isNaN(concours) || concours === '') {
  isValid = false;
  alert('Veuillez entrer un nombre valide pour le nombre de concours.');
}

// Validation du genre
document.querySelectorAll('input[name="location"]').forEach((radio) => {
  radio.addEventListener('change', function() {
    localStorage.setItem('selectedLocation', this.value);
  });
});

window.addEventListener('load', function() {
  const selectedLocation = localStorage.getItem('selectedLocation');
  if (selectedLocation) {
    document.querySelector(`input[name="location"][value="${selectedLocation}"]`).checked = true;
  }

// Validation des conditions générales
if (!checkbox1.checked) {
  alert("Vous devez accepter les conditions d'utilisation.");
  return;
}
});

// Conserver les données du formulaire
localStorage.setItem('checkbox1', checkbox1.checked);
localStorage.setItem('checkbox2', checkbox2.checked);

// Simuler l'envoi du formulaire
alert("Formulaire soumis avec succès !");
});

// Restaurer les données du formulaire
window.addEventListener('load', function() {
const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');

checkbox1.checked = localStorage.getItem('checkbox1') === 'true';
checkbox2.checked = localStorage.getItem('checkbox2') === 'true';

if (isValid) {
  alert('Formulaire soumis avec succès!');
  // Vous pouvez soumettre le formulaire ici si nécessaire
  // event.target.submit();
}
});



































































































































































































  