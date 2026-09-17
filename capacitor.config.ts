import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.nanawax.vip',
  appName: 'Nanawax VIP',
  // Pointe directement sur l'espace client déployé — pas de build statique requis
  // TEMPORAIRE : app.nanawax.com pointe encore vers une page de parking (DNS non
  // basculé vers Vercel) — on utilise l'URL Vercel en attendant, à revert une fois
  // le domaine réparé.
  // Pointe directement sur /accueil (et non /espace-client) pour éviter un aller-retour
  // réseau complet à chaque ouverture : la page racine ne fait que vérifier la session
  // puis rediriger vers /accueil quand la cliente est déjà connectée (cas normal).
  // /accueil renvoie elle-même vers /espace-client si la session est absente/expirée.
  server: {
    url: 'https://nanawax-boutique.vercel.app/espace-client/accueil',
    cleartext: false,
    iosScheme: 'https',
  },
  ios: {
    contentInset: 'always',
    preferredContentMode: 'mobile',
    backgroundColor: '#E4DACC',
    scrollEnabled: true,
    allowsLinkPreview: false,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      backgroundColor: '#E4DACC',
      showSpinner: false,
      iosSpinnerStyle: 'small',
    },
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
  },
}

export default config
