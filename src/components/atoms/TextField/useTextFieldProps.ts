import { useRef } from "react";
import { v4 as uuid } from "uuid";

import { TextFieldProps } from "./TextField.types";

const useTextFieldProps = (props: TextFieldProps) => {
  const idRef = useRef(props.id);

  const { label, placeholder, ...otherProps } = props;

  const haveLabel = !!label;
  const tempPlaceholder = placeholder ? placeholder : "";

  if (!idRef.current) {
    idRef.current = `id-${uuid()}`;
  }

  return { id: idRef.current, label, haveLabel, placeholder: tempPlaceholder, ...otherProps };
};

export default useTextFieldProps;
