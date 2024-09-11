undefined;
import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { link } from 'fs';
import Image from 'next/image';
import Link from 'next/link';

// Create a bespoke renderOptions object to target BLOCKS.EMBEDDED_ENTRY (linked block entries e.g. code blocks)
// INLINES.EMBEDDED_ENTRY (linked inline entries e.g. a reference to another blog post)
// and BLOCKS.EMBEDDED_ASSET (linked assets e.g. images)

export default function renderOptions(links: any): Options {
  // create an asset map
  const assetMap = new Map();
  // create an entry map
  const entryMap = new Map();

  if (links) {
    // loop through the assets and add them to the map
    let list = links.assets?.block || [];
    for (const asset of list) {
      assetMap.set(asset.sys.id, asset);
    }

    // loop through the block linked entries and add them to the map
    list = links.entries?.block || [];
    for (const entry of list) {
      entryMap.set(entry.sys.id, entry);
    }

    // loop through the inline linked entries and add them to the map
    list = links.entries?.inline || [];
    for (const entry of list) {
      entryMap.set(entry.sys.id, entry);
    }
  }

  return {
    renderNode: {
      // other options...
      [INLINES.EMBEDDED_ENTRY]: (node: any, children: any) => {
        // find the entry in the entryMap by ID
        const entry = entryMap.get(node.data.target.sys.id);

        // render the entries as needed
        if (entry.__typename === "BlogPost") {
          return <Link href={`/blog/${entry.slug}`}>{entry.title}</Link>;
        }
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        // find the entry in the entryMap by ID
        const entry = entryMap.get(node.data.target.sys.id);

        // render the entries as needed by looking at the __typename
        // referenced in the GraphQL query
        if (entry.__typename === "CodeBlock") {
          return (
            <pre>
              <code>{entry.code}</code>
            </pre>
          );
        }

        if (entry.__typename === "VideoEmbed") {
          return (
            <iframe
              src={entry.embedUrl}
              height="100%"
              width="100%"
              frameBorder="0"
              scrolling="no"
              title={entry.title}
              allowFullScreen={true}
            />
          );
        }
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: any, next: any) => {
        // find the asset in the assetMap by ID
        const asset = assetMap.get(node.data.target.sys.id);

        // render the asset accordingly
        return (asset && <Image className="mx-auto" src={asset.url} alt={asset.title} width={asset.width} height={asset.height} />);
      },
      [INLINES.HYPERLINK]: (node: any, children: any) => {
        return <Link className="text-primary" href={node.data.uri} target="_blank">{children}</Link>;
      }
    }
  };
}
