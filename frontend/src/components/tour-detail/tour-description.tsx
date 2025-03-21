import { formatParagraphs } from "@/utils/tour-utils";

interface TourDescriptionProps {
  description: string;
  summary: string;
}

export function TourDescription({
  description,
  summary,
}: TourDescriptionProps) {
  const paragraphs = formatParagraphs(description);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Tour Description</h2>

      <div className="space-y-4">
        <p className="text-lg font-medium text-primary">{summary}</p>

        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
