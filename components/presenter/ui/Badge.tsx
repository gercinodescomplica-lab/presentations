'use client'
import React from 'react'

interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'info' | 'danger'
  children: React.ReactNode
  className?: string
}

const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
  default:
    'bg-[rgba(255,255,255,0.08)] text-[#8B8B8E] border border-[rgba(255,255,255,0.1)]',
  success:
    'bg-[rgba(34,197,94,0.12)] text-[#22C55E] border border-[rgba(34,197,94,0.2)]',
  warning:
    'bg-[rgba(245,158,11,0.12)] text-[#F59E0B] border border-[rgba(245,158,11,0.2)]',
  info:
    'bg-[rgba(59,130,246,0.12)] text-[#3B82F6] border border-[rgba(59,130,246,0.2)]',
  danger:
    'bg-[rgba(239,68,68,0.12)] text-red-400 border border-[rgba(239,68,68,0.2)]',
}

export function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium',
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  )
}
