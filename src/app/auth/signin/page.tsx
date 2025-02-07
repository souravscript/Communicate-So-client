"use client";
import vectorOne from '@/../public/small-vector-one.png'
import bigVectorOne from '@/../public/big-vector-two.png'
import logo from "@/../public/Shape.png";
import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Auth(){
    return (
        <>
        

    <div className="flex justify-center items-center w-[600px] relative top-[10rem]">
      <div className="auth w-full max-w-sm">
      <div className="flex justify-center my-5 items-center gap-2 pl-2">
        <Image src={logo} alt="logo" className="h-8 w-8" />
        <span className="font-inter font-bold text-primaryTextColor text-lg">
          Communicate.so
        </span>
      </div>
        <Card className="mx-auto">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl flex justify-center font-bold">Hey there👋🏻</CardTitle>
            <CardDescription className='flex justify-center text-sm opacity-55'>Add your credentials to get inside</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Typing..." required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>

             <Link href="/forgot-password">
                <p className='opacity-55 text-sm my-4 '>Don&quot;t remember password?</p>
             </Link>
              <Button type="submit" className="w-full">
                Login Now →
              </Button>
            </div>
          </CardContent>

          <Link href="/auth/signup"><p className='opacity-55 text-sm my-3 mx-6'>Don&quot;t have an account? <span className='text-base opacity-100 text-black font-bold'>Create new</span></p></Link>
        </Card>
        <div className="flex justify-between mt-4 text-sm text-blue-500">
        </div>
      </div>
    </div>
  

            <div className='fixed top-[-1rem] right-[32rem]'>
                <Image src={vectorOne} alt="logo" className="w-[240px] h-[320px]"/>
            </div>
            <div className='fixed bottom-[-1rem] right-20'>
                <Image src={bigVectorOne} alt="logo" className="w-[380px] h-[540px]"/>
            </div>
        </>
    )
}