import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

/**
 * React bileşeni için temel testler
 * Bu test dosyası App bileşeninin temel işlevlerini test eder
 */

test('renders app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/React Kullanıcı Giriş Uygulaması/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders input field and button', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Buraya bir şeyler yazın.../i);
  const buttonElement = screen.getByRole('button', { name: /Ekle/i });
  
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('button is disabled when input is empty', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /Ekle/i });
  
  expect(buttonElement).toBeDisabled();
});

test('button is enabled when input has value', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Buraya bir şeyler yazın.../i);
  const buttonElement = screen.getByRole('button', { name: /Ekle/i });
  
  fireEvent.change(inputElement, { target: { value: 'Test giriş' } });
  
  expect(buttonElement).not.toBeDisabled();
});

test('adds entry on form submission', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Buraya bir şeyler yazın.../i);
  const buttonElement = screen.getByRole('button', { name: /Ekle/i });
  
  fireEvent.change(inputElement, { target: { value: 'Test giriş' } });
  fireEvent.click(buttonElement);
  
  expect(screen.getByText(/Test giriş/)).toBeInTheDocument();
  expect(screen.getByText(/Girilen Veriler \(1\)/)).toBeInTheDocument();
});

test('clears input after submission', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Buraya bir şeyler yazın.../i);
  const buttonElement = screen.getByRole('button', { name: /Ekle/i });
  
  fireEvent.change(inputElement, { target: { value: 'Test giriş' } });
  fireEvent.click(buttonElement);
  
  expect(inputElement.value).toBe('');
});

test('shows empty state when no entries', () => {
  render(<App />);
  const emptyStateElement = screen.getByText(/Henüz hiç veri girilmedi/i);
  
  expect(emptyStateElement).toBeInTheDocument();
});