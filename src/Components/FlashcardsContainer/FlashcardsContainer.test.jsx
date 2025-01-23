// FlashcardsContainer.test.jsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FlashcardsContainer from './FlashcardsContainer';

describe('FlashcardsContainer Component', () => {
  it('renders six Flashcard components', () => {
    render(<FlashcardsContainer />);
    
    // Use getByText or getAllByText instead
    const flashcards = screen.getAllByText('Why do you capitalise the function names in React?');
    expect(flashcards.length).toBe(6);
  });

  it('toggles between question and answer when clicked', () => {
    render(<FlashcardsContainer />);
    
    // Get the first flashcard by text
    const firstFlashcard = screen.getAllByText('Why do you capitalise the function names in React?')[0];
    
    // Initial state should be the question
    expect(firstFlashcard).toHaveTextContent('Why do you capitalise the function names in React?');
    
    // Click to toggle to answer
    fireEvent.click(firstFlashcard);
    expect(firstFlashcard).toHaveTextContent('In React, function names are capitalized because React uses the capitalization to distinguish between regular HTML elements');
    
    // Click again to toggle back to question
    fireEvent.click(firstFlashcard);
    expect(firstFlashcard).toHaveTextContent('Why do you capitalise the function names in React?');
  });
});
