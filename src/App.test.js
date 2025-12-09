import { render, screen, fireEvent, cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
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

  // forms are not accessible by getByRole
  // To access it, we need a aria-label to query with
  const formElement = app.getByRole('form', { name: /create form/i })
  expect(formElement).toBeInTheDocument();
})



test('Render Create Form', async () => {

  const app = render(<App />)
  const button = app.getByText("create")

  fireEvent.click(button);

  const formInput = app.getByRole('textbox', { name: /todo name/i })
  const referenceText = "Example todo"

  await userEvent.type(formInput, referenceText)
  expect(formInput).toHaveValue(referenceText);
})



test('Change Page on Form Submit', async () => {
  const todoText = "Example todo"

  const app = render(<App />)
  const button = app.getByText("create")

  fireEvent.click(button);

  const formInput = app.getByRole('textbox', { name: /todo name/i })
  await userEvent.type(formInput, todoText)

  const formElement = app.getByRole('form', { name: /create form/i })
  fireEvent.submit(formElement);

  const header = app.getByText("Home");
  expect(header).toBeInTheDocument()

})