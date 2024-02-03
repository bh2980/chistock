import useID from "@utils/hook/useID";

import { TextFieldProps } from "./TextField.types";

const useTextField = (props: TextFieldProps) => {
  const inputID = useID("input", props.id);

  const { label, placeholder, ...otherProps } = props;

  const haveLabel = !!label;
  const tempPlaceholder = placeholder ? placeholder : "";

  return { id: inputID, label, haveLabel, placeholder: tempPlaceholder, ...otherProps };
};

export default useTextField;
