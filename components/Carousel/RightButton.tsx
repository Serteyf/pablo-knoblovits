"use client";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, ButtonProps, ComponentWithAs, IconProps } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Context, ContextType } from "./Provider";

export const RightButton = ({ customIcon, ...props }: any) => {
  const context = useContext(Context);

  const { setTrackIsActive, activeItem, constraint, positions, setActiveItem } =
    context as ContextType;

  const handleFocus = () => setTrackIsActive(true);

  const handleIncrementClick = () => {
    setTrackIsActive(true);
    /* @ts-expect-error */
    !(activeItem === positions.length - constraint) && setActiveItem((prev: number) => prev + 1);
  };
  return (
    <>
      <Button {...props} onClick={handleIncrementClick} onFocus={handleFocus} zIndex={2} minW={0}>
        {customIcon ? <Box>{customIcon}</Box> : <ChevronRightIcon boxSize={9} />}
      </Button>
    </>
  );
};
