import { redirect } from 'next/navigation'

/**
 * Root route → redirect to the first available deck.
 * Add new routes here as additional decks are created.
 */
export default function Home() {
  redirect('/digital-twin')
}
