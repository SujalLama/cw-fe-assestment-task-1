import { useState } from "react";
import { TagList } from "@/components/TagList"


export function FilterSection() {
  const [tags, setTags] = useState<string[]>([
    "NFT",
    "Metaverse",
    "Sustainable",
    "Sonder",
    "FOMO",
    "Ghosting",
  ]);

  return (
    <section className="mx-auto px-4 max-w-lg">
      <TagList title="Trending" tags={tags} />
      <TagList title="For you" tags={tags} />
    </section>
  )
}
