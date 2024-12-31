document.getElementById("addEventButton").addEventListener("click", function() {
    // Détails de l'événement
    const eventDetails = {
        title: "Bar Mitzvah de Nathanaël",
        description: "Venez célébrer la Bar Mitzvah de Nathanaël.",
        location: "18 Rue André Grunig, 95200 Sarcelles, France",
        startDate: "20250320T070000Z", // Heure en UTC (8h00 heure française)
        endDate: "20250320T090000Z",   // Fin estimée à 10h00 heure française (en UTC)
    };

    // Construire l'URL pour Google Calendar
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE` +
        `&text=${encodeURIComponent(eventDetails.title)}` +
        `&dates=${eventDetails.startDate}/${eventDetails.endDate}` +
        `&details=${encodeURIComponent(eventDetails.description)}` +
        `&location=${encodeURIComponent(eventDetails.location)}`;

    // Construire l'URL pour Apple Calendar (iOS/macOS)
    const appleCalendarUrl = `webcal://www.google.com/calendar/render?action=TEMPLATE` +
        `&text=${encodeURIComponent(eventDetails.title)}` +
        `&dates=${eventDetails.startDate}/${eventDetails.endDate}` +
        `&details=${encodeURIComponent(eventDetails.description)}` +
        `&location=${encodeURIComponent(eventDetails.location)}`;

    // Détecter le type d'appareil
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        // Android - Ouvrir Google Calendar
        window.open(googleCalendarUrl, "_blank");
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // iOS - Ouvrir l'URL webcal pour Apple Calendar
        window.open(appleCalendarUrl, "_blank");
    } else {
        // PC ou autres appareils - Ouvrir Google Calendar
        const isGoogleCalendarSupported = confirm(
            "Vous allez être redirigé vers Google Calendar pour ajouter l'événement. Confirmez pour continuer."
        );
        if (isGoogleCalendarSupported) {
            window.open(googleCalendarUrl, "_blank");
        }
    }
});