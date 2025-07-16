-- Add first_name and last_name columns to form_submissions table
ALTER TABLE public.form_submissions 
ADD COLUMN first_name TEXT,
ADD COLUMN last_name TEXT;

-- Migrate existing data (split name into first_name, assuming single names go to first_name)
UPDATE public.form_submissions 
SET first_name = CASE 
  WHEN position(' ' IN name) > 0 THEN split_part(name, ' ', 1)
  ELSE name
END,
last_name = CASE 
  WHEN position(' ' IN name) > 0 THEN substring(name FROM position(' ' IN name) + 1)
  ELSE NULL
END
WHERE name IS NOT NULL;

-- Make first_name required (not null)
ALTER TABLE public.form_submissions 
ALTER COLUMN first_name SET NOT NULL;

-- Drop the old name column
ALTER TABLE public.form_submissions 
DROP COLUMN name;