import { ImageResponse } from "next/og";

export const imageSize = {
  width: 1200,
  height: 630,
};

export const imageContentType = "image/png";

export const imageAlt =
  "Sandeepa Singh, frontend engineer. React, Next.js and TypeScript. Based in India, open to full-time roles.";

export const createSocialImage = () =>
  new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#F3F0EA",
          color: "#171614",
        }}
      >
        <div
          style={{
            width: 18,
            height: "100%",
            background: "#1F3DFF",
          }}
        />
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 80px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#564F47",
            }}
          >
            Frontend Engineer · Open to roles
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 84,
                lineHeight: 1,
                letterSpacing: -2,
              }}
            >
              Sandeepa Singh
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 28,
                fontSize: 34,
                lineHeight: 1.35,
                color: "#3A3732",
                maxWidth: 820,
              }}
            >
              Thoughtful digital products. Modern frontend engineering.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#564F47",
            }}
          >
            React · Next.js · TypeScript · India, open to remote
          </div>
        </div>
      </div>
    ),
    { ...imageSize },
  );
