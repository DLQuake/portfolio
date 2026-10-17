
"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import "./Education.css";
import Link from 'next/link';

const Education = () => {
  const t = useTranslations("AboutPage");
  const items = t.raw("education.items");
  const educations = Array.isArray(items) ? items : [];

  return (
    <section className="section notification mb-0 education-section">
      <div className="container">
        <h2 className="title is-size-2 has-text-centered education-heading">
          {t("education.title")}
        </h2>

        <p className="subtitle has-text-centered education-subtitle">
          {t("education.subtitle")}
        </p>

        {educations.length > 0 ? (
          <div className="education-timeline">
            {educations.map((item, index) => (
              <article
                className={`education-item ${
                  index % 2 === 0
                    ? "education-item-left"
                    : "education-item-right"
                }`}
                key={`${item.date}-${item.company}`}
              >
                <div className="education-marker" aria-hidden="true">
                  <span />
                </div>

                <Link href={item.url} target="_blank" className="education-card box">
                  <span className="education-date">{item.date}</span>

                  <div className="education-header">
                    <div className="education-info">
                      <h3 className="education-role">{item.role}</h3>
                      <p className="education-company">{item.company}</p>
                    </div>

                    {item.logo ? (
                      <div className="education-logo">
                        <Image
                          src={item.logo}
                          alt={`Logo ${item.company}`}
                          width={76}
                          height={76}
                          className="education-logo-image"
                        />
                      </div>
                    ) : null}
                  </div>

                  {item.description && (
                    <p className="education-description">
                      {item.description}
                    </p>
                  )}
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="has-text-centered">{t("education.empty")}</p>
        )}
      </div>
    </section>
  );
};

export default Education;
