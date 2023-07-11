import React from 'react';

interface Props {
  title: string;
  description: string;
}

export const ContentGrid = ({ title, description }: Props) => (
  <div className="p-4 overflow-x-hidden transition-colors rounded-lg cursor-pointer bg-default hover:bg-active card-base">
    <div className="space-y-2 overflow-x-hidden leading-relaxed">
      <h2 className="font-medium text-white truncate">{title}</h2>
      <p className="text-white/30 text-md line-clamp-2">{description}</p>
    </div>
  </div>
);
