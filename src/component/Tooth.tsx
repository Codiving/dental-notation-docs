"use client";

import {
  FdiTeeth,
  FdiTeethWithTmp,
  PalmerTeeth,
  TeethWithTmp,
  UniversalTeeth,
  convertTeethWithTmp,
  isExistFdiTooth,
  isExistPalmerTooth,
  isExistUniversalTooth
} from "dental-notation";
import { TestProps } from "./NotationDescription";

const isExistTooth = (
  tooth: TeethWithTmp
): tooth is FdiTeeth | UniversalTeeth | PalmerTeeth =>
  isExistFdiTooth(tooth as FdiTeeth) ||
  isExistUniversalTooth(tooth as UniversalTeeth) ||
  isExistPalmerTooth(tooth as PalmerTeeth);

interface ToothProps extends TestProps {
  tooth: FdiTeethWithTmp;
}

const Tooth = (props: ToothProps) => {
  const {
    tooth,
    isTest,
    notationType,
    selectedTeeth = [],
    onChangeSelectedTeeth
  } = props;

  const isNonExistTooth = !isExistTooth(tooth);
  const isSelected = selectedTeeth.includes(tooth);

  return (
    <div
      style={{
        minWidth: 40,
        minHeight: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: isNonExistTooth
          ? `rgba(0, 0, 0, 0.2)`
          : isSelected
          ? "#fff"
          : "inherit",
        borderBottom: "1px solid black",
        borderRight: "1px solid black",
        cursor: isTest ? "pointer" : undefined,
        backgroundColor: isSelected ? "#42b983" : undefined
      }}
      onClick={() => {
        if (!isTest) return;

        if (isSelected) {
          onChangeSelectedTeeth?.(
            selectedTeeth.filter(_tooth => _tooth !== tooth)
          );
        } else {
          onChangeSelectedTeeth?.([...selectedTeeth, tooth]);
        }
      }}
    >
      <span>{convertTeethWithTmp([tooth], notationType)[0]}</span>
    </div>
  );
};

export default Tooth;
