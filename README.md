# Nanawax VIP — App cliente (wrapper iOS)

Wrapper Capacitor iOS pour l'app cliente Nanawax VIP (carte de fidélité, QR code, points VIP).

Pointe vers `https://app.nanawax.com/espace-client` — le code source du site (Next.js) vit dans le repo `nanawax-boutique`. Ce dépôt ne contient que la coquille native iOS.

Équivalent Android déjà en review sur le Play Store (bundle `com.nanawax.vip`, projet `nanawax-boutique-twa`) — **ce dépôt est indépendant et ne touche pas à cette soumission Android**.

## Build

Le dossier `ios/` n'est pas versionné : il est régénéré à chaque build par Codemagic (`npx cap add ios`), qui construit sur un Mac distant — aucun outil Xcode/CocoaPods requis en local.

Voir `codemagic.yaml` pour le workflow `ios-app-store`.
