import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";

const NavigationMenu = NavigationMenuPrimitive.Root;
const NavigationMenuList = NavigationMenuPrimitive.List;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const NavigationMenuContent = NavigationMenuPrimitive.Content;
const NavigationMenuTrigger = NavigationMenuPrimitive.Trigger;
const NavigationMenuLink = NavigationMenuPrimitive.Link;
const NavigationMenuViewport = NavigationMenuPrimitive.Viewport;
const NavigationMenuIndicator = NavigationMenuPrimitive.Indicator;

export {
  NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuContent,
  NavigationMenuTrigger, NavigationMenuLink, NavigationMenuViewport, NavigationMenuIndicator,
};