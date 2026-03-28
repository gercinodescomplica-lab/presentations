'use client'
import { motion } from 'framer-motion'
import React from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit'
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-[#3B82F6] hover:bg-[#2563EB] text-white border border-transparent shadow-sm',
  secondary:
    'bg-[#1C1C1F] hover:bg-[#27272A] text-[#FAFAFA] border border-[rgba(255,255,255,0.1)]',
  ghost:
    'bg-transparent hover:bg-[rgba(255,255,255,0.06)] text-[#8B8B8E] hover:text-[#FAFAFA] border border-transparent',
  danger:
    'bg-transparent hover:bg-[rgba(239,68,68,0.1)] text-red-400 hover:text-red-300 border border-transparent',
}

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-3 py-1.5 text-xs rounded-lg font-medium',
  md: 'px-4 py-2 text-sm rounded-xl font-medium',
  lg: 'px-6 py-3 text-base rounded-xl font-semibold',
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ duration: 0.15 }}
      className={[
        'inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer select-none',
        variantClasses[variant],
        sizeClasses[size],
        disabled ? 'opacity-40 cursor-not-allowed pointer-events-none' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </motion.button>
  )
}
