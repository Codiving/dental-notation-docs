import { FdiTeethWithTmp } from "dental-notation";
import { TestProps } from "./NotationDescription";
import Stack from "./Stack";
import Tooth from "./Tooth";

interface TeethRowProps extends TestProps {
  teeth: FdiTeethWithTmp[];
  borderTop?: React.CSSProperties["borderTop"];
  borderLeft?: React.CSSProperties["borderLeft"];
  borderBottom?: React.CSSProperties["borderBottom"];
  borderRight?: React.CSSProperties["borderRight"];
  title: "ur" | "ul" | "lr" | "ll";
}

const TeethRow = (props: TeethRowProps) => {
  const {
    teeth,
    borderTop,
    borderLeft,
    borderBottom,
    borderRight,
    title,
    isTest = false,
    ...rest
  } = props;

  const isUpper = title.startsWith("u");
  const isLower = title.startsWith("l");

  const upperStyles = `${["upperTitle", title === "ur" ? "bl" : ""]
    .join(" ")
    .trim()}`;
  const lowerStyles = `${["lowerTitle", title === "lr" ? "bl" : ""]
    .join(" ")
    .trim()}`;

  return (
    <div>
      {isUpper && (
        <p className={upperStyles}>
          {title === "ur" ? "Upper Right" : "Upper Left"}
        </p>
      )}
      <Stack
        borderTop={borderTop}
        borderLeft={borderLeft}
        borderBottom={borderBottom}
        borderRight={borderRight}
      >
        {teeth.map(tooth => (
          <Tooth key={tooth} tooth={tooth} isTest={isTest} {...rest} />
        ))}
      </Stack>
      {isLower && (
        <p className={lowerStyles}>
          {title === "lr" ? "Lower Right" : "Lower Left"}
        </p>
      )}
    </div>
  );
};

export default TeethRow;
