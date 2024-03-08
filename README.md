# VertiMenu

VertiMenu is a customizable JavaScript plugin that creates a stylish vertical menu with support for submenus. It offers a sleek and modern design, making it suitable for various web applications and projects.


![Animation](assets/Vertimenu.gif)

## Features

- Vertical menu layout
- Submenu support
- Customizable styling with SCSS variables
- Smooth transitions and animations
- Compatible with popular icon libraries (e.g., Ionicons)


## Usage

```html
<nav-vert id="nav-vert">
        <nav-item>
            <nav-icon>You're home icon</nav-icon>
            <nav-label class="current">Home</nav-label>
        </nav-item>
        <nav-item>
            <nav-icon>You're about icon</nav-icon>
            <nav-label>About</nav-label>
        </nav-item>
        <sub-nav>
            <nav-item>
                <nav-icon>You're about icon</nav-icon>
                <nav-label>About 1</nav-label>
            </nav-item>

            <nav-item>
                <nav-icon>You're about icon</nav-icon>
                <nav-label>About 2</nav-label>
            </nav-item>

            <nav-item>
                <nav-icon>You're about icon</nav-icon>
                <nav-label>About 3</nav-label>
            </nav-item>
            ....
        </sub-nav>
        ....
</nav-vert>
```

## Installation (Developers)

To install all the necessary node modules in case of further development  

```bash
npm install
```

## Credits

- Icon library: [Ionicons](https://ionicons.com/)
- Font: Poppins

