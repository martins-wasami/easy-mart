import { describe, expect, test, vi } from "vitest";
import { render, screen } from '@testing-library/react';
import { Button } from "./Button";
import styles from './Button.module.scss';

describe('Button', () => {
  test('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  test('applies default variant classes', () => {
    render(<Button>test</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(styles.md, styles.rounded, styles.primary);
  });

  test('applies custom size, form, and theme classes', () => {
    render(<Button size="lg" form="pill" theme="outline">test</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(styles.lg, styles.pill, styles.outline);
  });

  test('merges in a custom className', () => {
    render(<Button className="my-custom-class">test</Button>);
    expect(screen.getByRole('button')).toHaveClass('my-custom-class');
  });

  test('is disabled when disabled prop is true', () => {
    render(<Button disabled>test</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass(styles.disabled);
  });

  test('is not disabled by default', () => {
    render(<Button>test</Button>);
    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  test('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>test</Button>);
    screen.getByRole('button').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when disabled', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick} disabled>test</Button>);
    screen.getByRole('button').click();
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('forwards native button attributes via ...rest', () => {
    render(<Button type="submit" data-testid="submit-btn">test</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toHaveAttribute('data-testid', 'submit-btn');
  });
});