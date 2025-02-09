"use client";
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
import { z } from "zod";
import { useCallback, useState } from 'react';
import { supabase } from '@/lib/supabase';


interface FormData {
  fullName: string;
  email: string;
  password: string;
}
interface SupabaseError {
  message: string;
}
const signupSchema = z.object({
  fullName: z.string().min(2, "Full Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
export default function Auth(){
  
  const [formData, setFormData] = useState<FormData>({ fullName: "", email: "", password: "" });
  const [error, setError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  


  const handleSignup = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (isSubmitting) return;

      setError("");
      setIsSubmitting(true);

      const parsedData = signupSchema.safeParse(formData);
      if (!parsedData.success) {
        setError(parsedData.error.errors[0].message);
        setIsSubmitting(false);
        return;
      }

      const { data, error }: { data: any; error: SupabaseError | null } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        const errorMessage = error.message.includes("already registered")
          ? "This email is already registered. Please log in."
          : "Signup failed. Please try again later.";
        setError(errorMessage);
      } else {
        console.log("User signed up:", data);
      }

      setIsSubmitting(false);
    },
    [formData, isSubmitting]
  );
    return (
        <>
        

    <div className="flex justify-center items-center w-[600px] z-20 relative top-[8rem]">
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
                <Input 
                  id="fullName"
                  type="text"
                  placeholder="Eg. Raven"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} 
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="Typing...|"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                  required
                />
              </div>
              <div className="space-y-2 border-b-0 border-gray-100 pb-4">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password"
                  type="password"
                  placeholder='Add your password'
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
                  required />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button 
                type="submit"
                className="w-full"
                onClick={handleSignup}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing Up..." : "Signup Now →"}
              </Button>
            </div>
          </CardContent>

          <Link href="/auth/signin">
          <p className='text-[#343B46] overflow-hidden text-sm my-3 mx-6 flex justify-center '>Have an account?  <span className='text-sm opacity-100 text-[#343B46] font-bold ml-1'>Login Now</span></p></Link>
        </Card>
      </div>
    </div>
    <div className='fixed top-[-0.8rem] md:top-[-1.5rem] lg:top-[-2rem] xl:top-[-3rem] 2xl:top-[-4rem] 
                    z-10 right-2 md:right-6 lg:right-10 xl:right-16 2xl:right-24'>
        <Image src={smallVectorTwo} alt="logo" className="w-[230px] h-[120px] rotate-12"/>
    </div>

    <div className='fixed top-[-1rem] md:top-[-2rem] lg:top-[-3rem] xl:top-[-4rem] 2xl:top-[-5rem] 
                    z-10 right-20 md:right-40 lg:right-96 xl:right-[32rem] 2xl:right-[40rem]'>
        <Image src={bigVectorOne} alt="logo" className='w-[360px] h-[460px]'/>
    </div>

    <div className='fixed bottom-[-1rem] md:bottom-[-2rem] lg:bottom-[-3rem] xl:bottom-[-4rem] 2xl:bottom-[-5rem] 
                    z-10 right-0 md:right-6 lg:right-20 xl:right-32 2xl:right-40'>
        <Image src={bigVectorTwo} alt="logo" className="w-[280px] h-[340px]"/>
    </div>

            
        </>
    )
}