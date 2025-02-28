/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useAuth } from "./utils";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function HomeCard(props) {
  const { user, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  return (
    <Flex
      gap="0"
      direction="column"
      width="960px"
      height="468px"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="20px"
      padding="40px 12px 40px 12px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "HomeCard")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="297.12px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <Image
          width="58.12px"
          height="79px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://drypp-storage-020227a9e2056-staging.s3.us-east-1.amazonaws.com/Screenshot+2025-02-28+at+01.04.33.png"
          {...getOverrideProps(overrides, "image 7")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="24.204544067382812px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="216px"
          height="24px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Hi "}${authAttributes["name"]}${"!"}`}
          {...getOverrideProps(overrides, "Hi there!")}
        ></Text>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="24.204544067382812px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="216px"
        height="44px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Let’s see how you’re hydrating today."
        {...getOverrideProps(
          overrides,
          "Let\u2019s see how you\u2019re hydrating today."
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="48px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="58.09090805053711px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="108px"
        height="58px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="58%"
        {...getOverrideProps(overrides, "58%")}
      ></Text>
      <Image
        width="468px"
        height="37px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://drypp-storage-020227a9e2056-staging.s3.us-east-1.amazonaws.com/Screenshot+2025-02-28+at+08.37.13.png"
        {...getOverrideProps(overrides, "Progress Bar")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="24.204544067382812px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="344px"
        height="30px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="View your Hydration Activities below"
        {...getOverrideProps(overrides, "View your Hydration Activities below")}
      ></Text>
    </Flex>
  );
}
