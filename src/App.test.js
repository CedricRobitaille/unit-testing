import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import App from './App';
import Nav from "./components/Nav/Nav"

afterEach(cleanup)

test('Render Navigation', () => {
  const app = render(<App />);
  const linkElement = app.getByRole('navigation');
  expect(linkElement).toBeInTheDocument();
});



test('Handle Navigation Change', () => {
  
  const app = render(<App />)
  const button = app.getByText("create")

  fireEvent.click(button); 

  const header = app.getByText("Create a new todo");
  expect(header).toBeInTheDocument();

})



test('Render Create Form', () => {

  const app = render(<App />)
  const button = app.getByText("create")

  fireEvent.click(button); 

  const formElement = app.getByRole('form', { name: /create form/i})
  expect(formElement).toBeInTheDocument();
})