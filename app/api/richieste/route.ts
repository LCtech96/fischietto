import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { categoria, whatsapp } = body

    if (!categoria || !whatsapp) {
      return NextResponse.json(
        { error: 'Categoria e numero WhatsApp sono obbligatori' },
        { status: 400 }
      )
    }

    // Validazione categoria
    const validCategories = ['sport', 'moda', 'food', 'tech']
    if (!validCategories.includes(categoria)) {
      return NextResponse.json(
        { error: 'Categoria non valida' },
        { status: 400 }
      )
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Missing Supabase configuration:', {
        hasUrl: !!supabaseUrl,
        hasKey: !!supabaseServiceKey,
      })
      return NextResponse.json(
        { 
          error: 'Configurazione database mancante',
          details: 'Verifica che NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY siano configurate su Vercel'
        },
        { status: 500 }
      )
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    const { data, error } = await supabase
      .from('richieste')
      .insert([
        {
          categoria,
          whatsapp: whatsapp.trim(),
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { 
          error: 'Errore nel salvataggio della richiesta',
          details: error.message 
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, data },
      { status: 201 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { 
        error: 'Errore interno del server',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
