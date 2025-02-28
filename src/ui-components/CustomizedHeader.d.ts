/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomizedHeaderOverridesProps = {
    CustomizedHeader?: PrimitiveOverrideProps<FlexProps>;
    "Frame 5"?: PrimitiveOverrideProps<FlexProps>;
    "Sypsation  v1.png 1"?: PrimitiveOverrideProps<ImageProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    "Add Activity"?: PrimitiveOverrideProps<TextProps>;
    Pricing?: PrimitiveOverrideProps<TextProps>;
    "Contact Us"?: PrimitiveOverrideProps<TextProps>;
    actions?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CustomizedHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CustomizedHeaderOverridesProps | undefined | null;
}>;
export default function CustomizedHeader(props: CustomizedHeaderProps): React.ReactElement;
