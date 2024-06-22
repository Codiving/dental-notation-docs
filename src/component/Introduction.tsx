import Stack from "./Stack";

const Introduction = () => {
  return (
    <div>
      <h3 className="sectionTitle">Introduction to Dental Notation Packages</h3>
      <Stack direction="column" gap="8px">
        <p>
          <strong>This package facilitates easy manipulation</strong> of
          commonly used dental notation methods in dentistry.
        </p>
        <p>
          The package covers a <strong>total of three dental notations.</strong>
        </p>
        <p>
          Dental notation are <strong>FDI</strong>, <strong>Universal</strong>{" "}
          and <strong>Palmer</strong>.
        </p>
      </Stack>
    </div>
  );
};

export default Introduction;
