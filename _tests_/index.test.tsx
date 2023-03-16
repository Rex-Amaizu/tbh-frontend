import { render, screen } from '@testing-library/react';
import Banner from '../components/index/banner';

describe('Banner', () => {
  it('renders a button', () => {
    render(<Banner />);

    const button = screen.findByRole('button', {
      name: /Open Business Account arrow\./i,
    });

    expect(button).toBeInTheDocument();
  });
});
