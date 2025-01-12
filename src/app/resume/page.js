"use client";
import React from "react";
import dynamic from "next/dynamic";
import DownloadCVButton from "@/components/DownloadCVButton";
import { useTranslations } from "next-intl";

const PDFViewer = dynamic(() => import("@/components/PDFViewer"), { ssr: false });

export default function Resume() {
    const t = useTranslations("ResumePage");
    const pdfUrl = t("document");

    return (
        <div className="hero notification p-0 mb-0">
            <div className="hero-body p-0">
                <DownloadCVButton pdfUrl={pdfUrl} />
                <PDFViewer pdfUrl={pdfUrl} />
                <DownloadCVButton pdfUrl={pdfUrl} />
            </div>
        </div>
    );
}
