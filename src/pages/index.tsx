import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "@docusaurus/Link";
import LatestDocs from "docusaurus-plugin-docs-info/src/components/LatestDocs";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx("hero", styles.heroBanner) + " flex flex-col gap-2 !pb-0"}
    >
      <div className="flex flex-row text-left px-8 items-center">
        <div className="flex flex-col flex-1">
          <h1 className="text-4xl mb-8">
            Hello！这里是
            <span style={{ color: "var(--ifm-color-primary)" }}>浅浅小饼干</span>
          </h1>
          <h2 className="text-lg">
            你也可以叫我Shallow.，芝士一个属于浅浅的小基地！
            </h2>
            <p className="text-2g">
            这里会藏有各种关于我的
            <span className={styles["hide-zhan"]}>
              <span className={styles["hide-zhan-1"]}>废话</span>
              <span className={styles["hide-zhan-2"]}>秘密</span>
            </span>
            ）
            </p>
           <p className="text-3g">
           如果你想加入MDEX的话，请去查看
            <Link to="https://shadowdr.cn/help">
              <code>官方Wiki</code>
            </Link>
            ；同时也可以关注一下MDEX的
            <Link to="https://space.bilibili.com/3546391632676899/?spm_id_from=333.999.0.0">
              <code>官号</code>
            </Link>
            喵！
          </p>
          <div className={"flex flex-row gap-3 " + styles.social}>
            <a href="https://space.bilibili.com/87417184?spm_id_from=333.1007.0.0" target="_blank">
              <Icon icon="ri:bilibili-fill" />
            </a>
            <a href="https://qm.qq.com/q/9CWj3Cebi8" target="_blank">
              <Icon icon="ri:qq-fill" />
            </a>
            <a href="mailto:3119817271@qq.com">
              <Icon icon="ri:mail-fill" />
            </a>
          </div>
          <br />
          <div className="flex flex-row gap-2 items-center">
            <Link to="/blog">
              <button className="button button--primary button--lg">
                开始阅读
              </button>
            </Link>
            {/* <a
              href="https://github.com/Shallow-biscuit"
              style={{
                height: "20px",
              }}
            >
              <img src="https://img.shields.io/github/stars/codfrm/blog?style=social" />
            </a> */}
          </div>
        </div>
        <div className="flex-1"> 
          <img src="/img/bg.png"/>
        </div>
      </div>
      <div
        className="flex flex-col gap-3 w-full p-4"
        style={{
          background: "var(--ifm-color-emphasis-0)",
          borderTop: "1px solid var(--ifm-color-emphasis-100)",
        }}
      >
        <h1
          className="w-full text-2xl"
          style={{
            fontWeight: "bold",
          }}
        >
          最新文章
        </h1>
        <LatestDocs />
      </div>
    </header>
  );
}

function Index() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="首页" description={siteConfig.tagline}>
      <HomepageHeader />
    </Layout>
  );
}

export default Index;
