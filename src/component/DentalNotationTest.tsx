"use client";

import {
  FDI_PRIMARY_TEETH_LOWER_LEFT,
  FDI_PRIMARY_TEETH_LOWER_RIGHT,
  FDI_PRIMARY_TEETH_UPPER_LEFT,
  FDI_PRIMARY_TEETH_UPPER_RIGHT,
  FDI_TEETH_LOWER_LEFT_WITH_TMP,
  FDI_TEETH_LOWER_RIGHT_WITH_TMP,
  FDI_TEETH_UPPER_LEFT_WITH_TMP,
  FDI_TEETH_UPPER_RIGHT_WITH_TMP,
  FdiTeethLowerLeftWithTmp,
  FdiTeethLowerRightWithTmp,
  FdiTeethUpperLeftWithTmp,
  FdiTeethUpperRightWithTmp,
  FdiTeethWithTmp,
  switchTeethWithTmp
} from "dental-notation";
import { useState } from "react";
import NotationDescription from "./NotationDescription";

const updateTeeth = (
  teeth: FdiTeethWithTmp[],
  reference: FdiTeethWithTmp[],
  switched: FdiTeethWithTmp[]
): FdiTeethWithTmp[] => {
  return teeth.map(tooth => {
    const index = reference.findIndex(refTooth => refTooth === tooth);
    return index !== -1 ? switched[index] : tooth;
  }) as FdiTeethWithTmp[];
};

const DentalNotationTest = () => {
  const [urTeeth, setUrTeeth] = useState<FdiTeethWithTmp[]>([
    ...FDI_PRIMARY_TEETH_UPPER_RIGHT
  ]);
  const [ulTeeth, setUlTeeth] = useState<FdiTeethWithTmp[]>([
    ...FDI_PRIMARY_TEETH_UPPER_LEFT
  ]);
  const [lrTeeth, setLrTeeth] = useState<FdiTeethWithTmp[]>([
    ...FDI_PRIMARY_TEETH_LOWER_RIGHT
  ]);
  const [llTeeth, setLlTeeth] = useState<FdiTeethWithTmp[]>([
    ...FDI_PRIMARY_TEETH_LOWER_LEFT
  ]);

  const [selectedTeeth, setSelectedTeeth] = useState<FdiTeethWithTmp[]>([]);

  const onChangeSelectedTeeth = (
    teeth: FdiTeethWithTmp[],
    isConvert: boolean = false
  ) => {
    setSelectedTeeth(teeth);

    if (!isConvert) return;

    const originTeeth = switchTeethWithTmp(teeth);
    const ur = originTeeth.filter(tooth =>
      FDI_TEETH_UPPER_RIGHT_WITH_TMP.includes(
        tooth as FdiTeethUpperRightWithTmp
      )
    );
    const ul = originTeeth.filter(tooth =>
      FDI_TEETH_UPPER_LEFT_WITH_TMP.includes(tooth as FdiTeethUpperLeftWithTmp)
    );
    const lr = originTeeth.filter(tooth =>
      FDI_TEETH_LOWER_RIGHT_WITH_TMP.includes(
        tooth as FdiTeethLowerRightWithTmp
      )
    );
    const ll = originTeeth.filter(tooth =>
      FDI_TEETH_LOWER_LEFT_WITH_TMP.includes(tooth as FdiTeethLowerLeftWithTmp)
    );

    const switchedUr = switchTeethWithTmp(ur);
    const switchedUl = switchTeethWithTmp(ul);
    const switchedLr = switchTeethWithTmp(lr);
    const switchedLl = switchTeethWithTmp(ll);

    const newUr = updateTeeth(urTeeth, ur, switchedUr);
    const newUl = updateTeeth(ulTeeth, ul, switchedUl);
    const newLr = updateTeeth(lrTeeth, lr, switchedLr);
    const newLl = updateTeeth(llTeeth, ll, switchedLl);
    setUrTeeth(newUr);
    setUlTeeth(newUl);
    setLrTeeth(newLr);
    setLlTeeth(newLl);
  };

  return (
    <>
      <h3 className="sectionTitle mt80">Try it out yourself</h3>
      <div className="mb80">
        <NotationDescription
          urTeeth={urTeeth}
          ulTeeth={ulTeeth}
          lrTeeth={lrTeeth}
          llTeeth={llTeeth}
          selectedTeeth={selectedTeeth}
          onChangeSelectedTeeth={onChangeSelectedTeeth}
          isTest
          notationType="fdi"
        />
      </div>
      <div className="mb80">
        <NotationDescription
          urTeeth={urTeeth}
          ulTeeth={ulTeeth}
          lrTeeth={lrTeeth}
          llTeeth={llTeeth}
          selectedTeeth={selectedTeeth}
          onChangeSelectedTeeth={onChangeSelectedTeeth}
          isTest
          notationType="universal"
        />
      </div>
      <div className="mb80">
        <NotationDescription
          urTeeth={urTeeth}
          ulTeeth={ulTeeth}
          lrTeeth={lrTeeth}
          llTeeth={llTeeth}
          selectedTeeth={selectedTeeth}
          onChangeSelectedTeeth={onChangeSelectedTeeth}
          isTest
          notationType="palmer"
        />
      </div>
    </>
  );
};

export default DentalNotationTest;
