import React, { ReactNode } from 'react';
import clsx from 'clsx';

type TextStyleProps = {
  [key: string]: string;
};

type FontStyleProps = {
  [key: string]: string;
};

type ColorStyleProps = {
  [key: string]: string;
};

type CustomTextProps = {
  children: ReactNode;
  size: keyof TextStyleProps;
  weight?: keyof FontStyleProps;
  color?: keyof ColorStyleProps;
  className?: string;
};

const textStyle: TextStyleProps = {
  xs: 'text-xs md:text-xs', // Paragraph
  sm: 'text-xs md:text-sm', // Content
  md: 'text-sm md:text-base', // Label
  lg: 'text-base md:text-lg', // Sub heading
  xl: 'text-lg md:text-xl', // Heading
  xxl: 'text-xl md:text-2xl', // Title
  xxxl: 'text-2xl md:text-4xl', // Title
  xxxxl: 'text-4xl md:text-6xl',
};

const fontStyle: FontStyleProps = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const colorStyle: ColorStyleProps = {
  primary: 'text-primaryWhite',
  secondary: 'text-darkGray',
  blue: 'text-blue',
  mediumGray: 'text-mediumGray',
  buttonText: 'text-buttonText',
  red: 'text-red-400'
};

export const Typography = ({
  children,
  size,
  weight = 'normal',
  color = 'secondary',
  className,
}: CustomTextProps) => {
  const sizeClassName = textStyle[size];
  const weightClassName = fontStyle[weight];
  const colorClassName = colorStyle[color];

  return (
    <p
      className={clsx(
        sizeClassName,
        weightClassName,
        colorClassName,
        className
      )}
    >
      {children}
    </p>
  );
};
