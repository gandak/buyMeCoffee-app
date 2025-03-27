"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CopyButton({ value = "" }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (!value) return;

    // Use the clipboard API with proper error handling
    navigator.clipboard
      .writeText(value)
      .then(() => {
        // Success - update state to show copied
        setCopied(true);

        // Reset after 2 seconds
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <Button size="sm" onClick={copyToClipboard} type="button">
      {copied ? (
        <>
          <Check className="h-4 w-4 mr-2" /> Copied page link
        </>
      ) : (
        <>
          <Copy className="h-4 w-4 mr-2" /> Share page link
        </>
      )}
    </Button>
  );
}
