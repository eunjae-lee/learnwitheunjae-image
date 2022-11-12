// doc: https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation

// why is font weight not working?!?!
// ref: https://fullstackheroes.com/resources/vercel-og-templates/custom-font/

import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import RootPage from "../../src/components/RootPage";

export const config = {
  runtime: "experimental-edge",
};

// const fontBlack = fetch(
//   new URL("../../assets/NotoSansKR-Black.ttf", import.meta.url)
// ).then((res) => res.arrayBuffer());

// const fontBold = fetch(
//   new URL("../../assets/NotoSansKR-Bold.ttf", import.meta.url)
// ).then((res) => res.arrayBuffer());

// const fontLight = fetch(
//   new URL("../../assets/NotoSansKR-Light.ttf", import.meta.url)
// ).then((res) => res.arrayBuffer());

// const fontMedium = fetch(
//   new URL("../../assets/NotoSansKR-Medium.ttf", import.meta.url)
// ).then((res) => res.arrayBuffer());

// const fontRegular = fetch(
//   new URL("../../assets/NotoSansKR-Regular.ttf", import.meta.url)
// ).then((res) => res.arrayBuffer());

// const fontThin = fetch(
//   new URL("../../assets/NotoSansKR-Thin.ttf", import.meta.url)
// ).then((res) => res.arrayBuffer());

export default async function og(req: NextRequest) {
  const params = new URLSearchParams(req.url.split("?")[1]);
  const type = params.get("type");
  const payload = params.get("payload");

  const options = {
    width: 1200,
    height: 600,
    // fonts: [
    //   // {
    //   //   name: "Noto Sans KR",
    //   //   data: fontDataBlack,
    //   //   style: "normal",
    //   //   weight: 900,
    //   // },
    //   // {
    //   //   name: "Noto Sans KR",
    //   //   data: fontDataBold,
    //   //   style: "normal",
    //   //   weight: 700,
    //   // },
    //   // {
    //   //   name: "Noto Sans KR",
    //   //   data: fontDataMedium,
    //   //   style: "normal",
    //   //   weight: 500,
    //   // },
    //   // {
    //   //   name: "Noto Sans KR",
    //   //   data: fontDataRegular,
    //   //   style: "normal",
    //   //   weight: 400,
    //   // },
    //   // {
    //   //   name: "Noto Sans KR",
    //   //   data: fontDataLight,
    //   //   style: "normal",
    //   //   weight: 300,
    //   // },
    //   {
    //     name: "Noto Sans KR",
    //     data: fontDataThin,
    //     style: "normal",
    //     weight: 100,
    //   },
    // ],
  };

  if (type === "root") {
    return new ImageResponse(<RootPage />, options);
  } else {
    return null;
  }
}
