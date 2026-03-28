import { Presentation } from './types'

const STORAGE_KEY = 'md-presenter-projects'

export function generateId(): string {
  return crypto.randomUUID()
}

export function getProjects(): Presentation[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed as Presentation[]
  } catch {
    return []
  }
}

export function getProject(id: string): Presentation | null {
  const projects = getProjects()
  return projects.find((p) => p.id === id) ?? null
}

export function saveProject(presentation: Presentation): void {
  if (typeof window === 'undefined') return
  try {
    const projects = getProjects()
    const existingIdx = projects.findIndex((p) => p.id === presentation.id)
    const updated = { ...presentation, updatedAt: new Date().toISOString() }

    if (existingIdx >= 0) {
      projects[existingIdx] = updated
    } else {
      projects.unshift(updated)
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
  } catch (err) {
    console.error('Failed to save project:', err)
  }
}

export function deleteProject(id: string): void {
  if (typeof window === 'undefined') return
  try {
    const projects = getProjects()
    const filtered = projects.filter((p) => p.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
  } catch (err) {
    console.error('Failed to delete project:', err)
  }
}
