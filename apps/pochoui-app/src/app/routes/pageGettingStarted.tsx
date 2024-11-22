export const PageGettingStarted = () => {
  return (
    <div className="min-h-screen bg-base-200 p-8">
      <div className="prose max-w-4xl mx-auto flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Getting Started with <span className="text-secondary">pochoUI</span></h1>

        <h2 className="text-2xl font-bold">Installation</h2>
        <p>
          PochoUI is distributed as individual packages for each component, allowing you to install only what you need.
          Each component can be installed separately using npm or yarn:
        </p>

        <div className="mockup-code">
          <pre data-prefix="$"><code>npm install @pochoui/date-picker</code></pre>
          <pre data-prefix="$"><code>npm install @pochoui/[component-name]</code></pre>
        </div>

        <h2 className="text-2xl font-bold">Styling System</h2>
        <p>
          PochoUI is built on top of Tailwind CSS, providing a utility-first CSS framework.
          Make sure you have Tailwind CSS installed in your project:
        </p>

        <div className="mockup-code">
          <pre data-prefix="$"><code>npm install -D tailwindcss</code></pre>
        </div>

        <h2 className="text-2xl font-bold">Usage Example</h2>
        <p>Here's how to use a PochoUI component in your project:</p>

        <div className="mockup-code">
            <pre><code>{`import { DatePicker } from '@pochoui/date-picker';

  const MyComponent = () => {
    return (
      <DatePicker
        className="border rounded-lg p-2"
        onChange={(date) => console.log(date)}
      />
    );
  };`}</code></pre>
        </div>
      </div>
    </div>
  );
};

