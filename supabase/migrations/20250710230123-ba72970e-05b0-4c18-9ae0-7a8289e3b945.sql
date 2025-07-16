-- Create table for form submissions
CREATE TABLE public.form_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security but allow anonymous inserts
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (no authentication required)
CREATE POLICY "Allow anonymous form submissions" 
ON public.form_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent reading submissions (privacy)
CREATE POLICY "No public read access" 
ON public.form_submissions 
FOR SELECT 
USING (false);