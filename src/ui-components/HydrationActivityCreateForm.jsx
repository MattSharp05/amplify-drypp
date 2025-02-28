/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { HydrationActivity } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function HydrationActivityCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Date: "",
    Time: "",
    HydrationType: "",
    HydrationVolume: "",
  };
  const [Date, setDate] = React.useState(initialValues.Date);
  const [Time, setTime] = React.useState(initialValues.Time);
  const [HydrationType, setHydrationType] = React.useState(
    initialValues.HydrationType
  );
  const [HydrationVolume, setHydrationVolume] = React.useState(
    initialValues.HydrationVolume
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDate(initialValues.Date);
    setTime(initialValues.Time);
    setHydrationType(initialValues.HydrationType);
    setHydrationVolume(initialValues.HydrationVolume);
    setErrors({});
  };
  const validations = {
    Date: [],
    Time: [],
    HydrationType: [],
    HydrationVolume: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Date,
          Time,
          HydrationType,
          HydrationVolume,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new HydrationActivity(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "HydrationActivityCreateForm")}
      {...rest}
    >
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Date: value,
              Time,
              HydrationType,
              HydrationVolume,
            };
            const result = onChange(modelFields);
            value = result?.Date ?? value;
          }
          if (errors.Date?.hasError) {
            runValidationTasks("Date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("Date", Date)}
        errorMessage={errors.Date?.errorMessage}
        hasError={errors.Date?.hasError}
        {...getOverrideProps(overrides, "Date")}
      ></TextField>
      <TextField
        label="Time"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={Time}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Date,
              Time: value,
              HydrationType,
              HydrationVolume,
            };
            const result = onChange(modelFields);
            value = result?.Time ?? value;
          }
          if (errors.Time?.hasError) {
            runValidationTasks("Time", value);
          }
          setTime(value);
        }}
        onBlur={() => runValidationTasks("Time", Time)}
        errorMessage={errors.Time?.errorMessage}
        hasError={errors.Time?.hasError}
        {...getOverrideProps(overrides, "Time")}
      ></TextField>
      <TextField
        label="Hydration type"
        isRequired={false}
        isReadOnly={false}
        value={HydrationType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Date,
              Time,
              HydrationType: value,
              HydrationVolume,
            };
            const result = onChange(modelFields);
            value = result?.HydrationType ?? value;
          }
          if (errors.HydrationType?.hasError) {
            runValidationTasks("HydrationType", value);
          }
          setHydrationType(value);
        }}
        onBlur={() => runValidationTasks("HydrationType", HydrationType)}
        errorMessage={errors.HydrationType?.errorMessage}
        hasError={errors.HydrationType?.hasError}
        {...getOverrideProps(overrides, "HydrationType")}
      ></TextField>
      <TextField
        label="Hydration volume"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={HydrationVolume}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Date,
              Time,
              HydrationType,
              HydrationVolume: value,
            };
            const result = onChange(modelFields);
            value = result?.HydrationVolume ?? value;
          }
          if (errors.HydrationVolume?.hasError) {
            runValidationTasks("HydrationVolume", value);
          }
          setHydrationVolume(value);
        }}
        onBlur={() => runValidationTasks("HydrationVolume", HydrationVolume)}
        errorMessage={errors.HydrationVolume?.errorMessage}
        hasError={errors.HydrationVolume?.hasError}
        {...getOverrideProps(overrides, "HydrationVolume")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
