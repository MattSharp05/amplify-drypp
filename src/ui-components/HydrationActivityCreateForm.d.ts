/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type HydrationActivityCreateFormInputValues = {
    Date?: string;
    Time?: string;
    HydrationType?: string;
    HydrationVolume?: number;
};
export declare type HydrationActivityCreateFormValidationValues = {
    Date?: ValidationFunction<string>;
    Time?: ValidationFunction<string>;
    HydrationType?: ValidationFunction<string>;
    HydrationVolume?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HydrationActivityCreateFormOverridesProps = {
    HydrationActivityCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Date?: PrimitiveOverrideProps<TextFieldProps>;
    Time?: PrimitiveOverrideProps<TextFieldProps>;
    HydrationType?: PrimitiveOverrideProps<TextFieldProps>;
    HydrationVolume?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HydrationActivityCreateFormProps = React.PropsWithChildren<{
    overrides?: HydrationActivityCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HydrationActivityCreateFormInputValues) => HydrationActivityCreateFormInputValues;
    onSuccess?: (fields: HydrationActivityCreateFormInputValues) => void;
    onError?: (fields: HydrationActivityCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: HydrationActivityCreateFormInputValues) => HydrationActivityCreateFormInputValues;
    onValidate?: HydrationActivityCreateFormValidationValues;
} & React.CSSProperties>;
export default function HydrationActivityCreateForm(props: HydrationActivityCreateFormProps): React.ReactElement;
