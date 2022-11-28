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
    Svg: require("@site/static/img/booka.svg").default,
    description: (
      <>
        Ang Proyektong ito ay ginawa para sa mga taong hindi masyadong sanay sa wikang ingles at sa
        mga taong gustong makakita ng explanation na nakasulat sa tagalog/taglish.
      </>
    ),
  },
  {
    title: "Pangitain",
    Svg: require("@site/static/img/bookb.svg").default,
    description: (
      <>
        Ang isang mahusay na Javascript Developer ay kailangang familiar sa mga javascript methods,
        pakay ng app nato na maging madali at maigsi ang pag-pagpapaliwanag sa mga to.
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
        <div className={styles.sectionRow}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
