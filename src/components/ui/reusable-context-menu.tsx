import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./context-menu";

import React from "react";

interface ContextMenuItem {
  name: string;
  onClick: () => void;
}

interface ReusableContextMenuProps {
  children: React.ReactNode;
  items: ContextMenuItem[];
}

export default function ReusableContextMenu({
  children,
  items,
}: ReusableContextMenuProps) {
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent>
        {items.map((item) => (
          <ContextMenuItem key={item.name} onClick={item.onClick}>
            {item.name}
          </ContextMenuItem>
        ))}
      </ContextMenuContent>
    </ContextMenu>
  );
}
