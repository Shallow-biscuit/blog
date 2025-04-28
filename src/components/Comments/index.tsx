import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export default function Comments(): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <div>
      <Giscus
        id="comments"
        repo="Shallow-biscuit/Shallow-s-Biscuit-Factory"
        repoId="R_kgDONGdn-g"
        category="Announcements"
        categoryId="DIC_kwDONGdn-s4Cjuti"
        mapping="title"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode === "dark" ? "dark_tritanopia" : "light_tritanopia"}
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  );
}
