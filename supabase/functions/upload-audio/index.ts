import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface RequestBody {
  googleDriveId: string
  filename: string
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { googleDriveId, filename }: RequestBody = await req.json()
    
    console.log('Downloading audio file from Google Drive:', googleDriveId)
    
    // Download the file from Google Drive
    const googleDriveUrl = `https://drive.google.com/uc?export=download&id=${googleDriveId}`
    const response = await fetch(googleDriveUrl)
    
    if (!response.ok) {
      throw new Error(`Failed to download file: ${response.statusText}`)
    }
    
    const audioBlob = await response.blob()
    const audioBuffer = await audioBlob.arrayBuffer()
    
    console.log('Uploading to Supabase storage bucket...')
    
    // Upload to Supabase storage
    const { data, error } = await supabase.storage
      .from('audio-files')
      .upload(filename, audioBuffer, {
        contentType: 'audio/wav',
        cacheControl: '3600',
        upsert: true
      })
    
    if (error) {
      console.error('Storage upload error:', error)
      throw error
    }
    
    console.log('File uploaded successfully:', data.path)
    
    // Get the public URL
    const { data: publicUrlData } = supabase.storage
      .from('audio-files')
      .getPublicUrl(data.path)
    
    return new Response(
      JSON.stringify({
        success: true,
        publicUrl: publicUrlData.publicUrl,
        path: data.path
      }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    )
    
  } catch (error) {
    console.error('Upload error:', error)
    return new Response(
      JSON.stringify({
        error: error.message
      }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    )
  }
})