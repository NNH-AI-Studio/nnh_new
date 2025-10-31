import { createClient } from "@/lib/supabase/client"
import { toast } from "sonner"

export interface AuthError {
  message: string
  code?: string
  status?: number
}

/**
 * Check if an error is a session expired error
 */
export function isSessionExpiredError(error: any): boolean {
  if (!error) return false
  
  return (
    error.code === 'session_expired' ||
    error.status === 400 ||
    error.message?.includes('expired') ||
    error.message?.includes('Invalid Refresh Token') ||
    error.message?.includes('Session Expired') ||
    error.message?.includes('Inactivity')
  )
}

/**
 * Handle auth errors consistently across the app
 */
export async function handleAuthError(error: any, redirectToLogin = true): Promise<void> {
  console.error('Auth error:', error)
  
  if (isSessionExpiredError(error)) {
    // Clear any stale auth data
    const supabase = createClient()
    await supabase.auth.signOut()
    
    // Show user-friendly message
    toast.error('Your session has expired. Please log in again.')
    
    // Redirect to login if requested
    if (redirectToLogin && typeof window !== 'undefined') {
      window.location.href = '/auth/login'
    }
  } else if (error.message) {
    // Show other error messages
    toast.error(error.message)
  }
}

/**
 * Wrap async functions to handle auth errors
 */
export function withAuthErrorHandling<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  redirectToLogin = true
): T {
  return (async (...args: Parameters<T>) => {
    try {
      return await fn(...args)
    } catch (error) {
      await handleAuthError(error, redirectToLogin)
      throw error
    }
  }) as T
}
