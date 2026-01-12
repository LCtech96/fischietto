# Fischietto - Sito Web Professionale

Sito web personale per Fischietto - Speaker radiofonico, presentatore, showman e consulente.

## Tecnologie Utilizzate

- **Next.js 14** - Framework React per applicazioni web
- **TypeScript** - Tipizzazione statica
- **Tailwind CSS** - Framework CSS utility-first
- **React** - Libreria UI

## Struttura del Progetto

- `/app` - Pagine e layout dell'applicazione
- `/components` - Componenti React riutilizzabili
- `/app/page.tsx` - Pagina Home
- `/app/sport/page.tsx` - Pagina Sport con podcast DDA'ZUONA
- `/app/servizi/page.tsx` - Pagina Servizi & Prezzi

## Installazione

```bash
# Installa le dipendenze
pnpm install

# Avvia il server di sviluppo
pnpm dev

# Build per produzione
pnpm build

# Avvia il server di produzione
pnpm start
```

## Pagine

### Home
- Chi sono
- Di cosa mi occupo
- La mia formazione
- I miei servizi
- Video gallery

### Sport
- Podcast DDA'ZUONA

### Servizi & Prezzi
- Tariffe dettagliate per tutti i servizi offerti

## Note

I video di Instagram e TikTok sono incorporati tramite iframe. Assicurati che i link siano accessibili pubblicamente.

## Deploy

Per le istruzioni dettagliate sul deploy, consulta [DEPLOY.md](./DEPLOY.md).

### Quick Deploy su Vercel

1. Installa Vercel CLI: `npm i -g vercel`
2. Esegui: `vercel` per il deploy
3. Oppure connetti il repository GitHub direttamente su [vercel.com](https://vercel.com)
