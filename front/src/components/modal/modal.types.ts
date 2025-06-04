import { DetailedHTMLProps, FormHTMLAttributes } from "react";

export interface IButtonModalProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export interface IInputModelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error: string;
}

export interface ILabelModalProps extends React.HTMLAttributes<HTMLParagraphElement> {
  labelText: string;
}

export interface IBoxModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface IRootModalProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  children: React.ReactNode;
  modal: boolean;
}

export interface ITitleModalProps extends React.HTMLAttributes<HTMLHeadingElement> {
  titleText: string;
}
