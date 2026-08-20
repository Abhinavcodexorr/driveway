import { PageShell } from '@/components/layout';
import Link from 'next/link';

export default async function ThankYou() {
    return (
        <PageShell showGetInTouch>
             <div className='lg:mt-16 pt-16 lg:pt-24 pb-20 lg:pb-32 px-4 lg:px-44 w-full flex flex-col justify-center items-center gap-4 bg-white'>
                <h1 className='lg:text-[40px] text-[26px] text-center font-semibold text-gray-900'>Thank you for submitting your form!</h1>
                <h3 className='lg:text-[24px] text-[20px] text-center font-medium text-gray-600'>We respond within 2 Business Hours.</h3>
                <div className='mt-6'>
                  <Link href={"/"} className='inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-[#1451b5] bg-[#1451b5] px-8 py-3 text-base font-semibold text-white transition-transform duration-300 hover:scale-[1.03] hover:opacity-90 cursor-pointer'>
                    Go Back to Home Page
                  </Link>
                </div>
            </div>
        </PageShell>
    );
}
