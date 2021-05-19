import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
export default function Home() {
    return (
        <Document renderMode="svg" file="1.pdf">
            <Page pageNumber={1} />
        </Document>
    );
}
