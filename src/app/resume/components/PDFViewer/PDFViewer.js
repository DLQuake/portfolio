"use client";
import React, { useEffect, useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "./PDFViewer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDFViewer = ({ pdfUrl }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageScale, setPageScale] = useState(1.5);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 980) {
                setPageScale(screenWidth / 980 * 1.3);
            } else {
                setPageScale(1.5);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
                                <Page className="box" pageNumber={pageNumber} scale={pageScale} />
                            </div>
                            <div>
                                {pageNumber + 1 <= numPages && (
                                    <Page className="box" pageNumber={pageNumber + 1} scale={pageScale} />
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
