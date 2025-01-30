import { createClient } from '@/utils/supabase/server'
import React from 'react'
import { Button } from '../ui/button'
import { signOut } from '@/app/[locale]/(no-layout)/sign-in/actions'

export default async function SignOut() {
    const supabase = await createClient()
    const {
        data: { user },
    } = await supabase.auth.getUser()

    return (
        <>
            <form action={signOut} className='flex items-center gap-2'>
                {user !== null ? (
                    <>
                        <p>{user?.user_metadata.email}</p>
                        <Button className='w-full rounded-md bg-[#630A00] px-3 py-2 text-xl uppercase text-white hover:bg-[#630a00d2] md:w-auto'>
                            Log out
                        </Button>
                    </>
                ) : (
                    ''
                )}
            </form>
        </>
    )
}
