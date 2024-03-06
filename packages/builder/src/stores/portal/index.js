import { writable } from "svelte/store"

export { organisation } from "./organisation"
export { users } from "./users"
export { admin } from "./admin"
export { appsStore, enriched } from "./apps"
export { email } from "./email"
export { auth } from "./auth"
export { oidc } from "./oidc"
export { templates } from "./templates"
export { licensing } from "./licensing"
export { groups } from "./groups"
export { plugins } from "./plugins"
export { backups } from "./backups"
export { environment } from "./environment"
export { menu } from "./menu"
export { auditLogs } from "./auditLogs"
export { features } from "./features"
export { themeStore } from "./theme"
export { temporalStore } from "./temporal"
export { navigation } from "./navigation"

export const sideBarCollapsed = writable(false)
