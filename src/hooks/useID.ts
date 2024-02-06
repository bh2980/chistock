import { useMemo } from "react";

//TODO Context로 변경
let useID_ID_NUMBER = 1;

const useID = (componenName: string, userProvidedID?: string) => {
  const generatedID = useMemo(() => {
    if (userProvidedID) {
      return userProvidedID;
    }

    useID_ID_NUMBER += 1;

    return `${componenName}-${useID_ID_NUMBER}`;
  }, [componenName, userProvidedID]);

  return generatedID;
};

export default useID;
