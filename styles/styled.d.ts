import "styled-components";
import { theme } from "./theme";

// Derive the theme type from the single source of truth in `theme.js` so the two
// can never drift. This augments styled-components' `DefaultTheme`, giving every
// `({ theme }) => theme.colors...` / `theme.breakpoints...` access full type safety.
type AppTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
