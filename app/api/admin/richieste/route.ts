import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET(request: NextRequest) {
  try {
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
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { 
          error: 'Errore nel caricamento delle richieste',
          details: error.message 
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { richieste: data || [] },
      { status: 200 }
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
