interface StackProps {
  direction?: React.CSSProperties["flexDirection"];
  gap?: React.CSSProperties["gap"];
  children: React.ReactNode;
  borderTop?: React.CSSProperties["borderTop"];
  borderLeft?: React.CSSProperties["borderLeft"];
  borderBottom?: React.CSSProperties["borderBottom"];
  borderRight?: React.CSSProperties["borderRight"];
}

const Stack = (props: StackProps) => {
  const {
    direction = "row",
    gap = "0px",
    borderTop = "none",
    borderLeft = "none",
    borderBottom = "none",
    borderRight = "none",
    children
  } = props;

  const styles = {
    display: "flex",
    flexDirection: direction,
    gap,
    borderTop,
    borderLeft,
    borderBottom,
    borderRight
  };

  return <div style={styles}>{children}</div>;
};

export default Stack;
