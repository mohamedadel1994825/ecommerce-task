import React, { forwardRef } from "react";
import { Modalize, ModalizeProps } from "react-native-modalize";
import { Portal } from "react-native-paper";

interface CustomModalProps extends ModalizeProps {
  // Define the props for your CustomModal component
  children?: React.ReactNode;
  // Add other props as needed
}

const CustomModal = forwardRef<Modalize, CustomModalProps>((props, ref) => (
  <Portal>
    <Modalize  ref={ref} {...props}>
      {props.children}
    </Modalize>
  </Portal>
));

export { CustomModal };
