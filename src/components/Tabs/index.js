import Box from "components/Box";
import { useState } from "react";

import { TabTitle } from "./style";

const TabsManager = ({ children, titles }) => {
  const [activeTab, handleTab] = useState(titles[0]);

  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" flexDirection="row">
        {titles.map((t, i) => (
          <TabTitle
            px={4}
            py={2}
            key={`tab-title${i}`}
            onClick={() => handleTab(t)}
            activeTab={activeTab === t}
          >
            {t}
          </TabTitle>
        ))}
      </Box>
      <Box>
        {children.filter((child) => {
          if (child.props.type === activeTab) return true;
        })}
      </Box>
    </Box>
  );
};
export default TabsManager;
