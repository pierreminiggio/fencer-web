import { render, screen } from '@testing-library/react'
import App from '../../Components/App'

test('Home Page', () => {
    render(<App />)
    expect(screen.getByText(/Fencer Game/i)).toBeInTheDocument()
});
