import { Badge } from "@/components/ui/badge";

type TagListT = {
  title: string;
  tags: string[]
}

export function TagList({ title, tags }: TagListT) {
  const tagName = title.replace(/\s+/g, '-').toLowerCase();

  return (
    <div className="my-8" aria-labelledby={`taglist-${tagName}`}>
      <h2 className="text-white text-lg font-bold mb-4"
        id={`taglist-${tagName}`}
      >{title}</h2>
      <ul className="flex flex-wrap gap-3" role="list">
        {tags.map((tag) => (
          <li key={tag}>
            <Badge
              asChild
              className="bg-badge-bg text-text-muted hover:text-white hover:bg-gray-700 cursor-pointer py-1.5 px-4 rounded-lg text-sm font-medium"
            >
              <button
                aria-label={`Filter by ${tag}`}
                type="button" onClick={() => console.log(tag)}>{tag}</button>
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}
