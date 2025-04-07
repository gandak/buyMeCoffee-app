"use client";

import { useState } from "react";

export default function ExpandableText({ text }: { text: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldShowButton = text.length > 200;
  const displayText =
    isExpanded || !shouldShowButton ? text : `${text.slice(0, 200)}... `;

  return (
    <div>
      <p className="text-[14px]">
        {displayText}

        {shouldShowButton && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-sm font-medium text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-expanded={isExpanded}
          >
            {isExpanded ? "See less" : "See more"}
          </button>
        )}
      </p>
    </div>
  );
}
