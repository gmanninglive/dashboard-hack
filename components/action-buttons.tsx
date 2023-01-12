import {
  PlusIcon as PlusIconOutline,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import React from "react";

export function NewQuote({
  onClick,
}: {
  onClick: (e: React.MouseEvent) => void;
}) {
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-3 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={onClick}
      >
        <PlusIconOutline className="h-6 w-6" aria-hidden="true" />
      </button>
    </>
  );
}

export function Chat() {
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-3 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <ChatBubbleBottomCenterTextIcon
          className="h-6 w-6"
          aria-hidden="true"
        />
      </button>
    </>
  );
}
