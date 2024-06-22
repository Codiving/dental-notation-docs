import {
  FdiTeeth,
  FdiTeethWithTmp,
  NotationType,
  TeethWithTmp,
  isExistFdiTooth
} from "dental-notation";
import Stack from "./Stack";
import TeethRow from "./TeethRow";

const isExistFdiToothGuard = (tooth: TeethWithTmp): tooth is FdiTeeth => {
  return isExistFdiTooth(tooth as FdiTeeth);
};

const filterFdiTeethWithTmp = (
  teeth: FdiTeethWithTmp[],
  referenceTeeth: FdiTeeth[]
): FdiTeethWithTmp[] => {
  return teeth.filter(
    tooth => !referenceTeeth.includes(tooth as FdiTeeth)
  ) as FdiTeethWithTmp[];
};

interface BabyTeethGridProps {
  notationType: NotationType;
  urTeeth: FdiTeethWithTmp[];
  ulTeeth: FdiTeethWithTmp[];
  lrTeeth: FdiTeethWithTmp[];
  llTeeth: FdiTeethWithTmp[];
}

const BabyTeethGrid = (props: BabyTeethGridProps) => {
  const { notationType, urTeeth, ulTeeth, lrTeeth, llTeeth } = props;

  const upperRightTeeth = urTeeth.filter(isExistFdiToothGuard);
  const upperLeftTeeth = ulTeeth.filter(isExistFdiToothGuard);
  const lowerRightTeeth = lrTeeth.filter(isExistFdiToothGuard);
  const lowerLeftTeeth = llTeeth.filter(isExistFdiToothGuard);

  const upperRightTeethTmp = filterFdiTeethWithTmp(urTeeth, upperRightTeeth);
  const upperLeftTeethTmp = filterFdiTeethWithTmp(ulTeeth, upperLeftTeeth);
  const lowerRightTeethTmp = filterFdiTeethWithTmp(lrTeeth, lowerRightTeeth);
  const lowerLeftTeethTmp = filterFdiTeethWithTmp(llTeeth, lowerLeftTeeth);

  return (
    <>
      <Stack>
        <TeethRow
          notationType={notationType}
          title="ur"
          borderTop="1px solid black"
          borderLeft="1px solid black"
          teeth={[...upperRightTeethTmp, ...upperRightTeeth]}
        />
        <TeethRow
          notationType={notationType}
          title="ul"
          borderTop="1px solid black"
          teeth={[...upperLeftTeeth, ...upperLeftTeethTmp]}
        />
      </Stack>
      <Stack>
        <TeethRow
          notationType={notationType}
          title="lr"
          borderLeft="1px solid black"
          teeth={[...lowerRightTeethTmp, ...lowerRightTeeth]}
        />
        <TeethRow
          notationType={notationType}
          title="ll"
          teeth={[...lowerLeftTeeth, ...lowerLeftTeethTmp]}
        />
      </Stack>
    </>
  );
};

export default BabyTeethGrid;
