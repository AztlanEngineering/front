/* @aztlan/generator-front 0.4.0 */
import * as React from "react";
import { useLazyLoadQuery } from "react-relay";
import { defineMessages, useIntl } from "react-intl";
import { PrefetchLink } from "@aztlan/ui";
import { QueryTesterQuery } from "../ui/QueryTester/__generated__/QueryTesterQuery.graphql.js";
import Template from "../../common/templates/Base.js";
import { QueryTester } from "../ui/index.js";

const m = defineMessages({
  title: {
    // id: `${messagesPrefix}.title`,
    defaultMessage: "Homepage"
  },
  welcome: {
    description: "Message to greet the user.",
    defaultMessage: "welcome to idioma.io, {name}!!!"
  }
});

function Home() {
  const data = useLazyLoadQuery(
    QueryTester.QUERY,
    {},
    { fetchPolicy: "store-or-network" }
  ) as QueryTesterQuery["response"];

  const { formatMessage } = useIntl();
  return (
    <Template title={formatMessage(m.title)}>
      <React.Suspense fallback="Loading QueryTester">
        <QueryTester data={data} />
      </React.Suspense>
      <p className="container">{formatMessage(m.welcome, { name: "d5" })}</p>
      <p className="container">
        <PrefetchLink to="/formtest">PREFETCH</PrefetchLink>
      </p>
    </Template>
  );
}

export default Home;
