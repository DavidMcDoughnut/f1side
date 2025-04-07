import type { Metadata } from 'next';
import { useState } from 'react';
import { Dropzone, DropzoneContent, DropzoneEmptyState } from '@/components/dropzone'
import { Separator } from '@/components/ui/separator'
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Dropzone',
};

export default function DropzonePage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-7xl px-7 mx-auto space-y-8">
        <div>
        <h1 className="text-2xl font-light tracking-wider mb-4">DROPZONE</h1>
        <Separator variant="weakalpha" className="mb-6" />
        </div>


        {/* Custom Styled Example */}
        <div className="space-y-4 mb-20">
          <h2 className="text-lg font-base tracking-wider text-quat">F1 Carbon</h2>
          <Dropzone
            className=""
          >
            <DropzoneEmptyState className="py-8" />
            <DropzoneContent />
          </Dropzone>
        </div>

        {/* Custom Styled Example with a File */}
        <div className="space-y-4 mb-20">
          <h2 className="text-lg font-base tracking-wider text-quat">F1 Carbon</h2>
          <Dropzone
            className=""
          >
            <DropzoneEmptyState className="py-8" />
            <DropzoneContent />
          </Dropzone>
        </div>        

        {/* Multiple Files Example */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Multiple Files Upload</h2>
          <p className="text-sm text-muted-foreground">Allows up to 3 files, max 5MB each.</p>
          <Dropzone
            maxFiles={3}
            maxFileSize={5 * 1024 * 1024}
            className="bg-muted/50 hover:bg-muted/80 transition-colors"
          >
            <DropzoneEmptyState className="py-4" />
            <DropzoneContent />
          </Dropzone>
        </div>


      </div>
    </div>
  )
} 