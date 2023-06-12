if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(function(registration) {
        console.log('Service Worker enregistré avec succès :', registration);
      })
      .catch(function(error) {
        console.log('Échec de l\'enregistrement du Service Worker :', error);
      });
  }