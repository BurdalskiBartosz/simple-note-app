/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as IndexImport } from './routes/index'
import { Route as AppProtectedImport } from './routes/app/_protected'
import { Route as AppProtectedIndexImport } from './routes/app/_protected/index'
import { Route as AppProtectedNotesImport } from './routes/app/_protected/notes'

// Create Virtual Routes

const AppImport = createFileRoute('/app')()

// Create/Update Routes

const AppRoute = AppImport.update({
  id: '/app',
  path: '/app',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AppProtectedRoute = AppProtectedImport.update({
  id: '/_protected',
  getParentRoute: () => AppRoute,
} as any)

const AppProtectedIndexRoute = AppProtectedIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AppProtectedRoute,
} as any)

const AppProtectedNotesRoute = AppProtectedNotesImport.update({
  id: '/notes',
  path: '/notes',
  getParentRoute: () => AppProtectedRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/app': {
      id: '/app'
      path: '/app'
      fullPath: '/app'
      preLoaderRoute: typeof AppImport
      parentRoute: typeof rootRoute
    }
    '/app/_protected': {
      id: '/app/_protected'
      path: '/app'
      fullPath: '/app'
      preLoaderRoute: typeof AppProtectedImport
      parentRoute: typeof AppRoute
    }
    '/app/_protected/notes': {
      id: '/app/_protected/notes'
      path: '/notes'
      fullPath: '/app/notes'
      preLoaderRoute: typeof AppProtectedNotesImport
      parentRoute: typeof AppProtectedImport
    }
    '/app/_protected/': {
      id: '/app/_protected/'
      path: '/'
      fullPath: '/app/'
      preLoaderRoute: typeof AppProtectedIndexImport
      parentRoute: typeof AppProtectedImport
    }
  }
}

// Create and export the route tree

interface AppProtectedRouteChildren {
  AppProtectedNotesRoute: typeof AppProtectedNotesRoute
  AppProtectedIndexRoute: typeof AppProtectedIndexRoute
}

const AppProtectedRouteChildren: AppProtectedRouteChildren = {
  AppProtectedNotesRoute: AppProtectedNotesRoute,
  AppProtectedIndexRoute: AppProtectedIndexRoute,
}

const AppProtectedRouteWithChildren = AppProtectedRoute._addFileChildren(
  AppProtectedRouteChildren,
)

interface AppRouteChildren {
  AppProtectedRoute: typeof AppProtectedRouteWithChildren
}

const AppRouteChildren: AppRouteChildren = {
  AppProtectedRoute: AppProtectedRouteWithChildren,
}

const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/app': typeof AppProtectedRouteWithChildren
  '/app/notes': typeof AppProtectedNotesRoute
  '/app/': typeof AppProtectedIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/app': typeof AppProtectedIndexRoute
  '/app/notes': typeof AppProtectedNotesRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/app': typeof AppRouteWithChildren
  '/app/_protected': typeof AppProtectedRouteWithChildren
  '/app/_protected/notes': typeof AppProtectedNotesRoute
  '/app/_protected/': typeof AppProtectedIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/login' | '/app' | '/app/notes' | '/app/'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/login' | '/app' | '/app/notes'
  id:
    | '__root__'
    | '/'
    | '/login'
    | '/app'
    | '/app/_protected'
    | '/app/_protected/notes'
    | '/app/_protected/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LoginRoute: typeof LoginRoute
  AppRoute: typeof AppRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LoginRoute: LoginRoute,
  AppRoute: AppRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/login",
        "/app"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/app": {
      "filePath": "app",
      "children": [
        "/app/_protected"
      ]
    },
    "/app/_protected": {
      "filePath": "app/_protected.tsx",
      "parent": "/app",
      "children": [
        "/app/_protected/notes",
        "/app/_protected/"
      ]
    },
    "/app/_protected/notes": {
      "filePath": "app/_protected/notes.tsx",
      "parent": "/app/_protected"
    },
    "/app/_protected/": {
      "filePath": "app/_protected/index.tsx",
      "parent": "/app/_protected"
    }
  }
}
ROUTE_MANIFEST_END */
