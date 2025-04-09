//import { Slot } from "@radix-ui/react-slot";
import React from "react";
import styles from "./text.module.scss";
const eligibleTags = ["h1", "h2", "h3", "p", "div"] as const;
type eligibleTagsType = (typeof eligibleTags)[number];

type TextProps = React.HTMLAttributes<HTMLElement>;

type Slot2TextProps = TextProps & {
  myHtml?: eligibleTagsType;
  myStyle?: eligibleTagsType;
  children: React.ReactNode;
};

export default function Text({ myHtml = "p", myStyle = myHtml, children, ...props }: Slot2TextProps) {
  const classNameFromStyles = styles[myStyle] || "";
  const element = React.createElement(myHtml, { className: classNameFromStyles, ...props }, children);
  return element;
}
