"use client";
import React from "react";
import dynamic from "next/dynamic";
import DownloadCVButton from "./components/DownloadCVButton/DownloadCVButton";
import { useTranslations } from "next-intl";

const PDFViewer = dynamic(() => import("./components/PDFViewer/PDFViewer"), { ssr: false });

export default function Resume() {
    const t = useTranslations("ResumePage");
    const pdfUrl = t("document");

    return (
        <div className="hero notification p-0 mb-0">
            <div className="hero-body p-0">
                <h1 className="title is-size-2 has-text-centered mt-6">{t("title")}</h1>
                <DownloadCVButton pdfUrl={pdfUrl} mt={0} mb={6} />
                <PDFViewer pdfUrl={pdfUrl} />
                <DownloadCVButton pdfUrl={pdfUrl} />
            </div>
        </div>
    );
}
