/**
 * @Author: harsha
 * @Date:   2019-05-19T05:12:36+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-19T06:19:44+05:30
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
