import { afterEach, expect } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { toHaveNoViolations } from 'jest-axe';
import 'jest-styled-components';

expect.extend(toHaveNoViolations);

afterEach(() => {
  cleanup();
});
