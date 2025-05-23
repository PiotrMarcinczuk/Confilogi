import { useState } from "react";

const useActiveTab = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const changeTab = (index: number) => {
    setActiveTab(index);
  };
  return { activeTab, setActiveTab: changeTab };
};

export default useActiveTab;
