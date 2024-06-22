"use client";

import {
  FDI_PRIMARY_TEETH_LOWER_LEFT,
  FDI_PRIMARY_TEETH_LOWER_RIGHT,
  FDI_PRIMARY_TEETH_UPPER_LEFT,
  FDI_PRIMARY_TEETH_UPPER_RIGHT,
  FdiTeethWithTmp,
  convertTeeth,
  convertTeethWithTmp
} from "dental-notation";
import { useState } from "react";
import NotationDescription from "./NotationDescription";

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
  const onChangeSelectedTeeth = (teeth: FdiTeethWithTmp[]) =>
    setSelectedTeeth(teeth);

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
