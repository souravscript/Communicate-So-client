'use client';
import React, { useCallback, useState } from 'react';
import { FileText, Link, RefreshCw } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import drive from '@/../public/gDrive.png';
import salesforce from '@/../public/salesforce.png';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { useDropzone } from "react-dropzone";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trash2 } from 'lucide-react';

interface Activity {
  name: string;
  icon: JSX.Element;
  lastSynced: Date;
  addButtonname: string;
  isDisabled?: boolean;
}

const activities: Activity[] = [
  { 
    name: 'Google Drive', 
    icon: <Image src={drive} alt="drive" className="h-24 w-24" />,
    lastSynced: new Date(), 
    addButtonname: 'Add New Folder',
    isDisabled: true
  },
  { 
    name: 'Salesforce', 
    icon: <Image src={salesforce} alt="salesforce" className="h-24 w-24" />,
    lastSynced: new Date(), 
    addButtonname: 'Add New Folder',
    isDisabled: true
  },
  { 
    name: 'PDFs', 
    icon: <FileText className="h-24 w-24 text-red-500" />, 
    lastSynced: new Date(), 
    addButtonname: 'Upload PDF Documents',
    isDisabled: false
  },
  { 
    name: 'Links', 
    icon: <Link className="h-24 w-24 text-gray-600" />, 
    lastSynced: new Date(), 
    addButtonname: 'Add New Folder',
    isDisabled: true
  },
];

const Activities = () => {
  const [activeTab, setActiveTab] = useState<string>("google-drive");
  const [selectedActivity, setSelectedActivity] = useState<Activity>(activities[0]);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Add the new files to the existing uploaded files
    setUploadedFiles((prevFiles) => [
      ...prevFiles,
      ...acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file), // Optional: for image previews
        })
      ),
    ]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] }, // Only accept PDF files
  });

  const removeFile = (fileName: string) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((file) => file.name !== fileName)
    );
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
  };

  const tabTriggerClasses = 
  'border-transparent rounded-none p-2 data-[state=active]:border-b-2 data-[state=active]:border-b-primaryColor data-[state=active]:text-primaryColor';
  
  const tabPositions: { [key: string]: string } = {
    "google-drive": "left-[33.5rem]",
    "salesforce": "left-[39.2rem]",
    "pdfs": "left-[36.3rem]",
    "links": "left-[39.3rem]"
  };
  
  

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    switch (value) {
      case 'google-drive':
        setSelectedActivity(activities[0]);
        break;
      case 'salesforce':
        setSelectedActivity(activities[1]);
        break;
      case 'pdfs':
        setSelectedActivity(activities[2]);
        break;
      case 'links':
        setSelectedActivity(activities[3]);
        break;
    }
  };

  const renderContent = (activity: Activity) => (
    <div className="w-full">
      <Card className="py-4 px-1 border-none shadow-none">
        <div className="flex items-start w-11/12 justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-gray-50 size-40 flex justify-center items-center rounded-lg">
              {activity.icon}
            </div>
            <div className='flex flex-col'>
            <div className="space-y-1 flex flex-col">
              {/* <h2 className="text-xl font-semibold">{activity.name}</h2> */}
              <div className="flex items-center text-sm text-gray-500">
                <span>Last Synced: {formatDate(activity.lastSynced)}</span>
                <RefreshCw className="w-4 h-4 ml-2 text-blue-500" />
              </div>
            </div>
            {activity.name === 'Google Drive' && (
          <div className='bg-white py-4 flex'>
            <div className='flex gap-3'>
              <Badge variant="secondary" className='bg-green-100 text-green-800 hover:bg-green-200'>PDFs</Badge>
              <Badge variant="secondary" className='bg-green-100 text-green-800 hover:bg-green-200'>Docs</Badge>
              <Badge variant="secondary" className='bg-green-100 text-green-800 hover:bg-green-200'>Spreadsheets</Badge>
            </div>
          </div>
        )}
        </div>
          </div>
          {/* <Button variant="outline" className="ml-4 bg-[#F1F5F9]">
            {activity.addButtonname}
          </Button> */}
          <Dialog >
            <DialogTrigger  asChild>
            <Button 
              variant="outline" 
              className={`relative ${tabPositions[activeTab] || "left-[0rem]"} top-[2.2rem] w-auto py-2 px-4`}
              disabled={activity.isDisabled}
            >
              {activity.addButtonname}
            </Button>

            </DialogTrigger>
            <DialogContent className=" sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Upload PDF Documents</DialogTitle>
                <DialogDescription>
                  Sync your PDF manually by uploading here.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-4">
                <div className="flex flex-col items-center gap-4">
                  <Label htmlFor="name" className="relative left-[-7.8rem]">
                    Accesible Categories
                  </Label>
                  <div className='flex gap-3 border border-gray-300 w-[24rem] p-2 rounded-md'>
                    <Badge variant="secondary" className='bg-green-100 text-green-800 hover:bg-green-200'>Sales</Badge>
                    <Badge variant="secondary" className='bg-green-100 text-green-800 hover:bg-green-200'>Business</Badge>
                    <Badge variant="secondary" className='bg-green-100 text-green-800 hover:bg-green-200'>Executives</Badge>
                  </div>
                </div>

                <div
                  {...getRootProps()}
                  className="flex flex-col items-center px-6 py-10 border-2 border-dashed border-gray-300 rounded-md cursor-pointer"
                >
                  <input {...getInputProps()} />
                  <p className='opacity-45'>Drop the files here ...</p>
                </div>

                {/* Uploaded files list */}
                {uploadedFiles.length > 0 && (
                <div className="mt-4 border border-gray-300 rounded-lg w-full">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>File Name</TableHead>
                        <TableHead>Total Size (KB)</TableHead>
                        <TableHead>{/* Empty header for delete icon */}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {uploadedFiles.map((file) => (
                        <TableRow key={file.name}>
                          <TableCell className="font-medium">{file.name}</TableCell>
                          <TableCell>{(file.size / 1024).toFixed(2)} KB</TableCell>
                          <TableCell>
                            <button
                              onClick={() => removeFile(file.name)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" /> {/* Delete icon */}
                            </button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
              </div>
              <DialogFooter>
                <Button className='bg-white text-black border border-gray-300 hover:bg-primaryColor hover:text-white'>Cancel</Button>
                <Button disabled={uploadedFiles.length === 0} className='bg-primaryColor text-white hover:border hover:border-gray-300 hover:text-black hover:bg-white' type="submit">Train</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
      </Card>
    </div>
  );
  
  return (
    <div className="space-y-6 mt-4 relative left-4">
      <div className="flex flex-col justify-between">
        
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-auto">
          <h1 className="text-2xl font-bold mb-4">Content Activities</h1>
            <TabsList className="bg-white border-b border-gray-200">
                <TabsTrigger className={tabTriggerClasses} style={{ boxShadow: 'none' }} value="google-drive">
                Google Drive
                </TabsTrigger>
                <TabsTrigger className={tabTriggerClasses} style={{ boxShadow: 'none' }} value="salesforce">
                Salesforce
                </TabsTrigger>
                <TabsTrigger className={tabTriggerClasses} style={{ boxShadow: 'none' }} value="pdfs">
                PDFs
                </TabsTrigger>
                <TabsTrigger className={tabTriggerClasses} style={{ boxShadow: 'none' }} value="links">
                Links
                </TabsTrigger>
            </TabsList>
        </Tabs>
      </div>
      {renderContent(selectedActivity)}
    </div>
  );
};

export default Activities;