import { MantineProvider, Text } from "@mantine/core";

export default function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      withCSSVariables
    >
      <Text>Welcome to Mantine!</Text>
    </MantineProvider>
  );
}
