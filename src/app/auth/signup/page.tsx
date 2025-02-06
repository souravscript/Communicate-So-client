import smallVectorTwo from '@/../public/small-vector-two.png'
import bigVectorTwo from '@/../public/big-vector-two.png'
import bigVectorOne from '@/../public/big-vector-one.png'
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
        

    <div className="flex justify-center items-center w-[373px] relative left-[-8rem] top-[10rem]">
      <div className="auth w-full max-w-sm">
      <div className="flex justify-center my-5 items-center gap-2 pl-2">
        <Image src={logo} alt="logo" className="h-8 w-8" />
        <span className="font-inter font-bold text-primaryTextColor text-lg">
          Communicate.so
        </span>
      </div>
        <Card className="mx-auto">
          <CardHeader className="space-y-3">
            <CardTitle className="text-2xl flex justify-center font-bold">Lets get you started 🚀</CardTitle>
            <CardDescription className='flex justify-center text-sm opacity-55'>Fill in the details over here</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="fullName">Fullname</Label>
                <Input id="fullName" type="text" placeholder="Eg. Raven" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Typing...|" required />
              </div>
              <div className="space-y-2 border-b-0 border-gray-100 pb-4">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder='Add your password' required />
              </div>

              <Button type="submit" className="w-full">
                Signup Now →
              </Button>
            </div>
          </CardContent>

          <Link href="/auth/signin"><p className='opacity-55 text-sm mt-[-9px] mb-3 mx-6 flex justify-center items-center'>Have an account?  <span className='text-base opacity-100 text-black font-semibold ml-1'>Login Now</span></p></Link>
        </Card>
      </div>
    </div>
            <div className='fixed top-[-0.8rem] right-2'>
                <Image src={smallVectorTwo} alt="logo" className="w-[230px] h-[120px] rotate-12"/>
            </div>

            <div className='fixed top-[-1rem] right-96'>
                <Image src={bigVectorOne} alt="logo" className="w-[360px] h-[460px]"/>
            </div>
            <div className='fixed bottom-[-1rem] right-0'>
                <Image src={bigVectorTwo} alt="logo" className="w-[280px] h-[340px]"/>
            </div>
        </>
    )
}