# Calculadora en JavaScript

## 📋 Descripción

Una calculadora web simple construida con **HTML, CSS y JavaScript vanilla**. Permite realizar operaciones matemáticas básicas de forma intuitiva y con validaciones de entrada.

## ✨ Características

- ✅ Operaciones básicas: suma, resta, multiplicación y división
- ✅ Interfaz limpia y responsiva
- ✅ Validación de entradas del usuario
- ✅ Manejo de errores (ej: división por cero)
- ✅ Diseño centrado y moderno
- ✅ Código JavaScript modular y bien organizado

## 🎯 Funcionalidades

### Operaciones soportadas:

- **Suma** (+)
- **Resta** (-)
- **Multiplicación** (\*)
- **División** (/) - con validación contra división por cero

### Validaciones:

- Verifica que los operandos sean números válidos
- Verifica que el operador sea válido
- Maneja división por cero mostrando un mensaje de error
- Mensajes de error en rojo para mejor visualización

## 📁 Estructura del proyecto

```
calculadora/
├── index.html      # Estructura HTML de la interfaz
├── iindex.js       # Lógica JavaScript de la calculadora
└── README.md       # Este archivo
```

## 🚀 Cómo usar

1. Abre el archivo `index.html` en tu navegador
2. Ingresa el primer número en el campo "Primer número"
3. Selecciona la operación deseada (+, -, \*, /)
4. Ingresa el segundo número en el campo "Segundo número"
5. Haz clic en el botón "Calcular"
6. El resultado se mostrará debajo del botón

## 💻 Requisitos

- Un navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere instalación de dependencias

## 📝 Ejemplo de uso

**Entrada:**

```
Primer número: 10
Operación: +
Segundo número: 5
```

```
num1 + num2 = resultado
10 + 5 = 15

Resultado: 15
```

## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura y semántica
- **CSS3**: Estilos y diseño responsivo
- **JavaScript (Vanilla)**: Lógica de cálculo y validaciones
- **DOM API**: Manipulación del documento

## 📌 Notas técnicas

- Usa un objeto para mapear operaciones en lugar de switch statements (código más limpio)
- Implementa funciones helper (`mostrarResultado`, `mostrarError`) para separación de responsabilidades
- Convierte las entradas a números usando `Number()` para operaciones matemáticas
- Valida los operadores contra un array de operadores válidos

## 🤝 Contribuciones

Este es un proyecto educativo. Siéntete libre de mejorarlo o adaptarlo a tus necesidades.

## 📄 Licencia

Proyecto de aprendizaje - Código libre para usar y modificar.

---