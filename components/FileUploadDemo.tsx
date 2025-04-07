'use client'

import { Dropzone, DropzoneContent, DropzoneEmptyState } from '@/components/dropzone'

const FileUploadDemo = () => {
  return (
    <div className="w-[500px]">
      <Dropzone
        maxFiles={2}
        maxFileSize={1000 * 1000 * 10} // 10MB
        onDrop={(files) => console.log('Files dropped:', files)}
      >
        <DropzoneEmptyState />
        <DropzoneContent />
      </Dropzone>
    </div>
  )
}

export { FileUploadDemo } 