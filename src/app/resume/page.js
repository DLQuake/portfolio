"use client";
import React, { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import DownloadCVButton from "@/components/DownloadCVButton";
import { useTranslations } from "next-intl";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
    const t = useTranslations('ResumePage');
    const pdfUrl = t("document");
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className="hero notification p-0 mb-0">
            <div className="hero-body p-0">
                <DownloadCVButton pdfUrl={pdfUrl} />

                <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
                    <div >
                        {numPages && (
                            <>
                                <div>
                                    <Page className="box" pageNumber={pageNumber} scale={1.5} />
                                </div>
                                <div style={{ marginTop: '20px' }}>
                                    {pageNumber + 1 <= numPages && (
                                        <Page className="box" pageNumber={pageNumber + 1} scale={1.5} />
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </Document>

                <DownloadCVButton pdfUrl={pdfUrl} />
            </div>
        </div>
    );
};

export default Resume;
