import * as React from 'react';
import { html } from 'react-strict-dom';

export default function App() {
  return (
    <html.div style={tw('flex items-center justify-center h-screen bg-black')}>
      <html.div style={tw('text-white')}>
        react-strict-dom + tailwind ❤️
      </html.div>
    </html.div>
  );
}
