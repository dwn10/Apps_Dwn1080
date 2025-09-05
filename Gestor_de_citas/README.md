# App de Recordatorios de Contratos 📅

Una hermosa e intuitiva aplicación en React Native para gestionar recordatorios de contratos con notificaciones automáticas por correo electrónico.

## Características ✨

- **Gestión de Contratos**: Crea, edita y haz seguimiento de contratos con fechas de inicio y finalización
- **Recordatorios Inteligentes**: Configura múltiples opciones de recordatorio (1 día, 1 semana, 1 mes, 2 meses o 3 meses antes del vencimiento)
- **Vista de Calendario**: Interfaz visual de calendario para ver todos tus contratos de un vistazo
- **Autenticación de Usuario**: Integración de inicio de sesión con Google (UI lista)
- **Gestión de Perfil**: Perfil de usuario completo y configuración de ajustes
- **Notificaciones por Correo Electrónico**: Sistema de recordatorios automáticos por correo electrónico (backend listo)
- **Multiplataforma**: Funciona en iOS, Android y Web

## Inspiración de Diseño 🎨

- **Calendly** - Interfaz limpia para la gestión de citas
- **Google Calendar** - Navegación de calendario intuitiva
- **Notion** - Diseño organizado y minimalista
- **iOS Health** - Hermosos degradados y esquemas de color

## Pila de Tecnologías 🛠️

- **Framework**: React Native con Expo
- **Navegación**: Expo Router (enrutamiento basado en archivos)
- **Lenguaje**: TypeScript
- **Estilo**: React Native StyleSheet
- **Íconos**: Lucide React Native
- **Gestión de Estado**: React Context con @nkzw/create-context-hook
- **Almacenamiento**: AsyncStorage para persistencia local
- **Manejo de Fechas**: API de fecha nativa de JavaScript

## Estructura del Proyecto 📁

app/
├── (tabs)/                 # Navegación por pestañas
│   ├── index.tsx           # Panel de control/Inicio
│   ├── calendar.tsx        # Vista de calendario
│   ├── add-contract.tsx    # Agregar nuevo contrato
│   └── profile.tsx         # Perfil de usuario
├── _layout.tsx             # Diseño raíz
├── login.tsx               # Pantalla de autenticación
├── edit-contract.tsx       # Editar contrato existente
├── notifications-settings.tsx
├── email-settings.tsx
├── general-settings.tsx
├── privacy-settings.tsx
└── help-support.tsx

components/
├── ContractCard.tsx        # Componente para mostrar contratos
└── ReminderSelector.tsx    # Selector de opciones de recordatorio

hooks/
├── auth-store.ts           # Estado de autenticación
└── contracts-store.ts      # Gestión de contratos

types/
└── contract.ts             # Definiciones de TypeScript

## Primeros Pasos 🚀

### Requisitos Previos

- Node.js (v18 o superior)
- Gestor de paquetes Bun
- Expo CLI
- Simulador de iOS (para desarrollo en iOS)
- Android Studio (para desarrollo en Android)

### Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd contract-reminder-app

4. Ejecutar en tu plataforma preferida:
   - Presiona `i` para el simulador de iOS
   - Presiona `a` para el emulador de Android
   - Presiona `w` para la Web
   - Escanea el código QR con la aplicación Expo Go para un dispositivo físico

## Pantallas de la aplicación 📱

### 🏠 Tablero
- Resumen de los próximos vencimientos de contratos
- Acceso rápido a los contratos recientes
- Hermoso diseño basado en tarjetas con degradados

### 📅 Calendario
- Vista de calendario mensual
- Indicadores visuales para las fechas de los contratos
- Navegación fácil entre meses

### ➕ Agregar Contrato
- Formulario sencillo para crear nuevos contratos
- Selectores de fecha con formato DD-MM-YYYY
- Múltiples opciones de recordatorio
- Validación de formulario

### 👤 Perfil
- Gestión de la información del usuario
- Navegación a la configuración
- Preferencias de la cuenta

### ⚙️ Configuración
- **Notificaciones**: Configura las preferencias de recordatorio
- **Correo electrónico**: Configuración de notificaciones por correo electrónico (backend listo)
- **General**: Preferencias y valores predeterminados de la aplicación
- **Privacidad**: Configuración de privacidad y seguridad
- **Ayuda y soporte**: Documentación y soporte

## Implementación de características clave 🔧

### Gestión de fechas
- Selector de fecha personalizado con icono de calendario
- Visualización en formato DD-MM-YYYY
- Fecha actual como predeterminada
- UX intuitiva con calendario expandible

### Sistema de recordatorios
- Opciones de recordatorio flexibles (de 1 día a 3 meses)
- Múltiples recordatorios por contrato
- Indicadores visuales de recordatorio

### Gestión de estado
- Estado basado en Context con TypeScript
- Persistencia en almacenamiento local
- Actualizaciones optimistas

### Diseño responsivo
- Compatibilidad multiplataforma
- Manejo de áreas seguras
- Diseños adaptables

## Esquema de color 🎨

- **Azul primario**: #007AFF (estilo iOS)
- **Degradados**: Transiciones suaves de azul a morado
- **Tarjetas**: Sombras sutiles y esquinas redondeadas
- **Texto**: Alto contraste para la accesibilidad
- **Fondos**: Blancos limpios y grises claros

## Integración de backend (Lista) 🔌

La aplicación está diseñada para integrarse con un servicio de backend para:

- Autenticación de usuario a través de Google OAuth
- Sincronización de datos de contratos
- Recordatorios automáticos por correo electrónico
- Notificaciones push
- Copia de seguridad y restauración de datos

*Nota: La implementación del backend requiere una configuración separada*

## Notas de desarrollo 📝

### Compatibilidad web
- Soporte completo para React Native Web
- Manejo de código específico de la plataforma
- Diseño responsivo para navegadores de escritorio

### Seguridad de tipo
- Configuración estricta de TypeScript
- Definiciones de tipo exhaustivas
- Verificación de tipo en tiempo de ejecución cuando sea necesario

### Rendimiento
- Re-renderizaciones optimizadas con React.memo
- Actualizaciones de estado eficientes
- Carga diferida (Lazy loading) cuando corresponda

## Contribución 🤝

1. Bifurca el repositorio (Fork the repository)
2. Crea una rama de característica (`git checkout -b feature/amazing-feature`)
3. Confirma tus cambios (`git commit -m 'Add amazing feature'`)
4. Envía a la rama (`git push origin feature/amazing-feature`)
5. Abre una solicitud de extracción (Pull Request)

## Licencia 📄

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## Soporte 💬

Para soporte y preguntas:
- Crea un "issue" en el repositorio
- Revisa la sección de Ayuda y Soporte en la aplicación
- Revisa la documentación

---

**Construido con ❤️ usando React Native y Expo**