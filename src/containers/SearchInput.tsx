import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useDebounced } from "@/hooks/useDebounced";

export function SearchInput({
  initialValue,
  onSearch,
}: {
  initialValue: string;
  onSearch: (search: string) => void;
}) {
  const { value, setValue } = useDebounced({ initialValue, onChange: onSearch });

  return (
    <form className="flex items-center bg-input-bg p-2 gap-2  border border-input-border rounded-[12px] w-full max-w-[480px] mt-6 shadow-lg">
      <div className="relative flex-1 ">


        <label htmlFor="content-search-input" className="absolute left-2 top-1/2 -translate-y-1/2">
          <Search className="text-gray-400 w-3 h-3 md:w-5 md:h-5" />
        </label>

        <Input
          id="content-search-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Type to search..."
          className="flex-1 bg-transparent border-none text-white text-sm md:text-base font-work-sans pl-9 placeholder:text-gray-400 focus:ring-0"
        />

      </div>
      <Button type="submit" className="bg-primary hover:bg-primary-hover cursor-pointer font-bold rounded-lg text-white p-3 md:px-5 md:py-6 text-sm md:text-base">
        Search
      </Button>
    </form>
  );
}
