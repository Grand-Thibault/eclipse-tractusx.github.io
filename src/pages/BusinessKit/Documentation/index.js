import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import KitsHeader from "@site/src/components/KitsHeader";
import DocumentationFile from "@site/docs/kits/Business Partner Kit/_documentation.md";
import KitBusinessSvg from '@site/static/img/kit_business_logo.svg'

import styles from "./styles.module.css";

export default function Documentation() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={'Documentation'}
      description="Description will go into a meta tag in <head />"
    >
      <KitsHeader
        title="Business Partner Kit" 
        subtitle="Use BusinessParterKit in your app or service to get a high-quality data record including a unique identifier of business partners or to connect as a sharing member."
        SVG={KitBusinessSvg}
      />
      <main className={styles.main}>
        <div className={styles.documentation_card}>
          <div className={styles.info_container}>
            <h1 className={styles.title}>Documentation</h1>
            <p className={styles.subtitle}>
            This is an easy step-by-step guide that shows you how to use the Business Partner POOL API.
            Also the API provides you with a engine to search through the data based on open search. <br/>
            Find all resources listed by request in the open API documentation.
            </p>
          </div>
        </div>

        <div className={styles.document_section}>
          <div className={styles.document_container}>
            <DocumentationFile />
          </div>
        </div>
      </main>
    </Layout>
  );
}