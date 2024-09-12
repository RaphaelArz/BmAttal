document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire traditionnel

    // Vérifier si au moins une case à cocher est cochée
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var atLeastOneChecked = false;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            atLeastOneChecked = true;
            break;
        }
    }

    // Si aucune case n'est cochée, afficher une alerte et ne pas continuer
    if (!atLeastOneChecked) {
        alert("Veuillez cocher au moins une option avant d'envoyer le formulaire.");
        return; // Stoppe la fonction, n'envoie pas le formulaire
    }

    // Création de l'élément de message "Envoi en cours"
    var sendingMessage = document.createElement('div');
    sendingMessage.textContent = 'Envoi en cours...';
    sendingMessage.style.position = 'fixed';
    sendingMessage.style.top = '50%';
    sendingMessage.style.left = '50%';
    sendingMessage.style.transform = 'translate(-50%, -50%)';
    sendingMessage.style.backgroundColor = '#000000';
    sendingMessage.style.color = '#c0c0c0';
    sendingMessage.style.padding = '20px';
    sendingMessage.style.borderRadius = '5px';
    sendingMessage.style.height = '18vw';
    sendingMessage.style.width = '48vw';
    sendingMessage.style.textAlign = 'center';
    sendingMessage.style.zIndex = '9999';
    sendingMessage.style.border = '4px solid #c0c0c0';
    document.body.appendChild(sendingMessage);

    // Récupérer les données du formulaire
    var formData = new FormData(event.target);
    var data = {};
    formData.forEach((value, key) => data[key] = value);

    // Envoyer les données via fetch
    fetch('https://script.google.com/macros/s/AKfycbyNd5tqvyCS2TtRbvlWEIfMwqYryXjsdMAMewqQeXMTDBpz7bpQR4Xf7FpuoZCB8N2cMw/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(data)
    })
        .then(response => {
            sendingMessage.textContent = 'Envoyé avec succès!';
            sendingMessage.style.backgroundColor = '#000000'; // Noir pour succès
            setTimeout(function() {
                sendingMessage.remove(); // Supprimer le message après 5 secondes
            }, 5000);
        })
        .catch(error => {
            console.error('Erreur:', error);
            sendingMessage.textContent = 'Erreur lors de l\'envoi du formulaire.';
            sendingMessage.style.backgroundColor = '#f44336'; // Fond rouge en cas d'erreur
            setTimeout(function() {
                sendingMessage.remove(); // Supprimer le message après 5 secondes
            }, 5000);
        });
});
