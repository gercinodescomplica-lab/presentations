'use client'
import { useState, useCallback, useRef } from 'react'
import { ChatMessage, PresentationConfig, ThemeId, StyleId, AnimationStyle } from '../lib/types'
import { getChatFlow, CHAT_FLOW_STEPS, ChatFlowStep } from '../lib/chat-flow'

const DEFAULT_CONFIG: PresentationConfig = {
  themeId: 'dark-minimal',
  style: 'modern',
  animations: 'fade',
  refinedText: false,
  showSpeakerNotes: false,
}

function makeUserMsg(content: string): ChatMessage {
  return { id: crypto.randomUUID(), role: 'user', content, type: 'text' }
}

export function useChat(slideCount: number, title: string) {
  const flowMessages = useRef<ChatMessage[]>(getChatFlow(slideCount, title))
  const [messages, setMessages] = useState<ChatMessage[]>([
    flowMessages.current[0],
    flowMessages.current[1],
  ])
  const [currentStep, setCurrentStep] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [config, setConfig] = useState<Partial<PresentationConfig>>(DEFAULT_CONFIG)

  const sendMessage = useCallback(
    (value: string) => {
      const step: ChatFlowStep = CHAT_FLOW_STEPS[currentStep]
      const userMsg = makeUserMsg(value)

      let configUpdate: Partial<PresentationConfig> = {}

      switch (step) {
        case 'theme':
          configUpdate = { themeId: value as ThemeId }
          break
        case 'style':
          configUpdate = { style: value as StyleId }
          break
        case 'animations':
          configUpdate = { animations: value as AnimationStyle }
          break
        case 'refinedText':
          configUpdate = { refinedText: value === 'light' || value === 'presentation' }
          break
        case 'showSpeakerNotes':
          configUpdate = { showSpeakerNotes: value === 'yes' }
          break
        case 'complete':
          setIsComplete(true)
          break
      }

      setConfig((prev) => ({ ...prev, ...configUpdate }))

      const nextStep = currentStep + 1
      const nextAssistantMsg = flowMessages.current[nextStep + 1]

      setMessages((prev) => {
        const updated = [...prev, userMsg]
        if (nextAssistantMsg) {
          updated.push(nextAssistantMsg)
        }
        return updated
      })

      if (nextStep >= CHAT_FLOW_STEPS.length - 1) {
        setIsComplete(true)
      } else {
        setCurrentStep(nextStep)
      }
    },
    [currentStep]
  )

  const fullConfig: PresentationConfig = {
    ...DEFAULT_CONFIG,
    ...config,
  }

  return { messages, currentStep, isComplete, config: fullConfig, sendMessage }
}
