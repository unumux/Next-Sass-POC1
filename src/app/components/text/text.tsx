//import { Slot } from "@radix-ui/react-slot";
import React from 'react';
import styles from './text.module.scss'
const eligibleTags = ['h1', 'h2', 'h3', 'p', 'div'] as const;
type eligibleTagsType = (typeof eligibleTags)[number];

type TextProps = React.HTMLAttributes<HTMLElement>;

type Slot2TextProps = TextProps & {
    myHtml?: eligibleTagsType,
    myStyle?: eligibleTagsType,
    children: React.ReactNode;
};

export default function Text2({ myHtml = 'p', myStyle, children,  ...props }: Slot2TextProps) {
    const renderElement = (myHtml: eligibleTagsType, className: eligibleTagsType = myHtml, children:React.ReactNode) => {
        const elementType = myHtml || 'p'; // Default to 'span' if htmlAs is not provided
        if (!myStyle){
            myStyle = myHtml;
        }

        const classNameFromStyles = styles[className] || '';

        return React.createElement(elementType, { className: classNameFromStyles, ...props }, children);
    };
    return (
        renderElement(myHtml, myStyle, children)
    )
}