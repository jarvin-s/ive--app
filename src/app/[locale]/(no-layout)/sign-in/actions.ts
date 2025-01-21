'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function signIn(formData: FormData) {
    const supabase = await createClient()

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        return { error: 'Could not authenticate user' }
    }

    revalidatePath('/', 'layout')
    redirect('home')
}

export async function signUp(formData: FormData) {
    const supabase = await createClient()

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        email_confirm: true
    }

    if (!data.email || !data.password) {
        console.error('Email and password are required.')
        return
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        console.error(error)
    }

    revalidatePath('/', 'layout')
    redirect('home')
}

export async function signOut() {
    const supabase = await createClient()
    await supabase.auth.signOut()
    revalidatePath('/', 'layout')
}