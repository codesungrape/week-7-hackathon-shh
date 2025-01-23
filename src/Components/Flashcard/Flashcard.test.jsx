import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Flashcard from './Flashcard';

describe('Flashcard Component', () => {
  it('renders the passed value', () => {
    const mockValue = "Test Question";
    render(<Flashcard value={mockValue} handleClick={() => {}} />);
    
    const flashcardElement = screen.getByRole('region');
    expect(flashcardElement).toHaveTextContent(mockValue);
  });

  it('calls handleClick when clicked', () => {
    // Create a mock function
    const mockHandleClick = vi.fn();
    
    render(<Flashcard value="Test" handleClick={mockHandleClick} />);
    
    const flashcardElement = screen.getByRole('region');
    
    // Simulate a click
    fireEvent.click(flashcardElement);
    
    // Verify the mock function was called
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });
});