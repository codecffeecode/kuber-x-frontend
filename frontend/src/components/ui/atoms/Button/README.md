# Button Component

A comprehensive, reusable Button component built with React and TypeScript that can be used throughout your project.

## Features

- **Multiple Variants**: primary, secondary, outline, ghost, destructive, link
- **Different Sizes**: sm, md, lg, xl
- **Loading State**: Built-in loading spinner
- **Icon Support**: Left and right icons
- **Full Width Option**: For responsive layouts
- **Accessibility**: Proper focus states and ARIA attributes
- **TypeScript Support**: Fully typed with proper interfaces
- **Customizable**: Extends HTML button attributes

## Installation

The component requires the following dependencies:
```bash
npm install clsx tailwind-merge
npm install -D tailwindcss postcss autoprefixer
```

## Usage

### Basic Usage

```tsx
import Button from '@/components/ui/atoms/Button';

// Basic button
<Button>Click me</Button>

// With variant
<Button variant="primary">Primary Button</Button>

// With size
<Button size="lg">Large Button</Button>
```

### All Props

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  children: React.ReactNode;
  // ... all standard HTML button attributes
}
```

### Examples

#### Variants
```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>
<Button variant="link">Link Style</Button>
```

#### Sizes
```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

#### Loading State
```tsx
<Button isLoading>Loading...</Button>
```

#### With Icons
```tsx
<Button leftIcon={<span>←</span>}>Back</Button>
<Button rightIcon={<span>→</span>}>Next</Button>
<Button leftIcon={<span>📧</span>} rightIcon={<span>→</span>}>
  Send Email
</Button>
```

#### Full Width
```tsx
<Button fullWidth>Full Width Button</Button>
```

#### Disabled State
```tsx
<Button disabled>Disabled Button</Button>
```

#### With Event Handlers
```tsx
<Button 
  onClick={() => console.log('Clicked!')}
  onMouseEnter={() => console.log('Hovered!')}
>
  Interactive Button
</Button>
```

#### Custom Styling
```tsx
<Button className="bg-purple-600 hover:bg-purple-700">
  Custom Styled Button
</Button>
```

## Styling

The component uses Tailwind CSS classes and can be customized by:

1. **Passing className prop**: Add custom classes
2. **Modifying the component**: Edit the variant and size classes
3. **Using CSS custom properties**: Override specific styles

## Accessibility

- Proper focus states with ring indicators
- Disabled state handling
- Loading state with spinner
- Keyboard navigation support
- Screen reader friendly

## Best Practices

1. **Use semantic variants**: Choose the variant that matches the button's purpose
2. **Provide loading feedback**: Use `isLoading` for async operations
3. **Include icons for clarity**: Use left/right icons to improve UX
4. **Handle disabled states**: Disable buttons when actions aren't available
5. **Use appropriate sizes**: Match button size to context and importance

## Demo

See `ButtonDemo.tsx` for a complete demonstration of all features. 