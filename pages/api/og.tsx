import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default function og(req: NextRequest) {
  const params = new URLSearchParams(req.url.split("?")[1]);
  const title = params.get("title");

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {title || "Hello world!"}
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
