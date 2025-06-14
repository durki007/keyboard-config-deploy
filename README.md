# Keyboard Configurator

## Project Setup
1. Install dependencies
```shell
pnpm install
```


2. Create `.env` file
```shell
cp .env.exmaple .env
```


3. Start the app
```shell
pnpm run dev
```

## Supported functionalities
1. Coloring components of keyboard - logic is generated form Verge3d puzzles
2. Selecting custom color - user can select a custom color from color selector tool
3. History of recent used colors (last 4)
4. Example color pallets - user can seek for inspiration among predefined color pallets
5. Selecting keyboard model from dropdown list, keyboard models are associated to some color sets predefined in `.env` file. - **This feature is currently not working as expected**


## Further improvements
1. Adding new keyboard models
2. Fixing support for switching keyboard model
3. Adding next features f.e.:
   - snapshot of configuration 
   - rollback to stock version
   - color picker tool for picking color of keyboard component from the screen
   - saving configuration in browser storage