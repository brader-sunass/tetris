# 🎮 Tetris en React con TypeScript

Un clon del clásico juego Tetris desarrollado con React, TypeScript y Vite. Este proyecto incluye características modernas como pruebas unitarias, un sistema de puntuación y una interfaz de usuario intuitiva.

## 🚀 Características

- **Juego de Tetris completo** con mecánicas clásicas
- **Interfaz de usuario limpia y responsiva**
- **Sistema de puntuación** con niveles
- **Controles intuitivos** (teclado)
- **Rotación bidireccional** (horario y antihorario)
- **Caída rápida (soft drop)**
- **Pruebas unitarias** con Jest
- **Tipado estático** con TypeScript

## 🎯 Controles

- **← →**: Mover pieza izquierda/derecha
- **↑**: Rotar en sentido horario
- **Z**: Rotar en sentido antihorario
- **↓**: Caída rápida (mantener presionado)

## 🛠️ Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/brader-sunass/tetris.git
   cd tetris
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. Abre tu navegador en [http://localhost:5173](http://localhost:5173)

## 🧪 Ejecutar pruebas

```bash
npm test
# o
yarn test
```

## 🏗️ Estructura del proyecto

```
src/
├── components/         # Componentes de React
│   ├── Board.tsx      # Tablero del juego
│   ├── GameInfo.tsx   # Panel de información
│   └── Piece.tsx      # Componente de pieza
├── engine/            # Lógica del juego
│   ├── board.ts       # Manejo del tablero
│   ├── collisions.ts  # Detección de colisiones
│   ├── game.ts        # Lógica principal del juego
│   ├── rotation.ts    # Lógica de rotación
│   └── tetromino.ts   # Definición de piezas
├── hooks/
│   └── useGameEngine.ts # Hook personalizado para el juego
└── styles/            # Componentes estilizados
```

## 📦 Dependencias principales

- React 18
- TypeScript
- Vite
- Styled Components
- Jest (para pruebas)

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Créditos

Desarrollado con ❤️ por [Tu Nombre]
