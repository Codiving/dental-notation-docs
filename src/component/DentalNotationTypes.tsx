import NotationDescription from "./NotationDescription";

const Description = () => {
  return (
    <div id="WithTmpDescription">
      <p>
        The transparent teeth that appear to exist are actually not real teeth.
      </p>
      <p>
        However, they have been added for convenience to mirror the Primary
        Teeth.
      </p>
      <p>
        The variable name includes the string <strong>WITH_TMP</strong>.
      </p>
      <p>
        The type name includes the string <strong>WithTmp</strong>.
      </p>
    </div>
  );
};

const DentalNotationTypes = () => {
  return (
    <>
      <h3 className="sectionTitle mt80">Dental Notation Types</h3>
      <Description />

      <div className="mb80">
        <NotationDescription notationType="fdi" />
      </div>
      <div className="mb80">
        <NotationDescription notationType="universal" />
      </div>
      <div className="mb80">
        <NotationDescription notationType="palmer" />
      </div>
    </>
  );
};

export default DentalNotationTypes;
