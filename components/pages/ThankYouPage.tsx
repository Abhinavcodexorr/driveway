import { PageShell } from '@/components/layout';
import Link from 'next/link';

export default async function ThankYou() {
    return (
        <PageShell showGetInTouch>
             <div className='lg:mt-16 pt-16 lg:pt-24 pb-20 lg:pb-32 px-4 lg:px-44 w-full flex flex-col justify-center items-center gap-4 bg-white'>
                <h1 className='lg:text-[40px] text-[26px] text-center font-semibold text-gray-900'>Thank you for submitting your form!</h1>
                <h3 className='lg:text-[24px] text-[20px] text-center font-medium text-gray-600'>We respond within 2 Business Hours.</h3>
                <div className='mt-6'>
                  <Link href={"/"} className='text-white cursor-pointer text-base hover:opacity-90 transition-opacity rounded-full border-2 border-brand py-3 px-[30px] block text-center bg-brand-btn-gradient'>
                    Go Back to Home Page
                  </Link>
                </div>
            </div>
        </PageShell>
    );
}
