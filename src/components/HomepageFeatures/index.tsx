import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Layunin",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam esse doloribus voluptates et
        optio temporibus, odio modi porro illo deserunt nesciunt maiores minus tempora consequuntur
        nemo at facere a reiciendis.
      </>
    ),
  },
  {
    title: "Pangitain",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis doloribus possimus nam
        provident quaerat voluptas nisi ut eius velit veniam saepe fugiat aliquid sint voluptatem
        veritatis numquam, dolorem voluptatum rerum.
      </>
    ),
  },
  {
    title: "lorem",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis doloribus possimus nam
        provident quaerat voluptas nisi ut eius velit veniam saepe fugiat aliquid sint voluptatem
        veritatis numquam, dolorem voluptatum rerum.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
