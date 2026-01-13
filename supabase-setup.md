# Setup Supabase per Fischietto

## 1. Crea un account Supabase

1. Vai su [https://supabase.com](https://supabase.com)
2. Crea un account gratuito
3. Crea un nuovo progetto

## 2. Crea la tabella `richieste`

Nel SQL Editor di Supabase, esegui il contenuto del file `supabase-schema.sql` oppure copia e incolla questo comando:

```sql
-- Crea la tabella richieste
CREATE TABLE IF NOT EXISTS richieste (
  id BIGSERIAL PRIMARY KEY,
  categoria VARCHAR(50) NOT NULL,
  whatsapp VARCHAR(50) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crea indici per le ricerche
CREATE INDEX IF NOT EXISTS idx_richieste_categoria ON richieste(categoria);
CREATE INDEX IF NOT EXISTS idx_richieste_created_at ON richieste(created_at DESC);

-- Disabilita RLS per semplificare (le API routes gestiscono l'accesso)
ALTER TABLE richieste DISABLE ROW LEVEL SECURITY;
```

**IMPORTANTE:** Copia SOLO il codice SQL, non il testo markdown o i commenti "#"!

## 3. Configura le variabili d'ambiente

1. Vai su Settings → API nel tuo progetto Supabase
2. Copia i seguenti valori:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - anon public key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - service_role key → `SUPABASE_SERVICE_ROLE_KEY`

3. Crea un file `.env.local` nella root del progetto:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## 4. Configura Row Level Security (RLS)

Nel SQL Editor, esegui:

```sql
-- Disabilita RLS per la tabella richieste (solo per admin)
ALTER TABLE richieste DISABLE ROW LEVEL SECURITY;
```

Oppure, se vuoi mantenere RLS abilitato, crea una policy:

```sql
-- Abilita RLS
ALTER TABLE richieste ENABLE ROW LEVEL SECURITY;

-- Policy per permettere inserimenti (anon)
CREATE POLICY "Allow anonymous inserts" ON richieste
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy per permettere letture solo tramite service role (admin)
-- Le letture vengono gestite tramite API route con service role key
```

## 5. Testa il setup

1. Avvia il server di sviluppo: `pnpm dev`
2. Vai su una categoria (es. `/categoria/sport`)
3. Inserisci un numero WhatsApp e invia
4. Vai su `/admin` e verifica che la richiesta appaia

## Note di sicurezza

- La `SUPABASE_SERVICE_ROLE_KEY` deve essere mantenuta segreta
- Non committare mai il file `.env.local` nel repository
- Il file `.env.local` è già incluso nel `.gitignore`
