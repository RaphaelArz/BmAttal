
document.addEventListener("DOMContentLoaded", function() {
    const nePourrontAssisterCheckbox = document.getElementById('ne-pourront-assister');
    const receptionCheckbox = document.getElementById('reception');
    const tephilinesCheckbox = document.getElementById('tephilines');
    const chabbatCheckbox = document.getElementById('chabbat');

    const receptionField = document.getElementById('receptionField');
    const chabbatField = document.getElementById('chabbatField');
    const tephilinesField = document.getElementById('tephilinesField');

    // Fonction pour masquer les champs
    function hideAllFields() {
        receptionField.classList.add('hidden');
        chabbatField.classList.add('hidden');
        tephilinesField.classList.add('hidden');
    }

    // Fonction pour décocher les autres cases et masquer les champs lorsque "Ne pourront pas assister" est cochée
    function handleNePourrontAssisterChange() {
        if (nePourrontAssisterCheckbox.checked) {
            receptionCheckbox.checked = false;
            tephilinesCheckbox.checked = false;
            chabbatCheckbox.checked = false;
            hideAllFields();  // Masquer tous les champs
        }
    }

    // Fonction pour décocher "Ne pourront pas assister" lorsque les autres cases sont cochées
    function handleOtherCheckboxesChange() {
        if (receptionCheckbox.checked || tephilinesCheckbox.checked || chabbatCheckbox.checked) {
            nePourrontAssisterCheckbox.checked = false;
        }
    }

    // Écouteurs d'événements sur le changement des cases à cocher
    nePourrontAssisterCheckbox.addEventListener('change', handleNePourrontAssisterChange);
    receptionCheckbox.addEventListener('change', handleOtherCheckboxesChange);
    tephilinesCheckbox.addEventListener('change', handleOtherCheckboxesChange);
    chabbatCheckbox.addEventListener('change', handleOtherCheckboxesChange);

    // Écouteurs d'événements pour afficher ou masquer les champs de nombre de personnes
    receptionCheckbox.addEventListener('change', function() {
        receptionField.classList.toggle('hidden', !this.checked);
    });

    tephilinesCheckbox.addEventListener('change', function() {
        tephilinesField.classList.toggle('hidden', !this.checked);
    });

    chabbatCheckbox.addEventListener('change', function() {
        chabbatField.classList.toggle('hidden', !this.checked);
    });
});