"use client";
import React, { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";

// Konfiguracja workera PDFJS
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDFViewer = ({ pdfUrl }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
                {numPages && (
                    <>
                        <div className="pdfreact">
                            <div>
                                <Page className="box" pageNumber={pageNumber} scale={1.5} />
                            </div>
                            <div>
                                {pageNumber + 1 <= numPages && (
                                    <Page className="box" pageNumber={pageNumber + 1} scale={1.5} />
                                )}
                            </div>
                        </div>
                    </>
                )}
            </Document>
        </div>
    );
};

export default PDFViewer;
