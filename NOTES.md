# NextAuth Setup

- npm i next-auth
- create api/auth/[...nextauth]/route.ts
- this is the route that next-auth will use to handle authentication from providers, i.e. Google, GitHub etc. Whomever you choose to use.
- shared session state, creating a sessionprovider wrapper for layout page
- create your login button system using nextauth hooks
- create your api/auth/[...nextauth]/callback.ts??
- think about what routes or pages are protected etc.

# Drizzle Setup

# Zod Setup

# tRPC Setup

# TailwindCSS plugins - merge/clsx/classnames etc.

## Custom tailwind variables

# Notes on components:

# TODO:

## General

- utils, tests, auth, typesafety of all database interactions/endpoints

## endpoints

- need to think about search params: subjects, tags, title, date etc.
- need to think about pagination maybe?
- relations between tags and subjects with posts tables

## db

- add test data folder
- improve scripts for dev data
- integrate setup.sql file into migrator file for one strip up and down migrations

## URGENT

- get login page bones up and running with form and next-auth
- work out credentials login (for me, pw/name) and then the google/github for people to comment
