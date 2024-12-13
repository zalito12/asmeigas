'use client';

import { ReactNode, useState } from 'react';

interface ReadMoreProps {
  children: ReactNode;
  caption?: string;
  contentConstraints?: string;
  captionConstraints?: string;
}

export default function ReadMore({ children, caption, contentConstraints, captionConstraints }: ReadMoreProps) {
  const [show, setShow] = useState(false);

  contentConstraints = contentConstraints || 'hidden';
  captionConstraints = captionConstraints || '';

  return (
    <>
      <button onClick={() => setShow(true)} className={`${show ? 'hidden' : captionConstraints}`}>
        <a>
          {caption || 'Ler máis'}
        </a >
      </button>
      <div className={`${show ? '' : contentConstraints}`}>
        {children}
      </div>
    </>
  );
}