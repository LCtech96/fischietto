# Istruzioni per il Deploy

## Deploy su Vercel (Consigliato)

### Opzione 1: Deploy tramite Vercel CLI

1. Installa Vercel CLI globalmente:
```bash
npm i -g vercel
```

2. Esegui il login:
```bash
vercel login
```

3. Deploya il progetto:
```bash
vercel
```

4. Per il deploy in produzione:
```bash
vercel --prod
```

### Opzione 2: Deploy tramite GitHub

1. Crea un repository GitHub per il progetto
2. Pusha il codice:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

3. Vai su [vercel.com](https://vercel.com)
4. Clicca su "New Project"
5. Importa il repository GitHub
6. Vercel rileverà automaticamente Next.js e configurerà il progetto
7. Clicca su "Deploy"

### Opzione 3: Deploy tramite Dashboard Vercel

1. Vai su [vercel.com](https://vercel.com)
2. Clicca su "Add New Project"
3. Connetti il tuo repository Git o carica il progetto
4. Vercel configurerà automaticamente Next.js
5. Clicca su "Deploy"

## Configurazione

Il progetto è già configurato con:
- `vercel.json` - Configurazione per Vercel
- `.vercelignore` - File da escludere dal deploy
- Build ottimizzato per produzione

## Variabili d'Ambiente

Se in futuro avrai bisogno di variabili d'ambiente:
1. Vai su Vercel Dashboard → Settings → Environment Variables
2. Aggiungi le variabili necessarie

## Build Locale

Per testare il build localmente prima del deploy:
```bash
pnpm build
pnpm start
```

## Note

- Il sito è ottimizzato per produzione
- Tutte le pagine sono pre-renderizzate staticamente
- Le immagini sono ottimizzate automaticamente da Next.js
- Il progetto usa pnpm come package manager
