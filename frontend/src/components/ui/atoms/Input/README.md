# Input Component

A comprehensive, reusable Input component built with React and TypeScript that can be used throughout your project.

## Features

- **Multiple Variants**: default, outline, filled, unstyled
- **Different Sizes**: sm, md, lg, xl
- **Icon Support**: Left and right icons
- **Error Handling**: Built-in error states and messages
- **Labels & Helper Text**: Optional labels and helper text
- **Full Width Option**: For responsive layouts
- **Accessibility**: Proper ARIA attributes and focus states
- **TypeScript Support**: Fully typed with proper interfaces
- **Customizable**: Extends HTML input attributes

## Usage

### Basic Usage

```tsx
import Input from '@/components/ui/atoms/Input';

// Basic input
<Input placeholder="Enter text" />

// With label
<Input label="Email" type="email" placeholder="Enter your email" />

// With error state
<Input 
  label="Password" 
  type="password" 
  error 
  errorMessage="Password is required" 
/>
```

### All Props

```tsx
interface InputProps {
  variant?: 'default' | 'outline' | 'filled' | 'unstyled';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  helperText?: string;
  required?: boolean;
  // ... all standard HTML input attributes
}
```

### Examples

#### Variants
```tsx
<Input variant="default" placeholder="Default input" />
<Input variant="outline" placeholder="Outline input" />
<Input variant="filled" placeholder="Filled input" />
<Input variant="unstyled" placeholder="Unstyled input" />
```

#### Sizes
```tsx
<Input size="sm" placeholder="Small input" />
<Input size="md" placeholder="Medium input" />
<Input size="lg" placeholder="Large input" />
<Input size="xl" placeholder="Extra large input" />
```

#### With Icons
```tsx
<Input 
  leftIcon={<span>🔍</span>} 
  placeholder="Search..." 
/>
<Input 
  leftIcon={<span>📧</span>} 
  rightIcon={<span>✓</span>} 
  placeholder="Email with icons" 
/>
```

#### Error States
```tsx
<Input 
  label="Email" 
  error 
  errorMessage="Please enter a valid email" 
  placeholder="Enter email" 
/>
```

#### With Labels and Helper Text
```tsx
<Input 
  label="Password" 
  type="password" 
  helperText="Password must be at least 8 characters" 
  placeholder="Enter password" 
/>
```

#### Required Fields
```tsx
<Input 
  label="Username" 
  required 
  placeholder="Enter username" 
/>
```

#### Full Width
```tsx
<Input 
  label="Full Width Input" 
  fullWidth 
  placeholder="This input takes full width" 
/>
```

#### Different Input Types
```tsx
<Input type="text" placeholder="Text input" />
<Input type="email" placeholder="Email input" />
<Input type="password" placeholder="Password input" />
<Input type="number" placeholder="Number input" />
<Input type="date" />
<Input type="time" />
<Input type="url" placeholder="https://example.com" />
<Input type="tel" placeholder="Phone number" />
```

#### Disabled State
```tsx
<Input 
  label="Disabled Input" 
  disabled 
  placeholder="This input is disabled" 
/>
```

#### With Event Handlers
```tsx
<Input 
  label="Interactive Input" 
  onChange={(e) => console.log(e.target.value)} 
  onFocus={() => console.log('Focused!')} 
  onBlur={() => console.log('Blurred!')} 
  placeholder="Type something..." 
/>
```

#### Custom Styling
```tsx
<Input 
  className="border-purple-500 focus:border-purple-600" 
  placeholder="Custom styled input" 
/>
```

## Form Integration

### Controlled Input
```tsx
const [value, setValue] = useState('');

<Input 
  value={value} 
  onChange={(e) => setValue(e.target.value)} 
  placeholder="Controlled input" 
/>
```

### Form Validation
```tsx
const [email, setEmail] = useState('');
const [emailError, setEmailError] = useState('');

const validateEmail = (value: string) => {
  if (!value.includes('@')) {
    setEmailError('Please enter a valid email');
  } else {
    setEmailError('');
  }
};

<Input 
  label="Email" 
  value={email} 
  onChange={(e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  }} 
  error={!!emailError} 
  errorMessage={emailError} 
  placeholder="Enter email" 
/>
```

## Styling

The component uses Tailwind CSS classes and can be customized by:

1. **Passing className prop**: Add custom classes
2. **Modifying the component**: Edit the variant and size classes
3. **Using CSS custom properties**: Override specific styles

### Custom Variants
```tsx
// Add custom variant classes to the component
const variantClasses = {
  default: 'border border-gray-300 bg-white text-gray-900 focus:border-blue-500 focus:ring-blue-500',
  outline: 'border-2 border-gray-300 bg-transparent text-gray-900 focus:border-blue-500 focus:ring-blue-500',
  filled: 'border-0 bg-gray-100 text-gray-900 focus:bg-white focus:ring-blue-500',
  unstyled: 'border-0 bg-transparent text-gray-900 focus:ring-blue-500',
  // Add your custom variant here
  custom: 'border-2 border-purple-300 bg-purple-50 text-purple-900 focus:border-purple-500 focus:ring-purple-500'
};
```

## Accessibility

- Proper focus states with ring indicators
- Error state handling with ARIA attributes
- Label association with input IDs
- Helper text and error message association
- Screen reader friendly
- Keyboard navigation support

## Best Practices

1. **Always provide labels**: Use the `label` prop for better accessibility
2. **Handle errors gracefully**: Use `error` and `errorMessage` props for validation
3. **Use appropriate input types**: Choose the right `type` for your data
4. **Include helper text**: Use `helperText` for additional guidance
5. **Mark required fields**: Use the `required` prop for mandatory fields
6. **Use icons for clarity**: Add left/right icons to improve UX
7. **Handle disabled states**: Disable inputs when they're not available

## Demo

See `InputDemo.tsx` for a complete demonstration of all features including:
- All variants and sizes
- Icon examples
- Error states
- Form validation
- Different input types
- Complete form example

## Integration with Forms

The Input component works seamlessly with form libraries like:
- React Hook Form
- Formik
- Final Form
- Native HTML forms

Example with React Hook Form:
```tsx
import { useForm } from 'react-hook-form';

const { register, handleSubmit, formState: { errors } } = useForm();

<form onSubmit={handleSubmit(onSubmit)}>
  <Input 
    label="Email" 
    error={!!errors.email} 
    errorMessage={errors.email?.message} 
    {...register('email', { 
      required: 'Email is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Invalid email address'
      }
    })} 
  />
</form>
``` 