
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="p-4  bg-black border-b border-white" role="banner">
      <div className="max-w-xl mx-auto flex items-center justify-between">

        <a href="/" title="Go to home page" className="flex items-center gap-4 ">
          <img src="/task1/logo.png" alt="Worctionary logo" className="w-4 h-4" />
          <span className="text-white font-bold text-lg ">Worctionary</span>
        </a>

        <div className="flex items-center gap-2 md:gap-4 lg:gap-8">
          <div style={{ position: "relative" }}>
            <label htmlFor="site-search-input" className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2">
              <Search className="text-text-muted w-5 h-5" aria-hidden="true" />
              <span className="sr-only">Search this site</span>
            </label>

            <Input
              type="text"
              placeholder="Search"
              role="searchbox"
              id="site-search-input"
              aria-label="Search this site"
              className="hidden md:block pl-11 bg-surface text-white placeholder:text-text-muted font-regular text-sm border-none focus:ring-0 rounded-lg max-w-40 "
            />
          </div>

          <button
            aria-label="Open search"
            className="w-10 h-10 bg-surface rounded-full flex items-center justify-center md:hidden">
            <Search className=" w-4 h-4 text-text-muted" aria-hidden="true" />
          </button>

          <a href="/profile" title="avatar" aria-label="Go to your profile">
            <Avatar className="w-10 h-10 bg-surface" >
              <AvatarImage src="/avatar.jpg" />
              <AvatarFallback className="bg-surface text-text-muted">U</AvatarFallback>
            </Avatar>
          </a>
        </div>

      </div>
    </header>
  );
}
