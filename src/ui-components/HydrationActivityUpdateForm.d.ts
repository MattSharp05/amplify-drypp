/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { HydrationActivity } from "../models";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HydrationActivityUpdateFormInputValues = {
    Date?: string;
    Time?: string;
    HydrationType?: string;
    HydrationVolume?: number;
};
export declare type HydrationActivityUpdateFormValidationValues = {
    Date?: ValidationFunction<string>;
    Time?: ValidationFunction<string>;
    HydrationType?: ValidationFunction<string>;
    HydrationVolume?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HydrationActivityUpdateFormOverridesProps = {
    HydrationActivityUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Date?: PrimitiveOverrideProps<TextFieldProps>;
    Time?: PrimitiveOverrideProps<TextFieldProps>;
    HydrationType?: PrimitiveOverrideProps<TextFieldProps>;
    HydrationVolume?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HydrationActivityUpdateFormProps = React.PropsWithChildren<{
    overrides?: HydrationActivityUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    hydrationActivity?: HydrationActivity;
    onSubmit?: (fields: HydrationActivityUpdateFormInputValues) => HydrationActivityUpdateFormInputValues;
    onSuccess?: (fields: HydrationActivityUpdateFormInputValues) => void;
    onError?: (fields: HydrationActivityUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HydrationActivityUpdateFormInputValues) => HydrationActivityUpdateFormInputValues;
    onValidate?: HydrationActivityUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HydrationActivityUpdateForm(props: HydrationActivityUpdateFormProps): React.ReactElement;
