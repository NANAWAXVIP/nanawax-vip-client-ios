import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.nanawax.vip',
  appName: 'Nanawax VIP',
  // Pointe directement sur l'espace client déployé — pas de build statique requis
  // TEMPORAIRE : app.nanawax.com pointe encore vers une page de parking (DNS non
  // basculé vers Vercel) — on utilise l'URL Vercel en attendant, à revert une fois
  // le domaine réparé.
  server: {
    url: 'https://nanawax-boutique.vercel.app/espace-client',
    cleartext: false,
    iosScheme: 'https',
  },
  ios: {
    contentInset: 'always',
    preferredContentMode: 'mobile',
    backgroundColor: '#160800',
    scrollEnabled: true,
    allowsLinkPreview: false,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      backgroundColor: '#160800',
      showSpinner: false,
      iosSpinnerStyle: 'small',
    },
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
  },
}

export default config
