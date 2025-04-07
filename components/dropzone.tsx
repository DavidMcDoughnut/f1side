'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { CheckCircle, File, Upload, X } from 'lucide-react'
import { createContext, type PropsWithChildren, useCallback, useContext, useRef, useState } from 'react'

export const formatBytes = (
  bytes: number,
  decimals = 2,
  size?: 'bytes' | 'KB' | 'MB' | 'GB' | 'TB' | 'PB' | 'EB' | 'ZB' | 'YB'
) => {
  const k = 1000
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  if (bytes === 0 || bytes === undefined) return size !== undefined ? `0 ${size}` : '0 bytes'
  const i = size !== undefined ? sizes.indexOf(size) : Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

type DropzoneContextType = {
  files: File[]
  setFiles: (files: File[]) => void
  maxFiles: number
  maxFileSize: number
  isSuccess: boolean
  inputRef: React.RefObject<HTMLInputElement | null>
  isDragActive: boolean
  isDragReject: boolean
}

const DropzoneContext = createContext<DropzoneContextType | undefined>(undefined)

type DropzoneProps = PropsWithChildren<{
  className?: string
  maxFiles?: number
  maxFileSize?: number
  onDrop?: (files: File[]) => void
}>

const Dropzone = ({
  className,
  children,
  maxFiles = 1,
  maxFileSize = 1000 * 1000 * 10, // 10MB default
  onDrop,
}: DropzoneProps) => {
  const [files, setFiles] = useState<File[]>([])
  const [isDragActive, setIsDragActive] = useState(false)
  const [isDragReject, setIsDragReject] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      setIsDragActive(false)
      
      const droppedFiles = Array.from(e.dataTransfer.files)
      if (droppedFiles.length > maxFiles) {
        setIsDragReject(true)
        return
      }
      
      setFiles(droppedFiles)
      onDrop?.(droppedFiles)
    },
    [maxFiles, onDrop]
  )

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragActive(true)
  }, [])

  const handleDragLeave = useCallback(() => {
    setIsDragActive(false)
    setIsDragReject(false)
  }, [])

  return (
    <DropzoneContext.Provider 
      value={{ 
        files, 
        setFiles, 
        maxFiles, 
        maxFileSize, 
        isSuccess, 
        inputRef,
        isDragActive,
        isDragReject
      }}
    >
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={cn(
        // Base container styles
        "border-2 border-dashed rounded-xl p-8",
        // Default state - subtle background and border
        "bg-ui-base-weak border-strk-weak",
        // Hover state - light positive quaternary background with tertiary border
        "hover:bg-pos-quat/20 hover:border-pos-scnd hover:inset-shadow-pos-md",
        // Active drag state - positive secondary border with quaternary background
        "data-[drag-active=true]:border-pos data-[drag-active=true]:bg-pos-quat data-[drag-active=true]:inset-shadow-page-xl",
        // Reject state - negative border and background for invalid files
        "data-[drag-reject=true]:border-neg data-[drag-reject=true]:bg-neg/10",
        // Success state - solid border style with positive color
        "data-[success=true]:border-solid data-[success=true]:border-pos",
        // Animation
        "transition-all duration-300",
          className
        )}
        data-drag-active={isDragActive}
        data-drag-reject={isDragReject}
        data-success={isSuccess}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          multiple={maxFiles > 1}
          onChange={(e) => {
            const selectedFiles = Array.from(e.target.files || [])
            setFiles(selectedFiles)
            onDrop?.(selectedFiles)
          }}
        />
        {children}
      </div>
    </DropzoneContext.Provider>
  )
}

const DropzoneContent = ({ className }: { className?: string }) => {
  const { files, setFiles } = useDropzoneContext()

  const handleRemoveFile = useCallback(
    (fileName: string) => {
      setFiles(files.filter((file) => file.name !== fileName))
    },
    [files, setFiles]
  )

  return (
    <div className={cn(
      "flex flex-col",
      "[&>div]:border-strk-weakmid",
      "[&>div]:hover:bg-nav",
      className
    )}>
      {files.map((file, idx) => (
        <div
          key={`${file.name}-${idx}`}
          className="flex items-center gap-x-4 border border-strk-weak py-2.5 first:mt-4 rounded-lg px-3 transition-colors"
        >
          {/* File icon container */}
          <div className="h-8 w-8 rounded-sm border border-pos-quat bg-pos-quat flex items-center justify-center shrink-0">
            <File size={16} className="text-pos" />
          </div>

          {/* File information after dropping */}
          <div className="shrink grow flex flex-col items-start truncate min-w-0">
            <p title={file.name} className="text-sm tracking-wide font-normal truncate max-w-full">
              {file.name}
            </p>
            {/* File size in secondary color */}
            <p className="text-xs tracking-wide text-scnd">{formatBytes(file.size, 2)}</p>
          </div>
          {/* Remove button */}
          <Button
            isIcon
            variant="ghost"
            size="default"
            onClick={() => handleRemoveFile(file.name)}
            className="absolute right-2 top-2 z-10"
          >
            <X className="size-4" />
          </Button>
        </div>
      ))}
    </div>
  )
}

const DropzoneEmptyState = ({ className }: { className?: string }) => {
  const { maxFiles, maxFileSize, inputRef, isSuccess } = useDropzoneContext()

  if (isSuccess) {
    // Success state with checkmark
    return (
      <div className="flex items-center justify-center gap-2 text-pos-scnd py-2">
        <CheckCircle size={16} />
        <p className="text-sm font-normal tracking-wide">Upload complete</p>
      </div>
    )
  }

  return (
    <div className={cn(
      "flex flex-col items-center gap-y-2",
      "text-tert", // Default text color for empty state
      className
    )}>
      {/* Upload icon */}
      <Upload size={24} className="text-tert" />
      
      {/* Main upload CTA text - larger and medium weight */}
      <p className="text-xl font-medium tracking-wide text-tert mb-2">
        Upload{!!maxFiles && maxFiles > 1 ? ` ${maxFiles}` : ''} file
        {!maxFiles || maxFiles > 1 ? 's' : ''}
      </p>
      
      {/* Instructions text with clickable button */}
      <div className="flex flex-col items-center gap-y-3">
        <p className="text-base font-normal text-scnd tracking-wide">
          Drag and drop or{' '}
          <button
            onClick={() => inputRef.current?.click()}
            className="text-base font-normal text-pos hover:text-pos tracking-wide underline-offset-4 hover:underline"
          >
            select {maxFiles === 1 ? `file` : 'files'}
          </button>{' '}
          to upload
        </p>

        {/* File size limit text */}
        {maxFileSize !== Number.POSITIVE_INFINITY && (
          <p className="text-xs text-tert tracking-wide">
            Maximum file size: {formatBytes(maxFileSize, 2)}
          </p>
        )}
      </div>
    </div>
  )
}

const useDropzoneContext = () => {
  const context = useContext(DropzoneContext)
  if (!context) {
    throw new Error('useDropzoneContext must be used within a Dropzone')
  }
  return context
}

export { Dropzone, DropzoneContent, DropzoneEmptyState, useDropzoneContext } 