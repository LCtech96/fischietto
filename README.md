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

## Deploy

### Deploy su Vercel (Consigliato)

1. **Installa Vercel CLI** (opzionale):
   ```bash
   npm i -g vercel
   ```

2. **Deploy tramite CLI**:
   ```bash
   vercel
   ```

3. **Deploy tramite GitHub** (consigliato):
   - Pusha il codice su GitHub
   - Vai su [vercel.com](https://vercel.com)
   - Connetti il repository
   - Vercel rileverà automaticamente Next.js e configurerà il deploy

4. **Configurazione automatica**:
   - Build Command: `pnpm build`
   - Output Directory: `.next`
   - Install Command: `pnpm install`

### Deploy su altri servizi

- **Netlify**: Supporta Next.js out-of-the-box
- **Railway**: Configurazione automatica per Next.js
- **Render**: Supporta Next.js con configurazione minima

## Funzionalità

### Home Page
- 4 card interattive (Sport, Moda, Food, Tech) con stile grigio scuro e testo azzurro
- Click su una card apre la pagina della categoria

### Pagine Categoria
- Form per inserire il numero WhatsApp
- Invio richiesta di maggiori informazioni
- Conferma invio con messaggio di successo

### Admin Dashboard
- Accesso tramite email e password
- Visualizzazione di tutte le richieste
- Filtri per categoria (Sport, Moda, Food, Tech)
- Link diretto a WhatsApp per contattare i clienti
- Statistiche per categoria

**Credenziali Admin:**
- Email: `luca@facevoice.ai` o `Umberto.fischietto@gmail.com`
- Password: `123456789Lucailgrande`

## Setup Database (Supabase)

1. Crea un account su [Supabase](https://supabase.com)
2. Crea un nuovo progetto
3. Esegui lo script SQL (vedi `supabase-setup.md`)
4. Configura le variabili d'ambiente (vedi `env.example`)

Per istruzioni dettagliate, consulta `supabase-setup.md`

## Note

- I video di Instagram e TikTok sono incorporati tramite iframe. Assicurati che i link siano accessibili pubblicamente.
- Le immagini devono essere caricate nella cartella `public/images/` con i nomi: `Fischio-sport.png`, `Fischio-moda.png`, `Fischio-food.png`, `Fischio-tech.png`
- Configura Supabase prima di fare il deploy in produzione
