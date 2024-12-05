import { DocumentCard } from '@/components/component/document-card';
import { Document } from '@/types/contentful';

interface SectionDocumentsProps {
  documents?: Document[];
}

export default function SectionDocuments(props: SectionDocumentsProps) {
  const { documents } = props;

  if (!documents?.length) {
    return;
  }

  return (
    <div className="space-y-8 mx-auto text-center mt-12 md:mt-24">
      <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
        Documentos de interese
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {documents?.map((document: Document, index: number) => (
          <DocumentCard key={index} document={document} />
        ))}
      </div>
    </div>
  );
}
