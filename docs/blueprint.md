# **App Name**: Accus Solutions

## Core Features:

- Slide-based Navigation System: Implement a full-screen slide navigation, controlled by a hamburger menu, enabling smooth transitions between main application sections without traditional scrolling.
- Responsive Header and Menu: A fixed header at the top of the viewport, featuring the brand logo ('Accus') and a hamburger icon to toggle a full-screen overlay navigation menu with site links.
- Dynamic Section Content Display: Render distinct, full-screen content for each of the five application sections (Home, Services, Projects, About Us, Contact) with section-specific layouts and interactive elements.
- Interactive Contact Form: A functional contact form on the 'CONTACTO' slide, including input fields for user information, checkboxes, a submission button, and frontend validation (alert on submit).
- Themed UI Elements: Consistent application of the defined primary color for key UI elements like buttons, borders, and accents to maintain brand identity and visual hierarchy throughout the application.

## Style Guidelines:

- Primary Color: A rich, bold red (#AE1E24) to represent power, energy, and professionalism, used for header background, button fills, and key accents. This color evokes a sense of established expertise in engineering.
- Background Color: A very subtle, warm off-white (#F3F1F1) for the main content areas, providing a clean canvas that complements the primary red without stark contrast, contributing to an elegant and uncluttered aesthetic.
- Accent Color: A soft, muted rose (#D65798), chosen to be analogous to the primary red. This color will be used sparingly for subtle highlights or interactive states, adding a touch of modernity and approachability while maintaining a sophisticated palette.
- Body and Headline Font: 'system-ui' (sans-serif) for all textual content. This choice prioritizes modern readability, ensuring a crisp and native look across various devices and operating systems.
- Use minimalist, crisp outline icons. Specifically, a simple '☰' hamburger icon for menu toggling, and clean visual indicators where relevant, such as for service cards or client logos.
- Implement full-screen vertical slides ('min-h-screen') that replace each other on navigation, removing traditional scroll between main sections. Content within each slide should be vertically centered by default, allowing internal scroll (overflow-y: auto) if content exceeds screen height. The header is fixed at the top for persistent access to navigation.
- Subtle visual transitions, such as a fade or a soft slide, when switching between full-screen slides to enhance the user experience. Interactive elements like buttons and form inputs should include light hover effects or state changes for better feedback.