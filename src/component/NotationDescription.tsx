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
  FdiTeeth,
  FdiTeethWithTmp,
  NotationType,
  convertTeeth,
  getTeethString,
  isExistFdiTooth,
  switchTeethWithTmp
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
  onChangeSelectedTeeth?: (
    teeth: FdiTeethWithTmp[],
    isConvert?: boolean
  ) => void;
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

  const existTeeth: FdiTeeth[] = selectedTeeth.filter(isExistFdiTooth);

  const a = getTeethString(
    convertTeeth(
      existTeeth,
      notationType === "fdi"
        ? "universal"
        : notationType === "universal"
        ? "fdi"
        : "palmer"
    )
  );

  return (
    <section>
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <h3 style={MainTitleStyles}>
          {getNotationName(notationType)} Notation
        </h3>
        {isTest && (
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <p
              style={{
                marginBottom: 20,
                borderRadius: 24,
                backgroundColor: "lightgray",
                // color: "#fff",
                fontWeight: "bold",
                padding: 8,
                fontSize: 14,
                cursor: "pointer"
              }}
              onClick={() => {
                onChangeSelectedTeeth(
                  switchTeethWithTmp(selectedTeeth) as FdiTeethWithTmp[],
                  true
                );
              }}
            >
              Convert Teeth
            </p>
            <p
              style={{
                marginBottom: 20,
                borderRadius: 24,
                backgroundColor: "lightgray",
                // color: "#fff",
                fontWeight: "bold",
                padding: 8,
                fontSize: 14,
                cursor: "pointer"
              }}
              onClick={() => {
                onChangeSelectedTeeth([]);
              }}
            >
              Clear
            </p>
          </div>
        )}
      </div>
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
      {isTest && (
        <div
          style={{
            marginTop: 40,
            display: "flex",
            flexDirection: "column",
            gap: 12
          }}
        >
          <code style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {`getTeethString(teeth, "range");`}
            <p style={{ opacity: 0.7 }}>{getTeethString(existTeeth)}</p>
          </code>
          <code style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {`getTeethString(teeth, "individual");`}
            <p style={{ opacity: 0.7 }}>
              {getTeethString(existTeeth, "individual")}
            </p>
          </code>
          <code style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {`convertTeeth(teeth, "${
              notationType === "fdi"
                ? "universal"
                : notationType === "universal"
                ? "fdi"
                : "palmer"
            }");`}
            <p style={{ opacity: 0.7 }}>
              {JSON.stringify(
                convertTeeth(
                  existTeeth,
                  notationType === "fdi"
                    ? "universal"
                    : notationType === "universal"
                    ? "fdi"
                    : "palmer"
                ),
                null,
                2
              )}
            </p>
          </code>
          <code style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {`convertTeeth(teeth, "${
              notationType === "fdi"
                ? "palmer"
                : notationType === "universal"
                ? "palmer"
                : "fdi"
            }");`}
            <p style={{ opacity: 0.7 }}>
              {JSON.stringify(
                convertTeeth(
                  existTeeth,
                  notationType === "fdi"
                    ? "palmer"
                    : notationType === "universal"
                    ? "palmer"
                    : "fdi"
                ),
                null,
                2
              )}
            </p>
          </code>
        </div>
      )}

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
