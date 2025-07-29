'use client'
import React from 'react';
import Button from './index';

const ButtonDemo = () => {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold mb-8">Button Component Demo</h1>
      
      {/* Variants */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </div>

      {/* States */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">States</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
          <Button isLoading>Loading</Button>
        </div>
      </div>

      {/* With Icons */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">With Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button leftIcon={<span>←</span>}>Back</Button>
          <Button rightIcon={<span>→</span>}>Next</Button>
          <Button leftIcon={<span>📧</span>} rightIcon={<span>→</span>}>
            Send Email
          </Button>
        </div>
      </div>

      {/* Full Width */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Full Width</h2>
        <div className="space-y-2">
          <Button fullWidth>Full Width Button</Button>
          <Button variant="outline" fullWidth>
            Full Width Outline
          </Button>
        </div>
      </div>

      {/* Interactive Examples */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Interactive Examples</h2>
        <div className="flex flex-wrap gap-4">
          <Button 
            onClick={() => alert('Button clicked!')}
            variant="primary"
          >
            Click Me
          </Button>
          <Button 
            onClick={() => alert('Form submitted!')}
            variant="secondary"
            leftIcon={<span>✓</span>}
          >
            Submit Form
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonDemo; 