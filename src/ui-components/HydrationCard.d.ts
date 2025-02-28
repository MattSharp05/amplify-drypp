/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { HydrationActivity } from "../models";
import { DividerProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type HydrationCardOverridesProps = {
    HydrationCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<FlexProps>;
    "Hydration Activity"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Features?: PrimitiveOverrideProps<FlexProps>;
    "Hydration Type"?: PrimitiveOverrideProps<TextProps>;
    "Hydration Amount"?: PrimitiveOverrideProps<TextProps>;
    Date?: PrimitiveOverrideProps<TextProps>;
    Time?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HydrationCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    hydrationActivity?: HydrationActivity;
} & {
    overrides?: HydrationCardOverridesProps | undefined | null;
}>;
export default function HydrationCard(props: HydrationCardProps): React.ReactElement;
