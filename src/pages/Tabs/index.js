import { useState, useEffect } from "react";
import lodash from "lodash";
import { useQuery } from "react-query";

import Container from "components/Container";
import TabsManager from "components/Tabs";
import TabContent from "components/Tabs/TabContent";
import apiRoute from "common/apis";

import { Header, Content, Title } from "./style";

const Tabs = () => {
  const [repayments, setRepayments] = useState(null);
  const [sortType, setSortType] = useState(true);

  const { isLoading, error, data } = useQuery(
    "repoData",
    () => fetch(apiRoute.repayments).then((res) => res.json()),
    { refetchOnWindowFocus: false }
  );

  const handleSortData = () => {
    const group = lodash.groupBy(data.repayments, "type");
    const sorted = {};
    Object.keys(group).forEach((item) => {
      sorted[item] = lodash.orderBy(
        group[item],
        ["date"],
        [sortType ? "asc" : "desc"]
      );
    });
    setRepayments(sorted);
  };

  useEffect(() => {
    data && handleSortData();
  }, [data, sortType]);

  if (error) {
    <p>Oops! Something went wrong</p>;
  }

  return (
    <>
      <Header>
        <Title>NImBLE</Title>
      </Header>
      <Content my={3}>
        <Container>
          <Title>Repayments</Title>
          {!isLoading && repayments && (
            <TabsManager titles={Object.keys(repayments)}>
              {Object.keys(repayments).map((type, i) => (
                <TabContent
                  type={type}
                  data={repayments[type]}
                  key={`tab-content-${i}`}
                  onSort={() => setSortType((prevState) => !prevState)}
                  sortType={sortType}
                />
              ))}
            </TabsManager>
          )}
        </Container>
      </Content>
    </>
  );
};

export default Tabs;
