import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

const AppleIcon = () =>
  new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#171614",
          color: "#F3F0EA",
          fontSize: 108,
        }}
      >
        S
      </div>
    ),
    { ...size },
  );

export default AppleIcon;
