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
