// import { ChevronDown, ChevronUp } from 'lucide-react';
// import React, { useState } from 'react';
// import styled from 'styled-components';

// interface SlackIntegrationProps {
//   isDisabled?: boolean;
//   sourceName: string
// }

// const Container = styled.div<{ isEnabled: boolean }>`
//   font-family: Arial, sans-serif;
//   border: 1px solid #e0e0e0;
//   border-radius: 8px;
//   padding: 16px;
//   width:100%;
//   max-width:700px;
//    background-color: ${(props) => (props.isEnabled ? '#F5F5F5' : '#fff')};
// `;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// //   margin-bottom: 16px;
//   cursor: pointer;
// `;

// const Title = styled.h2`
//   margin: 0;
//   font-size: 18px;
//   display: flex;
//   align-items: center;
//   gap: 8px;
// `;

// const SlackIcon = styled.span`
//   font-size: 24px;
// `;

// const ToggleButton = styled.button<{ isEnabled: boolean }>`
//   background-color: ${(props) => (props.isEnabled ? '#007bff' : '#ccc')};
//   border: none;
//   border-radius: 12px;
//   width: 40px;
//   height: 24px;
//   position: relative;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &::after {
//     content: '';
//     position: absolute;
//     top: 2px;
//     left: ${(props) => (props.isEnabled ? '18px' : '2px')};
//     width: 20px;
//     height: 20px;
//     background-color: white;
//     border-radius: 50%;
//     transition: left 0.3s;
//   }
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
// `;

// const InputGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 4px;
// `;

// const Label = styled.label`
//   font-size: 14px;
//   color: #333;
// `;

// const Input = styled.input`
//   padding: 8px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 14px;
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   gap: 8px;
// `;

// const Button = styled.button`
//   padding: 8px 16px;
//   border: none;
//   border-radius: 4px;
//   font-size: 14px;
//   cursor: pointer;
// `;

// const CancelButton = styled(Button)`
//   background-color: #f0f0f0;
//   color: #333;
// `;

// const ConnectButton = styled(Button)`
//   background-color: #007bff;
//   color: white;
// `;

// const DocumentationLink = styled.a`
//   font-size: 14px;
//   color: #007bff;
//   text-decoration: none;
//   margin-right: auto;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const SlackIntegration: React.FC<SlackIntegrationProps> = ({ isDisabled = false, sourceName }) => {
//   const [isEnabled, setIsEnabled] = useState(false);
//   const [isCollapsed, setIsCollapsed] = useState(true);

//   const handleToggle = () => {
//     if (!isDisabled) {
//       setIsEnabled(!isEnabled);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//   };

//   return (
//     <Container isEnabled = {isCollapsed} >
//       <Header onClick={() => setIsCollapsed(!isCollapsed)}>
//         <Title>
//           <SlackIcon>🔗</SlackIcon>
//           {sourceName}
//         </Title>
//         <span>{isDisabled ? <ChevronDown/> : (isEnabled ? <ChevronUp/> :<ChevronDown/> )}</span>
//       </Header>
//       {!isCollapsed && (
//         <>
//           <ToggleButton isEnabled={isEnabled} onClick={handleToggle} disabled={isDisabled} />
//           <Form onSubmit={handleSubmit}>
//             <InputGroup>
//               <Label htmlFor="clientId">Client ID</Label>
//               <Input type="text" id="clientId" name="clientId" />
//             </InputGroup>
//             <InputGroup>
//               <Label htmlFor="clientSecret">Client Secret</Label>
//               <Input type="password" id="clientSecret" name="clientSecret" />
//             </InputGroup>
//             <InputGroup>
//               <Label htmlFor="callbackUrl">Callback URL (for OAuth)</Label>
//               <Input
//                 type="url"
//                 id="callbackUrl"
//                 name="callbackUrl"
//                 defaultValue="https://eventbank.communicate.io/authv1/callback"
//               />
//             </InputGroup>
//             <ButtonGroup>
//               <DocumentationLink href="#" target="_blank" rel="noopener noreferrer">
//                 Documentation
//               </DocumentationLink>
//               <CancelButton type="button">Cancel</CancelButton>
//               <ConnectButton type="submit">Connect</ConnectButton>
//             </ButtonGroup>
//           </Form>
//         </>
//       )}
//     </Container>
//   );
// };

// export default SlackIntegration;

//import { ChevronDown, ChevronUp } from "lucide-react";
//import React, { useState } from "react";
"use client"

import gdrive from '@/../public/gDrive.png'
import salesforce from '@/../public/salesforce.png'
import slack from '@/../public/slack.png'
import tally from '@/../public/tally.png'
import database from '@/../public/database.png'


import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export default function IntegrationSettings() {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 space-y-4 relative left-[10rem]">
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="google-drive" className="border rounded-lg">
          <AccordionTrigger className="px-4 hover:no-underline [&[data-state=open]]:rounded-t-lg [&[data-state=open]]:rounded-b-none">
            <div className="flex items-center gap-4 w-full">
              <Image
                src={gdrive}
                alt="Google Drive"
                width={24}
                height={24}
                className="rounded"
              />
              <span className="flex-1 text-left">Google Drive</span>
              <span className="text-sm text-green-600 font-medium mr-4">Enabled</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="border-t p-4 space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="google-drive-enable" />
              <label htmlFor="google-drive-enable">Enable</label>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="slack" className="border rounded-lg">
          <AccordionTrigger className="px-4 hover:no-underline [&[data-state=open]]:rounded-t-lg [&[data-state=open]]:rounded-b-none">
            <div className="flex items-center gap-4 w-full">
              <Image
                src={slack}
                alt="Slack"
                width={24}
                height={24}
                className="rounded"
              />
              <span className="flex-1 text-left">Slack</span>
              <span className="text-sm text-gray-500 font-medium mr-4">Disabled</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="border-t p-4 space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="slack-enable" />
              <label htmlFor="slack-enable">Enable</label>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="client-id" className="text-sm text-gray-600">
                  Client ID
                </label>
                <Input id="client-id" placeholder="Enter your client ID" />
              </div>
              <div className="space-y-2">
                <label htmlFor="client-secret" className="text-sm text-gray-600">
                  Client Secret
                </label>
                <Input id="client-secret" type="password" placeholder="Enter your client secret" />
              </div>
              <div className="space-y-2">
                <label htmlFor="callback-url" className="text-sm text-gray-600">
                  Callback URL (for OAuth)
                </label>
                <Input id="callback-url" defaultValue="https://ravenbank.communicate.so/auth/v1/callback" readOnly />
              </div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <Button variant="link" className="text-blue-600 p-0 h-auto" asChild>
                <a href="#" className="flex items-center gap-2">
                  Documentation
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <div className="space-x-3">
                <Button variant="outline">Cancel</Button>
                <Button>Connect</Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="tally" className="border rounded-lg">
          <AccordionTrigger className="px-4 hover:no-underline [&[data-state=open]]:rounded-t-lg [&[data-state=open]]:rounded-b-none">
            <div className="flex items-center gap-4 w-full">
              <Image
                src={tally}
                alt="Tally"
                width={24}
                height={24}
                className="rounded"
              />
              <span className="flex-1 text-left">Tally</span>
              <span className="text-sm text-gray-500 font-medium mr-4">Disabled</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="border-t p-4 space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="tally-enable" />
              <label htmlFor="tally-enable">Enable</label>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="salesforce" className="border rounded-lg">
          <AccordionTrigger className="px-4 hover:no-underline [&[data-state=open]]:rounded-t-lg [&[data-state=open]]:rounded-b-none">
            <div className="flex items-center gap-4 w-full">
              <Image
                src={salesforce}
                alt="Salesforce"
                width={24}
                height={24}
                className="rounded"
              />
              <span className="flex-1 text-left">Salesforce</span>
              <span className="text-sm text-green-600 font-medium mr-4">Enabled</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="border-t p-4 space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="salesforce-enable" />
              <label htmlFor="salesforce-enable">Enable</label>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="database" className="border rounded-lg">
          <AccordionTrigger className="px-4 hover:no-underline [&[data-state=open]]:rounded-t-lg [&[data-state=open]]:rounded-b-none">
            <div className="flex items-center gap-4 w-full">
              <Image
                src={database}
                alt="Database"
                width={24}
                height={24}
                className="rounded"
              />
              <span className="flex-1 text-left">Database</span>
              <span className="text-sm text-gray-500 font-medium mr-4">Disabled</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="border-t p-4 space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="database-enable" />
              <label htmlFor="database-enable">Enable</label>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

