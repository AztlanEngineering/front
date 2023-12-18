import * as React from "react";
import { useLocale } from "@aztlan/react-helpers";
import { IntlProvider } from "react-intl";
import { AppContextProvider } from "../ui/common/index.ts";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import environment from "@aztlan/storybook-addon-relay/src/decorators/environment";

export const app = StoryFn => (
  <AppContextProvider>
    <StoryFn />
  </AppContextProvider>
);

function loadLocaleData(locale: string) {
  switch (locale) {
    case "es":
      return {}; // import('../locales/es.json')
    default:
      return {}; // import('../locales/en.json')
  }
}

export const relay = StoryFn => (
  <RelayEnvironmentProvider environment={environment}>
    {StoryFn()}
  </RelayEnvironmentProvider>
);

export const intlApp = StoryFn => {
  const { locale, messages, ...useLocaleProps } = useLocale(
    "es",
    loadLocaleData
  );
  return (
    <IntlProvider locale={locale} messages={messages}>
      <AppContextProvider
        value={{
          locale,
          ...useLocaleProps
        }}
      >
        <StoryFn />
      </AppContextProvider>
    </IntlProvider>
  );
};
