import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Upload, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface AudioUploaderProps {
  onUploadComplete?: (publicUrl: string) => void;
}

export function AudioUploader({ onUploadComplete }: AudioUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [publicUrl, setPublicUrl] = useState<string>('');

  const handleUpload = async () => {
    setIsUploading(true);
    setUploadStatus('idle');
    
    try {
      const { data, error } = await supabase.functions.invoke('upload-audio', {
        body: {
          googleDriveId: '1OnWnpYMpa6Ea8gSio4NOIDQHg9cza8mh',
          filename: 'plastic-surgery-outbound-demo.wav'
        }
      });

      if (error) {
        throw error;
      }

      if (data?.success) {
        setPublicUrl(data.publicUrl);
        setUploadStatus('success');
        onUploadComplete?.(data.publicUrl);
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      setUploadStatus('error');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 border rounded-lg">
      <Button
        onClick={handleUpload}
        disabled={isUploading}
        className="flex items-center gap-2"
      >
        {isUploading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Uploading...
          </>
        ) : (
          <>
            <Upload className="w-4 h-4" />
            Upload Audio to Supabase
          </>
        )}
      </Button>

      {uploadStatus === 'success' && (
        <div className="flex items-center gap-2 text-green-600">
          <CheckCircle className="w-4 h-4" />
          <span>Audio uploaded successfully!</span>
        </div>
      )}

      {uploadStatus === 'error' && (
        <div className="flex items-center gap-2 text-red-600">
          <AlertCircle className="w-4 h-4" />
          <span>Upload failed. Please try again.</span>
        </div>
      )}

      {publicUrl && (
        <div className="text-xs text-gray-500 break-all">
          URL: {publicUrl}
        </div>
      )}
    </div>
  );
}