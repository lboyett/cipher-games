import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme(
  {
    components: {
      Button: {
        baseStyle: {
          border: "1px solid",
        },
      },
    },
    styles: {
      global: (props: any) => ({
        "html, body": {
          background:
            props.colorMode === "dark"
              ? `linear-gradient(180deg, #000000 0%, #272727 100%)`
              : `linear-gradient(180deg, #FFFFFF 50%, #1E1E1E 200%)`,
          boxStyle: "border-box",
        },
      }),
    },
  },
  { config }
);
