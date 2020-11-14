import { render, screen } from '@testing-library/react'
import App from '../../src/Components/App'

test('Home Page', () => {
    render(<App />)
    expect(screen.getByText(/Fencer Game/i)).toBeInTheDocument()
});
