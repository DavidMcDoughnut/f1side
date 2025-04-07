import * as React from "react"
import { Search as SearchIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

// Use React.ComponentProps for the underlying input element
interface SearchInputProps extends React.ComponentProps<"input"> {
  inputClassName?: string
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, inputClassName, ...props }, ref) => {
    return (
      <div className={cn(
        "group relative w-full", 
        "bg-ui-base-weak rounded-md",
        className
      )}>
        <SearchIcon className={cn(
          "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 pointer-events-none",
          "text-quat group-hover:text-scnd",
          "transition-all duration-200 ease-linear"
        )} />
        <Input
          ref={ref}
          className={cn(
            "pl-9 border-nav placeholder:text-quat text-prim caret-pos",
            "group-hover:placeholder:text-scnd group-hover:border-strk-weakmid",
            "focus-visible:border-pos-scnd focus:placeholder:text-quat focus-visible:ring-0",
            "[&::placeholder]:transition-all [&::placeholder]:duration-200 duration-200 ease-linear transition-all",
            inputClassName
          )}
          {...props}
        />
      </div>
    )
  }
)
SearchInput.displayName = "SearchInput"

export { SearchInput } 