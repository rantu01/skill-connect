import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { cn } from "@/lib/utils";

const ContextMenu = ContextMenuPrimitive.Root;
const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
const ContextMenuContent = ContextMenuPrimitive.Content;
const ContextMenuItem = ContextMenuPrimitive.Item;
const ContextMenuCheckboxItem = ContextMenuPrimitive.CheckboxItem;
const ContextMenuRadioItem = ContextMenuPrimitive.RadioItem;
const ContextMenuLabel = ContextMenuPrimitive.Label;
const ContextMenuSeparator = ContextMenuPrimitive.Separator;
const ContextMenuGroup = ContextMenuPrimitive.Group;
const ContextMenuPortal = ContextMenuPrimitive.Portal;
const ContextMenuSub = ContextMenuPrimitive.Sub;
const ContextMenuSubContent = ContextMenuPrimitive.SubContent;
const ContextMenuSubTrigger = ContextMenuPrimitive.SubTrigger;
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

export {
  ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem,
  ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuLabel, ContextMenuSeparator,
  ContextMenuGroup, ContextMenuPortal, ContextMenuSub,
  ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuRadioGroup,
};