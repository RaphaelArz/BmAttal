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
    const appleCalendarUrl = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${eventDetails.title}\nDESCRIPTION:${eventDetails.description}\nLOCATION:${eventDetails.location}\nDTSTART:${eventDetails.startDate}\nDTEND:${eventDetails.endDate}\nEND:VEVENT\nEND:VCALENDAR`;

    const blob = new Blob([appleCalendarUrl], { type: "text/calendar" });
    const fileUrl = URL.createObjectURL(blob);

    // Détecter l'appareil
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        // Android - Ouvrir Google Calendar
        window.open(googleCalendarUrl, "_blank");
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // iOS - Ouvrir directement l'événement dans l'application Calendrier
        window.location.href = fileUrl;
    } else {
        // Pour les autres appareils (PC, Mac) - Ouvrir Google Calendar
        window.open(googleCalendarUrl, "_blank");
    }
});
document.getElementById("addReceptionButton").addEventListener("click", function() {
    // Détails de l'événement Réception
    const eventDetails = {
        title: "Réception en l'honneur de Nathanaël",
        description: "Réception en l'honneur de Nathanaël",
        location: "Le Pavillon d'Elsa, 17 Rue de la Mare Poissy, 95380, Villeron, France",
        startDate: "20250324T180000Z", // Heure en UTC (19h00 heure française)
        endDate: "20250324T220000Z",   // Fin estimée à 23h00 heure française (en UTC)
    };

    // Construire l'URL pour Google Calendar
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE` +
        `&text=${encodeURIComponent(eventDetails.title)}` +
        `&dates=${eventDetails.startDate}/${eventDetails.endDate}` +
        `&details=${encodeURIComponent(eventDetails.description)}` +
        `&location=${encodeURIComponent(eventDetails.location)}`;

    // Construire l'URL pour Apple Calendar (iOS/macOS)
    const appleCalendarUrl = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${eventDetails.title}\nDESCRIPTION:${eventDetails.description}\nLOCATION:${eventDetails.location}\nDTSTART:${eventDetails.startDate}\nDTEND:${eventDetails.endDate}\nEND:VEVENT\nEND:VCALENDAR`;

    const blob = new Blob([appleCalendarUrl], { type: "text/calendar" });
    const fileUrl = URL.createObjectURL(blob);

    // Détecter l'appareil
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        // Android - Ouvrir Google Calendar
        window.open(googleCalendarUrl, "_blank");
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // iOS - Ouvrir directement l'événement dans l'application Calendrier
        window.location.href = fileUrl;
    } else {
        // Pour les autres appareils (PC, Mac) - Ouvrir Google Calendar
        window.open(googleCalendarUrl, "_blank");
    }
});
