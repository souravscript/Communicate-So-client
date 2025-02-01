import StatSection from "@/common/components/StatSection";
import { FileData } from "@/constants/types";
import Activities from "@/features/content/Activities";
import RecentlySyncedFiles from "@/features/content/RecentSyncedFiles";
import { FileText, Layers, Link, MessageCircle } from "lucide-react";

interface Stat {
    title: string;
    value: string | number;
    icon: JSX.Element;
}


const dummyStats: Stat[] = [
    {
        title: "Data Sources Connected",
        value: 10,
        icon: <Link className="text-blue-500" size={32} />
    },
    {
        title: "Queries Made This Week",
        value: "1.2k",
        icon: <MessageCircle className="text-blue-500" size={32} />
    },
    {
        title: "Most Accessed Category",
        value: "Sales, Business",
        icon: <Layers className="text-blue-500" size={32} />
    },
    {
        title: " Ingested Documents",
        value: 400,
        icon: <FileText className="text-blue-500" size={32} />
    },
  ];

  

  const mockFiles: FileData[] = [
    { fileName: "Financial Report 2024.docx", fileSizeKB: 120 },
    { fileName: "Bank Reports.pdf", fileSizeKB: 450 },
    { fileName: "Sales Report FY24.pdf", fileSizeKB: 300 },
    { fileName: "Earning Report FY24-25.pdf", fileSizeKB: 250 },
    { fileName: "Earning Report FY24-25.pdf", fileSizeKB: 250 },
    { fileName: "Earning Report FY24-25.pdf", fileSizeKB: 250 },
    { fileName: "Earning Report FY24-25.pdf", fileSizeKB: 250 },
  ];

  

export default function Home(){
    return (
        <div className='flex flex-col items-start gap-8 mt-10 justify-center'>
            <div className="relative left-4"><StatSection stats={dummyStats} statTitle='Content'/></div>
            <Activities/>
            <RecentlySyncedFiles files={mockFiles}/>
        </div>
    )
}