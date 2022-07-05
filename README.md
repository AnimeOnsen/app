# app

Desktop application

### Description

AnimeOnsen desktop application for Windows

| Host    | Support |
| ------- | ------- |
| Windows | ✔       |
| Linux   | ❌      |
| Mac     | ❌      |

#### Notes:

-   This is currently in beta, report any issues or bugs [here](https://github.com/AnimeOnsen/app/issues)
-   App currently supports the following hosts: Windows
-   Compiled binaries is not signed, you might experience issues when running or installing

### Configuration

-   No configuration support as of last commit

### Installation (Setup)

1. Download the latest setup binary `AnimeOnsen_setup.exe` in releases
2. Run the setup binary

### Installation (Manual/Portable)

1. Build the application
2. Copy the contents of `./out/AnimeOnsen-win32-x64` and extract to a suitable location
3. Run the application `{AnimeOnsen-win32-x64}/AnimeOnsen.exe`

### Build

-   Node.js v16 or greater is required

1. Install required packages `npm install`
2. Build the application binaries `npm run serve`
    - This both builds the TypeScript files and binaries in one command, run `npm run make` to compile binaries separately
3. Run the installer `./out/make/squirrel.windows/x64/AnimeOnsen_setup.exe`
    - Installation path is `%LOCALAPPDATA%/AnimeOnsen` by default
