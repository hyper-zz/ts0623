export const materialAssets = {
  pp: {
    label: "PP Plastic",
    image: "/assets/travel-science-material-library/01_PP_Plastic.png",
  },
  abs: {
    label: "ABS Plastic",
    image: "/assets/travel-science-material-library/02_ABS_Plastic.png",
  },
  preCoatedSteel: {
    label: "Pre-coated Steel",
    image: "/assets/travel-science-material-library/03_Pre-coated_Steel.png",
  },
  embossedAluminum: {
    label: "Embossed Aluminum",
    image: "/assets/travel-science-material-library/04_Embossed_Aluminum.png",
  },
  hips: {
    label: "HIPS",
    image: "/assets/travel-science-material-library/05_HIPS.png",
  },
  pe: {
    label: "PE Plastic",
    image: "/assets/travel-science-material-library/06_PE_Plastic.png",
  },
  metalAluminumAlloy: {
    label: "Metal / Aluminum Alloy",
    image: "/assets/travel-science-material-library/07_Metal_Aluminum_Alloy.png",
  },
  rubber: {
    label: "Rubber",
    image: "/assets/travel-science-material-library/08_Rubber.png",
  },
};

export function materialAssetByValue(value = "") {
  const normalized = value.toLowerCase();

  if (normalized.includes("pre-coated steel")) return materialAssets.preCoatedSteel;
  if (normalized.includes("embossed aluminum")) return materialAssets.embossedAluminum;
  if (normalized.includes("aluminum alloy") || normalized.includes("metal")) return materialAssets.metalAluminumAlloy;
  if (normalized.includes("abs")) return materialAssets.abs;
  if (normalized.includes("hips")) return materialAssets.hips;
  if (normalized.includes("pe")) return materialAssets.pe;
  if (normalized.includes("pp")) return materialAssets.pp;
  if (normalized.includes("rubber")) return materialAssets.rubber;

  return null;
}
