import { FdiTeethWithTmp, NotationType } from "dental-notation";
import { TestProps } from "./NotationDescription";
import Stack from "./Stack";
import TeethRow from "./TeethRow";

interface TeethGridProps extends Required<TestProps> {
  notationType: NotationType;
  urTeeth: FdiTeethWithTmp[];
  ulTeeth: FdiTeethWithTmp[];
  lrTeeth: FdiTeethWithTmp[];
  llTeeth: FdiTeethWithTmp[];
}

const TeethGrid = (props: TeethGridProps) => {
  const { urTeeth, ulTeeth, lrTeeth, llTeeth, ...rest } = props;

  return (
    <>
      <Stack>
        <TeethRow
          {...rest}
          title="ur"
          borderTop="1px solid black"
          borderLeft="1px solid black"
          teeth={[...urTeeth]}
        />
        <TeethRow
          {...rest}
          title="ul"
          borderTop="1px solid black"
          teeth={[...ulTeeth]}
        />
      </Stack>
      <Stack>
        <TeethRow
          {...rest}
          title="lr"
          borderLeft="1px solid black"
          teeth={[...lrTeeth]}
        />
        <TeethRow {...rest} title="ll" teeth={[...llTeeth]} />
      </Stack>
    </>
  );
};

export default TeethGrid;
