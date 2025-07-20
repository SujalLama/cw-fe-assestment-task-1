import { SearchInput } from "./SearchInput";

export function HeroSection() {
  const onSearch = (search: string) => {
    console.log(search);
    // implementing the search logic is not required for this task
  };

  return (
    <div className="relative w-full px-4 max-w-lg mx-auto rounded-xl overflow-hidden mt-8">
      <img src="/task1/hero-bg.png" alt="" aria-hidden="true" className="w-full h-full object-cover" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center  px-6 md:px-4">
        <div className="md:max-w-[54rem] flex flex-col items-center justify-center">
          <h1 id="main-title" className="text-xl sm:text-3xl md:text-5xl font-black text-white leading-snug tracking-tight">
            Search for words, phrases and meanings
          </h1>
          <SearchInput initialValue="" onSearch={onSearch} />
        </div>
      </div>
    </div>
  );
}
