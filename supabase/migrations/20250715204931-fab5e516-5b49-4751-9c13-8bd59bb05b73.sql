-- Create a storage bucket for audio files
INSERT INTO storage.buckets (id, name, public)
VALUES ('audio-files', 'audio-files', true);

-- Create policies for the audio bucket
CREATE POLICY "Audio files are publicly accessible"
ON storage.objects
FOR SELECT
USING (bucket_id = 'audio-files');

CREATE POLICY "Allow public uploads to audio bucket"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'audio-files');