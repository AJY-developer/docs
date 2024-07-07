"use client"
import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

export default function DocsData({ data }: { data: { content: string |null} }) {
  useEffect(() => {
    // Run Prism.js syntax highlighting after component has mounted
    Prism.highlightAll();

    
  }, []);

  

  return (
    <div className="p-6 text-white">
      {data && data.content ? (
        // Use dangerouslySetInnerHTML to render HTML content with syntax highlighting
        <div dangerouslySetInnerHTML={{ __html: data.content}} />
      ) : (
        <h3>Data not added</h3>
      )}
    </div>
  );
}

 


