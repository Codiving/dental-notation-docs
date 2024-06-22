"use client";

import {
  FDI_BABY_TEETH_LOWER_LEFT_WITH_TMP,
  FDI_BABY_TEETH_LOWER_RIGHT_WITH_TMP,
  FDI_BABY_TEETH_UPPER_LEFT_WITH_TMP,
  FDI_BABY_TEETH_UPPER_RIGHT_WITH_TMP,
  FDI_PRIMARY_TEETH_LOWER_LEFT,
  FDI_PRIMARY_TEETH_LOWER_RIGHT,
  FDI_PRIMARY_TEETH_UPPER_LEFT,
  FDI_PRIMARY_TEETH_UPPER_RIGHT,
  FdiTeethWithTmp,
  NotationType
} from "dental-notation";
import BabyTeethGrid from "./BabyTeethGrid";
import TeethGrid from "./TeethGrid";

const MainTitleStyles = { fontSize: 20, fontWeight: "bold", marginBottom: 20 };
const PrimaryTitleStyles = { fontSize: 18, marginBottom: 20 };
const BabyTitleStyles = { fontSize: 18, marginBottom: 20, marginTop: 20 };

const getNotationName = (notationType: NotationType) => {
  switch (notationType) {
    case "fdi":
      return "FDI";
    case "universal":
      return "Universal";
    case "palmer":
      return "Palmer";
  }
};

export interface TestProps {
  notationType: NotationType;
  isTest?: boolean;
  selectedTeeth?: FdiTeethWithTmp[];
  onChangeSelectedTeeth?: (teeth: FdiTeethWithTmp[]) => void;
}

interface NotationDescriptionProps extends TestProps {
  urTeeth?: FdiTeethWithTmp[];
  ulTeeth?: FdiTeethWithTmp[];
  lrTeeth?: FdiTeethWithTmp[];
  llTeeth?: FdiTeethWithTmp[];
}

const NotationDescription = (props: NotationDescriptionProps) => {
  const {
    notationType,
    isTest = false,
    urTeeth = [...FDI_PRIMARY_TEETH_UPPER_RIGHT],
    ulTeeth = [...FDI_PRIMARY_TEETH_UPPER_LEFT],
    lrTeeth = [...FDI_PRIMARY_TEETH_LOWER_RIGHT],
    llTeeth = [...FDI_PRIMARY_TEETH_LOWER_LEFT],
    selectedTeeth = [],
    onChangeSelectedTeeth = () => {}
  } = props;
  return (
    <section>
      <h3 style={MainTitleStyles}>{getNotationName(notationType)} Notation</h3>
      {!isTest && <h6 style={PrimaryTitleStyles}>Primary Teeth</h6>}
      <TeethGrid
        isTest={isTest}
        notationType={notationType}
        urTeeth={urTeeth}
        ulTeeth={ulTeeth}
        lrTeeth={lrTeeth}
        llTeeth={llTeeth}
        selectedTeeth={selectedTeeth}
        onChangeSelectedTeeth={onChangeSelectedTeeth}
      />

      {!isTest && (
        <>
          <h6 style={BabyTitleStyles}>Baby Teeth</h6>
          <BabyTeethGrid
            notationType={notationType}
            urTeeth={[...FDI_BABY_TEETH_UPPER_RIGHT_WITH_TMP]}
            ulTeeth={[...FDI_BABY_TEETH_UPPER_LEFT_WITH_TMP]}
            lrTeeth={[...FDI_BABY_TEETH_LOWER_RIGHT_WITH_TMP]}
            llTeeth={[...FDI_BABY_TEETH_LOWER_LEFT_WITH_TMP]}
          />
        </>
      )}
    </section>
  );
};

export default NotationDescription;
