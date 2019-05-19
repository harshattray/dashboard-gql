/**
 * @Author: harsha
 * @Date:   2019-05-19T05:12:36+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-19T13:21:33+05:30
 */
export const buildMakeJson = build => {
  return build.make
    ? [{ key: build.make, text: build.make, value: build.make }]
    : null;
};

export const buildTrimJson = build => {
  return build.trim
    ? [{ key: build.trim, text: build.trim, value: build.trim }]
    : null;
};

export const buildModelJson = build => {
  return build.model
    ? [{ key: build.model, text: build.model, value: build.model }]
    : null;
};

export const stringifyPhysicalStatus = build => {
  if (build.physicalStatus === "AT_OWNER") {
    return "At Owner";
  } else if (build.physicalStatus === "AT_BUYER") {
    return "At Buyer";
  } else if (build.physicalStatus === "AT_OUR_LOCATION") {
    return "At Our Location";
  } else {
    return null;
  }
};

export const stringifyLegalStatus = build => {
  if (build.legalStatus === "OWNER") {
    return "Owner";
  } else if (build.legalStatus === "US") {
    return "Us";
  } else if (build.legalStatus === "BUYER") {
    return "Buyer";
  } else {
    return null;
  }
};

export const stringifyEngineType = build => {
  if (build.engineType === "VEE") {
    return "Vee";
  } else if (build.engineType === "INLINE") {
    return "Inline";
  } else if (build.engineType === "BOXER") {
    return "Boxer";
  } else if (build.engineType === "ROTARY") {
    return "Rotary";
  } else {
    return null;
  }
};

export const stringifySellingStatus = build => {
  if (build.sellingStatus === "SOLD") {
    return "Sold";
  } else if (build.sellingStatus === "AVAILABLE") {
    return "Available";
  } else if (build.sellingStatus === "PENDING") {
    return "Pending";
  } else if (build.sellingStatus === "RESERVED") {
    return "Reserved";
  } else {
    return null;
  }
};
